import { forwardRef, Ref, SVGProps } from 'react';
function SparkleCircleIcon(
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
        d='M11 5.5h2v1.182c0 1.831.36 2.826.926 3.392.566.566 1.56.925 3.388.926H18.5v2h-1.186c-1.829 0-2.822.36-3.388.926-.566.566-.926 1.56-.926 3.392V18.5h-2v-1.182c0-1.831-.36-2.826-.926-3.392C9.508 13.36 8.514 13 6.682 13H5.5v-2h1.182c1.831 0 2.826-.36 3.392-.926.566-.566.926-1.56.926-3.392V5.5Z'
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
const Icon = forwardRef(SparkleCircleIcon);
export { Icon as SparkleCircleIcon };
