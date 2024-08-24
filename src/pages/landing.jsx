import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-20'>
      <section className='text-center'>
        <h1 className='flex flex-col items-center justify-center gradient-title text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter py-4' >
          Find Your Dream Job <span className='flex items-center gap-2 sm:gap-6'> and get <img src='https://website-assets-fd.freshworks.com/attachments/cjjjmhyex000ek4g0zazvklwo-logo-hired.one-half.png' alt='hirrd logo' className='h-14 sm:h-20 lg:h-30'/></span></h1>
          <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl'>
            Explore thousands of jobs listings or find the perfect candidate
            </p>
      </section>
      <div className='flex gap-6 justify-center'>
        <Link to="/jobs">
        <Button variant="" size="xl">Find Jobs</Button>
        </Link>
        <Link to="/post-job">
        <Button variant="destructive" size="xl">Post a Job</Button>
        </Link>
      </div>
      <section>

      </section>

    </main>
  )
}

export default LandingPage