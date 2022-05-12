import { Component } from "react";

interface IProps{
    colorList:{
        id: number;
        color: string;
    }[]
}

class ColorList extends Component<IProps>{
    render(){
        const { colorList } = this.props;
        return (
            <ul>
                {
                    colorList.map((colorItem:any)=>{
                        return <li key={colorItem.id} style={{backgroundColor:colorItem.color}}>{colorItem.color}</li>
                    })
                }
            </ul>
        )
    }
}

export default ColorList;