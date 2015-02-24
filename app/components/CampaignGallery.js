import React from 'react';
import Gallery from '../patterns/Gallery';
import Tile from '../patterns/Tile';

let CampaignGallery = React.createClass({

    getInitialState() {
        return {
            items: this.props.data,
            ajaxOffset: 0,
            ajaxCount: 24
        };
    },

    getDefaultProps() {
        return {
            data: [
                {id: 1, title: 'Kitten 1', caption: 'Do things for cats.', src: 'http://placekitten.com/311/313'},
                {id: 2, title: 'Kitten 2', caption: 'Isn\'t it sweet.', src: 'http://placekitten.com/302/302'},
                {id: 3, title: 'Kitten 3', caption: 'It\'s always watching.', src: 'http://placekitten.com/303/303'},
                {id: 4, title: 'Kitten 4', caption: 'Don\'t blink.', src: 'http://placekitten.com/304/304'},
                {id: 5, title: 'Kitten 5', caption: 'The gang.', src: 'http://placekitten.com/305/305'},
                {id: 6, title: 'Kitten 6', caption: 'Lorem ipsum.', src: 'http://placekitten.com/306/306'},
                {id: 7, title: 'Kitten 7', caption: 'Lorem ipsum.', src: 'http://placekitten.com/307/307'},
                {id: 8, title: 'Kitten 8', caption: 'Lorem ipsum.', src: 'http://placekitten.com/308/308'},
                {id: 9, title: 'Kitten 9', caption: 'Lorem ipsum.', src: 'http://placekitten.com/310/310'},
                {id: 10, title: 'Kitten 10', caption: 'Lorem ipsum.', src: 'http://placekitten.com/311/311'},
                {id: 11, title: 'Kitten 11', caption: 'Lorem ipsum.', src: 'http://placekitten.com/311/313'},
                {id: 12, title: 'Kitten 12', caption: 'Lorem ipsum.', src: 'http://placekitten.com/303/303'},
                {id: 13, title: 'Kitten 13', caption: 'Lorem ipsum.', src: 'http://placekitten.com/304/304'},
                {id: 14, title: 'Kitten 14', caption: 'Lorem ipsum.', src: 'http://placekitten.com/305/305'},
                {id: 15, title: 'Kitten 15', caption: 'The gang.', src: 'http://placekitten.com/305/305'},
                {id: 16, title: 'Kitten 16', caption: 'Lorem ipsum.', src: 'http://placekitten.com/306/306'},
                {id: 17, title: 'Kitten 17', caption: 'Lorem ipsum.', src: 'http://placekitten.com/307/307'},
                {id: 18, title: 'Kitten 18', caption: 'Lorem ipsum.', src: 'http://placekitten.com/308/308'},
                {id: 19, title: 'Kitten 19', caption: 'Lorem ipsum.', src: 'http://placekitten.com/310/310'},
                {id: 20, title: 'Kitten 20', caption: 'Lorem ipsum.', src: 'http://placekitten.com/311/311'},
                {id: 21, title: 'Kitten 21', caption: 'Lorem ipsum.', src: 'http://placekitten.com/311/313'},
                {id: 22, title: 'Kitten 22', caption: 'Lorem ipsum.', src: 'http://placekitten.com/303/303'},
                {id: 23, title: 'Kitten 23', caption: 'Lorem ipsum.', src: 'http://placekitten.com/304/304'},
                {id: 24, title: 'Kitten 24', caption: 'Lorem ipsum.', src: 'http://placekitten.com/305/305'},
                {id: 18, title: 'Kitten 25', caption: 'Lorem ipsum.', src: 'http://placekitten.com/308/308'},
                {id: 19, title: 'Kitten 26', caption: 'Lorem ipsum.', src: 'http://placekitten.com/310/310'}
            ]
        };
    },

    /**
     * @return {object}
     */
    render() {
        let tiles = this.state.items.map(function(item) {
            return (
                <Tile key={item.id} data={item} />
            )
        }, this);

        return (
            <Gallery items={tiles} />
        );
    }

});

export default CampaignGallery;