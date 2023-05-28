import PostList from "components/posts/PostList";
import Header from "components/Header";
import Footer from "components/Footer";
import Profile from "components/Profile";

export default function ProfilePage() {
  return (
    <>
      <Header />
      <Profile />
      <PostList hasNavigation={false} />
      <Footer />
    </>
  );
}
