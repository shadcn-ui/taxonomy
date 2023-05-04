import { forwardRef, Ref, SVGProps } from 'react';
function PersonIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M10 15.464A4 4 0 0 1 8.536 14l-1.732 1a6.001 6.001 0 0 0 10.392 0l-1.732-1A4 4 0 0 1 10 15.464ZM7.25 8.5h3v3h-3v-3Zm9.5 0h-3v3h3v-3Z'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-2 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(PersonIcon);
export { Icon as PersonIcon };
