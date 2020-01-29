exports.seed = knex =>
  knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        {
          username: 'edilger0',
          password: 'jhfmi2j',
          department_id: 9,
        },
        {
          username: 'ktraviss1',
          password: 'TXmGQGuiT0s',
          department_id: 8,
        },
        {
          username: 'bdebellis2',
          password: 'gT6kUBnJ',
          department_id: 8,
        },
        {
          username: 'ahinze3',
          password: 'xMvfBF',
          department_id: 4,
        },
        {
          username: 'wlegister4',
          password: 'gBdfFvm7',
          department_id: 4,
        },
        {
          username: 'bbastide5',
          password: '6wYQLLIJF',
          department_id: 4,
        },
        {
          username: 'phandley6',
          password: '0qBiAYcLKm9',
          department_id: 2,
        },
        {
          username: 'hattwoull7',
          password: 'g5ipPDIslyS',
          department_id: 10,
        },
        {
          username: 'mjesson8',
          password: 'zxcoFGq19dt',
          department_id: 1,
        },
        {
          username: 'dburras9',
          password: 'LefnV4zVJ8X',
          department_id: 10,
        },
        {
          username: 'abauckhama',
          password: 'x6mqsCI',
          department_id: 9,
        },
        {
          username: 'tkinninb',
          password: 'KQSdvxcUN3Io',
          department_id: 8,
        },
        {
          username: 'bjonesc',
          password: 'JlVeKgyqt',
          department_id: 8,
        },
        {
          username: 'eeidlerd',
          password: 'WIZpEhOCT',
          department_id: 1,
        },
        {
          username: 'rdreyee',
          password: 'YJ857KPun',
          department_id: 8,
        },
        {
          username: 'ehadleighf',
          password: 'V0IOLt8qCZ',
          department_id: 10,
        },
        {
          username: 'jwestgarthg',
          password: 'GqjIlTE',
          department_id: 1,
        },
        {
          username: 'ggarzah',
          password: 'oou3k4OEIPfg',
          department_id: 3,
        },
        {
          username: 'jstoecki',
          password: 'y40aeQkb',
          department_id: 4,
        },
        {
          username: 'cwitcherj',
          password: 'aHfRfnDj',
          department_id: 6,
        },
        {
          username: 'jayrek',
          password: 'tLhqKLkK8T',
          department_id: 9,
        },
        {
          username: 'dchampkinl',
          password: 'vZ2EQx1Zn',
          department_id: 3,
        },
        {
          username: 'rstrettlem',
          password: 'uDCeSIMzx',
          department_id: 6,
        },
        {
          username: 'bdunkerleyn',
          password: 'omOSLexCMZ',
          department_id: 5,
        },
        {
          username: 'monoulaneo',
          password: 'enuvJUHZokcJ',
          department_id: 8,
        },
        {
          username: 'kjonasp',
          password: 'iKsE9Nzuj',
          department_id: 1,
        },
        {
          username: 'cderuelq',
          password: '9HUTfZnd',
          department_id: 5,
        },
        {
          username: 'ahawneyr',
          password: 'Nc9MLH',
          department_id: 1,
        },
        {
          username: 'easps',
          password: 'oGMA5SlfXF',
          department_id: 9,
        },
        {
          username: 'kbrailsfordt',
          password: 'anPuPgRlPNQ',
          department_id: 1,
        },
        {
          username: 'gheinou',
          password: 'zGjiEQ',
          department_id: 9,
        },
        {
          username: 'dlarsenv',
          password: 'mXkgnHA',
          department_id: 6,
        },
        {
          username: 'csalkildw',
          password: 'y2WNxDYe',
          department_id: 8,
        },
        {
          username: 'amccarryx',
          password: 'NEsF4F4IxyEs',
          department_id: 2,
        },
        {
          username: 'gdukery',
          password: '2FovX3',
          department_id: 10,
        },
        {
          username: 'rvansonz',
          password: 'CtiSXxuT3Vo',
          department_id: 4,
        },
        {
          username: 'dcrapper10',
          password: 'NFO10owPfYm',
          department_id: 6,
        },
        {
          username: 'mhartmann11',
          password: 'TGU2xoI',
          department_id: 2,
        },
        {
          username: 'horpyne12',
          password: '6Rmg7GylHiP',
          department_id: 7,
        },
        {
          username: 'eeilhermann13',
          password: 'SpaVhBMw8u3',
          department_id: 10,
        },
        {
          username: 'rjedrzaszkiewicz14',
          password: '28CF1iYb3i',
          department_id: 2,
        },
        {
          username: 'dparr15',
          password: 'PLMfivmG8c',
          department_id: 3,
        },
        {
          username: 'vhuertas16',
          password: 'JRSDFsfmR',
          department_id: 9,
        },
        {
          username: 'zreadmire17',
          password: 'nUYLk40',
          department_id: 1,
        },
        {
          username: 'awolland18',
          password: 'mqyd7TRIUM3',
          department_id: 6,
        },
        {
          username: 'fstudman19',
          password: '59Mme2',
          department_id: 2,
        },
        {
          username: 'mhunter1a',
          password: 'ImT6BzTE3Aj',
          department_id: 9,
        },
        {
          username: 'mroots1b',
          password: 'xTJPSolK04T',
          department_id: 1,
        },
        {
          username: 'tdowey1c',
          password: 'jdhwFuYeEis',
          department_id: 5,
        },
        {
          username: 'cberrick1d',
          password: 'yHTEWB',
          department_id: 8,
        },
      ])
    )
