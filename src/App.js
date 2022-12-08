import "./App.css";
function App() {
  return (
    <div>
      <img
        className="pic"
        src={process.env.PUBLIC_URL + "/bio.jpg"}
        style={{ margin: "auto" }}
        alt="icon"
      ></img>
      <h1 className="title">Chi-Hsuan Lee</h1>
      <h2 className="title2">
        An undergraduate student major in computer science.
      </h2>
      <h3 className="content">
        {" "}
        🌱 I'm currently learning{" "}
        <strong>
          React, Express, JavaScript, TypeScript, Web Development and Deutsch.
        </strong>
      </h3>
      <div className="imageContainer">
        <a href="mailto:hi@chihsuan-lee.dev">
          <img
            src="https://img.shields.io/badge/E--Mail-hi%40chiusuan--lee.dev-blue?style=for-the-badge&logo=Gmail "
            alt="E-Mail: hi@chihsuan-lee.dev"
          ></img>
        </a>

        <a href="https://code.chihsuan-lee.dev">
          <img
            src="https://img.shields.io/badge/GitHub-LeeCH--OeO-2ea44f?style=for-the-badge&logo=GitHub"
            alt="GitHub: LeeCH-OeO"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default App;
