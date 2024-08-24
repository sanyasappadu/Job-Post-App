import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/clerk-react'
import { PenBox } from 'lucide-react'

function Header() {
  const [showSignIn, setShowSignIn] = useState(false);
  const handleOverlayClick=(e)=>{
    if(e.target === e.currentTarget){
      setShowSignIn(false)
    }
  }
  return (
    <div>
      <nav className='py-4 flex justify-between items-center'>
        <Link><img src="https://website-assets-fd.freshworks.com/attachments/cjjjmhyex000ek4g0zazvklwo-logo-hired.one-half.png" className='h-20'/></Link>
        
        <div className='flex gap-8'>
        <SignedOut>
        <Button variant="outline" 
        onClick={()=>
          setShowSignIn(true)
        }>Login</Button>
            {/* <SignInButton/> */}
          </SignedOut>
          
          <SignedIn>
          <Link to="/post-job">
            <Button variant="destructive" className="rounded-full">
              <PenBox size={20} className='mr:2'/>
              Post a job</Button>
          </Link>
            <UserButton/>
          </SignedIn>

        </div>
        
      </nav>
      {showSignIn && (<div 
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
      onClick={handleOverlayClick}>
        <SignIn 
          signUpForceRedirectUrl='/onboarding'
          fallbackRedirectUrl='/onboarding' 
          />
        </div>)}
    </div>
  )
}

export default Header