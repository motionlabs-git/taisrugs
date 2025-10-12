import Image from 'next/image'

export default function Home() {
    return (
        <div className='w-full grid grid-cols-2 gap-8'>
            <div
                style={{ boxShadow: '-10px 10px black' }}
                className='p-10 relative overflow-hidden bg-gradient-to-tr from-green-200 to-teal-500 col-span-2 w-full row-span-1 h-fit aspect-video rounded-4xl shadow-lg'
            >
                <h1 className='text-7xl font-daffiys relative'>
                    <span className='inline-block absolute top-0 left-0 translate-x-1 -translate-y-1 text-primary'>
                        Transform your space
                    </span>
                    <span className='inline-block '>Transform your space</span>
                </h1>

                <div className='bg-white -right-2/10 -bottom-1/2 absolute top rounded-full w-2/3 aspect-square h-auto overflow-hidden'>
                    <Image
                        src={'/logo.png'}
                        alt={'Banner Image'}
                        width={500}
                        height={500}
                        className='w-full h-full object-cover'
                    ></Image>
                </div>
            </div>
            <div className='w-full h-auto aspect-square rounded-2xl bg-gradient-to-r from-violet-200 to-pink-200 border-[5px] border-violet-100/80'>
                nejaky takovy hratky s gradientama at je to hot
            </div>
            <div className='w-full h-auto aspect-square rounded-2xl bg-radial from-pink-400 from-10% to-fuchsia-700'></div>
        </div>
    )
}
