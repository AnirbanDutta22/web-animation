import "./App.css";
import { motion } from "motion/react";

function App() {
  const text = "Animation Day 1 - Text Animation".split(" ");

  return (
    <>
      {text.map((t, index) => {
        const y = (index + 1) * -50 + "px";
        return (
          <motion.h1
            key={index}
            initial={{
              y: y,
              opacity: 0,
            }}
            animate={{
              y: "0px",
              opacity: [0, 0.1, 0.3, 0.5, 0.7, 1],
            }}
            transition={{
              duration: 1.3,
              ease: "backInOut",
            }}
            style={{
              display: "inline-flex",
              marginRight: "20px",
            }}
          >
            {t}
          </motion.h1>
        );
      })}
    </>
  );
}

export default App;
