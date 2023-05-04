import { forwardRef, Ref, SVGProps } from 'react';
function SpeakerLowIcon(
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
        d='M15 1.865 7.638 8H2v8h5.638L15 22.135V1.865Zm-2 4.27v11.73L8.362 14H4v-4h4.362L13 6.135Z'
        clipRule='evenodd'
      />
      <path
        fill='currentColor'
        d='M17.663 7.886a7 7 0 0 1 0 8.229l1.618 1.175a9 9 0 0 0 0-10.58l-1.618 1.176Z'
      />
    </svg>
  );
}
const Icon = forwardRef(SpeakerLowIcon);
export { Icon as SpeakerLowIcon };
