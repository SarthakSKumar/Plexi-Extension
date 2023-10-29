import React from "react";
import {
  Router,
  Link,
  goBack,
  goTo,
  popToTop,
} from "react-chrome-extension-router";
import PropTypes from "prop-types";

const Three = ({ message }) => (
  <>
    <h3>{message}</h3>
    <button onClick={popToTop}>Click me to pop to the top</button>
    <button onClick={goBack}>Click me to go back to Route Two</button>
  </>
);

const Two = ({ message }) => (
  <div>
    This is component Two. I was passed a message:
    <p>{message}</p>
    <button onClick={goBack}>Click me to go back to component One</button>
    <button onClick={() => goTo(Three, { message })}>
      Click me to go to component Three!
    </button>
  </div>
);

const One = () => (
  <Link component={Two} props={{ message: "I came from component one!" }}>
    This is component One. Click me to route to component Two
  </Link>
);

Three.propTypes = {
  message: PropTypes.string,
};

Two.propTypes = {
  message: PropTypes.string,
};

One.propTypes = {
  message: PropTypes.string,
};

const App = () => {
  return (
    <div>
      <h1>This is your Router</h1>
      <Router>
        <One />
      </Router>
    </div>
  );
};

export default App;
