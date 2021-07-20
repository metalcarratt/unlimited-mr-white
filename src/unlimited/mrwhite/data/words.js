const words = [
    ['bread', 'toast'],
    ['apple', 'pineapple'],
    ['pencil', 'pen']
];

export default {
    getRandomWords() {
        const s = Math.floor(Math.random() * words.length);
        const selectedWords = words[s];
        
        const o = Math.floor(Math.random() * 2);
        if (o === 1) {
            return {
                secretWord: selectedWords[0],
                fakeWord: selectedWords[1]
            };
        } else {
            return {
                secretWord: selectedWords[1],
                fakeWord: selectedWords[0]
            };
        }
    }
}