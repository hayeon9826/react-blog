import { useCallback, useContext, useEffect, useState } from "react";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import { AiFillHeart } from "react-icons/ai";
import { db } from "firebaseApp";
import { Link, useParams } from "react-router-dom";
import { PostProps } from "./PostList";
import Loader from "components/Loader";
import AuthContext from "context/AuthContext";

export default function PostDetail() {
  const params = useParams();
  const [post, setPost] = useState<PostProps | null>(null);
  const { user } = useContext(AuthContext);

  const handleDelete = async () => {
    const confirm = window.confirm("해당 게시글을 삭제하시겠습니까?");
    if (confirm && post) {
      await deleteDoc(doc(db, "posts", post.id));
      toast.success("게시글을 삭제했습니다.");
    }
  };

  const getPost = useCallback(async () => {
    if (params.id) {
      const docRef = doc(db, "posts", params.id);
      const docSnap = await getDoc(docRef);
      setPost({ ...(docSnap?.data() as PostProps), id: docSnap.id });
    }
  }, [params.id]);

  useEffect(() => {
    if (params.id) getPost();
  }, [getPost, params.id]);

  return (
    <>
      <div className="Post__detail">
        {post ? (
          <div className="Post__box">
            <h1 className="Post__title">{post?.title}</h1>
            <div className="Post__profile-box">
              <div className="Post__profile" />
              <div className="Post__author-name">{post?.email}</div>
              <div className="Post__date">{post?.createdAt}</div>
            </div>
            {user?.uid === post?.uid && (
              <div className="Post__utils-box">
                <div className="Post__edit">
                  <Link to={`/posts/edit/${post?.id}`}>수정</Link>
                </div>
                <div onClick={handleDelete} role="presentation" className="Post__delete">
                  삭제
                </div>
                {/* <div className="Post__save">
                  <AiFillHeart />
                </div> */}
              </div>
            )}

            <br />
            <div className="Post__text--pre-wrap">{post?.content}</div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}
