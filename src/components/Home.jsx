import { useState, useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {
	const [blogs, setBlogs] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	// const handleDelete = (id) => {
	// 	const newBlogs = blogs.filter((blog) => blog.id !== id);
	// 	setBlogs(newBlogs);
	// };
	useEffect(() => {
		fetch('http://localhost:8000/blogs')
			.then((res) => {
				if (!res.ok) {
					throw Error('Could not fetch the data for that resource');
				}
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setBlogs(data);
				setIsPending(false);
			})
			.catch((err) => {
				setIsPending(false);
				setError(err.message);
			});
	}, []);
	return (
		<div className='home'>
			{isPending && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} />}
		</div>
	);
};

export default Home;
