import PostList from "components/posts/PostList";
import Header from "components/Header";
import Footer from "components/Footer";

export default function PostListPage() {
  return (
    <>
      <Header />
      <PostList hasNavigation={false} />
      <Footer />
    </>
  );
}
