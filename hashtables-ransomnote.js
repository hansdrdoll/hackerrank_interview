const magazine = ['give', 'me', 'one', 'grand', 'today', 'night'];
const note = ['give', 'one', 'grand', 'today'];

function checkMagazine(magazine, note) {
    for (let i = 0; i < note.length; i++) {
        const word = magazine.indexOf(note[i]);
        if (word === -1) {
            return console.log('No');
        } else {
            magazine.splice(word, 1);
        }
    }
    return console.log('Yes');
}

console.log(checkMagazine(magazine, note));