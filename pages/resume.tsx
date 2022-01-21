import type { NextPage } from 'next'
import { CV } from '../components/CV'

const Resume: NextPage = () => {
  return (
    <div className="mt-8 md:mt-20 max-w-4xl mx-auto px-6 md:px-10">
      <CV />
    </div>
  )
}

export default Resume
