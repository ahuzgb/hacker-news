import { format } from "date-fns"
export default function AllPosts({ posts }) {
  console.log(posts);
  return (
    <div>
      <ol>{posts
        ? posts.map((posts, key) => (
          <li><div key={posts.id}>
              
              <h3 
               style={{ cursor: "pointer", display: "inline-block" }}
              onClick={() => window.open(posts.url, "_blank")}>
                {posts.title}
                            </h3>
                            <p>
                Article by: {posts.author} | Points: {posts.points} | Created
                at: {format(new Date(posts.created_at), "dd MMM yyyy")} | Number of comments:{" "}
                {posts.num_comments}
              </p>
            </div></li>
          ))
        : "No post"}</ol>
    </div>
  );
}
