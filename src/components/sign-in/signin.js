import React from 'react';
import FormInput from '../form-input/form-input.component';
import './signin.styles.scss';

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({[name]: value})
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    name="email"
                     type="email"
                      value={this.state.email} 
                      handleChange={this.handleChange} 
                      required
                      label="email" />

                

                    <FormInput
                     name="password"
                      type="password"
                       value={this.state.email}
                        handleChange={this.handleChange}
                        label="password"
                         required />

                

                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        )
    }
}

export default SignIn;