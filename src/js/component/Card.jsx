import React from "react";

const Card = () => {
 return <>
 <div className="card mx-3 mb-4" style={{width: "18rem"}}>
  <img src="https://placehold.it/500x325.jpg" className="card-img-top" alt="..."/>
  <div className="card-body d-flex flex-column align-items-center">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
 </>
}

export default Card