import React, {useState} from "react";
import {Button} from "react-bootstrap";

const User = (props) =>{
    let eighteen = new Date(new Date() - 1000*60*60*24*365.25*18)
    let style;
    if(props.user.birthday.getTime() > eighteen.getTime()) {
        style={color:'red'}
    }else {
        style={}
    }
    console.log(eighteen)
    return(
        <div>
            <p style={style}>{props.user.username} - {props.user.birthday.toDateString()}</p>
        </div>
    )
}

const Display = () =>{
    const handleClick = ()=>{
        let newUsers = []
        let Age_min = 10;
        let Age_max = 80;
        for(let i = 0; i<100; i++ ){
            let random = Math.random()*(Age_max - Age_min)*1000*60*60*24*365 + Age_min*1000*60*60*24*365
            let now = new Date()
            let birthday = new Date(now-random)
            newUsers.push({
                username:`user${i}`,
                birthday: birthday
            })
        }
        setUsers(newUsers)
        console.log('clicked')
    }

    const [users, setUsers] = useState([])

    return(
        <React.Fragment>
            <Button variant={'warning'} onClick={()=>handleClick()}>Do Something</Button>
            {users.map((user, index)=><User key={index} user={user}/>)}
        </React.Fragment>
    )
}

export default Display