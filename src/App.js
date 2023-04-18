//import logo from "./logo.svg";
import "./App.css";
import Personal from "./components/personal";
import Education from "./components/education";
import Practical from "./components/practical";

const App = () => {
  return (
    <div>
      <h1 className="top">Resume Templater </h1>
      <div className="container">
        <Personal />
        <Education />
        <Practical />
      </div>
    </div>
  );
};

export default App;
