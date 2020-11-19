import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Update from '../pages/UpdatePost'
import Post from "./components/Post";
import ImageUpload from "./components/ImageUpload";

class Router extends Component {
    constructor() {
        super()
    }
}

componentDidMount() {
    this.verifyTokenValid()
    this.setState({pageLoading: false})
}

verifyTokenValid = async () => {
    const token = localStorage.getItem('token')
    if (token) {
        try {
            const session = await __CheckSession()
            console.log('session', session)
            this.setState(
                {
                    currentUser: session.user,
                    authenticated: true
                },
                () => this.props.history.push('/profile')
            )
        } catch (error) {
            this.setState({ currentUser: null, authenticated: false })
            localStorage.clear()
        }
    }
}
  
toggleAuthenticated = (value, user, done) => {
    this.setState({ authenticated: value, currentUser: user }, () => done())
  }

render() {
    return (
        <ma
    )
  }