import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import './index.scss';

const Layout = () => {
	return (
	<div className='container grid'>
		<Navbar/>
		<Outlet />
	</div>
	)
}

export default Layout;