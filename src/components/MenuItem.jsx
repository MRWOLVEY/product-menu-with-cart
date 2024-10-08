import { useEffect, useState } from 'react'
import React from 'react'
import classNames from 'classnames';

function MenuItem({item,state,dispatch,id}) {

    const [active,setActive]=useState(false);
    const [no_items,setNo_items]=useState(0);
    const [fillColor,setFillColor]=useState(["#fff","#fff"]);

    useEffect(() => {
      state.items[id].no_items>0?setActive(true):setActive(false);
      setNo_items(state.items[id].no_items);
    }, [state.items[id].no_items])

    useEffect(() => {
        setFillColor(["#fff","#fff"])
    },[active])

    const handleAddRemove = () => {

    }
  return (
    <div className='menu-item block mb-4 w-fit'>
        <div className={classNames('image-and-button relative w-fit mb-4 border-2 rounded-lg box-border transition duration-100',{'border-red-500':active},{'border-[#fcf9f4]':!active})} >
          <picture>
            <source media="(min-width: 1024px)" srcSet={item.image.desktop} />
            <source media="(min-width: 768px)" srcSet={item.image.tablet} />
            <img className=" rounded-md shadow-inner lg:w-48" src={item.image.mobile} alt="Responsive Image"/>
          </picture> 
          {!active&&<div className='flex justify-center absolute w-full -bottom-4'>
            <button className="add_to_cart flex justify-center items-center bg-white w-32 font-semibold text-black text-xs p-2 border border-gray-500 rounded-full
          hover:text-orange-700 hover:border-orange-700 transition duration-100" onClick={() => {setNo_items(no_items+1);dispatch({type:"ADD_TO_CART",payload:{id:id}})}}>
              <img src="assets/images/icon-add-to-cart.svg" alt="" className="w-4 h-4 mr-1" />
              <p>Add to Cart</p>
          </button>
          </div>
          }
          {active&&
          <div className='flex justify-center absolute w-full -bottom-4'>
          <div className="add_to_cart flex justify-between items-center bg-orange-700 w-32 text-white text-xs p-2 rounded-full transition duration-100">
              <button className="decrement w-4 h-4 border border-white rounded-full hover:border-orange-700 hover:bg-white " onClick={()=>{setNo_items(no_items-1);dispatch({type:"REMOVE_FROM_CART",payload:{id:id}})}} onMouseOver={() =>{setFillColor(["#c2410c","#fff"])}} onMouseOut={() =>{setFillColor(["#fff","#fff"])}} >
              <svg className='hover:fill-orange-700' id="eweZ5TFaPU21" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 11 11" shapeRendering="geometricPrecision" textRendering="geometricPrecision" project-id="063ad19f5a774737becaeb804d9ba03a" export-id="4b31fb1702a6472eb73575de4527b4ce" cached="false"><rect width="7" height="1" rx="0" ry="0" transform="translate(2 5)" fill={fillColor[0]} strokeWidth="0"/></svg>
              </button>
              {state.items[id].no_items}  
              <button className="increment w-4 h-4 border border-white rounded-full hover:border-orange-700 hover:bg-white " onClick={()=>{setNo_items(no_items+1);dispatch({type:"ADD_TO_CART",payload:{id:id}})}} onMouseOver={() =>{setFillColor(["#fff","#c2410c"])}} onMouseOut={() =>{setFillColor(["#fff","#fff"])}} >
              <svg className='hover:fill-orange-700' id="e1lyWEZaBzV1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 11 11" shapeRendering="geometricPrecision" textRendering="geometricPrecision" project-id="063ad19f5a774737becaeb804d9ba03a" export-id="1a895c57989040769d8562bb6e1d2332" cached="false"><rect width="7" height="1" rx="0" ry="0" transform="translate(2 5)" fill={fillColor[1]} strokeWidth="0"/><rect width="7" height="1" rx="0" ry="0" transform="matrix(0 1-1 0 6 2)" fill={fillColor[1]} strokeWidth="0"/></svg>
              </button>
          </div>
          </div>}
        </div>
        <p className="text-xs opacity-60">{item.category}</p>
        <p className='text-sm font-semibold'>{item.name}</p>
        <p className='text-sm font-medium text-orange-700 leading-3'>${item.price}</p>
    </div>
  )
}

export default MenuItem
