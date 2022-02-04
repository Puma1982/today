import { Link } from "react-router-dom";
import "./post.css";

export default function Post() {
  return (
      <div className="post">

          <img className="postImg" src="https://media.istockphoto.com/photos/professional-developer-programmer-cooperation-meeting-and-and-in-picture-id1253430957" 
          alt="" 
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat= Job">
            Job
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Life">
            Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
          Front end and web developer
          <i class="fas fa-mouse"></i>
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      In the world of web development, there’s front-end and back-end work.
       On the back end, programmers do the hidden work and processes that 
       run behind the scenes, that the end user doesn’t see.

Front-end development, on the other hand, deals with the parts of a 
website or application that the end user actually sees and interacts with. 
As a front end developer, you’ll be working to make websites beautiful, 
functional, and accessible. A common thing you’ll do as a front-end engineer,
 says John, is “working with program managers and designers and customers 
 to figure out what’s the best way to implement a solution for a customer problem.”
      </p>
    </div>
  );
}
