/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/



/* Uitklappen van het filterscherm */
function klapOpen() {
    "use strict";
    var fieldset = document.querySelector('fieldset');

    fieldset.classList.toggle('active');

}
/* de if queryselector wordt gebruikt om JSlint error te voorkomen, geleerd bij de bijles */
if (document.querySelector('h2 + button')) {
    var button = document.querySelector("main>button");
    button.addEventListener('click', klapOpen);
}



/* Hartje inkleuren als er op het hartje geklikt wordt. */
if (document.querySelector('article > div')) {
    var image = document.querySelector('article>div>img:nth-of-type(2)');
}

function change() {
    "use strict";
    var img = document.querySelector('image');
    image.src = "images/groen-hartje.gif";
}
/* Ik heb deze if queryselector gebruikt om de fouten van de JSlint weg te krijgen. */
if (document.querySelector('article > div')) {
    image.addEventListener('click', change);
}


/* download icoon laten laden.*/

var downloadBttn = document.querySelector('img[alt=downloadicoon]');

function downloaden() {

    var laden = document.querySelector('downloadBttn');
    downloadBttn.src = "images/1animatie-vinkje.gif";
}

if (document.querySelector('img[alt=downloadicoon]')) {
    downloadBttn.addEventListener('click', downloaden);

}


/* Cancel button + aanmeld button inlog formulier laten sluiten  */
if (document.querySelector('div > input')) {
    var closeButton = document.querySelector("div>input");
}

function close() {
    window.history.back();
}

if (document.querySelector('div > input')) {
    closeButton.addEventListener('click', close);

}


/* Mijn lijst icoon veranderd als er op het hartje gedrukt wordt */

/*

if (document.querySelector('img[alt=mijnlijsticoon]')) {
    var afbeelding = document.querySelector('img[alt=mijnlijsticoon]');
}

function change() {
    "use strict";
    var lijst = document.querySelector('image');
    afbeelding.src = "images/1)mijnlijst.png";
}


if (document.querySelector('ul + li')) {
    image.addEventListener('click', afbeelding);
}

*/
