const initialState = {
    language:'french'
}

const language = (state = initialState, action) => {
    switch(action.type){
        case "SET_LANGUAGE":
            return {
                ...state,
                language: action.payload,
            } 
        default: 
            return state
    }
}

export default language