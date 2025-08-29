import React, { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('http://localhost:8080/ece/post');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        if (!Array.isArray(data)) throw new Error('Invalid data format from API');
        data.sort((a, b) => (a._id < b._id ? 1 : -1));
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p className="text-center mt-5">Loading posts...</p>;
  if (error) return <p className="text-center mt-5 text-danger">Error: {error}</p>;
  if (posts.length === 0) return <p className="text-center mt-5">No posts found.</p>;

  return (
    <div className="container mt-4">
      <div className="row">
        {posts.map((post) => (
          <div key={post._id || Math.random()} className="col-12 mb-4">
            <div className="card shadow-sm p-3">
              <div className="row g-3 align-items-center">
                {post.image && (
                  <div className="col-md-4">
                    <img
                      src={post.image}
                      alt={post.title || 'No title'}
                      className="img-fluid rounded"
                      style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                  </div>
                )}
                <div className={post.image ? 'col-md-8' : 'col-12'}>
                  <h5 className="card-title">{post.title || 'No Title'}</h5>
                  <p className="card-text">{post.description || 'No description available'}</p>
                  <small className="text-muted d-block mb-1">
                    Owner: {post.owner ? post.owner.username || 'Unknown' : 'Unknown'} ({post.ownerModel || 'Unknown'})
                  </small>
                  <p className="text-muted">Comments: {Array.isArray(post.comments) ? post.comments.length : 0}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
