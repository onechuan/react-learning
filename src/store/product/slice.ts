import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface IProductDetailSlice {
    loading: boolean;
    error: string | null;
    data: any;
}

const initialState: IProductDetailSlice = {
    loading: true,
    error: null,
    data: []
}

export const getProductDetail = createAsyncThunk(
    "productDetail/getProductDetail",
    async (params:number, thunkAPI)=>{
        const res = await axios.get("https://www.fastmock.site/mock/86d37e95fbce2dea6eec6ef836f93ca3/api/product/list")
        return res.data.data.list
    }
)

export const productorDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers:{},
    extraReducers: {
        [getProductDetail.pending.type]: (state:IProductDetailSlice)=>{
            state.loading = true;
        },
        [getProductDetail.fulfilled.type]:(state:IProductDetailSlice, action)=>{
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        [getProductDetail.rejected.type]:(state:IProductDetailSlice,action:PayloadAction<string|null>)=>{
            state.loading = false;
            state.data = action.payload;
            state.error = action.payload;
        }
    },
})