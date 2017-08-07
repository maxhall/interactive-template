// src/sripts/main.js
import hello from './example';

// You will want to set the page up as a pym child
const pymChild = new pym.Child();
// Invoke the sendHeight method to notify the parent page our height has changed
pymChild.sendHeight();

const hi = () => { console.log('Babel is working too!'); };

// Say hi
hi();
hello();
