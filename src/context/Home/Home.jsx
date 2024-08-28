import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles.scss";

function Home() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to Vite + React Blueprint</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more about them.
      </p>
      <div className="list-of-libraries">
        <h2>This is the list of installed libraries: </h2>
        <p>- React Router Dom</p>
      </div>
    </>
  );
}

export default Home;
