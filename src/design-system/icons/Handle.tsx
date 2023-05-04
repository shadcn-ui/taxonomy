import { forwardRef, Ref, SVGProps } from 'react';
function HandleIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M23 7H1V5h22v2Zm0 6H1v-2h22v2ZM1 19h22v-2H1v2Z'
      />
    </svg>
  );
}
const Icon = forwardRef(HandleIcon);
export { Icon as HandleIcon };
