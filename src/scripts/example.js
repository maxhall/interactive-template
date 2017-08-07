// src/scripts/example.js
// An example Javascript module. Keep [clap] your [clap] code [clap] modular [clap]
export default hello;

const hello = function hello() {
  const el = document.querySelectorAll('.welcome');
  el[0].textContent = 'Hello. Everything is in working order.';
};
