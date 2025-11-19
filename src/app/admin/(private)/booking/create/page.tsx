import CloseButton from '../../../components/Inputs/CloseButton'
import BookingForm from '../../../components/Forms/BookingForm'

const BookingCreatePage = () => {
    return (
        <section className='w-full rounded-2xl bg-widget p-4'>
            <div className='flex justify-between'>
                <h2 className='text-xl'>Přidat termín</h2>

                <CloseButton></CloseButton>
            </div>

            <BookingForm></BookingForm>
        </section>
    )
}

export default BookingCreatePage
