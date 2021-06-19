import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Header } from './UserPage/Header';

export class HeadLayout extends Component {
  static displayName = HeadLayout.name;

  render () {
    return (
        <div>
        <Header />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
