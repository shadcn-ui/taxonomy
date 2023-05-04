import { forwardRef, Ref, SVGProps } from 'react';
function PhotoRemoveIcon(
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
        d='m2.293 3.707 18 18 1.414-1.414-18-18-1.414 1.414ZM23 3v14.343l-8.38-8.379L16 7.586l5 5V5H10.657l-2-2H23ZM3 19V8.657l-2-2V21h14.343l-2-2H7.414l2.965-2.965-1.415-1.414L4.586 19H3Z'
      />
    </svg>
  );
}
const Icon = forwardRef(PhotoRemoveIcon);
export { Icon as PhotoRemoveIcon };
