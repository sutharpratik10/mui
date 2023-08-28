import React from 'react'

import Header from './Headers'

function Column() {
  return (
    <>
        <Header>Columns</Header>
        <div className='text-white'>
        <div class="grid grid-cols-1 gap-4 text-center text-white">
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 1</p></div>
        </div>
        <hr className='my-6'/>
        <div class="grid grid-cols-2 gap-4 text-center">
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 1</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 2</p></div>
        </div>
        <hr className='my-6'/>
        <div class="grid grid-cols-3 gap-4 text-center">
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 1</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 2</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 3</p></div>
        </div>
        <hr className='my-6'/>
        <div class="grid grid-cols-4 gap-4 text-center">
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 1</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 2</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 3</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 4</p></div>
        </div>
        <hr className='my-6'/>
        <div class="grid grid-cols-8 gap-4 text-center">
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 1</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 2</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 3</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 4</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 5</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 6</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 7</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 8</p></div>
        </div>
        <hr className='my-6'/>
        <div class="grid grid-cols-12 gap-1 text-center">
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 1</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 2</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 3</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 4</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 5</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 6</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 7</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 8</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 9</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 10</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 11</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 12</p></div>
        </div>
        <hr className='my-6'/>
        <div className="mx-auto text-left mb-5">
            <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Horizontal alignment</p>
        </div>
        <div class="grid grid-cols-6 gap-4 text-center">
            <div class="col-start-2 col-span-4 bg-slate-800 p-2 rounded-md">01</div>
            <div class="col-start-1 col-end-3 bg-slate-800 p-2 rounded-md">02</div>
            <div class="col-end-7 col-span-2 bg-slate-800 p-2 rounded-md">03</div>
            <div class="col-start-1 col-end-7 bg-slate-800 p-2 rounded-md">04</div>
        </div>  
        <hr className='my-6'/>
        </div>
    </>
  )
}

export {Column}