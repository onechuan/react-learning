import { connect } from "react-redux";
import React, { useEffect } from "react";
import { RootState } from "../store";
import { getUserDataActionCreator } from "../store/user/action";
const mapDataToProps = (state: RootState)=>{
    return {
        loading: state.user.loading,
        error: state.user.error,
        users: state.user.users
    }
}

const mapDisptchToProps = (dispatch: any)=>{
    return {
        getData: ()=>{
            dispatch(getUserDataActionCreator())
        }
    }
        
    
}

type PropsType = ReturnType<typeof mapDataToProps> & ReturnType<typeof mapDisptchToProps>

const Home: React.FC<PropsType> = (props)=>{
    const { users, loading, getData } = props;
    useEffect(()=>{
        getData()
    },[])


    return (<div>
       users: {users.map((item:any, index:number)=>{
           return <p key={index}>{item.name}</p>
       })}

       loading: {loading?"loading":"ok"}
    </div>)
}
export default connect(mapDataToProps, mapDisptchToProps)(Home);