const LOSER = {
  isWinner: false,
  isLoser: true,
};

const WINNER = {
  isWinner: true,
  isLoser: false,
};

const NOTHING = {
  isWinner: false,
  isLoser: false,
};


export const xaxaxa = (active: boolean, result: any, userResult: any) => {
  try {
    console.log('1')
    if (!active) return NOTHING;
    if (!result?.tournamentBracket) return NOTHING;
    if (!userResult?.tournamentBracket) return LOSER;
    console.log('2')
    if (result.tournamentBracket.b1p1 && result.tournamentBracket.b1p1 !== userResult.tournamentBracket.b1p1) return LOSER;
    if (result.tournamentBracket.b1p2 && result.tournamentBracket.b1p2 !== userResult.tournamentBracket.b1p2) return LOSER;
    if (result.tournamentBracket.b2p1 && result.tournamentBracket.b2p1 !== userResult.tournamentBracket.b2p1) return LOSER;
    if (result.tournamentBracket.b2p2 && result.tournamentBracket.b2p2 !== userResult.tournamentBracket.b2p2) return LOSER;
    if (result.tournamentBracket.b3p1 && result.tournamentBracket.b3p1 !== userResult.tournamentBracket.b3p1) return LOSER;
    if (result.tournamentBracket.b3p2 && result.tournamentBracket.b3p2 !== userResult.tournamentBracket.b3p2) return LOSER;
    if (result.tournamentBracket.b4p1 && result.tournamentBracket.b4p1 !== userResult.tournamentBracket.b4p1) return LOSER;
    if (result.tournamentBracket.b4p2 && result.tournamentBracket.b4p2 !== userResult.tournamentBracket.b4p2) return LOSER;
    if (result.tournamentBracket.b5p1 && result.tournamentBracket.b5p1 !== userResult.tournamentBracket.b5p1) return LOSER;
    if (result.tournamentBracket.b5p2 && result.tournamentBracket.b5p2 !== userResult.tournamentBracket.b5p2) return LOSER;
    if (result.tournamentBracket.b6p1 && result.tournamentBracket.b6p1 !== userResult.tournamentBracket.b6p1) return LOSER;
    if (result.tournamentBracket.b6p2 && result.tournamentBracket.b6p2 !== userResult.tournamentBracket.b6p2) return LOSER;
    if (result.tournamentBracket.b7p1 && result.tournamentBracket.b7p1 !== userResult.tournamentBracket.b7p1) return LOSER;
    if (result.tournamentBracket.b7p2 && result.tournamentBracket.b7p2 !== userResult.tournamentBracket.b7p2) return LOSER;
    if (result.tournamentBracket.b8p1 && result.tournamentBracket.b8p1 !== userResult.tournamentBracket.b8p1) return LOSER;
    if (result.tournamentBracket.b8p2 && result.tournamentBracket.b8p2 !== userResult.tournamentBracket.b8p2) return LOSER;
    if (result.tournamentBracket.c1p1 && result.tournamentBracket.c1p1 !== userResult.tournamentBracket.c1p1) return LOSER;
    if (result.tournamentBracket.c1p2 && result.tournamentBracket.c1p2 !== userResult.tournamentBracket.c1p2) return LOSER;
    if (result.tournamentBracket.c2p1 && result.tournamentBracket.c2p1 !== userResult.tournamentBracket.c2p1) return LOSER;
    if (result.tournamentBracket.c2p2 && result.tournamentBracket.c2p2 !== userResult.tournamentBracket.c2p2) return LOSER;
    if (result.tournamentBracket.c3p1 && result.tournamentBracket.c3p1 !== userResult.tournamentBracket.c3p1) return LOSER;
    if (result.tournamentBracket.c3p2 && result.tournamentBracket.c3p2 !== userResult.tournamentBracket.c3p2) return LOSER;
    if (result.tournamentBracket.c4p1 && result.tournamentBracket.c4p1 !== userResult.tournamentBracket.c4p1) return LOSER;
    if (result.tournamentBracket.c4p2 && result.tournamentBracket.c4p2 !== userResult.tournamentBracket.c4p2) return LOSER;
    if (result.tournamentBracket.d1p1 && result.tournamentBracket.d1p1 !== userResult.tournamentBracket.d1p1) return LOSER;
    if (result.tournamentBracket.d1p2 && result.tournamentBracket.d1p2 !== userResult.tournamentBracket.d1p2) return LOSER;
    if (result.tournamentBracket.d2p1 && result.tournamentBracket.d2p1 !== userResult.tournamentBracket.d2p1) return LOSER;
    if (result.tournamentBracket.d2p2 && result.tournamentBracket.d2p2 !== userResult.tournamentBracket.d2p2) return LOSER;
    if (result.tournamentBracket.e1p1 && result.tournamentBracket.e1p1 !== userResult.tournamentBracket.e1p1) return LOSER;
    if (result.tournamentBracket.e1p2 && result.tournamentBracket.e1p2 !== userResult.tournamentBracket.e1p2) return LOSER;
    if (result.tournamentBracket.f1p1 && result.tournamentBracket.f1p1 !== userResult.tournamentBracket.f1p1) return LOSER;
    console.log('3')
    for (let i = 0; i < result.tables.a.length; i++) {
      if (result.tables.a[i] !== userResult.tables.a[i]) return LOSER;
    }
    for (let i = 0; i < result.tables.b.length; i++) {
      if (result.tables.b[i] !== userResult.tables.b[i]) return LOSER;
    }
    for (let i = 0; i < result.tables.c.length; i++) {
      if (result.tables.c[i] !== userResult.tables.c[i]) return LOSER;
    }
    for (let i = 0; i < result.tables.d.length; i++) {
      if (result.tables.d[i] !== userResult.tables.d[i]) return LOSER;
    }
    for (let i = 0; i < result.tables.e.length; i++) {
      if (result.tables.e[i] !== userResult.tables.e[i]) return LOSER;
    }
    for (let i = 0; i < result.tables.f.length; i++) {
      if (result.tables.f[i] !== userResult.tables.f[i]) return LOSER;
    }
    console.log('4')
    return WINNER;
  } catch {
    // ignore error
  }
  return NOTHING;
};
