const initialState = {
    myFavorites: []
}


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_FAV':
            return {
                ...state, myFavorites: [...state.myFavorites, action.payload]
            }

            case 'REMOVE_FAV':
                const updatefav = state.myFavorites.filter((char) => {
                    return char.id !== Number(action.payload); // Utiliza "return" para devolver el resultado del filtro
                });
                return { ...state, myFavorites: updatefav };

        default:
            return state


    }

}



export default rootReducer