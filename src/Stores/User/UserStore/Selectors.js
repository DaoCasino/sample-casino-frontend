import config from 'Config/AppConfig';
import { createSelector } from 'reselect';

export const getUser = (state) => state.user;
export const getUserIsLogged = (state) => getUser(state).isLogged;
export const getUserLoading = (state) => getUser(state).loading;
export const getCasinoName = (state) => getUser(state).casinoName;
export const getUserAccountInfo = (state) => getUser(state).accountInfo;
export const getIsShowModal = (state) => getUser(state).isShowModal;

const parseBet = (str) => parseFloat(str.replace(/\s+BET$/, ''));

export const getBonusBalance = (state) => {
  const accountInfo = getUserAccountInfo(state);
  if (accountInfo && 'bonusBalances' in accountInfo) {
    const { bonusBalances } = accountInfo;
    if (bonusBalances && config.casinoId in bonusBalances) {
      const casinoBonusBalance = bonusBalances[config.casinoId];
      if (casinoBonusBalance && 'balance' in casinoBonusBalance) {
        return parseBet(casinoBonusBalance.balance);
      }
    }
  }
  return null;
};

export const getUserBalance = (state) => {
  const accountInfo = getUserAccountInfo(state);
  if (accountInfo && 'balance' in accountInfo) {
    let balance = parseBet(accountInfo.balance);
    const bonusBalance = getBonusBalance(state);
    if (bonusBalance !== null) {
      balance += bonusBalance;
    }
    return balance;
  }
  return null;
};

export const getUserName = (state) => {
  const accountInfo = getUserAccountInfo(state);
  if (accountInfo && 'accountName' in accountInfo) {
    return accountInfo.accountName;
  }
  return null;
};

export const getUserError = (state) => getUser(state).error;

export const getUserReferralId = (state) => {
  const info = getUserAccountInfo(state);
  if (info && 'referral' in info && 'id' in info.referral) {
    return info.referral.id;
  }

  return null;
};

export const getUserReferralRevenue = (state) => {
  const info = getUserAccountInfo(state);
  if (info && 'referral' in info && 'revenue' in info.referral) {
    return parseFloat(info.referral.revenue);
  }
  return null;
};

export const getUserReferralLink = createSelector([getUserReferralId], (id) => {
  const url = new URL(window.location.origin);
  url.searchParams.append('affiliate_id', id);
  return url.toString();
});

export const getUserCashback = (state) => {
  const info = getUserAccountInfo(state);
  if (info && 'cashback' in info) {
    return info.cashback;
  }
  return null;
};

export const getUserCashbackToPay = (state) => {
  const cashback = getUserCashback(state);
  if (cashback && 'toPay' in cashback) {
    return cashback.toPay;
  }

  return null;
};

export const getUserCashbackGGR = (state) => {
  const cashback = getUserCashback(state);
  if (cashback && 'ggr' in cashback) {
    return cashback.ggr;
  }

  return null;
};

export const getEthAddress = (state) => {
  const info = getUserAccountInfo(state);
  if (info && 'ethAddress' in info) {
    return info.ethAddress;
  }
  return undefined;
};

export const isEthAddressEmpty = (state) => !getEthAddress(state);

export const getSetEthAddressError = createSelector(
  [getUserError, isEthAddressEmpty],
  (error, isEthAddressEmpty) => {
    if (error) {
      return error;
    }
    if (isEthAddressEmpty) {
      return 'You are missing out on free ETH rewards and Cashback rewads. Enter your ETH address to recieve these rewards.';
    }

    return undefined;
  }
);
