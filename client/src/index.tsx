import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/main.scss";
import { Provider } from "mobx-react";
import EventStore from "@stores/eventStore";

const event = new EventStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider event={event}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
