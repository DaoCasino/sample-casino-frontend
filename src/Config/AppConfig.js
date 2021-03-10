import whitelist from './UserWhitelist';
import whitelistDev from './UserWhitelistDev';

const backendAdrr =
  process.env.BACKEND_ADDR || 'platform.' + window.location.hostname;
const isDev = /dev\./.test(backendAdrr);
const isStage = /stage\./.test(backendAdrr);
const env = isDev ? 'dev' : isStage ? 'stage' : 'prod';

export default {
  numberLocale: 'en-US',
  env,
  isDev,
  isStage,
  debug: process.env.NODE_ENV !== 'production',
  deployPath: '/',
  backendAdrr,
  casinoId: 0,
  updateBalanceTimeout: 2000,
  title: 'DAOPlatform',
  casinoName: 'ttcasino',

  walletUrl: isDev
    ? 'https://app.test.daowallet.com/'
    : 'https://app.daowallet.com/',
  walletPaymentUrl: isDev
    ? 'https://payment.test.daowallet.com'
    : 'https://payment.daowallet.com',
  walletPaymentKey: isDev
    ? 'opQrE4diY00DLEvYs9CVWFgWfoSExj84'
    : 'HHZfdrRz69ioYQvCrkyl3xhkxZXuvpQy',
  walletAuthRedirectUrl: document.location.origin,
  walletPlatformId: '1',
  walletPlatformEnv: env,

  casinoUrl: window.location.protocol + '//' + window.location.host + '/',

  statisticsUrl: `https://stats.${env}.trustbet.io/`,

  useWhitelist: false,
  whitelist: isDev ? whitelistDev : whitelist,
};
