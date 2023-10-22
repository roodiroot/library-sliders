import { useSwipeable } from 'react-swipeable';
const SwipeAble = () => {
  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log('User Swiped!', eventData),
  });
  return <div {...handlers}> You can swipe here </div>;
};

export default SwipeAble;
