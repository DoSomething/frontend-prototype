export default function(app) {

    /**
     * Homepage, with a list to each demo.
     */
    app.get('/', function(req, res) {
        res.render('home');
    });

};
