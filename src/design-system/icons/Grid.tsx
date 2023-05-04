import { forwardRef, Ref, SVGProps } from 'react';
function GridIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M2 10.5V2h8.5v8.5H2ZM4 4h4.5v4.5H4V4Zm9.5 6.5V2H22v8.5h-8.5Zm2-6.5H20v4.5h-4.5V4ZM2 13.5V22h8.5v-8.5H2Zm6.5 2H4V20h4.5v-4.5Zm5 6.5v-8.5H22V22h-8.5Zm2-6.5H20V20h-4.5v-4.5Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(GridIcon);
export { Icon as GridIcon };
