
import React from 'react'
import { GuardSpinner } from 'react-spinners-kit'

const Index = ({loading}) => {
  return (
    <div className='flex justify-center items-center w-full h-[100vh]'>
       <GuardSpinner 
                size={150}
                color="green"
                loading={loading}
            />
    </div>
  )
}

export default Index
