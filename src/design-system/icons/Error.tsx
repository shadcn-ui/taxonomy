import { forwardRef, Ref, SVGProps } from 'react';
function ErrorIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M13.5 15v3h-3v-3h3Zm-.5-2.5.5-7h-3l.5 7h2Z'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(ErrorIcon);
export { Icon as ErrorIcon };
