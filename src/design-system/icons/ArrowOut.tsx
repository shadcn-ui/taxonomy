import { forwardRef, Ref, SVGProps } from 'react';
function ArrowOutIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M15.95 6.636h-8.9v-2h12.314V16.95h-2v-8.9L4.929 20.485l-1.414-1.414L15.95 6.636Z'
      />
    </svg>
  );
}
const Icon = forwardRef(ArrowOutIcon);
export { Icon as ArrowOutIcon };
