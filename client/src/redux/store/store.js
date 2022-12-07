import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import rootReducer from '../reducer/root.reducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store


