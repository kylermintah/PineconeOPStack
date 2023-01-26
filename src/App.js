import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./components/Title";
import Action from "./components/Action";
import OPStackExplanation from "./components/OPStackExplanation";
import OPStackChampions from "./components/OPStackChampions";
import Community from "./components/Community";
import Tutorials from "./components/Tutorials";

function App() {
  return (
    <div>
      <Navbar />
      <div
        id="op-stack-champions"
        className="bg-transparent jumbotron-fluid p-5 Section"
      >
        <Title />
        <Action />
      </div>
      <div
        id="op-stack-champions"
        className="bg-transparent jumbotron-fluid p-5 Section"
      >
        <OPStackChampions />
      </div>
      <div
        id="op-stack-explanation"
        className="bg-transparent jumbotron-fluid p-5 Section"
      >
        <OPStackExplanation />
      </div>
      <div
        id="community"
        className="bg-transparent jumbotron-fluid p-5 Section"
      >
        <Community />
      </div>
      <div
        id="tutorials"
        className="bg-transparent jumbotron-fluid p-5 Section"
      >
        <Tutorials />
      </div>
    </div>
  );
}

export default App;
