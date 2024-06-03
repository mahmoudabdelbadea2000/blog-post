interface IProps {
  categoryColor: string;
  categoryBg: string;
  textSize: string;
}

export const ArticleInfo = ({ categoryBg, categoryColor, textSize }: IProps) => {
  return (
    <div className="p-2">
      <div className="space-y-2">
        <div
          className={`capitalize w-[97px] h-7 ${categoryColor} ${categoryBg} rounded-md px-[10px] py-1 flex justify-center items-center`}
        >
          <span className="font-medium text-sm">Technology</span>
        </div>
        <h3 className={`${textSize}  font-semibold text-heading-color`}>
          The Impact of Technology on the Workplace: How Technology is Changing
        </h3>
      </div>
      <div className="flex items-center gap-5 mt-3">
        <div className="flex items-center gap-3">
          <img
            className="w-9 h-9 rounded-full"
            src="/src/assets/author-image.jpg"
            alt="author-image"
          />
          <span className="capitalize text-secondary-color font-medium">
            Tracey Wilson
          </span>
        </div>
        <span className="capitalize text-secondary-color">August 20, 2022</span>
      </div>
    </div>
  );
};