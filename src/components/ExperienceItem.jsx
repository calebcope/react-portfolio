export default function ExperienceItem({ date, title, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="flex p-4 mb-2 items-baseline text-near-black rounded-xl hover:text-[#563517] hover:bg-[#e2ba86]/25 hover:shadow-inner hover:shadow-[#563517]/25 transition">
        <div className="flex-1">
          <p className="text-xs font-body text-stone-500">{date}</p>
        </div>
        <div className="flex-3 ml-2">
          <h3 className="text-md font-bodybold">{title}</h3>
          <p className="text-sm font-body mt-2 text-stone-600">{description}</p>
        </div> 
      </div>
    </a>
  );
}
