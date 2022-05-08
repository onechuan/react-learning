import { fetchUserEnum, TUserAction } from "./action"

interface IUserState {
    users:Array<{
        name:string,
        age:number
    }>;
    loading: boolean;
    error: string | null;
}

const defaultState: IUserState = {
    users: [],
    loading: true,
    error: null
}

const userReducer = (state: IUserState = defaultState, action: TUserAction) => {
    switch(action.type){
        case fetchUserEnum.FETCH_USERS_START:
            return {...state, loading: true}
        case fetchUserEnum.FETCH_USERS_SUCCESS:
            return {...state, loading: false, users: action.payload}
        case fetchUserEnum.FETCH_USERS_FAIL:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}

export default userReducer;