import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://se.farnell.com/productimages/standard/en_GB/3639815-40.jpg" />
      <Post img="https://radwag.com/images/aktualnosci_produktowe/labview-nowosc.jpg" />
      <Post img="http://media.hv.se/kurser/ail/wp-content/uploads/sites/13/2019/11/3dsmax_2020_blog.jpg"/>
      <Post img="https://www.researchgate.net/profile/Geoffrey-Knott/publication/328487044/figure/fig2/AS:685252511010818@1540388338745/HFSS-simulation-setup-and-RF-results-for-a-7-turn-helical-antenna-as-outlined.ppm"/>
      <Post img="https://pcbdesignworld.com/sites/default/files/main-image/Getting-Started-with-EAGLE-for-PCB-Designing.jpg"/>
    </div>
  );
}

