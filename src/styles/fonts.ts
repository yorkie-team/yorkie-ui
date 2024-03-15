import { Noto_Sans_JP } from 'next/font/google';
import { cx } from '@/styled/css';

export const NotoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-noto-sans',
});
export const fontClassName = cx(NotoSans.className);
