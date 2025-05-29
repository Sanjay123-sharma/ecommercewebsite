import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {  useNavigate } from "react-router";
import { addOrder, removeAllProducts } from '../Store/Slice';

export default function Shipping() {
     const [name, setName] = useState("");
  const [State, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandMark] = useState("");
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddress=(e)=>{
    e.preventDefault();
    setName('')
    setState('')
    setPinCode('')
    setAddress('')
    setLandMark('')
    dispatch(addOrder())
    dispatch(removeAllProducts());
    Navigate('/MyOrders')
  }
  return (
     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Enter Address
        </h1>

        <form onSubmit={handleAddress} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State:
            </label>
            <select
              value={State}
              onChange={(e) => setState(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">--select--</option>
              <option value="Delhi">Delhi</option>
              <option value="Amritsar">Amritsar</option>
              <option value="Gujrat">Gujrat</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Himachal">Himachal</option>
              <option value="Goa">Goa</option>
              <option value="Kerala">Kerala</option>
              <option value="Jammu">J&K</option>
              <option value="UP">UP</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Chennai">Chennai</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address:
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              LandMark:
            </label>
            <input
              type="text"
              value={landmark}
              onChange={(e) => setLandMark(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              pinCode:
            </label>
            <input
              type="number"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
           
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  )
}
