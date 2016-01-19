import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'cerebral-module-router';
import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import {Container} from 'cerebral-view-react';
import Example from './modules/Example';
import ColorChanger from './modules/Example/components/ColorChanger';

var model = {
  items: [{cost: 1}, {cost: 2}, {cost: 3}],
  totalCost: Model.monkey({
    cursors: {
      items: [ 'cart', 'items'],
    },
    get: function (state) {
      return state.items.reduce(function(total, i) {
        return total + i.cost;
      }, 0);
    },
  }),
  cart: {
    items: [{cost: 1}, {cost: 2}, {cost: 3}],
    totalCostBroken: Model.monkey({
      cursors: {
        items: [ 'cart', 'items'],
      },
      get: function (state) {
        return state.items.reduce(function(total, i) {
          return total + i.cost;
        }, 0);
      },
    })
  }
};

const controller = Controller(Model(model));

controller.modules({
  example: Example(),

  router: Router({
    '/': 'example.rootRouted',
    '/:color': 'example.colorChanged'
  }, {
    onlyHash: true
  })
});

ReactDOM.render(<Container controller={controller}><ColorChanger /></Container>, document.getElementById('root'));
