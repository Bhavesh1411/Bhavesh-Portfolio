import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { FEATURED_ACHIEVEMENTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";

// SVG Icons
const TrophyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-[60%] h-[60%] text-white !m-0 !static"
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
    <path d="M12 2a6 6 0 0 1 6 6v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z" />
  </svg>
);

const CertificationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-[60%] h-[60%] text-white !m-0 !static"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <circle cx="12" cy="11" r="3" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

// Badge Style Helper
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

type TimelineCardProps = {
  item: (typeof FEATURED_ACHIEVEMENTS)[number];
};

// Timeline Card
const TimelineCard = ({ item }: TimelineCardProps) => {
  const isHackathon = item.icon_type === "hackathon";
  const iconBg = isHackathon ? "#804dee" : "#2f80ed";

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={item.date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          {isHackathon ? <TrophyIcon /> : <CertificationIcon />}
        </div>
      }
    >
      <div className="flex flex-col gap-2">
        {/* Header containing Name, Organization and Status Badge */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <div>
            <h3 className="text-white text-[20px] sm:text-[22px] font-bold tracking-wide">
              {item.title}
            </h3>
            <p className="text-secondary text-[14px] sm:text-[16px] font-semibold mt-1">
              {item.organization}
            </p>
          </div>
          <span
            className={`px-3 py-1 text-[11px] font-bold rounded-full uppercase tracking-wider w-fit self-start sm:self-auto ${getStatusBadgeStyle(
              item.status
            )}`}
          >
            {item.status}
          </span>
        </div>

        {/* Short Description */}
        {(item as any).project_name && (
          <p className="text-secondary text-[15px] font-bold mt-4">
            Project: <span className="text-white">{(item as any).project_name}</span>
          </p>
        )}
        <p className={`text-white-100 text-[14px] ${(item as any).project_name ? 'mt-2' : 'mt-4'} leading-relaxed font-light`}>
          {item.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          {item.certificate_link && (
            <a
              href={item.certificate_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary py-2 px-4 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-black-200 transition-all duration-300 motion-reduce:transition-none border border-secondary/20 text-[13px] flex items-center gap-2"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              View Certificate
            </a>
          )}

          {item.project_link && (
            <a
              href={item.project_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black-gradient py-2 px-4 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:opacity-80 transition-all duration-300 motion-reduce:transition-none border border-secondary/10 text-[13px] flex items-center gap-2"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Project Link
            </a>
          )}
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

// Experience
export const Experience = () => {
  return (
    <SectionWrapper idName="work">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My accomplishments & credentials</p>
          <h2 className={styles.sectionHeadText}>Hackathons & Certifications.</h2>
        </motion.div>

        {/* Timeline */}
        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {FEATURED_ACHIEVEMENTS.map((item, i) => (
              <TimelineCard key={i} item={item} />
            ))}
          </VerticalTimeline>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/achievements"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-black-200 transition-all duration-300 border border-secondary/20 flex items-center gap-2"
          >
            View All Achievements
            <svg
              className="w-5 h-5 ml-1 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </>
    </SectionWrapper>
  );
};
