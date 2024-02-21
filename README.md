# ts-react-boilerplate

Boilerplate for a web-app created with TypeScript, React, Express, Webpack, MongoDB and Jest.

---
<img
  height="90"
  width="90"
  alt="react + ts logo"
  src="https://react-typescript-cheatsheet.netlify.app/img/icon.png"
  align="left"
/>

[React documentation](https://react.dev/learn/typescript) | [Typescript documentation](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example)
<br>

If you see anything wrong or missing, feel free to [file an issue](https://github.com/rnboo/web-app-template/issues/new/choose)!

<br>

---
[![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/de/guide/routing.html)
[![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)](https://webpack.js.org/concepts/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/docs/drivers/node/current/)
[![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/docs/getting-started)

## Tech stack

* **Frontend:** React, TypeScript, Webpack
* **Backend:** Express, MongoDB, TypeScript
* **Testing:** Jest
* **Build:** Webpack

## Why Use This Boilerplate?

* **Get started quickly:** Focus on your application logic instead of setting up the environment.
* **Modern stack:** Utilizes popular and well-maintained libraries and frameworks.
* **TypeScript:** Enjoys strong typing and code safety.
* **Testing:** Integrates testing libraries for unit and integration tests.

## Features

* Preconfigured development environment with hot reloading.
* Built-in routing and API integration.
* Production-ready build scripts.

## Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/rnboo/web-app-template.git
```

2. **Install dependencies:**

```bash
cd web-app-template && npm i
cd frontend && npm i
cd ../backend && npm i
```

3. **Set up MongoDB connection:**

- Create a `.env` file in the root directory and add your MongoDB connection URI:

```
MONGO_URI=mongodb://your-mongodb-connection-string
```

4. **Start the development server:** (in root dir)

```bash
npm run dev
```

5. **Build for production & start production build:** (in root dir)

```bash
npm run build
npm start
```
This will start both the backend and frontend servers. Navigate to `http://localhost:3000` in your browser to access the application.

6. **Start coding!**

## Additional Notes
