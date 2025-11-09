import { redirect } from 'next/navigation'

const E404 = () => {
    redirect('/page-not-found')
}

export default E404
