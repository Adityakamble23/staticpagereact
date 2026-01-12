import { createRoot } from "react-dom/client";
import Header from "./Header";
import Maincontent from "./Maincontent";
import { Fragment } from "react";
import About from "./about";
import Myinterest from "./Myinterest";
import Footer from "./Footer";

createRoot(document.getElementById("root")).render(
  <Fragment>
    <Header />
    <Maincontent />
    <About />
    <Myinterest />
    <Footer />
  </Fragment>
);
