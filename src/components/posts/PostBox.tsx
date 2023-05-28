import { Link } from "react-router-dom";
import { PostProps } from "./PostList";
import { User } from "firebase/auth";
import { toast } from "react-toastify";
import { db } from "firebaseApp";
import { doc, deleteDoc } from "firebase/firestore";

interface PostBoxProps {
  index: number;
  post: PostProps;
  user: User | null;
}

export default function PostBox({ index, post, user }: PostBoxProps) {
  const handleDelete = async () => {
    const confirm = window.confirm("해당 게시글을 삭제하시겠습니까?");
    if (confirm) {
      await deleteDoc(doc(db, "posts", post.id));
      toast.success("게시글을 삭제했습니다.");
    }
  };
  return (
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
            <div role="presentation" className="Post__delete" onClick={handleDelete}>
              삭제
            </div>
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
  );
}
