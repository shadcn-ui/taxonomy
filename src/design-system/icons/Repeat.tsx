import { forwardRef, Ref, SVGProps } from 'react';
function RepeatIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M15 10V7H3v6H1V5h14V2l5 4-5 4Zm-6 9h14v-8h-2v6H9v-3l-5 4 5 4v-3Z'
      />
    </svg>
  );
}
const Icon = forwardRef(RepeatIcon);
export { Icon as RepeatIcon };
