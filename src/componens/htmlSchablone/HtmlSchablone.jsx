import HtmlSchabloneBuyButton from "../htmlSchablone_buyButton/HtmlSchablone_buyButton.jsx";
import "./HtmlSchablone.scss"





const HtmlSchablone = (props) => {
    return ( 

        <section id={props.key_}>
            <article>
                <img src={props.bilderSrc} alt="" />   {props.imgSrc}
            </article>
            <article>
                <h3>{props.titel}</h3>
                <p>{props.preis}</p>
                <HtmlSchabloneBuyButton id={props.uuid}></HtmlSchabloneBuyButton>

            </article>
        </section>

     );
}
 
export default HtmlSchablone;