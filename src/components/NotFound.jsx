import { NavLink } from 'react-router-dom';
const NotFound = () => {
	return (
		<div className='not-found'>
			<h2>Sorry</h2>
			<p>That Page can not be found!!</p>
			<NavLink to='/'>Back to the homepage...</NavLink>
		</div>
	);
};

export default NotFound;
