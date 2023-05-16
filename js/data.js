const teamData = [
  {
    team_name: 'Atlanta Hawks',
    team_conference: 'East',
    team_img: 'https://cdn.nba.com/logos/nba/1610612737/primary/D/logo.svg',
    stats: {
      team_wins: 41,
      team_losses: 41,
      team_rank: 7,
      team_pts: 9711,
      team_ast: 2049,
      team_reb: 3639,
      team_stl: 580,
      team_blk: 401,
      team_fg_pct: 0.483
    },
    accolades: {
      team_championships: 1,
      team_conference_championships: 0,
      team_divisions: 12,
      team_playoffs: 49
    },
    players: [
      {
        player_first_name: 'Trae',
        player_last_name: 'Young',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629027.png',
        player_ppg: 26.2,
        player_apg: 10.2,
        player_rpg: 3.0
      },
      {
        player_first_name: 'Dejounte',
        player_last_name: 'Murray',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627749.png',
        player_ppg: 20.5,
        player_apg: 6.1,
        player_rpg: 5.3
      },
      {
        player_first_name: "De'Andre",
        player_last_name: 'Hunter',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629631.png',
        player_ppg: 15.4,
        player_apg: 1.4,
        player_rpg: 4.2
      },
      {
        player_first_name: 'Bogdan',
        player_last_name: 'Bogdanovic',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203992.png',
        player_ppg: 14.0,
        player_apg: 2.8,
        player_rpg: 3.1
      },
      {
        player_first_name: 'Saddiq',
        player_last_name: 'Bey',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630180.png',
        player_ppg: 13.8,
        player_apg: 1.5,
        player_rpg: 4.7
      },
      {
        player_first_name: 'John',
        player_last_name: 'Collins',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628381.png',
        player_ppg: 13.1,
        player_apg: 1.2,
        player_rpg: 6.5
      },
      {
        player_first_name: 'Clint',
        player_last_name: 'Capela',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203991.png',
        player_ppg: 12.0,
        player_apg: 0.9,
        player_rpg: 11.0
      },
      {
        player_first_name: 'Onyeka',
        player_last_name: 'Okongwu',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630168.png',
        player_ppg: 9.9,
        player_apg: 1.0,
        player_rpg: 7.2
      },
      {
        player_first_name: 'AJ',
        player_last_name: 'Griffin',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631100.png',
        player_ppg: 8.9,
        player_apg: 1.0,
        player_rpg: 2.1
      },
      {
        player_first_name: 'Jalen',
        player_last_name: 'Johnson',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630552.png',
        player_ppg: 5.6,
        player_apg: 1.2,
        player_rpg: 4.0
      },
      {
        player_first_name: 'Garrison',
        player_last_name: 'Mathews',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629726.png',
        player_ppg: 4.8,
        player_apg: 0.5,
        player_rpg: 1.4
      },
      {
        player_first_name: 'Bruno',
        player_last_name: 'Fernando',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628981.png',
        player_ppg: 3.9,
        player_apg: 0.8,
        player_rpg: 3.5
      },
      {
        player_first_name: 'Aaron',
        player_last_name: 'Holiday',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628988.png',
        player_ppg: 3.9,
        player_apg: 1.4,
        player_rpg: 1.2
      },
      {
        player_first_name: 'Trent',
        player_last_name: 'Forrest',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630235.png',
        player_ppg: 2.3,
        player_apg: 1.7,
        player_rpg: 1.6
      },
      {
        player_first_name: 'Donovan',
        player_last_name: 'Williams',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631495.png',
        player_ppg: 2.0,
        player_apg: 0.0,
        player_rpg: 1.0
      },
      {
        player_first_name: 'Tyrese',
        player_last_name: 'Martin',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631213.png',
        player_ppg: 1.3,
        player_apg: 0.1,
        player_rpg: 0.8
      },
      {
        player_first_name: 'Vit',
        player_last_name: 'Krejci',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630249.png',
        player_ppg: 1.2,
        player_apg: 0.6,
        player_rpg: 0.9
      }
    ]
  },
  {
    team_name: 'Boston Celtics',
    team_conference: 'East',
    team_img: 'https://cdn.nba.com/logos/nba/1610612738/primary/D/logo.svg',
    stats: {
      team_wins: 57,
      team_losses: 25,
      team_rank: 2,
      team_pts: 9671,
      team_ast: 2186,
      team_reb: 3717,
      team_stl: 521,
      team_blk: 430,
      team_fg_pct: 0.475
    },
    accolades: {
      team_championships: 17,
      team_conference_championships: 10,
      team_divisions: 33,
      team_playoffs: 60
    },
    players: [
      {
        player_first_name: 'Jayson',
        player_last_name: 'Tatum',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png',
        player_ppg: 30.1,
        player_apg: 4.6,
        player_rpg: 8.8
      },
      {
        player_first_name: 'Jaylen',
        player_last_name: 'Brown',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627759.png',
        player_ppg: 26.6,
        player_apg: 3.5,
        player_rpg: 6.9
      },
      {
        player_first_name: 'Malcolm',
        player_last_name: 'Brogdon',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627763.png',
        player_ppg: 14.9,
        player_apg: 3.7,
        player_rpg: 4.2
      },
      {
        player_first_name: 'Derrick',
        player_last_name: 'White',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628401.png',
        player_ppg: 12.4,
        player_apg: 3.9,
        player_rpg: 3.6
      },
      {
        player_first_name: 'Danilo',
        player_last_name: 'Gallinari',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201568.png',
        player_ppg: 11.7,
        player_apg: 1.5,
        player_rpg: 4.7
      },
      {
        player_first_name: 'Marcus',
        player_last_name: 'Smart',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203935.png',
        player_ppg: 11.5,
        player_apg: 6.3,
        player_rpg: 3.1
      },
      {
        player_first_name: 'Al',
        player_last_name: 'Horford',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201143.png',
        player_ppg: 9.8,
        player_apg: 3.0,
        player_rpg: 6.2
      },
      {
        player_first_name: 'Grant',
        player_last_name: 'Williams',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629684.png',
        player_ppg: 8.1,
        player_apg: 1.7,
        player_rpg: 4.6
      },
      {
        player_first_name: 'Robert',
        player_last_name: 'Williams III',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629057.png',
        player_ppg: 8.0,
        player_apg: 1.4,
        player_rpg: 8.3
      },
      {
        player_first_name: 'Sam',
        player_last_name: 'Hauser',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630573.png',
        player_ppg: 6.4,
        player_apg: 0.9,
        player_rpg: 2.6
      },
      {
        player_first_name: 'Mike',
        player_last_name: 'Muscala',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203488.png',
        player_ppg: 6.1,
        player_apg: 0.8,
        player_rpg: 3.2
      },
      {
        player_first_name: 'Payton',
        player_last_name: 'Pritchard',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630202.png',
        player_ppg: 5.6,
        player_apg: 1.3,
        player_rpg: 1.8
      },
      {
        player_first_name: 'Blake',
        player_last_name: 'Griffin',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201933.png',
        player_ppg: 4.1,
        player_apg: 1.5,
        player_rpg: 3.8
      },
      {
        player_first_name: 'Luke',
        player_last_name: 'Kornet',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628436.png',
        player_ppg: 3.8,
        player_apg: 0.8,
        player_rpg: 2.9
      },
      {
        player_first_name: 'Justin',
        player_last_name: 'Champagnie',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630551.png',
        player_ppg: 2.2,
        player_apg: 0.8,
        player_rpg: 1.6
      },
      {
        player_first_name: 'JD',
        player_last_name: 'Davison',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631120.png',
        player_ppg: 1.6,
        player_apg: 0.9,
        player_rpg: 0.8
      },
      {
        player_first_name: 'Mfiondu',
        player_last_name: 'Kabengele',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629662.png',
        player_ppg: 1.5,
        player_apg: 0.0,
        player_rpg: 2.5
      }
    ]
  },
  {
    team_name: 'Brooklyn Nets',
    team_conference: 'East',
    team_img: 'https://cdn.nba.com/logos/nba/1610612751/primary/D/logo.svg',
    stats: {
      team_wins: 45,
      team_losses: 37,
      team_rank: 6,
      team_pts: 9295,
      team_ast: 2093,
      team_reb: 3322,
      team_stl: 585,
      team_blk: 506,
      team_fg_pct: 0.487
    },
    accolades: {
      team_championships: 0,
      team_conference_championships: 2,
      team_divisions: 4,
      team_playoffs: 24
    },
    players: [
      {
        player_first_name: 'Mikal',
        player_last_name: 'Bridges',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628969.png',
        player_ppg: 20.1,
        player_apg: 3.3,
        player_rpg: 4.4
      },
      {
        player_first_name: 'Spencer',
        player_last_name: 'Dinwiddie',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203915.png',
        player_ppg: 17.3,
        player_apg: 6.5,
        player_rpg: 3.4
      },
      {
        player_first_name: 'Cameron',
        player_last_name: 'Johnson',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629661.png',
        player_ppg: 15.5,
        player_apg: 1.9,
        player_rpg: 4.4
      },
      {
        player_first_name: 'Nic',
        player_last_name: 'Claxton',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629651.png',
        player_ppg: 12.6,
        player_apg: 1.9,
        player_rpg: 9.2
      },
      {
        player_first_name: 'Cam',
        player_last_name: 'Thomas',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630560.png',
        player_ppg: 10.6,
        player_apg: 1.4,
        player_rpg: 1.7
      },
      {
        player_first_name: 'Seth',
        player_last_name: 'Curry',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203552.png',
        player_ppg: 9.2,
        player_apg: 1.6,
        player_rpg: 1.6
      },
      {
        player_first_name: 'Royce',
        player_last_name: "O'Neale",
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626220.png',
        player_ppg: 8.8,
        player_apg: 3.7,
        player_rpg: 5.1
      },
      {
        player_first_name: 'Dorian',
        player_last_name: 'Finney-Smith',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627827.png',
        player_ppg: 8.3,
        player_apg: 1.5,
        player_rpg: 4.8
      },
      {
        player_first_name: 'Joe',
        player_last_name: 'Harris',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203925.png',
        player_ppg: 7.6,
        player_apg: 1.4,
        player_rpg: 2.2
      },
      {
        player_first_name: 'Edmond',
        player_last_name: 'Sumner',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628410.png',
        player_ppg: 7.1,
        player_apg: 1.3,
        player_rpg: 1.5
      },
      {
        player_first_name: 'Ben',
        player_last_name: 'Simmons',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627732.png',
        player_ppg: 6.9,
        player_apg: 6.1,
        player_rpg: 6.3
      },
      {
        player_first_name: 'Patty',
        player_last_name: 'Mills',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201988.png',
        player_ppg: 6.2,
        player_apg: 1.4,
        player_rpg: 1.1
      },
      {
        player_first_name: 'Yuta',
        player_last_name: 'Watanabe',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629139.png',
        player_ppg: 5.6,
        player_apg: 0.8,
        player_rpg: 2.4
      },
      {
        player_first_name: "Day'Ron",
        player_last_name: 'Sharpe',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630549.png',
        player_ppg: 4.7,
        player_apg: 0.8,
        player_rpg: 4.2
      },
      {
        player_first_name: 'David',
        player_last_name: 'Duke Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630561.png',
        player_ppg: 3.7,
        player_apg: 0.9,
        player_rpg: 1.3
      },
      {
        player_first_name: 'Dru',
        player_last_name: 'Smith',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630696.png',
        player_ppg: 2.9,
        player_apg: 1.5,
        player_rpg: 1.6
      }
    ]
  },
  {
    team_name: 'Charlotte Hornets',
    team_conference: 'East',
    team_img: 'https://cdn.nba.com/logos/nba/1610612766/primary/D/logo.svg',
    stats: {
      team_wins: 27,
      team_losses: 55,
      team_rank: 14,
      team_pts: 9098,
      team_ast: 2062,
      team_reb: 3652,
      team_stl: 634,
      team_blk: 425,
      team_fg_pct: 0.457
    },
    accolades: {
      team_championships: 0,
      team_conference_championships: 0,
      team_divisions: 0,
      team_playoffs: 10
    },
    players: [
      {
        player_first_name: 'LaMelo',
        player_last_name: 'Ball',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630163.png',
        player_ppg: 23.3,
        player_apg: 8.4,
        player_rpg: 6.4
      },
      {
        player_first_name: 'Terry',
        player_last_name: 'Rozier',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626179.png',
        player_ppg: 21.1,
        player_apg: 5.1,
        player_rpg: 4.1
      },
      {
        player_first_name: 'Kelly',
        player_last_name: 'Oubre Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626162.png',
        player_ppg: 20.2,
        player_apg: 1.1,
        player_rpg: 5.2
      },
      {
        player_first_name: 'P.J.',
        player_last_name: 'Washington',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629023.png',
        player_ppg: 15.7,
        player_apg: 2.4,
        player_rpg: 4.9
      },
      {
        player_first_name: 'Gordon',
        player_last_name: 'Hayward',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202330.png',
        player_ppg: 14.7,
        player_apg: 4.1,
        player_rpg: 4.3
      },
      {
        player_first_name: 'Mark',
        player_last_name: 'Williams',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631109.png',
        player_ppg: 9.0,
        player_apg: 0.4,
        player_rpg: 7.1
      },
      {
        player_first_name: 'Dennis',
        player_last_name: 'Smith Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628372.png',
        player_ppg: 8.8,
        player_apg: 4.8,
        player_rpg: 3.1
      },
      {
        player_first_name: 'Nick',
        player_last_name: 'Richards',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630208.png',
        player_ppg: 8.2,
        player_apg: 0.6,
        player_rpg: 6.4
      },
      {
        player_first_name: 'Svi',
        player_last_name: 'Mykhailiuk',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629004.png',
        player_ppg: 6.9,
        player_apg: 1.7,
        player_rpg: 1.7
      },
      {
        player_first_name: 'Theo',
        player_last_name: 'Maledon',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630177.png',
        player_ppg: 6.7,
        player_apg: 3.5,
        player_rpg: 2.8
      },
      {
        player_first_name: 'James',
        player_last_name: 'Bouknight',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630547.png',
        player_ppg: 5.6,
        player_apg: 1.2,
        player_rpg: 2.1
      },
      {
        player_first_name: 'Bryce',
        player_last_name: 'McGowens',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631121.png',
        player_ppg: 5.3,
        player_apg: 1.2,
        player_rpg: 2.0
      },
      {
        player_first_name: 'Cody',
        player_last_name: 'Martin',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628998.png',
        player_ppg: 5.0,
        player_apg: 1.6,
        player_rpg: 3.4
      },
      {
        player_first_name: 'Xavier',
        player_last_name: 'Sneed',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630270.png',
        player_ppg: 4.2,
        player_apg: 1.2,
        player_rpg: 1.2
      },
      {
        player_first_name: 'JT',
        player_last_name: 'Thor',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630550.png',
        player_ppg: 3.8,
        player_apg: 0.5,
        player_rpg: 2.2
      },
      {
        player_first_name: 'Kai',
        player_last_name: 'Jones',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630539.png',
        player_ppg: 3.4,
        player_apg: 0.3,
        player_rpg: 2.7
      },
      {
        player_first_name: 'Kobi',
        player_last_name: 'Simmons',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628424.png',
        player_ppg: 1.0,
        player_apg: 1.0,
        player_rpg: 0.8
      }
    ]
  },
  {
    team_name: 'Chicago Bulls',
    team_conference: 'East',
    team_img: 'https://cdn.nba.com/logos/nba/1610612741/primary/D/logo.svg',
    stats: {
      team_wins: 40,
      team_losses: 42,
      team_rank: 10,
      team_pts: 9276,
      team_ast: 2006,
      team_reb: 3473,
      team_stl: 644,
      team_blk: 371,
      team_fg_pct: 0.49
    },
    accolades: {
      team_championships: 6,
      team_conference_championships: 6,
      team_divisions: 9,
      team_playoffs: 36
    },
    players: [
      {
        player_first_name: 'Zach',
        player_last_name: 'LaVine',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203897.png',
        player_ppg: 24.8,
        player_apg: 4.2,
        player_rpg: 4.5
      },
      {
        player_first_name: 'DeMar',
        player_last_name: 'DeRozan',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201942.png',
        player_ppg: 24.5,
        player_apg: 5.1,
        player_rpg: 4.6
      },
      {
        player_first_name: 'Nikola',
        player_last_name: 'Vucevic',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202696.png',
        player_ppg: 17.6,
        player_apg: 3.2,
        player_rpg: 11.0
      },
      {
        player_first_name: 'Lonzo',
        player_last_name: 'Ball',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628366.png',
        player_ppg: 13.0,
        player_apg: 5.1,
        player_rpg: 5.4
      },
      {
        player_first_name: 'Patrick',
        player_last_name: 'Williams',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630172.png',
        player_ppg: 10.2,
        player_apg: 1.2,
        player_rpg: 4.0
      },
      {
        player_first_name: 'Coby',
        player_last_name: 'White',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629632.png',
        player_ppg: 9.7,
        player_apg: 2.8,
        player_rpg: 2.9
      },
      {
        player_first_name: 'Ayo',
        player_last_name: 'Dosunmu',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630245.png',
        player_ppg: 8.6,
        player_apg: 2.6,
        player_rpg: 2.8
      },
      {
        player_first_name: 'Patrick',
        player_last_name: 'Beverley',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201976.png',
        player_ppg: 6.2,
        player_apg: 2.9,
        player_rpg: 3.7
      },
      {
        player_first_name: 'Andre',
        player_last_name: 'Drummond',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203083.png',
        player_ppg: 6.0,
        player_apg: 0.5,
        player_rpg: 6.6
      },
      {
        player_first_name: 'Alex',
        player_last_name: 'Caruso',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627936.png',
        player_ppg: 5.6,
        player_apg: 2.9,
        player_rpg: 2.9
      },
      {
        player_first_name: 'Javonte',
        player_last_name: 'Green',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629750.png',
        player_ppg: 5.2,
        player_apg: 0.7,
        player_rpg: 2.8
      },
      {
        player_first_name: 'Derrick',
        player_last_name: 'Jones Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627884.png',
        player_ppg: 5.0,
        player_apg: 0.5,
        player_rpg: 2.4
      },
      {
        player_first_name: 'Carlik',
        player_last_name: 'Jones',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630637.png',
        player_ppg: 2.9,
        player_apg: 0.9,
        player_rpg: 0.7
      },
      {
        player_first_name: 'Terry',
        player_last_name: 'Taylor',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630678.png',
        player_ppg: 2.9,
        player_apg: 0.3,
        player_rpg: 1.5
      },
      {
        player_first_name: 'Dalen',
        player_last_name: 'Terry',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631207.png',
        player_ppg: 2.2,
        player_apg: 0.6,
        player_rpg: 1.0
      },
      {
        player_first_name: 'Marko',
        player_last_name: 'Simonovic',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630250.png',
        player_ppg: 0.9,
        player_apg: 0.0,
        player_rpg: 0.3
      }
    ]
  },
  {
    team_name: 'Cleveland Cavaliers',
    team_conference: 'East',
    team_img: 'https://cdn.nba.com/logos/nba/1610612739/primary/D/logo.svg',
    stats: {
      team_wins: 51,
      team_losses: 31,
      team_rank: 4,
      team_pts: 9205,
      team_ast: 2045,
      team_reb: 3369,
      team_stl: 586,
      team_blk: 384,
      team_fg_pct: 0.488
    },
    accolades: {
      team_championships: 1,
      team_conference_championships: 5,
      team_divisions: 7,
      team_playoffs: 23
    },
    players: [
      {
        player_first_name: 'Donovan',
        player_last_name: 'Mitchell',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628378.png',
        player_ppg: 28.3,
        player_apg: 4.4,
        player_rpg: 4.2
      },
      {
        player_first_name: 'Darius',
        player_last_name: 'Garland',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629636.png',
        player_ppg: 21.6,
        player_apg: 7.8,
        player_rpg: 2.7
      },
      {
        player_first_name: 'Evan',
        player_last_name: 'Mobley',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630596.png',
        player_ppg: 16.2,
        player_apg: 2.8,
        player_rpg: 9.0
      },
      {
        player_first_name: 'Jarrett',
        player_last_name: 'Allen',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628386.png',
        player_ppg: 14.2,
        player_apg: 1.7,
        player_rpg: 9.8
      },
      {
        player_first_name: 'Caris',
        player_last_name: 'LeVert',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627747.png',
        player_ppg: 12.1,
        player_apg: 3.9,
        player_rpg: 3.8
      },
      {
        player_first_name: 'Cedi',
        player_last_name: 'Osman',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626224.png',
        player_ppg: 8.7,
        player_apg: 1.5,
        player_rpg: 2.3
      },
      {
        player_first_name: 'Isaac',
        player_last_name: 'Okoro',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630171.png',
        player_ppg: 6.4,
        player_apg: 1.1,
        player_rpg: 2.5
      },
      {
        player_first_name: 'Danny',
        player_last_name: 'Green',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201980.png',
        player_ppg: 5.5,
        player_apg: 0.5,
        player_rpg: 1.3
      },
      {
        player_first_name: 'Lamar',
        player_last_name: 'Stevens',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630205.png',
        player_ppg: 5.3,
        player_apg: 0.5,
        player_rpg: 3.3
      },
      {
        player_first_name: 'Ricky',
        player_last_name: 'Rubio',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201937.png',
        player_ppg: 5.2,
        player_apg: 3.5,
        player_rpg: 2.1
      },
      {
        player_first_name: 'Sam',
        player_last_name: 'Merrill',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630241.png',
        player_ppg: 5.0,
        player_apg: 1.0,
        player_rpg: 1.8
      },
      {
        player_first_name: 'Dean',
        player_last_name: 'Wade',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629731.png',
        player_ppg: 4.7,
        player_apg: 0.8,
        player_rpg: 3.4
      },
      {
        player_first_name: 'Raul',
        player_last_name: 'Neto',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203526.png',
        player_ppg: 3.3,
        player_apg: 1.6,
        player_rpg: 1.0
      },
      {
        player_first_name: 'Robin',
        player_last_name: 'Lopez',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201577.png',
        player_ppg: 3.0,
        player_apg: 0.5,
        player_rpg: 1.4
      },
      {
        player_first_name: 'Isaiah',
        player_last_name: 'Mobley',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630600.png',
        player_ppg: 2.6,
        player_apg: 0.2,
        player_rpg: 1.7
      },
      {
        player_first_name: 'Mamadi',
        player_last_name: 'Diakite',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629603.png',
        player_ppg: 2.6,
        player_apg: 0.4,
        player_rpg: 1.4
      },
      {
        player_first_name: 'Dylan',
        player_last_name: 'Windler',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629685.png',
        player_ppg: 1.7,
        player_apg: 0.3,
        player_rpg: 0.0
      }
    ]
  },
  {
    team_name: 'Dallas Mavericks',
    team_conference: 'West',
    team_img: 'https://cdn.nba.com/logos/nba/1610612742/primary/D/logo.svg',
    stats: {
      team_wins: 38,
      team_losses: 44,
      team_rank: 11,
      team_pts: 9366,
      team_ast: 1880,
      team_reb: 3181,
      team_stl: 514,
      team_blk: 304,
      team_fg_pct: 0.475
    },
    accolades: {
      team_championships: 1,
      team_conference_championships: 2,
      team_divisions: 4,
      team_playoffs: 24
    },
    players: [
      {
        player_first_name: 'Luka',
        player_last_name: 'Doncic',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png',
        player_ppg: 32.4,
        player_apg: 8.0,
        player_rpg: 8.6
      },
      {
        player_first_name: 'Kyrie',
        player_last_name: 'Irving',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202681.png',
        player_ppg: 27.0,
        player_apg: 5.5,
        player_rpg: 5.1
      },
      {
        player_first_name: 'Christian',
        player_last_name: 'Wood',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626174.png',
        player_ppg: 16.6,
        player_apg: 1.8,
        player_rpg: 7.3
      },
      {
        player_first_name: 'Tim',
        player_last_name: 'Hardaway Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203501.png',
        player_ppg: 14.4,
        player_apg: 1.8,
        player_rpg: 3.5
      },
      {
        player_first_name: 'Josh',
        player_last_name: 'Green',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630182.png',
        player_ppg: 9.1,
        player_apg: 1.7,
        player_rpg: 3.0
      },
      {
        player_first_name: 'Jaden',
        player_last_name: 'Hardy',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630702.png',
        player_ppg: 8.8,
        player_apg: 1.4,
        player_rpg: 1.9
      },
      {
        player_first_name: 'Reggie',
        player_last_name: 'Bullock',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203493.png',
        player_ppg: 7.2,
        player_apg: 1.4,
        player_rpg: 3.6
      },
      {
        player_first_name: 'Dwight',
        player_last_name: 'Powell',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203939.png',
        player_ppg: 6.7,
        player_apg: 0.9,
        player_rpg: 4.1
      },
      {
        player_first_name: 'Maxi',
        player_last_name: 'Kleber',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628467.png',
        player_ppg: 5.9,
        player_apg: 1.4,
        player_rpg: 3.6
      },
      {
        player_first_name: 'Davis',
        player_last_name: 'Bertans',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202722.png',
        player_ppg: 4.6,
        player_apg: 0.5,
        player_rpg: 1.2
      },
      {
        player_first_name: 'Justin',
        player_last_name: 'Holiday',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203200.png',
        player_ppg: 4.5,
        player_apg: 0.9,
        player_rpg: 1.2
      },
      {
        player_first_name: 'JaVale',
        player_last_name: 'McGee',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201580.png',
        player_ppg: 4.4,
        player_apg: 0.3,
        player_rpg: 2.5
      },
      {
        player_first_name: 'McKinley',
        player_last_name: 'Wright IV',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630593.png',
        player_ppg: 4.2,
        player_apg: 2.1,
        player_rpg: 1.7
      },
      {
        player_first_name: 'Markieff',
        player_last_name: 'Morris',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202693.png',
        player_ppg: 3.8,
        player_apg: 0.9,
        player_rpg: 2.0
      },
      {
        player_first_name: 'A.J.',
        player_last_name: 'Lawson',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630639.png',
        player_ppg: 3.7,
        player_apg: 0.1,
        player_rpg: 1.4
      },
      {
        player_first_name: 'Frank',
        player_last_name: 'Ntilikina',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628373.png',
        player_ppg: 2.9,
        player_apg: 1.2,
        player_rpg: 1.3
      },
      {
        player_first_name: 'Theo',
        player_last_name: 'Pinson',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629033.png',
        player_ppg: 2.4,
        player_apg: 1.2,
        player_rpg: 1.6
      }
    ]
  },
  {
    team_name: 'Denver Nuggets',
    team_conference: 'West',
    team_img: 'https://cdn.nba.com/logos/nba/1610612743/primary/D/logo.svg',
    stats: {
      team_wins: 53,
      team_losses: 29,
      team_rank: 1,
      team_pts: 9495,
      team_ast: 2368,
      team_reb: 3527,
      team_stl: 618,
      team_blk: 368,
      team_fg_pct: 0.504
    },
    accolades: {
      team_championships: 0,
      team_conference_championships: 0,
      team_divisions: 10,
      team_playoffs: 29
    },
    players: [
      {
        player_first_name: 'Nikola',
        player_last_name: 'Jokic',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png',
        player_ppg: 24.5,
        player_apg: 9.8,
        player_rpg: 11.8
      },
      {
        player_first_name: 'Jamal',
        player_last_name: 'Murray',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627750.png',
        player_ppg: 20.0,
        player_apg: 6.2,
        player_rpg: 4.0
      },
      {
        player_first_name: 'Michael',
        player_last_name: 'Porter Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629008.png',
        player_ppg: 17.4,
        player_apg: 1.0,
        player_rpg: 5.5
      },
      {
        player_first_name: 'Aaron',
        player_last_name: 'Gordon',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203932.png',
        player_ppg: 16.3,
        player_apg: 3.0,
        player_rpg: 6.6
      },
      {
        player_first_name: 'Bruce',
        player_last_name: 'Brown',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628971.png',
        player_ppg: 11.5,
        player_apg: 3.4,
        player_rpg: 4.1
      },
      {
        player_first_name: 'Kentavious',
        player_last_name: 'Caldwell-Pope',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203484.png',
        player_ppg: 10.8,
        player_apg: 2.4,
        player_rpg: 2.7
      },
      {
        player_first_name: 'Reggie',
        player_last_name: 'Jackson',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202704.png',
        player_ppg: 10.2,
        player_apg: 3.4,
        player_rpg: 2.1
      },
      {
        player_first_name: 'Thomas',
        player_last_name: 'Bryant',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628418.png',
        player_ppg: 9.8,
        player_apg: 0.5,
        player_rpg: 5.7
      },
      {
        player_first_name: 'Jeff',
        player_last_name: 'Green',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201145.png',
        player_ppg: 7.8,
        player_apg: 1.2,
        player_rpg: 2.6
      },
      {
        player_first_name: 'Zeke',
        player_last_name: 'Nnaji',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630192.png',
        player_ppg: 5.2,
        player_apg: 0.3,
        player_rpg: 2.6
      },
      {
        player_first_name: 'DeAndre',
        player_last_name: 'Jordan',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201599.png',
        player_ppg: 5.1,
        player_apg: 0.9,
        player_rpg: 5.2
      },
      {
        player_first_name: 'Vlatko',
        player_last_name: 'Cancar',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628427.png',
        player_ppg: 5.0,
        player_apg: 1.3,
        player_rpg: 2.1
      },
      {
        player_first_name: 'Christian',
        player_last_name: 'Braun',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631128.png',
        player_ppg: 4.7,
        player_apg: 0.8,
        player_rpg: 2.4
      },
      {
        player_first_name: 'Peyton',
        player_last_name: 'Watson',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631212.png',
        player_ppg: 3.3,
        player_apg: 0.5,
        player_rpg: 1.6
      },
      {
        player_first_name: 'Ish',
        player_last_name: 'Smith',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202397.png',
        player_ppg: 2.5,
        player_apg: 2.3,
        player_rpg: 1.3
      },
      {
        player_first_name: 'Jack',
        player_last_name: 'White',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631298.png',
        player_ppg: 1.2,
        player_apg: 0.2,
        player_rpg: 1.0
      }
    ]
  },
  {
    team_name: 'Detroit Pistons',
    team_conference: 'East',
    team_img: 'https://cdn.nba.com/logos/nba/1610612765/primary/D/logo.svg',
    stats: {
      team_wins: 17,
      team_losses: 65,
      team_rank: 15,
      team_pts: 9045,
      team_ast: 1884,
      team_reb: 3480,
      team_stl: 574,
      team_blk: 308,
      team_fg_pct: 0.454
    },
    accolades: {
      team_championships: 3,
      team_conference_championships: 5,
      team_divisions: 12,
      team_playoffs: 42
    },
    players: [
      {
        player_first_name: 'Bojan',
        player_last_name: 'Bogdanovic',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202711.png',
        player_ppg: 21.6,
        player_apg: 2.6,
        player_rpg: 3.8
      },
      {
        player_first_name: 'Cade',
        player_last_name: 'Cunningham',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630595.png',
        player_ppg: 19.9,
        player_apg: 6.0,
        player_rpg: 6.2
      },
      {
        player_first_name: 'Jaden',
        player_last_name: 'Ivey',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631093.png',
        player_ppg: 16.3,
        player_apg: 5.2,
        player_rpg: 3.9
      },
      {
        player_first_name: 'Alec',
        player_last_name: 'Burks',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202692.png',
        player_ppg: 12.8,
        player_apg: 2.2,
        player_rpg: 3.1
      },
      {
        player_first_name: 'Marvin',
        player_last_name: 'Bagley III',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628963.png',
        player_ppg: 12.0,
        player_apg: 0.9,
        player_rpg: 6.4
      },
      {
        player_first_name: 'Isaiah',
        player_last_name: 'Stewart',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630191.png',
        player_ppg: 11.3,
        player_apg: 1.4,
        player_rpg: 8.1
      },
      {
        player_first_name: 'Killian',
        player_last_name: 'Hayes',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630165.png',
        player_ppg: 10.3,
        player_apg: 6.2,
        player_rpg: 2.9
      },
      {
        player_first_name: 'James',
        player_last_name: 'Wiseman',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630164.png',
        player_ppg: 10.0,
        player_apg: 0.7,
        player_rpg: 5.9
      },
      {
        player_first_name: 'Hamidou',
        player_last_name: 'Diallo',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628977.png',
        player_ppg: 9.3,
        player_apg: 1.0,
        player_rpg: 3.5
      },
      {
        player_first_name: 'Jalen',
        player_last_name: 'Duren',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631105.png',
        player_ppg: 9.1,
        player_apg: 1.1,
        player_rpg: 8.9
      },
      {
        player_first_name: 'Eugene',
        player_last_name: 'Omoruyi',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630647.png',
        player_ppg: 7.0,
        player_apg: 0.7,
        player_rpg: 2.8
      },
      {
        player_first_name: 'Cory',
        player_last_name: 'Joseph',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202709.png',
        player_ppg: 6.9,
        player_apg: 3.5,
        player_rpg: 1.7
      },
      {
        player_first_name: 'Isaiah',
        player_last_name: 'Livers',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630587.png',
        player_ppg: 6.7,
        player_apg: 0.8,
        player_rpg: 2.8
      },
      {
        player_first_name: 'R.J.',
        player_last_name: 'Hampton',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630181.png',
        player_ppg: 6.4,
        player_apg: 1.1,
        player_rpg: 1.9
      },
      {
        player_first_name: 'Rodney',
        player_last_name: 'McGruder',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203585.png',
        player_ppg: 5.7,
        player_apg: 0.9,
        player_rpg: 2.3
      },
      {
        player_first_name: 'Jared',
        player_last_name: 'Rhoden',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631197.png',
        player_ppg: 3.2,
        player_apg: 0.3,
        player_rpg: 2.6
      },
      {
        player_first_name: 'Buddy',
        player_last_name: 'Boeheim',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631205.png',
        player_ppg: 1.6,
        player_apg: 0.4,
        player_rpg: 0.6
      }
    ]
  },
  {
    team_name: 'Golden State Warriors',
    team_conference: 'West',
    team_img: 'https://cdn.nba.com/logos/nba/1610612744/primary/D/logo.svg',
    stats: {
      team_wins: 44,
      team_losses: 38,
      team_rank: 6,
      team_pts: 9753,
      team_ast: 2446,
      team_reb: 3657,
      team_stl: 588,
      team_blk: 323,
      team_fg_pct: 0.479
    },
    accolades: {
      team_championships: 7,
      team_conference_championships: 7,
      team_divisions: 12,
      team_playoffs: 37
    },
    players: [
      {
        player_first_name: 'Stephen',
        player_last_name: 'Curry',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png',
        player_ppg: 29.4,
        player_apg: 6.3,
        player_rpg: 6.1
      },
      {
        player_first_name: 'Klay',
        player_last_name: 'Thompson',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202691.png',
        player_ppg: 21.9,
        player_apg: 2.4,
        player_rpg: 4.1
      },
      {
        player_first_name: 'Jordan',
        player_last_name: 'Poole',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629673.png',
        player_ppg: 20.4,
        player_apg: 4.5,
        player_rpg: 2.7
      },
      {
        player_first_name: 'Andrew',
        player_last_name: 'Wiggins',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203952.png',
        player_ppg: 17.1,
        player_apg: 2.3,
        player_rpg: 5.0
      },
      {
        player_first_name: 'Jonathan',
        player_last_name: 'Kuminga',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630228.png',
        player_ppg: 9.9,
        player_apg: 1.9,
        player_rpg: 3.4
      },
      {
        player_first_name: 'Donte',
        player_last_name: 'DiVincenzo',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628978.png',
        player_ppg: 9.4,
        player_apg: 3.5,
        player_rpg: 4.5
      },
      {
        player_first_name: 'Draymond',
        player_last_name: 'Green',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203110.png',
        player_ppg: 8.5,
        player_apg: 6.8,
        player_rpg: 7.2
      },
      {
        player_first_name: 'Kevon',
        player_last_name: 'Looney',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626172.png',
        player_ppg: 7.0,
        player_apg: 2.5,
        player_rpg: 9.3
      },
      {
        player_first_name: 'Ty',
        player_last_name: 'Jerome',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629660.png',
        player_ppg: 6.9,
        player_apg: 3.0,
        player_rpg: 1.7
      },
      {
        player_first_name: 'Anthony',
        player_last_name: 'Lamb',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630237.png',
        player_ppg: 6.7,
        player_apg: 1.5,
        player_rpg: 3.5
      },
      {
        player_first_name: 'JaMychal',
        player_last_name: 'Green',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203210.png',
        player_ppg: 6.4,
        player_apg: 0.9,
        player_rpg: 3.6
      },
      {
        player_first_name: 'Moses',
        player_last_name: 'Moody',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630541.png',
        player_ppg: 4.8,
        player_apg: 0.8,
        player_rpg: 1.7
      },
      {
        player_first_name: 'Gary',
        player_last_name: 'Payton II',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627780.png',
        player_ppg: 4.6,
        player_apg: 1.4,
        player_rpg: 3.1
      },
      {
        player_first_name: 'Patrick',
        player_last_name: 'Baldwin Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631116.png',
        player_ppg: 3.9,
        player_apg: 0.4,
        player_rpg: 1.3
      },
      {
        player_first_name: 'Lester',
        player_last_name: 'Quinones',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631311.png',
        player_ppg: 2.5,
        player_apg: 0.5,
        player_rpg: 0.8
      },
      {
        player_first_name: 'Andre',
        player_last_name: 'Iguodala',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2738.png',
        player_ppg: 2.1,
        player_apg: 2.4,
        player_rpg: 2.1
      },
      {
        player_first_name: 'Ryan',
        player_last_name: 'Rollins',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631157.png',
        player_ppg: 1.9,
        player_apg: 0.5,
        player_rpg: 1.0
      }
    ]
  },
  {
    team_name: 'Houston Rockets',
    team_conference: 'West',
    team_img: 'https://cdn.nba.com/logos/nba/1610612745/primary/D/logo.svg',
    stats: {
      team_wins: 22,
      team_losses: 60,
      team_rank: 14,
      team_pts: 9081,
      team_ast: 1835,
      team_reb: 3795,
      team_stl: 600,
      team_blk: 374,
      team_fg_pct: 0.457
    },
    accolades: {
      team_championships: 2,
      team_conference_championships: 4,
      team_divisions: 8,
      team_playoffs: 34
    },
    players: [
      {
        player_first_name: 'Jalen',
        player_last_name: 'Green',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630224.png',
        player_ppg: 22.1,
        player_apg: 3.7,
        player_rpg: 3.7
      },
      {
        player_first_name: 'Kevin',
        player_last_name: 'Porter Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629645.png',
        player_ppg: 19.2,
        player_apg: 5.7,
        player_rpg: 5.3
      },
      {
        player_first_name: 'Alperen',
        player_last_name: 'Sengun',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630578.png',
        player_ppg: 14.8,
        player_apg: 3.9,
        player_rpg: 9.0
      },
      {
        player_first_name: 'Jabari',
        player_last_name: 'Smith Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631095.png',
        player_ppg: 12.8,
        player_apg: 1.3,
        player_rpg: 7.2
      },
      {
        player_first_name: 'Kenyon',
        player_last_name: 'Martin Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630231.png',
        player_ppg: 12.7,
        player_apg: 1.5,
        player_rpg: 5.5
      },
      {
        player_first_name: 'Tari',
        player_last_name: 'Eason',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631106.png',
        player_ppg: 9.3,
        player_apg: 1.1,
        player_rpg: 6.0
      },
      {
        player_first_name: "Jae'Sean",
        player_last_name: 'Tate',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630256.png',
        player_ppg: 9.1,
        player_apg: 2.7,
        player_rpg: 3.8
      },
      {
        player_first_name: 'Josh',
        player_last_name: 'Christopher',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630528.png',
        player_ppg: 5.8,
        player_apg: 1.1,
        player_rpg: 1.1
      },
      {
        player_first_name: 'D.J.',
        player_last_name: 'Augustin',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201571.png',
        player_ppg: 5.3,
        player_apg: 1.9,
        player_rpg: 1.2
      },
      {
        player_first_name: 'TyTy',
        player_last_name: 'Washington Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631102.png',
        player_ppg: 4.7,
        player_apg: 1.5,
        player_rpg: 1.5
      },
      {
        player_first_name: 'Daishen',
        player_last_name: 'Nix',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630227.png',
        player_ppg: 4.0,
        player_apg: 2.3,
        player_rpg: 1.7
      },
      {
        player_first_name: 'Darius',
        player_last_name: 'Days',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630620.png',
        player_ppg: 3.8,
        player_apg: 0.2,
        player_rpg: 1.5
      },
      {
        player_first_name: 'Boban',
        player_last_name: 'Marjanovic',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626246.png',
        player_ppg: 3.3,
        player_apg: 0.3,
        player_rpg: 1.9
      },
      {
        player_first_name: 'Usman',
        player_last_name: 'Garuba',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630586.png',
        player_ppg: 3.0,
        player_apg: 0.9,
        player_rpg: 4.1
      },
      {
        player_first_name: 'Frank',
        player_last_name: 'Kaminsky',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626163.png',
        player_ppg: 2.5,
        player_apg: 0.9,
        player_rpg: 1.4
      },
      {
        player_first_name: 'Trevor',
        player_last_name: 'Hudgins',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631309.png',
        player_ppg: 1.8,
        player_apg: 0.6,
        player_rpg: 0.0
      },
      {
        player_first_name: 'Willie',
        player_last_name: 'Cauley-Stein',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626161.png',
        player_ppg: 1.7,
        player_apg: 0.5,
        player_rpg: 2.0
      }
    ]
  },
  {
    team_name: 'Indiana Pacers',
    team_conference: 'East',
    team_img: 'https://cdn.nba.com/logos/nba/1610612754/primary/D/logo.svg',
    stats: {
      team_wins: 35,
      team_losses: 47,
      team_rank: 11,
      team_pts: 9535,
      team_ast: 2213,
      team_reb: 3407,
      team_stl: 631,
      team_blk: 478,
      team_fg_pct: 0.469
    },
    accolades: {
      team_championships: 0,
      team_conference_championships: 1,
      team_divisions: 6,
      team_playoffs: 27
    },
    players: [
      {
        player_first_name: 'Tyrese',
        player_last_name: 'Haliburton',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630169.png',
        player_ppg: 20.7,
        player_apg: 10.4,
        player_rpg: 3.7
      },
      {
        player_first_name: 'Myles',
        player_last_name: 'Turner',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626167.png',
        player_ppg: 18.0,
        player_apg: 1.4,
        player_rpg: 7.5
      },
      {
        player_first_name: 'Buddy',
        player_last_name: 'Hield',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627741.png',
        player_ppg: 16.8,
        player_apg: 2.8,
        player_rpg: 5.0
      },
      {
        player_first_name: 'Bennedict',
        player_last_name: 'Mathurin',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631097.png',
        player_ppg: 16.7,
        player_apg: 1.5,
        player_rpg: 4.1
      },
      {
        player_first_name: 'Aaron',
        player_last_name: 'Nesmith',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630174.png',
        player_ppg: 10.1,
        player_apg: 1.3,
        player_rpg: 3.8
      },
      {
        player_first_name: 'Andrew',
        player_last_name: 'Nembhard',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629614.png',
        player_ppg: 9.5,
        player_apg: 4.5,
        player_rpg: 2.7
      },
      {
        player_first_name: 'Jalen',
        player_last_name: 'Smith',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630188.png',
        player_ppg: 9.4,
        player_apg: 1.0,
        player_rpg: 5.8
      },
      {
        player_first_name: 'T.J.',
        player_last_name: 'McConnell',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/204456.png',
        player_ppg: 8.7,
        player_apg: 5.3,
        player_rpg: 3.1
      },
      {
        player_first_name: 'Jordan',
        player_last_name: 'Nwora',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629670.png',
        player_ppg: 8.7,
        player_apg: 1.4,
        player_rpg: 3.7
      },
      {
        player_first_name: 'Gabe',
        player_last_name: 'York',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628221.png',
        player_ppg: 8.0,
        player_apg: 1.7,
        player_rpg: 2.0
      },
      {
        player_first_name: 'Chris',
        player_last_name: 'Duarte',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630537.png',
        player_ppg: 7.9,
        player_apg: 1.4,
        player_rpg: 2.5
      },
      {
        player_first_name: 'Isaiah',
        player_last_name: 'Jackson',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630543.png',
        player_ppg: 7.2,
        player_apg: 0.8,
        player_rpg: 4.5
      },
      {
        player_first_name: 'Daniel',
        player_last_name: 'Theis',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628464.png',
        player_ppg: 7.0,
        player_apg: 1.3,
        player_rpg: 3.1
      },
      {
        player_first_name: 'Oshae',
        player_last_name: 'Brissett',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629052.png',
        player_ppg: 6.1,
        player_apg: 0.7,
        player_rpg: 3.4
      },
      {
        player_first_name: 'George',
        player_last_name: 'Hill',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201588.png',
        player_ppg: 5.0,
        player_apg: 2.4,
        player_rpg: 1.8
      },
      {
        player_first_name: 'James',
        player_last_name: 'Johnson',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201949.png',
        player_ppg: 2.8,
        player_apg: 0.8,
        player_rpg: 1.7
      },
      {
        player_first_name: 'Kendall',
        player_last_name: 'Brown',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631112.png',
        player_ppg: 1.5,
        player_apg: 0.5,
        player_rpg: 1.0
      }
    ]
  },
  {
    team_name: 'LA Clippers',
    team_conference: 'West',
    team_img: 'https://cdn.nba.com/logos/nba/1610612746/primary/D/logo.svg',
    stats: {
      team_wins: 44,
      team_losses: 38,
      team_rank: 5,
      team_pts: 9314,
      team_ast: 1959,
      team_reb: 3545,
      team_stl: 580,
      team_blk: 364,
      team_fg_pct: 0.477
    },
    accolades: {
      team_championships: 0,
      team_conference_championships: 0,
      team_divisions: 2,
      team_playoffs: 17
    },
    players: [
      {
        player_first_name: 'Kawhi',
        player_last_name: 'Leonard',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202695.png',
        player_ppg: 23.8,
        player_apg: 3.9,
        player_rpg: 6.5
      },
      {
        player_first_name: 'Paul',
        player_last_name: 'George',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202331.png',
        player_ppg: 23.8,
        player_apg: 5.1,
        player_rpg: 6.1
      },
      {
        player_first_name: 'Norman',
        player_last_name: 'Powell',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626181.png',
        player_ppg: 17.0,
        player_apg: 1.8,
        player_rpg: 2.9
      },
      {
        player_first_name: 'Russell',
        player_last_name: 'Westbrook',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201566.png',
        player_ppg: 15.9,
        player_apg: 7.5,
        player_rpg: 5.8
      },
      {
        player_first_name: 'Eric',
        player_last_name: 'Gordon',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201569.png',
        player_ppg: 12.4,
        player_apg: 2.7,
        player_rpg: 1.9
      },
      {
        player_first_name: 'Bones',
        player_last_name: 'Hyland',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630538.png',
        player_ppg: 11.8,
        player_apg: 3.1,
        player_rpg: 2.4
      },
      {
        player_first_name: 'Marcus',
        player_last_name: 'Morris Sr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202694.png',
        player_ppg: 11.2,
        player_apg: 1.8,
        player_rpg: 4.0
      },
      {
        player_first_name: 'Ivica',
        player_last_name: 'Zubac',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627826.png',
        player_ppg: 10.8,
        player_apg: 1.0,
        player_rpg: 9.9
      },
      {
        player_first_name: 'Mason',
        player_last_name: 'Plumlee',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203486.png',
        player_ppg: 10.8,
        player_apg: 3.1,
        player_rpg: 8.9
      },
      {
        player_first_name: 'Terance',
        player_last_name: 'Mann',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629611.png',
        player_ppg: 8.8,
        player_apg: 2.3,
        player_rpg: 3.4
      },
      {
        player_first_name: 'Brandon',
        player_last_name: 'Boston Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630527.png',
        player_ppg: 6.5,
        player_apg: 0.9,
        player_rpg: 1.4
      },
      {
        player_first_name: 'Nicolas',
        player_last_name: 'Batum',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201587.png',
        player_ppg: 6.1,
        player_apg: 1.6,
        player_rpg: 3.8
      },
      {
        player_first_name: 'Robert',
        player_last_name: 'Covington',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203496.png',
        player_ppg: 6.0,
        player_apg: 1.2,
        player_rpg: 3.5
      },
      {
        player_first_name: 'Amir',
        player_last_name: 'Coffey',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629599.png',
        player_ppg: 3.4,
        player_apg: 1.1,
        player_rpg: 1.1
      },
      {
        player_first_name: 'Jason',
        player_last_name: 'Preston',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630554.png',
        player_ppg: 2.9,
        player_apg: 1.9,
        player_rpg: 1.6
      },
      {
        player_first_name: 'Moussa',
        player_last_name: 'Diabate',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631217.png',
        player_ppg: 2.7,
        player_apg: 0.2,
        player_rpg: 2.3
      },
      {
        player_first_name: 'Xavier',
        player_last_name: 'Moon',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629875.png',
        player_ppg: 1.8,
        player_apg: 1.2,
        player_rpg: 0.8
      }
    ]
  },
  {
    team_name: 'Los Angeles Lakers',
    team_conference: 'West',
    team_img: 'https://cdn.nba.com/logos/nba/1610612747/primary/D/logo.svg',
    stats: {
      team_wins: 43,
      team_losses: 39,
      team_rank: 7,
      team_pts: 9608,
      team_ast: 2072,
      team_reb: 3748,
      team_stl: 526,
      team_blk: 378,
      team_fg_pct: 0.482
    },
    accolades: {
      team_championships: 17,
      team_conference_championships: 19,
      team_divisions: 35,
      team_playoffs: 63
    },
    players: [
      {
        player_first_name: 'LeBron',
        player_last_name: 'James',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
        player_ppg: 28.9,
        player_apg: 6.8,
        player_rpg: 8.3
      },
      {
        player_first_name: 'Anthony',
        player_last_name: 'Davis',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203076.png',
        player_ppg: 25.9,
        player_apg: 2.6,
        player_rpg: 12.5
      },
      {
        player_first_name: "D'Angelo",
        player_last_name: 'Russell',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626156.png',
        player_ppg: 17.8,
        player_apg: 6.2,
        player_rpg: 3.0
      },
      {
        player_first_name: 'Austin',
        player_last_name: 'Reaves',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630559.png',
        player_ppg: 13.0,
        player_apg: 3.4,
        player_rpg: 3.0
      },
      {
        player_first_name: 'Malik',
        player_last_name: 'Beasley',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627736.png',
        player_ppg: 12.7,
        player_apg: 1.5,
        player_rpg: 3.5
      },
      {
        player_first_name: 'Dennis',
        player_last_name: 'Schroder',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203471.png',
        player_ppg: 12.4,
        player_apg: 4.4,
        player_rpg: 2.5
      },
      {
        player_first_name: 'Lonnie',
        player_last_name: 'Walker IV',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629022.png',
        player_ppg: 11.7,
        player_apg: 1.1,
        player_rpg: 1.9
      },
      {
        player_first_name: 'Rui',
        player_last_name: 'Hachimura',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629060.png',
        player_ppg: 11.2,
        player_apg: 0.9,
        player_rpg: 4.5
      },
      {
        player_first_name: 'Shaquille',
        player_last_name: 'Harrison',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627885.png',
        player_ppg: 8.8,
        player_apg: 6.0,
        player_rpg: 4.4
      },
      {
        player_first_name: 'Jarred',
        player_last_name: 'Vanderbilt',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629020.png',
        player_ppg: 7.9,
        player_apg: 2.4,
        player_rpg: 7.5
      },
      {
        player_first_name: 'Troy',
        player_last_name: 'Brown Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628972.png',
        player_ppg: 7.1,
        player_apg: 1.2,
        player_rpg: 4.1
      },
      {
        player_first_name: 'Mo',
        player_last_name: 'Bamba',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628964.png',
        player_ppg: 6.6,
        player_apg: 0.9,
        player_rpg: 4.6
      },
      {
        player_first_name: 'Tristan',
        player_last_name: 'Thompson',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202684.png',
        player_ppg: 6.0,
        player_apg: 0.6,
        player_rpg: 5.1
      },
      {
        player_first_name: 'Wenyen',
        player_last_name: 'Gabriel',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629117.png',
        player_ppg: 5.5,
        player_apg: 0.5,
        player_rpg: 4.2
      },
      {
        player_first_name: 'Max',
        player_last_name: 'Christie',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631108.png',
        player_ppg: 3.1,
        player_apg: 0.5,
        player_rpg: 1.8
      },
      {
        player_first_name: 'Scotty',
        player_last_name: 'Pippen Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630590.png',
        player_ppg: 2.3,
        player_apg: 0.3,
        player_rpg: 0.7
      },
      {
        player_first_name: 'Cole',
        player_last_name: 'Swider',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631306.png',
        player_ppg: 1.3,
        player_apg: 0.6,
        player_rpg: 1.0
      }
    ]
  },
  {
    team_name: 'Memphis Grizzlies',
    team_conference: 'West',
    team_img: 'https://cdn.nba.com/logos/nba/1610612763/primary/D/logo.svg',
    stats: {
      team_wins: 51,
      team_losses: 31,
      team_rank: 2,
      team_pts: 9587,
      team_ast: 2135,
      team_reb: 3823,
      team_stl: 680,
      team_blk: 473,
      team_fg_pct: 0.475
    },
    accolades: {
      team_championships: 0,
      team_conference_championships: 0,
      team_divisions: 2,
      team_playoffs: 13
    },
    players: [
      {
        player_first_name: 'Ja',
        player_last_name: 'Morant',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629630.png',
        player_ppg: 26.2,
        player_apg: 8.1,
        player_rpg: 5.9
      },
      {
        player_first_name: 'Desmond',
        player_last_name: 'Bane',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630217.png',
        player_ppg: 21.5,
        player_apg: 4.4,
        player_rpg: 5.0
      },
      {
        player_first_name: 'Jaren',
        player_last_name: 'Jackson Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628991.png',
        player_ppg: 18.6,
        player_apg: 1.0,
        player_rpg: 6.8
      },
      {
        player_first_name: 'Dillon',
        player_last_name: 'Brooks',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628415.png',
        player_ppg: 14.3,
        player_apg: 2.6,
        player_rpg: 3.3
      },
      {
        player_first_name: 'Tyus',
        player_last_name: 'Jones',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626145.png',
        player_ppg: 10.3,
        player_apg: 5.2,
        player_rpg: 2.5
      },
      {
        player_first_name: 'Brandon',
        player_last_name: 'Clarke',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629634.png',
        player_ppg: 10.0,
        player_apg: 1.3,
        player_rpg: 5.5
      },
      {
        player_first_name: 'Luke',
        player_last_name: 'Kennard',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628379.png',
        player_ppg: 9.3,
        player_apg: 1.5,
        player_rpg: 2.7
      },
      {
        player_first_name: 'Santi',
        player_last_name: 'Aldama',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630583.png',
        player_ppg: 9.0,
        player_apg: 1.3,
        player_rpg: 4.8
      },
      {
        player_first_name: 'Steven',
        player_last_name: 'Adams',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203500.png',
        player_ppg: 8.6,
        player_apg: 2.3,
        player_rpg: 11.5
      },
      {
        player_first_name: 'Xavier',
        player_last_name: 'Tillman',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630214.png',
        player_ppg: 7.0,
        player_apg: 1.6,
        player_rpg: 5.0
      },
      {
        player_first_name: 'David',
        player_last_name: 'Roddy',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631223.png',
        player_ppg: 6.7,
        player_apg: 0.8,
        player_rpg: 2.8
      },
      {
        player_first_name: 'Ziaire',
        player_last_name: 'Williams',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630533.png',
        player_ppg: 5.7,
        player_apg: 0.9,
        player_rpg: 2.1
      },
      {
        player_first_name: 'John',
        player_last_name: 'Konchar',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629723.png',
        player_ppg: 5.1,
        player_apg: 1.4,
        player_rpg: 4.3
      },
      {
        player_first_name: 'Kenneth',
        player_last_name: 'Lofton Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631254.png',
        player_ppg: 5.0,
        player_apg: 0.8,
        player_rpg: 2.1
      },
      {
        player_first_name: 'Jake',
        player_last_name: 'LaRavia',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631222.png',
        player_ppg: 3.0,
        player_apg: 0.6,
        player_rpg: 1.8
      },
      {
        player_first_name: 'Vince',
        player_last_name: 'Williams Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631246.png',
        player_ppg: 2.0,
        player_apg: 0.3,
        player_rpg: 1.0
      }
    ]
  },
  {
    team_name: 'Miami Heat',
    team_conference: 'East',
    team_img: 'https://cdn.nba.com/logos/nba/1610612748/primary/D/logo.svg',
    stats: {
      team_wins: 44,
      team_losses: 38,
      team_rank: 8,
      team_pts: 8977,
      team_ast: 1955,
      team_reb: 3329,
      team_stl: 655,
      team_blk: 243,
      team_fg_pct: 0.46
    },
    accolades: {
      team_championships: 3,
      team_conference_championships: 6,
      team_divisions: 16,
      team_playoffs: 24
    },
    players: [
      {
        player_first_name: 'Jimmy',
        player_last_name: 'Butler',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202710.png',
        player_ppg: 22.9,
        player_apg: 5.3,
        player_rpg: 5.9
      },
      {
        player_first_name: 'Bam',
        player_last_name: 'Adebayo',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628389.png',
        player_ppg: 20.4,
        player_apg: 3.2,
        player_rpg: 9.2
      },
      {
        player_first_name: 'Tyler',
        player_last_name: 'Herro',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629639.png',
        player_ppg: 20.1,
        player_apg: 4.2,
        player_rpg: 5.4
      },
      {
        player_first_name: 'Max',
        player_last_name: 'Strus',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629622.png',
        player_ppg: 11.5,
        player_apg: 2.1,
        player_rpg: 3.2
      },
      {
        player_first_name: 'Kyle',
        player_last_name: 'Lowry',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/200768.png',
        player_ppg: 11.2,
        player_apg: 5.1,
        player_rpg: 4.1
      },
      {
        player_first_name: 'Victor',
        player_last_name: 'Oladipo',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203506.png',
        player_ppg: 10.7,
        player_apg: 3.5,
        player_rpg: 3.0
      },
      {
        player_first_name: 'Caleb',
        player_last_name: 'Martin',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628997.png',
        player_ppg: 9.6,
        player_apg: 1.6,
        player_rpg: 4.8
      },
      {
        player_first_name: 'Gabe',
        player_last_name: 'Vincent',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629216.png',
        player_ppg: 9.4,
        player_apg: 2.5,
        player_rpg: 2.1
      },
      {
        player_first_name: 'Kevin',
        player_last_name: 'Love',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201567.png',
        player_ppg: 8.2,
        player_apg: 1.9,
        player_rpg: 6.4
      },
      {
        player_first_name: 'Cody',
        player_last_name: 'Zeller',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203469.png',
        player_ppg: 6.5,
        player_apg: 0.7,
        player_rpg: 4.3
      },
      {
        player_first_name: 'Duncan',
        player_last_name: 'Robinson',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629130.png',
        player_ppg: 6.4,
        player_apg: 1.1,
        player_rpg: 1.6
      },
      {
        player_first_name: 'Nikola',
        player_last_name: 'Jovic',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631107.png',
        player_ppg: 5.5,
        player_apg: 0.7,
        player_rpg: 2.1
      },
      {
        player_first_name: 'Jamal',
        player_last_name: 'Cain',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631288.png',
        player_ppg: 5.4,
        player_apg: 0.7,
        player_rpg: 2.9
      },
      {
        player_first_name: 'Haywood',
        player_last_name: 'Highsmith',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629312.png',
        player_ppg: 4.4,
        player_apg: 0.8,
        player_rpg: 3.5
      },
      {
        player_first_name: 'Omer',
        player_last_name: 'Yurtseven',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630209.png',
        player_ppg: 4.4,
        player_apg: 0.2,
        player_rpg: 2.6
      },
      {
        player_first_name: 'Udonis',
        player_last_name: 'Haslem',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2617.png',
        player_ppg: 3.9,
        player_apg: 0.0,
        player_rpg: 1.6
      },
      {
        player_first_name: 'Orlando',
        player_last_name: 'Robinson',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631115.png',
        player_ppg: 3.7,
        player_apg: 0.8,
        player_rpg: 4.1
      }
    ]
  },
  {
    team_name: 'Milwaukee Bucks',
    team_conference: 'East',
    team_img: 'https://cdn.nba.com/logos/nba/1610612749/primary/D/logo.svg',
    stats: {
      team_wins: 58,
      team_losses: 24,
      team_rank: 1,
      team_pts: 9589,
      team_ast: 2115,
      team_reb: 3988,
      team_stl: 521,
      team_blk: 403,
      team_fg_pct: 0.473
    },
    accolades: {
      team_championships: 2,
      team_conference_championships: 3,
      team_divisions: 18,
      team_playoffs: 35
    },
    players: [
      {
        player_first_name: 'Giannis',
        player_last_name: 'Antetokounmpo',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png',
        player_ppg: 31.1,
        player_apg: 5.7,
        player_rpg: 11.8
      },
      {
        player_first_name: 'Jrue',
        player_last_name: 'Holiday',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201950.png',
        player_ppg: 19.3,
        player_apg: 7.4,
        player_rpg: 5.1
      },
      {
        player_first_name: 'Brook',
        player_last_name: 'Lopez',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201572.png',
        player_ppg: 15.9,
        player_apg: 1.3,
        player_rpg: 6.7
      },
      {
        player_first_name: 'Khris',
        player_last_name: 'Middleton',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203114.png',
        player_ppg: 15.1,
        player_apg: 4.9,
        player_rpg: 4.2
      },
      {
        player_first_name: 'Bobby',
        player_last_name: 'Portis',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626171.png',
        player_ppg: 14.1,
        player_apg: 1.5,
        player_rpg: 9.6
      },
      {
        player_first_name: 'Grayson',
        player_last_name: 'Allen',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628960.png',
        player_ppg: 10.4,
        player_apg: 2.3,
        player_rpg: 3.3
      },
      {
        player_first_name: 'Jevon',
        player_last_name: 'Carter',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628975.png',
        player_ppg: 8.0,
        player_apg: 2.4,
        player_rpg: 2.5
      },
      {
        player_first_name: 'Pat',
        player_last_name: 'Connaughton',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626192.png',
        player_ppg: 7.6,
        player_apg: 1.3,
        player_rpg: 4.6
      },
      {
        player_first_name: 'Lindell',
        player_last_name: 'Wigginton',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629623.png',
        player_ppg: 7.1,
        player_apg: 2.0,
        player_rpg: 1.0
      },
      {
        player_first_name: 'Joe',
        player_last_name: 'Ingles',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/204060.png',
        player_ppg: 6.9,
        player_apg: 3.3,
        player_rpg: 2.8
      },
      {
        player_first_name: 'Jae',
        player_last_name: 'Crowder',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203109.png',
        player_ppg: 6.9,
        player_apg: 1.5,
        player_rpg: 3.8
      },
      {
        player_first_name: 'Goran',
        player_last_name: 'Dragic',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201609.png',
        player_ppg: 6.3,
        player_apg: 2.6,
        player_rpg: 1.4
      },
      {
        player_first_name: 'MarJon',
        player_last_name: 'Beauchamp',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630699.png',
        player_ppg: 5.1,
        player_apg: 0.7,
        player_rpg: 2.2
      },
      {
        player_first_name: 'Meyers',
        player_last_name: 'Leonard',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203086.png',
        player_ppg: 4.8,
        player_apg: 0.1,
        player_rpg: 3.8
      },
      {
        player_first_name: 'AJ',
        player_last_name: 'Green',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631260.png',
        player_ppg: 4.4,
        player_apg: 0.6,
        player_rpg: 1.3
      },
      {
        player_first_name: 'Wesley',
        player_last_name: 'Matthews',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202083.png',
        player_ppg: 3.4,
        player_apg: 0.7,
        player_rpg: 2.2
      },
      {
        player_first_name: 'Thanasis',
        player_last_name: 'Antetokounmpo',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203648.png',
        player_ppg: 1.4,
        player_apg: 0.4,
        player_rpg: 1.2
      }
    ]
  },
  {
    team_name: 'Minnesota Timberwolves',
    team_conference: 'West',
    team_img: 'https://cdn.nba.com/logos/nba/1610612750/primary/D/logo.svg',
    stats: {
      team_wins: 42,
      team_losses: 40,
      team_rank: 8,
      team_pts: 9494,
      team_ast: 2145,
      team_reb: 3435,
      team_stl: 657,
      team_blk: 444,
      team_fg_pct: 0.49
    },
    accolades: {
      team_championships: 0,
      team_conference_championships: 0,
      team_divisions: 1,
      team_playoffs: 11
    },
    players: [
      {
        player_first_name: 'Anthony',
        player_last_name: 'Edwards',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630162.png',
        player_ppg: 24.6,
        player_apg: 4.4,
        player_rpg: 5.8
      },
      {
        player_first_name: 'Karl-Anthony',
        player_last_name: 'Towns',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626157.png',
        player_ppg: 20.8,
        player_apg: 4.8,
        player_rpg: 8.1
      },
      {
        player_first_name: 'Rudy',
        player_last_name: 'Gobert',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203497.png',
        player_ppg: 13.4,
        player_apg: 1.2,
        player_rpg: 11.6
      },
      {
        player_first_name: 'Jaden',
        player_last_name: 'McDaniels',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630183.png',
        player_ppg: 12.1,
        player_apg: 1.9,
        player_rpg: 3.9
      },
      {
        player_first_name: 'Mike',
        player_last_name: 'Conley',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201144.png',
        player_ppg: 11.9,
        player_apg: 6.7,
        player_rpg: 2.7
      },
      {
        player_first_name: 'Naz',
        player_last_name: 'Reid',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629675.png',
        player_ppg: 11.5,
        player_apg: 1.1,
        player_rpg: 4.9
      },
      {
        player_first_name: 'Jaylen',
        player_last_name: 'Nowell',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629669.png',
        player_ppg: 10.8,
        player_apg: 2.0,
        player_rpg: 2.6
      },
      {
        player_first_name: 'Kyle',
        player_last_name: 'Anderson',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203937.png',
        player_ppg: 9.4,
        player_apg: 4.9,
        player_rpg: 5.3
      },
      {
        player_first_name: 'Taurean',
        player_last_name: 'Prince',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627752.png',
        player_ppg: 9.1,
        player_apg: 1.6,
        player_rpg: 2.4
      },
      {
        player_first_name: 'Luka',
        player_last_name: 'Garza',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630568.png',
        player_ppg: 6.5,
        player_apg: 0.6,
        player_rpg: 2.2
      },
      {
        player_first_name: 'Nickeil',
        player_last_name: 'Alexander-Walker',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629638.png',
        player_ppg: 6.2,
        player_apg: 1.8,
        player_rpg: 1.7
      },
      {
        player_first_name: 'Austin',
        player_last_name: 'Rivers',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203085.png',
        player_ppg: 4.9,
        player_apg: 1.4,
        player_rpg: 1.6
      },
      {
        player_first_name: 'Jordan',
        player_last_name: 'McLaughlin',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629162.png',
        player_ppg: 3.7,
        player_apg: 3.4,
        player_rpg: 1.4
      },
      {
        player_first_name: 'Nathan',
        player_last_name: 'Knight',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630233.png',
        player_ppg: 3.7,
        player_apg: 0.3,
        player_rpg: 1.5
      },
      {
        player_first_name: 'Matt',
        player_last_name: 'Ryan',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630346.png',
        player_ppg: 3.6,
        player_apg: 0.5,
        player_rpg: 0.8
      },
      {
        player_first_name: 'Josh',
        player_last_name: 'Minott',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631169.png',
        player_ppg: 3.1,
        player_apg: 0.3,
        player_rpg: 1.7
      },
      {
        player_first_name: 'Wendell',
        player_last_name: 'Moore Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631111.png',
        player_ppg: 1.4,
        player_apg: 0.6,
        player_rpg: 0.6
      }
    ]
  },
  {
    team_name: 'New Orleans Pelicans',
    team_conference: 'West',
    team_img: 'https://cdn.nba.com/logos/nba/1610612740/primary/D/logo.svg',
    stats: {
      team_wins: 42,
      team_losses: 40,
      team_rank: 9,
      team_pts: 9378,
      team_ast: 2122,
      team_reb: 3583,
      team_stl: 681,
      team_blk: 337,
      team_fg_pct: 0.48
    },
    accolades: {
      team_championships: 0,
      team_conference_championships: 0,
      team_divisions: 1,
      team_playoffs: 8
    },
    players: [
      {
        player_first_name: 'Zion',
        player_last_name: 'Williamson',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629627.png',
        player_ppg: 26.0,
        player_apg: 4.6,
        player_rpg: 7.0
      },
      {
        player_first_name: 'Brandon',
        player_last_name: 'Ingram',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627742.png',
        player_ppg: 24.7,
        player_apg: 5.8,
        player_rpg: 5.5
      },
      {
        player_first_name: 'CJ',
        player_last_name: 'McCollum',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203468.png',
        player_ppg: 20.9,
        player_apg: 5.7,
        player_rpg: 4.4
      },
      {
        player_first_name: 'Trey',
        player_last_name: 'Murphy III',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630530.png',
        player_ppg: 14.5,
        player_apg: 1.4,
        player_rpg: 3.6
      },
      {
        player_first_name: 'Jonas',
        player_last_name: 'Valanciunas',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202685.png',
        player_ppg: 14.1,
        player_apg: 1.8,
        player_rpg: 10.2
      },
      {
        player_first_name: 'Josh',
        player_last_name: 'Richardson',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626196.png',
        player_ppg: 10.1,
        player_apg: 2.7,
        player_rpg: 2.7
      },
      {
        player_first_name: 'Herbert',
        player_last_name: 'Jones',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630529.png',
        player_ppg: 9.8,
        player_apg: 2.5,
        player_rpg: 4.1
      },
      {
        player_first_name: 'Naji',
        player_last_name: 'Marshall',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630230.png',
        player_ppg: 9.1,
        player_apg: 2.5,
        player_rpg: 3.6
      },
      {
        player_first_name: 'Jose',
        player_last_name: 'Alvarado',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630631.png',
        player_ppg: 9.0,
        player_apg: 3.0,
        player_rpg: 2.3
      },
      {
        player_first_name: 'Willy',
        player_last_name: 'Hernangomez',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626195.png',
        player_ppg: 6.9,
        player_apg: 0.9,
        player_rpg: 4.7
      },
      {
        player_first_name: 'Larry',
        player_last_name: 'Nance Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626204.png',
        player_ppg: 6.8,
        player_apg: 1.8,
        player_rpg: 5.4
      },
      {
        player_first_name: 'Jaxson',
        player_last_name: 'Hayes',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629637.png',
        player_ppg: 5.0,
        player_apg: 0.7,
        player_rpg: 2.8
      },
      {
        player_first_name: 'Kira',
        player_last_name: 'Lewis Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630184.png',
        player_ppg: 4.6,
        player_apg: 0.9,
        player_rpg: 1.3
      },
      {
        player_first_name: 'Dyson',
        player_last_name: 'Daniels',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630700.png',
        player_ppg: 3.8,
        player_apg: 2.3,
        player_rpg: 3.2
      },
      {
        player_first_name: 'Garrett',
        player_last_name: 'Temple',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202066.png',
        player_ppg: 2.0,
        player_apg: 0.5,
        player_rpg: 0.7
      },
      {
        player_first_name: 'Dereon',
        player_last_name: 'Seabron',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631220.png',
        player_ppg: 0.8,
        player_apg: 0.0,
        player_rpg: 0.2
      }
    ]
  },
  {
    team_name: 'New York Knicks',
    team_conference: 'East',
    team_img: 'https://cdn.nba.com/logos/nba/1610612752/primary/D/logo.svg',
    stats: {
      team_wins: 47,
      team_losses: 35,
      team_rank: 5,
      team_pts: 9514,
      team_ast: 1880,
      team_reb: 3821,
      team_stl: 527,
      team_blk: 340,
      team_fg_pct: 0.47
    },
    accolades: {
      team_championships: 2,
      team_conference_championships: 4,
      team_divisions: 9,
      team_playoffs: 43
    },
    players: [
      {
        player_first_name: 'Julius',
        player_last_name: 'Randle',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203944.png',
        player_ppg: 25.1,
        player_apg: 4.1,
        player_rpg: 10.0
      },
      {
        player_first_name: 'Jalen',
        player_last_name: 'Brunson',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628973.png',
        player_ppg: 24.0,
        player_apg: 6.2,
        player_rpg: 3.5
      },
      {
        player_first_name: 'RJ',
        player_last_name: 'Barrett',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629628.png',
        player_ppg: 19.6,
        player_apg: 2.8,
        player_rpg: 5.0
      },
      {
        player_first_name: 'Immanuel',
        player_last_name: 'Quickley',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630193.png',
        player_ppg: 14.9,
        player_apg: 3.4,
        player_rpg: 4.2
      },
      {
        player_first_name: 'Quentin',
        player_last_name: 'Grimes',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629656.png',
        player_ppg: 11.3,
        player_apg: 2.1,
        player_rpg: 3.2
      },
      {
        player_first_name: 'Josh',
        player_last_name: 'Hart',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628404.png',
        player_ppg: 9.8,
        player_apg: 3.8,
        player_rpg: 7.8
      },
      {
        player_first_name: 'Duane',
        player_last_name: 'Washington Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630613.png',
        player_ppg: 7.9,
        player_apg: 2.0,
        player_rpg: 1.2
      },
      {
        player_first_name: 'Obi',
        player_last_name: 'Toppin',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630167.png',
        player_ppg: 7.4,
        player_apg: 1.0,
        player_rpg: 2.8
      },
      {
        player_first_name: 'Mitchell',
        player_last_name: 'Robinson',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629011.png',
        player_ppg: 7.4,
        player_apg: 0.9,
        player_rpg: 9.4
      },
      {
        player_first_name: 'Evan',
        player_last_name: 'Fournier',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203095.png',
        player_ppg: 6.1,
        player_apg: 1.3,
        player_rpg: 1.8
      },
      {
        player_first_name: 'Derrick',
        player_last_name: 'Rose',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201565.png',
        player_ppg: 5.6,
        player_apg: 1.7,
        player_rpg: 1.5
      },
      {
        player_first_name: 'Isaiah',
        player_last_name: 'Hartenstein',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628392.png',
        player_ppg: 5.0,
        player_apg: 1.2,
        player_rpg: 6.5
      },
      {
        player_first_name: 'Isaiah',
        player_last_name: 'Roby',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629676.png',
        player_ppg: 4.1,
        player_apg: 0.9,
        player_rpg: 2.5
      },
      {
        player_first_name: 'Miles',
        player_last_name: 'McBride',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630540.png',
        player_ppg: 3.5,
        player_apg: 1.1,
        player_rpg: 0.8
      },
      {
        player_first_name: 'Jericho',
        player_last_name: 'Sims',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630579.png',
        player_ppg: 3.4,
        player_apg: 0.5,
        player_rpg: 4.7
      },
      {
        player_first_name: 'Trevor',
        player_last_name: 'Keels',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631211.png',
        player_ppg: 1.0,
        player_apg: 0.0,
        player_rpg: 0.7
      },
      {
        player_first_name: 'DaQuan',
        player_last_name: 'Jeffries',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629610.png',
        player_ppg: 0.7,
        player_apg: 0.3,
        player_rpg: 0.7
      }
    ]
  },
  {
    team_name: 'Oklahoma City Thunder',
    team_conference: 'West',
    team_img: 'https://cdn.nba.com/logos/nba/1610612760/primary/D/logo.svg',
    stats: {
      team_wins: 40,
      team_losses: 42,
      team_rank: 10,
      team_pts: 9633,
      team_ast: 2002,
      team_reb: 3579,
      team_stl: 676,
      team_blk: 341,
      team_fg_pct: 0.465
    },
    accolades: {
      team_championships: 1,
      team_conference_championships: 4,
      team_divisions: 11,
      team_playoffs: 32
    },
    players: [
      {
        player_first_name: 'Shai',
        player_last_name: 'Gilgeous-Alexander',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628983.png',
        player_ppg: 31.4,
        player_apg: 5.5,
        player_rpg: 4.8
      },
      {
        player_first_name: 'Josh',
        player_last_name: 'Giddey',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630581.png',
        player_ppg: 16.6,
        player_apg: 6.2,
        player_rpg: 7.9
      },
      {
        player_first_name: 'Jalen',
        player_last_name: 'Williams',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631114.png',
        player_ppg: 14.1,
        player_apg: 3.3,
        player_rpg: 4.5
      },
      {
        player_first_name: 'Luguentz',
        player_last_name: 'Dort',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629652.png',
        player_ppg: 13.7,
        player_apg: 2.1,
        player_rpg: 4.6
      },
      {
        player_first_name: 'Isaiah',
        player_last_name: 'Joe',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630198.png',
        player_ppg: 9.5,
        player_apg: 1.2,
        player_rpg: 2.4
      },
      {
        player_first_name: 'Aleksej',
        player_last_name: 'Pokusevski',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630197.png',
        player_ppg: 8.1,
        player_apg: 1.9,
        player_rpg: 4.7
      },
      {
        player_first_name: 'Kenrich',
        player_last_name: 'Williams',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629026.png',
        player_ppg: 8.0,
        player_apg: 2.0,
        player_rpg: 4.9
      },
      {
        player_first_name: 'Tre',
        player_last_name: 'Mann',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630544.png',
        player_ppg: 7.7,
        player_apg: 1.8,
        player_rpg: 2.3
      },
      {
        player_first_name: 'Aaron',
        player_last_name: 'Wiggins',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630598.png',
        player_ppg: 6.8,
        player_apg: 1.1,
        player_rpg: 3.0
      },
      {
        player_first_name: 'Jeremiah',
        player_last_name: 'Robinson-Earl',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630526.png',
        player_ppg: 6.8,
        player_apg: 1.0,
        player_rpg: 4.2
      },
      {
        player_first_name: 'Dario',
        player_last_name: 'Saric',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203967.png',
        player_ppg: 6.4,
        player_apg: 1.3,
        player_rpg: 3.6
      },
      {
        player_first_name: 'Jared',
        player_last_name: 'Butler',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630215.png',
        player_ppg: 6.2,
        player_apg: 1.3,
        player_rpg: 0.7
      },
      {
        player_first_name: 'Jaylin',
        player_last_name: 'Williams',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631119.png',
        player_ppg: 5.9,
        player_apg: 1.6,
        player_rpg: 4.9
      },
      {
        player_first_name: 'Lindy',
        player_last_name: 'Waters III',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630322.png',
        player_ppg: 5.2,
        player_apg: 0.7,
        player_rpg: 1.8
      },
      {
        player_first_name: 'Ousmane',
        player_last_name: 'Dieng',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631172.png',
        player_ppg: 4.9,
        player_apg: 1.2,
        player_rpg: 2.7
      },
      {
        player_first_name: 'Olivier',
        player_last_name: 'Sarr',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630846.png',
        player_ppg: 4.0,
        player_apg: 0.4,
        player_rpg: 3.4
      }
    ]
  },
  {
    team_name: 'Orlando Magic',
    team_conference: 'East',
    team_img: 'https://cdn.nba.com/logos/nba/1610612753/primary/D/logo.svg',
    stats: {
      team_wins: 34,
      team_losses: 48,
      team_rank: 13,
      team_pts: 9136,
      team_ast: 1906,
      team_reb: 3546,
      team_stl: 603,
      team_blk: 382,
      team_fg_pct: 0.47
    },
    accolades: {
      team_championships: 0,
      team_conference_championships: 2,
      team_divisions: 7,
      team_playoffs: 16
    },
    players: [
      {
        player_first_name: 'Paolo',
        player_last_name: 'Banchero',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631094.png',
        player_ppg: 20.0,
        player_apg: 3.7,
        player_rpg: 6.9
      },
      {
        player_first_name: 'Franz',
        player_last_name: 'Wagner',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630532.png',
        player_ppg: 18.6,
        player_apg: 3.5,
        player_rpg: 4.1
      },
      {
        player_first_name: 'Wendell',
        player_last_name: 'Carter Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628976.png',
        player_ppg: 15.2,
        player_apg: 2.3,
        player_rpg: 8.7
      },
      {
        player_first_name: 'Markelle',
        player_last_name: 'Fultz',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628365.png',
        player_ppg: 14.0,
        player_apg: 5.7,
        player_rpg: 3.9
      },
      {
        player_first_name: 'Cole',
        player_last_name: 'Anthony',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630175.png',
        player_ppg: 13.0,
        player_apg: 3.9,
        player_rpg: 4.8
      },
      {
        player_first_name: 'Moritz',
        player_last_name: 'Wagner',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629021.png',
        player_ppg: 10.5,
        player_apg: 1.5,
        player_rpg: 4.5
      },
      {
        player_first_name: 'Jalen',
        player_last_name: 'Suggs',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630591.png',
        player_ppg: 9.9,
        player_apg: 2.9,
        player_rpg: 3.0
      },
      {
        player_first_name: 'Bol',
        player_last_name: 'Bol',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629626.png',
        player_ppg: 9.1,
        player_apg: 1.0,
        player_rpg: 5.8
      },
      {
        player_first_name: 'Gary',
        player_last_name: 'Harris',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203914.png',
        player_ppg: 8.3,
        player_apg: 1.2,
        player_rpg: 2.0
      },
      {
        player_first_name: 'Jay',
        player_last_name: 'Scrubb',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630206.png',
        player_ppg: 6.5,
        player_apg: 0.5,
        player_rpg: 3.0
      },
      {
        player_first_name: 'Jonathan',
        player_last_name: 'Isaac',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628371.png',
        player_ppg: 5.0,
        player_apg: 0.5,
        player_rpg: 4.0
      },
      {
        player_first_name: 'Chuma',
        player_last_name: 'Okeke',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629643.png',
        player_ppg: 4.7,
        player_apg: 1.4,
        player_rpg: 3.6
      },
      {
        player_first_name: 'Goga',
        player_last_name: 'Bitadze',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629048.png',
        player_ppg: 4.4,
        player_apg: 1.0,
        player_rpg: 3.6
      },
      {
        player_first_name: 'Michael',
        player_last_name: 'Carter-Williams',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203487.png',
        player_ppg: 4.2,
        player_apg: 1.8,
        player_rpg: 1.2
      },
      {
        player_first_name: 'Admiral',
        player_last_name: 'Schofield',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629678.png',
        player_ppg: 4.2,
        player_apg: 0.8,
        player_rpg: 1.7
      },
      {
        player_first_name: 'Kevon',
        player_last_name: 'Harris',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630284.png',
        player_ppg: 4.1,
        player_apg: 0.5,
        player_rpg: 2.1
      },
      {
        player_first_name: 'Caleb',
        player_last_name: 'Houstan',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631216.png',
        player_ppg: 3.8,
        player_apg: 0.6,
        player_rpg: 1.9
      }
    ]
  },
  {
    team_name: 'Philadelphia 76ers',
    team_conference: 'East',
    team_img: 'https://cdn.nba.com/logos/nba/1610612755/primary/D/logo.svg',
    stats: {
      team_wins: 54,
      team_losses: 28,
      team_rank: 3,
      team_pts: 9448,
      team_ast: 2063,
      team_reb: 3356,
      team_stl: 635,
      team_blk: 389,
      team_fg_pct: 0.487
    },
    accolades: {
      team_championships: 3,
      team_conference_championships: 5,
      team_divisions: 13,
      team_playoffs: 53
    },
    players: [
      {
        player_first_name: 'Joel',
        player_last_name: 'Embiid',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203954.png',
        player_ppg: 33.1,
        player_apg: 4.2,
        player_rpg: 10.2
      },
      {
        player_first_name: 'James',
        player_last_name: 'Harden',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201935.png',
        player_ppg: 21.0,
        player_apg: 10.7,
        player_rpg: 6.1
      },
      {
        player_first_name: 'Tyrese',
        player_last_name: 'Maxey',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630178.png',
        player_ppg: 20.3,
        player_apg: 3.5,
        player_rpg: 2.9
      },
      {
        player_first_name: 'Louis',
        player_last_name: 'King',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629663.png',
        player_ppg: 20.0,
        player_apg: 2.0,
        player_rpg: 4.0
      },
      {
        player_first_name: 'Tobias',
        player_last_name: 'Harris',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202699.png',
        player_ppg: 14.7,
        player_apg: 2.5,
        player_rpg: 5.7
      },
      {
        player_first_name: 'Mac',
        player_last_name: 'McClung',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630644.png',
        player_ppg: 12.5,
        player_apg: 4.5,
        player_rpg: 5.0
      },
      {
        player_first_name: "De'Anthony",
        player_last_name: 'Melton',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629001.png',
        player_ppg: 10.1,
        player_apg: 2.6,
        player_rpg: 4.1
      },
      {
        player_first_name: 'Jalen',
        player_last_name: 'McDaniels',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629667.png',
        player_ppg: 9.4,
        player_apg: 1.6,
        player_rpg: 4.3
      },
      {
        player_first_name: 'Shake',
        player_last_name: 'Milton',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629003.png',
        player_ppg: 8.4,
        player_apg: 3.2,
        player_rpg: 2.5
      },
      {
        player_first_name: 'Georges',
        player_last_name: 'Niang',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627777.png',
        player_ppg: 8.2,
        player_apg: 1.0,
        player_rpg: 2.4
      },
      {
        player_first_name: 'Montrezl',
        player_last_name: 'Harrell',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626149.png',
        player_ppg: 5.6,
        player_apg: 0.6,
        player_rpg: 2.8
      },
      {
        player_first_name: 'Dewayne',
        player_last_name: 'Dedmon',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203473.png',
        player_ppg: 5.2,
        player_apg: 0.7,
        player_rpg: 3.5
      },
      {
        player_first_name: 'Danuel',
        player_last_name: 'House Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627863.png',
        player_ppg: 4.8,
        player_apg: 0.8,
        player_rpg: 1.7
      },
      {
        player_first_name: 'Paul',
        player_last_name: 'Reed',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630194.png',
        player_ppg: 4.2,
        player_apg: 0.4,
        player_rpg: 3.8
      },
      {
        player_first_name: 'Furkan',
        player_last_name: 'Korkmaz',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627788.png',
        player_ppg: 3.8,
        player_apg: 0.6,
        player_rpg: 1.1
      },
      {
        player_first_name: 'P.J.',
        player_last_name: 'Tucker',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/200782.png',
        player_ppg: 3.5,
        player_apg: 0.8,
        player_rpg: 3.9
      },
      {
        player_first_name: 'Jaden',
        player_last_name: 'Springer',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630531.png',
        player_ppg: 2.6,
        player_apg: 0.5,
        player_rpg: 0.9
      }
    ]
  },
  {
    team_name: 'Phoenix Suns',
    team_conference: 'West',
    team_img: 'https://cdn.nba.com/logos/nba/1610612756/primary/D/logo.svg',
    stats: {
      team_wins: 45,
      team_losses: 37,
      team_rank: 4,
      team_pts: 9319,
      team_ast: 2235,
      team_reb: 3628,
      team_stl: 585,
      team_blk: 432,
      team_fg_pct: 0.467
    },
    accolades: {
      team_championships: 0,
      team_conference_championships: 3,
      team_divisions: 8,
      team_playoffs: 32
    },
    players: [
      {
        player_first_name: 'Kevin',
        player_last_name: 'Durant',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png',
        player_ppg: 29.1,
        player_apg: 5.0,
        player_rpg: 6.7
      },
      {
        player_first_name: 'Devin',
        player_last_name: 'Booker',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626164.png',
        player_ppg: 27.8,
        player_apg: 5.5,
        player_rpg: 4.5
      },
      {
        player_first_name: 'Deandre',
        player_last_name: 'Ayton',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629028.png',
        player_ppg: 18.0,
        player_apg: 1.7,
        player_rpg: 10.0
      },
      {
        player_first_name: 'Chris',
        player_last_name: 'Paul',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/101108.png',
        player_ppg: 13.9,
        player_apg: 8.9,
        player_rpg: 4.3
      },
      {
        player_first_name: 'Cameron',
        player_last_name: 'Payne',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626166.png',
        player_ppg: 10.3,
        player_apg: 4.5,
        player_rpg: 2.2
      },
      {
        player_first_name: 'Landry',
        player_last_name: 'Shamet',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629013.png',
        player_ppg: 8.6,
        player_apg: 2.3,
        player_rpg: 1.7
      },
      {
        player_first_name: 'Terrence',
        player_last_name: 'Ross',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203082.png',
        player_ppg: 8.3,
        player_apg: 1.5,
        player_rpg: 2.4
      },
      {
        player_first_name: 'Damion',
        player_last_name: 'Lee',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627814.png',
        player_ppg: 8.2,
        player_apg: 1.3,
        player_rpg: 3.0
      },
      {
        player_first_name: 'T.J.',
        player_last_name: 'Warren',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203933.png',
        player_ppg: 7.5,
        player_apg: 1.0,
        player_rpg: 2.9
      },
      {
        player_first_name: 'Torrey',
        player_last_name: 'Craig',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628470.png',
        player_ppg: 7.4,
        player_apg: 1.5,
        player_rpg: 5.4
      },
      {
        player_first_name: 'Josh',
        player_last_name: 'Okogie',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629006.png',
        player_ppg: 7.3,
        player_apg: 1.5,
        player_rpg: 3.5
      },
      {
        player_first_name: 'Jock',
        player_last_name: 'Landale',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629111.png',
        player_ppg: 6.6,
        player_apg: 1.0,
        player_rpg: 4.1
      },
      {
        player_first_name: 'Saben',
        player_last_name: 'Lee',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630240.png',
        player_ppg: 6.0,
        player_apg: 2.7,
        player_rpg: 1.8
      },
      {
        player_first_name: 'Darius',
        player_last_name: 'Bazley',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629647.png',
        player_ppg: 5.2,
        player_apg: 0.9,
        player_rpg: 3.2
      },
      {
        player_first_name: 'Bismack',
        player_last_name: 'Biyombo',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202687.png',
        player_ppg: 4.3,
        player_apg: 0.9,
        player_rpg: 4.3
      },
      {
        player_first_name: 'Ish',
        player_last_name: 'Wainright',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630688.png',
        player_ppg: 4.2,
        player_apg: 0.9,
        player_rpg: 2.3
      }
    ]
  },
  {
    team_name: 'Portland Trail Blazers',
    team_conference: 'West',
    team_img: 'https://cdn.nba.com/logos/nba/1610612757/primary/D/logo.svg',
    stats: {
      team_wins: 33,
      team_losses: 49,
      team_rank: 13,
      team_pts: 9299,
      team_ast: 1981,
      team_reb: 3325,
      team_stl: 553,
      team_blk: 376,
      team_fg_pct: 0.474
    },
    accolades: {
      team_championships: 1,
      team_conference_championships: 3,
      team_divisions: 6,
      team_playoffs: 37
    },
    players: [
      {
        player_first_name: 'Damian',
        player_last_name: 'Lillard',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203081.png',
        player_ppg: 32.2,
        player_apg: 7.3,
        player_rpg: 4.8
      },
      {
        player_first_name: 'Anfernee',
        player_last_name: 'Simons',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629014.png',
        player_ppg: 21.1,
        player_apg: 4.1,
        player_rpg: 2.6
      },
      {
        player_first_name: 'Jerami',
        player_last_name: 'Grant',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203924.png',
        player_ppg: 20.5,
        player_apg: 2.4,
        player_rpg: 4.5
      },
      {
        player_first_name: 'Jusuf',
        player_last_name: 'Nurkic',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203994.png',
        player_ppg: 13.3,
        player_apg: 2.9,
        player_rpg: 9.1
      },
      {
        player_first_name: 'Shaedon',
        player_last_name: 'Sharpe',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631101.png',
        player_ppg: 9.9,
        player_apg: 1.2,
        player_rpg: 3.0
      },
      {
        player_first_name: 'Cam',
        player_last_name: 'Reddish',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629629.png',
        player_ppg: 9.7,
        player_apg: 1.4,
        player_rpg: 2.2
      },
      {
        player_first_name: 'Trendon',
        player_last_name: 'Watford',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630570.png',
        player_ppg: 7.4,
        player_apg: 2.1,
        player_rpg: 3.8
      },
      {
        player_first_name: 'Justise',
        player_last_name: 'Winslow',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626159.png',
        player_ppg: 6.8,
        player_apg: 3.4,
        player_rpg: 5.0
      },
      {
        player_first_name: 'Nassir',
        player_last_name: 'Little',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629642.png',
        player_ppg: 6.6,
        player_apg: 0.9,
        player_rpg: 2.6
      },
      {
        player_first_name: 'Kevin',
        player_last_name: 'Knox II',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628995.png',
        player_ppg: 6.6,
        player_apg: 0.5,
        player_rpg: 2.8
      },
      {
        player_first_name: 'Drew',
        player_last_name: 'Eubanks',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629234.png',
        player_ppg: 6.6,
        player_apg: 1.3,
        player_rpg: 5.4
      },
      {
        player_first_name: 'Keon',
        player_last_name: 'Johnson',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630553.png',
        player_ppg: 4.7,
        player_apg: 1.5,
        player_rpg: 1.1
      },
      {
        player_first_name: 'Matisse',
        player_last_name: 'Thybulle',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629680.png',
        player_ppg: 4.1,
        player_apg: 0.7,
        player_rpg: 2.0
      },
      {
        player_first_name: 'Jabari',
        player_last_name: 'Walker',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631133.png',
        player_ppg: 3.9,
        player_apg: 0.6,
        player_rpg: 2.3
      },
      {
        player_first_name: 'John',
        player_last_name: 'Butler Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631219.png',
        player_ppg: 2.4,
        player_apg: 0.6,
        player_rpg: 0.9
      }
    ]
  },
  {
    team_name: 'Sacramento Kings',
    team_conference: 'West',
    team_img: 'https://cdn.nba.com/logos/nba/1610612758/primary/D/logo.svg',
    stats: {
      team_wins: 48,
      team_losses: 34,
      team_rank: 3,
      team_pts: 9898,
      team_ast: 2237,
      team_reb: 3481,
      team_stl: 574,
      team_blk: 275,
      team_fg_pct: 0.494
    },
    accolades: {
      team_championships: 1,
      team_conference_championships: 0,
      team_divisions: 7,
      team_playoffs: 30
    },
    players: [
      {
        player_first_name: "De'Aaron",
        player_last_name: 'Fox',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628368.png',
        player_ppg: 25.0,
        player_apg: 6.1,
        player_rpg: 4.2
      },
      {
        player_first_name: 'Domantas',
        player_last_name: 'Sabonis',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627734.png',
        player_ppg: 19.1,
        player_apg: 7.3,
        player_rpg: 12.3
      },
      {
        player_first_name: 'Kevin',
        player_last_name: 'Huerter',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628989.png',
        player_ppg: 15.2,
        player_apg: 2.9,
        player_rpg: 3.3
      },
      {
        player_first_name: 'Harrison',
        player_last_name: 'Barnes',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203084.png',
        player_ppg: 15.0,
        player_apg: 1.6,
        player_rpg: 4.5
      },
      {
        player_first_name: 'Malik',
        player_last_name: 'Monk',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628370.png',
        player_ppg: 13.5,
        player_apg: 3.9,
        player_rpg: 2.6
      },
      {
        player_first_name: 'Keegan',
        player_last_name: 'Murray',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631099.png',
        player_ppg: 12.2,
        player_apg: 1.2,
        player_rpg: 4.6
      },
      {
        player_first_name: 'Trey',
        player_last_name: 'Lyles',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626168.png',
        player_ppg: 7.6,
        player_apg: 0.9,
        player_rpg: 4.1
      },
      {
        player_first_name: 'Terence',
        player_last_name: 'Davis',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629056.png',
        player_ppg: 6.7,
        player_apg: 1.0,
        player_rpg: 2.2
      },
      {
        player_first_name: 'Davion',
        player_last_name: 'Mitchell',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630558.png',
        player_ppg: 5.6,
        player_apg: 2.3,
        player_rpg: 1.3
      },
      {
        player_first_name: 'Chimezie',
        player_last_name: 'Metu',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629002.png',
        player_ppg: 4.9,
        player_apg: 0.6,
        player_rpg: 3.0
      },
      {
        player_first_name: 'Richaun',
        player_last_name: 'Holmes',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626158.png',
        player_ppg: 3.1,
        player_apg: 0.2,
        player_rpg: 1.9
      },
      {
        player_first_name: 'Kessler',
        player_last_name: 'Edwards',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630556.png',
        player_ppg: 2.8,
        player_apg: 0.6,
        player_rpg: 1.7
      },
      {
        player_first_name: 'Neemias',
        player_last_name: 'Queta',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629674.png',
        player_ppg: 2.4,
        player_apg: 0.2,
        player_rpg: 2.2
      },
      {
        player_first_name: 'Alex',
        player_last_name: 'Len',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203458.png',
        player_ppg: 1.7,
        player_apg: 0.5,
        player_rpg: 2.3
      },
      {
        player_first_name: 'Matthew',
        player_last_name: 'Dellavedova',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203521.png',
        player_ppg: 1.5,
        player_apg: 1.3,
        player_rpg: 0.4
      },
      {
        player_first_name: 'Keon',
        player_last_name: 'Ellis',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631165.png',
        player_ppg: 1.5,
        player_apg: 0.4,
        player_rpg: 0.5
      },
      {
        player_first_name: 'PJ',
        player_last_name: 'Dozier',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628408.png',
        player_ppg: 1.4,
        player_apg: 0.6,
        player_rpg: 0.9
      }
    ]
  },
  {
    team_name: 'San Antonio Spurs',
    team_conference: 'West',
    team_img: 'https://cdn.nba.com/logos/nba/1610612759/primary/D/logo.svg',
    stats: {
      team_wins: 22,
      team_losses: 60,
      team_rank: 15,
      team_pts: 9269,
      team_ast: 2232,
      team_reb: 3584,
      team_stl: 572,
      team_blk: 322,
      team_fg_pct: 0.465
    },
    accolades: {
      team_championships: 5,
      team_conference_championships: 6,
      team_divisions: 22,
      team_playoffs: 39
    },
    players: [
      {
        player_first_name: 'Keldon',
        player_last_name: 'Johnson',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629640.png',
        player_ppg: 22.0,
        player_apg: 2.9,
        player_rpg: 5.0
      },
      {
        player_first_name: 'Devin',
        player_last_name: 'Vassell',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630170.png',
        player_ppg: 18.5,
        player_apg: 3.6,
        player_rpg: 3.9
      },
      {
        player_first_name: 'Tre',
        player_last_name: 'Jones',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630200.png',
        player_ppg: 12.9,
        player_apg: 6.6,
        player_rpg: 3.6
      },
      {
        player_first_name: 'Zach',
        player_last_name: 'Collins',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628380.png',
        player_ppg: 11.6,
        player_apg: 2.9,
        player_rpg: 6.4
      },
      {
        player_first_name: 'Jeremy',
        player_last_name: 'Sochan',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631110.png',
        player_ppg: 11.0,
        player_apg: 2.5,
        player_rpg: 5.3
      },
      {
        player_first_name: 'Doug',
        player_last_name: 'McDermott',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203926.png',
        player_ppg: 10.2,
        player_apg: 1.4,
        player_rpg: 2.2
      },
      {
        player_first_name: 'Malaki',
        player_last_name: 'Branham',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631103.png',
        player_ppg: 10.2,
        player_apg: 1.9,
        player_rpg: 2.7
      },
      {
        player_first_name: 'Julian',
        player_last_name: 'Champagnie',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630577.png',
        player_ppg: 9.7,
        player_apg: 0.6,
        player_rpg: 3.5
      },
      {
        player_first_name: 'Keita',
        player_last_name: 'Bates-Diop',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628966.png',
        player_ppg: 9.7,
        player_apg: 1.5,
        player_rpg: 3.7
      },
      {
        player_first_name: "Devonte'",
        player_last_name: 'Graham',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628984.png',
        player_ppg: 7.4,
        player_apg: 2.7,
        player_rpg: 1.7
      },
      {
        player_first_name: 'Romeo',
        player_last_name: 'Langford',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629641.png',
        player_ppg: 6.9,
        player_apg: 1.2,
        player_rpg: 2.7
      },
      {
        player_first_name: 'Sandro',
        player_last_name: 'Mamukelashvili',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630572.png',
        player_ppg: 6.1,
        player_apg: 1.4,
        player_rpg: 4.3
      },
      {
        player_first_name: 'Charles',
        player_last_name: 'Bassey',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629646.png',
        player_ppg: 5.7,
        player_apg: 1.3,
        player_rpg: 5.5
      },
      {
        player_first_name: 'Blake',
        player_last_name: 'Wesley',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631104.png',
        player_ppg: 5.0,
        player_apg: 2.7,
        player_rpg: 2.2
      },
      {
        player_first_name: 'Dominick',
        player_last_name: 'Barlow',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631230.png',
        player_ppg: 3.9,
        player_apg: 0.9,
        player_rpg: 3.6
      },
      {
        player_first_name: 'Gorgui',
        player_last_name: 'Dieng',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203476.png',
        player_ppg: 3.9,
        player_apg: 1.7,
        player_rpg: 3.5
      },
      {
        player_first_name: 'Khem',
        player_last_name: 'Birch',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203920.png',
        player_ppg: 2.2,
        player_apg: 0.4,
        player_rpg: 1.2
      }
    ]
  },
  {
    team_name: 'Toronto Raptors',
    team_conference: 'East',
    team_img: 'https://cdn.nba.com/logos/nba/1610612761/primary/D/logo.svg',
    stats: {
      team_wins: 41,
      team_losses: 41,
      team_rank: 9,
      team_pts: 9254,
      team_ast: 1961,
      team_reb: 3528,
      team_stl: 772,
      team_blk: 424,
      team_fg_pct: 0.459
    },
    accolades: {
      team_championships: 1,
      team_conference_championships: 1,
      team_divisions: 7,
      team_playoffs: 13
    },
    players: [
      {
        player_first_name: 'Pascal',
        player_last_name: 'Siakam',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627783.png',
        player_ppg: 24.2,
        player_apg: 5.8,
        player_rpg: 7.8
      },
      {
        player_first_name: 'Fred',
        player_last_name: 'VanVleet',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627832.png',
        player_ppg: 19.3,
        player_apg: 7.2,
        player_rpg: 4.1
      },
      {
        player_first_name: 'Gary',
        player_last_name: 'Trent Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629018.png',
        player_ppg: 17.4,
        player_apg: 1.6,
        player_rpg: 2.6
      },
      {
        player_first_name: 'O.G.',
        player_last_name: 'Anunoby',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628384.png',
        player_ppg: 16.8,
        player_apg: 2.0,
        player_rpg: 5.0
      },
      {
        player_first_name: 'Scottie',
        player_last_name: 'Barnes',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630567.png',
        player_ppg: 15.3,
        player_apg: 4.8,
        player_rpg: 6.6
      },
      {
        player_first_name: 'Jakob',
        player_last_name: 'Poeltl',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627751.png',
        player_ppg: 12.5,
        player_apg: 2.7,
        player_rpg: 9.1
      },
      {
        player_first_name: 'Chris',
        player_last_name: 'Boucher',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628449.png',
        player_ppg: 9.4,
        player_apg: 0.4,
        player_rpg: 5.5
      },
      {
        player_first_name: 'Precious',
        player_last_name: 'Achiuwa',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630173.png',
        player_ppg: 9.2,
        player_apg: 0.9,
        player_rpg: 6.0
      },
      {
        player_first_name: 'Will',
        player_last_name: 'Barton',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203115.png',
        player_ppg: 6.8,
        player_apg: 2.0,
        player_rpg: 2.4
      },
      {
        player_first_name: 'Otto',
        player_last_name: 'Porter Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203490.png',
        player_ppg: 5.5,
        player_apg: 1.0,
        player_rpg: 2.4
      },
      {
        player_first_name: 'Malachi',
        player_last_name: 'Flynn',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630201.png',
        player_ppg: 4.6,
        player_apg: 1.3,
        player_rpg: 1.4
      },
      {
        player_first_name: 'Dalano',
        player_last_name: 'Banton',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630625.png',
        player_ppg: 4.6,
        player_apg: 1.2,
        player_rpg: 1.5
      },
      {
        player_first_name: 'Thaddeus',
        player_last_name: 'Young',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201152.png',
        player_ppg: 4.4,
        player_apg: 1.4,
        player_rpg: 3.1
      },
      {
        player_first_name: 'Christian',
        player_last_name: 'Koloko',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631132.png',
        player_ppg: 3.1,
        player_apg: 0.5,
        player_rpg: 2.9
      },
      {
        player_first_name: 'Jeff',
        player_last_name: 'Dowtin Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630288.png',
        player_ppg: 2.4,
        player_apg: 1.2,
        player_rpg: 0.9
      },
      {
        player_first_name: 'Ron',
        player_last_name: 'Harper Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631199.png',
        player_ppg: 2.2,
        player_apg: 0.4,
        player_rpg: 0.8
      },
      {
        player_first_name: 'Joe',
        player_last_name: 'Wieskamp',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630580.png',
        player_ppg: 1.0,
        player_apg: 0.3,
        player_rpg: 0.4
      }
    ]
  },
  {
    team_name: 'Utah Jazz',
    team_conference: 'West',
    team_img: 'https://cdn.nba.com/logos/nba/1610612762/primary/D/logo.svg',
    stats: {
      team_wins: 37,
      team_losses: 45,
      team_rank: 12,
      team_pts: 9600,
      team_ast: 2129,
      team_reb: 3762,
      team_stl: 500,
      team_blk: 429,
      team_fg_pct: 0.473
    },
    accolades: {
      team_championships: 0,
      team_conference_championships: 2,
      team_divisions: 12,
      team_playoffs: 31
    },
    players: [
      {
        player_first_name: 'Lauri',
        player_last_name: 'Markkanen',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628374.png',
        player_ppg: 25.6,
        player_apg: 1.9,
        player_rpg: 8.6
      },
      {
        player_first_name: 'Jordan',
        player_last_name: 'Clarkson',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203903.png',
        player_ppg: 20.8,
        player_apg: 4.4,
        player_rpg: 4.0
      },
      {
        player_first_name: 'Collin',
        player_last_name: 'Sexton',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629012.png',
        player_ppg: 14.3,
        player_apg: 2.9,
        player_rpg: 2.2
      },
      {
        player_first_name: 'Kris',
        player_last_name: 'Dunn',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627739.png',
        player_ppg: 13.2,
        player_apg: 5.6,
        player_rpg: 4.5
      },
      {
        player_first_name: 'Kelly',
        player_last_name: 'Olynyk',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203482.png',
        player_ppg: 12.5,
        player_apg: 3.7,
        player_rpg: 6.2
      },
      {
        player_first_name: 'Talen',
        player_last_name: 'Horton-Tucker',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629659.png',
        player_ppg: 10.7,
        player_apg: 3.8,
        player_rpg: 3.2
      },
      {
        player_first_name: 'Luka',
        player_last_name: 'Samanic',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629677.png',
        player_ppg: 9.9,
        player_apg: 2.1,
        player_rpg: 4.3
      },
      {
        player_first_name: 'Walker',
        player_last_name: 'Kessler',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631117.png',
        player_ppg: 9.2,
        player_apg: 0.9,
        player_rpg: 8.4
      },
      {
        player_first_name: 'Ochai',
        player_last_name: 'Agbaji',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630534.png',
        player_ppg: 7.9,
        player_apg: 1.1,
        player_rpg: 2.1
      },
      {
        player_first_name: 'Simone',
        player_last_name: 'Fontecchio',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631323.png',
        player_ppg: 6.3,
        player_apg: 0.8,
        player_rpg: 1.7
      },
      {
        player_first_name: 'Rudy',
        player_last_name: 'Gay',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/200752.png',
        player_ppg: 5.2,
        player_apg: 1.0,
        player_rpg: 2.9
      },
      {
        player_first_name: 'Johnny',
        player_last_name: 'Juzang',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630548.png',
        player_ppg: 4.8,
        player_apg: 0.4,
        player_rpg: 2.2
      },
      {
        player_first_name: 'Damian',
        player_last_name: 'Jones',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627745.png',
        player_ppg: 3.5,
        player_apg: 0.4,
        player_rpg: 3.0
      },
      {
        player_first_name: 'Udoka',
        player_last_name: 'Azubuike',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628962.png',
        player_ppg: 3.5,
        player_apg: 0.3,
        player_rpg: 3.3
      },
      {
        player_first_name: 'Micah',
        player_last_name: 'Potter',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630695.png',
        player_ppg: 3.4,
        player_apg: 0.6,
        player_rpg: 2.3
      },
      {
        player_first_name: 'Juan',
        player_last_name: 'Toscano-Anderson',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629308.png',
        player_ppg: 3.0,
        player_apg: 1.2,
        player_rpg: 2.4
      },
      {
        player_first_name: 'Vernon',
        player_last_name: 'Carey Jr.',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630176.png',
        player_ppg: 0.5,
        player_apg: 0.3,
        player_rpg: 1.0
      }
    ]
  },
  {
    team_name: 'Washington Wizards',
    team_conference: 'East',
    team_img: 'https://cdn.nba.com/logos/nba/1610612764/primary/D/logo.svg',
    stats: {
      team_wins: 35,
      team_losses: 47,
      team_rank: 12,
      team_pts: 9279,
      team_ast: 2083,
      team_reb: 3578,
      team_stl: 561,
      team_blk: 424,
      team_fg_pct: 0.485
    },
    accolades: {
      team_championships: 1,
      team_conference_championships: 4,
      team_divisions: 8,
      team_playoffs: 30
    },
    players: [
      {
        player_first_name: 'Bradley',
        player_last_name: 'Beal',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203078.png',
        player_ppg: 23.2,
        player_apg: 5.4,
        player_rpg: 3.9
      },
      {
        player_first_name: 'Kristaps',
        player_last_name: 'Porzingis',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/204001.png',
        player_ppg: 23.2,
        player_apg: 2.7,
        player_rpg: 8.4
      },
      {
        player_first_name: 'Kyle',
        player_last_name: 'Kuzma',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628398.png',
        player_ppg: 21.2,
        player_apg: 3.7,
        player_rpg: 7.2
      },
      {
        player_first_name: 'Corey',
        player_last_name: 'Kispert',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630557.png',
        player_ppg: 11.1,
        player_apg: 1.2,
        player_rpg: 2.8
      },
      {
        player_first_name: 'Monte',
        player_last_name: 'Morris',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628420.png',
        player_ppg: 10.3,
        player_apg: 5.3,
        player_rpg: 3.4
      },
      {
        player_first_name: 'Deni',
        player_last_name: 'Avdija',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630166.png',
        player_ppg: 9.2,
        player_apg: 2.8,
        player_rpg: 6.4
      },
      {
        player_first_name: 'Daniel',
        player_last_name: 'Gafford',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629655.png',
        player_ppg: 9.0,
        player_apg: 1.1,
        player_rpg: 5.6
      },
      {
        player_first_name: 'Delon',
        player_last_name: 'Wright',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626153.png',
        player_ppg: 7.4,
        player_apg: 3.9,
        player_rpg: 3.6
      },
      {
        player_first_name: 'Jay',
        player_last_name: 'Huff',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630643.png',
        player_ppg: 7.3,
        player_apg: 1.4,
        player_rpg: 3.0
      },
      {
        player_first_name: 'Kendrick',
        player_last_name: 'Nunn',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629134.png',
        player_ppg: 7.1,
        player_apg: 1.3,
        player_rpg: 1.6
      },
      {
        player_first_name: 'Jordan',
        player_last_name: 'Goodwin',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630692.png',
        player_ppg: 6.6,
        player_apg: 2.7,
        player_rpg: 3.3
      },
      {
        player_first_name: 'Quenton',
        player_last_name: 'Jackson',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631245.png',
        player_ppg: 6.2,
        player_apg: 1.7,
        player_rpg: 0.9
      },
      {
        player_first_name: 'Johnny',
        player_last_name: 'Davis',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631098.png',
        player_ppg: 5.8,
        player_apg: 1.0,
        player_rpg: 2.3
      },
      {
        player_first_name: 'Xavier',
        player_last_name: 'Cooks',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1641645.png',
        player_ppg: 3.8,
        player_apg: 0.6,
        player_rpg: 3.8
      },
      {
        player_first_name: 'Taj',
        player_last_name: 'Gibson',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201959.png',
        player_ppg: 3.4,
        player_apg: 0.7,
        player_rpg: 1.9
      },
      {
        player_first_name: 'Anthony',
        player_last_name: 'Gill',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630264.png',
        player_ppg: 3.3,
        player_apg: 0.6,
        player_rpg: 1.7
      },
      {
        player_first_name: 'Isaiah',
        player_last_name: 'Todd',
        player_img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630225.png',
        player_ppg: 1.5,
        player_apg: 0.7,
        player_rpg: 2.0
      }
    ]
  }
];
