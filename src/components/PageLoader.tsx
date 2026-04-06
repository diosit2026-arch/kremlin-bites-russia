import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo.png";

const PageLoader = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-kremlin-dark-gradient"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeOut" } }}
        >
          <div className="relative flex flex-col items-center gap-5">
            <motion.div
              className="absolute inset-0 rounded-full blur-3xl bg-kremlin-gold/20"
              animate={{ scale: [0.9, 1.15, 0.95], opacity: [0.35, 0.6, 0.4] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src={logo}
              alt="Kremlin Bites"
              className="relative w-28 sm:w-32"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            <motion.div
              className="relative h-[2px] w-28 overflow-hidden rounded-full bg-kremlin-gold/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              <motion.div
                className="absolute inset-y-0 left-0 w-1/2 bg-kremlin-gold"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <motion.p
              className="relative text-xs sm:text-sm uppercase tracking-[0.35em] text-kremlin-gold-light"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Preparing Kremlin Bites
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
