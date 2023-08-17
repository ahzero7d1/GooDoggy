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
  {id: 1, writer: '서아영', time: '2023-08-17',title: '이메일 보안 정보', context: '이메일에 실행 파일이 첨부되어 있다면.............................', },
  {id: 2, writer: '야놀자', time: '2023-08-17',title: '이메일 첨부 파일', context: '요즘에는 실행파일 뿐만 아니라.............................', },
  {id: 3, writer: '야놀자', time: '2023-08-16',title: 'Hi', context: '믿을 수 없는 첨부파일은 클릭 금지 입니다.', },
  {id: 4, writer: '야놀자', time: '2023-08-15',title: 'Hi', context: '메일 계정 비밀번호는 주기적으로 변경하세요!', },
  {id: 5, writer: '야놀자', time: '2023-08-15',title: 'Hi', context: '여름 휴가 초특가!! 국내여행 강원도, 부산, 제주.............................', },
  {id: 6, writer: '야놀자', time: '2023-08-14',title: 'Hi', context: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', },
  {id: 7, writer: '야놀자', time: '2023-08-13',title: 'Hi', context: '여름 휴가 초특가!! 국내여행 강원도, 부산, 제주...', },
  {id: 8, writer: '야놀자', time: '2023-08-12',title: 'Hi', context: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', },
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