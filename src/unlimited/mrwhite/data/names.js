// const IMG_MAN = "/profiles/generic_male.jpg";
const IMG_WOMAN = "/profiles/generic_woman.png";
const IMG_NEO = "/profiles/neo.jpg";
const IMG_BOND = "/profiles/bond.jpg";
const IMG_STRAWBERRY = "/profiles/strawberry.png";
const IMG_SCARLET = "/profiles/scarlet.png";

const names = [
    ['Strawberry', IMG_STRAWBERRY],
    ['Tesla', IMG_WOMAN],
    ['Barbie', IMG_WOMAN],
    ['Neo', IMG_NEO],
    ['Bond', IMG_BOND],
    ['Scarlet', IMG_SCARLET]
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