import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hello, Learner!</h1>
        <p>Welcome to Perspectify</p>

            <form action="User" method="post">
                <input type="text" name="mail" placeholder="Email"></input>
            <input type="password" name="hashpassword" placeholder="Password"></input>
                <input type="submit" value="Login"></input>
            </form>
        </div>
    );
  }
}
