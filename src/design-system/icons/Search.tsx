import { forwardRef, Ref, SVGProps } from 'react';
function SearchIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M10.5 2a8.5 8.5 0 1 0 5.262 15.176l5.53 5.531 1.415-1.414-5.531-5.531A8.5 8.5 0 0 0 10.5 2ZM4 10.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(SearchIcon);
export { Icon as SearchIcon };
