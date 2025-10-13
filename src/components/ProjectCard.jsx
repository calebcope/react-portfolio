export default function ProjectCard({ name, description, image, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="flex p-4 mb-2 text-near-black rounded-xl hover:text-[#563517] hover:bg-[#e2ba86]/25 hover:shadow-inner hover:shadow-[#563517]/25 transition">
        <div className="flex-shrink-0 h-22 w-38 mt-1 mr-2 overflow-hidden border-2 border-brown-dark rounded-sm">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-3 ml-2">
          <h3 className="text-md font-bodybold">{name}</h3>
          <p className="mt-2 text-sm font-body text-stone-600">{description}</p>
        </div>
      </div> 
    </a>
  );
}
