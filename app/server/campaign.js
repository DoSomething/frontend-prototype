import request from 'superagent';

export default function(app) {

    /**
     * Campaign interface.
     */
    app.get('/campaigns/:nid', function(req, res) {
        // Fetch campaign content via DoSomething.org API
        // https://www.dosomething.org/api/v1/content/:nid
        request
            .get(`https://www.dosomething.org/api/v1/content/${req.params.nid}.json`)
            .end(function(data) {
                res.render('newheader', {data : JSON.parse(data.text)})
            });

    });

};
