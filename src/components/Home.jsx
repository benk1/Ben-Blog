import { useState } from 'react';
import BlogList from './BlogList';
const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: 'My new website', body: 'lorem ipsum', author: 'ben', id: 1 },
		{
			title: 'Welcome to the Party',
			body: 'lorem ipsum',
			author: 'james',
			id: 2,
		},
		{ title: 'Web dev tips', body: 'lorem ipsum', author: 'simon', id: 3 },
	]);
	return (
		<div className='home'>
			<BlogList blogs={blogs} />
		</div>
	);
};

export default Home;
