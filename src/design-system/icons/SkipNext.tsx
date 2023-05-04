import { forwardRef, Ref, SVGProps } from 'react';
function SkipNextIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
      <path fill='currentColor' d='M18 10.8 5 3v18l13-7.8V21h2V3h-2v7.8Z' />
    </svg>
  );
}
const Icon = forwardRef(SkipNextIcon);
export { Icon as SkipNextIcon };
