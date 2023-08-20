import React, { FC } from 'react'
import { oneProductType } from './Types'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'





const Card: FC<{ singleProduct: oneProductType }> = ({ singleProduct }) => {
    return (
        <Link href={`/cataloge${singleProduct.slug.current}`}    >
            <div className='max-w-sm min-w-[24rem] space-y-3 select-none hover:scale-110 duration-300'>
                <div className='relative w-full'>
                    <div className='absolute inset-0 z-10' />
                    <Image width={1000} height={1000} src={urlForImage(singleProduct.image[0]).width(1000).height(1000).url()} alt='imagesfrom sanity' />
                </div>

                <h6 className="font-bold text-lg mt-3 text-[#5A5A5A] py-1 ">
                    {singleProduct.productName}
                </h6>
                <p className="font-bold text-base text-[#888888] py-1 ">
                    {singleProduct.price}
                </p>
            </div>
        </Link>

    )
}

export default Card