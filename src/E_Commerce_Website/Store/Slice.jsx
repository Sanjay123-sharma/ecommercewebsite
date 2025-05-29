import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// action
export const ApiData=createAsyncThunk('product',async()=>{
    let response=await fetch('https://fakestoreapi.com/products');
    let data=response.json();
    return data;
});

export const MySlice=createSlice({
    name:'product',
    initialState:{
        loading:false,
        ProductList:[],
        error:null,
        Cart:[],
        Order:[]
    },
    reducers:{
        addProduct:(state,action)=>{
            let list=state.ProductList;
            let product=list.find((item)=>item.id===action.payload)
            state.Cart.push({id:product.id,title:product.title,image:product.image,rate:product.rating.rate,price:product.price,category:product.category,count:1})
        },
        removeProduct:(state,action)=>{
            state.Cart=state.Cart.filter((item)=>item.id!==action.payload)
        },
        removeAllProducts:(state)=>{
            state.Cart=[]
        },
        addOrder:(state)=>{
            state.Order=[...state.Cart]
        },
        removeOrder:(state,action)=>{
            state.Order=state.Order.filter((item)=>item.id!==action.payload)
        },
        increment:(state,action)=>{
            let res=state.Cart.find((item)=>item.id===action.payload)
            if(res){
               res.count=res.count+1
            }
        },
        decrement:(state,action)=>{
            let res=state.Cart.find((item)=>item.id===action.payload)
            if(res){
                res.count<=1?alert('value cannot be -ve or 0'):res.count=res.count-1        
            }
        },
        
    },
    extraReducers:(boiler)=>{
        boiler.addCase(ApiData.pending,(state)=>{
            state.loading=true
        }).addCase(ApiData.fulfilled,(state,action)=>{
            state.loading=false
            state.ProductList=action.payload
        }).addCase(ApiData.rejected,(state,action)=>{
            state.loading=false 
            state.error=action.payload
        })

    }
})

export const {addProduct,removeProduct,removeAllProducts,addOrder,removeOrder,increment,decrement}=MySlice.actions

export default MySlice.reducer