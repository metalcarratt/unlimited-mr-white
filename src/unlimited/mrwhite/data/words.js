const words = [
    ['bread', 'toast'],
    ['apple', 'pineapple'],
    ['pencil', 'pen'],
    ['cheese', 'milk'],
    ['stinky cheese', 'socks'],
    ['pizza', 'hamburger'],
    ['sausage', 'salami'],
    ['zoo', 'farm'],
    ['paper', 'cardboard'],
    ['rose', 'lily'],
    ['helicopter', 'drone'],
    ['cake', 'bread'],
    ['jam', 'butter'],
    ['sunset', 'sunrise'],
    ['banana', 'mango'],
    ['tablet', 'ipad'],
    ['ribbon', 'string'],
    ['chrome', 'firefox'],
    ['instagram', 'snapchat'],
    ['chess', 'checkers'],
    ['yoghurt', 'cream'],
    ['milk', 'cheese'],
    ['fridge', 'freezer'],
    ['dress', 'skirt'],
    ['Rome', 'Athens'],
    ['baseball', 'cricket'],
    ['mango', 'orange'],
    ['cream', 'milk'],
    ['volleyball','netball'],
    // ['animal','pokemon'],
    ['coin','note']

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