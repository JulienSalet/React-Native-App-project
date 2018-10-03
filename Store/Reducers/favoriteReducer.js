const initialState = { favoriteFilm: [] }

function toggleFavorite(state = initialState, action) {
    let netState
    switch(action.type) {
        case 'TOGGLE_FAVORITE':
            const favoriteFilmIndex = state.favoriteFilm.findIndex(item => item.id === action.value.id)
            if (favoriteFilmIndex !== -1) {
                //supression
                nextState = {
                    ...state,
                    favoritesFilm: state.favoriteFilm.filter( (item, index) => index !== favoriteFilmIndex)
                }
            }
            else {
                //ajouter
                nextState = {
                    ...state,
                    favoritesFilm: [...state.favoriteFilm, action.value ]
                }
            }
            return nextState || state
        default:
            return state
    }
}

export default toggleFavorite