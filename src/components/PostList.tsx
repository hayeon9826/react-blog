import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { db } from "firebaseApp";
import { collection, getDocs } from "firebase/firestore";
import AuthContext from "context/AuthContext";

import { AiFillHeart } from "react-icons/ai";

interface PostListProps {
  hasNavigation?: boolean;
}

interface PostProps {
  id: string;
  title: string;
  email: string;
  summary: string;
  content: string;
  createdAt: string;
  uid: string;
}

type TabType = "all" | "my";

export default function PostList({ hasNavigation = true }: PostListProps) {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [posts, setPosts] = useState<PostProps[]>([]);
  const { user } = useContext(AuthContext);

  const getPosts = async () => {
    const datas = await getDocs(collection(db, "posts"));
    datas?.forEach((doc) => {
      const dataObj = { ...doc.data(), id: doc.id };
      setPosts((prev) => [dataObj as PostProps, ...prev]);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {hasNavigation && (
        <div className="Post__navigation">
          <div role="presentation" onClick={() => setActiveTab("all")} className={activeTab === "all" ? "Post__navigation-active" : ""}>
            전체
          </div>
          <div role="presentation" onClick={() => setActiveTab("my")} className={activeTab === "my" ? "Post__navigation-active" : ""}>
            내가쓴 글
          </div>
        </div>
      )}
      <div className="Post__list">
        {posts?.length > 0 ? (
          posts.map((post, index) => (
            <div key={index} className="Post__box">
              <Link to={`/posts/${post?.id}`}>
                <div className="Post__profile-box">
                  <div className="Post__profile" />
                  <div className="Post__author-name">{post?.email}</div>
                  <div className="Post__date">{post?.createdAt}</div>
                </div>

                <h1 className="Post__title">{post?.title}</h1>
                <div className="Post__text">{post?.summary}</div>
              </Link>
              <div className="Post__utils-box">
                {user?.uid === post?.uid && (
                  <>
                    <div className="Post__delete">삭제</div>
                    <div className="Post__edit">
                      <Link to={`/posts/edit/${post?.id}`}>수정</Link>
                    </div>
                  </>
                )}
                {/* <div className="Post__save">
                  <AiFillHeart />
                </div> */}
              </div>
            </div>
          ))
        ) : (
          <div className="Post__box--no-posts">
            <div className="Post__text">게시글이 없습니다</div>
          </div>
        )}
      </div>
    </>
  );
}
