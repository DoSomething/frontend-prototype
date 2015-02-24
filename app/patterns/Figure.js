import React from 'react';

let Figure = React.createClass({

    handleClick(event) {
        // @TODO: Show something on click!
        event.preventDefault();
        console.log('Clicked figure!');
    },

    /**
     * @return {object}
     */
    render() {
        let TileImage = <img src={this.props.data.src} />;

        return (
            <div className="figure">
                <div className="figure__media">
                    { TileImage }
                </div>
                <div className="figure__body">
                    <h4 className="tile__title">{ this.props.data.title }</h4>
                    <p className="tile__tagline">{ this.props.data.caption }</p>
                </div>
            </div>
        );
    }

});

export default Figure;
