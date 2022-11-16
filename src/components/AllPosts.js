export default function AllPosts({ posts }) {
  console.log(posts);
  return (
    <div>
      {posts
        ? posts.map((posts, key) => (
            <div key={posts.id}>
              <h3>{posts.title}</h3>
              <p>
                {posts.points}
                {posts.author}
              </p>
            </div>
          ))
        : "No post"}
    </div>
  );
}
