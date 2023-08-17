import * as React from 'react';
import MainContainer from './navigation/MainContainer';

const reducer = (state, action)=>{
  let newState = [];
  switch(action.type){
    case "INIT":{
      return action.data;
    }
    case "CREATE":{
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE":{
      newState = state.filter((it)=>it.id !== action.targetId);
      break;
    }
    case "EDIT":{
      newState = state.map((it)=>it.id===action.data.id?{...action.data}:it);
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const stateContext = React.createContext();
export const dispatchContext = React.createContext();

const dummyData = [
  {id: 1, writer: '서아영', time: '2023-08-17',title: '이메일 보안 정보', context: '이메일에 실행 파일이 첨부되어 있다면 항상 주의해야합니다.', },
  {id: 2, writer: '문현솔', time: '2023-08-17',title: '이메일 첨부 파일', context: '요즘에는 실행파일 뿐만 아니라 인공지능을 사용하는 피싱 이메일이 생겨나고 있습니다.', },
  {id: 3, writer: '나혜인', time: '2023-08-16',title: '신뢰할 수 없는 첨부 파일', context: '믿을 수 없는 첨부파일은 클릭 금지 입니다. 꼭 주의하세요.', },
  {id: 4, writer: '장하은', time: '2023-08-15',title: '메일 계정 관련', context: '메일 계정 비밀번호는 주기적으로 변경하세요!', },
  {id: 5, writer: '김태진', time: '2023-08-15',title: '스피어 피싱을 아시나요?', context: '스피어 피싱은 일반적인 피싱 공격과 다르게 특정 조직을 대상으로 시도되는 이메일이나 전자통신 사기를 말하며, 주로 허가받지 않은 사용자가 기밀 데이터에 접근하여 정보를 탈취하는 것을 목적으로 합니다.', },
  {id: 6, writer: '무지개', time: '2023-08-14',title: '악성 이메일에서 찾을 수 있는 의심스러운 요소', context: '비정상적인 URL, 개인정보 요청, 링크 클릭 유도 등', },
  {id: 7, writer: '먹구름', time: '2023-08-13',title: '이메일 보안에서 가장 중요한 것', context: '보안 소프트웨어를 설치하고 업데이트 해야 합니다.', },
]

function App() {
  const [data, dispatch]=React.useReducer(reducer, dummyData);

  const dataId = React.useRef(0);

  //CREATE
  const onCreate=(writer, title,context,time)=>{
    // const date = new Date().getTime();
    dispatch(
      {
        type: "CREATE",
        data: {
          writer,
          title,
          context,
          id:dataId.current,
          time
        }
      }
    )
    dataId.current+=1;
    // dispatch([dataId,...data]);
  };

  const onRemove=(targetId)=>{
    dispatch({type:"REMOVE",targetId});
  }

  const onEdit = (targetId,title, context)=>{
    const time = new Date().getTime();
    dispatch({
      type: "EDIT",
      data:{
        id: targetId,
        title,
        context,
        time
      }

    })
  }

  return(
    <stateContext.Provider value={data}>
      <dispatchContext.Provider value={{
        onCreate, onEdit, onRemove,}}>
      <MainContainer/>
      </dispatchContext.Provider>
    </stateContext.Provider>
  );
}

export default App;