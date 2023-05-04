import { forwardRef, Ref, SVGProps } from 'react';
function SortIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M10.707 7.293 6 2.586 1.293 7.293l1.414 1.414L5 6.414V21h2V6.414l2.293 2.293 1.414-1.414Zm2.586 9.414L18 21.414l4.707-4.707-1.414-1.414L19 17.586V3h-2v14.586l-2.293-2.293-1.414 1.414Z'
      />
    </svg>
  );
}
const Icon = forwardRef(SortIcon);
export { Icon as SortIcon };
