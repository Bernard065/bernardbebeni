import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { FaLinkedin, FaTwitter, FaGithub, FaMedium } from 'react-icons/fa';


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  // const handleDownloadCV = () => {
  //   const downloadLink = document.createElement('a');
  //   downloadLink.href = '/cv/BernardCv.pdf';
  //   downloadLink.download = 'BernardCv.pdf';
  //   downloadLink.click();
  // };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      As a skilled software developer and UX designer, I bring a diverse set of technical skills and creative problem-solving abilities to create efficient, scalable, and user-friendly solutions. With expertise in TypeScript, JavaScript, and frameworks like ReactJs, Node.js, Next.js, Ruby, and Three.js, I have a strong foundation in web development and a proven track record of delivering high-quality software products. I thrive on collaboration and excel at working closely with clients to understand their needs and goals. By leveraging my technical knowledge and adaptability, I ensure that the solutions I develop address real-world problems and exceed client expectations. 
      {/* <div>
      <button className='bg-[#7E37FF] hover:bg-[#915EFF] text-white font-bold py-2 px-4 rounded mt-6' onClick={handleDownloadCV}>
        Download CV
      </button>

      </div>  */}
      
      </motion.p>
      <div className="find-me-section mt-10">
        <h3 className={styles.sectionHeadText}>Find Me In</h3>
        <div className="social-icons flex gap-6 mt-3">
          <a href="https://www.linkedin.com/in/benard-bebeni/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon hover:text-gray-600" size={32} />
          </a>
          <a href="https://twitter.com/bernard_be50514" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon hover:text-gray-600" size={32} />
          </a>
          <a href="https://github.com/Bernard065" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon hover:text-gray-600" size={32} />
          </a>
          <a href='https://medium.com/@bernardbebeni' target='-blank' rel='noopener noreferrer'>
            <FaMedium className="icon hover:text-gray-600" size={32} />
          </a>
        </div>
      </div>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
      
    </>
  )
}

export default SectionWrapper(About, "about")