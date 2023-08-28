/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Header from './Headers'

function Alerts() {
  return (
    <div>
        <Header>Alerts and Callouts</Header>
    
        <div className="mx-auto text-left mb-5">
            <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Alerts</p>
        </div>
        <div>
            <div class="bg-blue-200 border border-blue-300 text-blue-800 px-4 py-3 rounded relative mb-5" role="alert">
                <strong class="font-bold">This is a primary alert—check it out!</strong>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg class="fill-current h-6 w-6 text-blue-800" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>

            <div class="bg-gray-200 border border-gray-300 text-gray-800 px-4 py-3 rounded relative mb-5" role="alert">
                <strong class="font-bold">This is a secondary alert—check it out!</strong>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg class="fill-current h-6 w-6 text-gray-800" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>

            <div class="bg-green-200 border border-green-300 text-green-800 px-4 py-3 rounded relative mb-5" role="alert">
                <strong class="font-bold">This is a success alert—check it out!</strong>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg class="fill-current h-6 w-6 text-green-800" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>

            <div class="bg-red-200 border border-red-300 text-red-800 px-4 py-3 rounded relative mb-5" role="alert">
                <strong class="font-bold">This is a danger alert—check it out!</strong>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg class="fill-current h-6 w-6 text-red-800" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>

            <div class="bg-yellow-200 border border-yellow-300 text-yellow-800 px-4 py-3 rounded relative mb-5" role="alert">
                <strong class="font-bold">This is a warning alert—check it out!</strong>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg class="fill-current h-6 w-6 text-yellow-800" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>

            <div class="bg-teal-200 border border-teal-300 text-teal-800 px-4 py-3 rounded relative mb-5" role="alert">
                <strong class="font-bold">This is a info alert—check it out!</strong>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg class="fill-current h-6 w-6 text-teal-800" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>

            <div class="bg-white border border-white text-gray-800 px-4 py-3 rounded relative mb-5" role="alert">
                <strong class="font-bold">This is a light alert—check it out!</strong>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg class="fill-current h-6 w-6 text-white-800" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>
        </div>
        
        <hr className='my-10'/>
        <div className="mx-auto text-left mb-5">
            <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Links in alerts</p>
        </div>
        <div>
            <div class="bg-blue-200 border border-blue-300 text-blue-800 px-4 py-3 rounded relative mb-5" role="alert">
                <span class="">This is a primary alert </span>
                <span class="block sm:inline font-bold"><a href=''>An example Link.</a></span>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg class="fill-current h-6 w-6 text-blue-800" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>

            <div class="bg-gray-200 border border-gray-300 text-gray-800 px-4 py-3 rounded relative mb-5" role="alert">
                <span class="">This is a secondary alert </span>
                <span class="block sm:inline font-bold"><a href=''>An example Link.</a></span>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg class="fill-current h-6 w-6 text-gray-800" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>

            <div class="bg-green-200 border border-green-300 text-green-800 px-4 py-3 rounded relative mb-5" role="alert">
                <span class="">This is a success alert </span>
                <span class="block sm:inline font-bold"><a href=''>An example Link.</a></span>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg class="fill-current h-6 w-6 text-green-800" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>

            <div class="bg-red-200 border border-red-300 text-red-800 px-4 py-3 rounded relative mb-5" role="alert">
                <span class="">This is a danger alert </span>
                <span class="block sm:inline font-bold"><a href=''>An example Link.</a></span>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg class="fill-current h-6 w-6 text-red-800" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>

            <div class="bg-yellow-200 border border-yellow-300 text-yellow-800 px-4 py-3 rounded relative mb-5" role="alert">
                <span class="">This is a warning alert </span>
                <span class="block sm:inline font-bold"><a href=''>An example Link.</a></span>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg class="fill-current h-6 w-6 text-yellow-800" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>

            <div class="bg-teal-200 border border-teal-300 text-teal-800 px-4 py-3 rounded relative mb-5" role="alert">
                <span class="">This is a info alert </span>
                <span class="block sm:inline font-bold"><a href=''>An example Link.</a></span>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg class="fill-current h-6 w-6 text-teal-800" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>

            <div class="bg-white border border-white text-gray-800 px-4 py-3 rounded relative mb-5" role="alert">
                <span class="">This is a light alert </span>
                <span class="block sm:inline font-bold"><a href=''>An example Link.</a></span>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg class="fill-current h-6 w-6 text-white-800" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>
        </div>
        
        <hr className='my-10'/>
        <div className="mx-auto text-left mb-5">
            <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Alerts with badge</p>
        </div>
        <div>
            <div class="bg-transparent text-center py-4 lg:px-4">
                <div class="p-2 bg-blue-800 items-center text-blue-50 leading-none rounded-full flex lg:inline-flex" role="alert">
                    <span class="flex rounded-full bg-blue-600 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
                    <span class="font-semibold mr-2 text-left flex-auto">Get the coolest item from our brand new store</span>
                    <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                </div>
            </div>

            <div class="bg-transparent text-center py-4 lg:px-4">
                <div class="p-2 bg-gray-800 items-center text-gray-50 leading-none rounded-full flex lg:inline-flex" role="alert">
                    <span class="flex rounded-full bg-gray-600 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
                    <span class="font-semibold mr-2 text-left flex-auto">Get the coolest item from our brand new store</span>
                    <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                </div>
            </div>

            <div class="bg-transparent text-center py-4 lg:px-4">
                <div class="p-2 bg-green-800 items-center text-green-50 leading-none rounded-full flex lg:inline-flex" role="alert">
                    <span class="flex rounded-full bg-green-600 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
                    <span class="font-semibold mr-2 text-left flex-auto">Get the coolest item from our brand new store</span>
                    <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                </div>
            </div>

            <div class="bg-transparent text-center py-4 lg:px-4">
                <div class="p-2 bg-red-800 items-center text-red-50 leading-none rounded-full flex lg:inline-flex" role="alert">
                    <span class="flex rounded-full bg-red-600 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
                    <span class="font-semibold mr-2 text-left flex-auto">Get the coolest item from our brand new store</span>
                    <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                </div>
            </div>

            <div class="bg-transparent text-center py-4 lg:px-4">
                <div class="p-2 bg-yellow-800 items-center text-yellow-50 leading-none rounded-full flex lg:inline-flex" role="alert">
                    <span class="flex rounded-full bg-yellow-600 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
                    <span class="font-semibold mr-2 text-left flex-auto">Get the coolest item from our brand new store</span>
                    <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                </div>
            </div>

            <div class="bg-transparent text-center py-4 lg:px-4">
                <div class="p-2 bg-teal-800 items-center text-teal-50 leading-none rounded-full flex lg:inline-flex" role="alert">
                    <span class="flex rounded-full bg-teal-600 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
                    <span class="font-semibold mr-2 text-left flex-auto">Get the coolest item from our brand new store</span>
                    <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                </div>
            </div>

            <div class="bg-transparent text-center py-4 lg:px-4">
                <div class="p-2 bg-blue-800 items-center text-blue-50 leading-none rounded-full flex lg:inline-flex" role="alert">
                    <span class="flex rounded-full bg-blue-600 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
                    <span class="font-semibold mr-2 text-left flex-auto">Get the coolest item from our brand new store</span>
                    <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                </div>
            </div>

        </div>

        <hr className='my-10'/>
        <div className="mx-auto text-left mb-5">
            <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Callout</p>
        </div>
        <div>
            <div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 my-5" role="alert">
                <p class="font-bold">Be Warned</p>
                <p>Something not ideal might be happening.</p>
            </div>

            <div class="bg-gray-100 border-l-4 border-gray-500 text-gray-700 p-4 my-5" role="alert">
                <p class="font-bold">Be Warned</p>
                <p>Something not ideal might be happening.</p>
            </div>

            <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 my-5" role="alert">
                <p class="font-bold">Be Warned</p>
                <p>Something not ideal might be happening.</p>
            </div>

            <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-5" role="alert">
                <p class="font-bold">Be Warned</p>
                <p>Something not ideal might be happening.</p>
            </div>

            <div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 my-5" role="alert">
                <p class="font-bold">Be Warned</p>
                <p>Something not ideal might be happening.</p>
            </div>

            <div class="bg-teal-100 border-l-4 border-teal-500 text-teal-700 p-4 my-5" role="alert">
                <p class="font-bold">Be Warned</p>
                <p>Something not ideal might be happening.</p>
            </div>
        </div>

        <hr className='my-10'/>
        <div className="mx-auto text-left mb-5">
            <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Alert with icon</p>
        </div>
        <div>
            <div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 my-5" role="alert">
                <div class="flex">
                    <div class="py-1"><svg class="fill-current h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                    <div>
                    <p class="font-bold">Our privacy policy has changed</p>
                    <p class="text-sm">Make sure you know how these changes affect you.</p>
                    </div>
                </div>
            </div>

            <div class="bg-gray-100 border-l-4 border-gray-500 text-gray-700 p-4 my-5" role="alert">
                <div class="flex">
                    <div class="py-1"><svg class="fill-current h-6 w-6 text-gray-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                    <div>
                    <p class="font-bold">Our privacy policy has changed</p>
                    <p class="text-sm">Make sure you know how these changes affect you.</p>
                    </div>
                </div>
            </div>

            <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 my-5" role="alert">
                <div class="flex">
                    <div class="py-1"><svg class="fill-current h-6 w-6 text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                    <div>
                    <p class="font-bold">Our privacy policy has changed</p>
                    <p class="text-sm">Make sure you know how these changes affect you.</p>
                    </div>
                </div>
            </div>

            <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-5" role="alert">
                <div class="flex">
                    <div class="py-1"><svg class="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                    <div>
                    <p class="font-bold">Our privacy policy has changed</p>
                    <p class="text-sm">Make sure you know how these changes affect you.</p>
                    </div>
                </div>
            </div>

            <div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 my-5" role="alert">
                <div class="flex">
                    <div class="py-1"><svg class="fill-current h-6 w-6 text-yellow-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                    <div>
                    <p class="font-bold">Our privacy policy has changed</p>
                    <p class="text-sm">Make sure you know how these changes affect you.</p>
                    </div>
                </div>
            </div>

            <div class="bg-teal-100 border-l-4 border-teal-500 text-teal-700 p-4 my-5" role="alert">
                <div class="flex">
                    <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                    <div>
                    <p class="font-bold">Our privacy policy has changed</p>
                    <p class="text-sm">Make sure you know how these changes affect you.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Alerts