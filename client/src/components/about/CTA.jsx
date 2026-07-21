import { Link } from "react-router-dom";

function CTA(){

return(

<section className="cta">

<h2>

Let's Create Something Beautiful Together

</h2>

<p>

Your wedding deserves timeless memories.

</p>

<Link to="/booking" className="book-btn">

Book Your Date

</Link>

</section>

)

}

export default CTA;