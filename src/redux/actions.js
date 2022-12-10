export function addFavorites(character) {
    return {
        type: "ADD_FAV",
        payload: character
    }
}

export const removeFavorites = (id) => {
    return {
        type: "REMOVE_FAV",
        payload: id,
    }
}
export function filterCards(gender) {
    return {
        type: "FILTER",
        payload: gender
    }
}
export function orderCards(id) {
    return {
        type: "ORDER",
        payload: id
    }
}