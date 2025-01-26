import PropTypes from "prop-types";

function ProjectCard({
  title,
  thumbnail,
  description,
  live,
  repo,
  addToProjectRefs,
}) {
  return (
    <div ref={addToProjectRefs} className="group rounded-md border overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img
          className="mb-4 h-full w-full transition duration-300 group-hover:scale-105"
          src={thumbnail}
          alt={title}
        />
      </div>

      <div className="p-3 bg-stone-950 bg-opacity-60 group-hover:bg-opacity-100 transition duration-300">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="mb-2 mt-1 text-sm line-clamp-2">{description}</p>

        <div className="flex justify-between">
          <a
            className="rounded bg-emerald-800 px-4 py-1 transition-colors hover:bg-emerald-950"
            href={live}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
          <a
            className="rounded bg-gray-800 px-4 py-1 transition-colors hover:bg-gray-950"
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  addToProjectRefs: PropTypes.func,
};
