import whitelist from './UserWhitelist';
import whitelistDev from './UserWhitelistDev';

const backendAdrr =
  process.env.BACKEND_ADDR || 'platform.' + window.location.hostname;
const isDev = /dev\./.test(backendAdrr);

export default {
  isDev,
  debug: process.env.NODE_ENV !== 'production',
  deployPath: '/',
  backendAdrr,
  casinoId: 0,
  updateBalanceTimeout: 2000,
  title: 'DAOPlatform',
  casinoName: isDev ? 'ttcasino' : 'sample', // TODO: change
  walletUrl: isDev
    ? 'https://app.test.daowallet.com/'
    : 'https://app.daowallet.com/',
  walletAuthRedirectUrl: document.location.origin,
  casinoUrl: window.location.protocol + '//' + window.location.host + '/',
  useWhitelist: false,
  whitelist: isDev ? whitelistDev : whitelist,
};
