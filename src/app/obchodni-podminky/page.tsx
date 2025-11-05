import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Zásady ochrany osobních údajů',
}

const TermsAndConditions = () => {
    return (
        <div className='pageWrapper !pt-52 pb-16 min-h-screen bg-radial-[at_80%80%] from-zinc-950 to-zinc-900 to-75% text-white rounded-b-3xl'>
            <h1 className='!text-[12vw] font-bold font-archivo max-w-2/3 relative pl-2 pb-2 pt-1 pr-1 hover:pt-2 hover:pl-1 hover:pr-2 hover:pb-1 duration-200'>
                <span className='absolute inset-0  translate-y-3  text-primary'>
                    Obchodní podmínky
                </span>
                <span className='relative text-white'>Obchodní podmínky</span>
            </h1>

            <div className='mt-20'>
                <section className='mt-8 bg-zinc-900 border-1 border-zinc-500/20 rounded-2xl p-10'>
                    <h2>Základní ustanovení</h2>
                    <p className='mt-4'>
                        aklsjdf;lasdjf;j asdjf; asdjl;fjdas ;ljadsf;lakl; sj
                        fasdkjf ;asdjf;k
                    </p>
                </section>

                <section className='mt-8 bg-zinc-900 border-1 border-zinc-500/20 rounded-2xl p-10'>
                    <h2>askldf;alsdjf; jasl;djf ;asjd;lf</h2>
                    <p>
                        aklsjdf;lasdjf;j asdjf; asdjl;fjdas ;ljadsf;lakl; sj
                        fasdkjf ;asdjf;k
                    </p>
                </section>
            </div>
        </div>
    )
}

export default TermsAndConditions
