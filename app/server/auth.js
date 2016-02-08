import request from 'superagent';

export default function(app) {

    /**
     * Campaign interface.
     */
    app.post('/login', function(req, res) {
      var email = req.body.email;
      var password = req.body.password;
        request
            .post(`https://northstar.dosomething.org/v1/auth/token`)
            .set('X-DS-REST-API-Key', process.env.NORTHSTAR_API_KEY)
            .set('Accept', 'application/json')
            .send({'email': email, 'password': password})
            .end(function(data) {
                console.log(data.status);
                res.json({'email': email, 'password': password, 'data': data});
            });

    });

};
