import React from 'react';

let Tile = React.createClass({

    handleClick(event) {
        /* @TODO: Handle this! */
        event.preventDefault();
        console.log('Clicked tile!');
    },

    /**
     * @return {object}
     */
    render() {
        var TileImage = <img src={this.props.data.src} />;

        return (
            <div className="tile">
                <a className="wrapper" href="#" onclick={this.handleClick}>
                    { TileImage }
                    <div className="tile__meta">
                        <h1 className="tile__title">{ this.props.data.title }</h1>
                        <p className="tile__tagline">{ this.props.data.caption }</p>
                    </div>
                </a>
            </div>
        );
    }

});

export default Tile;
