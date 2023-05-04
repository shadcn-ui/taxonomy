import { forwardRef, Ref, SVGProps } from 'react';
function PlusIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M11 11V1h2v10h10v2H13v10h-2V13H1v-2h10Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(PlusIcon);
export { Icon as PlusIcon };
