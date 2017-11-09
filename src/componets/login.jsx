import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import {Form, FormGroup, Col, FormControl, ControlLabel, Checkbox, Button} from 'react-bootstrap';

import '../stylesheets/login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        let email = ReactDOM.findDOMNode(this.refs.email).value;
        let password = ReactDOM.findDOMNode(this.refs.password).value;

        let user = _.find(this.props.users, {email, password});

        if (user) this.props.loginSucceeded(user);
    }

    render() {
        return (
            <div className="login-form">
                <Form role="login" onSubmit={this.handleSubmit}>
                    <h1 className="login-form-header">POST</h1>
                    <FormControl ref="email" type="email" placeholder="Email"/>
                    <FormControl ref="password" type="password" placeholder="Password"/>
                    <Button bsStyle="primary" type="submit" block>Sign in</Button>
                    <div>
                        <a href="#">Create account</a> or <a href="#">reset password</a>
                    </div>
                </Form>
                <div className="form-links">
                    <a href="#">localhost:8080</a>
                </div>
            </div>
        )
    }
}

export default Login;