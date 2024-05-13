"use client"
import { Poppins,Josefin_Sans } from 'next/font/google'

import {SessionProvider} from 'next-auth/react'
import "./globals.css";
import Providers from './utils/Provider'
import ThemeProviders from './utils/theme-provider'


const poppins = Poppins({ 
  subsets: ['latin'] ,
  weight:["400","500","600","700"],
  variable:"--font-Poppins"
})
const josefin = Josefin_Sans({ 
  subsets: ['latin'] ,
  weight:["400","500","600","700"],
  variable:"--font-Josefin"
})


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${josefin.variable}  !bg-white dark:bg-gradient-to-b bg-no-repeat dark:from-gray-900  dark:to-black duration-300  `}>
       <Providers>
        <SessionProvider>
     <ThemeProviders  attribute='class' defaultTheme='system'  enableSystem>

        {children}
      </ThemeProviders>   
        </SessionProvider>
       </Providers>
        </body>
    </html>
  );
}
