import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useEffect } from 'react'

import Header from './Headers'
import '../style/animation.css'

function Animation() {
  const animeeRef = useRef(null);
  useEffect(() => {
    gsap.fromTo("#sectionone", {x: -100, duration: 2, ease: "none", opacity:"0.1"}, {x: 0, duration: 0.7, ease: "none", opacity:"1"});
    gsap.fromTo(".contentbox", {x: -10, duration: 2, ease: "circ.out", opacity:"0", delay: 0.5, stagger:0.1, from: "left"},  {x: 0, duration: 0.7, ease: "circ.out", opacity:"1", delay: 0.5, stagger:0.2 });
    gsap.fromTo(".contentbox2",{x: -10, duration: 2, ease: "circ.out", opacity:"0", delay: 0.5, stagger:0.1, from: "left"},  {x: 0, duration: 0.7, ease: "circ.out", opacity:"1", delay: 0.5, stagger:0.2 });
    
    //gsap function to animate on scroll
    gsap.registerPlugin(ScrollTrigger); 
    gsap.fromTo(".contentbox2", {x: -10, duration: 2, ease: "none", opacity:"1", delay: 0.5, stagger:0.1, from: "left"}, 
    {x: 0, duration: 0.7, ease: "none", opacity:"1", delay: 0.5, stagger:0.1, 
      scrollTrigger: {
        trigger: ".contentbox2",
        start: "top 80%",
        end: "bottom 20%",
        scrub:true
    }});

  }, []);

  return (
    <>
      <Header>Animation</Header>
      <div className="mx-auto text-left mb-5">
        <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">On Pageload</p>
      </div>
        <div ref={animeeRef} id="sectionone">
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
        </div>
        <hr className='my-6'/>
      
        <div class="grid grid-cols-3 gap-4 text-left dark:text-white">
          <div class="contentbox bg-gray-50 dark:bg-slate-800 p-2 rounded-md relative">
            <img src='http://via.placeholder.com/517x290' alt='place your img here' className='object-fill'/>
            <h3 className='text-3xl font-semibold py-2'>This exercise dolor amet.</h3>
            <p className=''>It's high time we had a celeb appear on this list, and who better than Fill Murray. Now you can add a little offbeat humor and comedic charm to every website design or layout.</p>
          </div>
          <div class="contentbox drop-shadow-md hover:drop-shadow-2xl ease-in duration-300 bg-gray-50 dark:bg-slate-800 p-2 rounded-md relative">
            <img src='http://via.placeholder.com/517x290' alt='place your img here' className='object-fill'/>
            <h3 className='text-3xl font-semibold py-2'>This exercise dolor amet.</h3>
            <p className=''>It's high time we had a celeb appear on this list, and who better than Fill Murray. Now you can add a little offbeat humor and comedic charm to every website design or layout.</p>
          </div>
          <div class="contentbox ease-in duration-300 drop-shadow-md hover:drop-shadow-2xl bg-primary dark:bg-darkprimary p-2 rounded-md relative text-white">
            <img src='http://via.placeholder.com/517x290' alt='place your img here' className='object-fill'/>
            <h3 className='text-3xl font-semibold py-2'>This exercise dolor amet.</h3>
            <p className=''>It's high time we had a celeb appear on this list, and who better than Fill Murray. Now you can add a little offbeat humor and comedic charm to every website design or layout.</p>
          </div>
        </div>
        <hr className='my-6'/>
        <div className="mx-auto text-left mb-5">
          <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">On scroll</p>
        </div>
        <div class="grid grid-cols-3 gap-4 text-left dark:text-white">
          <div class="contentbox2 bg-gray-50 dark:bg-slate-800 p-2 rounded-md relative">
            <img src='http://via.placeholder.com/517x290' alt='place your img here' className='object-fill'/>
            <h3 className='text-3xl font-semibold py-2'>This exercise dolor amet.</h3>
            <p className=''>It's high time we had a celeb appear on this list, and who better than Fill Murray. Now you can add a little offbeat humor and comedic charm to every website design or layout.</p>
          </div>
          <div class="contentbox2 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300 bg-gray-50 dark:bg-slate-800 p-2 rounded-md relative">
            <img src='http://via.placeholder.com/517x290' alt='place your img here' className='object-fill'/>
            <h3 className='text-3xl font-semibold py-2'>This exercise dolor amet.</h3>
            <p className=''>It's high time we had a celeb appear on this list, and who better than Fill Murray. Now you can add a little offbeat humor and comedic charm to every website design or layout.</p>
          </div>
          <div class="contentbox2 ease-in duration-300 drop-shadow-md hover:drop-shadow-2xl bg-primary dark:bg-darkprimary p-2 rounded-md relative text-white">
            <img src='http://via.placeholder.com/517x290' alt='place your img here' className='object-fill'/>
            <h3 className='text-3xl font-semibold py-2'>This exercise dolor amet.</h3>
            <p className=''>It's high time we had a celeb appear on this list, and who better than Fill Murray. Now you can add a little offbeat humor and comedic charm to every website design or layout.</p>
          </div>
        </div>
        <hr className='my-6'/>
    </>
  )
}

export {Animation}
