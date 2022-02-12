import { addFetch } from "../counterReducer/counterReducer"

export const fetchCus = () => {
    return async dispatch => {
            const response = await fetch(`https://www.boredapi.com/api/activity`)
                const joke = await response.json();
                console.log(joke);
                dispatch(addFetch(joke))
    }
}