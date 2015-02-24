import HelloWorld from '../components/HelloWorld';
import { renderComponentWithProps } from "../utils";

export default function(app) {

    // Application State (lol)
    var helloCount = 0;

    /**
     * The demo page.
     */
    app.get('/hello', function(req, res) {
        // Render Handlebars view with a few isomorphic React components
        res.render('hello', {
            helloWorld: renderComponentWithProps('jsx-hello-world', HelloWorld, { count: helloCount })
        });
    });

    /**
     * API endpoint for incrementing "like" count.
     */
    app.get('/signup', function(req, res) {
        helloCount++;
        res.redirect('back');
    });

    app.post('/signup', function(req, res) {
        helloCount++;
        res.sendStatus(200);
    });

};
