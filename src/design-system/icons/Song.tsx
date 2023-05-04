import { forwardRef, Ref, SVGProps } from 'react';
function SongIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M9 1h2v22H9V1ZM7 5H5v14h2V5Zm-4 5H1v4h2v-4Zm12-3h-2v10h2V7Zm2-3h2v16h-2V4Zm6 5h-2v6h2V9Z'
      />
    </svg>
  );
}
const Icon = forwardRef(SongIcon);
export { Icon as SongIcon };
