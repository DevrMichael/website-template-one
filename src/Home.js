import React from "react";

function Home() {
  return (
    <>
      <header>
        {" "}
        <div>Logo</div>
        <div>
          <a href="/plans">Plans and services</a>
          <a href="/green">Why Go Green?</a>
          <a href="/aboutus">About Us</a>
          <a href="/customerservice">Customer Service</a>
        </div>
        <div>
          <button>Sign Up</button>
          <button>My Account</button>
        </div>
      </header>
      <body>
        <div className="div-one-hero">
          <h1>The POWER to make a difference.</h1>
          <h2>
            You can help make the planet cleaner and greener with 100% renewable
            energy.
          </h2>
          <div>
            <input type="text" placeholder="Enter your ZIP code" />
            <button>Get Started</button>
          </div>
        </div>
        <div className="div-two-locations">
          <div>
            <p>Over 20 years of providing solar and wind energy to residents of:</p>
            <div>
              <p>Texas</p>
              <p>Illinois</p>
              <p>Pennsylvania</p>
              <p>Maryland</p>
              <p>New Jersey</p>
              <p>New York</p>
              <p>Massachusetts</p>
            </div>
          </div>
        </div>
        <div className="div-three-features">Three divs - features</div>
        <div className="div-four-mission">Mission statement</div>
        <div className="div-five-facts">Numbers / Facts</div>
        <div className="div-six-customer-service">Customer Service</div>
      </body>
      <footer>Footer</footer>
    </>
  );
}

export default Home;
