import axios from "axios";

const initialState = {
  purchases: [],
  budgetLimit: null,
  loading: false,
};

export default function reducer(state, action) {
  state = initialState;
  return state;
}
