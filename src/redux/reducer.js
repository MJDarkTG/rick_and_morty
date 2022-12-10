const initialState = {
    myFavorites: [],
    allcharacters: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_FAV":
            // state.myFavorites.push(action.payload)
            return {
                ...state,
                myFavorites: [...state.allcharacters, action.payload],
                allcharacters: [...state.allcharacters, action.payload]
            }
        case "REMOVE_FAV":
            const filterFav = state.myFavorites.filter(
                (char) => char.id !== action.payload
            )

            return {
                ...state,
                myFavorites: filterFav
            }
        case "FILTER":
            const filteredChar = state.allcharacters.filter(char => char.gender === action.payload)
            return {
                ...state,
                myFavorites: filteredChar,
            }
        case "ORDER":
            const orderChar = state.allcharacters.sort((a, b) => {
                if (action.payload === "ascendente") {
                    if (a.id < b.id) return -1
                    if (b.id < a.id) return 1
                    return 0;
                }
                else {
                    if (a.id < b.id) return 1
                    if (b.id < a.id) return -1
                    return 0;
                }
            })
            return {
                ...state,
                myFavorites: [...orderChar]
            }

        default:
            return { ...state }

    }
}