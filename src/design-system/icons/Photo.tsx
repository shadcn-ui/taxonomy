import { forwardRef, Ref, SVGProps } from 'react';
function PhotoIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
      <path fill='currentColor' d='M6 8h3v3H6V8Z' />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M1 3v18h22V3H1Zm20 2H3v14h1.586L16 7.586l5 5V5Zm0 10.414-5-5L7.414 19H21v-3.586Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(PhotoIcon);
export { Icon as PhotoIcon };
