import { createRoot } from "react-dom/client";
import Header from "./Header";
import Maincontent from "./Maincontent";

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <Maincontent />
  </>
);
