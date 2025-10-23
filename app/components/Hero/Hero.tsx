import * as motion from "motion/react-client";
import Image from "next/image";
import hero from "../../../public/images/fitness-hero.jpeg";

export default function Hero() {
  return (
    <section className="h-screen relative flex justify-center items-center mt-16">
      <div className="absolute inset-0">
        <Image
          src={hero}
          alt="hero"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-1 text-center">
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h1 className="text-white font-bold text-5xl">
            Transform Your Body,
          </h1>
          <h1 className="text-red-600 font-bold text-5xl">
            Transform Your Life
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-white mb-4"
        >
          Join our fitness programs and achieve your goals with expert trainers
          and personalized plans
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="text-white border-red-500 border-2 rounded py-2 px-5 bg-red-500 hover:bg-red-600 transition cursor-pointer hover:scale-105">
            Start Free Trial
          </button>
          <button className="text-white border-white border-2 rounded py-2 px-5 cursor-pointer transition hover:scale-105">
            View Plans
          </button>
        </motion.div>
      </div>

      <div className="absolute z-10 bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 bg-transparent rounded-full border-3 border-white flex justify-center items-center">
          <span className="w-1.5 h-4 bg-white rounded-full -translate-y-1"></span>
        </div>
      </div>
    </section>
  );
}
