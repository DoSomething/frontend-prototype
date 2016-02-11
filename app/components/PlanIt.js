const React = require('react');
const { Component } = React;

import { Container, ContainerBlock } from '../patterns/Container';

class PlanIt extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // "Items Needed" section
        let itemsNeeded = null;
        if(this.props.data.items_needed) {

            itemsNeeded = (
              <ContainerBlock className="with-lists -compacted" layout="half">
                  <h4>Stuff You Need</h4>
                  { this.props.data.items_needed }
              </ContainerBlock>
            );
        }

        return (
          <Container padded={true}>
              <ContainerBlock layout="narrow">
                  <h1>Step Two: Plan It</h1>
                  <p>Lorem ipsum dolor sit amet.</p>
              </ContainerBlock>
              {itemsNeeded}
              {this.props.children}
          </Container>
        );
    }
}

export default PlanIt;
