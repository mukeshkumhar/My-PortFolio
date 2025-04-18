import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";


const SearviceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.dev
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full shadow-card "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="border border-sky-500 border-spacing-1 bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain" />
          <h3 className="text-white text-center text-[18px] font-bold">{title}</h3>
        </div>
      </motion.dev>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.dev variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.dev>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px] max-w-4xl"
      >
        Hi, I'm Mukesh Kumhar, a passionate software developer dedicated to
        transforming ideas into impactful digital experiences.<br></br> I
        specialize in building intuitive and efficient{" "}
        <span className="font-normal text-white"> Mobile Apps</span> that
        address real-world challenges.<br></br>
        With expertise in
        <span className="font-normal text-white"> Kotlin, React-Native, Node.js, Express, and JavaScript </span>
        I thrive on crafting clean, user-focused solutions that make technology
        accessible and engaging.<br></br> Beyond coding, I'm an avid video editor who
        loves storytelling through visuals.<br></br> I'm constantly exploring new
        technologies, expanding my skillset, and taking on challenges that push
        my creativity and technical abilities.<br></br> I'm especially enthusiastic about
        App Development, where functionality meets user experience.
      </motion.p>
      <div className=" mt-16 flex flex-wrap gap-10 justify-center">
        {services.map((services, index) => (
          <SearviceCard key={services.title} index={index} {...services} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About,"about");
