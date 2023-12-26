// Middle C.
let first = 262;

// Array of frequencies in the key
// of C Major.
let frequencies = [
  first,
  first * 9/8,
  first * 5/4,
  first * 4/3,
  first * 3/2,
  first * 5/3,
  first * 15/8,
  first * 2
];

// Array of Oscillator objects.
let oscillators = [];

let melody; // object for saved song
let tempo = 120;
let noteDuration = 60 / tempo; // Duration of each note in seconds

let songs; //array of songs
let songSelect; //variable to keep track of song selected from the dropdown

//Step 3a: add preload function here


function setup() {
  createCanvas(400, 400);
  
  // Create Oscillator objects.
  for (let freq of frequencies) {
    let osc = new Oscillator(freq);
    osc.amp(0);
    osc.start();
    oscillators.push(osc);
  }
 
  let button = createButton('Play Song');
  button.position(150, 100);
  button.mousePressed(play);
  
  
  // Create a dropdown to select a song.
  songSelect = createSelect();
  songSelect.position(100, 150);
  
  //Step 3b: draw available song files here
  
}

//Step 3c: write loadSong() function here



function draw() {
  background(220);
}

//play all the notes in the melody object
function play() {
  for (let i = 0; i < melody.notes.length; i++) {
    let n = melody.notes[i];
    setTimeout(function() { playNote(n); }, noteDuration * 1000 * i);
  }
}

//turn on the oscillator to play note
function playNote(n) {
  oscillators[n].amp(1, 0.01); // Start playing the note
  setTimeout(function() { stopNote(n); }, noteDuration * 1000); // Stop after the duration
}

//turn off the oscillator to stop note
function stopNote(n) {
  oscillators[n].amp(0); // Stop playing the note
}
