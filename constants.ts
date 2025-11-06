import { Plant, Service, GalleryImage } from './types';
import { HomeIcon, BriefcaseIcon, HeartIcon } from './components/icons/ServiceIcons';

export const WHATSAPP_LINK = "https://wa.me/6281380890148";
export const SHOPEE_LINK = "https://shopee.co.id/alasfloris";
export const FACEBOOK_LINK = "https://www.facebook.com/alasfloris/";
export const INSTAGRAM_LINK = "https://www.instagram.com/alas.floris/";
export const MAPS_ADDRESS = "Jl. Kp. Rawa Kalong No.78, Karangsatria, Kec. Tambun Utara, Kabupaten Bekasi, Jawa Barat 17510";
export const MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.308731320603!2d107.05367631476916!3d-6.22295699549556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f7e3461476b%3A0x6b567585387f3292!2sAlas%20Floris!5e0!3m2!1sen!2sid!4v1684231456789!5m2!1sen!2sid";
export const ADMIN_PASSWORD = "alasfloris123";

export const PLANTS_DATA: Plant[] = [
  { id: 1, name: 'Monstera Deliciosa', category: 'indoor', imageUrl: 'https://picsum.photos/seed/monstera/400/400', price: 250000, rentalPrice: 50000 },
  { id: 2, name: 'Sansevieria Trifasciata', category: 'indoor', imageUrl: 'https://picsum.photos/seed/sansevieria/400/400', price: 150000, rentalPrice: 30000 },
  { id: 3, name: 'Fiddle Leaf Fig', category: 'indoor', imageUrl: 'https://picsum.photos/seed/fiddle/400/400', price: 450000, rentalPrice: 90000 },
  { id: 4, name: 'Lavender', category: 'outdoor', imageUrl: 'https://picsum.photos/seed/lavender/400/400', price: 120000, rentalPrice: 25000 },
  { id: 5, name: 'Bonsai Tree', category: 'mini', imageUrl: 'https://picsum.photos/seed/bonsai/400/400', price: 750000, rentalPrice: 150000 },
  { id: 6, name: 'Alocasia "Black Velvet"', category: 'premium', imageUrl: 'https://picsum.photos/seed/alocasia/400/400', price: 600000, rentalPrice: 120000 },
  { id: 7, name: 'Pothos Emas', category: 'indoor', imageUrl: 'https://picsum.photos/seed/pothos/400/400', price: 85000, rentalPrice: 20000 },
  { id: 8, name: 'Aglonema', category: 'indoor', imageUrl: 'https://picsum.photos/seed/aglonema/400/400', price: 180000, rentalPrice: 40000 },
  { id: 9, name: 'Kaktus Mini', category: 'mini', imageUrl: 'https://picsum.photos/seed/cactus/400/400', price: 50000, rentalPrice: 15000 },
  { id: 10, name: 'Anggrek Bulan', category: 'premium', imageUrl: 'https://picsum.photos/seed/orchid/400/400', price: 350000, rentalPrice: 75000 },
  { id: 11, name: 'Mawar Pot', category: 'outdoor', imageUrl: 'https://picsum.photos/seed/rose/400/400', price: 100000, rentalPrice: 20000 },
  { id: 12, name: 'Sukulen Echeveria', category: 'mini', imageUrl: 'https://picsum.photos/seed/succulent/400/400', price: 45000, rentalPrice: 10000 },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'rental',
    title: 'Sewa Tanaman',
    description: 'Solusi hijau untuk kantor, acara, atau hunian Anda tanpa repot perawatan. Kami antar, tata, dan rawat secara berkala.',
    icon: BriefcaseIcon,
  },
  {
    id: 'decoration',
    title: 'Dekorasi & Lanskap',
    description: 'Ciptakan oase impian Anda. Tim kami siap membantu mendesain dan mendekorasi ruang indoor maupun outdoor.',
    icon: HomeIcon,
  },
  {
    id: 'wedding',
    title: 'Paket Pernikahan',
    description: 'Hiasi hari spesial Anda dengan keindahan tanaman hias yang elegan dan segar untuk backdrop, pelaminan, dan lainnya.',
    icon: HeartIcon,
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
    { id: 1, src: "https://picsum.photos/seed/before1/800/600", alt: "Lobi kantor sebelum dekorasi", type: 'before' },
    { id: 2, src: "https://picsum.photos/seed/after1/800/600", alt: "Lobi kantor setelah didekorasi dengan tanaman hias", type: 'after' },
    { id: 3, src: "https://picsum.photos/seed/process1/800/600", alt: "Proses penataan tanaman di kafe", type: 'process' },
    { id: 4, src: "https://picsum.photos/seed/before2/800/600", alt: "Balkon apartemen kosong", type: 'before' },
    { id: 5, src: "https://picsum.photos/seed/after2/800/600", alt: "Balkon apartemen menjadi taman mini yang asri", type: 'after' },
    { id: 6, src: "https://picsum.photos/seed/process2/800/600", alt: "Tim Alas Floris menata tanaman untuk acara pernikahan", type: 'process' },
    { id: 7, src: "https://picsum.photos/seed/after3/800/600", alt: "Sudut ruangan kerja dengan tanaman Monstera", type: 'after' },
    { id: 8, src: "https://picsum.photos/seed/after4/800/600", alt: "Dekorasi panggung dengan berbagai jenis tanaman", type: 'after' },
    { id: 9, src: "https://picsum.photos/seed/process3/800/600", alt: "Perawatan rutin tanaman sewaan di kantor klien", type: 'process' },
];