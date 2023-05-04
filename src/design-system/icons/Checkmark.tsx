import { forwardRef, Ref, SVGProps } from 'react';
function CheckmarkIcon(
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
        d='m10.127 22.163-7.88-9.005 1.506-1.316 6.12 6.995 9.783-15.374 1.688 1.074-11.217 17.627Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(CheckmarkIcon);
export { Icon as CheckmarkIcon };
