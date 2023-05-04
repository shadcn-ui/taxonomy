import { forwardRef, Ref, SVGProps } from 'react';
function CloseCircleIcon(
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
        d='M15.89 6.697 12 10.586l-3.89-3.89-1.413 1.415L10.586 12l-3.89 3.89 1.415 1.413L12 13.414l3.89 3.89 1.413-1.415L13.414 12l3.89-3.89-1.415-1.413Z'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1ZM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(CloseCircleIcon);
export { Icon as CloseCircleIcon };
