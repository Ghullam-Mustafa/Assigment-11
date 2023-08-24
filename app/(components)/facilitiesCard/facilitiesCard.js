import React from 'react'
import Image from 'next/image'
export default function fasilitiesCard(props) {
  return (
    <div className="facilities-col">
                <Image src={props.src} width={500} height={300} alt=""/>
                <h3>{props.heading}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
  )
}
