import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sm:h-[100px] p-4 sm:py-8 sm:px-11 mb-8">
      <div className="flex justify-between items-center gap-4 sm:gap-0">
        <Link to="/">
          <div>
            <img
              className="w-[100px] sm:w-fit"
              src="/src/assets/blog-logo.svg"
              alt="blog-image"
            />
          </div>
        </Link>

        <div className="leading-6 hidden sm:block">
          <span className="text-slate-950">Home</span>
        </div>
        <form className="relative">
          <input
            className="w-[166px] h-[36px] rounded-md p-2 pl-4 bg-[#F4F4F5] focus:outline-none text-text-color placeholder:text-text-color"
            type="search"
            name="search"
            id="search"
            placeholder="Search"
          />
          <img
            className="w-4 h-4 absolute top-[50%] right-3 translate-y-[-50%]"
            src="/src/assets/search-icon.svg"
            alt="search-icon"
          />
        </form>
      </div>
    </header>
  );
};
