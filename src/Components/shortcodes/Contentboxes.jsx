import React from 'react'

import Header from './Headers'

function Contentboxes() {
  return (
    <>
        <Header>Content Box</Header>
        <div class="grid grid-cols-3 gap-4 text-left dark:text-white">
            <div class="bg-gray-50 dark:bg-slate-800 p-2 rounded-md relative">
              <img src='http://via.placeholder.com/517x290' alt='place your img here' className='object-fill'/>
              <h3 className='text-3xl font-semibold py-2'>This exercise dolor amet.</h3>
              <p className=''>It's high time we had a celeb appear on this list, and who better than Fill Murray. Now you can add a little offbeat humor and comedic charm to every website design or layout.</p>
            </div>
            <div class="drop-shadow-md hover:drop-shadow-2xl ease-in duration-300 bg-gray-50 dark:bg-slate-800 p-2 rounded-md relative">
              <img src='http://via.placeholder.com/517x290' alt='place your img here' className='object-fill'/>
              <h3 className='text-3xl font-semibold py-2'>This exercise dolor amet.</h3>
              <p className=''>It's high time we had a celeb appear on this list, and who better than Fill Murray. Now you can add a little offbeat humor and comedic charm to every website design or layout.</p>
            </div>
            <div class="ease-in duration-300 drop-shadow-md hover:drop-shadow-2xl bg-primary dark:bg-darkprimary p-2 rounded-md relative text-white">
              <img src='http://via.placeholder.com/517x290' alt='place your img here' className='object-fill'/>
              <h3 className='text-3xl font-semibold py-2'>This exercise dolor amet.</h3>
              <p className=''>It's high time we had a celeb appear on this list, and who better than Fill Murray. Now you can add a little offbeat humor and comedic charm to every website design or layout.</p>
            </div>
        </div>
        <hr className='my-6'/>
    </>
  )
}

export {Contentboxes}
