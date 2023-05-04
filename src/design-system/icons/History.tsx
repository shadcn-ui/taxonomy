import { forwardRef, Ref, SVGProps } from 'react';
function HistoryIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
      <g fill='currentColor' clipPath='url(#history_svg__a)'>
        <path d='M12 3a9 9 0 0 0-9 9v.586l2.293-2.293 1.414 1.414L2 16.414l-4.707-4.707 1.414-1.414L1 12.586V12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11a10.969 10.969 0 0 1-7.777-3.22l1.414-1.415A8.969 8.969 0 0 0 12 21a9 9 0 1 0 0-18Z' />
        <path d='M13 5v6h4v2h-6V5h2Z' />
      </g>
      <defs>
        <clipPath id='history_svg__a'>
          <path fill='currentColor' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  );
}
const Icon = forwardRef(HistoryIcon);
export { Icon as HistoryIcon };
