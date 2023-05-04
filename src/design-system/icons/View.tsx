import { forwardRef, Ref, SVGProps } from 'react';
function ViewIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      fill='none'
      viewBox='0 0 24 24'
      ref={ref}
      {...props}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
        clipRule='evenodd'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M24 12C18.947 0 5.053 0 0 12c5.053 12 18.947 12 24 0Zm-12 7c-3.631 0-7.494-2.176-9.808-7C4.506 7.176 8.37 5 12 5c3.631 0 7.494 2.176 9.808 7-2.314 4.824-6.177 7-9.808 7Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(ViewIcon);
export { Icon as ViewIcon };
