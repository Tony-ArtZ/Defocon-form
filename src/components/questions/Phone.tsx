import React from 'react'

type Props = {}

function Phone({}: Props) {
  return (
    <div>
        <input type="tel" name="phone" id="phone"  placeholder='Type your phone no  here ..' className='border-b w-96 focus:outline-none py-1 focus:border-b-2 peer text-white bg-black' />
    </div>
  )
}

export default Phone