import { bild_0 } from "../input/Input.jsx";
import { bild_1 } from "../input/Input.jsx";
import { bild_2 } from "../input/Input.jsx";

import { v4 as uuidv4 } from "uuid";


const bilderSrcArray = [bild_0, bild_1, bild_2];

const titelArray = ["cocooil", "Polaroid", "Maui Moisture"];

const preisArray = ["30$", "60$", "20$"];

const anzahlIdArray = [];
const uuidArray = [];
for (let i = 0; i < titelArray.length; i++) {
    anzahlIdArray.push(i);
    uuidArray.push(uuidv4());
}
console.log(anzahlIdArray);
console.log(uuidArray);

// Obj Bauplan   [{}{}{}]
class Bauplan_Obj {
    constructor(id, bilderSrc, titel, preis, uuid ) {
        this.id = id;
        this.bilderSrc = bilderSrc;
        this.titel = titel;
        this.preis = preis;
        this.uuid = uuid;
}
description() {console.log(this.id, this.bilderSrc, this.titel, this.preis, this.uuid);}
}


// Obj befüllen 
const obj_befüllt = [];
for (let i = 0; i < anzahlIdArray.length; i++) {
    const obj_i_runden = new Bauplan_Obj(anzahlIdArray[i], bilderSrcArray[i], titelArray[i], preisArray[i], uuidArray[i]);
    obj_befüllt.push(obj_i_runden);
}

console.log(obj_befüllt);



export { obj_befüllt };
// export default { obj_befüllt };