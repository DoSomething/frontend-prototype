const React = require('react');
const { Component } = React;

import Header from '../patterns/Header';
import { Container, ContainerBlock } from '../patterns/Container';

import KnowIt from './KnowIt';
import PlanIt from './PlanIt';

class Campaign extends Component {
    constructor(props) {
        super(props);

        this.state = {
            path: 0,
        };
    }

    render() {
        return (
          <div>
              <Header title={this.props.title} subtitle={this.props.tagline} />
              <KnowIt data={this.props}>
                  <ContainerBlock layout="narrow">

                    <div className="map">
                      <ul className="stately">
                        <li data-state="al" id="al">A</li>
                        <li data-state="ak" id="ak">B</li>
                        <li data-state="ar" id="ar">C</li>
                        <li data-state="az" id="az">D</li>
                        <li data-state="ca" id="ca">E</li>
                        <li data-state="co" id="co">F</li>
                        <li data-state="ct" id="ct">G</li>
                        <li data-state="de" id="de">H</li>
                        <li data-state="dc" id="dc">I</li>
                        <li data-state="fl" id="fl">J</li>
                        <li data-state="ga" id="ga">K</li>
                        <li data-state="hi" id="hi">L</li>
                        <li data-state="id" id="id">M</li>
                        <li data-state="il" id="il">N</li>
                        <li data-state="in" id="in">O</li>
                        <li data-state="ia" id="ia">P</li>
                        <li data-state="ks" id="ks">Q</li>
                        <li data-state="ky" id="ky">R</li>
                        <li data-state="la" id="la">S</li>
                        <li data-state="me" id="me">T</li>
                        <li data-state="md" id="md">U</li>
                        <li data-state="ma" id="ma">V</li>
                        <li data-state="mi" id="mi">W</li>
                        <li data-state="mn" id="mn">X</li>
                        <li data-state="ms" id="ms">Y</li>
                        <li data-state="mo" id="mo">Z</li>
                        <li data-state="mt" id="mt">a</li>
                        <li data-state="ne" id="ne">b</li>
                        <li data-state="nv" id="nv">c</li>
                        <li data-state="nh" id="nh">d</li>
                        <li data-state="nj" id="nj">e</li>
                        <li data-state="nm" id="nm">f</li>
                        <li data-state="ny" id="ny">g</li>
                        <li data-state="nc" id="nc">h</li>
                        <li data-state="nd" id="nd">i</li>
                        <li data-state="oh" id="oh">j</li>
                        <li data-state="ok" id="ok">k</li>
                        <li data-state="or" id="or">l</li>
                        <li data-state="pa" id="pa">m</li>
                        <li data-state="ri" id="ri">n</li>
                        <li data-state="sc" id="sc">o</li>
                        <li data-state="sd" id="sd">p</li>
                        <li data-state="tn" id="tn">q</li>
                        <li data-state="tx" id="tx">r</li>
                        <li data-state="ut" id="ut">s</li>
                        <li data-state="va" id="va">t</li>
                        <li data-state="vt" id="vt">u</li>
                        <li data-state="wa" id="wa">v</li>
                        <li data-state="wv" id="wv">w</li>
                        <li data-state="wi" id="wi">x</li>
                        <li data-state="wy" id="wy">y</li>
                      </ul>
                      <div className="text-container">
                        <h1 id='graph-text'></h1>
                      </div>
                    </div>

                  </ContainerBlock>
              </KnowIt>
              <PlanIt data={this.props} />
          </div>
        );
    }
}

export default Campaign;
