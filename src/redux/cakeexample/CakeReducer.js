import { PANI_PURI } from "./CakeType";

//initial state value
const initialState={
    numOfPaniPuris:100
}
const paniPuriReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'PANI_PURI': 
            return{
                numOfPaniPuris : state.numOfPaniPuris - 1
            }
            break;

        default: return state;
            break;
    }
}
export default paniPuriReducer;
