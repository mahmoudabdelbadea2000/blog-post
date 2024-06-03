interface IProps {
  headingContent?: string;
  paragraphs: string[];
}

export const PartOfArticle = ({ headingContent, paragraphs }: IProps) => {
  return (
    <div className="space-y-[10px]">
      {headingContent && (
        <h4 className="font-work capitalize font-semibold text-xl sm:text-2xl leading-7 text-heading-color">
          {headingContent}
        </h4>
      )}

      <div className="font-source-serif space-y-5 text-text-color text-sm leading-6 sm:text-xl sm:leading-8">
        {paragraphs.length > 0 &&
          paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
      </div>
    </div>
  );
};
