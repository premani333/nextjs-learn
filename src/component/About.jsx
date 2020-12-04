import React, { component, Component } from "react";

class About extends Component() {
  render() {
    return (
      <div className="container">
        <p>
          <ul>
            <li>
              Lorem ipsum dlior sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
            <li>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </li>
          </ul>
        </p>
        <style jsx>
          {`
            .container {
              padding-left: 2rem;
              padding-right: 2rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
          `}
        </style>
      </div>
    );
  }
}
export default About;
