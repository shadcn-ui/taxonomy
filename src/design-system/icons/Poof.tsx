import { forwardRef, Ref, SVGProps } from 'react';
function PoofIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M13 1h-2v5h2V1Zm0 17h-2v5h2v-5Zm6.071-14.485 1.414 1.414-3.535 3.535-1.414-1.414 3.535-3.535ZM8.465 16.95 7.05 15.536 3.515 19.07l1.414 1.414 3.536-3.535ZM1 13v-2h5v2H1Zm17-2v2h5v-2h-5ZM3.515 4.929l1.414-1.414L8.464 7.05 7.05 8.464 3.515 4.93ZM16.95 15.536l-1.414 1.414 3.535 3.535 1.414-1.414-3.535-3.536Z'
      />
    </svg>
  );
}
const Icon = forwardRef(PoofIcon);
export { Icon as PoofIcon };
