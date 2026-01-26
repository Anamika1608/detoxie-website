import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';

export const hilmarLight = localFont({
  src: '../../public/fonts/Hilmar-Light.otf',
  variable: '--font-hilmar-light'
});

export const playbusBaysGt = localFont({
  src: '../../public/fonts/PlaybusBaysGt.otf',
  variable: '--font-playbus'
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: '--font-poppins'
});
