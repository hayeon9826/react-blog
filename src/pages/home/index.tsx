import { Link } from "react-router-dom";

import { AiFillHeart } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <header>
        <input type="search" placeholder="게시글 검색" onChange={(e) => console.log(e.target.value)}></input>
        <div>
          <Link to="/posts/new">글쓰기</Link>
          <Link to="/posts">게시글</Link>
          <Link to="/profile">프로필</Link>
        </div>
      </header>
      <div className="Post__navigation">
        <div className="Post__navigation-active">추천</div>
        <div>팔로잉</div>
      </div>
      <div className="Post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="Post__box">
            <Link to={`/posts/${e}`}>
              <div className="Post__profile-box">
                <div className="Post__profile" />
                <div className="Post__author-name">Adarsh Dayanand</div>
                <div className="Post__date">Apr 12</div>
              </div>
              <h1 className="Post__title">Microservices Architecture with Node.js: Building Scalable and Robust Applications</h1>
              <div className="Post__text">
                Microservices architecture has gained popularity in recent years as a modern approach to building large-scale, complex applications. …
              </div>
              <div className="Post__utils-box">
                <div className="Post__delete">삭제</div>
                <div className="Post__edit">수정</div>
                <div className="Post__save">
                  <AiFillHeart />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <footer>
        <Link to="/posts/new">글쓰기</Link>
        <Link to="/posts">게시글</Link>
        <Link to="/profile">프로필</Link>
      </footer>
    </div>
  );
}
