//reafce
import React from 'react'

const App = () => {
  return (
    <div className='bg-red-500 p-12'>
      <h1 className='text-5xl font-bold text-white'>
        Tailwind CSS 4.0
      </h1>
      <button className='bg-blue-500 text-white text-2x1 font-bold px-6 border-4  py-4 rounded-md mt-6'>
        Button
      </button>
      <input
        type='text'
        placeholder='Input Field'
        className='bg-white text-lg text-amber-500  mt-6 p-4 border-4 rounded-md'
      />
    </div>
  )
}

export default App