import request from 'superagent';

export default function(app) {

    /**
     * Login endpoint
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
                req.auth.session_token = userData.session_token;
                req.auth.drupal_id = userData.drupal_id;
                req.auth.first_name = userData.first_name;
              }
              res.redirect('back');
          });
    });

    /**
     * Logout endpoint.
     */
    app.get('/logout', function(req, res) {
      req.auth.id = false;
      request
          .post(`https://northstar.dosomething.org/v1/logout`)
          .set('X-DS-REST-API-Key', process.env.NORTHSTAR_API_KEY)
          .set('Accept', 'application/json')
          .send({'Session': req.auth.session_token})
          .end(function(data) {
          });
      res.redirect('back');
    });

    app.post('/register', function(req, res) {
      var name = req.body.first_name || '';
      var birthday = req.body.birthdate || '';
      var email = req.body.mail || '';
      var mobile = req.body.mobile || '';
      var pass = req.body.pass || '';
      var pass2 = req.body.pass2 || '';

      if (email == '' && mobile == '') {
        res.redirect('back');
      }

      if (pass != pass2 || pass == '' || pass2 == '') {
        res.redirect('back');
      }

      request
          .post(`https://northstar.dosomething.org/v1/auth/register`)
          .set('X-DS-REST-API-Key', process.env.NORTHSTAR_API_KEY)
          .set('Accept', 'application/json')
          .send({'email': email, 'password': pass, 'mobile': mobile, 'birthdate': birthday, 'first_name': name})
          .query('create_drupal_user=1')
          .end(function(data) {
            if (data.status == 200) {
              var userData = JSON.parse(data.text).data.user.data;
              req.auth.id = userData.id;
              req.auth.session_token = userData.session_token;
              req.auth.drupal_id = userData.drupal_id;
              req.auth.first_name = userData.first_name;
            }
            res.redirect('back');
            // res.json(data);
          });
    });

};
