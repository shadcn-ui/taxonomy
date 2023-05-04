import { forwardRef, Ref, SVGProps } from 'react';
function MysticRuneIcon(
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
        d='M10.5 3.364V2h-2v1.364c0 2.126-.417 3.326-1.113 4.023C6.69 8.083 5.49 8.5 3.364 8.5H2v2h1.364c2.305 0 4.173-.436 5.437-1.7C10.064 7.538 10.5 5.67 10.5 3.365ZM20.636 10.5H22v-2h-1.364c-2.126 0-3.326-.417-4.023-1.113C15.916 6.69 15.5 5.49 15.5 3.364V2h-2v1.364c0 2.305.436 4.173 1.7 5.437 1.262 1.263 3.131 1.699 5.436 1.699ZM13.5 22v-1.364c0-2.305.436-4.174 1.7-5.437 1.262-1.263 3.131-1.699 5.436-1.699H22v2h-1.364c-2.126 0-3.326.416-4.023 1.113-.697.697-1.113 1.897-1.113 4.023V22h-2ZM3.364 13.5H2v2h1.364c2.126 0 3.326.416 4.023 1.113.696.697 1.113 1.897 1.113 4.023V22h2v-1.364c0-2.305-.436-4.174-1.7-5.437C7.538 13.936 5.67 13.5 3.365 13.5Z'
      />
      <path
        fill='currentColor'
        d='M20 4h-2.5V2H22v4.5h-2V4ZM6.5 20H4v-2.5H2V22h4.5v-2ZM4 4v2.5H2V2h4.5v2H4Zm16 13.5V20h-2.5v2H22v-4.5h-2Z'
      />
    </svg>
  );
}
const Icon = forwardRef(MysticRuneIcon);
export { Icon as MysticRuneIcon };
