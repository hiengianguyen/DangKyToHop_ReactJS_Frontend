import style from "./BtnSrcollTop.module.scss";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const cx = classNames.bind(style);

function BtnSrcollTop() {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.pageYOffset > 600);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);

    return () => {
      window.removeEventListener("scroll", handleVisibleButton);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showGoTop && (
          <motion.div
            key="box"
            initial={{ opacity: 0, transform: "translateY(10px)" }}
            animate={{ opacity: 1, transform: "translateY(0)" }}
            exit={{ opacity: 0, transform: "translateY(10px)" }}
            transition={{ duration: 0.5 }}
          >
            <div className={cx("wrapper", "shadow")} onClick={handleScrollUp} title="Trượt lên">
              <FontAwesomeIcon icon={faArrowUp} className="" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default BtnSrcollTop;
