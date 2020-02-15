import React from 'react';

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const boldType = text => {
  return <strong>{text}:</strong>;
};

export const isObject = val => {
  if (val === null) {
    return false;
  }
  return typeof val === 'function' || typeof val === 'object';
};

export const filterByRank = (arr, rank) => {
  return arr.filter(x => x.rank === rank);
};

export const filterByRankDirection = (arr, rank) => {
  return filterByRank(arr, rank).sort(
    (a, b) => a.rankDirection > b.rankDirection
  );
};

export const filteredWrestlers = wrestlers => {
  if (wrestlers && wrestlers.length > 0) {
    const yokozuna = filterByRankDirection(wrestlers, 'yokozuna');
    const ozeki = filterByRankDirection(wrestlers, 'ozeki');
    const sekiwake = filterByRankDirection(wrestlers, 'sekiwake');
    const komusubi = filterByRankDirection(wrestlers, 'komusubi');
    const maegashira = wrestlers
      .filter(x => x.rank === 'maegashira')
      .sort((a, b) =>
        a.rankDirection > b.rankDirection && a.rankNumber > b.rankNumber
          ? 1
          : a.rankNumber < b.rankNumber
          ? -1
          : 0
      );
    return yokozuna.concat(ozeki, sekiwake, komusubi, maegashira);
  }
};

// const filteredWrestlers = useCallback(() => {
//   if (wrestlers && wrestlers.length > 0) {
//     const yokozuna = filterByRankDirection(wrestlers, 'yokozuna');
//     const ozeki = filterByRankDirection(wrestlers, 'ozeki');
//     const sekiwake = filterByRankDirection(wrestlers, 'sekiwake');
//     const komusubi = filterByRankDirection(wrestlers, 'komusubi');
//     const maegashira = wrestlers
//       .filter(x => x.rank === 'maegashira')
//       .sort((a, b) =>
//         a.rankDirection > b.rankDirection && a.rankNumber > b.rankNumber
//           ? 1
//           : a.rankNumber < b.rankNumber
//           ? -1
//           : 0
//       );
//     return yokozuna.concat(ozeki, sekiwake, komusubi, maegashira);
//   }
// }, [wrestlers]);
