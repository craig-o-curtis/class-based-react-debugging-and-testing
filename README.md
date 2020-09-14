# React Testing and Debugging

This is the follow-along code from the LinkedInLearning course React: Testing and Debugging.

## Flow for type checking

1. Install

- npm i flow-bin --save-dev

2. In package.json, add script

```json
   ...
   "scripts": {
       ...
        "flow": "flow",
   }
```

3. Create `.flowconfig` file with `npm run flow init`

4. For every file to check types, add `// @flow` to the very top of the file

5. Run flow with `npm run flow`

## Setting up ESLint

1. Get the VS Code ESLint plugin

2. Install eslint globally `npm i -g eslint` or locally with `npm i --save-dev eslint`
   -- check globally installed packages with `npm list -g --depth 0`

3. `eslint --init`,

- select `To check syntax, find problems, and enforce code style`
- select `JavaScript modules (import/export`
- select `React`
- select `No` for TypeScript
- select `a` for `Browser` and `Node`
- select `Use a popular style guide`
- select `Airbnb`
- select `JSON`
- select `Yes` to install with npm

4. Check newly created `.eslintrc.json` file

5. Make sure that `jest` is listed in the `env` object:

```json
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest": true
  },
```

## Testing with Jest

1. Install VS Code Plugin `Jest Snippets`

- For shortcuts like `tbt`, `tbf`, `te`, `tm`, `tc`
- `tbt` outputs `expect(...).toBeTruthy()`
- `tbf` outputs `expect(...).toBeFalsy()`
- `te` outputs `expect(...).toEqual(...)`
- `tm` outputs `expect(...).toMatch(...)` // for Regular Expression patterns
- `tc` outputs `expect(...).toContain(...)` // for strings
- `tms` outputs `expect(...).toMatchSnapshot()` // for snapshot tests

2. Testing Snapshots - install `npm i react-test-renderer`
   -- See App.test.js
   -- creates **snapshots** folder
   -- Be sure to type `u` in test terminal to update snapshot

3. Adding coverage reports
   -- Add `"coverage": "npm run test -- --coverage",` as a new script in `package.json`

---

## NOTE - Current state of application running `npm run flow` shows why Flow is less than ideal compared to TypeScript

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
