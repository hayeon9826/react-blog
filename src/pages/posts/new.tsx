import Header from "components/Header";
import PostForm from "components/posts/PostForm";

export default function PostNew() {
  return (
    <>
      <Header hasSearch={false} />
      <PostForm />
    </>
  );
}
