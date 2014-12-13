var midiutils = require('./src/MIDIUtils.js');

var pitch = midiutils.noteNumberToPitch(60, null);
console.log(pitch);