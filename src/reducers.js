import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      const newUser = {
        id: uuidv4(),
        name: action.name
      };
      action.setBalance(action.balance + 10);
      return [...state, newUser];

    case "fuel":
      const currentBalance = action.balance;
      if (currentBalance >= 50) {
        action.setBalance(currentBalance - 50);
      }
      return state;

    default:
      return state;
  }
};

export default reducer;
