// Special Character
const favoriteMovie = "My \f favorite movie is \'Kingdom\'.";
console.info(favoriteMovie); // return : My ♀ favorite movie is 'Kingdom'.

const flag = 'indonesia raya ' + String.fromCodePoint(0x2764);
console.info(flag); // return : indonesia raya ❤

const story2 = 'I love hamburgers ' + String.fromCodePoint(0x1F354);
console.info(story2); // return : I love hamburgers �

