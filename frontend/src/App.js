import React, {useEffect, useState} from "react";
import './App.css';
import {Header} from "./Components/Header/header";
import axios from "axios"
function App() {

    const [example,setExample] = useState(null);

    useEffect(()=> {
        axios.get('http://HERC01:5000').then((res) => {
            console.log(res.data)
            setExample(res.data)
        }).catch(err => console.error(err))
    },[])

    return (
        <React.Fragment>
            <div className={'sticky-lg-top'}>
                <Header/>
            </div>
            <div className={'App'}>
                {example}
            </div>
        </React.Fragment>
  );
}

export default App;
