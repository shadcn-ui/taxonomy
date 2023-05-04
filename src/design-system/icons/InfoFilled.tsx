import { forwardRef, Ref, SVGProps } from 'react';
function InfoFilledIcon(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) {
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
        d='M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-9.5-6v3h-3V6h3Zm-2.75 7.75H9.5v-2.5h3.75v5h1.25v2.5h-3.75v-5Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(InfoFilledIcon);
export { Icon as InfoFilledIcon };
