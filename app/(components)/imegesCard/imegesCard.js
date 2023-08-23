import React from 'react'
import Image from 'next/image'
export default function imeges(props) {
  return (
    <div className="campus-col">
   <img src={props.src} alt="" />
    <div className="layer">
        <h3>{props.heading}</h3>
    </div>
</div>
  )
}
