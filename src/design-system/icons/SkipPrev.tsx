import { forwardRef, Ref, SVGProps } from 'react';
function SkipPrevIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
      <path fill='currentColor' d='M4 21h2v-7.8L19 21V3L6 10.8V3H4v18Z' />
    </svg>
  );
}
const Icon = forwardRef(SkipPrevIcon);
export { Icon as SkipPrevIcon };
