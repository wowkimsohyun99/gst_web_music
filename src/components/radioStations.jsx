import React from "react";
import { motion } from "framer-motion";
import triangle from "../images/playBtn.png";

const RadioStations = ({
  Ambient,
  Anime,
  Astral,
  Krewella,
  Spinnin,
  Ivy,
  High,
  Lofi,
  Study,
  Proximity,
  Jazz,
  Lck,
  Tomorrowland,
  SoothingRelaxation,
  DooPiano
}) => {
  return (
    <div className="radioList">
      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Ambient}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Ambient Renders
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.15 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Anime}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Anime Vibe
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.25 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Astral}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Astral Throb
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.35 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Krewella}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Krewella
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.45 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Proximity}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
            Proximity
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.65 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Ivy}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Ivy Records
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.75 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={High}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          H5G1 Music
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.85 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Lofi}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          <span> Lofi Girl </span>
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.85 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Lck}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          <span> LCK Official </span>
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.95 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Spinnin}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Spinnin Records
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 1.05 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Study}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          StudyMD
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 1.15 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Jazz}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
            The Jazz Hop Café
        </motion.div>
      </motion.div>

        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 1.15 }}>
            <motion.div
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.9 }}
                onClick={Tomorrowland}
                className="station"
            >
                <img className="triangle" src={triangle} alt="" />
                Tomorrowland
            </motion.div>
        </motion.div>

        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 1.15 }}>
            <motion.div
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.9 }}
                onClick={SoothingRelaxation}
                className="station"
            >
                <img className="triangle" src={triangle} alt="" />
                Soothing Relaxation
            </motion.div>
        </motion.div>

        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 1.15 }}>
            <motion.div
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.9 }}
                onClick={DooPiano}
                className="station"
            >
                <img className="triangle" src={triangle} alt="" />
                DooPiano
            </motion.div>
        </motion.div>
    </div>
  );
};

export default RadioStations;
