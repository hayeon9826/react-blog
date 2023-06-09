import PostList from "components/posts/PostList";
import Header from "components/Header";
import Footer from "components/Footer";
import Carousel from "components/Carousel";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <PostList />
      <Footer />
    </>
  );
}
