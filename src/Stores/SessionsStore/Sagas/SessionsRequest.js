import { put, call } from 'redux-saga/effects';
import SessionsActions from '../SessionsRedux';
import { fetchCasinoSessions } from 'Services/SDK.js';

const { sessionsRequestSuccess, sessionsRequestFailure } = SessionsActions;

const LIMIT = 5;

const formatTime = (seconds) => {
  if (!seconds) {
    return null;
  }

  const date = new Date(seconds * 1000);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return hours + ':' + minutes + ' ' + ampm;
};

const formatBet = (str, digits) =>
  parseFloat(str.replace(/\s+BET$/, '')).toFixed(digits) + ' BET';

const isWin = (str) => str && parseFloat(str.replace(/\s+BET$/, '')) > 0;

function prepareSessions(sessions) {
  const results = [];
  sessions.forEach(
    ({ id, gameId, player, deposit, playerWinAmount, lastUpdate }) => {
      if (results.length >= LIMIT) {
        return false;
      }

      // TODO: need check to server
      const win = isWin(playerWinAmount);
      if (!win) {
        return true;
      }

      results.push({
        id,
        bet: formatBet(deposit, 2),
        profit: playerWinAmount,
        gameId,
        time: formatTime(lastUpdate),
        win,
        player,
      });
    }
  );

  return results;
}

export function* sessionsRequest() {
  console.log('saga sessionsRequest');
  try {
    const data = yield call(fetchCasinoSessions);
    const sessions = yield call(prepareSessions, data);
    yield put(sessionsRequestSuccess(sessions));
  } catch (err) {
    yield put(sessionsRequestFailure(err));
  }
}
