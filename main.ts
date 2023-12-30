#!/usr/bin/env ts-node

import * as T from './taelang';

var BOOK : T.Book = {};

const args = process.argv.slice(2);
const func = args[0];
const name = args[1];
const load = T.loader(BOOK);

switch (func) {
  case "check": {
    T.check_one(load, name);
    break;
  }
  case "normalize": {
    const normalized = T.normal(load, load(name).val);
    console.log(T.show_term(normalized));
  }
  default: {
    console.log("Usage: taelang [check|normalize] <name>");
  }
}
