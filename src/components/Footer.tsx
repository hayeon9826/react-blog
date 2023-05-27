import { Link } from "react-router-dom";
import { BsFillMoonFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <div>
        <Link to="/posts/new">글쓰기</Link>
        <Link to="/posts">게시글</Link>
        <Link to="/profile">프로필</Link>
      </div>
      <div>
        <BsFillMoonFill />
      </div>
    </footer>
  );
}
