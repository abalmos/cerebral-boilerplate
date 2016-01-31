import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'cerebral-module-router';
import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import {Container} from 'cerebral-view-react';
import Devtools from 'cerebral-module-devtools';
import Example from './modules/Example';
import ColorChanger from './components/ColorChanger';

const controller = Controller(Model({}));

controller.modules({
  example: Example(),

  devtools: Devtools(),
  router: Router({
    '/': 'example.rootRouted',
    '/:color': 'example.colorChanged'
  }, {
    onlyHash: true
  })
})

var test = function() { };
test.test = function() {console.log('lost');}

controller.addServices({
  test
});

ReactDOM.render(<Container controller={controller}><ColorChanger /></Container>, document.getElementById('root'));
