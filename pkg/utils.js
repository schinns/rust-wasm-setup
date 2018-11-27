/* tslint:disable */
import * as wasm from './utils_bg';
import { appendNumber } from '../domUtils';
import { appendString } from '../domUtils';

/**
* @param {number} arg0
* @returns {number}
*/
export function add_one(arg0) {
    return wasm.add_one(arg0);
}

export function __wbg_appendNumber_ef76ea4e5729d90a(arg0) {
    appendNumber(arg0);
}

let cachedTextDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

export function __wbg_appendString_af70730ea1a2f9ec(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    appendString(varg0);
}
/**
* @returns {void}
*/
export function run() {
    return wasm.run();
}

