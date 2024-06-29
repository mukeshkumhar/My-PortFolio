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
        className="mt-4 text-secondary text-[17px] leading-[30px] max-w-3xl"
      >
        I'm Mukesh Kumhar, a software developer with a passion for bringing
        ideas to life through code. I enjoy the challenge of creating
        user-friendly applications and websites that solve real-world problems.
        I specialize in developing both web and mobile applications.<br></br> My skillset
        includes JAVA, Kotlin, React, React-Native, HTML, CSS & JS.<br></br> When I'm not
        coding, I enjoy Video Editing. <br></br>I'm always looking to expand my knowledge
        and take on new challenges.<br></br> I'm particularly interested in App Development.
      </motion.p>
      <div className=" mt-20 flex flex-wrap gap-10">
        {services.map((services, index) => (
          <SearviceCard key={services.title} index={index} {...services} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About,"about");
