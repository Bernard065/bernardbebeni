import React from 'react';
import { styles } from '../styles';
import { FaTwitter, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Footer = () => {
  const email = 'bernardbebeni@gmail.com';
  const twitterUrl = 'https://twitter.com/bernard_be50514';
  const githubUrl = 'https://github.com/Bernard065';
  const linkedinUrl = 'https://www.linkedin.com/in/benard-bebeni/';
  const mediumUrl = 'https://medium.com/@bernardbebeni';

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>Contact me at:</p>
        <a href={`mailto:${email}`} className={styles.footerLink}>
          {email}
        </a>
        <div className={styles.socialMediaIcons}>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
            <FaTwitter className={styles.socialMediaIcon} />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.socialMediaIcon} />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.socialMediaIcon} />
          </a>
          <a href={mediumUrl} target="_blank" rel="noopener noreferrer">
            <FaMedium className={styles.socialMediaIcon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
