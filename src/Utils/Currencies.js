import config from 'Config/AppConfig';

// helpers
const ethFormat = new Intl.NumberFormat(config.numberLocale, {
  maximumFractionDigits: 2,
});

const betFormat = new Intl.NumberFormat(config.numberLocale, {
  minimumFractionDigits: 4,
  maximumFractionDigits: 4,
});

const integer = new Intl.NumberFormat(config.numberLocale, {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const formatEth = (n) => ethFormat.format(n) + ' ETH';
export const formatBet = (n) => betFormat.format(n) + ' BET';
export const formatIntBet = (n) => integer.format(n) + ' BET';
