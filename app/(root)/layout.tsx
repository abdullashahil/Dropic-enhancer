import { Metadata } from 'next';
import React, {ReactNode} from 'react'


export const metadata: Metadata = {
    title: "Dropic",
    description: "Image enhancer",
    icons: {
      icon: '/logo.png'
    }
  };


const RootLayout = ({children} : {children : ReactNode}) => {

  return (
    <main>
        {children}
    </main>
  )
}

export default RootLayout