"use client";

import { useState } from "react";
import { X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Your OneDrive Resume Link
  const resumeLink =
    "https://onedrive.live.com/personal/a0432b20eebe2f83/_layouts/15/Doc.aspx?sourcedoc=%7Bc2e3fc30-a04a-4822-9085-e5edaadcfe94%7D&action=default&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3cvYy9hMDQzMmIyMGVlYmUyZjgzL0lRQXdfT1BDU3FBaVNKQ0Y1ZTJxM1A2VUFlQ1hPOURNN25ZUXVtNUFsdXFIaUpFP2U9MXA1RWNq&slrid=5917dda1-8038-a000-e302-7daf7391a7c8&originalPath=aHR0cHM6Ly8xZHJ2Lm1zL3cvYy9hMDQzMmIyMGVlYmUyZjgzL0lRQXdfT1BDU3FBaVNKQ0Y1ZTJxM1A2VUFlQ1hPOURNN25ZUXVtNUFsdXFIaUpFP3J0aW1lPU9PMEpBY1lzM2tn&CID=856aa6ed-9626-4718-93d2-2822b635b0e7&_SRM=0:G:194";

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-yellow-300 border-2 border-black px-5 py-2 rounded-lg font-semibold shadow-[3px_3px_0_#000]
        hover:translate-y-1 hover:shadow-[5px_5px_0_#000] transition-all flex items-center gap-2"
      >
        <Download size={18} /> View Resume
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white border-4 border-black rounded-xl shadow-[5px_5px_0_#000] max-w-4xl w-full mx-4 overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="flex justify-between items-center p-4 border-b-2 border-black bg-yellow-100">
                <h3 className="text-lg font-bold">My Resume</h3>
                <div className="flex gap-3">
                  <a
                    href={resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold border-2 border-black px-2 py-1 rounded hover:bg-yellow-200 flex items-center"
                  >
                    <Download size={16} className="mr-1" />
                    Open in OneDrive
                  </a>
                  <button onClick={() => setIsOpen(false)}>
                    <X size={22} />
                  </button>
                </div>
              </div>

              {/* OneDrive Viewer in iframe */}
              <iframe
                src={resumeLink}
                className="w-full h-[85vh]"
                title="Resume from OneDrive"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
