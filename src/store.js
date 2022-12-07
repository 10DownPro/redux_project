

import { createStore } from "redux";
import { cartReducer } from "./reducers/cartReducer";

const myStore = createStore(cartReducer);

export default myStore;

