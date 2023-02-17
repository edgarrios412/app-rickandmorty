export const GET_CHARACTER = "GET_CHARACTER";
export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_COMMENTS = "GET_COMMENTS";
export const CLEAR_COMMENTS = "CLEAR_COMMENTS";
export const UPDATE_COINS = "UPDATE_COINS";

export const getCharacter = (id) => {
    return (dispatch) => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json())
        .then(data => dispatch({ type: GET_CHARACTER, payload: data}))
    }
}

export const getCharacters = (id) => {
    return (dispatch) => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json())
        .then(data => {
            if(data.name){
              return dispatch({ type: GET_CHARACTERS, payload: data})
            } else{
              const random = Math.floor(Math.random()*825)
              fetch(`https://rickandmortyapi.com/api/character/${random}`)
              .then(res => res.json())
              .then((data) => dispatch({ type: GET_CHARACTERS, payload: data}))
            }})
    }
}

export const getComments = (n) => {
  return (dispatch) => {
      fetch(`https://rickandmortyapi.com/api/character/${n}`)
      .then(res => res.json())
      .then(data => dispatch({type: GET_COMMENTS, payload: data}))
  }
}

export const updateCoins = (cant) => {
  return {type: UPDATE_COINS, payload:cant}
}

export const clearComments = () => {
  return {type: CLEAR_COMMENTS}
}
