import { atom } from 'recoil';

export const counterAtom = atom({
  key: 'counterAtom', // unique ID for the atom
  default: 0, // initial state
});
