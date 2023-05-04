import { forwardRef, Ref, SVGProps } from 'react';
function TrashIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
      <path fill='currentColor' d='M9 3h6V1H9v2Z' />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M3 6h18v2h-2v14H5V8H3V6Zm4 2h10v12H7V8Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(TrashIcon);
export { Icon as TrashIcon };
