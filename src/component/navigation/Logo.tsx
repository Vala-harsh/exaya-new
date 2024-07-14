import Link from 'next/link'
import React from 'react'

export const Logo = ({data}:{data:any}) => {
  return (
    <div>
<Link href={data.link}>
<img src={data.img} alt={data.altimg} className="md:w-60 w-44" />
 
</Link>
{/* <h1 className=''>Logo</h1> */}
    </div>
  )
}
