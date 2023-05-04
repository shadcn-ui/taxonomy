import { forwardRef, Ref, SVGProps } from 'react';
function CaretRightIcon(
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
        d='M15.586 12 8.293 4.707l1.414-1.414L18.414 12l-8.707 8.707-1.414-1.414L15.586 12Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(CaretRightIcon);
export { Icon as CaretRightIcon };
