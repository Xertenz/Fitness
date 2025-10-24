import Image from "next/image";
import * as motion from "motion/react-client";

type ProgramType = {
  title: string;
  image: string;
  description: string;
  index: number;
};

export default function Program({
  title,
  image,
  description,
  index,
}: ProgramType): React.ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
      className="program group border-gray-300 border-1 rounded-xl overflow-hidden shadow hover:shadow-md shadow-gray-200 hover:shadow-gray-400 transition-shadow duration-500"
    >
      <div className="card-img w-full h-60 md:h-56 lg:h-40 overflow-hidden">
        <Image
          src={`/images/${image}`}
          alt={title}
          fill
          className="static! object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="card-info p-5">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.3 }}
          className="card-title font-bold text-lg mb-3 transition-colors duration-500 group-hover:text-red-500"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.4 }}
          className="text-gray-700 mb-3"
        >
          {description}
        </motion.p>
        <div className="text-center">
          <button className="border-1 bg-gray-500 transition-colors hover:bg-red-500 duration-500 text-white cursor-pointer w-full py-2 rounded-md">
            Learn more
          </button>
        </div>
      </div>
    </motion.div>
  );
}
