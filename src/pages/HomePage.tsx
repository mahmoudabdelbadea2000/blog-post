import { BlogArticle, Button } from "../components";

const HomePage = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-4">
        <BlogArticle />
        <BlogArticle />
        <BlogArticle />
        <BlogArticle />
        <BlogArticle />
        <BlogArticle />
        <BlogArticle />
        <BlogArticle />
        <BlogArticle />
      </div>
      <Button />
    </section>
  );
};

export default HomePage;
