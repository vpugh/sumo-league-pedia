import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import Faker from 'faker';

import App from './App';

import { Server, Model, Factory, belongsTo } from 'miragejs';

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}

const basho = ['hatsu', 'haru', 'natsu', 'nagoya', 'aki', 'kyushu'];
const rikishiRanks = [
  'yokozuna',
  'komusubi',
  'ozeki',
  'maegashira',
  'sekiwake'
];
const direction = ['east', 'west'];
const locations = ['Japan', 'Mongolia', 'Georgia', 'Brazil'];

ReactModal.setAppElement('#root');

new Server({
  models: {
    rikishi: Model,
    record: Model.extend({
      rikishi: belongsTo()
    })
  },
  factories: {
    rikishi: Factory.extend({
      ringName() {
        return Faker.internet.userName();
      },
      name() {
        return `${Faker.name.firstName()} ${Faker.name.lastName()}`;
      },
      division: 'Makuuchi',
      rank() {
        return rikishiRanks[Math.floor(Math.random() * rikishiRanks.length)];
      },
      img() {
        return Faker.image.avatar();
      },
      dob() {
        return Faker.date.past(50).toLocaleDateString();
      },
      rankNumber() {
        let min = 1;
        let max = 17;
        if (this.rank === 'maegashira') {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        } else {
          return null;
        }
      },
      rankDirection() {
        return direction[Math.floor(Math.random() * direction.length)];
      },
      age() {
        let min = 20;
        let max = 40;
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      placeOfBirth() {
        return locations[Math.floor(Math.random() * locations.length)];
      },
      injured: false,
      status: 'active'
    }),
    record: Factory.extend({
      rikishiId(i) {
        return `${i + 1}`;
      },
      record() {
        let minYear = 2010;
        let maxYear = 2020;

        const generateYear = () =>
          Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;

        const generateRecord = index => {
          let min = 0;
          let max = 15;
          const wins = Math.floor(Math.random() * (max - min + 1)) + min;
          const loss = max - wins;
          return {
            tournamentId: index,
            tournamentPassed: true,
            wins,
            loss,
            kyujo: wins + loss === 15 ? null : wins + loss - 15,
            champion: false,
            participate: true,
            ongoing: false
          };
        };

        const bashoYear = year => {
          return {
            [year]: basho.map((y, index) => {
              return Object.assign({}, { [y]: generateRecord(index + 1) });
            })
          };
        };
        return bashoYear(generateYear());
      }
    })
  },

  routes() {
    this.namespace = '/api';

    this.get('/v1/rikishi');

    this.post('/v1/rikishi', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.rikishis.create(attrs);
    });

    this.put('/v1/rikishi/:id');

    this.get('/v1/rikishi/:id/records', (schema, request) => {
      let recordId = request.params.id;
      return schema.records.findBy({ rikishiId: recordId });
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
  },

  seeds(server) {
    server.createList('rikishi', 10).forEach(rikishi => {
      server.createList('record', 1, { rikishiId: rikishi.id });
    });
  }
});

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
