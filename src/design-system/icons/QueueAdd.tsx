import { forwardRef, Ref, SVGProps } from 'react';
function QueueAddIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M6 4V1H4v3H1v2h3v3h2V6h3V4H6Zm6.5 3H23V3H12.5v4ZM23 14H1v-2h22v2Zm0 7H1v-2h22v2Z'
      />
    </svg>
  );
}
const Icon = forwardRef(QueueAddIcon);
export { Icon as QueueAddIcon };
