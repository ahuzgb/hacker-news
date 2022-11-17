export default function Navbar() {
  return (
    <div>
      <div className="nav-container">
        <div className="nav-logo">
          <h3>HACKER NEWS</h3>
        </div>
        <div className="nav-elements">
          <a href="newest">news</a> |<a href="newest">past</a> |
          <a href="newest">comments</a> |<a href="newest">ask</a> |
          <a href="newest">show</a> |<a href="newest">jobs</a> |
          <a href="newest">submit</a>
        </div>

        <div className="nav-login">
          <li>login</li>
        </div>
      </div>
    </div>
  );
}
