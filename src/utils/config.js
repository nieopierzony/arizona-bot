'use strict';

exports.supportSettings = {
  // Winslow
  '772869388147490846': {
    moderators: ['772869388297961504', '772869388297961506'],
    channelID: '785621865834086500',
    logChannelID: '786658872873975818',
    deleteAfter: 1000 * 60 * 60 * 24,
    cooldown: 5 * 60 * 1000,
    phrases: {
      mainMessage:
        'Здесь вы можете задать вопрос агентам поддержки касательно правил или поведения на ' +
        'Discord-сервере Winslow.\nС правилами обращениями к агенту ' +
        'поддержки можете ознакомиться в канале <#772869389929676854>',
      ticketMessage:
        'Уважаемый игрок! В случае возникновения жалоб касательно обслуживания модераторов, ' +
        'можете обратиться на форум [Робохомячка](https://forum.robo-hamster.ru/forums/171)',
    },
    categories: {
      active: '785622436468883506',
      hold: '785622825888514059',
      close: '785623047268466708',
    },
  },

  // Red-Rock
  '470981734863994881': {
    moderators: ['583731951559639040', '769293532694970368', '741656419199090719'],
    channelID: '626219027907477527',
    logChannelID: '615975866215956480',
    deleteAfter: 1000 * 60 * 60 * 24,
    cooldown: 5 * 60 * 1000,
    phrases: {
      mainMessage:
        'Здесь вы можете задать вопрос агентам поддержки касательно правил или поведения на ' +
        'Discord-сервере Red-Rock.\nС правилами обращениями к агенту ' +
        'поддержки можете ознакомиться в канале <#714123593646342151>',
      ticketMessage:
        'Уважаемый игрок! В случае возникновения жалоб касательно обслуживания модераторов, ' +
        'можете обратиться на форум [Робохомячка](https://forum.robo-hamster.ru/forums/53)',
    },
    categories: {
      active: '596869868784058389',
      hold: '596869895283671040',
      close: '596869922265628673',
    },
  },
};

exports.onlineSettings = {
  '772869388147490846': {
    moderators: [
      // Модератор чата
      '772869388297961503',
      // Администратор 4 уровня
      '772869388310806572',
      // Администратор 3 уровня
      '772869388310806571',
      // Администратор 2 уровня
      '772869388310806570',
      // Администратор 1 уровня
      '772869388310806569',
    ],
    gameServerID: 14,
    fractionsByRoles: {
      // Полиция ЛС
      1: ['772869388289703976', '772869388188647491'],
      // Полиция РК
      2: ['772869388289703976', '772869388188647489'],
      // ФБР
      3: ['772869388289703976', '772869388188647493'],
      // Полиция СФ
      4: ['772869388289703976', '772869388188647490'],
      // Больница ЛС
      5: ['772869388289703975', '772869388180783171'],
      // Правительство
      6: ['772869388289703980', '772869388210274334'],
      // Тюрьма строгого режима
      7: ['772869388188647486'],
      // Больница СФ
      8: ['772869388289703975', '772869388180783169'],
      // Автошкола
      9: ['772869388289703980', '772869388210274336'],
      // Радио ЛС
      10: ['772869388272533583', '772869388180783166'],
      // Grove Street
      11: ['773279982767702057'],
      // Vagos
      12: ['773279982767702057'],
      // Ballas
      13: ['773279982767702057'],
      // Aztecas
      14: ['773279982767702057'],
      // Rifa
      15: ['773279982767702057'],
      // Русская мафия
      16: ['773282789931352074'],
      // Якудза
      17: ['773282792091156500'],
      // La Cosa Nostra
      18: ['773282794318987294'],
      // Warlock MC
      19: ['773282796277727273'],
      // Армия ЛС
      20: ['772869388272533582', '773282796277727273'],
      // Центральный банк
      21: ['772869388289703980', '772869388210274340'],
      // Больница ЛВ
      22: ['772869388289703975', '772869388180783170'],
      // Полиция ЛВ
      23: ['772869388289703976', '772869388188647488'],
      // Радио ЛВ
      24: ['772869388272533583', '772869388180783164'],
      // Ночные волки
      25: ['773279982767702057'],
      // Радио СФ
      26: ['772869388272533583', '772869388180783165'],
      // Армия СФ
      27: ['772869388272533582', '772869388180783172'],
      // Страховая компания
      29: ['772869388188647487'],
    },
  },
};

