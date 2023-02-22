import { obj_befüllt } from "../datenbankSpeicher/DatenbankSpeicher.jsx";
import HtmlSchablone from "../htmlSchablone/HtmlSchablone.jsx";




console.log(obj_befüllt);
console.log(obj_befüllt[0].titel)




const html_befüllt = obj_befüllt.map((obj) => {
    return <HtmlSchablone key={obj.id} key_={obj.id} bilderSrc={obj.bilderSrc} titel={obj.titel} preis={obj.preis} uuid={obj.uuid}  ></HtmlSchablone>
})
console.log(html_befüllt);


const VerarbeitungMap = () => {
    return ( 

<>

{html_befüllt}

</>

     );
}
 
export default VerarbeitungMap;