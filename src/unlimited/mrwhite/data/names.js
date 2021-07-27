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
    ['Sylveon', 'profiles/sylveon.PNG']
]

export default {
    getRandomName() {
        const r = Math.floor(Math.random() * names.length);
        const name = names[r];
        names.splice(r, 1);
        return {
            name: name[0],
            image: name[1]
        }
    }
}