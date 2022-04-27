import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { configure, action } from "mobx";

configure({ enforceActions: true });

const appState = observable({
  count: 100,
  incCount: action(
    ("Increment Counter",
    () => {
      appState.count += 1;
    })
  ),
  decCount: action(() => {
    appState.count -= 1;
  }),
  get countByThree() {
    return this.count * 3;
  },

  get countByFour() {
    return this.count * 4;
  },
});

const Counter = observer((props) => (
  <section>
    <button onClick={props.appState.incCount}>Add</button>
    {props.appState.count}
    <button onClick={props.appState.decCount}>Dec</button>
<p>Count by Three {props.appState.countByThree}</p>
<p>Count by Four {props.appState.countByFour}</p>

  </section>
));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Counter appState={appState} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
