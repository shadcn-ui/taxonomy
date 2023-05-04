import { forwardRef, Ref, SVGProps } from 'react';
function InfoIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M13.5 9h-3V6h3v3Zm-4 4.5H11v5h3.5v-2H13v-5H9.5v2Z'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-11 9a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(InfoIcon);
export { Icon as InfoIcon };
