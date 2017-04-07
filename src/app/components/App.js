import React from "react";
import {connect} from "react-redux";

import {User} from "./User";
import {Root} from "./Root";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Root changeUsername={() => this.props.setName("Anna")}></Root>
                <User username={this.props.user.name}></User>
            </div>
        ); 
    }

}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
        math: state.math
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name
            });
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);