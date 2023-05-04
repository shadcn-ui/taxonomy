import { forwardRef, Ref, SVGProps } from 'react';
function ListIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M4 4.5H1v3h3v-3ZM6.5 7H23V5H6.5v2ZM1 10.5h3v3H1v-3ZM6.5 13H23v-2H6.5v2ZM1 16.5h3v3H1v-3ZM6.5 19H23v-2H6.5v2Z'
      />
    </svg>
  );
}
const Icon = forwardRef(ListIcon);
export { Icon as ListIcon };
