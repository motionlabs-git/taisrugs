import Link from 'next/link'
import React from 'react'
import { FiPlusCircle, FiTrash2 } from 'react-icons/fi'
import { createServerClient } from '../../utils/supabase/server'
import { PostgrestResponse } from '@supabase/supabase-js'
import { Model } from '../../schemas/model'
import { BookingSchema } from '../../schemas/booking.schema'
import DeleteBooking from '../../components/Inputs/DeleteBooking'

const Booking = async () => {
    const supabase = await createServerClient()

    const { data: booking, error }: PostgrestResponse<Model<BookingSchema>> =
        await supabase.from('booking').select('*')

    return (
        <main>
            <section className='w-full rounded-2xl bg-widget p-4'>
                <div className='flex items-center justify-between gap-2'>
                    <h2 className='text-xl'>Vypsané termíny</h2>
                    <Link
                        href='/admin/booking/create'
                        className='self-end flex justify-center items-center gap-2 bg-green-600 hover:bg-green-500 text-gray-100 rounded-lg duration-300 py-2 px-4'
                    >
                        <FiPlusCircle />
                        Přidat termín
                    </Link>
                </div>

                {booking ? (
                    <ul className='flex flex-col gap-2 mt-4'>
                        {booking?.map((value) => {
                            const date = new Date(value.value)

                            const formattedTime = new Intl.DateTimeFormat(
                                'cs',
                                {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    hour12: false,
                                }
                            ).format(date)

                            return (
                                <li
                                    key={value.id}
                                    className='group p-2 pl-4 flex gap-2 items-center justify-between bg-white/50 border border-white/20 hover:bg-stone-800 transition-colors duration-200 dark:bg-stone-900 rounded-xl  '
                                >
                                    <span>
                                        {date.toLocaleDateString('cs')}{' '}
                                        {formattedTime}
                                    </span>

                                    <DeleteBooking
                                        isError={(err) =>
                                            console.log(console.log(err))
                                        }
                                        id={value.id}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                ) : (
                    <p className='mt-4'>Loading...</p>
                )}
            </section>
        </main>
    )
}

export default Booking
