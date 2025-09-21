export default function ProjectCard({ name, description, image }) {
  return (
    <div className="p-4 my-8 shadow hover:shadow-md transition w-2/3">
      <img src={image} alt={name} className="rounded mb-3" />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
