import React from 'react';
import ShowMore from './ShowMore';

let Gallery = React.createClass({

    getInitialState() {
        return {
            displayCount: this.props.initialDisplayCount
        }
    },

    getDefaultProps() {
        return {
            initialDisplayCount: 8,
            showMoreIncrement: 8
        };
    },

    showMoreItems() {
        this.setState({
            displayCount: this.state.displayCount + this.props.showMoreIncrement
        });
    },

    /**
     * @return {object}
     */
    render() {
        let showMoreVisible = (this.state.displayCount < this.props.items.length);

        let galleryListItems = this.props.items.slice(0, this.state.displayCount).map(function(item) {
           return (
               <li key={item.id} className="galleryItem">
                   { item }
               </li>
           )
        }, this);

        return (
            <div className="gallery-component">
                <div className="gallery -quartet -mosaic">
                    { galleryListItems }
                </div>
                <ShowMore visible={showMoreVisible} onClick={this.showMoreItems} />
            </div>
        );
    }

});

export default Gallery;