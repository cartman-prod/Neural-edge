import React from 'react'
import Brand1 from '../../assets/brands/1.svg'
import Brand2 from '../../assets/brands/2.svg'
import Brand3 from '../../assets/brands/3.svg'
import Brand4 from '../../assets/brands/4.svg'
import Brand5 from '../../assets/brands/5.svg'


const Partners = () => {
  return (
    <>
    <div className='container my-12' >
        <h1 className='text-center'>Powering next-gen company</h1>
        <div className='flex flex-wrap items-center 
        justify-evenly gap-3 py-6 md:px-32'>
            <img src={Brand1} alt='ClickUp'/>
            <img src={Brand2} alt='DropBox'/>
            <img src={Brand3} alt='Segment'/>
            <img src={Brand4} alt='GitHub'/>
            <img src={Brand5} alt='Intuit'/>
        </div>
    </div>
    </>
  )
}

export default Partners