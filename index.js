import("./pkg/utils").then(wasmModule => {
  wasmModule.run();
  const result = wasmModule.add_one(1);
  const text = document.createTextNode(result);
  document.getElementById("1").appendChild(text);
})
