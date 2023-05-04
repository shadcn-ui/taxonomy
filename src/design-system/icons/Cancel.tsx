import { forwardRef, Ref, SVGProps } from 'react';
function CancelIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1Zm9 11A9 9 0 0 0 6.382 4.968l12.65 12.65A8.962 8.962 0 0 0 21 12Zm-3.382 7.032a9 9 0 0 1-12.65-12.65l12.65 12.65Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(CancelIcon);
export { Icon as CancelIcon };
