import { forwardRef, Ref, SVGProps } from 'react';
function SpinnerIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M12.141 3.001A9 9 0 0 0 7.178 19.6l-1.072 1.689A11 11 0 1 1 23 12h-2a9 9 0 0 0-8.859-8.999Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(SpinnerIcon);
export { Icon as SpinnerIcon };
