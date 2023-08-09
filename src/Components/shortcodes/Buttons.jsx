import React from 'react'

function Buttons() {
  return (
    <div>
        <h2 className="text-[48px] my-10 font-bold leading-7 text-indigo-600 dark:text-indigo-400">Buttons</h2>
        <hr className='mb-10'/>
        <div className="mx-auto text-left mb-5">
          <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Simple Button</p>
        </div>
        <button class="bg-indigo-700 hover:bg-indigo-900 dark:hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition ease-in-out">
            Button
        </button>
        <hr className='my-10'/>
        <div className="mx-auto text-left mb-5">
          <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Border Button</p>
        </div>
        <button class="dark:border-white border-2 border-indigo-700 hover:bg-indigo-900 dark:hover:bg-white dark:hover:text-indigo-700 dark:text-white hover:text-white text-indigo-700 font-bold py-2 px-4 rounded transition ease-in-out">
            Button
        </button>
        <hr className='my-10'/>
        <div className="mx-auto text-left mb-5">
          <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">3D Button</p>
        </div>
        <button class=" bg-indigo-700 hover:bg-indigo-900 hover:border-indigo-900 dark:hover:bg-indigo-600 border-b-4 border-indigo-900 text-white font-bold py-2 px-4 rounded transition ease-in-out">
            Button
        </button>
        <hr className='my-10'/>
        <div className="mx-auto text-left mb-5">
          <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Elevated Button</p>
        </div>
        <button class=" bg-indigo-700 hover:bg-indigo-900 hover:border-indigo-900 dark:hover:bg-indigo-600 border-indigo-900 text-white font-bold py-2 px-4 drop-shadow-lg hover:drop-shadow-md rounded transition ease-in-out">
            Button
        </button>
        <hr className='my-10'/>
        <div className="mx-auto text-left mb-5">
          <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Icon Button</p>
        </div>
        <button class=" w-fit bg-indigo-700 hover:bg-indigo-900 hover:border-indigo-900 dark:hover:bg-indigo-600 border-indigo-900 text-white font-bold py-2 px-4 drop-shadow-lg hover:drop-shadow-md rounded transition ease-in-out">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>Button</span>
        </button>
        <hr className='my-10'/>
        <div className="mx-auto text-left mb-5">
          <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Group Button</p>
        </div>
        <div class="inline-flex">
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                Prev
            </button>
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                Next
            </button>
        </div>

    </div>
  )
}

export { Buttons}