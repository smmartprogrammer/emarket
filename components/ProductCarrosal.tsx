import React, { FC } from 'react'
import { oneProductType } from './Types'

const ProductCarrosal: FC<{ProductData: Array<oneProductType>}> = ({ProductData}) => {
  return (
    <div>{ProductData[0].productName }</div>
  )
}

export default ProductCarrosal