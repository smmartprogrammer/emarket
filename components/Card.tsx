import React, { FC } from 'react'
import { oneProductType } from './Types'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'




const Card: FC<{ singleProduct: oneProductType }> = ({ singleProduct }) => {
    return (
        <div className='border-4 max-w-sm min-w-[24rem] space-y-3 ' >
            <div className="w-full  ">
                <Image width={1000} height={1000} src={urlForImage(singleProduct.image[0]).width(1000).height(1000).url()} alt='imagesfrom sanity' />
                <h6 className="font-bold text-lg mt-3 text-[#5A5A5A] py-1 ">
                    {singleProduct.productName}
                </h6>
                <p className="font-bold text-base text-[#888888] py-1 ">
                    {singleProduct.price}
                </p>
            </div>
        </div>
    )
}

export default Card

