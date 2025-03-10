import React, { useContext, useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link } from 'react-router-dom'
import { ProductContext } from '../api/dummy'
import { brokoli } from '../assets'
import ButtonAll from './ButtonAll'

const Card = ({product}) => {
  
  return (
    <div className='bg-white hover:scale-105 duration-300 flex flex-col w-[320px] gap-2 font-inter'>
        <div className='bg-slate-200 flex justify-center items-center'>
            <img src={product.product_image} className=" w-[500px] h-[290px] "></img>
        </div>
        <div className='flex justify-between items-center '>
            <div className='text-neutral70 text-[15px] font-[600]'>
               {product.category.Name}
            </div>
            <div className='font-semibold text-neutral100 text-[25px] gap-14'>
            <CurrencyFormat
              thousandSeparator={'.'}
              decimalSeparator={','}
              prefix={'Rp'}
              displayType={'text'}
              value={JSON.stringify(product.price)}/>
            </div>
        </div>
        <div className='text-green90 font-[600] text-[28px] leading-[120%]' >
            <p>{product.name}</p>
        </div>

        <div className='text-neutral100 font-bold text-[18px] leading-[120%]' >
            <p>{product.seller.shop}</p>
        </div>

        <div className='text-neutral100 font-bold text-[18px] leading-[120%]' >
            <p>{product.stock}</p>
        </div>
        <div>
        <ButtonAll><Link to={`/detail-product/${product.ID}`}>TAMBAHKAN KE KERANJANG</Link></ButtonAll>
        </div>
      
    </div>
  )
}

export default Card
