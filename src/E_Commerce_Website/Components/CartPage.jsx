import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeProduct } from '../Store/Slice'
import Summary from './Summary';
import { NavLink } from 'react-router';

export default function CartPage() {
  const dispatch=useDispatch()
  const handleRemove=(id)=>{
    dispatch(removeProduct(id)); 
  }
  const Cart=useSelector((state)=>state.product.Cart);
  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col">
    {/* Header */}
    <header className="bg-gray-700 p-4 sticky top-0">
        <h1 className="text-3xl font-bold text-center text-white">Cart Page</h1>
        <NavLink to="/" className="text-blue-600 hover:underline">Home</NavLink>
    </header>

    {/* Main Content */}
    <main className="flex-grow p-2">
        {Cart.length === 0 ? (
            <h2 className="text-center text-gray-300 text-2xl mt-10">Your cart is empty</h2>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {Cart.map((item) => (
                   <div
  key={item.id}
  className="bg-gray-800 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full max-w-[250px] mx-auto"
>
                        <div className="text-xl font-semibold mb-2">{item.title}</div>
                        <div className="text-lg text-green-400 font-bold mb-1">${item.price}</div>
                        <div className="text-sm text-yellow-400 mb-1">Rating: {item.rate}</div>
                        <div className="flex justify-center mb-3">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-40 object-contain"
                            />
                        </div>
                        <div className="text-center">
                            <button
                                onClick={() => handleRemove(item.id)}
                                className="bg-red-600 hover:bg-red-700 text-white py-2 px-2 rounded-lg"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
                 <div>
    
    </div>
    <div>
        <Summary/>
    </div>
    
            </div>
            
        )}
    </main>
    
   

    {/* Footer */}
    <footer className="bg-gray-700 p-4 text-center text-sm text-gray-200">
        Made by Sanjay 2025
    </footer>
</div>

  )
}
