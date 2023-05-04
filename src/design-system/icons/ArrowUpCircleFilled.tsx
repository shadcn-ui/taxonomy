import { forwardRef, Ref, SVGProps } from 'react';
function ArrowUpCircleFilledIcon(
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
        d='m8.591 13.591 1.159-1.159V19h4.5v-6.568l1.159 1.159.707.707.707-.707 1.768-1.768.707-.707-.707-.707-5.884-5.884L12 3.818l-.707.707-5.884 5.884-.707.707.707.707 1.768 1.768.707.707.707-.707ZM12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z'
      />
    </svg>
  );
}
const Icon = forwardRef(ArrowUpCircleFilledIcon);
export { Icon as ArrowUpCircleFilledIcon };
