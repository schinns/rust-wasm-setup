export const appendString = (txt) => {
  const text = document.createTextNode(txt);
  document.getElementById("3").appendChild(text);
}

export const appendNumber = (number) => {
  const text = document.createTextNode(number);
  document.getElementById("2").appendChild(text);
};
