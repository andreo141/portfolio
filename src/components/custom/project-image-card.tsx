type Props = {
  imageUrl: string;
  caption: string;
};

export default function ImageCard({ imageUrl, caption }: Props) {
  return (
    <figure className="w-[400px] overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-shadow">
      <img className="w-full aspect-[4/3]" src={imageUrl} alt="image" />
    </figure>
  );
}
