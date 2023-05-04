import { forwardRef, Ref, SVGProps } from 'react';
function SparkleIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M14.77 9.23C13.615 8.076 13 6.16 13 3V1h-2v2c0 3.16-.615 5.076-1.77 6.23C8.076 10.385 6.16 11 3 11H1v2h2c3.16 0 5.076.615 6.23 1.77C10.385 15.924 11 17.84 11 21v2h2v-2c0-3.16.615-5.076 1.77-6.23C15.924 13.615 17.84 13 21 13h2v-2h-2c-3.16 0-5.076-.615-6.23-1.77Z'
      />
    </svg>
  );
}
const Icon = forwardRef(SparkleIcon);
export { Icon as SparkleIcon };
