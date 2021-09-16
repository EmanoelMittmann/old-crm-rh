import React from "react";
import Routes from './routes/index';
import { Provider } from "react-redux"

import store from "../src/redux/store"

const App = () => (
   <Provider store={store}>
      <Routes/>
   </Provider>
);


export default App;
