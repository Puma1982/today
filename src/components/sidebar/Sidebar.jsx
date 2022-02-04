import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQE42S27Ferw2w/profile-displayphoto-shrink_800_800/0/1517399921712?e=1649289600&v=beta&t=DdmNlBSoy9NqTCHgnfmn5L8vod6VLsX4G52FpqlIiiY"
          alt=""
        />
       <p>  Haithem Grissander:Jag är frontend utvecklare
      webbdesign & elektronikingenjör.Jag är
       utbildad ingenjör inom mikroelektronik &
      signalberedning från Linnéuniversitetet.Frontend  
      utvecklare webbdesign från KYH.</p>
      Tel:(+46)722612016
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">SKILLS</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Javascript ">
            Javascript 
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=React">
              React
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Database">
              Database
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=CSS">
              CSS
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=PcbDesigner">
            PCB Designer
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Html">
              Html
            </Link>
            </li>
            <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=3Dmax">
            3Dmax
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Athena-D">
            Athena-D(HFSS)
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Matlab">
            Matlab
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Labview">
            Labview
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className ="sidebarIcon fab fa-linkedin"></i>
          <i className ="sidebarIcon fab fa-github"></i>
        </div>
      </div>
    </div>
  );
}
