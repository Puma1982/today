import { Link } from "react-router-dom";
import "./topbar.css"
//Navbar
export default function TopBar() {

  const user = false; {/*CREATE A USER FOR THE WP */}

    /*Social Media icons */
  return (
    <div className="top">

  <div className="topLeft">
  <i className ="topIcon fab fa-facebook-messenger"></i>
  <i className ="topIcon fab fa-instagram"></i>
  <i className ="topIcon fab fa-linkedin"></i>
  <i className ="topIcon fab fa-github"></i>
  </div>
  <div className="topCenter">
      <ul className="topList">
          <li className="topListItem">

            <Link className="link" to= "/">HOME</Link>  {/*i stylet the link in index html for the top bar*/}
            {/*I added my url here */}
          
          </li>
          <li className="topListItem"><Link className="link" to= "/">ABOUT </Link></li>
          <li className="topListItem"><Link className="link" to= "/">CONTACT </Link></li>
          <li className="topListItem"><Link className="link" to= "/write">WRITE </Link></li>
          <li className="topListItem">
            {user && "LOGOUT"}
          {/*WE WILL MAKE SOME CONDITIONS IF NO USER LOGOUT*/}
          </li>
      </ul>
  </div>

  <div className="topRight">
{
  user ? (
    <img 
    className="topImg"
    src="https://media.istockphoto.com/photos/face-of-handsome-senior-man-sitting-at-the-park-picture-id1161094484?s=612x612" 
    alt=""
     />

  ):(
    <ul className="topList">
      <li className="topListItem">
    <Link className="link" to="/login">LOGIN</Link>
    </li>

    <li className="topListItem">
    <Link className="link" to="/register">REGISTER</Link>
    </li>
    </ul>
  )
}
{/*IF NO USER LOGIN THE PAGE MUST PROFILE IMAGE DON'T SHOW UP */}

<i className ="topSearchIcon fas fa-search"></i>
    </div>
    </div>

  );
}
