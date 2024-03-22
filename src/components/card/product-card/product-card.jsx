import React from 'react'

const ProductCard = ({ img, title, price, rame,color,brand, id }) => {
    return (
        <>
            <div>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <p className='text-xs font-normal'>Смартфоне {brand}</p>
                </div>
                <div>
                    <p className='text-xs font-normal'>{title}  </p>
                    <p className='text-xs font-normal'>{rame} </p>
                    <p className='text-xs font-normal'>{color}</p>
                </div>
                <div>
                    <strong className='text-xs'>{price}</strong>
                </div>
            </div>
        </>
    )
}

export default ProductCard
