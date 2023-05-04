import { forwardRef, Ref, SVGProps } from 'react';
function ArrowLeftIcon(
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
        d='m4.828 11 6.293-6.293-1.414-1.414L1 12l8.707 8.707 1.414-1.414L4.828 13h17.586v-2H4.828Z'
      />
    </svg>
  );
}
const Icon = forwardRef(ArrowLeftIcon);
export { Icon as ArrowLeftIcon };
