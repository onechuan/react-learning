import { Component } from "react";
import ColorList from "./color-list.component";
import UserList from "./userList.component";

class Article extends Component{
    state = {
        name:{
            firstName:"yichuan",
            lastName:"liu"
        },
        age:18,
        colors:[{
            id:1,
            color:"yellow"
        },{
            id:2,
            color:"blue"
        },{
            id:3,
            color:"green"
        }],
        users:[],
        searchString:""
    }
    

    componentDidMount(){
        fetch("https://www.fastmock.site/mock/86d37e95fbce2dea6eec6ef836f93ca3/api/users/list")
        .then(res=>{
            return res.json()
        })
        .then(users=>{
            console.log("users",users.data.list);
            this.setState(()=>{
                return {
                    ...this.state,
                    users:users.data.list
                }
            },()=>{
                console.log("statessss",this.state.users);
                
            })
        })
    }

    onSearchChange = (event: any)=>{
        console.log(event.target.value);
        const searchString = event.target.value.toLocaleLowerCase();
        
        this.setState({
            searchString
        })
    }

    onClickChangeName = ()=>{
        this.setState(()=>{
            return {
                name: {
                    ...this.state.name,
                    firstName:"pingping"
                }
            }
        },()=>{
            console.log(this.state);
            
        });
        console.log("name",this.state.name);
        
    }
    render(){
        const filteredColors = this.state.colors.filter(color=>{
            return color.color.toLocaleLowerCase().includes(this.state.searchString)
        })

        return (
            <>
                <input 
                    type="search" 
                    name="search" 
                    id="search" 
                    placeholder="search name" 
                    onChange={this.onSearchChange} />
                <h1>{this.state.name.firstName}</h1>
                <h2>age is {this.state.age}</h2>
                <button onClick={this.onClickChangeName}>Change name</button>
                <ColorList colorList={filteredColors}/>
                <UserList users={this.state.users}/>
            </>
        )
    }
}

export default Article;