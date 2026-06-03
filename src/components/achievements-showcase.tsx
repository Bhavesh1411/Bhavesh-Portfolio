import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { ALL_ACHIEVEMENTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type AchievementCardProps = (typeof ALL_ACHIEVEMENTS)[number] & {
  index: number;
};

const getStatusBadgeStyle = (status: string) => {
  const s = status.toLowerCase();
  if (s.includes("winner")) {
    return "bg-green-500/20 text-green-400 border border-green-500/30";
  }
  if (s.includes("finalist")) {
    return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
  }
  if (s.includes("certified")) {
    return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
  }
  return "bg-purple-500/20 text-purple-400 border border-purple-500/30";
};

const AchievementCard = ({
  index,
  title,
  organization,
  date,
  description,
  status,
  certificate_link,
  project_link,
  project_name,
}: AchievementCardProps) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col h-full"
    >
      {/* Certificate Thumbnail Placeholder / Image */}
      <div className="relative w-full h-[230px] rounded-2xl overflow-hidden bg-black-100 border border-secondary/20 flex items-center justify-center">
        {certificate_link && !certificate_link.includes("example.com") && !certificate_link.endsWith('.pdf') ? (
          <img
            src={certificate_link}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-secondary">
            <svg className="w-16 h-16 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-sm font-medium">Certificate</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="mt-5 flex-grow">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="text-white font-bold text-[20px] leading-tight">{title}</h3>
          <span className={`px-2 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider whitespace-nowrap mt-1 ${getStatusBadgeStyle(status)}`}>
            {status}
          </span>
        </div>
        <p className="text-secondary text-[14px] font-semibold mb-1">{organization}</p>
        <p className="text-secondary text-[12px] mb-3">{date}</p>
        
        {project_name && (
           <p className="text-white text-[13px] font-bold mb-2">Project: <span className="text-secondary font-normal">{project_name as string}</span></p>
        )}
        <p className="text-white-100 text-[14px] font-light leading-relaxed line-clamp-4">{description}</p>
      </div>

      {/* Links */}
      <div className="mt-4 flex flex-wrap gap-3 pt-4 border-t border-secondary/20">
        {certificate_link && (
          <a
            href={certificate_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-bold text-white flex items-center gap-1 hover:text-secondary transition-colors"
          >
            View Certificate
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        )}
        {project_link && (
          <a
            href={project_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-bold text-white flex items-center gap-1 hover:text-secondary transition-colors"
          >
            Project Link
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
          </a>
        )}
      </div>
    </Tilt>
  </motion.div>
);

export const AchievementsShowcase = () => {
  return (
    <SectionWrapper idName="achievements">
      <div className="mb-10 pt-10">
        <Link to="/" className="inline-flex items-center text-secondary hover:text-white transition-colors gap-2 font-semibold bg-tertiary px-4 py-2 rounded-lg border border-secondary/20">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Portfolio
        </Link>
      </div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My complete journey</p>
        <h2 className={styles.sectionHeadText}>All Achievements.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          A comprehensive collection of my hackathons, certifications, competitions, and technical achievements. These experiences highlight my dedication to continuous learning, problem-solving, and building innovative solutions in fast-paced environments.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {ALL_ACHIEVEMENTS.map((achievement, i) => (
          <AchievementCard key={`achievement-${i}`} index={i} {...achievement} />
        ))}
      </div>
    </SectionWrapper>
  );
};
