const SAVE_USER = "SAVE_USER";
const initialState = { user: { name: "ankush", city: "pathankot" } };
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const save_user = (userData) => ({ type: SAVE_USER, payload: userData });
