import React from 'react';
import { Image as Img } from 'theme-ui';

export default function Image({ src, ...rest }) {
  return <Img src={src} {...rest} />;
}
