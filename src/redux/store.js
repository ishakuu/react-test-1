import {createStore, combineReducers , applyMiddleware , compose } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import dataReducer from './reducers/dataReducer';
import uiReducer   from './reducers/uiReducer';

const initialeState = {};

const saveToLocalStorage = (state)=> {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state',serializedState);
    }catch(e) {
        console.log(e)
    }
}
const loadStateFromStorage = (state)=> {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null ) return undefined;

        return JSON.parse(serializedState);
        
    }catch(e) {
        console.log(e)
    }
}
const presistedState = loadStateFromStorage();
const middleware = [thunk];
const reducers = combineReducers({
    user: userReducer,
    data: dataReducer,
    UI: uiReducer
});
const store = createStore(reducers , presistedState , compose(applyMiddleware(...middleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

store.subscribe(()=>{saveToLocalStorage(store.getState())});

export default store ;