# Installing Rust and Setting up for WASM

Install and initialize Rust by running:
`$ brew install rustup
 $ rustup-init`

Set `nightly` as default toolchain as it supports WASM:
`$ rustup default nightly`

Target platform:
`$ rustup target add wasm32-unknown-unknown`

_Usually you would have target platform i.e. x68_64-apple-darwin, but WASM does not target a platform_

# Setting up basic Rust/WASM/Webpack Project

We use `cargo` package manager to install `wasm-gc`:
`$ cargo install wasm-gc`

_wasm-gc is a tool to remove all unneeded exports, imports, functions, and so on from a WebAssembly module._

create a new project using `cargo new`
`$ cargo new --lib project-name`

compile Rust code by running:
`$ cargo build --target wasm32-unknown-unknown --release
 $ wasm-gc target/wasm32-unknown-unknown/release/utils.wasm -o utils.gc.wasm`

compile Rust library by running:
`$ wasm-pack build`

run webpack dev server:
`$ npx webpack-dev-server`
