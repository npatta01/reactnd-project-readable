import BlogApi from "../blogApi";
import * as Types from "./actionTypes"

export const fetchCategories = () => {
    return (dispatch) => {
        BlogApi.getCategories().then((response) => {
            const {categories} = response.data;
            dispatch({type: Types.FETCH_CATEGORY, categories})
        });
    }
}