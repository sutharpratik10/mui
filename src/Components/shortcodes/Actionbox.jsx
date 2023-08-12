import React from 'react'

import Header from './Headers'
import { Simplebutton, Borderbutton } from './Buttons'

function Actionbox() {
  return (
    <>
        <div>
            <Header>Action Box</Header>
            <hr className='mb-10'/>
            <div class="border w-full xl:h-32 lg:h-32 md:h-40 sm:h-44 xs:h-52 px-5 border-gray-600 dark:border-gray-400 inline-flex">
                <div className='flex flex-1 items-center justify-between'>
                    <div class="pr-5">
                        <p class="text-3xl font-semibold"><span className='font-bold'>MUI: </span>The most powerful template ever on the market</p>
                        <p className='mt-1'>Create tailor-cut websites with the exclusive multi-purpose responsive template along with powerful features.</p>
                    </div>
                    <div>
                        <Simplebutton>
                            Download
                        </Simplebutton>
                    </div>
                </div>
            </div>
            <hr className='my-10'/>
            <div class="border w-full xl:h-32 lg:h-32 md:h-40 sm:h-44 xs:h-52 px-5 border-gray-600 dark:border-gray-400 inline-flex text-center">
                <div className='flex-1 items-center justify-between'>
                    <p class="text-3xl font-semibold"><span className='font-bold'>MUI: </span>The most powerful template ever on the market</p>
                    <p className=''>Create tailor-cut websites with the exclusive multi-purpose responsive template along with powerful features.</p>
                    <Simplebutton className={'mt-4'}>
                        Download
                    </Simplebutton>
                   
                </div>
            </div>
            <hr className='mb-10'/>
            <div class="bg-zinc-700 text-white w-full xl:h-32 lg:h-32 md:h-40 sm:h-44 xs:h-52 px-5 border-gray-600 dark:border-gray-400 inline-flex">
                <div className='flex flex-1 items-center justify-between'>
                    <div class="pr-5">
                        <p class="text-3xl font-semibold"><span className='font-bold'>MUI: </span>The most powerful template ever on the market</p>
                        <p className='mt-1'>Create tailor-cut websites with the exclusive multi-purpose responsive template along with powerful features.</p>
                    </div>
                    <div>
                        <Borderbutton className={'border-white text-white hover:bg-white hover:text-zinc-700'}>
                            Download
                        </Borderbutton>
                    </div>
                </div>
            </div>
            <hr className='my-10'/>
        </div>
    </>
    
  )
}

export default Actionbox