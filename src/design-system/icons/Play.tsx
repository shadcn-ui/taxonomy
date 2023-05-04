import { forwardRef, Ref, SVGProps } from 'react';
function PlayIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      fill='currentColor'
      viewBox='0 0 24 24'
      ref={ref}
      {...props}
    >
      <path fill='currentColor' d='M5 22V2l17 10L5 22Z' />
    </svg>
  );
}
const Icon = forwardRef(PlayIcon);
export { Icon as PlayIcon };
