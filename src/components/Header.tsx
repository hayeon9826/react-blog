import { Link } from "react-router-dom";

interface HeaderProps {
  hasSearch?: boolean;
}

export default function Header({ hasSearch = true }: HeaderProps) {
  return (
    <header>
      <div>
        <Link className="Header__logo" to="/">
          Blog
        </Link>
        {hasSearch && <input type="search" placeholder="게시글 검색" onChange={(e) => console.log(e.target.value)}></input>}
      </div>
      <div>
        <Link to="/posts/new">글쓰기</Link>
        <Link to="/posts">게시글</Link>
        <Link to="/profile">프로필</Link>
      </div>
    </header>
  );
}
