#![feature(use_extern_macros)]

extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub extern fn add_one(x: u32) -> u32 {
    x + 1
}

#[wasm_bindgen(module = "../domUtils")]
extern {
    fn appendNumber(x: u32);
    fn appendString(s: &str);
    fn alert(x: u32);
}

#[wasm_bindgen]
pub extern fn run() {
    appendNumber(42);
    appendString("Hello World!");
    // alert(4);
}
