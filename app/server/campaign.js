require('isomorphic-fetch');

import { phoenix } from '../utils';
import request from 'superagent';

const { PORT } = process.env;

export default function(app) {

    /**
     * Campaign interface.
     */
    app.get('/campaigns/:nid', function(req, res) {

        fetch(`http://localhost:${PORT}/campaign.json`)
          .then((response) => response.json())
          .then(function(campaign) {
              res.render('campaign', {data: campaign.data, props: JSON.stringify(campaign.data)});
          });
    });
};
