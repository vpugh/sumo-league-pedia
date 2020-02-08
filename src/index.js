import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

import App from './App';

import { Server } from 'miragejs';
import Wrestler from './data/wrestlers.json';
import Records from './data/records.json';

ReactModal.setAppElement('#root');

new Server({
  routes() {
    this.namespace = '/api';

    this.get('/v1/rikishi', () => Wrestler);

    this.get('/v1/rikishi/:id/records', (schema, request) => {
      return Records[request.params.id - 1];
    });

    this.get('/v1/ranks', () => [
      'yokozuna',
      'ozeki',
      'sekiwake',
      'komusubi',
      'maegashira'
    ]);

    this.get('/v1/divisions', () => [
      'Makuuchi',
      'Jūryō',
      'Makushita',
      'Sandanme',
      'Jonidan',
      'Jonokuchi'
    ]);

    this.put('/v1/rikishi/:id', (schema, request) => {
      let id = request.params.id;
      let attrs = this.normalizeRequestedAttrs();

      return schema.rikishi.find(id).update(attrs);
    });
  }
});

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
