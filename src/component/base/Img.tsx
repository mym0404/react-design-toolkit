import type { Ref } from 'react';
import React, { forwardRef } from 'react';
import type { ImageProps } from '@chakra-ui/next-js';
import { Image } from '@chakra-ui/next-js';

type ImgProps = Omit<ImageProps, 'w' | 'width' | 'h' | 'height'> & {
  w?: number | `${number}` | undefined;
  h?: number | `${number}` | undefined;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
};

const Img = forwardRef<HTMLImageElement, ImgProps>(
  ({ w, h, width, height, ...rest }: ImgProps, ref: Ref<HTMLImageElement>) => (
    <Image ref={ref} {...rest} width={width ?? w} height={height ?? h} />
  ),
);
export { Img };
export type { ImgProps };
