

import "./App.css";
import { Provider } from "react-redux";
import myStore from "./store";
import ShoppingCart from "./component/cart";


function App() {
  return (
    <Provider store={myStore}>
      <ShoppingCart />
      <div>BUTTONS</div>
    </Provider>
  );
}

export default App;
