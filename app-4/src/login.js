import React, { Component } from 'react'

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    usernameHandler = val => {
        this.setState({username: val})
    }

    passwordHandler = val => {
        this.setState({password: val})
    }

    alertLogin = () => {
        return alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render () {
        return (
            <div>
                <input onChange={e => this.usernameHandler(e.target.value)}></input>
                <input onChange={e => this.passwordHandler(e.target.value)}></input>
                <button onClick={this.alertLogin}>Login</button>
            </div>
        )
    }
}

export default Login;