import { ProductCardProps } from '@/types/entities/movies';

export const PRODUCT_CARD_DATA: ProductCardProps[] = [
  {
    id: '0',
    vertical_poster_url: '/images/card/avatar1.png',
    title: 'Avatar',
    main_genre: { id: '1', name: 'Action' },
    sub_genre: [
      { id: '2', name: 'Adventure' },
      { id: '3', name: 'Sci-fi' },
    ],
    description:
      'Seorang Marinir lumpuh dikirim ke bulan Pandora untuk menjalani misi khusus namun, ia justru dilema antara mengikuti perintah atau melindungi dunia baru yang iya rasakan seperti rumah.',
  },
  {
    id: '1',
    vertical_poster_url: '/images/card/avatar2.png',
    title: 'Avatar The Way of Water',
    main_genre: { id: '1', name: 'Action' },
    sub_genre: [
      { id: '2', name: 'Adventure' },
      { id: '3', name: 'Sci-fi' },
    ],
    description:
      'Set more than a decade after the events of the first film, “Avatar: The Way of Water” begins to tell the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
  },
  {
    id: '2',
    vertical_poster_url: '/images/card/avatarAang.png',
    title: 'Avatar The Last Airbender',
    main_genre: { id: '1', name: 'Action' },
    sub_genre: [
      { id: '2', name: 'Adventure' },
      { id: '3', name: 'Sci-fi' },
    ],
    description:
      "When a boy found frozen in a block of ice is thawed, the world learns he's the Avatar they've been waiting for, and his destiny takes a dizzying turn.",
  },
  {
    id: '3',
    vertical_poster_url: '/images/card/avatarKora.png',
    title: 'Avatar The Legend of Korra',
    main_genre: { id: '1', name: 'Action' },
    sub_genre: [
      { id: '2', name: 'Adventure' },
      { id: '3', name: 'Sci-fi' },
    ],
    description:
      'Avatar Korra, a headstrong, rebellious, feisty young woman who continually challenges and breaks with tradition, is on her quest to become a fully realized Avatar. In this story, the Avatar struggles to find balance within herself.',
  },
];
