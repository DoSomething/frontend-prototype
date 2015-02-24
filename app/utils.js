import React from 'react';

/**
 * Render a component on the server.
 * @param id {String}
 * @param component
 * @param props {Object}
 * @returns {string}
 */
export function renderComponentWithProps(id, component, props) {
    var componentMarkup = React.renderToString(React.createElement(component, props));
    var propsMarkup = '<script type="application/json">' + JSON.stringify(props) + '</script>';

    return `<div id="${id}">${componentMarkup}\n${propsMarkup}</div>`;
}

/**
 * Re-hydrate a server-rendered element on the client.
 * @param id
 * @param component
 */
export function renderWithServerProps(id, component) {
    var el = document.getElementById(id);

    if(el) {
        var propsEl = el.querySelector("script[type='application/json']");
        var props = JSON.parse(propsEl.innerHTML);

        React.render(React.createElement(component, props), el);
    }
}


