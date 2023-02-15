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
            <p>
              Over 20 years of providing solar and wind energy to residents of:
            </p>
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
        <div className="div-three-features">
          <div>
            <div>
              <img src="" alt="" />
              <h2>Go local. Go Solar.</h2>
              <p>
                Tap into 100% solar electricity from a Green Mountain Energy
                solar park right here in Texas.
              </p>
              <button>Sign Up</button>
            </div>
            <div>
              <img src="" alt="" />
              <h2>Give back and support green.</h2>
              <p>
                Sun Club makes communities greener by funding local
                sustainablity projects for nonprofits. Donate to help your
                community today.
              </p>
              <button>Learn more</button>
            </div>
            <div>
              <img src="" alt="" />
              <h2>Clean and free all night.</h2>
              <p>
                Get free 100% wind energy from 8 p.m. to 6 a.m. with the
                Pollution Free All Nighter Plan.
              </p>
              <button>See the Plan</button>
            </div>
          </div>
        </div>
        <div className="div-four-mission">
          <div>
            <h2>Our mission.</h2>
            <p>It all started in Vermont in 1997. Our passion for protecting the environment led us to our mission: to use the power of consumer choice to change the way power is made. Today, as the longest-serving renewable energy retailer, we remain committed to sustainability every step of the way. By offering only products with an environmental benefit and operating with a zero-carbon footprint, we’re living our promise to the planet, inside and out.</p>
          </div>
        </div>
        <div className="div-five-facts">Numbers / Facts</div>
        <div className="div-six-customer-service">Customer Service</div>
      </body>
      <footer>Footer</footer>
    </>
  );
}

export default Home;
