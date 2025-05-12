"use client";
import { motion, Variants } from "framer-motion";
import { FC, useState } from "react";

const variants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto" },
};

export interface ExpandCollapseProps {
  isOpen?: boolean;
  children: React.ReactNode;
}

const ExpandCollapse: FC<ExpandCollapseProps> = (props) => {
  const { isOpen = false, children } = props;
  const [expand, setExpand] = useState<boolean>(isOpen);
  const initial = expand ? "visible" : "hidden";
  const animate = expand ? "visible" : "hidden";
  return (
    <div>
      <div>
        <p className="font-bold text-orange-500 mb-2">
          Click button if you want to {expand ? "collapse" : "expand"} the
          layout of the exercise:
        </p>
        <button
          className="rounded border border-solid border-gray-500 px-4 py-2 text-white hover:bg-blue-400 cursor-pointer bg-blue-500"
          onClick={() => setExpand((prev) => !prev)}
        >
          {expand ? "Collapse" : "Expand"}
        </button>
      </div>
      <motion.div
        variants={variants}
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
        style={{ marginTop: expand ? "1rem" : 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ExpandCollapse;
