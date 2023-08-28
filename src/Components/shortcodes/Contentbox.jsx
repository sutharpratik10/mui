import React from 'react'

import Header from './Headers'

function Contentbox() {
  return (
    <>
        <Header>Content Box</Header>
        <div class="grid grid-cols-2 gap-4 text-center">
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 1</p></div>
            <div class="bg-slate-800 p-2 rounded-md"><p className=''>Grid column 2</p></div>
        </div>
        <hr className='my-6'/>
    </>
  )
}

export {Contentbox}
