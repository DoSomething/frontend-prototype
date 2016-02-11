import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';
import * as request from 'superagent';

/**
 * Render a component on the server.
 * @param id {String}
 * @param component
 * @param props {Object}
 * @returns {string}
 */
export function renderComponentWithProps(id, component, props) {
    var componentMarkup = ReactDOMServer.renderToString(React.createElement(component, props));
    var propsMarkup = `<script id="${id}-props" type="application/json">${JSON.stringify(props)}</script>`;

    return `<div id="${id}">${componentMarkup}</div>\n${propsMarkup}`;
}

/**
 * Re-hydrate a server-rendered element on the client.
 * @param id
 * @param component
 */
export function renderWithServerProps(id, component) {
    var el = document.getElementById(id);

    if(el) {
        const props = JSON.parse(document.getElementById(`${id}-props`).innerHTML);

        ReactDOM.render(React.createElement(component, props), el);
    }
}


/**
 * Make a request to the Phoenix API.
 * @param path - API endpoint path
 * @returns {Promise}
 */
export function phoenix(path) {
    return new Promise(function(resolve) {
        request.get(`https://www.dosomething.org/api/v1/${path}`)
          .set('Accept', 'application/json')
          .end((data) => {
              resolve(data.body.data);
          });
    });
}
