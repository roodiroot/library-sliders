import { useRef } from 'react';
import Headline from './components/Headline';
import Slider from './components/Slider';
import SliderRabbit from './components/Slider-rabbit';

const array = new Array(10).fill('');

const App = () => {
  const helloWorld = useRef<null | HTMLDivElement>(null);
  const hendleClick = () => {
    if (helloWorld?.current) {
      helloWorld?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-10">
      <button
        onClick={hendleClick}
        className="px-4 py-2 bg-indigo-500 rounded-lg inline-block text-white shadow-md max-w-[280px] mx-auto">
        Click here to scroll
      </button>
      <div className="bg-rose-200">
        <div className="w-full max-w-7xl mx-auto py-8 space-y-40">
          <Slider list={array} />
        </div>
        <SliderRabbit list={array} />
        <div className="min-h-[10rem]"></div>
      </div>
      <Headline ref={helloWorld} text="hello world" />
      <div className="min-h-[1000px] bg-green-300">H</div>
    </div>
  );
};

export default App;
