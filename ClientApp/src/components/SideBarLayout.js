import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Category from './Courses/Category';

export class SideBarLayout extends Component {
    static displayName = SideBarLayout.name;

  render () {
    return (
        <div>
            <Category />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
