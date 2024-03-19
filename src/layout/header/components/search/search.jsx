import React from 'react'
import reach from "../../../../assets/icons/search.svg"

export const Search = () => {
  return (
    <div>
      <input className='py-3 pl-2 text-lg border border-black rounded outline-none pr-96' type="text" placeholder='Поиск '/>
      <img className='absolute mt-[-33px] pl-[550px]' src={reach} alt="" />
    </div>
  )
}
