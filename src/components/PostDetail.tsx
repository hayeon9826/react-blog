import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function PostDetail() {
  return (
    <>
      <div className="Post__detail">
        <div className="Post__box">
          <h1 className="Post__title">Microservices Architecture with Node.js: Building Scalable and Robust Applications</h1>
          <div className="Post__profile-box">
            <div className="Post__profile" />
            <div className="Post__author-name">Adarsh Dayanand</div>
            <div className="Post__date">Apr 12</div>
          </div>
          <div className="Post__utils-box">
            <div className="Post__edit">
              <Link to={`/posts/edit/1`}>수정</Link>
            </div>
            <div className="Post__delete">삭제</div>
            <div className="Post__save">
              <AiFillHeart />
            </div>
          </div>
          <br />
          <div className="Post__text">
            Microservices architecture has gained popularity in recent years as a modern approach to building large-scale, complex applications. Microservices
            architecture has gained popularity in recent years as a modern approach to building large-scale, complex applications. Microservices architecture
            has gained popularity in recent years as a modern approach to building large-scale, complex applications. Microservices architecture has gained
            popularity in recent years as a modern approach to building large-scale, complex applications. Microservices architecture has gained popularity in
            recent years as a modern approach to building large-scale, complex applications. Microservices architecture has gained popularity in recent years as
            a modern approach to building large-scale, complex applications. Microservices architecture has gained popularity in recent years as a modern
            approach to building large-scale, complex applications. Microservices architecture has gained popularity in recent years as a modern approach to
            building large-scale, complex applications. Microservices architecture has gained popularity in recent years as a modern approach to building
            large-scale, complex applications. Microservices architecture has gained popularity in recent years as a modern approach to building large-scale,
            complex applications. Microservices architecture has gained popularity in recent years as a modern approach to building large-scale, complex
            applications. Microservices architecture has gained popularity in recent years as a modern approach to building large-scale, complex applications.
            Microservices architecture has gained popularity in recent years as a modern approach to building large-scale, complex applications. Microservices
            architecture has gained popularity in recent years as a modern approach to building large-scale, complex applications. Microservices architecture
            has gained popularity in recent years as a modern approach to building large-scale, complex applications. Microservices architecture has gained
            popularity in recent years as a modern approach to building large-scale, complex applications. Microservices architecture has gained popularity in
            recent years as a modern approach to building large-scale, complex applications. Microservices architecture has gained popularity in recent years as
            a modern approach to building large-scale, complex applications. Microservices architecture has gained popularity in recent years as a modern
            approach to building large-scale, complex applications. Microservices architecture has gained popularity in recent years as a modern approach to
            building large-scale, complex applications. Microservices architecture has gained popularity in recent years as a modern approach to building
            large-scale, complex applications. Microservices architecture has gained popularity in recent years as a modern approach to building large-scale,
            complex applications. Microservices architecture has gained popularity in recent years as a modern approach to building large-scale, complex
            applications. Microservices architecture has gained popularity in recent years as a modern approach to building large-scale, complex applications.
            Microservices architecture has gained popularity in recent years as a modern approach to building large-scale, complex applications. Microservices
            architecture has gained popularity in recent years as a modern approach to building large-scale, complex applications. Microservices architecture
            has gained popularity in recent years as a modern approach to building large-scale, complex applications. Microservices architecture has gained
            popularity in recent years as a modern approach to building large-scale, complex applications. Microservices architecture has gained popularity in
            recent years as a modern approach to building large-scale, complex applications.
          </div>
        </div>
      </div>
    </>
  );
}
