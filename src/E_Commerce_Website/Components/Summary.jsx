import React, { } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router';
import { decrement, increment } from '../Store/Slice';
export default function Summary() {
    const Cart=useSelector((state)=>state.product.Cart);
    
    const dispatch=useDispatch();
       
    let total=Cart.reduce((x,item)=>{
        return x+item.price*item.count;
    },0);

    const handleIncrement=(id)=>{
        dispatch(increment(id))
        console.log(id)

    }
    const handledecrement=(id)=>{
        dispatch(decrement(id))
        console.log(id)
    }

    

   

  return (
     <div className="bg-gray-500 min-h-screen text-white p-6 flex flex-col">
           
            <header className="bg-gray-700 p-4 mb-6 rounded-lg">
                <h1 className="text-3xl font-bold text-center">Summary</h1>
            </header>

           
            <main className="flex-grow space-y-6">
                <div className="text-xl text-gray-300 text-center">
                    Selected Items: {Cart.length}
                </div>

                {Cart.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Cart.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white-500 p-4 rounded-2xl shadow-md space-y-3"
                            >
                                <div className="text-lg font-semibold text-gray-100">{item.title}</div>
                                <div className="text-green-400 font-bold">${item.price}</div>

                              
                                <div className="flex items-center space-x-4">
                                    <button
                                    onClick={()=>handleIncrement(item.id)}
                                     
                                      
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg"
                                    >
                                        +
                                    </button>
                                    <p>{item.count}</p>
                                    <button
                                      onClick={()=>handledecrement(item.id)}
                                    

                                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg"
                                    >
                                        -
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-400 text-lg">Cart is empty</div>
                )}

                {/* Summary Footer */}
                <div className="mt-8 text-center">
                    <div className="text-2xl font-bold text-green-300 mb-4">
                        Total: ${total.toFixed(2)}
                    </div>
                   <NavLink to={'/shipping'}>
                     <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-xl text-lg">
                        CheckOut
                    </button>
                   </NavLink>
                </div>
            </main>
        </div>
  )
}
