export default function ExperienceItem({ date, title, description }) {
  return (
    <div className="flex flex-1 mb-6">
      <div className="flex-1 w-fit">
        <p className="text-shadow-md">{date}</p>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}
