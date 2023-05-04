import { forwardRef, Ref, SVGProps } from 'react';
function MintIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M13 3c0 3.16.615 5.076 1.77 6.23C15.924 10.385 17.84 11 21 11h2v2h-2c-3.16 0-5.076.615-6.23 1.77C13.615 15.924 13 17.84 13 21v2h-2v-2c0-3.16-.615-5.076-1.77-6.23C8.076 13.615 6.16 13 3 13H1v-2h2c3.16 0 5.076-.615 6.23-1.77C10.385 8.076 11 6.16 11 3V1h2v2Z'
      />
      <path
        fill='currentColor'
        d='M4.929 3.515 3.515 4.929l2.828 2.828 1.414-1.414L4.93 3.515Zm12.728 12.728-1.414 1.414 2.828 2.828 1.414-1.414-2.828-2.828Zm1.414-12.728 1.414 1.414-2.828 2.828-1.414-1.414 2.828-2.828ZM7.757 17.657l-1.414-1.414-2.828 2.828 1.414 1.414 2.828-2.828Z'
      />
    </svg>
  );
}
const Icon = forwardRef(MintIcon);
export { Icon as MintIcon };
