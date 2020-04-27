import React, { Component } from 'react';
import CakeContainer from "./CakeContainer";
import {Provider} from "react-redux";
import {store} from "./Redux/Store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <CakeContainer/>
      </div>
      </Provider>
    );
  }
}

export default App;