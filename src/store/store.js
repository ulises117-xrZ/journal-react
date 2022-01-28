//primero importamos los siguientes funciones de redux
//createStore crea el almacenamiento donde se guardara la info
//combineReducers como su nombre lo indica lo utilizaremos
//para poder usar mas de un reducer ya que por defecto
//createStore solo recibe un reducer
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from "redux-thunk";
import { uiReducer } from "../reducers/uiReducer";
import notesReducer from "../reducers/notesReducer";
const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer
});


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//luego vamos a importar el store a nuestro punto mas alto en react
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);