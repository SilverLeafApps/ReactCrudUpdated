import React from "react";
import "./pagestyles/pagestyles.css";

import "bootstrap/dist/css/bootstrap.min.css"; //this is the magic line of code
import Button from 'react-bootstrap/Button';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'

import rootActions from '../ReduxCounter/actions/combinedActions'
import Contact from "./Contact";

function About() {

    const counter = useSelector(state => state.counter)
    const currentUser = useSelector(state => state.currentUser)
  
    const dispatch = useDispatch()

    const user = {name: "Baskar"}

    useEffect(() => { dispatch(rootActions.userActions.setUser(user))}, [])


    return (  
        <div className="pageHdrLight" style={{marginTop:"9.5vh"}}>
            <div>
              <h2> About - Redux Details</h2>
            </div>

            <div>
                {
                    <>
                        <h1>Counter: {counter}</h1>
                        <Button  variant="outline-success" onClick={() => dispatch(rootActions.counterActions.increment())}>Increase Counter</Button>
                        <Button variant="outline-primary" onClick={() => dispatch(rootActions.counterActions.decrement())}>Decrease Counter</Button>
                    </>
                }

                {
                    currentUser.loggedIn ? 
                    <>
                        <h1>Hello, {currentUser.user.name}</h1>
                        <Button variant="danger" onClick={() => dispatch(rootActions.userActions.logOut())}>Logout</Button>
                    </> 
                    : 
                    <>
                        <h1>Login</h1>
                        <Button variant="outline-success" onClick={() => dispatch(rootActions.userActions.setUser(user))}>Login as baskar</Button>
                    </>
                }
            </div>

            
        </div>
       );
}
export default About;