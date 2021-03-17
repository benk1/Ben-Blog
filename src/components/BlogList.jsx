const BlogList = ({ blogs }) => {
	// console.log(onDelete);
	return (
		<div className='blog-list'>
			{blogs.map((blog) => (
				<div className='blog-preview' key={blog.id}>
					<h2>{blog.title}</h2>
					<p>
						Written by{' '}
						{blog.author[0].toUpperCase() + blog.author.slice(1).toLowerCase()}
					</p>
				</div>
			))}
		</div>
	);
};

export default BlogList;
