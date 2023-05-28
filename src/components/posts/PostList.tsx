import { useState, useEffect, useContext } from "react";

import { db } from "firebaseApp";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import AuthContext from "context/AuthContext";

import PostBox from "./PostBox";

type TabType = "all" | "my";
interface PostListProps {
  hasNavigation?: boolean;
  tabType?: TabType;
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

export default function PostList({ hasNavigation = true, tabType = "all" }: PostListProps) {
  const [activeTab, setActiveTab] = useState<TabType>(tabType);
  const [posts, setPosts] = useState<PostProps[]>([]);
  const { user } = useContext(AuthContext);

  // const getPosts = async () => {
  //   const datas = await getDocs(collection(db, "posts"));
  //   datas?.forEach((doc) => {
  //     const dataObj = { ...dofc.data(), id: doc.id };
  //     setPosts((prev) => [dataObj as PostProps, ...prev]);
  //   });
  // };

  useEffect(() => {
    // getPosts();
    if (user && activeTab) {
      let postsRef = collection(db, "posts");
      let postsQuery;
      if (activeTab === "my") {
        postsQuery = query(postsRef, where("uid", "==", user.uid), orderBy("createdAt", "desc"));
      } else {
        postsQuery = query(postsRef, orderBy("createdAt", "desc"));
      }
      onSnapshot(postsQuery, (snapShot) => {
        let dataObj = snapShot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPosts(dataObj as PostProps[]);
      });
    }
  }, [activeTab, user]);

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