exports.levelsConfig = {
  // Winslow
  '772869388147490846': {
    rolesByLevel: [
      { level: 1, roleID: '772869388155486253' },
      { level: 10, roleID: '772869388155486254' },
      { level: 15, roleID: '772869388155486255' },
      { level: 20, roleID: '772869388155486256' },
      { level: 30, roleID: '772869388155486257' },
      { level: 40, roleID: '772869388155486258' },
      { level: 50, roleID: '772869388163743844' },
      { level: 55, roleID: '772869388163743845' },
    ],
    blacklistedRoles: [
      '772869388331515950',
      '772869388331515949',
      '772869388331515948',
      '772869388331515947',
      '772869388310806572',
      '772869388310806571',
      '772869388310806570',
      '772869388310806569',
    ],
  },

  // Red-Rock
  '470981734863994881': {
    rolesByLevel: [
      { level: 1, roleID: '611009357433536515' },
      { level: 10, roleID: '611009353859858443' },
      { level: 15, roleID: '611009352907751435' },
      { level: 20, roleID: '611003069861199883' },
      { level: 25, roleID: '611003062852780032' },
      { level: 30, roleID: '611003060617084960' },
      { level: 35, roleID: '611003058419138562' },
      { level: 45, roleID: '611002996675051533' },
      { level: 55, roleID: '611002991176318977' },
    ],
    blacklistedRoles: [
      '471980061403119616',
      '684401897678962747',
      '684402883403579416',
      '479612413990273034',
      '471094251686723586',
      '471094570306764818',
      '471126185120628747',
      '471099289175588867',
      '758736404137639949',
    ],
  },
};

