/* Config from https://github.com/reactjs/redux/tree/master/examples/real-world/src */

import * as React from "react"
import * as ReactDOM from "react-dom"
// import { AppContainer } from "react-hot-loader"
// import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
//noinspection TypeScriptCheckImport
import { configureStore } from './store/config-store'
import App from "./App"

// const initialState = {}
//
// function todoApp(state = initialState, action) {
//   // For now, don't handle any actions
//   // and just return the state given to us.
//   return state
// }

let store = configureStore()

const rootEl = document.getElementById("root")

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  rootEl
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require<{'default': typeof App}>("./App").default
    ReactDOM.render(
      <Provider store={store}>
        <NextApp />
      </Provider>
      ,
      rootEl
    )
  })
}
