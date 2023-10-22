import Slider from './components/Slider';
import SwipeAble from './components/Swipeable';

const App = () => {
  return (
    <div className="w-full h-full flex flex-col gap-10">
      <div className="w-full max-w-7xl mx-auto py-8">
        <Slider />
        <div className="py-6">
          <SwipeAble />
        </div>
      </div>
    </div>
  );
};

export default App;
