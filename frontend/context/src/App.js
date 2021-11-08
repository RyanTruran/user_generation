import React from "react";
import './App.css';
import {Header} from "./Components/Header/header";
import Display from "./Components/Display/Display";
function App() {

    return (
        <React.Fragment>
            <div className={'App-header'}>
                <Display/>
            </div>
        </React.Fragment>
  );
}

export default App;
