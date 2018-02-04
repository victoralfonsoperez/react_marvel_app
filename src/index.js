import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { devToolsEnhancer } from 'redux-devtools-extension'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(
  reducer,
  devToolsEnhancer(),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'),
)
registerServiceWorker()
