import { forwardRef, Ref, SVGProps } from 'react';
function MusicNotesIcon(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) {
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
        d='M20 18h-7v-7h5V2h2v16Zm-5-2v-3h3v3h-3ZM7 6v9H2v7h7V6H7ZM4 17v3h3v-3H4Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(MusicNotesIcon);
export { Icon as MusicNotesIcon };
