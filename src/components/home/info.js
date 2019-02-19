import React from "react";
import { Link } from "gatsby";
import Title from "../global/Title";

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque dolorum, odit numquam dolore cumque provident natus
              nisi? Sint iure quis quisquam laborum tempore minus, velit
              consectetur vel maxime enim dolore qui delectus nostrum facilis
              dolor? Qui libero, impedit rem vero saepe necessitatibus in
              consectetur rerum maiores vel dolorum tempore magni!
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
