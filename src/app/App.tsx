import Widget from "../components/Widget/Widget";

import { Link } from "react-router-dom";

import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h1>APP</h1>
      <div>
        <Link to='/'>Main page</Link>
        <Link to='/about'>About page</Link>
        <button
          onClick={() => {
            toggleTheme();
          }}
        >
          Change theme
        </button>
      </div>
      <Widget />
      <AppRouter />
    </div>
  );
};

export default App;
