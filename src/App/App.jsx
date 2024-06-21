import React, { Component } from 'react'
import InputBox from '../InputBox/InputBox'
import './App.css'

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <section>
                    <form>
                        <h1>Login</h1>
                        <InputBox label='Email' type='email' />
                        <InputBox label='Password' type='password' />
                        <div class="forget">
                            <label for=""><input type="checkbox" />Remember Me</label>&nbsp;&nbsp;
                            <a href="#">Forget Password</a>
                        </div>
                        <button>Log in</button>
                        <div class="register">
                            <p>Don't have a account <a href="#">Register</a></p>
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}
