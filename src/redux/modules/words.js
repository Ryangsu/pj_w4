// widgets.js
import {db} from "../../firebase"
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore"


// Actions
const CREATE = 'words/CREATE';
const LOAD = 'words/LOAD';

const initialState = {
    list : []
}

export function createWords(words){
    return{type: CREATE, words : words};
}

export function loadWords(words_list){
    return {type: LOAD, words_list}
}

// Action Creators
// export function loadWidgets() {
// return { type: LOAD };
// }

// export function createWidget(widget) {
// return { type: CREATE, widget };
// }

// export function updateWidget(widget) {
// return { type: UPDATE, widget };
// }

// export function removeWidget(widget) {
// return { type: REMOVE, widget };
// }

//미들웨어
export const loadWordsFB = () => {
    return async function (dispatch) {
        const words_data = await getDocs(collection(db, "words"));

        let words_list = [];

        words_data.forEach((w)=> {
            words_list.push({id: w.id, ...w.data()})  
        });

        console.log(words_list);

        dispatch(loadWords(words_list));
    }
}

export const addWordsFB = (words) => {
    return async function(dispatch) {
       const docRef = await addDoc(collection(db, "words"), words);
       const _words = await getDoc(docRef);
       const word = {id:_words.id, ..._words.data()};
        
       console.log(word)
    }
}

// Reducer

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "words/LOAD": {
            console.log(action.words_list)
            return {list : action.words_list};
        }    
    
        case "words/CREATE": {
            const new_word_list = [...state.list, action.words];
            return {list : new_word_list};
        }
        default: return state;
    }
}

