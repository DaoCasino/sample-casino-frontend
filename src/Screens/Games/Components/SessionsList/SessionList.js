import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import config from 'Config/AppConfig';

const mobileHide = css`
  ${({ theme: { media } }) => media.lessThan('xs_gt')`
    display: none;
  `}
`;

const TableContainer = styled.div`
  width: 100%;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const TableRow = styled.tr``;

const TableCell = styled.td`
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #fff;
  opacity: 0.5;
  text-align: right;
  text-transform: uppercase;
  padding: 16px 20px;

  ${(props) => 'xs-hide' in props && mobileHide}
`;

const TableCellProfit = styled(TableCell)`
  opacity: 1;
  color: ${(props) => (props.win ? '#30bf70' : '#e53935')};
  white-space: nowrap;
`;

const TableCellGame = styled(TableCell)`
  opacity: 1;
  text-align: left;
  text-transform: none;
`;

const TableCellUser = styled(TableCell)`
  opacity: 1;
  text-transform: none;
  a {
    display: inline-block;
    color: #145df2;
    text-decoration: none;

    ${({ theme: { media } }) => media.lessThan('xs_gt')`
      width: 60px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;`}
  }
`;

const TableHead = styled.thead`
  ${TableCell} {
    font-size: 10px;
    opacity: 0.3;
    line-height: 1.6;
    padding: 10px 20px;
  }
`;

const TableBody = styled.tbody`
  ${TableRow}:nth-child(odd) {
    background-color: #12151b;
  }
`;

const TableHeader = () => (
  <TableHead>
    <TableRow>
      <TableCell style={{ textAlign: 'left' }}>Game</TableCell>
      <TableCell>User</TableCell>
      <TableCell xs-hide>Time</TableCell>
      <TableCell xs-hide>Bet</TableCell>
      <TableCell>Profit</TableCell>
    </TableRow>
  </TableHead>
);

const GameWrapper = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
const GameIcon = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 4px;
  background-position: center center;
  background-size: cover;
`;
const GameTitle = styled.div`
  color: #fff;
  font-size: 14px;
  line-height: 1.43;
  padding-left: 16px;

  ${(props) => 'xs-hide' in props && mobileHide}
`;

const GameCard = ({ game }) => (
  <GameWrapper to={`/game/${game.id}`} title={game.name}>
    <GameIcon
      style={{ backgroundImage: `url(${game.url + game.icons.small})` }}
    />
    <GameTitle xs-hide>{game.name}</GameTitle>
  </GameWrapper>
);

const isEmptyArray = (arr) => !(Array.isArray(arr) && arr.length > 0);

const renderRow = ({ id, gameId, time, bet, profit, win, player }, items) => {
  if (isEmptyArray(items)) {
    return;
  }

  const playerLink = config.isDev
    ? `https://explorer.daobet.org/accounts/${player}`
    : `https://explorer.daovalidator.com/accounts/${player}`;

  const game = items.find((game) => game.id === gameId);
  return (
    <TableRow key={'session_id:' + id}>
      <TableCellGame>{game && <GameCard game={game} />}</TableCellGame>
      <TableCellUser>
        <a href={playerLink} target='_blank' rel='noopener noreferrer'>
          {player}
        </a>
      </TableCellUser>
      <TableCell xs-hide>{time}</TableCell>
      <TableCell xs-hide>{bet}</TableCell>
      <TableCellProfit win={win}>{profit}</TableCellProfit>
    </TableRow>
  );
};

function SessionList(props) {
  console.log('render SessionList');
  const { sessions, games } = props;

  return (
    <TableContainer>
      <Table>
        <TableHeader />
        <TableBody>
          {sessions.map((session) => renderRow(session, games))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SessionList;
