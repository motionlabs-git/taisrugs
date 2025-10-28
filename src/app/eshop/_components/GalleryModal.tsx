import AboutGalleryButton from '@/components/Sections/Home/About/AboutGalleryButton'
import React from 'react'
import {
    FiChevronLeft,
    FiChevronRight,
    FiPlus,
    FiShoppingCart,
} from 'react-icons/fi'

const GalleryModal = ({ handleClose }: { handleClose: () => void }) => {
    return (
        <section className='animate-fade-in-04 opacity-0 fixed top-0 left-0 z-50 p-4 bg-black/40 backdrop-blur-sm w-screen h-screen'>
            <div className='bg-white p-4 relative rounded-3xl w-full h-full flex justify-center items-center gap-4'>
                <button
                    type='button'
                    aria-label='Zavřít galerii'
                    className='absolute top-4 right-4 flex flex-col items-center justify-center rounded-full w-8 h-8 aspect-square bg-black cursor-pointer text-white select-none duration-200 hover:scale-90'
                    onClick={handleClose}
                >
                    <FiPlus size={30} className='rotate-45' />
                </button>

                <div className='absolute right-4 bottom-4 flex gap-2 bg-gray-500/20 rounded-full p-1.5 shadow-md'>
                    <button
                        type='button'
                        aria-label='Tlačítko mobilního menu'
                        className='flex items-center justify-center rounded-full w-8 h-8 pr-0.5 aspect-square bg-black cursor-pointer text-white select-none duration-200 hover:scale-90'
                        onClick={handleClose}
                    >
                        <FiChevronLeft size={22} />
                    </button>
                    <button
                        type='button'
                        aria-label='Tlačítko mobilního menu'
                        className='flex items-center justify-center rounded-full w-8 h-8 pl-0.5 aspect-square bg-black cursor-pointer text-white select-none duration-200 hover:scale-90'
                        onClick={handleClose}
                    >
                        <FiChevronRight size={22} />
                    </button>
                </div>

                <div className='aspect-[4/5] h-full bg-gray-200 rounded-2xl'></div>
            </div>
        </section>
    )
}

export default GalleryModal
