import { forwardRef, Ref, SVGProps } from 'react';
function ShareIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
      <path fill='currentColor' d='M2 2h8v2H4v16h16v-6h2v8H2V2Z' />
      <path
        fill='currentColor'
        d='M20 5.414V10h2V2h-8v2h4.586l-6.293 6.293 1.414 1.414L20 5.414Z'
      />
    </svg>
  );
}
const Icon = forwardRef(ShareIcon);
export { Icon as ShareIcon };
