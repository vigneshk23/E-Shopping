import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./component/header/Header";
import Section from "./component/common/Section";
import {DataProvider} from "./component/common/Context";


class App extends React.Component{
  render() {
    return(
      <DataProvider>
      <div className="app">
        <Router>
        <Header />
        <Section />
        </Router>
      </div>
      </DataProvider>
      
    )
  }

}


export default App;