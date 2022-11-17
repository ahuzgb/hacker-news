export default function AllPosts({ posts }) {
  console.log(posts);
  return (
    <div>
      {posts
        ? posts.map((posts, key) => (
            <div key={posts.id}>
              <h3 onClick={() => window.open(posts.url, "_blank")}>
                {posts.title}
              </h3>
              <p>
                Article by: {posts.author} | Points: {posts.points} | Created
                at: {posts.created_at} | Number of comments:{" "}
                {posts.num_comments}
              </p>
            </div>
          ))
        : "No post"}
    </div>
  );
}
