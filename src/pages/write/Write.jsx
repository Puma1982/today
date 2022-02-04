import "./write.css"
export default function Write() {
  return (
    <div className="write">
      <img className="writeImg"
      src="https://images.pexels.com/photos/414548/pexels-photo-414548.jpeg?cs=srgb&dl=pexels-pixabay-414548.jpg&fm=jpg" alt="" />
   <form className="writeForm">
       <div className="writeFormGroup">
           <label htmlFor="fileInput">
           <i className="writeIcon fas fa-plus-circle"></i>
           </label>
       <input type="file" id="fileInput" style={{display:"none"}}/> {/*This style to hide the button*/}
       <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>{/*When i refresh the page automaticly focuc in this title */}
</div>
{/*Another forme groupe */}
<div className="anotherFormGroup">
  <textarea 
  placeholder="If you need help..." 
  type="text" 
  className="writeInput writeText">
</textarea>
</div>
<button className="writeSubmit">Publish</button>
       </form>
    </div>
  )
}
// for add from my computer folders 