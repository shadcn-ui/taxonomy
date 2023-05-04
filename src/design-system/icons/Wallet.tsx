import { forwardRef, Ref, SVGProps } from 'react';
function WalletIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
      <path fill='currentColor' d='M2 4h17V2H2v2Zm12 9h3v3h-3v-3Z' />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M2 7h20v15H2V7Zm2 2v11h16V9H4Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(WalletIcon);
export { Icon as WalletIcon };
