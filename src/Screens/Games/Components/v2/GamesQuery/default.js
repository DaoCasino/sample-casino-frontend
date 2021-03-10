const DEFAULT_CARDS_NUMBER = 7;
const defaultGames = [];
for (let i = 0; i < DEFAULT_CARDS_NUMBER; i++) {
  defaultGames.push({
    id: i,
    name: 'Loading...',
    icons: {},
  });
}

export default defaultGames;
