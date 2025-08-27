import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/My Image2.png"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Anish Raj</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            I’m Anish, the founder of TradeDock, a trading platform I built in 2024 while pursuing my BTech in Computer Science. TradeDock started as a passion project inspired by my interest in the broking industry, and today it reflects my vision of creating simplified, tech-driven solutions for traders.
          </p>
          <p>
            I’m deeply interested in fintech, web development, and trading systems, and I’m working towards building products that make trading more accessible and efficient.
          </p>
          <p>Outside of work, I enjoy playing football, which keeps me grounded and focused.</p>
          <p>
            Connect on <a href="https://www.linkedin.com/in/er-anish/">linkedin</a> / <a href="https://www.instagram.com/er_anishraj/">instagram</a> /{" "}
            <a href="anishrajyadav97@gmail.com">e-mail</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;