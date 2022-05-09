import { useDispatch, useSelector } from "react-redux";
import { getProductDetail, productorDetailSlice } from "../../store/product";
import { useParams} from "react-router"
import { useEffect } from "react";
import axios from "axios";
import {  RootState,} from "../../store";
import { useAppDispatch,useTypedDispatch } from "../../store/hooks"



const ProductPage: React.FC = ()=>{
    const loading = useSelector( (state: RootState) => state.product.loading);
    const error = useSelector( (state: RootState) => state.product.error);
    const product = useSelector( (state: RootState) => state.product.data);
    const dispatch = useTypedDispatch();
    
    useEffect(()=>{
        dispatch(getProductDetail(18))
    },[]);
    
    return (
        <ul>
            {
                product.map((item:any,index:number)=>{
                    return <li key={index}>name:{item.name}, price:{item.price}</li>
                })
            }
        </ul>
    )
}

export default ProductPage;