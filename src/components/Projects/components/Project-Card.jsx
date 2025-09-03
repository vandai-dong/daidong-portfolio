export default function ProjectCard({
  image,
  title,
  description,
  tech,
  live,
  github,
}) {
  return (
    <div className="transform overflow-hidden rounded-2xl bg-white shadow-lg transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold font-sans mb-2">{title}</h3>
        <p className="text-sm text-gray-600 font-serif mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="bg-[#b078c7] text-white px-3 py-1 text-xs rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={live}
            className="inline-block rounded-lg bg-[#a0d8c0] px-4 py-2 text-sm font-semibold text-white hover:bg-[#89c9ac]"
          >
            Live Demo
          </a>
          <a
            href={github}
            className="inline-block rounded-lg bg-[#2c323f] px-4 py-2 text-sm font-semibold text-white hover:bg-[#242933]"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
