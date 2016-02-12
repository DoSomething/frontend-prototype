const React = require('react');
const { Component } = React;

import { Container, ContainerBlock } from '../patterns/Container';

class PlanIt extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // "Items Needed" section
        let itemsNeeded = this.props.data.items_needed ? (
          <ContainerBlock layout="half">
              <h4>Stuff You Need</h4>
              <ul className="list -compacted">
                  { this.props.data.items_needed.map((item) => <li>{item}</li>) }
              </ul>
          </ContainerBlock>
        ) : null;

        // "Time And Place"
        let timeAndPlace = this.props.data.time_and_place ? (
          <ContainerBlock layout="half">
              <h4>Time & Place</h4>
              <p>
                  { this.props.data.time_and_place }
              </p>
          </ContainerBlock>
        ) : null;

        return (
          <Container padded={true}>
              <ContainerBlock layout="narrow">
                  <h1>Step Two: Plan It</h1>
                  <p>Lorem ipsum dolor sit amet.</p>
              </ContainerBlock>
              {itemsNeeded}
              {timeAndPlace}
              {this.props.children}
          </Container>
        );
    }
}

export default PlanIt;
