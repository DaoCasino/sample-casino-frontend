// Dice (Most popular), S7D (New), Blackjack (hot), Roulette, Baccarat, 3cb
const sort = [
  'dice',
  'superseven',
  'blackjack',
  'roulette',
  'baccarat',
  '3cb',
  'highcard',
  'chests',
];
export const sortIndex = (() => {
  let result = {};
  for (let i = 0; i < sort.length; i++) {
    result[sort[i]] = i;
  }
  return result;
})();

export const labels = {
  dice: 'popular',
  superseven: 'new',
  blackjack: 'hot',
};
