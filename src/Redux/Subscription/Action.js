import api from "@/config/api";
import * as types from "./ActionTypes"
export const getUserSubscription = (jwt) =>{
    return async (dispatch) =>{
        dispatch({
            type: types.GET_USER_SUBSCRIPTION_REQUEST
        });
        try {
            const repose = await api.get("/api/subscriptions/user",{
                header:{
                    "Authorization":`Bearer${jwt}`
                }
            });
            dispatch({
                type: types.GET_USER_SUBSCRIPTION_SUCCESS,
                playload: response.data,
            });
            console.log("user subscriptin", response.data)
        } catch (error) {
            console.log(error)
            dispatch({
                type: types.GET_USER_SUBSCRIPTION_FAILURE,
                payload: error.message,
            });
            
        }
    };
};
export const upgradeSubscription = ({planType}) =>{
    return async (dispatch)=> {
        dispatch({type: types.UPGRADE_SUBSCRIPTION_REQUEST});
        try {
            const response = await api.patch("/api/subscriptions/upgrade", null, {
                params:{
                    planType: planType,
                },
            });
            dispatch({
                type: types.UPGRADE_SUBSCRIPTION_SUCCESS,
                payload: response.data,
            });
            console.log("upgrade subscription", response.data);
        } catch (error) {
            console.log(error.response.data)
            dispatch({
                type: types.UPGRADE_SUBSCRIPTION_FAILURE,
                payload: error.message,
            })
        }
    }
}