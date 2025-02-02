import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { linkedin } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { BannerSlider, ImageSlider } from "./ImageSlider";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  video,
  about,
  desc,
  images,
  source_code_link,
  source_code_link_linkdin,
}) => {
  return (
    <>
      {/* <motion.dev variants={fadeIn("up", "spring", index * 0.5, 0.75)}> */}
      <div className=" bg-tertiary p-5 justify-center rounded-3xl sm:w-4/5 w-4/5 opacity-100">
        <div className="relative w-full xl:h-[500px] h-3/2 md:h-4/3 opacity-100">
          <div className="w-full h-full object-cover rounded-3xl">
            {/* <BannerSlider /> */}
            <ImageSlider images={images} />

            {/* <video
                src={video}
                alt={"VIDEO"}
                className=" w-full h-full object-cover rounded-xl"
                onClick={(e) => {
                  e.target.controls = true;
                  e.target.play();
                }}
              /> */}
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

        <div className="w-full flex m-1 card-img_hover pt-2">
          <div
            onClick={() => window.open(source_code_link, "-blank")}
            className=" bg-blue-600 w-1/2 h-10 mr-1 rounded-[5px] flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="github"
              className=" w-7 h-7 object-contain"
            />
          </div>
          <div
            onClick={() => window.open(source_code_link_linkdin, "-blank")}
            className="bg-blue-600 w-1/2 h-10 rounded-[5px] flex justify-center items-center cursor-pointer"
          >
            <img
              src={linkedin}
              alt="github"
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>

        {/* <div className="w-full flex justify-end m-1 card-img_hover">
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
          </div> */}
      </div>
      {/* </motion.dev> */}
    </>
  );
};

const Works = () => {
  return (
    <>
      <motion.dev>
      <p className={styles.sectionSubText}>My work</p>
      <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.dev>

      {/* <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=" mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      > */}
      <p className="text-secondary">
        {" "}
        Here are some projects I've worked on.<br></br>You can find more on my
      </p>
      <p className="text-secondary">GitHub & LinkedIn.</p>
      {/* </motion.p> */}
      <div className=" mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((projects, index) => (
          <ProjectCard key={projects.name} index={index} {...projects} />
        ))}
        {/* `project-${index}` */}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
