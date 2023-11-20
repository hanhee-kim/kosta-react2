//

export const initState = {
  id: "hong",
  nickname: "gildong",
  subject: "computer",
  grade: 1,
};

export const reducer = (state, action) => {
  switch (action.name) {
    case "id":
      //   console.log(action.value);
      //return에서 state를 사용하는 이유는 리듀서를 이용하여 변경된 최종 state의 값을 가져와서 변경해야 하기 때문!!!!
      return { ...state, id: action.value };
    // case nickname :
    //     return
    case "nickname":
      return { ...state, nickname: action.value };
    case "subject":
      return { ...state, subject: action.value };
    case "grade":
      return { ...state, grade: action.value };
    default:
      return state;
  }
};
