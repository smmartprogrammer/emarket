import React, { FC } from 'react'

const Cataloge: FC<{params: {slug:string} }> = ({params}) => {
    console.log(params.slug);
    
  return (
    <div>{params.slug}</div>
  )
}

export default Cataloge