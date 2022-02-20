# React, Storybook, and Chromatic

This is a quick POC of creating react components as part of a Design System. The tools / technology under test are:

* [React](https://reactjs.org/)
* [Storyboard](https://storybook.js.org/)
* [Chromatic](https://www.chromatic.com/)

The approach was to use [Create React App](https://github.com/facebook/create-react-app) to bootstrap an application, then initialize Storybook via `npx sb init` to document the components. Then use Chromatic to manage the workflow and deployment of the Design System.

## Getting Started

* Running storybook: `npm run storybook`
* Running the react app itself: `npm start`

### Publishing to Chromatic

You'll need a project token to do this, [which documentation can be found here](https://www.chromatic.com/docs/setup#run-chromatic). I prefer to use environment variables for items like this so I have `CHROMATIC_PROJECT_TOKEN` set to the project variable.

## Overall

It worked pretty well from my surface level testing. I was able to create a component in the react app, document it via Storybook, and publish the Storybook via Chromatic

