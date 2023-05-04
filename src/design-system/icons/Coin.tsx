import { forwardRef, Ref, SVGProps } from 'react';
function CoinIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M1 9.5c0-2.245 1.4-4.145 3.384-5.435C6.378 2.77 9.074 2 12 2c2.926 0 5.622.77 7.616 2.065C21.601 5.355 23 7.255 23 9.5v5c0 2.245-1.4 4.145-3.384 5.435C17.622 21.23 14.926 22 12 22c-2.926 0-5.622-.77-7.616-2.065C2.399 18.645 1 16.745 1 14.5v-5Zm2 0c0-1.345.84-2.695 2.474-3.758C7.099 4.686 9.404 4 12 4c2.597 0 4.901.686 6.526 1.742C20.161 6.805 21 8.155 21 9.5c0 1.345-.84 2.695-2.474 3.758C16.901 14.314 14.596 15 12 15c-2.597 0-4.901-.686-6.526-1.742C3.839 12.195 3 10.845 3 9.5Zm18 4.34v.66c0 1.345-.84 2.695-2.474 3.758C16.901 19.314 14.596 20 12 20c-2.597 0-4.901-.686-6.526-1.742C3.839 17.195 3 15.845 3 14.5v-.66c.415.401.88.767 1.384 1.095C6.378 16.23 9.074 17 12 17c2.926 0 5.622-.77 7.616-2.065A9.2 9.2 0 0 0 21 13.84Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(CoinIcon);
export { Icon as CoinIcon };
