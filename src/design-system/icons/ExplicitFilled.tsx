import { forwardRef, Ref, SVGProps } from 'react';
function ExplicitFilledIcon(
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
        stroke='currentColor'
        strokeWidth={2}
        d='M7.75 5.75h-1v12.5H17v-4.5h-.5v-3.5h.5v-4.5H7.75ZM3 3h18v18H3V3Z'
      />
    </svg>
  );
}
const Icon = forwardRef(ExplicitFilledIcon);
export { Icon as ExplicitFilledIcon };
