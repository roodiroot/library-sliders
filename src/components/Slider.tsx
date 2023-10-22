import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

const Slider: React.FC<{ list: any[] }> = ({ list }) => {
  const [position, setPosition] = useState(0);
  const handlers = useSwipeable({
    onSwiped: ({ dir }) => {
      if (dir === 'Left') {
        if (position < list.length - 1) {
          setPosition(position + 1);
        }
      }
      if (dir === 'Right') {
        if (position > 0) {
          setPosition(position - 1);
        }
      }
    },
  });
  const onRight = () => {
    if (position < list.length - 1) {
      setPosition(position + 1);
    }
  };
  const onLeft = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };
  return (
    <div>
      <h2 className="text-lg mb-4">Slider 1</h2>
      <div
        {...handlers}
        className="relative w-full h-[390px] flex justify-center items-center overflow-hidden">
        <div className="flex gap-4 absolute z-40 left-0">
          <span
            onClick={onLeft}
            className="px-4 py-2 bg-rose-500 rounded-lg inline-block text-white shadow-md cursor-pointer">
            Left
          </span>
          <span
            onClick={onRight}
            className="px-4 py-2 bg-rose-500 rounded-lg inline-block text-white shadow-md cursor-pointer">
            Right
          </span>
        </div>
        <div className="relative w-full h-full">
          {list.map((i, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, translateY: '-50%' }}
              animate={{
                scale: index === position ? 1 : 0.9,
                translateX: `${(index - position) * 100}%`,
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="absolute top-1/2 w-[250px] aspect-[2/3] rounded-3xl bg-slate-100 shadow-sm"></motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