exports.meetingConfig = {
  // Red-Rock
  '470981734863994881': [
    // Лекция (хелперы).
    {
      type: 1,
      skipChannel: '650069962005807104',
      color: 0xf25eca,
      channel: '507079090541690880',
      manageRoles: ['684401897678962747', '684402883403579416', '546721928438874133'],
      userRoles: ['471099289175588867', '471126185120628747'],
    },

    // Собрание (всех админов).
    {
      type: 1,
      skipChannel: '626447839916064811',
      color: 0xdfe969,
      channel: '505740815189147648',
      manageRoles: ['684402883403579416', '684401897678962747'],
      userRoles: ['471099289175588867', '471126185120628747', '471094570306764818', '471094251686723586'],
    },

    // Собрание следящих гос.
    {
      type: 1,
      skipChannel: '662749833617997863',
      color: 0x7383e6,
      channel: '505749279433031700',
      manageRoles: ['505754127570173952', '505755783812874295'],
      userRoles: [
        '639852708542808115',
        '771785692161245254',
        '471175370394173441',
        '471238129919983627',
        '471177429793112074',
        '471183813175803905',
        '471238261914861578',
      ],
    },

    // Собрание конгресса.
    {
      type: 0,
      skipChannel: '693589752724848640',
      color: 0xdfe969,
      channel: '505764714543054888',
      manageRoles: ['505754127570173952', '505755783812874295', '471175370394173441'],
      userRoles: ['471429990148472869'],
    },
  ],
  // Winslow
  '772869388147490846': [
    // Лекция
    {
      type: 1,
      skipChannel: '772869388726304824',
      color: 0xf25eca,
      channel: '772869389166182430',
      manageRoles: ['772869388323258394'],
      userRoles: ['772869388310806569', '772869388310806570'],
    },

    // Собрание админов
    {
      type: 1,
      skipChannel: '772869388726304823',
      color: 0xf5ef42,
      channel: '772869388948471867',
      manageRoles: ['772869388323258394'],
      userRoles: ['772869388310806569', '772869388310806570', '772869388310806571', '772869388310806572'],
    },

    // Собрание ГС/ЗГС гос
    {
      type: 1,
      skipChannel: '772869390911406130',
      color: 0x6ddcc2,
      channel: '772869391179448357',
      manageRoles: ['772869388323258393', '772869388323258391'],
      userRoles: [
        '772869388323258390',
        '772869388323258389',
        '772869388323258388',
        '772869388314476633',
        '772869388314476632',
        '772869388314476631',
        '772869388314476630',
        '772869388314476625',
        '772869388314476624',
        '772869388310806577',
        '772869388310806576',
        '772869388310806575',
      ],
    },

    // Собрание следящих гос
    {
      type: 1,
      skipChannel: '772869390911406130',
      color: 0x6ddcc2,
      channel: '772869391179448358',
      manageRoles: ['772869388323258393', '772869388323258391'],
      userRoles: [
        '772869388310806568',
        '772869388302811245',
        '772869388302811244',
        '772869388302811243',
        '772869388302811242',
      ],
    },

    // Собрание всего руководства гос
    {
      type: 0,
      color: 0x7dff73,
      channel: '772869391179448359',
      manageRoles: [
        '772869388323258393',
        '772869388323258391',
        '772869388310806568',
        '772869388302811245',
        '772869388302811244',
        '772869388302811243',
        '772869388302811242',
      ],
      userRoles: ['772869388272533580', '772869388289703977', '772869388272533579'],
    },

    // Собрание конгресса
    {
      type: 1,
      skipChannel: '775325027381936139',
      color: 0xdfdc4e,
      channel: '775322053942837249',
      manageRoles: [
        '772869388323258393',
        '772869388323258391',
        '772869388323258390',
        '772869388314476625',
        '772869388310806568',
        '772869388289703981',
        '772869388289703980',
        '772869388252610577',
        '775318912367591435',
      ],
      userRoles: ['775317334096740362'],
    },

    // Собрание кабмина
    {
      type: 1,
      skipChannel: '782420670163189800',
      color: 0xdfe969,
      channel: '772869392270098437',
      manageRoles: [
        '772869388323258393',
        '772869388323258391',
        '772869388323258390',
        '772869388314476625',
        '772869388310806568',
        '772869388289703981',
        '772869388252610577',
        '772869388289703980',
      ],
      userRoles: ['772869388289703977'],
    },

    // Собрание руководства пра-во
    {
      type: 1,
      skipChannel: '782422753256407060',
      color: 0xdfe969,
      channel: '772869392270098432',
      manageRoles: [
        '772869388323258393',
        '772869388323258391',
        '772869388323258390',
        '772869388314476625',
        '772869388310806568',
      ],
      userRoles: [
        '772869388289703981',
        '772869388289703980',
        '772869388252610577',
        '772869388272533581',
        '772869388252610575',
        '772869388272533576',
        '772869388252610576',
      ],
    },

    // Собрание общее пра-во
    {
      type: 0,
      color: 0xdfe969,
      channel: '772869392270098439',
      manageRoles: [
        '772869388323258393',
        '772869388323258391',
        '772869388323258390',
        '772869388314476625',
        '772869388310806568',
      ],
      userRoles: ['772869388210274334', '772869388210274336', '772869388210274340'],
    },

    // Собрание руководства МЮ
    {
      type: 1,
      skipChannel: '782420780440354866',
      color: 0x7383e6,
      channel: '772869393306222614',
      manageRoles: [
        '772869388323258393',
        '772869388323258391',
        '772869388323258389',
        '772869388314476624',
        '772869388302811245',
      ],
      userRoles: [
        '772869388289703976',
        '772869388272533577',
        '772869388272533578',
        '772869388264669214',
        '772869388272533574',
        '772869388272533575',
        '772869388252610578',
        '772869388252610573',
        '772869388252610572',
        '772869388252610570',
        '772869388252610574',
      ],
    },

    // Собрание общее МЮ
    {
      type: 0,
      color: 0x7383e6,
      channel: '772869393306222615',
      manageRoles: [
        '772869388323258393',
        '772869388323258391',
        '772869388323258389',
        '772869388314476624',
        '772869388302811245',
      ],
      userRoles: [
        '772869388188647491',
        '772869388188647490',
        '772869388188647488',
        '772869388188647489',
        '772869388188647493',
      ],
    },

    // Собрание руководства МО
    {
      type: 1,
      skipChannel: '782420857392726076',
      color: 0xb8865f,
      channel: '772869396125057080',
      manageRoles: [
        '772869388323258393',
        '772869388323258391',
        '772869388323258388',
        '772869388310806577',
        '772869388302811244',
      ],
      userRoles: [
        '772869388264669211',
        '772869388264669210',
        '772869388252610571',
        '772869388235046959',
        '772869388272533582',
      ],
    },

    // Собрание общее МО
    {
      type: 0,
      color: 0xb8865f,
      channel: '772869396125057083',
      manageRoles: [
        '772869388323258393',
        '772869388323258391',
        '772869388323258388',
        '772869388310806577',
        '772869388302811244',
      ],
      userRoles: ['772869388180783173', '772869388180783172'],
    },

    // Собрание руководства МЗ
    {
      type: 1,
      skipChannel: '782420921225838633',
      color: 0xff6db2,
      channel: '772869396682375194',
      manageRoles: [
        '772869388323258393',
        '772869388323258391',
        '772869388314476633',
        '772869388310806576',
        '772869388302811243',
      ],
      userRoles: [
        '772869388289703975',
        '772869388264669209',
        '772869388264669208',
        '772869388264669207',
        '772869388235046958',
        '772869388235046957',
        '772869388235046955',
      ],
    },

    // Собрание общее МЗ
    {
      type: 0,
      color: 0xff6db2,
      channel: '772869396964180019',
      manageRoles: [
        '772869388323258393',
        '772869388323258391',
        '772869388314476633',
        '772869388310806576',
        '772869388302811243',
      ],
      userRoles: ['772869388180783171', '772869388180783169', '772869388180783170'],
    },

    // Собрание руководства СМИ
    {
      type: 1,
      skipChannel: '782420965795037194',
      color: 0xfe9746,
      channel: '772869397223702536',
      manageRoles: [
        '772869388323258393',
        '772869388323258391',
        '772869388314476632',
        '772869388310806575',
        '772869388302811242',
      ],
      userRoles: [
        '772869388272533583',
        '772869388264669206',
        '772869388264669205',
        '772869388252610579',
        '772869388235046956',
        '772869388235046954',
        '772869388235046953',
      ],
    },

    // Собрание общее СМИ
    {
      type: 0,
      color: 0xfe9746,
      channel: '772869397223702537',
      manageRoles: [
        '772869388323258393',
        '772869388323258391',
        '772869388314476632',
        '772869388310806575',
        '772869388302811242',
      ],
      userRoles: ['772869388180783166', '772869388180783165', '772869388180783164'],
    },

    // Собрание лидеров мафий
    {
      type: 1,
      skipChannel: '782421049945489419',
      color: 0x808080,
      channel: '776556576885702676',
      manageRoles: [
        '772869388323258392',
        '772869388314476629',
        '772869388310806573',
        '772869388302811240',
        '772869388302811239',
      ],
      userRoles: [
        '773280016691494932',
        '773280018457165825',
        '773280020252721192',
        '773280022059548712',
        '773280023926800426',
        '773282782301913130',
        '773282784708919326',
        '773282787636936742',
      ],
    },

    // Собрание лидеров мафий
    {
      type: 0,
      color: 0xf5bc42,
      channel: '779178186436247562',
      manageRoles: [
        '772869388323258392',
        '772869388314476629',
        '772869388310806573',
        '772869388302811240',
        '772869388302811239',
      ],
      userRoles: [
        '772869388210274334',
        '772869388210274336',
        '772869388188647487',
        '772869388210274340',
        '772869388188647491',
        '772869388188647490',
        '772869388188647488',
        '772869388188647489',
        '772869388188647493',
        '772869388188647486',
        '772869388180783173',
        '772869388180783172',
        '772869388180783171',
        '772869388180783169',
        '772869388180783170',
        '772869388180783166',
        '772869388180783165',
        '772869388180783164',
      ],
    },
  ],
};

