
const firstVowel = (word) => {
    return word.split('').findIndex((char) => {
        switch(char) {
            case ('a'):
            case ('e'):
            case ('i'):
            case ('o'):
            case ('u'):
                return true;

            default:
                return false;
        }
    })
}

const piglatin = (word) => {
    word = word.toLowerCase();
    const start = firstVowel(word);
    if(!start) {
        return word + "way";
    }else {
        return word.slice(start, word.length) + word.slice(0, start) + "ay";
    }   
};

module.exports = piglatin;