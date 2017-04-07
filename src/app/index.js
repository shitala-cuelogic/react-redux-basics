/*import React from "react";
import {render} from "react-dom";
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";


class App extends React.Component {
    render() {
    	console.log(browserHistory)
        return (
            <Router history={browserHistory}>
      			<Route path={"/"} component={Root}>
         			<IndexRoute component={Home}></IndexRoute>
         			<Route path="home" component={Home} />
         			<Route path="user" component={User} />
			    </Route>
   			</Router>
        );
    }
}

render(<App/>, window.document.getElementById("app"));*/

import { createStore } from "redux"; 

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD": 
            state = state + action.payload;
            break;
        case "SUBTRACT":
            state = state - action.payload;
            break;    
    }

    return state;
};

const store = createStore(reducer, 2);

store.subscribe(() => {
    console.log("STore Updated", store.getState());
})

store.dispatch({
    type: "ADD",
    payload: 2
});

store.dispatch({
    type: "ADD",
    payload: 2
});

store.dispatch({
    type: "SUBTRACT",
    payload: 2
});