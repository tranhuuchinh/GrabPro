import { atom } from 'recoil';

export const phoneRecoil = atom({
    key: 'phoneRecoil',
    default: '',
});

export const nameRecoil = atom({
    key: 'nameRecoil',
    default: '',
});

export const ordersRecoil = atom({
    key: 'ordersRecoil',
    default: [],
});

export const locationsRecoil = atom({
    key: 'locationsRecoil',
    default: [],
});

export const fromRecoil = atom({
    key: 'fromRecoil',
    default: '',
});

export const toRecoil = atom({
    key: 'toRecoil',
    default: '',
});
