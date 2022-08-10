import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    comment: 'Nice place.',
    date: 'Sun Mar 24 2022 13:13:13 GMT+0300 (Москва, стандартное время)',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'John',
    },
  },
  {
    comment: 'Not bad place.',
    date: 'Tue Mar 29 2022 22:26:12 GMT+0300 (Москва, стандартное время)',
    id: 2,
    rating: 3,
    user: {
      avatarUrl: 'img/avatar-ben.jpg',
      id: 2,
      isPro: true,
      name: 'Paul',
    },
  },

  {
    comment: 'Excelent place.',
    date: 'Tue Feb 21 2022 10:54:34 GMT+0300 (Москва, стандартное время)',
    id: 3,
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: false,
      name: 'George',
    },
  },

  {
    comment: 'Terrible place.',
    date: 'Tue Dec 25 2022 11:26:12 GMT+0300 (Москва, стандартное время)',
    id: 4,
    rating: 1,
    user: {
      avatarUrl: 'img/img_avatar_4.png',
      id: 4,
      isPro: true,
      name: 'Ringo',
    },
  },
];
