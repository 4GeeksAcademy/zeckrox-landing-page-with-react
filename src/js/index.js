//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Navbar from "./component/Navbar.jsx";
import Jumbotron from "./component/Jumbotron.jsx";
import Card from "./component/Card.jsx";
import Footer from "./component/Footer.jsx";

const App = () =>{
    return <>
    <Navbar />
    <Jumbotron />

    <div className="container my-4 d-flex flex-wrap">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    </div>
    
    <Footer/>
    </>
}

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
