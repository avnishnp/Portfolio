"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface MarqueeProps {
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

const SkillsMarquee: React.FC<MarqueeProps> = ({
  direction = "left",
  speed = 20,
  pauseOnHover = true,
  className = "",
}) => {
  const skillsRow1 = [
    { name: "Python", logo: "/logos/python.svg" },
    { name: "SQL", logo: "/logos/sql.svg" },
    { name: "Airflow", logo: "/logos/airflow.svg" },
    { name: "AWS", logo: "/logos/aws.svg" },
    { name: "Redshift", logo: "/logos/redshift.svg" },
    { name: "Snowflake", logo: "/logos/snowflake.svg" },
    { name: "Databricks", logo: "/logos/databricks.svg" },
  ];

  const skillsRow2 = [
    { name: "Spark", logo: "/logos/spark.svg" },
    { name: "Hadoop", logo: "/logos/hadoop.svg" },
    { name: "Kafka", logo: "/logos/kafka.svg" },
    { name: "MongoDB", logo: "/logos/mongodb.svg" },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
    { name: "Power BI", logo: "/logos/powerbi.svg" },
    { name: "Tableau", logo: "/logos/tableau.svg" },
  ];

  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [fallbacks, setFallbacks] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const animate = () => {
      if (!isPaused) {
        const scrollAmount = direction === "left" ? 1 : -1;

        // Row 1
        if (row1Ref.current) {
          row1Ref.current.scrollLeft += scrollAmount;
          const { scrollLeft, scrollWidth, clientWidth } = row1Ref.current;
          if (direction === "left" && scrollLeft >= scrollWidth - clientWidth) {
            row1Ref.current.scrollLeft = 0;
          } else if (direction === "right" && scrollLeft <= 0) {
            row1Ref.current.scrollLeft = scrollWidth - clientWidth;
          }
        }

        // Row 2 (reverse direction)
        if (row2Ref.current) {
          row2Ref.current.scrollLeft -= scrollAmount;
          const { scrollLeft, scrollWidth, clientWidth } = row2Ref.current;
          if (
            direction === "right" &&
            scrollLeft >= scrollWidth - clientWidth
          ) {
            row2Ref.current.scrollLeft = 0;
          } else if (direction === "left" && scrollLeft <= 0) {
            row2Ref.current.scrollLeft = scrollWidth - clientWidth;
          }
        }
      }
    };

    const intervalId = setInterval(animate, speed);
    return () => clearInterval(intervalId);
  }, [direction, speed, isPaused]);

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false);
  };

  const handleLogoError = (key: string) => {
    setFallbacks((prev) => ({ ...prev, [key]: true }));
  };

  const duplicateItems = (items: typeof skillsRow1) => [...items, ...items];
  const row1Items = duplicateItems(skillsRow1);
  const row2Items = duplicateItems(skillsRow2);

  const renderSkill = (
    skill: { name: string; logo: string },
    index: number,
    rowKey: string
  ) => {
    const fallbackKey = `${rowKey}-${skill.name}-${index}`;
    const showFallback = fallbacks[fallbackKey];

    return (
      <div
        key={fallbackKey}
        className="flex flex-col items-center justify-center mx-8 min-w-[100px]"
      >
        <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg p-2 shadow-md flex items-center justify-center">
          {showFallback ? (
            <span className="text-blue-500 dark:text-blue-400 text-lg font-semibold">
              {skill.name.charAt(0)}
            </span>
          ) : (
            <Image
              src={skill.logo}
              alt={skill.name}
              width={500}
              height={500}
              className="object-contain"
              onError={() => handleLogoError(fallbackKey)}
            />
          )}
        </div>
        <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
      </div>
    );
  };

  return (
    <div className="w-full overflow-hidden py-8">
      {/* Row 1 */}
      <div
        ref={row1Ref}
        className={`flex overflow-x-hidden whitespace-nowrap mb-6 ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {row1Items.map((skill, index) => renderSkill(skill, index, "row1"))}
      </div>

      {/* Row 2 */}
      <div
        ref={row2Ref}
        className={`flex overflow-x-hidden whitespace-nowrap ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {row2Items.map((skill, index) => renderSkill(skill, index, "row2"))}
      </div>
    </div>
  );
};

export default SkillsMarquee;
