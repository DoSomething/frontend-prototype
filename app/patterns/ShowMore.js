import React from 'react';

let ShowMore = React.createClass({
    getDefaultProps() {
        return {
            text: 'Show More'
        };
    },

    render() {
        return (
            <div style={{display: (this.props.visible) ? 'block' : 'none'}} className="form-actions -padded">
                <button className="button -tertiary" onClick={this.props.onClick}>
                    {this.props.text}
                </button>
            </div>
        );
    }
});

export default ShowMore;
