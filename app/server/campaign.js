import { phoenix } from '../utils';

export default function(app) {

    /**
     * Campaign interface.
     */
    app.get('/campaigns/:nid', function(req, res) {
        // Fetch campaign content via Phoenix API <https://www.dosomething.org/api/v1/content/:nid>
        phoenix(`campaigns/${req.params.nid}`).then((data) => res.render('campaign', {data, props: JSON.stringify(data)}));
    });
};
