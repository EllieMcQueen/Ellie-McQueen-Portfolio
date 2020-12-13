import React from "react";
import { imgDir } from "../assets/projects/imgDir";
import Carousel from "react-bootstrap/Carousel";

const Projects = () => {
  const scanGoImgMapped = imgDir.projects.scango.map((img, i) => {
    return (
      <Carousel.Item key={i}>
        <img className="w-101" src={img} alt={`slide${i}`} />
      </Carousel.Item>
    );
  });

  const trackerAppImgMapped = imgDir.projects.trackerapp.map((img, i) => {
    return (
      <Carousel.Item key={i}>
        <img className="w-1000" src={img} alt={`slide${i}`} />
      </Carousel.Item>
    );
  });

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">PROJECTS</h2>
      <article className="scango">
        <h2>Scan & Go</h2>
        <p>
          <strong>Context:</strong> Devmountain Group Project with 2 week time
          limit. The goal was to make a full stack site that is intuitive, user
          friendly, and engaging while working on a team.
        </p>
        <p>
          <strong>Description:</strong> Scan&Go is a site that allows shoppers
          to use their phones to scan items then pay on their device. An 'exit
          pass' is generated and a user can view purchase history.
        </p>
        <p>
          <strong>Login credentials:</strong> Email: test@gmail.com Password:
          test , or feel free to register a new user.
        </p>
        <p>
          <strong>Test barcodes/UPC:</strong> 9780979305061, 9781594631870,
          9780349411903, 9780439662093{" "}
        </p>
        <p>
          <strong>Checkout process:</strong> Test credit card number is 4242
          4242 4242 4242, Enter any future date for expiration and CV and zip
          code can be any number.
        </p>
        <div className="project-links">
          <a href="https://scanandgo.jesusreyes.dev/">DEMO</a>
          <a href="https://github.com/Mobile-check-out-team/mobile-checkout">
            SOURCE
          </a>
        </div>
        <Carousel className="scanGoCarousel">{scanGoImgMapped}</Carousel>
      </article>
      <article className="trackerapp">
        <h2>Body Building Tracker</h2>
        <p>
          <strong>Context:</strong>Devmountain Personal Project with 2 week time limit. The
          goal was to make a full stack site that is fun, responsive, and easy
          to navigate.
        </p>
        <p>
          <strong>Description:</strong> Body Building Tracker is a private
          online tracker for body building. Users can create an account and
          enter in information (height, age, gender, weight and activity level)
          to calculate their TDEE, (Total Daily Energy Expenditure). From their
          they select their goal of bulking, maintaining, or cutting weight.
          Once that is selected they can calculate their macros. Macros will be
          the amount of calories they need each day from Protein, Carbs, and
          Fats. They also keep track of measurements to see how they are
          progressing. The goal is to log in and recalculate their macros and
          enter measurements every week to keep track of their progress. They
          are able to view their progress from each entry.
        </p>
        <p>
          <strong>Login credentials:</strong> Email: a Password: a, if you would
          like to calculate your macros you can create a new account.
        </p>
        <p>
          <strong>Road Map:</strong> Instructions on how to use the site and
          information why they are entering in that information and how it
          calculates into their goal. Ability to add pictures in progress. Information on what protein, carbs, and fats they should use. recipes' on different foods they can use to make meals based on their macros. Enter in remaining calories from protein, carbs, and fats for suggestions on what to eat If they need a certain amount to reach their goal at the end of the day. 
        </p>
        <div className="project-links">
          <a href="https://www.bodybuildingtracker.app">DEMO</a>
          <a href="https://github.com/EllieMcQueen/personal-project">SOURCE</a>
        </div>{" "}
        to view their progress from each entry.
        <Carousel className="trackerAppCarousel">
          {trackerAppImgMapped}
        </Carousel>
      </article>
      <article className="portfolio">
        <p>
          View this portfolio site's source code on{" "}
          <a href="https://github.com/EllieMcQueen/Ellie-McQueen-Portfolio">GitHub</a>
        </p>
      </article>
    </section>
  );
};
export default Projects;
