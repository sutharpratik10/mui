import React from 'react'

import Header from './Headers'


function Blockquotebody({children, className}){
    return (
        <div class={` ${className}`}>
            {children}
        </div>
    )
}
function Blockquotecontent({children, className}){
    return (
        <p class={`${className}`}>{children}</p>
    )
}

function Blockquotes(){
    return (
        <>
            <Header>Blockquote</Header>
            <div className='gap-11 columns-2 md:columns-2 sm:columns-1 xs:columns-1'>
                <Blockquotebody className={'p-6 border-l-4 border-slate-400 dark:border-slate-400'}>
                    <Blockquotecontent className={'text-[18px] font-semibold  tracking-tight text-gray-900 dark:text-white '}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa. Tellus id interdum velit laoreet id donec. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Morbi tempus iaculis urna id.  
                    </Blockquotecontent>
                </Blockquotebody>
                <Blockquotebody className={'p-6 border-r-4 border-slate-400 dark:border-slate-400 '}>
                    <Blockquotecontent className={'text-[18px] font-semibold text-right tracking-tight text-gray-900 dark:text-white '}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa. Tellus id interdum velit laoreet id donec. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Morbi tempus iaculis urna id. 
                    </Blockquotecontent>
                </Blockquotebody>
            </div>
            <hr className='my-10'/>
            <div className='gap-11 columns-2 md:columns-2 sm:columns-1 xs:columns-1'>
                <Blockquotebody className={'p-6 border-l-4 border-primary dark:border-darkprimary'}>
                    <Blockquotecontent className={'text-[18px] font-semibold  tracking-tight text-gray-900 dark:text-white '}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa. Tellus id interdum velit laoreet id donec. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Morbi tempus iaculis urna id.  
                    <p className='mt-3 font-bold'>- John Doe</p>
                    </Blockquotecontent>
                </Blockquotebody>
                <Blockquotebody className={'p-6 border-r-4 border-primary dark:border-darkprimary'}>
                    <Blockquotecontent className={'text-[18px] font-semibold text-right tracking-tight text-gray-900 dark:text-white '}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa. Tellus id interdum velit laoreet id donec. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Morbi tempus iaculis urna id. 
                    <p className='mt-3 font-bold'>- John Doe</p>
                    </Blockquotecontent>
                </Blockquotebody>
            </div>
            <hr className='my-10'/>
            <div className='gap-11 columns-2 md:columns-2 sm:columns-1 xs:columns-1'>
                <Blockquotebody className={'p-6 border-l-4 bg-slate-100 border-primary dark:border-slate-400 dark:bg-slate-800 dark:border-x-darkprimaryhover'}>
                    <Blockquotecontent className={'text-[18px] font-semibold text-left tracking-tight text-gray-900 dark:text-white'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa. Tellus id interdum velit laoreet id donec. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Morbi tempus iaculis urna id.
                    </Blockquotecontent>
                </Blockquotebody>
                <Blockquotebody className={'p-6 border-r-4 bg-slate-100 border-primary dark:border-slate-400 dark:bg-slate-800 dark:border-x-darkprimaryhover'}>
                    <Blockquotecontent className={'text-[18px] font-semibold text-right tracking-tight text-gray-900 dark:text-white'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa. Tellus id interdum velit laoreet id donec. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Morbi tempus iaculis urna id. 
                    </Blockquotecontent>
                </Blockquotebody>
            </div>
            <hr className='my-10'/>
            <div className='gap-11 columns-2 md:columns-2 sm:columns-1 xs:columns-1'>
                <Blockquotebody className={'p-6 border-l-4 bg-slate-100 border-primary dark:border-slate-400 dark:bg-slate-800 dark:border-x-darkprimaryhover'}>
                    <Blockquotecontent className={'text-[18px] font-semibold text-left tracking-tight text-gray-900 dark:text-white'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa. Tellus id interdum velit laoreet id donec. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Morbi tempus iaculis urna id. 
                        <p className='mt-3 font-bold'>- John Doe</p>
                    </Blockquotecontent>
                </Blockquotebody>
                <Blockquotebody className={'p-6 border-r-4 bg-slate-100 border-primary dark:border-slate-400 dark:bg-slate-800 dark:border-x-darkprimaryhover'}>
                    <Blockquotecontent className={'text-[18px] font-semibold text-right tracking-tight text-gray-900 dark:text-white'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa. Tellus id interdum velit laoreet id donec. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Morbi tempus iaculis urna id.
                        <p className='mt-3 font-bold'>- John Doe</p>
                    </Blockquotecontent>
                </Blockquotebody>
            </div>
            <hr className='my-10'/>
            <div className='gap-11 columns-2 md:columns-2 sm:columns-1 xs:columns-1'>
                <Blockquotebody className={'p-6 border-l-4 bg-slate-100 border-primary dark:border-slate-400 dark:bg-slate-800 dark:border-x-darkprimaryhover'}>
                    <Blockquotecontent className={'text-[18px] font-semibold text-left tracking-tight text-gray-900 dark:text-white before:text-primary'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa. Tellus id interdum velit laoreet id donec. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Morbi tempus iaculis urna id. 
                        <p className='mt-3 font-bold'>- John Doe</p>
                    </Blockquotecontent>
                </Blockquotebody>
                <Blockquotebody className={'p-6 border-r-4 bg-slate-100 border-primary dark:border-slate-400 dark:bg-slate-800 dark:border-x-darkprimaryhover'}>
                    <Blockquotecontent className={'text-[18px] font-semibold text-right tracking-tight text-gray-900 dark:text-white'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa. Tellus id interdum velit laoreet id donec. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Morbi tempus iaculis urna id.
                        <p className='mt-3 font-bold'>- John Doe</p>
                    </Blockquotecontent>
                </Blockquotebody>
            </div>
            <hr className='my-10'/>
        </>
    )
  }
export {Blockquotes}