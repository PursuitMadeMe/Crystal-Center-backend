import React from "react";
import "../Pages/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <span>
        <img
          src="https://i.pinimg.com/736x/5b/54/11/5b5411c51629bb2480cfda08aa877bda.jpg"
          alt="Chakra Woman"
         
        />

        <h1>NAMASTE TO A BRAND NEW YOU.</h1>
        <br/>
        <Link to="/krystals">
        <button>Start Now</button>
        </Link>
      </span>

    </div>
  );
}

export default Home;
      {/* <img src="../Image3.webp" alt="Chakra-stones" width={500} height={500} /> */}
