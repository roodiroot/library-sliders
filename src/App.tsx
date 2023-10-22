import Slider from './components/Slider';
import SliderRabbit from './components/Slider-rabbit';

const array = new Array(10).fill('');

const App = () => {
  return (
    <div className="w-full h-full flex flex-col gap-10">
      <div className="w-full max-w-7xl mx-auto py-8 space-y-40">
        <Slider list={array} />
      </div>
      <SliderRabbit list={array} />
      <div className="min-h-[10rem]"></div>
    </div>
  );
};

export default App;
