import { Link } from 'react-router-dom';
const BlogList = ({ blogs }) => {
	// console.log(onDelete);
	return (
		<div className='blog-list'>
			{blogs.map((blog) => (
				<div className='blog-preview' key={blog.id}>
					<Link to={`/blogs/${blog.id}`}>
						<h2>{blog.title}</h2>
						<p>
							Written by{' '}
							{blog.author[0].toUpperCase() +
								blog.author.slice(1).toLowerCase()}
						</p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default BlogList;
