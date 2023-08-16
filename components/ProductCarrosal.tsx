import React from 'react'

type Props = {}

const ProductCarrosal = ({ProductData}: any) => {
  return (
    <div>{ProductData[0].productName }</div>
  )
}

export default ProductCarrosal