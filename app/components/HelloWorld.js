import React from 'react';
import request from 'superagent';

let HelloWorld = React.createClass({

    getInitialState() {
        return {
            likes: this.props.count
        };
    },

    getDefaultProps() {
        return {
            count: 0
        };
    },

    handleClick(event) {
        event.preventDefault();

        request
            .post('/signup')
            .end(function(err, res) {
                console.log(`Made API request – ${res.status}`);
            });

        this.setState({
            likes: this.state.likes + 1
        });
    },

    render() {
        let pluralizedNoun = this.state.likes === 1 ? 'person' : 'people';
        let pluralizedVerb = this.state.likes === 1 ? 'has' : 'have';

        return (
            <div>
                <p className="header__subtitle">
                    <strong>{this.state.likes} {pluralizedNoun}</strong> {pluralizedVerb} signed up for this campaign.
                </p>

                <a className="button" onClick={this.handleClick} href="/signup">Sign up</a>
            </div>
        );
    }
});

export default HelloWorld;
