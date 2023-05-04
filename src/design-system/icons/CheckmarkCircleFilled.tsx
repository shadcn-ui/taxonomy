import { forwardRef, Ref, SVGProps } from 'react';
function CheckmarkCircleFilledIcon(
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
        d='M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm-5.357-9.984 4.604 4.34 6.243-8.093-1.98-1.526-4.557 5.907-2.596-2.447-1.714 1.819Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(CheckmarkCircleFilledIcon);
export { Icon as CheckmarkCircleFilledIcon };
