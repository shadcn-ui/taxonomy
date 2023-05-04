import { forwardRef, Ref, SVGProps } from 'react';
function CloseIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M10.586 12 3.293 4.707l1.414-1.414L12 10.586l7.293-7.293 1.414 1.414L13.414 12l7.293 7.293-1.414 1.414L12 13.414l-7.293 7.293-1.414-1.414L10.586 12Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(CloseIcon);
export { Icon as CloseIcon };