exports.familyConfig = {
  // Red-Rock
  '470981734863994881': {
    categoryID: '505742782707793920',
    baseRoleID: '606807761967251456',
  },
  // TEST
  '787224090171670539': {
    categoryID: '788109236252311662',
    baseRoleID: '788115379473219656',
  },
};

exports.protectionConfig = {
  // Winslow
  '772869388147490846': {
    notifyChannel: '789216851212763216',
    role: '772869388147490848',
    notifyRoles: ['772869388331515947'],
    bannedRoles: [
      '772869388323258394',
      '772869388323258393',
      '772869388323258392',
      '772869388323258391',
      '772869388323258390',
      '772869388323258389',
      '772869388323258388',
      '772869388314476633',
      '772869388314476632',
      '772869388314476631',
      '772869388314476630',
      '772869388314476629',
      '772869388314476628',
      '772869388314476627',
      '781224270587625492',
      '772869388314476625',
      '772869388310806577',
      '772869388310806576',
      '772869388310806575',
      '772869388310806573',
      '772869388310806574',
      '772869388310806572',
      '772869388310806571',
      '772869388310806570',
      '772869388310806569',
      '772869388310806568',
      '772869388302811245',
      '772869388302811244',
      '772869388302811243',
      '772869388302811242',
      '772869388302811240',
      '772869388302811241',
      '772869388302811239',
      '772869388302811238',
      '786012954176913459',
      '781224260957110302',
      '780486161894080552',
      '772952680212725760',
      '782727635900825660',
      '772869388297961506',
      '772869388297961505',
      '772869388297961504',
      '772869388297961503',
      '772869388163743845',
      '772869388163743844',
      '772869388155486258',
      '772869388155486257',
      '772869388155486256',
      '772869388155486254',
      '772869388163743844',
    ],
    allowedRoles: [
      '772869388323258394',
      '772869388323258393',
      '772869388323258392',
      '772869388323258391',
      '772869388297961506',
    ],
  },
  // Red-Rock
  '470981734863994881': {
    notifyChannel: '669898545536696371',
    role: '669877590730735638',
    notifyRoles: ['479612413990273034', '684402883403579416'],
    bannedRoles: [
      '545752363630198793',
      '627935436978913303',
      '601539163216674816',
      '546721928438874133',
      '505754127570173952',
      '608689907749093376',
      '505755783812874295',
      '471174260208042003',
      '471236151001481216',
      '471177700581834762',
      '471183370051649548',
      '471236820848476170',
      '639852708542808115',
      '771785692161245254',
      '471237630617583617',
      '471189621800435714',
      '607946597485117451',
      '735476757133525042',
      '471174787125870605',
      '471236350759141378',
      '471177924356210698',
      '471183565250363392',
      '471236857636585473',
      '471189778549964801',
      '471237796259037185',
      '742306470334431232',
      '471094251686723586',
      '471094570306764818',
      '471126185120628747',
      '471099289175588867',
      '471175370394173441',
      '471238129919983627',
      '471177429793112074',
      '471183813175803905',
      '471238261914861578',
      '471189910573940737',
      '471238360770281483',
      '605378951900299286',
      '588729075888160770',
      '472569763206266880',
      '596256185917898792',
      '608291083285299234',
      '582931629916291073',
      '527439261457186817',
      '741656419199090719',
      '769293532694970368',
      '583731951559639040',
      '507859701472690197',
      '625699385119997993',
      '650358027303649280',
      '788880865303330816',
      '612762992865705995',
      '612763453383245846',
      '612763538775212044',
      '617730996183236646',
      '668127944874655750',
      '662920069021433878',
      '786985762847195187',
    ],
    allowedRoles: [
      '505754127570173952',
      '608689907749093376',
      '505755783812874295',
      '546721928438874133',
      '741656419199090719',
    ],
  },
  // TEST
  '787224090171670539': {
    notifyChannel: '787224090766475276',
    role: '788152973607698452',
    notifyRoles: ['789149522093801473'],
    bannedRoles: ['788314272567525388', '788115379473219656', '788319651242835968'],
    allowedRoles: ['789149522093801473', '787225149501997107'],
  },
};

exports.privateConfig = {
  // Red-Rock
  '470981734863994881': {
    category: '770701655195779092',
    channel: '770701656211062815',
    notifyChannel: '637843341496680448',
    limits: {
      privates: 10,
      usercooldown: 3 * 60 * 1000,
      guildcooldown: 1 * 5 * 1000,
    },
  },
  // Winslow
  '772869388147490846': {
    category: '773667755794366465',
    channel: '773667756423249962',
    notifyChannel: '772869390312013836',
    limits: {
      privates: 10,
      usercooldown: 3 * 60 * 1000,
      guildcooldown: 1 * 5 * 1000,
    },
  },
};

exports.rulesConfig = {
  // Winslow
  '772869388147490846': {
    channel: '772869389929676854',
  },
  // Red-Rock
  '470981734863994881': {
    channel: '714123593646342151',
  },
};