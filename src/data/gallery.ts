import type { ImageMetadata } from 'astro';

import img1 from '../assets/images/carpinteria/1.jpeg';
import img2 from '../assets/images/carpinteria/2.jpeg';
import img3 from '../assets/images/carpinteria/3.jpeg';
import img4 from '../assets/images/carpinteria/4.jpeg';
import img5 from '../assets/images/carpinteria/5.jpeg';
import img6 from '../assets/images/carpinteria/6.jpeg';
import img7 from '../assets/images/carpinteria/7.jpeg';
import img8 from '../assets/images/carpinteria/8.jpeg';
import img9 from '../assets/images/carpinteria/9.jpeg';
import img10 from '../assets/images/carpinteria/10.jpeg';
import img11 from '../assets/images/carpinteria/11.jpeg';
import img12 from '../assets/images/carpinteria/12.jpeg';
import img13 from '../assets/images/carpinteria/13.jpeg';
import img14 from '../assets/images/carpinteria/14.jpeg';
import img15 from '../assets/images/carpinteria/15.jpeg';
import img16 from '../assets/images/carpinteria/16.jpeg';
import img17 from '../assets/images/carpinteria/17.jpeg';
import img18 from '../assets/images/carpinteria/18.jpeg';
import img19 from '../assets/images/carpinteria/19.jpeg';
import img20 from '../assets/images/carpinteria/20.jpeg';
import img21 from '../assets/images/carpinteria/21.jpeg';
import img22 from '../assets/images/carpinteria/22.jpeg';
import img23 from '../assets/images/carpinteria/23.jpeg';
import img24 from '../assets/images/carpinteria/24.jpeg';
import img25 from '../assets/images/carpinteria/25.jpeg';
import img26 from '../assets/images/carpinteria/26.jpeg';
import img27 from '../assets/images/carpinteria/27.jpeg';
import img28 from '../assets/images/carpinteria/28.jpeg';
import img29 from '../assets/images/carpinteria/29.jpeg';
import img30 from '../assets/images/carpinteria/30.jpeg';
import img31 from '../assets/images/carpinteria/31.jpeg';
import img32 from '../assets/images/carpinteria/32.jpeg';

export interface GalleryItem {
  src: ImageMetadata;
  altKey: string;
  categoryKey: string;
}

export const GALLERY_DATA: GalleryItem[] = [
  { src: img1, altKey: 'gallery.item1.alt', categoryKey: 'gallery.cat.muebles' },
  { src: img2, altKey: 'gallery.item2.alt', categoryKey: 'gallery.cat.muebles' },
  { src: img3, altKey: 'gallery.item3.alt', categoryKey: 'gallery.cat.muebles' },
  { src: img4, altKey: 'gallery.item4.alt', categoryKey: 'gallery.cat.restauracion' },
  { src: img5, altKey: 'gallery.item5.alt', categoryKey: 'gallery.cat.muebles' },
  { src: img6, altKey: 'gallery.item6.alt', categoryKey: 'gallery.cat.instalaciones' },
  { src: img7, altKey: 'gallery.item7.alt', categoryKey: 'gallery.cat.muebles' },
  { src: img8, altKey: 'gallery.item8.alt', categoryKey: 'gallery.cat.restauracion' },
  { src: img9, altKey: 'gallery.item9.alt', categoryKey: 'gallery.cat.instalaciones' },
  { src: img10, altKey: 'gallery.item10.alt', categoryKey: 'gallery.cat.muebles' },
  { src: img11, altKey: 'gallery.item11.alt', categoryKey: 'gallery.cat.muebles' },
  { src: img12, altKey: 'gallery.item12.alt', categoryKey: 'gallery.cat.restauracion' },
  { src: img13, altKey: 'gallery.item13.alt', categoryKey: 'gallery.cat.instalaciones' },
  { src: img14, altKey: 'gallery.item14.alt', categoryKey: 'gallery.cat.muebles' },
  { src: img15, altKey: 'gallery.item15.alt', categoryKey: 'gallery.cat.muebles' },
  { src: img16, altKey: '', categoryKey: 'gallery.cat.muebles' },
  { src: img17, altKey: '', categoryKey: 'gallery.cat.muebles' },
  { src: img18, altKey: '', categoryKey: 'gallery.cat.muebles' },
  { src: img19, altKey: '', categoryKey: 'gallery.cat.muebles' },
  { src: img20, altKey: '', categoryKey: 'gallery.cat.muebles' },
  { src: img21, altKey: '', categoryKey: 'gallery.cat.muebles' },
  { src: img22, altKey: '', categoryKey: 'gallery.cat.muebles' },
  { src: img23, altKey: '', categoryKey: 'gallery.cat.muebles' },
  { src: img24, altKey: '', categoryKey: 'gallery.cat.muebles' },
  { src: img25, altKey: '', categoryKey: 'gallery.cat.muebles' },
  { src: img26, altKey: '', categoryKey: 'gallery.cat.muebles' },
  { src: img27, altKey: '', categoryKey: 'gallery.cat.muebles' },
  { src: img28, altKey: '', categoryKey: 'gallery.cat.muebles' },
  { src: img29, altKey: '', categoryKey: 'gallery.cat.muebles' },
  { src: img30, altKey: '', categoryKey: 'gallery.cat.muebles' },
  { src: img31, altKey: '', categoryKey: 'gallery.cat.muebles' },
  { src: img32, altKey: '', categoryKey: 'gallery.cat.muebles' },
];
