// const IMG_MAN = "profiles/generic_male.jpg";
const IMG_NEO = "profiles/neo.jpg";
const IMG_BOND = "profiles/bond.jpg";
const IMG_STRAWBERRY = "profiles/strawberry.PNG";
const IMG_SCARLET = "profiles/scarlet.PNG";
const IMG_ELON = "profiles/elon.PNG";

const names = [
    ['Strawberry', IMG_STRAWBERRY],
    ['Elon', IMG_ELON],
    ['Neo', IMG_NEO],
    ['Bond', IMG_BOND],
    ['Scarlet', IMG_SCARLET],
    ['Jack', 'profiles/jack.PNG'],
    ['Carmen', 'profiles/carmen.PNG'],
    ['Dora', 'profiles/dora.PNG'],
    ['Elsa', 'profiles/elsa.PNG'],
    ['Olaf', 'profiles/olaf.PNG'],
    ['BluTack Man', 'profiles/blutackman.PNG'],
    ['Diona', 'profiles/diona.PNG'],
    ['Po', 'profiles/po.PNG'],
    ['Sylveon', 'profiles/sylveon.PNG'],
    ['Sentret', 'profiles/sentret.PNG'],
    ['Qiqi', 'profiles/qiqi.PNG'],
    ['Hinata', 'profiles/hinata.PNG'],
    ['Doge', 'profiles/doge.PNG']
];

const unchosenNames = names.map((name, index) => index);

export default {
    getRandomName() {
        const r = Math.floor(Math.random() * unchosenNames.length);
        const i = unchosenNames[r];
        const name = names[i];
        unchosenNames.splice(i, 1);
        return {
            name: name[0],
            image: name[1]
        }
    },

    getAllImages() {
        return names.map(name => name[1]);
    }
}