import { forwardRef, Ref, SVGProps } from 'react';
function EditIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      fill='none'
      viewBox='0 0 24 24'
      ref={ref}
      {...props}
    >
      <path
        fill='currentColor'
        d='M22.414 7.5 16.5 1.586 15.086 3 21 8.914 22.414 7.5Z'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M18.914 11 13 5.086l-11 11V22h5.914l11-11ZM4 20v-3.086l9-9L16.086 11l-9 9H4Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(EditIcon);
export { Icon as EditIcon };
