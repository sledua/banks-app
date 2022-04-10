import { NavLink } from 'react-router-dom';
import './index.scss';

const Navbar = () => {
	return(
		<div className='nav grid'>
			<div className='logo'>Template</div>
			<nav className='navigation'>
				<NavLink 
					exact="true" 
					activclassname="active" 
					className="li"
					to="/">
					Banc
				</NavLink>
				<NavLink 
					exact="true" 
					activclassname="active" 
					className="li"
					to="/calculator">
					Calculator
				</NavLink>
			</nav>
	</div>
	)
}

export default Navbar;