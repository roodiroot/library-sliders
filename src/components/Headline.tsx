import { forwardRef } from 'react';

const Headline: React.ForwardRefRenderFunction<HTMLHeadingElement, { text: string }> = (
  { text },
  ref,
) => {
  return (
    <h2 ref={ref} className="text-lg font-bold text-center">
      {text}
    </h2>
  );
};

export default forwardRef(Headline);
