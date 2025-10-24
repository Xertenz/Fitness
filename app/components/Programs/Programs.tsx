import { programs } from "@/app/lib/constants";
import * as motion from "motion/react-client";
import Program from "../Program/Program";

export default function Programs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="program-title text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-4xl font-bold mb-3"
          >
            Our Programs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="text-lg max-w-xl mx-auto mb-8"
          >
            Choose from our comperhensive fitness programs designed to meet your
            specific goals and fitness level.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="cards grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {programs.map((program, index) => (
            <Program
              key={program.title}
              index={index}
              title={program.title}
              image={program.image}
              description={program.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
