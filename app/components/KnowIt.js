const React = require('react');
const { Component } = React;

import { Container, ContainerBlock } from '../patterns/Container';

class KnowIt extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Container padded={true}>
              <ContainerBlock layout="narrow">
                  <h1>Step One: Know It</h1>
              </ContainerBlock>
              <ContainerBlock layout="half">
                  <h3>The Problem</h3>
                  <div>{this.props.data.facts.problem}</div>
              </ContainerBlock>
              <ContainerBlock layout="half">
                  <h3>The Solution</h3>
                  <div>{this.props.data.solutions.copy.raw}</div>
              </ContainerBlock>
              {this.props.children}
          </Container>
        );
    }
}

export default KnowIt;
