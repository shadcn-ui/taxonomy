import { forwardRef, Ref, SVGProps } from 'react';
function CaretLeftCircleIcon(
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
        d='M14.707 16.293 10.414 12l4.293-4.293-1.414-1.414L7.586 12l5.707 5.707 1.414-1.414Z'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm2 0a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(CaretLeftCircleIcon);
export { Icon as CaretLeftCircleIcon };
