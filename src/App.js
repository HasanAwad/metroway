import "./App.css";
import { Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Home />
    </Router>
  );
}

export default App;
