import React from 'react';
import { motion } from 'framer-motion';

export const VerticalTimeline = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full max-w-7xl mx-auto py-10">
      {/* Vertical Line */}
      <div className="absolute left-[38px] md:left-1/2 top-0 bottom-0 w-[4px] bg-white/20 transform md:-translate-x-1/2 rounded-full" />
      <div className="flex flex-col gap-12 w-full">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, { position: index % 2 === 0 ? "left" : "right" });
          }
          return child;
        })}
      </div>
    </div>
  );
};

type ElementProps = {
  contentStyle?: React.CSSProperties;
  contentArrowStyle?: React.CSSProperties;
  date?: string;
  iconStyle?: React.CSSProperties;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  position?: "left" | "right";
};

export const VerticalTimelineElement = ({
  contentStyle,
  contentArrowStyle,
  date,
  iconStyle,
  icon,
  children,
  position = "left"
}: ElementProps) => {
  const isLeft = position === "left";

  return (
    <div className={`relative flex flex-col md:flex-row items-center w-full justify-center md:justify-between`}>
      
      {/* Icon */}
      <div 
        className="absolute left-[18px] md:left-1/2 transform md:-translate-x-1/2 z-10 w-[44px] h-[44px] md:w-[60px] md:h-[60px] rounded-full border-4 border-[#050816] flex items-center justify-center shadow-[0_0_0_4px_#232631]"
        style={iconStyle}
      >
        {icon}
      </div>

      {/* Content Container */}
      <div className={`w-full flex ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: "spring", duration: 1.25 }}
          className={`relative w-full md:w-[45%] ml-[80px] md:ml-0 p-6 rounded-xl shadow-lg border border-[#232631]`}
          style={contentStyle}
        >
          {/* Arrow pointing to line (Desktop) */}
          <div 
            className={`hidden md:block absolute top-[15px] ${isLeft ? 'right-[-15px]' : 'left-[-15px] rotate-180'}`}
            style={{ width: 0, height: 0, borderTop: '15px solid transparent', borderBottom: '15px solid transparent', borderLeft: contentArrowStyle?.borderRight || '15px solid #1d1836' }}
          />
          {/* Arrow pointing to line (Mobile) */}
          <div 
            className={`block md:hidden absolute top-[15px] left-[-15px] rotate-180`}
            style={{ width: 0, height: 0, borderTop: '15px solid transparent', borderBottom: '15px solid transparent', borderLeft: contentArrowStyle?.borderRight || '15px solid #1d1836' }}
          />

          {children}

          {/* Date Mobile */}
          <div className="block md:hidden text-white/60 font-bold text-[14px] mt-4 pt-4 border-t border-white/10">
            {date}
          </div>
        </motion.div>
      </div>

      {/* Date Desktop */}
      <div 
        className={`absolute top-6 ${isLeft ? 'md:left-[55%]' : 'md:right-[55%] text-right'} hidden md:block w-[40%] text-white/60 font-bold text-[18px]`}
      >
        {date}
      </div>
      
    </div>
  );
};
