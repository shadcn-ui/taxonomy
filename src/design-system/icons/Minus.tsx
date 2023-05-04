import { forwardRef, Ref, SVGProps } from 'react';
function MinusIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M1 11h22v2H1v-2Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(MinusIcon);
export { Icon as MinusIcon };
