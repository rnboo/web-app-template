import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      <div className="sidebar">
        <ul>
          <li>
            <a href="https://react.dev/learn/typescript" target="_blank">
              React
            </a>
          </li>
          <li>
            <a
              href="https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example"
              target="_blank"
            >
              Typescript
            </a>
          </li>
          <li>
            <a href="https://webpack.js.org/concepts/" target="_blank">
              Webpack
            </a>
          </li>
          <li>
            <a href="https://expressjs.com/de/guide/routing.html" target="_blank">
              Express
            </a>
          </li>
          <li>
            <a href="https://www.mongodb.com/docs/drivers/node/current/" target="_blank">
              MongoDB
            </a>
          </li>
          <li>
            <a href="https://jestjs.io/docs/getting-started" target="_blank">
              Jest
            </a>
          </li>
        </ul>
      </div>
      <div className="main">
        <p>Key Features:</p>
        <ul>
          <li>
            <b>Modern & Popular Stack:</b> Leverage the latest and well-maintained libraries and
            frameworks.
          </li>
          <li>
            <b>TypeScript Magic:</b> Benefit from strong typing and improved code safety.
          </li>
          <li>
            <b>Hot Reloading & Development Tools:</b> Work efficiently with a pre-configured
            development environment.
          </li>
          <li>
            <b>Built-in Routing & API:</b> Start integrating API calls and routing easily.
          </li>
          <li>
            <b>Production-Ready:</b> Generate optimized builds for deployment.
          </li>
          <li>
            <b>Testing Essentials:</b> Integrate unit and integration testing for better code
            quality.
          </li>
          <li>
            <b>Flexible & Customizable:</b> Adapt the boilerplate to your specific needs.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
