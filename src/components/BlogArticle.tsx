import { Link } from "react-router-dom";
import { ArticleInfo } from "./ArticleInfo";

export const BlogArticle = () => {
  return (
    <Link to="blog-post/:id">
      <article className="border-[1px] border-[#E8E8EA] rounded-xl p-4">
        <div className="mb-4">
          <img
            className="rounded-md"
            src="/src/assets/article-1.jpg"
            alt="article-image"
          />
        </div>
        <ArticleInfo
          categoryColor="text-main-color"
          categoryBg="bg-bg-color"
          textSize="text-2xl"
        />
      </article>
    </Link>
  );
};
