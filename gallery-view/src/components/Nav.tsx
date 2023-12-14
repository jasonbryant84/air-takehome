import Image from 'next/image'
import Link from 'next/link'
import { Button } from './'

const Nav = () => {
  return (
    <nav className='flex flex-row justify-between items-center px-[32px] py-[15px] bg-white z-10 h-[80px] w-screen fixed drop-shadow-[0_5px_5px_rgba(0,0,0,0.05)]'>
      <Link href='/' className='flex flex-row items-center'>
        <Image
            className="relative fill-air-blue"
            src="images/air_blue.svg"
            alt="Air Logo"
            width={75}
            height={15}
            priority
        />
      </Link>
      <Link href='/subpage' className='flex flex-row items-center'>
        <Button label='Subpage'/>
      </Link>
    </nav>
  )
}

export default Nav
