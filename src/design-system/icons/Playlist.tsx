import { forwardRef, Ref, SVGProps } from 'react';
function PlaylistIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M13 .656v22.688l-12-3.6V4.256l12-3.6ZM3 5.744v12.512l8 2.4V3.344l-8 2.4ZM21 19V5h2v14h-2Zm-5 2V3h2v18h-2Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(PlaylistIcon);
export { Icon as PlaylistIcon };
