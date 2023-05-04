import { forwardRef, Ref, SVGProps } from 'react';
function CaretDownIcon(
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
        d='m12 15.586 7.293-7.293 1.414 1.414L12 18.414 3.293 9.707l1.414-1.414L12 15.586Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(CaretDownIcon);
export { Icon as CaretDownIcon };
