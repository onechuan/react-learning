import { Component } from "react";

interface IProps{
    users:{
        name:string,
        age:number
    }[]
}

class UserList extends Component<IProps>{
    render(){
        const { users } = this.props;
        return(
            <ul>
                {
                    users.map((user:{
                        name:string,
                        age:number
                    },index)=>{
                        return <li key={index}>{user.name}</li>
                    })
                }
            </ul>
        )
    }
}

export default UserList;