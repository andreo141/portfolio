type Props = {
  imageUrl: string;
  caption?: string;
  className?: string;
};

export default function ImageCard({ imageUrl, caption, className }: Props) {
  return (
    <figure
      className={`${className} overflow-hidden rounded-xs border-2 border-border bg-main font-base shadow-shadow`}
    >
      <img className="w-full aspect-square" src={imageUrl} alt="image" />
      <figcaption className="border-t-2 text-mtext border-border text-center">
        {caption}
      </figcaption>
    </figure>
  );
}
