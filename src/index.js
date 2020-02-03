import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { Server } from 'miragejs';
import Wrestler from './data/wrestlers.json';
import Records from './data/records.json';

new Server({
  routes() {
    this.namespace = "/api"

    this.get("/v1/rikishi", () => Wrestler);

    this.get("/v1/rikishi/:id/records", () => Records);
  },
})

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
