import request from 'superagent';

export default function(app) {

    /**
     * Campaign interface.
     */
    app.post('/login', function(req, res) {
      var email = req.body.name;
      var password = req.body.pass;
      if (email == undefined || password == undefined) {
        res.redirect('back');
        return;
      }
      request
          .post(`https://northstar.dosomething.org/v1/auth/token`)
          .set('X-DS-REST-API-Key', process.env.NORTHSTAR_API_KEY)
          .set('Accept', 'application/json')
          .send({'email': email, 'password': password})
          .end(function(data) {
              if (data.status == 201) {
                var userData = JSON.parse(data.text).data.user.data;
                req.auth.id = userData.id;
              }
              console.log(req.auth.id);
              res.redirect('back');
          });
    });

};
