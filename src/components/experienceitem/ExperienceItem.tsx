import { motion, useInView } from "motion/react";
import { useRef } from "react";

export interface ExperienceItemProps {
  title: string;
  company: string;
  companyLink?: string;
  location: string;
  description: string;
  workDuration: string;
  workDetail: string[];
  logo: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  companyLink,
  location,
  description,
  workDuration,
  workDetail,
  logo,
}: ExperienceItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="experience-content"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 25 }}
      transition={{ duration: 0.8 }}
    >
      <div className="experience-content-date">{workDuration}</div>
      <div className="experience-content-detail">
        <div className="experience-content-detail-title">{title}</div>
        <div className="company-row">
          <div className="company-logo">
            <img src={logo} alt={company} />
          </div>
          <div className="experience-content-detail-company">
            <a href={companyLink} target="_blank" rel="noreferrer">
              {company}
            </a>
            <div className="company-location"> - {location}</div>
          </div>
        </div>
        <div className="experience-content-detail-description">
          {description}
        </div>
        <div className="experience-content-detail-bullets">
          <ul>
            {workDetail.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
