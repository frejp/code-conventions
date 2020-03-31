## WIP, leading edge, modern, tech and code conventions

Test-link: https://frejp.github.io/code-conventions/

Code conventions for a fully typed Apollo, TypeScript, React (Hooks) project.
We auto-generate the types for the graphQL api calls and then we type everything from there.

This is -modern- Apollo/React/Typescript, leading edge
technologies and code-conventions

This include folder/file structure

## U will need to add ur own add your own GitHub personal access token

The API is currently pointed at an AWS gateway endpoint which adds an authentication header in order to use the API.
Buy you should ur own API key.

Add your token in the App.router.tsx file.
Also add it in the .graphqlconfig in order to auto-generate typings from the graphql API

## Generate schema and typescript types

Generate schema

yarn graphql get-schema

yarn apollo codegen:generate --localSchemaFile=schema.graphql --target=typescript --includes='src/**/*.tsx,src/**/*.ts' --tagName=gql --outputFlat=src/graphql.ts


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
