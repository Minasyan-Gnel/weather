import Layout from "./containers/layout";
import Bootstrap from "./bootstrap";

window.onload = () => {
    const root = document.getElementById("root");
    root.innerHTML = Layout();
    Bootstrap();
};