import { forwardRef, Ref, SVGProps } from 'react';
function CaretUpCircleIcon(
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
        d='M7.707 14.707 12 10.414l4.293 4.293 1.414-1.414L12 7.586l-5.707 5.707 1.414 1.414Z'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1Zm0 2a9 9 0 1 1 0 18 9 9 0 0 1 0-18Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(CaretUpCircleIcon);
export { Icon as CaretUpCircleIcon };
