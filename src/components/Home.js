import React from "react";
import  './Home.css';

export default function Home() {
  return (
    <div className="homecontainer" >
      
      <div className="flexdiv">
      <div className="outerdiv">
        <div className="upperdiv">
          <h1 className="ul 1heading">
            Import Export at one click
          </h1>
          <h4 className="ul 2heading">
            Forget the old ways. Start Import at one click
          </h4>
        
        <div className="lowerdiv">
          <h6 className="trust">
            Trusted by
          </h6>
          <div className="trustimg">
            <a href="/" className="logos">
              <img src="https://upload.wikimedia.org/wikipedia/en/e/e4/National_University_of_Computer_and_Emerging_Sciences_logo.png" alt="" />
            </a>
          </div>
          </div>
        </div>
      </div>

      <div className="imgdiv">
          <a href="/" className="sideimg">
              <img src="https://img.freepik.com/free-vector/import-export-infographic-hand-drawn_23-2149165167.jpg?w=2000" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
