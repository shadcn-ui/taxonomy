import { forwardRef, Ref, SVGProps } from 'react';
function ProfilePhotoIcon(
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
        d='M12 14.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'
        clipRule='evenodd'
      />
      <path
        fill='currentColor'
        d='M16.69 16.5a6.48 6.48 0 0 1-4.69 2 6.481 6.481 0 0 1-4.69-2h9.38Z'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-2 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(ProfilePhotoIcon);
export { Icon as ProfilePhotoIcon };
