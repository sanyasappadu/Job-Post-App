import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

function Header() {
  return (
    <div>
      <nav className='py-4 flex justify-between items-center'>
        <Link><img src="https://website-assets-fd.freshworks.com/attachments/cjjjmhyex000ek4g0zazvklwo-logo-hired.one-half.png" className='h-20'/></Link>
        <Button variant="outline">Login</Button>
        {/* <SignedOut>
            <SignInButton/>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn> */}

      </nav>
    </div>
  )
}

export default Header