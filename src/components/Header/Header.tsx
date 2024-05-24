import logo from '../../assets/logo.png'

export default function Header(){

    return (
        <header className='flex justify-around items-center bg-rich-black sticky top-0'>
            <img src={logo} alt="" className='w-40' />
        </header>
    )
}