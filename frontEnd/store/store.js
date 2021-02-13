import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];


// export default store=createStore(reducer);


const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});
export default  store = createStore(reducer, composeEnhancers(
  applyMiddleware(...middleware),
));