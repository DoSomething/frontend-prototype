import request from 'superagent';
import CampaignGallery from '../components/CampaignGallery';
import { renderComponentWithProps } from "../utils";

export default function(app) {

    /**
     * Gallery demo page.
     */
    app.get('/gallery', function(req, res) {
        // Render Handlebars view with a few isomorphic React components
        res.render('gallery', {
            CampaignGallery: renderComponentWithProps('jsx-campaign-gallery', CampaignGallery, {})
        });
    });

    /**
     * Proxy for the Drupal Reportbacks API. (Sidesteps CORS issue.)
     * @param nid (int) Node to fetch reportbacks from.
     * @query offset (int) Number to start from.
     * @query count (int) The number of files to return.
     */
    app.get('/api/reportbacks/:nid', function(req, res) {
        var offset = req.query.offset || 0;
        var count = req.query.count || 24;

        request
            .get(`https://www.dosomething.org/api/v1/campaigns/${req.params.nid}/gallery.json?offset=${offset}&count=${count}`)
            .end(function(data) {
                res.json(JSON.parse(data.text));
            });
    });

};
