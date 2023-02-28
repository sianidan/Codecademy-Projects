// The keys and notes variables store the piano keys
const keys = [
    "c-key",
    "d-key",
    "e-key",
    "f-key",
    "g-key",
    "a-key",
    "b-key",
    "high-c-key",
    "c-sharp-key",
    "d-sharp-key",
    "f-sharp-key",
    "g-sharp-key",
    "a-sharp-key",
  ];
const notes = [];
// loop through keys array 
keys.forEach(function (key) {
    notes.push(document.getElementById(key));
});
  
// functions that change the color of the keys
  const keyPlay = (event) => {
    event.target.style.backgroundColor = "orange";
  };
  
  const keyReturn = (event) => {
    event.target.style.backgroundColor = "";
  };
  
// event handler function for when piano keys are clicked
  const keyEvents = (note) => {
    note.onmousedown = keyPlay;
    note.onmouseup = keyReturn;
  };
  
// Loop that runs the notes array through the event handler function
    notes.forEach(keyEvents);
  
// These variables store the buttons that progress the user through the lyrics
  let nextOne = document.getElementById("first-next-line");
  let nextTwo = document.getElementById("second-next-line");
  let nextThree = document.getElementById("third-next-line");
  let startOver = document.getElementById("fourth-next-line");
  
// This variable stores the '-END' lyric element
  let lastLyric = document.getElementById("column-optional");
  
// Hide all the progress buttons except the first one
  nextTwo.hidden = true;
  nextThree.hidden = true;
  startOver.hidden = true;
  
// Anonymous event handler property and function for the Line 2 button
  nextOne.onclick = function () {
    // show the Line 3 button and hide the Line 2 button
    nextTwo.hidden = false;
    nextOne.hidden = true;
    // change the notes
    document.getElementById("letter-note-five").innerHTML = "D";
    document.getElementById("letter-note-six").innerHTML = "C";
  };
  
// Anonymous event handler property and function for the Line 3 button
  nextTwo.onclick = function () {
    // show the Line 4 button and hide the Line 3 button
    nextThree.hidden = false;
    nextTwo.hidden = true;
    // change the lyrics for words five and six, then show the last lyric
    document.getElementById("word-five").innerHTML = "DEAR";
    document.getElementById("word-six").innerHTML = "FRI-";
    lastLyric.style.display = "inline-block";
    // change the notes
    document.getElementById("letter-note-three").innerHTML = "G";
    document.getElementById("letter-note-four").innerHTML = "E";
    document.getElementById("letter-note-five").innerHTML = "C";
    document.getElementById("letter-note-six").innerHTML = "B";
  };
  
// Anonymous event handler property and function for the Line 4 button
  nextThree.onclick = function () {
    // show startOver button and hide Line 4 button
    startOver.hidden = false;
    nextThree.hidden = true;
    // change lyrics
    document.getElementById("word-one").innerHTML = "HAP-";
    document.getElementById("word-two").innerHTML = "PY";
    document.getElementById("word-three").innerHTML = "BIRTH";
    document.getElementById("word-four").innerHTML = "DAY";
    document.getElementById("word-five").innerHTML = "TO";
    document.getElementById("word-six").innerHTML = "YOU!";
    // change notes
    document.getElementById("letter-note-one").innerHTML = "F";
    document.getElementById("letter-note-two").innerHTML = "F";
    document.getElementById("letter-note-three").innerHTML = "E";
    document.getElementById("letter-note-four").innerHTML = "C";
    document.getElementById("letter-note-five").innerHTML = "D";
    document.getElementById("letter-note-six").innerHTML = "C";
    // get rid of the "-end" in the song box
    lastLyric.style.display = "none";
  };
  
// Event handler property and function for the startOver button
  startOver.onclick = function () {
    nextOne.hidden = false;
    startOver.hidden = true;
    document.getElementById("word-one").innerHTML = "HAP-";
    document.getElementById("letter-note-one").innerHTML = "G";
    document.getElementById("word-two").innerHTML = "PY";
    document.getElementById("letter-note-two").innerHTML = "G";
    document.getElementById("word-three").innerHTML = "BIRTH-";
    document.getElementById("letter-note-three").innerHTML = "A";
    document.getElementById("word-four").innerHTML = "DAY";
    document.getElementById("letter-note-four").innerHTML = "G";
    document.getElementById("word-five").innerHTML = "TO";
    document.getElementById("letter-note-five").innerHTML = "C";
    document.getElementById("word-six").innerHTML = "YOU!";
    document.getElementById("letter-note-six").innerHTML = "B";
  };