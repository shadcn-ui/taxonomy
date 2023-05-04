import { forwardRef, Ref, SVGProps } from 'react';
function SendIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M.32 3h23.364L12.639 23.253 9.703 11.134.32 3Zm11.428 8.08 1.614 6.667 6.054-11.099-7.668 4.432ZM18.27 5H5.681l5.036 4.366L18.27 5Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(SendIcon);
export { Icon as SendIcon };
