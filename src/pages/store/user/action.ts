import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";

export enum fetchUserEnum {
    FETCH_USERS_START = "FETCH_USERS_START",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_FAIL = "FETCH_USERS_FAIL",
}

interface IFetchUsersStartAction {
    type: typeof fetchUserEnum.FETCH_USERS_START
}

interface IFetchUsersSuccessAction {
    type: typeof fetchUserEnum.FETCH_USERS_SUCCESS,
    payload: any
}

interface IFetchUsersFailAction {
    type: typeof fetchUserEnum.FETCH_USERS_FAIL,
    payload: any
}

export type TUserAction = 
IFetchUsersFailAction | 
IFetchUsersStartAction | 
IFetchUsersSuccessAction;

export const fetchUserStartActionCreator = (): IFetchUsersStartAction=>{
    return {
        type: fetchUserEnum.FETCH_USERS_START
    }
}

export const fetchUserSuccessActionCreator = (data:any): IFetchUsersSuccessAction=>{
    return {
        type: fetchUserEnum.FETCH_USERS_SUCCESS,
        payload: data
    }
}

export const fetchUserFailActionCreator = (error:any): IFetchUsersFailAction=>{
    return {
        type: fetchUserEnum.FETCH_USERS_FAIL,
        payload: error
    }
}

export const getUserDataActionCreator = 
(): ThunkAction<void, RootState, unknown, TUserAction> => 
( dispatch, getState) => {
    async function initData(){
        dispatch(fetchUserStartActionCreator())
        try{
            const {data} = await axios.get("https://www.fastmock.site/mock/86d37e95fbce2dea6eec6ef836f93ca3/api/users/list");
            console.log("data",data.data.list);
            dispatch(fetchUserSuccessActionCreator(data.data.list));
        }catch(error:any){
            dispatch(fetchUserFailActionCreator(error?.msg));
        }
    }
    initData()
}