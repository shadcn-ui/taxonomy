import { forwardRef, Ref, SVGProps } from 'react';
function ArrowRightIcon(
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
        d='m18.586 11-6.293-6.293 1.414-1.414L22.414 12l-8.707 8.707-1.414-1.414L18.586 13H1v-2h17.586Z'
      />
    </svg>
  );
}
const Icon = forwardRef(ArrowRightIcon);
export { Icon as ArrowRightIcon };
