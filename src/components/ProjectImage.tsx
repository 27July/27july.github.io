type Props = {
  image: string;
  title: string;
};

export default function ProjectImage({ image, title }: Props) {
  return (
    <div className="mb-5 aspect-[16/9] overflow-hidden rounded-xl border border-[#3B4252] bg-[#111827]">
      <img
        src={image}
        alt={`${title} screenshot`}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}
