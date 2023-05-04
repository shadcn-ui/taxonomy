import { forwardRef, Ref, SVGProps } from 'react';
function ClockIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
      <path fill='currentColor' d='M13 5v6h5v2h-7V5h2Z' />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1ZM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(ClockIcon);
export { Icon as ClockIcon };
