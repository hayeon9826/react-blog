import { useState, useContext, useCallback, useEffect } from "react";

import { app } from "firebaseApp";
import { useNavigate, useParams } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { db } from "firebaseApp";
import { toast } from "react-toastify";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import AuthContext from "context/AuthContext";
import { PostProps } from "./PostList";
import Loader from "components/Loader";

export default function PostForm() {
  const params = useParams();
  const [post, setPost] = useState<PostProps | null>(null);

  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const auth = getAuth(app);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const getPost = useCallback(async () => {
    if (params.id) {
      const docRef = doc(db, "posts", params.id);
      const docSnap = await getDoc(docRef);
      setPost({ ...(docSnap?.data() as PostProps), id: docSnap.id });
    }
  }, [params.id]);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      if (post) {
        const postRef = doc(db, "posts", post?.id);
        await updateDoc(postRef, {
          title: title,
          summary: summary,
          content: content,
          updatedAt: new Date()?.toLocaleDateString(),
        });

        navigate(`/posts/${post.id}`);
        toast.success("게시글을 수정했습니다.");
      } else {
        await addDoc(collection(db, "posts"), {
          title: title,
          summary: summary,
          content: content,
          createdAt: new Date()?.toLocaleDateString(),
          email: auth?.currentUser?.email,
          uid: user?.uid,
        });
        navigate("/");
        toast.success("게시글을 생성했습니다.");
      }
    } catch (e: any) {
      console.log(e);
      toast.error(e);
    }
  };

  const onChange = (e: any) => {
    const {
      target: { name, value },
    } = e;

    if (name === "title") {
      setTitle(value);
    }
    if (name === "summary") {
      setSummary(value);
    }
    if (name === "content") {
      setContent(value);
    }
  };

  useEffect(() => {
    if (params.id) getPost();
  }, [getPost, params.id]);

  useEffect(() => {
    if (post) {
      setTitle(post?.title);
      setSummary(post?.summary);
      setContent(post?.content);
    }
  }, [post]);

  return (post && user?.uid === post.uid) || (!post && user) ? (
    <form onSubmit={onSubmit} className="Form">
      <div className="Form__block">
        <label htmlFor="title">제목</label>
        <input type="text" name="title" id="title" required value={title} onChange={onChange} />
      </div>
      <div className="Form__block">
        <label htmlFor="summary">요약</label>
        <input type="text" name="summary" id="summary" required value={summary} onChange={onChange} />
      </div>
      <div className="Form__block">
        <label htmlFor="content">내용</label>
        <textarea name="content" id="content" required value={content} onChange={onChange} />
      </div>
      <div className="Form__block">
        <input type="submit" value={post ? "수정" : "제출"} className="Form__btn-submit" />
      </div>
    </form>
  ) : (
    <Loader />
  );
}
