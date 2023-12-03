import { fetch_method } from "./fetch_method.js";
import { fetch_btn } from "./fetch_btn.js";
let url = 'data.dat'
fetch_btn(() => { fetch_method(url) });
