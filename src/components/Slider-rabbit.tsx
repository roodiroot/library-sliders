import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const SliderRabbit: React.FC<{ list: any[] }> = ({ list }) => {
  const [width, setWidth] = useState(0);
  const carusel = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (carusel.current) setWidth(carusel.current.scrollWidth - carusel.current.offsetWidth);
  }, []);
  return (
    <div className="w-full h-auto">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-lg mb-4">Slider Rabbit</h2>
      </div>
      <motion.div ref={carusel} whileTap={{ cursor: 'grabbing' }} className="w-full cursor-grab">
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="flex">
          {list.map((e, index) => (
            <motion.div key={index} className="min-w-[250px] aspect-[2/3] p-4">
              <div className="w-full h-full bg-slate-200 shadow-lg rounded-3xl pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SliderRabbit;
