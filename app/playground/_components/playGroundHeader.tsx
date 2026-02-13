import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function playGroundHeader() {
  return (
    <div className='flex justify-between items-center p-4 shadow'>
        <Image src={'/logo.svg'} alt='logo' width={40} height={40}/>
        <Button>Save</Button>
    </div>
  )
}

export default playGroundHeader