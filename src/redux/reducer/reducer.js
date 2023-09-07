const initialState = {
    myFavorites: [],
    allCharacters:[]
}


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_FAV':
            return {
                
                ...state,  allCharacters: [...state.allCharacters, action.payload]
                
            }

            case 'REMOVE_FAV':
                const updatefav = state.myFavorites.filter((char) => {
                    return char.id !== Number(action.payload); // Utilizo "return" para devolver el resultado del filtro
                });
                return { ...state, myFavorites: updatefav };

            case 'FILTER': 
            const allCharactersFilter = [...state.allCharacters];
            const CharGender = allCharactersFilter.filter((char) => {
                return  char.gender===action.payload 
            })
            return {...state, myFavorites:CharGender}

            case 'ORDER': 
            const allCharactersOrder = [...state.allCharacters];
            allCharactersOrder.sort((pers1, pers2)=> {
                if (action.payload=== 'A') {
                    return pers1.id - pers2.id
                } else if (action.payload==='D') {
                    return pers2.id - pers1.id;
                } else {
                    return 0
                }
            });
            return {...state, myFavorites: allCharactersOrder}


//Caso default por si no pasa ninguno de los casos anteriores que simplemente devuelva el estado 
        default:
            return state


    }

}



export default rootReducer