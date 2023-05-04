import { forwardRef, Ref, SVGProps } from 'react';
function ProfilePhotoDeleteIcon(
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
        d='m14.874 20.531 1.545 1.545A10.962 10.962 0 0 1 12 23C5.925 23 1 18.075 1 12c0-1.572.33-3.067.924-4.42l1.545 1.546a9 9 0 0 0 11.406 11.406ZM12 1c-1.572 0-3.067.33-4.42.924l1.546 1.545a9 9 0 0 1 11.406 11.406l1.544 1.544A10.96 10.96 0 0 0 23 12c0-6.075-4.925-11-11-11Z'
      />
      <path
        fill='currentColor'
        d='m11.224 5.567 5.21 5.21a4.5 4.5 0 0 0-5.21-5.21ZM7.31 16.5h3.533l1.952 1.952A6.481 6.481 0 0 1 7.31 16.5ZM2.293 3.707l18 18 1.414-1.414-18-18-1.414 1.414Z'
      />
    </svg>
  );
}
const Icon = forwardRef(ProfilePhotoDeleteIcon);
export { Icon as ProfilePhotoDeleteIcon };
