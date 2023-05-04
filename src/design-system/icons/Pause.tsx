import { forwardRef, Ref, SVGProps } from 'react';
function PauseIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
      <path fill='currentColor' d='M5 3h5v18H5zm9 0h5v18h-5z' />
    </svg>
  );
}
const Icon = forwardRef(PauseIcon);
export { Icon as PauseIcon };
