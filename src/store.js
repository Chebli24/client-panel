import {createStore, combineReducers, compose} from "redux";
import firebase, { initializeApp } from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer, } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
//Reducers
//@todo

const firebaseConfig = {
    apiKey: "AIzaSyDQLIyviZ_NTJsQu-mPKf_Wx3s_6wGSSKs",
    authDomain: "reactclientpanel-2b04d.firebaseapp.com",
    databaseURL: "https://reactclientpanel-2b04d.firebaseio.com",
    projectId: "reactclientpanel-2b04d",
    storageBucket: "reactclientpanel-2b04d.appspot.com",
    messagingSenderId: "514944972518",
    appId: "1:514944972518:web:3c2b3eb0c9e61aeba2ad27",
    measurementId: "G-XGX1CHFD11"
};

//react-redux-firebase config
const rrfConfing = {
    userProfile: 'users', 
    useFirestoreForProfile: true
}

//Init firebase instance
firebase.initializeApp(firebaseConfig);
//Init firestore
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true};
firestore.settings(settings);   

//Add reactreduxfirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfing),
    reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers ({
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

//create initial state 
const initialState = {};

//create store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
));

export default store;
