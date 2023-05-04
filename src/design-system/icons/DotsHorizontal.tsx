import { forwardRef, Ref, SVGProps } from 'react';
function DotsHorizontalIcon(
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
        d='M1 10.25h3.5v3.5H1v-3.5Zm9.25 0h3.5v3.5h-3.5v-3.5Zm12.75 0h-3.5v3.5H23v-3.5Z'
      />
    </svg>
  );
}
const Icon = forwardRef(DotsHorizontalIcon);
export { Icon as DotsHorizontalIcon };
