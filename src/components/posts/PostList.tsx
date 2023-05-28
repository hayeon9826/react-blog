import { useState, useEffect, useContext } from "react";

import { db } from "firebaseApp";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import AuthContext from "context/AuthContext";

import PostBox from "./PostBox";

interface PostListProps {
  hasNavigation?: boolean;
}

export interface PostProps {
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

  // const getPosts = async () => {
  //   const datas = await getDocs(collection(db, "posts"));
  //   datas?.forEach((doc) => {
  //     const dataObj = { ...doc.data(), id: doc.id };
  //     setPosts((prev) => [dataObj as PostProps, ...prev]);
  //   });
  // };

  useEffect(() => {
    // getPosts();
    let postsRef = collection(db, "posts");
    let postsQuery = query(postsRef, orderBy("createdAt", "desc"));
    onSnapshot(postsQuery, (snapShot) => {
      let dataObj = snapShot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPosts(dataObj as PostProps[]);
    });
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
          posts.map((post, index) => <PostBox key={post?.id} index={index} post={post} user={user} />)
        ) : (
          <div className="Post__box--no-posts">
            <div className="Post__text">게시글이 없습니다</div>
          </div>
        )}
      </div>
    </>
  );
}
