import Link from "next/link"
import { FcTodoList } from 'react-icons/fc';
import '../styles/Header.css';

const Header = () => {
  return (
   <nav className="header">
        <div className="logo">
        <FcTodoList/>
        <Link href={'/'}>TODOAPP</Link>
        </div>
       <div className="button">
       <Link href={'/addList'}>ADD TASK</Link>
       </div>
   </nav>
  )
}

export default Header
