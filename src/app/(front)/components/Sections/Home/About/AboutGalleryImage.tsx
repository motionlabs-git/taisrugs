import React from 'react'
import Image from 'next/image'

const AboutGalleryImage = ({
    index,
    activeImage,
    rotation,
    img,
}: {
    index: number
    activeImage: number
    rotation: number
    img: string
}) => {
    return (
        <div
            className={`gallery-image ${
                index < activeImage
                    ? `opacity-100 translate-0`
                    : 'opacity-0 translate-y-10 translate-x-5'
            }  duration-400 absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden`}
            id={`Obrázek v galerii o mě - ${index}`}
            style={{ rotate: `${rotation}deg` }}
        >
            <Image
                src={img}
                alt={'Obrázek v galerii O TaisRugs'}
                width={500}
                height={800}
                className='w-full h-full object-cover'
            />
        </div>
    )
}

export default AboutGalleryImage
