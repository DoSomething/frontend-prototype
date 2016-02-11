const React = require('react');
const classNames = require('classnames');
const { Component, PropTypes } = React;

export class Container extends Component {
    render() {
        return (
          <div className={classNames('container', {'-padded': this.props.padded})}>
              <div className="wrapper">
                  {this.props.children}
              </div>
          </div>
        );
    }
}

Container.PropTypes = {
    padded: PropTypes.boolean,
};

export class ContainerBlock extends Component {
    render() {
        const classes = classNames('container__block', {
            '-narrow': this.props.layout === 'narrow',
            '-half': this.props.layout === 'half'
        });

        return (
          <div className={classes}>
              {this.props.children}
          </div>
        );
    }
}

export default Container;
