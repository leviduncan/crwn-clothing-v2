import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.css'
import { ReactComponent as Crown } from '../../assets/crown.svg'

const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <div>
                        <Crown className='logo' />
                    </div>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>Shop</Link>
                    <Link className="nav-link" to='/contact'>Contact</Link>
                    <Link className="nav-link" to='/sign-in'>Sign In</Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation