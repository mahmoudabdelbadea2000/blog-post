interface IProps {
  src: string;
  alt: string;
}

export const ArticleCoverImage = ({ src, alt }: IProps) => {
  return <img className="rounded-xl max-w-full my-6" src={src} alt={alt} />;
};