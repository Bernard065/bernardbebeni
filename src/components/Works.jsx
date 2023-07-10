import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github, jobit } from '../assets';
import { Link } from 'react-router-dom';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_link }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl w-full h-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'></div>
        </div>

        <div className='mt-5 flex items-center'>
          <h3 className='text-white font-bold text-[28px]'>{name}</h3>
        </div>

        <div className='mt-4'>
          <p>
            Github:
            <span>
              <a
                href={source_code_link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-red-400 text-md font-bold hover:underline ml-2'
              >
                Source Code
              </a>
            </span>
          </p>
        </div>
        <div className='mt-1'>
          Live Link:
          <span>
            <a
              href={live_link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-red-400 text-md font-bold hover:underline ml-2'
            >
              Live Link
            </a>
          </span>
        </div>

        <div className='my-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        {expanded && (
          <div className='mt-4'>
            <p>{description}</p>
            {/* Additional details go here */}
          </div>
        )}

        <div className='mt-4'>
          {expanded ? (
            <button
              onClick={toggleExpansion}
              className='text-red-400 text-md font-bold hover:underline'
            >
              See Less
            </button>
          ) : (
            <button
              onClick={toggleExpansion}
              className='text-white text-md font-bold hover:underline'
            >
              See More about Project
            </button>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my skills and experience through real-world examples. Each project is briefly described with links to code repositories and live demos.
        </motion.p>
      </div>
      <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        {projects.map((project, index) => (
          <div key={`project-${index}`}>
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
