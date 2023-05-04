import { forwardRef, Ref, SVGProps } from 'react';
function EthereumIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
      <g fill='currentColor' clipPath='url(#ethereum_svg__a)'>
        <path d='M18.905 14.679 12 18.74l-6.905-4.06L12 24l6.905-9.321Z' />
        <path d='m12 0 6.818 11.25L12 15.26l-6.818-4.01L12 0Z' />
      </g>
      <defs>
        <clipPath id='ethereum_svg__a'>
          <path fill='currentColor' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  );
}
const Icon = forwardRef(EthereumIcon);
export { Icon as EthereumIcon };
