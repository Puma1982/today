import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Frontend & Web</span>
        <span className="headerTitleLg">BRÖDER</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?cs=srgb&dl=pexels-pixabay-434337.jpg&fm=jpgimport"
        alt=""
      />
    </div>
  );
}
