import React, { Component } from 'react';
import { Container } from 'reactstrap';
import QuizCategory from './Quiz/QuizCategory';

export class QuizSideBarLayout extends Component {
    static displayName = QuizSideBarLayout.name;

  render () {
    return (
        <div>
            <QuizCategory />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
