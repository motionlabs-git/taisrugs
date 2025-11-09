'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import DroppableContainer from '../../components/Draggable/PriceList/DroppableContainer'
import {
    SortableContext,
    verticalListSortingStrategy,
    arrayMove,
} from '@dnd-kit/sortable'
import DraggableItem from '../../components/Draggable/PriceList/DraggableItem'
const Booking = () => {
    const [dataLoading, setDataLoading] = useState(false)
    const [data, setData] = useState(['1.1.2025', '2.2.2025'])

    return (
        <main>
            <section className='w-full rounded-2xl bg-widget p-4'>
                <div className='flex items-center justify-between gap-2'>
                    <h2 className='text-xl'>Vypsané termíny</h2>
                    <Link
                        href='/admin/price-list/create'
                        className='self-end flex justify-center items-center gap-2 bg-green-600 hover:bg-green-500 text-gray-100 rounded-lg duration-300 py-2 px-4'
                    >
                        <FiPlusCircle />
                        Create new
                    </Link>
                </div>

                {dataLoading ? (
                    <p className='mt-4'>Loading...</p>
                ) : (
                    <ul className='flex flex-col gap-2 mt-4'>
                        <SortableContext
                            items={data.map((id) => id.toString())}
                            strategy={verticalListSortingStrategy}
                        >
                            {data.map((id) => (
                                <li key={id}>
                                    <DraggableItem
                                        key={id}
                                        id={id}
                                        item={data.find((item) => item === id)}
                                        disabled={data.length === 1}
                                        onRefresh={() => {}}
                                    />
                                </li>
                            ))}
                        </SortableContext>
                    </ul>
                )}
            </section>
        </main>
    )
}

export default Booking
