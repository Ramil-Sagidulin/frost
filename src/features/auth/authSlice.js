import { createSlice } from "@reduxjs/toolkit";
import { getAccessToken, getUser } from "./authAPI";
import axios from "axios";
import {CheckCartItems} from "../../features/cart/cartSlice";

const initialState = {
    tokenInfo: JSON.parse(localStorage.getItem('tokenInfo')),//Информация о токене доступа и времени его жизни
    user: null,//Информация о пользователе
    loading: false,//Идёт ли получение токена либо загрузка данных пользователя.
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            //Обновить состояние загрузки на true или false.
            state.loading = action.payload;
        },
        setTokenInfo: (state, action) => {
            state.tokenInfo = action.payload;
            //Обновить состояние токена формат которого должен соответствовать объекту:AccessToken, expiresIn.
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const checkTokenAndGetUser = () => (dispatch, getState) => {
    const state = getState();

    if (!state.auth.loading) {
        dispatch(setLoading(true));

    }
    if (state.auth.tokenInfo && state.auth.tokenInfo.expiresIn > new Date().getTime()) {

        axios.defaults.headers.common['Authorization'] = `Bearer ${state.auth.tokenInfo.accessToken}`;
        getUser()
            .then(user => {
                dispatch(CheckCartItems());
                dispatch(setUser(user));
                dispatch(setLoading(false))

            })
            .catch(()=>{
                dispatch(setLoading(false))
            });
    } else {
        dispatch(setLoading(false));
    }
};

export const signIn = (username, password) => dispatch => {
    dispatch(setLoading(true));
    getAccessToken(username, password)
        .then(tokenInfo => {
            dispatch(setTokenInfo(tokenInfo));
            localStorage.setItem('tokenInfo', JSON.stringify(tokenInfo));
            dispatch(checkTokenAndGetUser())
        })
        .catch(()=>{
            dispatch(setLoading(false));
            alert('Не правильно введен логин или пароль')
        });
};

export const signOutAuth = () => dispatch=> {

     localStorage.removeItem('tokenInfo');
     dispatch(setUser(null));
     dispatch(setTokenInfo(null));
   

};
export const { setUser, setLoading, setTokenInfo } = authSlice.actions;

export default authSlice.reducer;
