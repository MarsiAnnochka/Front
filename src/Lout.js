import './App.css'
import React from 'react'
import {Redirect} from 'react-router-dom'
class Lout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {logged: false}
    }
    componentDidMount() {
        fetch('/api/logout', {
            method: "post",
            headers: {'Content-Type': 'application/json'}
        }).then(res => {}).catch(e => {
            console.error((e))
        })
        this.setState({logged: true})
    }

    render() {
        if (this.state.logged) {
            return (<Redirect to="/auth"/>)
        }
        else {
            return (
                <div></div>
            )
        }
    }
}

export default Lout