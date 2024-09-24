import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import Image from 'next/image'
import { Separator } from '../ui/separator'
import Navitems from './Navitems'

const MobileNav = () => {
  return (
    <nav className="md:hidden" >
  <Sheet>
  <SheetTrigger>
  <Image 
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
  </SheetTrigger>
  <SheetContent className="flex flex-col gap-6 bg-white ">
  <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
          <Separator className="border border-gray-50"/>
          <Navitems/>
  </SheetContent>
</Sheet>

    </nav>
  )
}

export default MobileNav