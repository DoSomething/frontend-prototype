import request from 'superagent';

export default function(app) {

    /**
     * Campaign interface.
     */
    app.post('/login', function(req, res) {
      var email = req.body.email;
      var password = req.body.password;
        request
            .post(`https://northstar.dosomething.org/v1/login`)
            // .set('X-DS-REST-API-Key', process.env.NORTHSTAR_API_KEY)
            .set('X-DS-REST-API-Key', 't49jtlLe5vOtiVQVKiRVPdnKpmPrxvuS')
            .set('Accept', 'application/json')
            .send({'email': email, 'password': password})
            .end(function(data) {
                res.json({'email': email, 'password': password, 'data': data});
            });

    });

};
