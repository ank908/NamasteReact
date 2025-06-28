import User from "./User.js";
import UserClass from "./UserClass.js";

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <p>
        We are a team of passionate food enthusiasts dedicated to bringing you
        the best culinary experiences. Our mission is to connect food lovers
        with the finest restaurants and recipes from around the world.
      </p>
      {/* <User name="Ankur Kumar(functionalComponent)" /> */}
      <UserClass name="Ankur(classComponent)" location="Bengaluru Class" />
      {/* <UserClass name="kumar(classComponent)" location="Bengaluru Class" /> */}
    </div>
  );
};

export default About;
