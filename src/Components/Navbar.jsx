import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='linkdiv'>
        <Link to='/'>home</Link>
        <Link to='/user'>user</Link>
        <Link to='/contact'>contact</Link>
  
      </div>
    </>
  )
}

export default Navbar
