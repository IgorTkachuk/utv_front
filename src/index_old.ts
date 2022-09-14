import { rnd } from "./random";
import { dom } from "./dom";

import "./App.css";

const print = () => {
  console.log(rnd(10, 20));
};

dom(print);
