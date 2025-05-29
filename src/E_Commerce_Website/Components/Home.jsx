import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, ApiData } from '../Store/Slice'
import { NavLink } from 'react-router';
export default function Home() {
    const ProductList=useSelector((state)=>state.product.ProductList)
    const error=useSelector((state)=>state.product.error)
    const loading=useSelector((state)=>state.product.loading)
    const Cart=useSelector((state)=>state.product.Cart)
    const dispatch=useDispatch()

    useEffect(()=>{
        let timer=setTimeout(() => {

            dispatch(ApiData())
        }, 1000);

       return ()=>{
        clearTimeout(timer)
       }
    },[dispatch])
  return (
    <div>
        <div>
            <ShowProducts  ProductList={ProductList} error={error} loading={loading} Cart={Cart} />
        </div>
    </div>
  )
}

// list data
export const ShowProducts=({ProductList,error,loading,Cart})=>{
    const dispatch=useDispatch()

    const handleAdd=(id)=>{
    let product=Cart.find((item)=>item.id===id);
    if(product){
        alert("Product Already Added");
    }else{
        alert("Go to Cart Page")
        dispatch(addProduct(id));

    }
    }
    return(
        <>
     <div className="bg-gray-900 min-h-screen text-white flex flex-col">
    {/* Header */}
    <header className="bg-gray-700 p-7 sticky top-0">
        <h1 className="text-3xl font-bold text-center text-white">Home Page</h1>
        <NavLink to={'/cart'}><strong style={{color:'blue'}}>CART</strong></NavLink><br />
        <NavLink to={'/MyOrders'}><strong style={{color:'blue'}}>MyOrders</strong></NavLink>
    </header>

    {/* Main Content */}
    <main className="flex-grow p-4">
        

        {error ? (
            <h1 className="text-red-500 text-2xl text-center">Error</h1>
        ) : loading ? (
            <h1 className="text-gray-300 text-2xl text-center">Loading...</h1>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {ProductList.map((item) => (
                    <div
                        key={item.id}
                        className="bg-gray-800 p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div className="text-xl font-semibold mb-2">{item.title}</div>
                        <div className="text-lg text-green-400 font-bold mb-1">${item.price}</div>
                        <div className="text-sm text-yellow-400 mb-2">Rating: {item.rating.rate}</div>
                        <div className="flex justify-center mb-2">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-40 object-contain"
                            />
                        </div>
                        <div className='text-center color-blue-100'>
                            <NavLink to={`/product/${item.id}`} style={{color:"lightblue"}}>View More</NavLink>
                        </div>
                        <div className="text-center">
                            <button
                                onClick={() => handleAdd(item.id)}
                                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                            >
                                ADD To Cart
                            </button>
                        </div>
                        
                    </div>
                ))}
            </div>
        )}
    </main>
    {/* Footer */}
    <footer className="bg-gray-700 p-4 text-center text-sm text-gray-200">
        Made by Sanjay @2025
    </footer>
</div>    
        </>
    )
}
