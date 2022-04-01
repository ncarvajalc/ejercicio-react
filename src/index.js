import Museums from "./components/museums";
import * as ReactDOMClient from "react-dom/client";
import Banner from "./components/banner";

const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container);

root.render(
  <>
    <Banner />
    <Museums />
  </>
);
