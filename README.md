# react-hooks-todo

This project replaces Redux from [Redux ToDo App](https://redux.js.org/basics/exampletodolist) with React Hooks

- This project was created for a talk at [Seattle ReactJS December 2018 Meetup](https://www.meetup.com/seattle-react-js/events/256260457/)
- Slides of the talk can be viewed [here](https://slides.com/trivikram/will-react-hooks-replace-redux#/)
- Video of the talk can be viewed [here](https://www.youtube.com/watch?v=8xrkgr9cWDs)
- It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run this project

- Fork this repo
- Clone it on your machine
- Run `yarn` or `npm install` to install dependencies
- Run `yarn start` or `npm run start` to start the server

## How to replace Redux with React Hooks

- Replace `combineReducers` with a function to remove dependency on `redux` in `reducers/index.js` ([doc](https://redux.js.org/basics/reducers))
- Create StoreContext which returns createContext ([doc](https://reactjs.org/docs/context.html))
- Create Store using this StoreContext which creates Provider with useReducer
- Comment `VisibleTodoList` and `Footer` in `App.js`, uncomment them while working on each
- Remove redux from AddToDo, and use dispatch from useContext
- Remove redux from VisibleTodoList, and use [state, dispatch] from useContext
- Remove redux from Footer, and use [state, dispatch] from useContext
- Remove redux and react-redux from the project!

## It's too difficult, can I just see the solution?

- Doing it by following the steps will help you learn React Hooks. If you want help for specific steps, the experimental commits can be viewed in [hooks branch](https://github.com/trivikr/react-hooks-todo/commits/hooks)
- Single commit which removes redux in favor of React Hooks can be viewed in [hooks-final branch](https://github.com/trivikr/react-hooks-todo/commit/86ce4e176df8670c5d4558d0673d679aa2d9db0f)
