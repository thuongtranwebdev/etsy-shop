import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import FixedPosition from "./components/test/FixedPosition";
import AppBarWithButtons from "./components/test/HideOnScroll";
import PrimarySearchAppBar from "./components/test/PrimarySearchAppBar";
import SimpleMenu from "./components/test/Button";
import ToolbarAbstraction from "./components/test/ToolbarAbstraction";

ReactDOM.render(<ToolbarAbstraction />, document.getElementById("root"));

serviceWorker.unregister();
