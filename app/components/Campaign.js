const React = require('react');
const { Component } = React;

import Header from '../patterns/Header';
import { Container, ContainerBlock } from '../patterns/Container';

import KnowIt from './KnowIt';
import PlanIt from './PlanIt';
import Visualization from './Visualization';

class Campaign extends Component {
    constructor(props) {
        super(props);

        this.state = {
            path: 0,
        };
    }

    render() {
        return (
          <div>
              <Header title={this.props.title} subtitle={this.props.tagline} />
              <KnowIt data={this.props}>
                  <ContainerBlock layout="center">
                      <Visualization />
                  </ContainerBlock>
              </KnowIt>
              <PlanIt data={this.props} />
          </div>
        );
    }
}

export default Campaign;
