import React from 'react'
import Link from 'next/link';


function Header() {
  return (
    <div className='w-fill h-14  text-white flex items-center
     justify-center border-b border-white '>
      <div className=''>
        

      <ul className='flex space-x-10'>
        <li> <Link href="/"> Me </Link>   </li>
        <li> <Link href="/project"> Project </Link>   </li>
        <li> <Link href="/work"> Work </Link>   </li>
        <li> <Link href="/contect"> Contect </Link>   </li>
      </ul>

      </div>
    </div>
  )
}


export default Header