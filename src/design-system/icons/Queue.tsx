import { forwardRef, Ref, SVGProps } from 'react';
function QueueIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M1 7h22V3H1v4Zm22 7H1v-2h22v2Zm0 7H1v-2h22v2Z'
      />
    </svg>
  );
}
const Icon = forwardRef(QueueIcon);
export { Icon as QueueIcon };
