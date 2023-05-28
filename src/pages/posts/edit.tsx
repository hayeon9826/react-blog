import Header from "components/Header";
import PostForm from "components/posts/PostForm";

export default function PostEdit() {
  return (
    <>
      <Header hasSearch={false} />
      <PostForm />
    </>
  );
}
