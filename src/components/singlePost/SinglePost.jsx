import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/2657669/pexels-photo-2657669.jpeg?cs=srgb&dl=pexels-drew-williams-2657669.jpg&fm=jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
      Haithem Grissander
          <div className="singlePostEdit">
          <i class="singlePostIcon far fa-thumbs-up"></i>
          <i class="singlePostIcon far fa-thumbs-down"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Haithem">
                Haithem
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
        Jag är utbildad ingenjör inom mikroelektronik och signalberedning från Linnéuniversitetet.
         Mitt examensarbete från universitetet handlar om signalberedning (http://www.uppsatser.se/om/Haithem+Grissa/).
          Jag har erfarenhet av automationsarbete från en ettårig praktik på Filtrena i Växjö. Vidare har jag kunskaper
           och erfarenhet av Linux från min utbildning.

I min yrkesroll är jag en nogrann, snabbtänkt person som har fallenhet för att förbättra och uppdatera produkter. 
Jag arbetar metodiskt, hanterar och löser problem, även de problem som tar tid att lösa och inte har en snabb,
 enkel lösning. Det är något jag trivs med och är en stor drivkraft i mitt arbete.

Även om jag inte har så mycket erfarenhet har jag enorm kapacitet att lära mig nya saker då jag är en väldigt arbetsvillig
 och ambitiös person. Mina styrkor är att jag väldigt aktiv och drivande med ett stort teknikintresse och tycker om att lära
  mig nya saker och fördjupa min tekniska kompetens. Vidare är jag alltid punktlig och utför mitt arbete inom tidsramarna.

Jag är en social person som har lätt för att skapa relationer och samarbeta med andra. Jag ser andras kompetenser och 
infallsvinklar som en tillgång och något nödvändigt för att arbetet ska drivas vidare. I mitt arbete är jag van vid 
att nyttja IT-stöd
          <br />
          <br />
          I dagsläget arbetar jag som vikarie för Norrköpings kommun samtidigt som jag studerar masterexamen inom 
          kärnkraftenergi på KTH. Mina studier ser jag som temporära tills jag hittar ett fast arbete. Förutom svenska 
          talar jag sju språk och hanterar alla i såväl tal som skrift. Arabiska är mitt modersmål men jag ser svenska, engelska och franska som mina närmaste andraspråk.

         Jag hoppas höra ifrån er angående den här tjänsten, jag skulle tycka att det var jätteroligt att få vara en del av AB 
        Trav och Galopp Company LocationStockholm.
PS. Mina referenser och utbildningar finns specificerade i mitt CV.
          <br />
        </p>
      </div>
    </div>
  );
}
