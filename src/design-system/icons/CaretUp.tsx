import { forwardRef, Ref, SVGProps } from 'react';
function CaretUpIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='m12 8.414-7.293 7.293-1.414-1.414L12 5.586l8.707 8.707-1.414 1.414L12 8.414Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(CaretUpIcon);
export { Icon as CaretUpIcon };
