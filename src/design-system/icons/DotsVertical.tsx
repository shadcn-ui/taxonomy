import { forwardRef, Ref, SVGProps } from 'react';
function DotsVerticalIcon(
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
        d='M10.25 23v-3.5h3.5V23h-3.5Zm0-9.25v-3.5h3.5v3.5h-3.5Zm0-12.75v3.5h3.5V1h-3.5Z'
      />
    </svg>
  );
}
const Icon = forwardRef(DotsVerticalIcon);
export { Icon as DotsVerticalIcon };
