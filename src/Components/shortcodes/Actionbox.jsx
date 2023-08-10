import React from 'react'

function Actionbox() {
  return (
    <>
        <div>
            <h2 className="text-[48px] my-10 font-bold leading-7 text-indigo-600 dark:text-indigo-400 ">Action Box</h2>
            <hr className='mb-10'/>
            <div class="p-8 border w-full border-gray-600 dark:border-gray-400 relative justify-between inline-flex">
                <div class="">
                    <p class=""><span>MUI: </span>The most powerful template ever on the market</p>
                    <p>Create tailor-cut websites with the exclusive multi-purpose responsive template along with powerful features.</p>
                </div>
                <div class="">
                    <button class=" w-fit  inline-flex  bg-indigo-700 hover:bg-indigo-900 hover:border-indigo-900 dark:hover:bg-indigo-600 border-indigo-900 text-white font-bold py-2 px-4 drop-shadow-lg hover:drop-shadow-md rounded transition ease-in-out">
                        <svg class="fill-current w-4 h-4 mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> 
                        <span>Button</span>
                    </button>
                </div>
            </div>
            <hr className='my-10'/>

        </div>
    </>
    
  )
}

export default Actionbox