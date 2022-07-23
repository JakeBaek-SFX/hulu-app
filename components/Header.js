import Image from 'next/image';
import HeaderItem from './HeaderItem';

function Header() {
  return (
    <header className=''>
      <h1>This is Header</h1>
      <div>
        <HeaderItem title='HOME'/>
      </div>
      <Image 
        className='object-contain'
        src='https://links.papareact.com/ua6' 
        width={200} 
        height={200}/>
    </header>
  )
}

export default Header