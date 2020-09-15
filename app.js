let noteKeys= document.querySelectorAll(".nota");
let notesound = [];
for(let i = 0; i < noteKeys.length; i++) {
    notesound[i] = new Audio();
}
notesound[0].src = 'Note/C.wav';
notesound[1].src = 'Note/C1.wav';
notesound[2].src = 'Note/D.wav';
notesound[3].src = 'Note/D1.wav';
notesound[4].src = 'Note/E.wav';
notesound[5].src = 'Note/F.wav';
notesound[6].src = 'Note/F1.wav';
notesound[7].src = 'Note/G.wav';
notesound[8].src = 'Note/G_s.wav';
notesound[9].src = 'Note/A.wav';
notesound[10].src = 'Note/A.wav';
notesound[11].src = 'Note/B.wav';
       
for (let i = 0; i < notesound.length; i++) {
    noteKeys[i].onmousedown = function() {
        notesound[i].play();
    }
}
