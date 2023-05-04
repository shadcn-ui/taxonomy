import { forwardRef, Ref, SVGProps } from 'react';
function MinusCircleIcon(
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
      <path fill='currentColor' d='M18.5 11h-13v2h13v-2Z' />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1ZM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(MinusCircleIcon);
export { Icon as MinusCircleIcon };
