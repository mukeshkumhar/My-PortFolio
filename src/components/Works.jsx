import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { linkedin } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  video,
  about,
  desc,
  source_code_link,
  source_code_link_linkdin,
}) => {
  return (
    <>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <div className=" bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full opacity-100">
          <div className="relative w-full h-[200px] opacity-100">
            <video
              src={video}
              alt={"VIDEO"}
              autoPlay="true"
              muted
              loop
              className=" w-full h-full object-cover rounded-xl"
            />
            <div className=" absolute inset-0 flex justify-end m-1 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "-blank")}
                className=" bg-tertiary w-8 h-8 mr-1 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className=" w-7 h-7 object-contain"
                />
              </div>
              <div
                onClick={() => window.open(source_code_link_linkdin, "-blank")}
                className=" bg-tertiary w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={linkedin}
                  alt="github"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2  text-secondary text-[14px] text-justify">
              {description}
            </p>
          </div>
          
          
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>

          {/* <Tilt
            option={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className=" bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
          >
            <div className="relative w-full h-[200px] opacity-100">
              <video
                src={video}
                alt={name}
                autoPlay="true"
                muted
                loop
                className=" w-full h-full object-cover rounded-xl"
              />

              

              <div className=" absolute inset-0 flex justify-end m-1 card-img_hover">
                <div
                  onClick={() => window.open(source_code_link, "-blank")}
                  className=" bg-tertiary w-8 h-8 mr-1 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={github}
                    alt="github"
                    className=" w-7 h-7 object-contain"
                  />
                </div>
                <div
                  onClick={() =>
                    window.open(source_code_link_linkdin, "-blank")
                  }
                  className=" bg-tertiary w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={linkedin}
                    alt="github"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px] text-justify">
                {description}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </Tilt> */}
        </div>
      </motion.div>
    </>
  );
};

const Works = () => {
  return (
    <>
      <motion.dev variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.dev>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=" mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Here are some projects I've worked on.<br></br>You can find more on my
        GitHub & LinkedIn.
      </motion.p>
      <div className=" mt-20 flex flex-wrap gap-7">
        {projects.map((projects, index) => (
          <ProjectCard key={projects.name} index={index} {...projects} />
        ))}
        {/* `project-${index}` */}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");

{
  /* <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          /> */
}
