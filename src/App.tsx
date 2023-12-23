import stylex from "@stylexjs/stylex";
import React from "react";
import "./App.css";
import { Button } from "./components/Button";

interface Styles {
  heading: {
    color: string;
    padding: string;
  };
  active: {
    color: string;
  };
}

const styles: Styles = stylex.create({
  heading: {
    color: "blue",
    padding: "1rem",
  },
  active: {
    color: "red",
  },
});

function App() {
  return (
    <>
      <h4 {...stylex.props(styles.heading, styles.active)}>
        Heading For Stylex
      </h4>
      <Button>Button</Button>
    </>
  );
}

export default App;
