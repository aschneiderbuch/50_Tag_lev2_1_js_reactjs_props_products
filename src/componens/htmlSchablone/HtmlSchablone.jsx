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
                <h4 id={props.uuid} >button</h4 >
            </article>

        </section>

     );
}
 
export default HtmlSchablone;