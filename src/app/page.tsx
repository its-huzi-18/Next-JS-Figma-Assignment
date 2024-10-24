import React from 'react'

function page() {
  return (
    <div>
      <nav className='bg-zinc-700 text-white flex justify-between px-14'>
          <div className="w-24 rotate-[4.5deg] py-1"><img src="Huzaifa logo.png" alt="Huzaifa logo" /></div>
        <ul className='flex gap-10 items-center font-medium cursor-pointer text-xl'>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Carrers</li>
        </ul>
      </nav>
      <main className='flex justify-between p-16 mt-16 items-center'>
        <div className='w-[55%] '>
          <h1 className='text-4xl font-bold mb-5'>Welcome To Our Website</h1>
          <p className=' text-zinc-500 text-2xl leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores nemo molestias odit delectus non commodi vitae deserunt repudiandae perspiciatis autem, nobis atque rerum. Ducimus sapiente illum cum veniam minima.</p>
           <button className=' bg-zinc-900 text-white p-2 mx-2 w-28 mt-8 rounded-sm'>Contact Us</button>
        </div>
        <div className='cursor-text'><img className='w-[26rem] ' src="main Image.jpg" alt=""/></div>
      </main>
    </div>
  )
}

export default page