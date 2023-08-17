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
  {id: 1, writer: '야놀자', time: '19:35',title: 'Hi', context: '여름 휴가 초특가!! 국내여행 강원도, 부산, 제주.............................', },
  {id: 2, writer: '야놀자', time: '19:35',title: 'Hi', context: '여름 휴가 초특가!! 국내여행 강원도, 부산, 제주.............................', },
  {id: 3, writer: '야놀자', time: '19:35',title: 'Hi', context: '여름 휴가 초특가!! 국내여행 강원도, 부산, 제주.............................', },
  {id: 4, writer: '야놀자', time: '19:35',title: 'Hi', context: '여름 휴가 초특가!! 국내여행 강원도, 부산, 제주.............................', },
  {id: 5, writer: '야놀자', time: '19:35',title: 'Hi', context: '여름 휴가 초특가!! 국내여행 강원도, 부산, 제주.............................', },
  {id: 6, writer: '야놀자', time: '19:35',title: 'Hi', context: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', },
  {id: 7, writer: '야놀자', time: '19:35',title: 'Hi', context: '여름 휴가 초특가!! 국내여행 강원도, 부산, 제주...', },
  {id: 8, writer: '야놀자', time: '19:35',title: 'Hi', context: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', },
  {id: 9, writer: '야놀자', time: '19:35',title: 'Hi', context: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', },
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