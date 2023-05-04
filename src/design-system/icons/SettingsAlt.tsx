import { forwardRef, Ref, SVGProps } from 'react';
function SettingsAltIcon(
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
        d='M5.5 20v3h2v-3h3v-8h-3V1h-2v11h-3v8h3Zm-1-2v-4h4v4h-4Zm12 5V12h-3V4h3V1h2v3h3v8h-3v11h-2Zm-1-17v4h4V6h-4Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(SettingsAltIcon);
export { Icon as SettingsAltIcon };
