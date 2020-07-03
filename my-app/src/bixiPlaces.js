const bixiStations = [
    {
      "code": 10002,
      "name": "Métro Charlevoix (Centre / Charlevoix)",
      "latitude": 45.47822787309145,
      "longitude": -73.56965124607086
    },
    {
      "code": 4000,
      "name": "Jeanne-d'Arc / Ontario",
      "latitude": 45.54959767887176,
      "longitude": -73.54187428951263
    },
    {
      "code": 4001,
      "name": "Graham / Brookfield",
      "latitude": 45.52007477080967,
      "longitude": -73.6297756433487
    },
    {
      "code": 4002,
      "name": "Graham / Wicksteed",
      "latitude": 45.51693654712809,
      "longitude": -73.64048302173615
    },
    {
      "code": 5002,
      "name": "St-Charles / Montarville",
      "latitude": 45.53368199320325,
      "longitude": -73.51526074111462
    },
    {
      "code": 5003,
      "name": "Place Longueuil",
      "latitude": 45.52841043752244,
      "longitude": -73.51716578006744
    },
    {
      "code": 5004,
      "name": "St-Charles / Grant",
      "latitude": 45.539824,
      "longitude": -73.508752
    },
    {
      "code": 5005,
      "name": "St-Charles / St-Jean",
      "latitude": 45.53690747306937,
      "longitude": -73.51191401481627
    },
    {
      "code": 5006,
      "name": "Collège Édouard-Montpetit (de Gentilly / de Normandie)",
      "latitude": 45.53722603812578,
      "longitude": -73.49506705999374
    },
    {
      "code": 5007,
      "name": "Métro Longueuil - Université de Sherbrooke",
      "latitude": 45.52331869398737,
      "longitude": -73.52012693881989
    },
    {
      "code": 6001,
      "name": "Métro Champ-de-Mars (Viger / Sanguinet)",
      "latitude": 45.51035067563653,
      "longitude": -73.55650842189789
    },
    {
      "code": 6002,
      "name": "Ste-Catherine / Dezery",
      "latitude": 45.539385081961676,
      "longitude": -73.54099988937377
    },
    {
      "code": 6003,
      "name": "Clark / Evans",
      "latitude": 45.51100666600306,
      "longitude": -73.56760203838348
    },
    {
      "code": 6004,
      "name": "du Champ-de-Mars / Gosford",
      "latitude": 45.50965520472071,
      "longitude": -73.55400860309601
    },
    {
      "code": 6005,
      "name": "Metcalfe / du Square-Dorchester",
      "latitude": 45.500208064155046,
      "longitude": -73.57113786041737
    },
    {
      "code": 6006,
      "name": "18e avenue / Rosemont",
      "latitude": 45.55789545752947,
      "longitude": -73.5765291005373
    },
    {
      "code": 6007,
      "name": "de l'Hôtel-de-Ville / Ste-Catherine",
      "latitude": 45.51166045593874,
      "longitude": -73.56213569641113
    },
    {
      "code": 6008,
      "name": "Sanguinet / Ste-Catherine",
      "latitude": 45.51279685582333,
      "longitude": -73.56146247242577
    },
    {
      "code": 6009,
      "name": "Crescent / de Maisonneuve",
      "latitude": 45.49811161443597,
      "longitude": -73.57761539518833
    },
    {
      "code": 6011,
      "name": "St-André / St-Antoine",
      "latitude": 45.51411452790017,
      "longitude": -73.55264469981194
    },
    {
      "code": 6012,
      "name": "Métro St-Laurent (de Maisonneuve / St-Laurent)",
      "latitude": 45.51066,
      "longitude": -73.56497
    },
    {
      "code": 6013,
      "name": "Sanguinet / de Maisonneuve",
      "latitude": 45.51340553558378,
      "longitude": -73.56259435415267
    },
    {
      "code": 6014,
      "name": "St-Denis / René-Lévesque",
      "latitude": 45.51287121578035,
      "longitude": -73.55846643447876
    },
    {
      "code": 6015,
      "name": "BAnQ (Berri / de Maisonneuve)",
      "latitude": 45.515299,
      "longitude": -73.561273
    },
    {
      "code": 6016,
      "name": "Jacques-Le Ber / de la Pointe Nord",
      "latitude": 45.472503,
      "longitude": -73.539285
    },
    {
      "code": 6017,
      "name": "Atateken / du Square Amherst",
      "latitude": 45.52063377251984,
      "longitude": -73.56390595436096
    },
    {
      "code": 6018,
      "name": "St-André / Ontario",
      "latitude": 45.51889,
      "longitude": -73.56353
    },
    {
      "code": 6019,
      "name": "Métro Sherbrooke (de Rigaud / Berri)",
      "latitude": 45.51799893773692,
      "longitude": -73.56818407773972
    },
    {
      "code": 6020,
      "name": "Sanguinet / Ontario",
      "latitude": 45.51476724402057,
      "longitude": -73.56549113988876
    },
    {
      "code": 6021,
      "name": "de l'Hôtel-de-Ville / Sherbrooke",
      "latitude": 45.514564669657595,
      "longitude": -73.56840670108795
    },
    {
      "code": 6022,
      "name": "William-Tremblay / Molson",
      "latitude": 45.541719808901306,
      "longitude": -73.56517732143402
    },
    {
      "code": 6023,
      "name": "de la Commune / Berri",
      "latitude": 45.51086,
      "longitude": -73.54983
    },
    {
      "code": 6024,
      "name": "Bellerive / Duchesneau",
      "latitude": 45.60761595633475,
      "longitude": -73.50982189178467
    },
    {
      "code": 6025,
      "name": "Notre-Dame / St-Gabriel",
      "latitude": 45.50714391928411,
      "longitude": -73.55511903762817
    },
    {
      "code": 6026,
      "name": "de la Commune / Place Jacques-Cartier",
      "latitude": 45.50761009451047,
      "longitude": -73.55183601379395
    },
    {
      "code": 6027,
      "name": "de Maisonneuve / Mansfield (sud)",
      "latitude": 45.502053864057466,
      "longitude": -73.57346534729004
    },
    {
      "code": 6029,
      "name": "Bourget / St-Jacques",
      "latitude": 45.48084576334506,
      "longitude": -73.58386158943176
    },
    {
      "code": 6031,
      "name": "de Maisonneuve / Robert-Bourassa",
      "latitude": 45.50426292830073,
      "longitude": -73.57152342796326
    },
    {
      "code": 6032,
      "name": "Métro Place-d'Armes (Viger / St-Urbain)",
      "latitude": 45.50623,
      "longitude": -73.55976
    },
    {
      "code": 6033,
      "name": "16e avenue / Beaubien",
      "latitude": 45.55828063767652,
      "longitude": -73.58315885066986
    },
    {
      "code": 6035,
      "name": "Viger / Chenneville",
      "latitude": 45.50531166520915,
      "longitude": -73.56089115142822
    },
    {
      "code": 6036,
      "name": "de la Commune / St-Sulpice",
      "latitude": 45.50424245563397,
      "longitude": -73.553469479084
    },
    {
      "code": 6037,
      "name": "St-Nicolas / Place d'Youville",
      "latitude": 45.501966859101564,
      "longitude": -73.55515256524086
    },
    {
      "code": 6038,
      "name": "McGill / Place d'Youville",
      "latitude": 45.49975,
      "longitude": -73.55566
    },
    {
      "code": 6039,
      "name": "McGill / des Récollets",
      "latitude": 45.500779,
      "longitude": -73.558826
    },
    {
      "code": 6040,
      "name": "St-Jacques / St-Pierre",
      "latitude": 45.50278649802565,
      "longitude": -73.55913430452347
    },
    {
      "code": 6041,
      "name": "St-Jacques / McGill",
      "latitude": 45.50144108135568,
      "longitude": -73.56014415621758
    },
    {
      "code": 6042,
      "name": "de la Gauchetière / Robert-Bourassa",
      "latitude": 45.50060578095098,
      "longitude": -73.56544822454453
    },
    {
      "code": 6043,
      "name": "Square Victoria (Viger / du Square-Victoria)",
      "latitude": 45.50206,
      "longitude": -73.56295
    },
    {
      "code": 6044,
      "name": "Roy / St-André",
      "latitude": 45.521564270906616,
      "longitude": -73.57036739587784
    },
    {
      "code": 6046,
      "name": "Métro Bonaventure (de la Gauchetière / de la Cathédrale)",
      "latitude": 45.49831217703312,
      "longitude": -73.56725603342056
    },
    {
      "code": 6047,
      "name": "University / Prince-Arthur",
      "latitude": 45.507401678946415,
      "longitude": -73.57844352722168
    },
    {
      "code": 6048,
      "name": "William / St-Henri",
      "latitude": 45.49891911390352,
      "longitude": -73.55725407600403
    },
    {
      "code": 6049,
      "name": "Queen / Wellington",
      "latitude": 45.49760527699099,
      "longitude": -73.55534970760345
    },
    {
      "code": 6050,
      "name": "St-Maurice / Robert-Bourassa",
      "latitude": 45.498577791020146,
      "longitude": -73.56024205684662
    },
    {
      "code": 6051,
      "name": "de Gaspé / Marmier",
      "latitude": 45.529686,
      "longitude": -73.601728
    },
    {
      "code": 6052,
      "name": "de la Commune / King",
      "latitude": 45.49751503379366,
      "longitude": -73.55257093906403
    },
    {
      "code": 6053,
      "name": "du Président-Kennedy / Jeanne-Mance",
      "latitude": 45.508204615051355,
      "longitude": -73.56881439685822
    },
    {
      "code": 6057,
      "name": "Peel / de la Gauchetiere",
      "latitude": 45.4977183451679,
      "longitude": -73.5681800544262
    },
    {
      "code": 6058,
      "name": "Cypress / Peel",
      "latitude": 45.49932551028458,
      "longitude": -73.57176750898361
    },
    {
      "code": 6059,
      "name": "de la Cathédrale / René-Lévesque",
      "latitude": 45.499191207076606,
      "longitude": -73.56942057609558
    },
    {
      "code": 6060,
      "name": "Belmont / Robert-Bourassa",
      "latitude": 45.501366848348894,
      "longitude": -73.56583714485167
    },
    {
      "code": 6061,
      "name": "Mansfield / Ste-Catherine",
      "latitude": 45.501398709321506,
      "longitude": -73.57178628444672
    },
    {
      "code": 6062,
      "name": "Drummond / Ste-Catherine",
      "latitude": 45.49863930330429,
      "longitude": -73.57422709465027
    },
    {
      "code": 6063,
      "name": "Drummond / de Maisonneuve",
      "latitude": 45.49947,
      "longitude": -73.57591
    },
    {
      "code": 6064,
      "name": "Métro Peel (de Maisonneuve / Stanley)",
      "latitude": 45.50038,
      "longitude": -73.57507
    },
    {
      "code": 6065,
      "name": "de la Montagne / Sherbrooke",
      "latitude": 45.499744750433784,
      "longitude": -73.57903361320496
    },
    {
      "code": 6066,
      "name": "McTavish / des Pins",
      "latitude": 45.50530549708951,
      "longitude": -73.58100235462189
    },
    {
      "code": 6067,
      "name": "Porte-de-Québec / St-Hubert",
      "latitude": 45.51249475526989,
      "longitude": -73.55087846517563
    },
    {
      "code": 6068,
      "name": "2e avenue / Jean-Rivard",
      "latitude": 45.562509038048915,
      "longitude": -73.61656039953232
    },
    {
      "code": 6070,
      "name": "Milton / University",
      "latitude": 45.5064484,
      "longitude": -73.57634872
    },
    {
      "code": 6072,
      "name": "Metcalfe / de Maisonneuve",
      "latitude": 45.50171494932855,
      "longitude": -73.57413053512573
    },
    {
      "code": 6073,
      "name": "de Maisonneuve / Aylmer (ouest)",
      "latitude": 45.50501,
      "longitude": -73.57069
    },
    {
      "code": 6075,
      "name": "University / des Pins",
      "latitude": 45.50829509569767,
      "longitude": -73.58064293861388
    },
    {
      "code": 6076,
      "name": "de Ville-Marie / Ste-Catherine",
      "latitude": 45.55792114867545,
      "longitude": -73.52914720773697
    },
    {
      "code": 6078,
      "name": "St-Alexandre / Ste-Catherine",
      "latitude": 45.50538225593995,
      "longitude": -73.56763422489166
    },
    {
      "code": 6079,
      "name": "Hutchison / Prince-Arthur",
      "latitude": 45.50975858607626,
      "longitude": -73.57610732316971
    },
    {
      "code": 6080,
      "name": "Métro Vendôme (de Marlowe / de Maisonneuve)",
      "latitude": 45.47393028235147,
      "longitude": -73.60473453998564
    },
    {
      "code": 6081,
      "name": "Mackay / Ste-Catherine",
      "latitude": 45.49570931691902,
      "longitude": -73.5769522190094
    },
    {
      "code": 6082,
      "name": "5e avenue / Rosemont",
      "latitude": 45.54990048023633,
      "longitude": -73.58308374881744
    },
    {
      "code": 6083,
      "name": "Square Phillips",
      "latitude": 45.50373771539475,
      "longitude": -73.56810629367828
    },
    {
      "code": 6084,
      "name": "Duke / Brennan",
      "latitude": 45.495581350533946,
      "longitude": -73.55371087789534
    },
    {
      "code": 6085,
      "name": "Notre-Dame / Peel",
      "latitude": 45.4952,
      "longitude": -73.56328
    },
    {
      "code": 6086,
      "name": "Basin / du Séminaire",
      "latitude": 45.490452428547556,
      "longitude": -73.56017231941223
    },
    {
      "code": 6087,
      "name": "Notre-Dame / de la Montagne",
      "latitude": 45.49302901258371,
      "longitude": -73.56481790542603
    },
    {
      "code": 6088,
      "name": "Richmond / Notre-Dame",
      "latitude": 45.4891601257399,
      "longitude": -73.56777101755141
    },
    {
      "code": 6089,
      "name": "Henri-Julien / du Carmel",
      "latitude": 45.527839413108,
      "longitude": -73.59482109546661
    },
    {
      "code": 6090,
      "name": "Métro Lucien-L'Allier  (Lucien l'Allier / Argyle)",
      "latitude": 45.49487159597493,
      "longitude": -73.57112377882004
    },
    {
      "code": 6091,
      "name": "Joseph-Manseau / René-Lévesque",
      "latitude": 45.491686521008035,
      "longitude": -73.57676714658737
    },
    {
      "code": 6092,
      "name": "Crescent / Ste-Catherine",
      "latitude": 45.497092016878234,
      "longitude": -73.57554942369461
    },
    {
      "code": 6093,
      "name": "Atwater / Sherbrooke",
      "latitude": 45.4912258547597,
      "longitude": -73.58763009309769
    },
    {
      "code": 6094,
      "name": "de Gaspé / Fairmount",
      "latitude": 45.52564776553033,
      "longitude": -73.5929274559021
    },
    {
      "code": 6095,
      "name": "Chomedey / de Maisonneuve",
      "latitude": 45.491800276787224,
      "longitude": -73.58400642871855
    },
    {
      "code": 6096,
      "name": "Lucien L'Allier / St-Jacques",
      "latitude": 45.49356916133978,
      "longitude": -73.56857568025589
    },
    {
      "code": 6097,
      "name": "Ste-Catherine / St-Marc",
      "latitude": 45.492897397177465,
      "longitude": -73.58029425144196
    },
    {
      "code": 6098,
      "name": "Bishop / Ste-Catherine",
      "latitude": 45.496583295698706,
      "longitude": -73.5765016078949
    },
    {
      "code": 6099,
      "name": "Ste-Catherine / Labelle",
      "latitude": 45.51506508398211,
      "longitude": -73.55922952294348
    },
    {
      "code": 6100,
      "name": "Mackay / de Maisonneuve",
      "latitude": 45.49659,
      "longitude": -73.57851
    },
    {
      "code": 6101,
      "name": "Métro Villa-Maria (Décarie / de Monkland)",
      "latitude": 45.479483,
      "longitude": -73.61979
    },
    {
      "code": 6102,
      "name": "Lincoln / du Fort",
      "latitude": 45.493034,
      "longitude": -73.583836
    },
    {
      "code": 6103,
      "name": "du Havre / Hochelaga",
      "latitude": 45.535753085274585,
      "longitude": -73.55794072151183
    },
    {
      "code": 6104,
      "name": "Wolfe / René-Lévesque",
      "latitude": 45.51681750463149,
      "longitude": -73.5541883111
    },
    {
      "code": 6105,
      "name": "Plessis / René-Lévesque",
      "latitude": 45.51937252291976,
      "longitude": -73.55195805430411
    },
    {
      "code": 6106,
      "name": "Papineau / René-Lévesque",
      "latitude": 45.52114,
      "longitude": -73.54926
    },
    {
      "code": 6107,
      "name": "St-Mathieu / Ste-Catherine",
      "latitude": 45.49367956421703,
      "longitude": -73.57914626598358
    },
    {
      "code": 6108,
      "name": "Logan / Fullum",
      "latitude": 45.52836601591233,
      "longitude": -73.55117082595825
    },
    {
      "code": 6109,
      "name": "Quai de la navette fluviale",
      "latitude": 45.513741443172,
      "longitude": -73.53838205337523
    },
    {
      "code": 6110,
      "name": "Poupart / Ste-Catherine",
      "latitude": 45.52900206660643,
      "longitude": -73.54619935154915
    },
    {
      "code": 6111,
      "name": "Parthenais / Ste-Catherine",
      "latitude": 45.52600589494234,
      "longitude": -73.54886412620544
    },
    {
      "code": 6112,
      "name": "Montcalm / de Maisonneuve",
      "latitude": 45.519139183741046,
      "longitude": -73.55786561965942
    },
    {
      "code": 6113,
      "name": "Alexandre-DeSève / Ste-Catherine",
      "latitude": 45.52123044585842,
      "longitude": -73.55386108160019
    },
    {
      "code": 6114,
      "name": "Métro Papineau (Cartier / Ste-Catherine)",
      "latitude": 45.52353,
      "longitude": -73.55199
    },
    {
      "code": 6115,
      "name": "Benny / de Monkland",
      "latitude": 45.46685123845205,
      "longitude": -73.63162770867348
    },
    {
      "code": 6116,
      "name": "Plessis / Ontario",
      "latitude": 45.52349210923463,
      "longitude": -73.56073021888733
    },
    {
      "code": 6117,
      "name": "de Maisonneuve / Aylmer (est)",
      "latitude": 45.50526304478131,
      "longitude": -73.57048004865646
    },
    {
      "code": 6118,
      "name": "de Champlain / Ontario",
      "latitude": 45.52510954917077,
      "longitude": -73.56020584702492
    },
    {
      "code": 6119,
      "name": "Ontario / de Lorimier",
      "latitude": 45.52773089755533,
      "longitude": -73.55753839015959
    },
    {
      "code": 6120,
      "name": "Métro Frontenac (Ontario / du Havre)",
      "latitude": 45.533705987798946,
      "longitude": -73.55217933654784
    },
    {
      "code": 6121,
      "name": "du Havre / de Rouen",
      "latitude": 45.53456256501449,
      "longitude": -73.55478646466509
    },
    {
      "code": 6122,
      "name": "Logan / d'Iberville",
      "latitude": 45.53057,
      "longitude": -73.54913
    },
    {
      "code": 6123,
      "name": "Alexandre-DeSève / la Fontaine",
      "latitude": 45.52327641182773,
      "longitude": -73.55821833014488
    },
    {
      "code": 6124,
      "name": "Poupart / Ontario",
      "latitude": 45.53193889278052,
      "longitude": -73.55343863368034
    },
    {
      "code": 6125,
      "name": "Ellendale / de la Côte-des-Neiges",
      "latitude": 45.499757,
      "longitude": -73.629298
    },
    {
      "code": 6126,
      "name": "Fullum / de Rouen",
      "latitude": 45.53213680524969,
      "longitude": -73.55871319770813
    },
    {
      "code": 6127,
      "name": "de Gaspé / Jean-Talon",
      "latitude": 45.536582447959766,
      "longitude": -73.61622512340546
    },
    {
      "code": 6128,
      "name": "Hogan / Ontario",
      "latitude": 45.535295480380306,
      "longitude": -73.55116009712219
    },
    {
      "code": 6129,
      "name": "de Bordeaux / Sherbrooke",
      "latitude": 45.52997069129102,
      "longitude": -73.56305301189423
    },
    {
      "code": 6130,
      "name": "Sherbrooke / Frontenac",
      "latitude": 45.5367,
      "longitude": -73.56081
    },
    {
      "code": 6131,
      "name": "Fullum / Sherbrooke",
      "latitude": 45.533924,
      "longitude": -73.562425
    },
    {
      "code": 6132,
      "name": "Larivière / de Lorimier",
      "latitude": 45.5291345371163,
      "longitude": -73.55923354625702
    },
    {
      "code": 6133,
      "name": "Chapleau / Terrasse Mercure",
      "latitude": 45.53673838509649,
      "longitude": -73.56516659259796
    },
    {
      "code": 6134,
      "name": "Bercy / Rachel",
      "latitude": 45.53840340979245,
      "longitude": -73.56196403503418
    },
    {
      "code": 6136,
      "name": "Métro Laurier (Rivard / Laurier)",
      "latitude": 45.52761627,
      "longitude": -73.5891147
    },
    {
      "code": 6137,
      "name": "Cartier / Gauthier",
      "latitude": 45.53034708827074,
      "longitude": -73.56698781251907
    },
    {
      "code": 6138,
      "name": "Gauthier / de Lorimier",
      "latitude": 45.53167355364312,
      "longitude": -73.56541335582732
    },
    {
      "code": 6139,
      "name": "Gauthier / Parthenais",
      "latitude": 45.53292625574653,
      "longitude": -73.56377989053726
    },
    {
      "code": 6140,
      "name": "Marquette / Rachel",
      "latitude": 45.5298015824607,
      "longitude": -73.5702896118164
    },
    {
      "code": 6141,
      "name": "des Érables / Rachel",
      "latitude": 45.53354753725336,
      "longitude": -73.5668671131134
    },
    {
      "code": 6142,
      "name": "Calixa-Lavallée / Rachel",
      "latitude": 45.527794785525096,
      "longitude": -73.57193917036057
    },
    {
      "code": 6143,
      "name": "Rachel / de Brébeuf",
      "latitude": 45.52689,
      "longitude": -73.57264
    },
    {
      "code": 6145,
      "name": "du Parc-La Fontaine / Duluth",
      "latitude": 45.52451761488783,
      "longitude": -73.57197672128677
    },
    {
      "code": 6146,
      "name": "du Parc-La Fontaine / Roy",
      "latitude": 45.523170471388234,
      "longitude": -73.56901288032532
    },
    {
      "code": 6147,
      "name": "Calixa-Lavallée / Sherbrooke",
      "latitude": 45.52479,
      "longitude": -73.56545
    },
    {
      "code": 6148,
      "name": "Émile-Duployé / Sherbrooke",
      "latitude": 45.52720058937288,
      "longitude": -73.56472939252852
    },
    {
      "code": 6149,
      "name": "Chapleau / du Mont-Royal",
      "latitude": 45.53867,
      "longitude": -73.56936
    },
    {
      "code": 6150,
      "name": "Messier / du Mont-Royal",
      "latitude": 45.53711414,
      "longitude": -73.5710031
    },
    {
      "code": 6151,
      "name": "Parthenais / du Mont-Royal",
      "latitude": 45.53646917409483,
      "longitude": -73.57146307826042
    },
    {
      "code": 6152,
      "name": "Chabot / du Mont-Royal",
      "latitude": 45.53418509490266,
      "longitude": -73.57358872890472
    },
    {
      "code": 6153,
      "name": "Cartier / Marie-Anne",
      "latitude": 45.532674,
      "longitude": -73.571776
    },
    {
      "code": 6154,
      "name": "Marquette / du Mont-Royal",
      "latitude": 45.53229,
      "longitude": -73.57544
    },
    {
      "code": 6155,
      "name": "Garnier / du Mont-Royal",
      "latitude": 45.53092,
      "longitude": -73.57674
    },
    {
      "code": 6156,
      "name": "Marie-Anne / de la Roche",
      "latitude": 45.52775814390426,
      "longitude": -73.57618510723114
    },
    {
      "code": 6157,
      "name": "de Brébeuf / du Mont-Royal",
      "latitude": 45.52940777616881,
      "longitude": -73.57815384864807
    },
    {
      "code": 6158,
      "name": "Gilford / de Brébeuf",
      "latitude": 45.53081622781595,
      "longitude": -73.58162596821785
    },
    {
      "code": 6159,
      "name": "Ann / Wellington",
      "latitude": 45.49452705626516,
      "longitude": -73.55675250291823
    },
    {
      "code": 6160,
      "name": "Garnier / St-Joseph",
      "latitude": 45.5329774553515,
      "longitude": -73.58122229576111
    },
    {
      "code": 6161,
      "name": "Cartier / St-Joseph",
      "latitude": 45.53582823686429,
      "longitude": -73.57869029045105
    },
    {
      "code": 6162,
      "name": "Legendre / Henri-Julien",
      "latitude": 45.546123877081186,
      "longitude": -73.64664673805237
    },
    {
      "code": 6163,
      "name": "Marquette / Laurier",
      "latitude": 45.53543,
      "longitude": -73.5822
    },
    {
      "code": 6164,
      "name": "de Lanaudière / Laurier",
      "latitude": 45.5333136054992,
      "longitude": -73.58373686671257
    },
    {
      "code": 6165,
      "name": "Laurier / de Brébeuf",
      "latitude": 45.532513956311426,
      "longitude": -73.58481109142303
    },
    {
      "code": 6166,
      "name": "Gerry-Boulet / St-Grégoire",
      "latitude": 45.533735227540596,
      "longitude": -73.589306473732
    },
    {
      "code": 6167,
      "name": "Marquette / St-Grégoire",
      "latitude": 45.53703,
      "longitude": -73.58584
    },
    {
      "code": 6168,
      "name": "Marmier / St-Denis",
      "latitude": 45.530871318676006,
      "longitude": -73.59834551811218
    },
    {
      "code": 6169,
      "name": "Boyer / du Mont-Royal",
      "latitude": 45.527432126380575,
      "longitude": -73.57991673052311
    },
    {
      "code": 6170,
      "name": "de Mentana / Laurier",
      "latitude": 45.53045006508681,
      "longitude": -73.58763813972473
    },
    {
      "code": 6171,
      "name": "Wolfe / Robin",
      "latitude": 45.51958082831579,
      "longitude": -73.5601159930229
    },
    {
      "code": 6173,
      "name": "Berri / Cherrier",
      "latitude": 45.51908844137639,
      "longitude": -73.56950908899307
    },
    {
      "code": 6174,
      "name": "Roy / St-Denis",
      "latitude": 45.51908,
      "longitude": -73.5727
    },
    {
      "code": 6175,
      "name": "St-Christophe / Cherrier",
      "latitude": 45.52027785033668,
      "longitude": -73.5682162642479
    },
    {
      "code": 6176,
      "name": "de Mentana / Rachel",
      "latitude": 45.524963239803235,
      "longitude": -73.57555881142616
    },
    {
      "code": 6177,
      "name": "St-Hubert / Duluth",
      "latitude": 45.522425652788634,
      "longitude": -73.57418417930603
    },
    {
      "code": 6178,
      "name": "Rivard / Rachel",
      "latitude": 45.5222776,
      "longitude": -73.5775906
    },
    {
      "code": 6179,
      "name": "Duluth / St-Denis",
      "latitude": 45.52060423232697,
      "longitude": -73.57598394155502
    },
    {
      "code": 6180,
      "name": "St-Dominique / René-Lévesque",
      "latitude": 45.509418366717604,
      "longitude": -73.56135785579681
    },
    {
      "code": 6181,
      "name": "Clark / Rachel",
      "latitude": 45.5173538,
      "longitude": -73.58212888
    },
    {
      "code": 6182,
      "name": "de Bullion / du Mont-Royal",
      "latitude": 45.52175120848515,
      "longitude": -73.58526840806007
    },
    {
      "code": 6183,
      "name": "Laval / du Mont-Royal",
      "latitude": 45.5223645775784,
      "longitude": -73.58414590358734
    },
    {
      "code": 6184,
      "name": "Métro Mont-Royal (Rivard / du Mont-Royal)",
      "latitude": 45.524673,
      "longitude": -73.58255
    },
    {
      "code": 6185,
      "name": "des Érables / Bélanger",
      "latitude": 45.54912085535069,
      "longitude": -73.60087350010872
    },
    {
      "code": 6186,
      "name": "St-Hubert / Laurier",
      "latitude": 45.52931012171625,
      "longitude": -73.58865737915039
    },
    {
      "code": 6187,
      "name": "Resther / du Mont-Royal",
      "latitude": 45.52562819123256,
      "longitude": -73.58177483081818
    },
    {
      "code": 6188,
      "name": "de Mentana / Marie-Anne",
      "latitude": 45.526026565221414,
      "longitude": -73.57785880565643
    },
    {
      "code": 6189,
      "name": "Chabot / Everett",
      "latitude": 45.55072306022627,
      "longitude": -73.60957056283951
    },
    {
      "code": 6190,
      "name": "Pontiac / Gilford",
      "latitude": 45.527009334270645,
      "longitude": -73.58576595783234
    },
    {
      "code": 6191,
      "name": "St-Zotique / Clark",
      "latitude": 45.531401,
      "longitude": -73.612674
    },
    {
      "code": 6192,
      "name": "Berri / St-Grégoire",
      "latitude": 45.52996959525513,
      "longitude": -73.5919028520584
    },
    {
      "code": 6193,
      "name": "de l'Esplanade / Fairmount",
      "latitude": 45.521495,
      "longitude": -73.596758
    },
    {
      "code": 6194,
      "name": "Métro Atwater (Atwater / Ste-Catherine)",
      "latitude": 45.48947622882084,
      "longitude": -73.58456566929817
    },
    {
      "code": 6195,
      "name": "de Bullion / St-Joseph",
      "latitude": 45.5240365462478,
      "longitude": -73.59014332294464
    },
    {
      "code": 6196,
      "name": "Villeneuve / St-Laurent",
      "latitude": 45.52134173413233,
      "longitude": -73.58941912651062
    },
    {
      "code": 6197,
      "name": "de Bordeaux / Masson",
      "latitude": 45.53898439552301,
      "longitude": -73.5824453830719
    },
    {
      "code": 6198,
      "name": "Hélène-Baillargeon / St-Denis",
      "latitude": 45.52974,
      "longitude": -73.59527
    },
    {
      "code": 6199,
      "name": "St-Viateur / St-Laurent",
      "latitude": 45.52593073022709,
      "longitude": -73.59883904457092
    },
    {
      "code": 6200,
      "name": "Maguire / St-Laurent",
      "latitude": 45.524628485592636,
      "longitude": -73.5958108305931
    },
    {
      "code": 6201,
      "name": "Villeneuve / de l'Hôtel-de-Ville",
      "latitude": 45.52354419830203,
      "longitude": -73.58733236789703
    },
    {
      "code": 6202,
      "name": "Ste-Famille / Sherbrooke",
      "latitude": 45.51007154847701,
      "longitude": -73.57075229287146
    },
    {
      "code": 6203,
      "name": "Aylmer / Sherbrooke",
      "latitude": 45.50658668914343,
      "longitude": -73.57329905033112
    },
    {
      "code": 6204,
      "name": "Milton / Durocher",
      "latitude": 45.508140959417744,
      "longitude": -73.57492983341217
    },
    {
      "code": 6205,
      "name": "Milton / du Parc",
      "latitude": 45.50936142835129,
      "longitude": -73.57386365532875
    },
    {
      "code": 6206,
      "name": "Prince-Arthur / du Parc",
      "latitude": 45.51059,
      "longitude": -73.57547
    },
    {
      "code": 6207,
      "name": "Ste-Famille / des Pins",
      "latitude": 45.51283174510449,
      "longitude": -73.57688784599304
    },
    {
      "code": 6208,
      "name": "Hutchison / des Pins",
      "latitude": 45.51069,
      "longitude": -73.57805
    },
    {
      "code": 6209,
      "name": "Milton / Clark",
      "latitude": 45.51254135285248,
      "longitude": -73.57067719101906
    },
    {
      "code": 6210,
      "name": "Métro Sauvé (Berri / Sauvé)",
      "latitude": 45.550692068419764,
      "longitude": -73.65636706352234
    },
    {
      "code": 6211,
      "name": "Roy / St-Laurent",
      "latitude": 45.515616239398405,
      "longitude": -73.57580825686453
    },
    {
      "code": 6212,
      "name": "Duluth / de l'Esplanade",
      "latitude": 45.51509198406273,
      "longitude": -73.58114182949066
    },
    {
      "code": 6213,
      "name": "Duluth / St-Laurent",
      "latitude": 45.51687640567004,
      "longitude": -73.57946008443832
    },
    {
      "code": 6214,
      "name": "Square St-Louis (du Square St-Louis / Laval)",
      "latitude": 45.516090801970655,
      "longitude": -73.5701286792755
    },
    {
      "code": 6215,
      "name": "Metcalfe / St-Catherine",
      "latitude": 45.50083231626815,
      "longitude": -73.57245951890945
    },
    {
      "code": 6216,
      "name": "Parc Jeanne Mance (monument sir George-Etienne Cartier)",
      "latitude": 45.514839858968934,
      "longitude": -73.58477890491486
    },
    {
      "code": 6217,
      "name": "Vallières / St-Laurent",
      "latitude": 45.518967223320054,
      "longitude": -73.5836161673069
    },
    {
      "code": 6218,
      "name": "Prince-Arthur / St-Urbain",
      "latitude": 45.51258740220925,
      "longitude": -73.57373893260956
    },
    {
      "code": 6219,
      "name": "de l'Hôtel-de-Ville / Roy",
      "latitude": 45.51740076184449,
      "longitude": -73.57460528612137
    },
    {
      "code": 6220,
      "name": "Laval / Duluth",
      "latitude": 45.519216236873945,
      "longitude": -73.57718020677567
    },
    {
      "code": 6221,
      "name": "du Mont-Royal / Clark",
      "latitude": 45.51941,
      "longitude": -73.58685
    },
    {
      "code": 6222,
      "name": "de l'Esplanade / du Mont-Royal",
      "latitude": 45.51825290855221,
      "longitude": -73.5883381962776
    },
    {
      "code": 6223,
      "name": "du Mont-Royal / du Parc",
      "latitude": 45.517,
      "longitude": -73.589
    },
    {
      "code": 6224,
      "name": "Villeneuve / du Parc",
      "latitude": 45.51829,
      "longitude": -73.59235
    },
    {
      "code": 6225,
      "name": "Villeneuve / St-Urbain",
      "latitude": 45.520188,
      "longitude": -73.590559
    },
    {
      "code": 6226,
      "name": "Hôpital Maisonneuve-Rosemont (Rosemont / Chatelain)",
      "latitude": 45.575707,
      "longitude": -73.561562
    },
    {
      "code": 6227,
      "name": "de l'Esplanade / Laurier",
      "latitude": 45.521038857321265,
      "longitude": -73.59490692615509
    },
    {
      "code": 6228,
      "name": "Waverly / Van Horne",
      "latitude": 45.527363,
      "longitude": -73.607723
    },
    {
      "code": 6229,
      "name": "Coloniale / du Mont-Royal",
      "latitude": 45.5211613236904,
      "longitude": -73.5856157541275
    },
    {
      "code": 6230,
      "name": "Waverly / St-Viateur",
      "latitude": 45.5238561444472,
      "longitude": -73.60012650489807
    },
    {
      "code": 6231,
      "name": "Jeanne-Mance / St-Viateur",
      "latitude": 45.523026476635074,
      "longitude": -73.60184043645859
    },
    {
      "code": 6232,
      "name": "Durocher / Van Horne",
      "latitude": 45.524265806034656,
      "longitude": -73.61127376556396
    },
    {
      "code": 6233,
      "name": "Bernard / Jeanne-Mance",
      "latitude": 45.5242864769531,
      "longitude": -73.60497325658798
    },
    {
      "code": 6234,
      "name": "de l'Arcade / Clark",
      "latitude": 45.527410360532215,
      "longitude": -73.60393524169922
    },
    {
      "code": 6235,
      "name": "St-Dominique / St-Viateur",
      "latitude": 45.52655700191558,
      "longitude": -73.5982757806778
    },
    {
      "code": 6236,
      "name": "Laurier / de Bordeaux",
      "latitude": 45.5376492623372,
      "longitude": -73.57978463172913
    },
    {
      "code": 6237,
      "name": "Gilford / de Lanaudière",
      "latitude": 45.53200800170645,
      "longitude": -73.58044445514679
    },
    {
      "code": 6240,
      "name": "Parc Kent (de Kent / Hudson)",
      "latitude": 45.5057209331225,
      "longitude": -73.62945914268494
    },
    {
      "code": 6241,
      "name": "Querbes / Laurier",
      "latitude": 45.51753998795678,
      "longitude": -73.59783187508583
    },
    {
      "code": 6243,
      "name": "Bloomfield / Bernard",
      "latitude": 45.52068774,
      "longitude": -73.6084279
    },
    {
      "code": 6245,
      "name": "Bloomfield / Van Horne",
      "latitude": 45.5225858,
      "longitude": -73.61265779
    },
    {
      "code": 6246,
      "name": "Métro Outremont (Wiseman / Van Horne)",
      "latitude": 45.52027053865367,
      "longitude": -73.61484915018082
    },
    {
      "code": 6247,
      "name": "St-Dominique / St-Zotique",
      "latitude": 45.53226461018495,
      "longitude": -73.6110632121563
    },
    {
      "code": 6248,
      "name": "St-Dominique / Rachel",
      "latitude": 45.518593,
      "longitude": -73.581566
    },
    {
      "code": 6249,
      "name": "Bélanger / St-Denis",
      "latitude": 45.53696,
      "longitude": -73.61199
    },
    {
      "code": 6250,
      "name": "Marché Jean-Talon (Henri-Julien / Jean-Talon)",
      "latitude": 45.53678525128436,
      "longitude": -73.6148879583925
    },
    {
      "code": 6251,
      "name": "Dante / de Gaspé",
      "latitude": 45.534414933376276,
      "longitude": -73.6123164743185
    },
    {
      "code": 6252,
      "name": "Mozart / St-Laurent",
      "latitude": 45.53318,
      "longitude": -73.61544
    },
    {
      "code": 6253,
      "name": "Métro Jean-Talon (de Chateaubriand / Jean-Talon)",
      "latitude": 45.540138286478616,
      "longitude": -73.61402839422226
    },
    {
      "code": 6254,
      "name": "Boyer / Bélanger",
      "latitude": 45.54006,
      "longitude": -73.60897
    },
    {
      "code": 6255,
      "name": "Boyer / St-Zotique",
      "latitude": 45.53848,
      "longitude": -73.60556
    },
    {
      "code": 6257,
      "name": "de St-Vallier / St-Zotique",
      "latitude": 45.536261178519666,
      "longitude": -73.60754549503326
    },
    {
      "code": 6258,
      "name": "Parc Père-Marquette (Chambord / Rosemont)",
      "latitude": 45.537087833013324,
      "longitude": -73.59321847558022
    },
    {
      "code": 6259,
      "name": "Dandurand / de Lorimier",
      "latitude": 45.540881,
      "longitude": -73.584157
    },
    {
      "code": 6260,
      "name": "Cartier / Dandurand",
      "latitude": 45.53923559055867,
      "longitude": -73.58594566583633
    },
    {
      "code": 6261,
      "name": "Louis-Hémon / Rosemont",
      "latitude": 45.54459855947176,
      "longitude": -73.58822286128998
    },
    {
      "code": 6262,
      "name": "de la Roche /  de Bellechasse",
      "latitude": 45.537159225331315,
      "longitude": -73.59747648239136
    },
    {
      "code": 6263,
      "name": "de Hampton / de Monkland",
      "latitude": 45.47117930747152,
      "longitude": -73.6270022392273
    },
    {
      "code": 6264,
      "name": "Chabot / de Bellechasse",
      "latitude": 45.5425697477813,
      "longitude": -73.59214425086974
    },
    {
      "code": 6265,
      "name": "Parthenais / Laurier",
      "latitude": 45.539258526059406,
      "longitude": -73.5774591565132
    },
    {
      "code": 6266,
      "name": "Louis-Hébert / de Bellechasse",
      "latitude": 45.546661109634606,
      "longitude": -73.58868420124054
    },
    {
      "code": 6267,
      "name": "Chabot / Beaubien",
      "latitude": 45.544375546398065,
      "longitude": -73.59564453363419
    },
    {
      "code": 6268,
      "name": "Chambord / Beaubien",
      "latitude": 45.539932183126695,
      "longitude": -73.59934329986572
    },
    {
      "code": 6269,
      "name": "Wurtele / de Rouen",
      "latitude": 45.537627813487596,
      "longitude": -73.5533943772316
    },
    {
      "code": 6270,
      "name": "Fabre / St-Zotique",
      "latitude": 45.54345172630376,
      "longitude": -73.60101029276848
    },
    {
      "code": 6271,
      "name": "St-Jean-Baptiste / Notre-Dame",
      "latitude": 45.640002860465096,
      "longitude": -73.49011301994324
    },
    {
      "code": 6272,
      "name": "de Bordeaux / St-Zotique",
      "latitude": 45.546539011777845,
      "longitude": -73.59866470098495
    },
    {
      "code": 6273,
      "name": "Cartier / Bélanger",
      "latitude": 45.546797412794085,
      "longitude": -73.60266387462616
    },
    {
      "code": 6274,
      "name": "de la Roche / St-Joseph",
      "latitude": 45.531164,
      "longitude": -73.583695
    },
    {
      "code": 6275,
      "name": "Chambord / Jean-Talon",
      "latitude": 45.54484558108033,
      "longitude": -73.61053615808486
    },
    {
      "code": 6276,
      "name": "de la Roche / Bélanger",
      "latitude": 45.541669595766315,
      "longitude": -73.60760450363159
    },
    {
      "code": 6277,
      "name": "Louis-Hébert / Beaubien",
      "latitude": 45.5481863712796,
      "longitude": -73.592010140419
    },
    {
      "code": 6278,
      "name": "Louis-Hébert / St-Zotique",
      "latitude": 45.55001,
      "longitude": -73.59576
    },
    {
      "code": 6279,
      "name": "Louis-Hébert / Bélanger",
      "latitude": 45.55158518908433,
      "longitude": -73.59916493296623
    },
    {
      "code": 6280,
      "name": "Casgrain / Laurier",
      "latitude": 45.52437479806464,
      "longitude": -73.5918103158474
    },
    {
      "code": 6281,
      "name": "Resther / St-Joseph",
      "latitude": 45.52769780849099,
      "longitude": -73.58625277876854
    },
    {
      "code": 6301,
      "name": "Parc Outremont (Bloomfield / Elmwood)",
      "latitude": 45.518309446368,
      "longitude": -73.60328614711761
    },
    {
      "code": 6302,
      "name": "Stuart / St-Viateur",
      "latitude": 45.516078703024085,
      "longitude": -73.60779762268066
    },
    {
      "code": 6303,
      "name": "Pratt / Van Horne",
      "latitude": 45.51414486304299,
      "longitude": -73.6203020811081
    },
    {
      "code": 6304,
      "name": "Rockland / Lajoie",
      "latitude": 45.515617,
      "longitude": -73.614991
    },
    {
      "code": 6305,
      "name": "Davaar / de la Côte-Ste-Catherine",
      "latitude": 45.514379,
      "longitude": -73.610871
    },
    {
      "code": 6306,
      "name": "Métro Édouard-Montpetit (du Mont-Royal / Vincent-d'Indy)",
      "latitude": 45.510086,
      "longitude": -73.611429
    },
    {
      "code": 6307,
      "name": "Laval / Rachel",
      "latitude": 45.52017845247635,
      "longitude": -73.57942387461662
    },
    {
      "code": 6309,
      "name": "4e avenue / de Verdun",
      "latitude": 45.4568844514464,
      "longitude": -73.57260704040527
    },
    {
      "code": 6310,
      "name": "de Soissons / de Darlington",
      "latitude": 45.50687644639119,
      "longitude": -73.62359181046486
    },
    {
      "code": 6311,
      "name": "Drolet / St-Zotique",
      "latitude": 45.53488214147823,
      "longitude": -73.60941231250763
    },
    {
      "code": 6312,
      "name": "de Kent / de la Côte-des-Neiges",
      "latitude": 45.50144933057703,
      "longitude": -73.63305062055588
    },
    {
      "code": 6313,
      "name": "Palm / St-Remi",
      "latitude": 45.470303,
      "longitude": -73.589848
    },
    {
      "code": 6314,
      "name": "de Lanaudière / Marie-Anne",
      "latitude": 45.52932643090091,
      "longitude": -73.57480645179749
    },
    {
      "code": 6315,
      "name": "Métro Côte-des-Neiges (Jean-Brillant / de la Côte-des-Neiges)",
      "latitude": 45.49626477461565,
      "longitude": -73.62154394388199
    },
    {
      "code": 6316,
      "name": "Swail / Decelles",
      "latitude": 45.49705494399436,
      "longitude": -73.61865252256392
    },
    {
      "code": 6321,
      "name": "Gary-Carter / St-Laurent",
      "latitude": 45.53589982664126,
      "longitude": -73.62244248390198
    },
    {
      "code": 6322,
      "name": "St-Dominique / Gounod",
      "latitude": 45.538737949470644,
      "longitude": -73.62802147865295
    },
    {
      "code": 6323,
      "name": "Guizot / St-Laurent",
      "latitude": 45.53966322230556,
      "longitude": -73.63447487354279
    },
    {
      "code": 6324,
      "name": "de Liège / Lajeunesse",
      "latitude": 45.545603545552744,
      "longitude": -73.63474041223526
    },
    {
      "code": 6327,
      "name": "Drolet / Faillon",
      "latitude": 45.53926979810152,
      "longitude": -73.6208787560463
    },
    {
      "code": 6328,
      "name": "De Gaspé / Villeray",
      "latitude": 45.53893805473212,
      "longitude": -73.62429320812224
    },
    {
      "code": 6329,
      "name": "Drolet / Gounod",
      "latitude": 45.54095134225734,
      "longitude": -73.62637460231781
    },
    {
      "code": 6330,
      "name": "de Gaspé / Jarry",
      "latitude": 45.540780049797995,
      "longitude": -73.63040059804916
    },
    {
      "code": 6331,
      "name": "Guizot / St-Denis",
      "latitude": 45.543423548290185,
      "longitude": -73.63246187567711
    },
    {
      "code": 6332,
      "name": "de Gaspé / de Liège",
      "latitude": 45.54248521237199,
      "longitude": -73.63634169101715
    },
    {
      "code": 6333,
      "name": "Leman / de Chateaubriand",
      "latitude": 45.547218,
      "longitude": -73.631103
    },
    {
      "code": 6334,
      "name": "Métro Jarry (Lajeunesse / Jarry)",
      "latitude": 45.54371190262865,
      "longitude": -73.62828433513641
    },
    {
      "code": 6335,
      "name": "du Rosaire / St-Hubert",
      "latitude": 45.54481928225348,
      "longitude": -73.6215104162693
    },
    {
      "code": 6336,
      "name": "Faillon / St-Hubert",
      "latitude": 45.54297175887712,
      "longitude": -73.61793905496597
    },
    {
      "code": 6338,
      "name": "de Chateaubriand / Jarry",
      "latitude": 45.54595481682399,
      "longitude": -73.62699151039122
    },
    {
      "code": 6339,
      "name": "Harvard / de Monkland",
      "latitude": 45.474565185029945,
      "longitude": -73.62403571605682
    },
    {
      "code": 6340,
      "name": "de la Roche / Everett",
      "latitude": 45.544867,
      "longitude": -73.614841
    },
    {
      "code": 6341,
      "name": "Regina / de Verdun",
      "latitude": 45.467369,
      "longitude": -73.570769
    },
    {
      "code": 6343,
      "name": "Marquette / Villeray",
      "latitude": 45.55068361610596,
      "longitude": -73.61529305577278
    },
    {
      "code": 6344,
      "name": "St-Dominique / Jean-Talon",
      "latitude": 45.53524809921431,
      "longitude": -73.61756354570389
    },
    {
      "code": 6345,
      "name": "Louis-Hémon / Villeray",
      "latitude": 45.55496126357668,
      "longitude": -73.61073732376097
    },
    {
      "code": 6346,
      "name": "Nicolet / Sherbrooke",
      "latitude": 45.54969542033443,
      "longitude": -73.55464696884155
    },
    {
      "code": 6347,
      "name": "Métro St-Michel (Shaughnessy / St-Michel)",
      "latitude": 45.559199,
      "longitude": -73.599658
    },
    {
      "code": 6349,
      "name": "Ryde / Charlevoix",
      "latitude": 45.4757434,
      "longitude": -73.5646007
    },
    {
      "code": 6350,
      "name": "Island / Centre",
      "latitude": 45.48149081388884,
      "longitude": -73.56475353240967
    },
    {
      "code": 6354,
      "name": "Marcil / Sherbrooke",
      "latitude": 45.471743,
      "longitude": -73.613924
    },
    {
      "code": 6355,
      "name": "Ontario / Sicard",
      "latitude": 45.55626186680846,
      "longitude": -73.53744059801102
    },
    {
      "code": 6356,
      "name": "de Monkland / Girouard",
      "latitude": 45.47710675189806,
      "longitude": -73.6214379966259
    },
    {
      "code": 6357,
      "name": "13e avenue / St-Zotique",
      "latitude": 45.557487317400046,
      "longitude": -73.5887485742569
    },
    {
      "code": 6358,
      "name": "1ère  avenue / St-Zotique",
      "latitude": 45.551937362101,
      "longitude": -73.59392791986465
    },
    {
      "code": 6359,
      "name": "Ste-Catherine / St-Laurent",
      "latitude": 45.50981336049594,
      "longitude": -73.5638952255249
    },
    {
      "code": 6360,
      "name": "8e avenue / Beaubien",
      "latitude": 45.553215,
      "longitude": -73.58752
    },
    {
      "code": 6361,
      "name": "Molson / Beaubien",
      "latitude": 45.54968589617967,
      "longitude": -73.59115451574326
    },
    {
      "code": 6362,
      "name": "1ère avenue / Rosemont",
      "latitude": 45.54779995287998,
      "longitude": -73.58486741781235
    },
    {
      "code": 6363,
      "name": "de la Côte St-Antoine / Royal",
      "latitude": 45.468926984877434,
      "longitude": -73.6198702454567
    },
    {
      "code": 6364,
      "name": "de Chambly / Rachel",
      "latitude": 45.54991069359101,
      "longitude": -73.55826258659361
    },
    {
      "code": 6366,
      "name": "Wilderton  / Van Horne",
      "latitude": 45.51014162409143,
      "longitude": -73.6247518658638
    },
    {
      "code": 6367,
      "name": "3e avenue / Dandurand",
      "latitude": 45.547294918516386,
      "longitude": -73.57899874448776
    },
    {
      "code": 6368,
      "name": "10e avenue / Masson",
      "latitude": 45.55030553030546,
      "longitude": -73.57335269451141
    },
    {
      "code": 6369,
      "name": "U. Concordia - Campus Loyola (Sherbrooke / West Broadway)",
      "latitude": 45.45750908083069,
      "longitude": -73.6394852399826
    },
    {
      "code": 6370,
      "name": "d'Orléans / Masson",
      "latitude": 45.557192,
      "longitude": -73.569847
    },
    {
      "code": 6371,
      "name": "4e avenue / Masson",
      "latitude": 45.546978,
      "longitude": -73.575515
    },
    {
      "code": 6372,
      "name": "1ère avenue / Masson",
      "latitude": 45.5451997,
      "longitude": -73.57645065
    },
    {
      "code": 6373,
      "name": "7e avenue / St-Joseph Rosemont",
      "latitude": 45.547226645250745,
      "longitude": -73.56986984610558
    },
    {
      "code": 6374,
      "name": "15e avenue / Masson",
      "latitude": 45.55389801568004,
      "longitude": -73.5713866353035
    },
    {
      "code": 6375,
      "name": "Métro Place St-Henri (St-Ferdinand / St-Jacques)",
      "latitude": 45.477249,
      "longitude": -73.587238
    },
    {
      "code": 6376,
      "name": "de Chambly / St-Joseph",
      "latitude": 45.552842358447656,
      "longitude": -73.56529533863068
    },
    {
      "code": 6377,
      "name": "Grand Trunk / Hibernia",
      "latitude": 45.47968,
      "longitude": -73.56385
    },
    {
      "code": 6379,
      "name": "de l'Église / Bannantyne",
      "latitude": 45.4632535358533,
      "longitude": -73.57587933540344
    },
    {
      "code": 6380,
      "name": "Parc J.-Arthur-Champagne (de Chambly / du Mont-Royal)",
      "latitude": 45.551584,
      "longitude": -73.561916
    },
    {
      "code": 6381,
      "name": "Omer-Lavallée / du Midway",
      "latitude": 45.5457759528664,
      "longitude": -73.56217458844185
    },
    {
      "code": 6383,
      "name": "Bourbonnière / du Mont-Royal",
      "latitude": 45.55357073967113,
      "longitude": -73.56049418449402
    },
    {
      "code": 6384,
      "name": "Darling / Sherbrooke",
      "latitude": 45.54545890380305,
      "longitude": -73.55666935443878
    },
    {
      "code": 6385,
      "name": "de Bordeaux / Gilford",
      "latitude": 45.53611005443118,
      "longitude": -73.5762870311737
    },
    {
      "code": 6386,
      "name": "Métro Préfontaine (Moreau / Hochelaga)",
      "latitude": 45.54178033474308,
      "longitude": -73.55571448802948
    },
    {
      "code": 6387,
      "name": "Métro Joliette  (Joliette / Hochelaga)",
      "latitude": 45.54690718297082,
      "longitude": -73.5515570640564
    },
    {
      "code": 6388,
      "name": "d'Orléans / Hochelaga",
      "latitude": 45.55076798270114,
      "longitude": -73.54942739009857
    },
    {
      "code": 6389,
      "name": "Boyer / Jean-Talon",
      "latitude": 45.54158631132448,
      "longitude": -73.61248075962067
    },
    {
      "code": 6391,
      "name": "Aylwin / Ontario",
      "latitude": 45.544284173851494,
      "longitude": -73.54533970355988
    },
    {
      "code": 6393,
      "name": "Dézéry / Ontario",
      "latitude": 45.54111008519643,
      "longitude": -73.54754984378815
    },
    {
      "code": 6394,
      "name": "Valois / Ontario",
      "latitude": 45.54740496161695,
      "longitude": -73.54467451572418
    },
    {
      "code": 6395,
      "name": "Métro Viau (Pierre-de-Coubertin / Viau)",
      "latitude": 45.561782815423854,
      "longitude": -73.54661107063293
    },
    {
      "code": 6396,
      "name": "Métro Pie-IX (Pierre-de-Coubertin / Pie-IX)",
      "latitude": 45.55421375524564,
      "longitude": -73.55155974626541
    },
    {
      "code": 6397,
      "name": "Marché Maisonneuve",
      "latitude": 45.55321884238814,
      "longitude": -73.53978216648102
    },
    {
      "code": 6398,
      "name": "Desjardins / Ontario",
      "latitude": 45.5511918874866,
      "longitude": -73.54087248444557
    },
    {
      "code": 6401,
      "name": "des Seigneurs / Notre-Dame",
      "latitude": 45.48772278774177,
      "longitude": -73.5690826177597
    },
    {
      "code": 6402,
      "name": "Ste-Émilie / Sir-Georges-Etienne-Cartier",
      "latitude": 45.47266800851548,
      "longitude": -73.585389778018
    },
    {
      "code": 6403,
      "name": "Georges-Vanier / Notre-Dame",
      "latitude": 45.485047979822774,
      "longitude": -73.5719633102417
    },
    {
      "code": 6404,
      "name": "Quesnel / Vinet",
      "latitude": 45.485889,
      "longitude": -73.577514
    },
    {
      "code": 6405,
      "name": "Duvernay / Charlevoix",
      "latitude": 45.4820980397155,
      "longitude": -73.57487618923187
    },
    {
      "code": 6406,
      "name": "Marché Atwater",
      "latitude": 45.48020822800015,
      "longitude": -73.57759863138199
    },
    {
      "code": 6407,
      "name": "Charlevoix / Lionel-Groulx",
      "latitude": 45.48392802,
      "longitude": -73.57731164
    },
    {
      "code": 6408,
      "name": "Métro Georges-Vanier (St-Antoine / Canning)",
      "latitude": 45.4891,
      "longitude": -73.57656
    },
    {
      "code": 6409,
      "name": "Lionel-Groulx / George-Vanier",
      "latitude": 45.48621939184824,
      "longitude": -73.5737469792366
    },
    {
      "code": 6410,
      "name": "Métro Crémazie (Crémazie / Lajeunesse)",
      "latitude": 45.54640752148169,
      "longitude": -73.63842844963074
    },
    {
      "code": 6411,
      "name": "Clark / Prince-Arthur",
      "latitude": 45.5133025720765,
      "longitude": -73.57296109199524
    },
    {
      "code": 6412,
      "name": "Complexe sportif Claude-Robillard",
      "latitude": 45.553262,
      "longitude": -73.638615
    },
    {
      "code": 6413,
      "name": "Union / Cathcart",
      "latitude": 45.50355184389659,
      "longitude": -73.56875538825989
    },
    {
      "code": 6414,
      "name": "Parc St-Henri (Laporte / Guay)",
      "latitude": 45.48013378575666,
      "longitude": -73.58590811491013
    },
    {
      "code": 6415,
      "name": "de Melrose / Sherbrooke",
      "latitude": 45.469819787448564,
      "longitude": -73.61696138978003
    },
    {
      "code": 6416,
      "name": "Notre-Dame-de-Grâce / Décarie",
      "latitude": 45.47735333523628,
      "longitude": -73.61537218093872
    },
    {
      "code": 6417,
      "name": "de la Salle / Hochelaga",
      "latitude": 45.55415230370231,
      "longitude": -73.54749351739883
    },
    {
      "code": 6418,
      "name": "Paré / Mountain Sights",
      "latitude": 45.49810026070624,
      "longitude": -73.65294188261032
    },
    {
      "code": 6419,
      "name": "Beaucourt / de la Côte-Ste-Catherine",
      "latitude": 45.491513,
      "longitude": -73.633649
    },
    {
      "code": 6420,
      "name": "Métro Snowdon (de Westbury / Queen-Mary)",
      "latitude": 45.48538473242346,
      "longitude": -73.62814217805862
    },
    {
      "code": 6421,
      "name": "Cartier / Rosemont",
      "latitude": 45.54124722370603,
      "longitude": -73.59104454517365
    },
    {
      "code": 6422,
      "name": "Fleury / Lajeunesse",
      "latitude": 45.55357892880519,
      "longitude": -73.66208285093306
    },
    {
      "code": 6423,
      "name": "Hôpital général juif (de la Côte Ste-Catherine / Légaré)",
      "latitude": 45.496302,
      "longitude": -73.629822
    },
    {
      "code": 6424,
      "name": "Square Chaboillez (St-Jacques / de la Cathédrale)",
      "latitude": 45.49656303562923,
      "longitude": -73.56491714715958
    },
    {
      "code": 6425,
      "name": "Métro de l'Église (Ross / de l'Église)",
      "latitude": 45.462846046287325,
      "longitude": -73.56592163443565
    },
    {
      "code": 6426,
      "name": "Métro Verdun (Willibrord / de Verdun)",
      "latitude": 45.459487694540734,
      "longitude": -73.57209205627441
    },
    {
      "code": 6427,
      "name": "Métro Lasalle (de Rushbrooke / Caisse)",
      "latitude": 45.47069642604657,
      "longitude": -73.56542240828276
    },
    {
      "code": 6428,
      "name": "Berlioz / de l'Île des Soeurs",
      "latitude": 45.45998577640931,
      "longitude": -73.54395568370819
    },
    {
      "code": 6429,
      "name": "Place du Commerce",
      "latitude": 45.46714,
      "longitude": -73.54259
    },
    {
      "code": 6432,
      "name": "de Maisonneuve / Greene",
      "latitude": 45.48697062,
      "longitude": -73.58929306
    },
    {
      "code": 6433,
      "name": "Hillside / Ste-Catherine",
      "latitude": 45.48282602624293,
      "longitude": -73.59084337949753
    },
    {
      "code": 6434,
      "name": "Victoria / de Maisonneuve",
      "latitude": 45.47742856483265,
      "longitude": -73.60016942024231
    },
    {
      "code": 6435,
      "name": "Victoria Hall",
      "latitude": 45.48129146961133,
      "longitude": -73.6003303527832
    },
    {
      "code": 6436,
      "name": "Argyle / Sherbrooke",
      "latitude": 45.48580087370364,
      "longitude": -73.5957974300254
    },
    {
      "code": 6501,
      "name": "Metro Jean-Drapeau (Chemin Macdonald)",
      "latitude": 45.512800575819625,
      "longitude": -73.5311159491539
    },
    {
      "code": 6502,
      "name": "Casino de Montréal",
      "latitude": 45.5063732,
      "longitude": -73.52457672
    },
    {
      "code": 6503,
      "name": "Métro Parc  (Ogilvy / Hutchison)",
      "latitude": 45.53035130173597,
      "longitude": -73.6243924498558
    },
    {
      "code": 6504,
      "name": "La Ronde",
      "latitude": 45.52156536710626,
      "longitude": -73.53533238172531
    },
    {
      "code": 6700,
      "name": "de la Salle / Ste-Catherine",
      "latitude": 45.54996328646854,
      "longitude": -73.53443384170531
    },
    {
      "code": 6701,
      "name": "Stanley / Sherbrooke",
      "latitude": 45.50104110864491,
      "longitude": -73.57717752456664
    },
    {
      "code": 6702,
      "name": "Métro Assomption (Chauveau / de l'Assomption)",
      "latitude": 45.569789,
      "longitude": -73.548081
    },
    {
      "code": 6703,
      "name": "Jardin Botanique (Pie-IX / Sherbrooke)",
      "latitude": 45.55500446099039,
      "longitude": -73.55535507202148
    },
    {
      "code": 6704,
      "name": "19e avenue / St-Zotique",
      "latitude": 45.561594,
      "longitude": -73.585643
    },
    {
      "code": 6705,
      "name": "5e avenue / Bannantyne",
      "latitude": 45.456365,
      "longitude": -73.57614
    },
    {
      "code": 6706,
      "name": "Beatty / de Verdun",
      "latitude": 45.450729976972944,
      "longitude": -73.5725748538971
    },
    {
      "code": 6707,
      "name": "Métro Jolicoeur (Drake / de Sève)",
      "latitude": 45.45608545783109,
      "longitude": -73.58193710446358
    },
    {
      "code": 6709,
      "name": "Le Caron / Marc-Sauvalle",
      "latitude": 45.461685,
      "longitude": -73.584039
    },
    {
      "code": 6710,
      "name": "Chambord / Fleury",
      "latitude": 45.55982811984724,
      "longitude": -73.65832507610321
    },
    {
      "code": 6711,
      "name": "Alexandra / Waverly",
      "latitude": 45.531938,
      "longitude": -73.617842
    },
    {
      "code": 6712,
      "name": "LaSalle / Crawford",
      "latitude": 45.43791380065227,
      "longitude": -73.58274042606354
    },
    {
      "code": 6713,
      "name": "29e avenue / St-Zotique",
      "latitude": 45.56776565172907,
      "longitude": -73.57968807220459
    },
    {
      "code": 6714,
      "name": "LaSalle / 90e avenue",
      "latitude": 45.417147421132526,
      "longitude": -73.64422470331192
    },
    {
      "code": 6715,
      "name": "Natatorium (LaSalle / Rolland)",
      "latitude": 45.44454701497536,
      "longitude": -73.57509076595306
    },
    {
      "code": 6716,
      "name": "Francis / Fleury",
      "latitude": 45.56387237463668,
      "longitude": -73.6555677652359
    },
    {
      "code": 6717,
      "name": "de Kent / Victoria",
      "latitude": 45.49456403292622,
      "longitude": -73.63870203495026
    },
    {
      "code": 6718,
      "name": "Grand Boulevard / Sherbrooke",
      "latitude": 45.466569,
      "longitude": -73.623295
    },
    {
      "code": 6719,
      "name": "Park Row O / Sherbrooke",
      "latitude": 45.46072936353252,
      "longitude": -73.63407254219055
    },
    {
      "code": 6720,
      "name": "Ontario / Viau",
      "latitude": 45.5594818,
      "longitude": -73.535496
    },
    {
      "code": 6721,
      "name": "Métro Cadillac (de Cadillac / Sherbrooke)",
      "latitude": 45.5769632283486,
      "longitude": -73.54683637619019
    },
    {
      "code": 6722,
      "name": "du Quesne / Pierre-de-Coubertin",
      "latitude": 45.57498439946887,
      "longitude": -73.53884875774384
    },
    {
      "code": 6723,
      "name": "26e avenue / Beaubien",
      "latitude": 45.564944,
      "longitude": -73.577639
    },
    {
      "code": 6724,
      "name": "Léa-Roback / Sir-Georges-Etienne-Cartier",
      "latitude": 45.47166862589184,
      "longitude": -73.582643866539
    },
    {
      "code": 6725,
      "name": "Métro Monk (Allard / Beaulieu)",
      "latitude": 45.45085122,
      "longitude": -73.5940272
    },
    {
      "code": 6726,
      "name": "Hamel / Sauvé",
      "latitude": 45.56076192837154,
      "longitude": -73.6505614221096
    },
    {
      "code": 6727,
      "name": "de la Sucrerie / Centre",
      "latitude": 45.48408128505464,
      "longitude": -73.56091797351837
    },
    {
      "code": 6728,
      "name": "d'Outremont / Ogilvy",
      "latitude": 45.52687028194893,
      "longitude": -73.62672328948975
    },
    {
      "code": 6729,
      "name": "St-André / Ste-Catherine",
      "latitude": 45.516426545782224,
      "longitude": -73.5581123828888
    },
    {
      "code": 6730,
      "name": "35e avenue / Beaubien",
      "latitude": 45.570081,
      "longitude": -73.573047
    },
    {
      "code": 6731,
      "name": "28e avenue / Rosemont",
      "latitude": 45.564353,
      "longitude": -73.571244
    },
    {
      "code": 6732,
      "name": "Fortune / Wellington",
      "latitude": 45.477923,
      "longitude": -73.559038
    },
    {
      "code": 6733,
      "name": "Villeray / de Normanville",
      "latitude": 45.547172039327485,
      "longitude": -73.6185210943222
    },
    {
      "code": 6734,
      "name": "Lajeunesse / Villeray",
      "latitude": 45.54211889,
      "longitude": -73.6225471
    },
    {
      "code": 6735,
      "name": "Villeray / St-Michel",
      "latitude": 45.56105928295798,
      "longitude": -73.6039674282074
    },
    {
      "code": 6736,
      "name": "Métro Henri-Bourassa (Henri-Bourassa / Millen)",
      "latitude": 45.55675103297278,
      "longitude": -73.66716161370277
    },
    {
      "code": 6737,
      "name": "Jacques-Casault / Christophe-Colomb",
      "latitude": 45.552123,
      "longitude": -73.630103
    },
    {
      "code": 6738,
      "name": "Union / René-Lévesque",
      "latitude": 45.50235036136798,
      "longitude": -73.56658279895781
    },
    {
      "code": 6739,
      "name": "Pierre-de-Coubertin / Langelier",
      "latitude": 45.580314546424674,
      "longitude": -73.5353136062622
    },
    {
      "code": 6741,
      "name": "Canning / Notre-Dame",
      "latitude": 45.486318644010225,
      "longitude": -73.5702332854271
    },
    {
      "code": 6742,
      "name": "St-Patrick / Briand",
      "latitude": 45.46339729163665,
      "longitude": -73.59643578529356
    },
    {
      "code": 6743,
      "name": "St-Marc / Sherbrooke",
      "latitude": 45.494514,
      "longitude": -73.583368
    },
    {
      "code": 6744,
      "name": "Hamilton / Jolicoeur",
      "latitude": 45.456355,
      "longitude": -73.597557
    },
    {
      "code": 6745,
      "name": "de l'Épée / Jean-Talon",
      "latitude": 45.52797966680089,
      "longitude": -73.62388283014297
    },
    {
      "code": 6746,
      "name": "Métro Acadie (de l'Acadie / Beaumont)",
      "latitude": 45.52357479400008,
      "longitude": -73.62344294786453
    },
    {
      "code": 6747,
      "name": "Waverly / St-Zotique",
      "latitude": 45.53050525974957,
      "longitude": -73.61470833420753
    },
    {
      "code": 6748,
      "name": "Young / Wellington",
      "latitude": 45.49282530947313,
      "longitude": -73.55797827243805
    },
    {
      "code": 6749,
      "name": "St-Jacques / St-Laurent",
      "latitude": 45.50642115207643,
      "longitude": -73.55646550655365
    },
    {
      "code": 6750,
      "name": "de Mentana / Gilford",
      "latitude": 45.52872356043453,
      "longitude": -73.58385890722275
    },
    {
      "code": 6752,
      "name": "Hutchison / Beaubien",
      "latitude": 45.52605851018324,
      "longitude": -73.61296892166138
    },
    {
      "code": 6753,
      "name": "Centre ÉPIC (St-Zotique / 40e avenue)",
      "latitude": 45.57414703721992,
      "longitude": -73.57462137937546
    },
    {
      "code": 6754,
      "name": "Eadie / Dubois",
      "latitude": 45.45759682462104,
      "longitude": -73.59052859581423
    },
    {
      "code": 6901,
      "name": "Gare d'autocars de Montréal (Berri / Ontario)",
      "latitude": 45.51689676614314,
      "longitude": -73.5639488697052
    },
    {
      "code": 6902,
      "name": "Montcalm / Ontario",
      "latitude": 45.521081043206834,
      "longitude": -73.56227517127991
    },
    {
      "code": 6903,
      "name": "St-Dominique / Napoléon",
      "latitude": 45.51666442219882,
      "longitude": -73.57722043991089
    },
    {
      "code": 6904,
      "name": "Fabre / Beaubien",
      "latitude": 45.5420595590383,
      "longitude": -73.59787344932556
    },
    {
      "code": 6905,
      "name": "Parc Rosemont (Dandurand / d'Iberville)",
      "latitude": 45.544377,
      "longitude": -73.581018
    },
    {
      "code": 6906,
      "name": "Métro Rosemont (de St-Vallier / Rosemont)",
      "latitude": 45.5319548635849,
      "longitude": -73.59816044569016
    },
    {
      "code": 6907,
      "name": "Boyer / Rosemont",
      "latitude": 45.534136,
      "longitude": -73.595478
    },
    {
      "code": 6908,
      "name": "de Bellechasse / de St-Vallier",
      "latitude": 45.53341043363302,
      "longitude": -73.60112428665161
    },
    {
      "code": 6910,
      "name": "Boyer / Beaubien",
      "latitude": 45.537041,
      "longitude": -73.602026
    },
    {
      "code": 6912,
      "name": "Métro Beaubien (de Chateaubriand / Beaubien)",
      "latitude": 45.5353599615622,
      "longitude": -73.60363483428955
    },
    {
      "code": 6913,
      "name": "Drolet / Beaubien",
      "latitude": 45.533348,
      "longitude": -73.605834
    },
    {
      "code": 6915,
      "name": "Alma / Beaubien",
      "latitude": 45.53243586450861,
      "longitude": -73.60665500164032
    },
    {
      "code": 6916,
      "name": "Parc du Pélican (2e avenue / St-Joseph)",
      "latitude": 45.544513,
      "longitude": -73.571564
    },
    {
      "code": 6917,
      "name": "Basile-Routhier / Chabanel",
      "latitude": 45.549868431421636,
      "longitude": -73.64765658974648
    },
    {
      "code": 6918,
      "name": "Garnier / des Carrières",
      "latitude": 45.53755266430292,
      "longitude": -73.58993947505951
    },
    {
      "code": 6919,
      "name": "Bibliothèque de Rosemont (9e avenue / Rosemont)",
      "latitude": 45.55201648333515,
      "longitude": -73.58185529708862
    },
    {
      "code": 6921,
      "name": "Augustin-Cantin / Shearer",
      "latitude": 45.48401829,
      "longitude": -73.5634366
    },
    {
      "code": 6923,
      "name": "Marquette / Jean-Talon",
      "latitude": 45.54740777921938,
      "longitude": -73.60766887664795
    },
    {
      "code": 6924,
      "name": "de Bordeaux / Jean-Talon",
      "latitude": 45.54975479298636,
      "longitude": -73.60556602478027
    },
    {
      "code": 6925,
      "name": "des Écores / Jean-Talon",
      "latitude": 45.55236372328009,
      "longitude": -73.60286772251129
    },
    {
      "code": 6926,
      "name": "Marie-Anne / St-Hubert",
      "latitude": 45.5246829812827,
      "longitude": -73.5788968205452
    },
    {
      "code": 6927,
      "name": "Édouard-Montpetit / de Stirling",
      "latitude": 45.50723,
      "longitude": -73.615085
    },
    {
      "code": 6928,
      "name": "Jean-Brillant / McKenna",
      "latitude": 45.49876714523858,
      "longitude": -73.61886978149414
    },
    {
      "code": 6929,
      "name": "St-André / St-Grégoire",
      "latitude": 45.53147464147482,
      "longitude": -73.59242051839828
    },
    {
      "code": 6930,
      "name": "Cité des Arts du Cirque (Paul Boutet / des Regrattiers)",
      "latitude": 45.55984236120471,
      "longitude": -73.61544728279114
    },
    {
      "code": 7001,
      "name": "Ball / Querbes",
      "latitude": 45.531177514650885,
      "longitude": -73.6321359872818
    },
    {
      "code": 7002,
      "name": "Meunier / Fleury",
      "latitude": 45.54485857398681,
      "longitude": -73.66681426763535
    },
    {
      "code": 7003,
      "name": "Métro Guy-Concordia (Guy / St-Catherine)",
      "latitude": 45.49498148219463,
      "longitude": -73.57773274183273
    },
    {
      "code": 7004,
      "name": "Émile-Journault / de Chateaubriand",
      "latitude": 45.54983321292286,
      "longitude": -73.64063255488873
    },
    {
      "code": 7005,
      "name": "Marquette / Fleury",
      "latitude": 45.56735205736566,
      "longitude": -73.65378744900227
    },
    {
      "code": 7006,
      "name": "Clark / Fleury",
      "latitude": 45.54764847825576,
      "longitude": -73.6655656993389
    },
    {
      "code": 7007,
      "name": "Kirkfield / de Chambois",
      "latitude": 45.51293324107222,
      "longitude": -73.63389015197754
    },
    {
      "code": 7008,
      "name": "Rousselot / Jarry",
      "latitude": 45.55076907833167,
      "longitude": -73.62091094255447
    },
    {
      "code": 7009,
      "name": "Place Émilie-Gamelin (de Maisonneuve / Berri)",
      "latitude": 45.51569016499682,
      "longitude": -73.56096625328064
    },
    {
      "code": 7010,
      "name": "Coolbrook / Queen-Mary",
      "latitude": 45.48285235405571,
      "longitude": -73.63034427165985
    },
    {
      "code": 7011,
      "name": "Panet / de Maisonneuve",
      "latitude": 45.520573635013434,
      "longitude": -73.55614364147186
    },
    {
      "code": 7012,
      "name": "St-Hubert / René-Lévesque",
      "latitude": 45.51433537033962,
      "longitude": -73.55646349489689
    },
    {
      "code": 7013,
      "name": "Benny / Sherbrooke",
      "latitude": 45.4648769981855,
      "longitude": -73.62659722566605
    },
    {
      "code": 7014,
      "name": "Métro Université de Montréal (Édouard-Montpetit / Louis-Collin)",
      "latitude": 45.50427796704115,
      "longitude": -73.61797660589218
    },
    {
      "code": 7015,
      "name": "Parc des Rapides (LaSalle / 6e avenue)",
      "latitude": 45.42947143740888,
      "longitude": -73.59309915918857
    },
    {
      "code": 7016,
      "name": "Métro Langelier (Langelier / Sherbrooke)",
      "latitude": 45.58284663189181,
      "longitude": -73.54247644543648
    },
    {
      "code": 7017,
      "name": "Bennett / Ste-Catherine",
      "latitude": 45.55305326642512,
      "longitude": -73.53242754936218
    },
    {
      "code": 7018,
      "name": "Valois / Ste-Catherine",
      "latitude": 45.54522973039872,
      "longitude": -73.53725016117096
    },
    {
      "code": 7019,
      "name": "Casgrain / St-Viateur",
      "latitude": 45.52751292628879,
      "longitude": -73.59879076480864
    },
    {
      "code": 7020,
      "name": "St-Germain / Hochelaga",
      "latitude": 45.5436987529516,
      "longitude": -73.55367332696915
    },
    {
      "code": 7021,
      "name": "Dollard / Van Horne",
      "latitude": 45.51915286772737,
      "longitude": -73.61646920442581
    },
    {
      "code": 7022,
      "name": "Durocher / Bernard",
      "latitude": 45.52222528598142,
      "longitude": -73.60668718814848
    },
    {
      "code": 7023,
      "name": "CHSLD St-Michel (Jarry / 8e avenue)",
      "latitude": 45.561690269046075,
      "longitude": -73.61051201820374
    },
    {
      "code": 7024,
      "name": "Berri / St-Joseph",
      "latitude": 45.52723106564012,
      "longitude": -73.58672618865965
    },
    {
      "code": 7025,
      "name": "St-Dominique / Bernard",
      "latitude": 45.52793332015246,
      "longitude": -73.60122251338906
    },
    {
      "code": 7026,
      "name": "Maguire / Henri-Julien",
      "latitude": 45.527041096087785,
      "longitude": -73.59347056655677
    },
    {
      "code": 7027,
      "name": "Terrasse Guindon / Fullum",
      "latitude": 45.537114135456825,
      "longitude": -73.56913894414902
    },
    {
      "code": 7028,
      "name": "de Gaspé / St-Viateur",
      "latitude": 45.52774827884841,
      "longitude": -73.59743893146515
    },
    {
      "code": 7029,
      "name": "Cartier / Masson",
      "latitude": 45.5380207402854,
      "longitude": -73.58352363109587
    },
    {
      "code": 7030,
      "name": "de Bordeaux / Marie-Anne",
      "latitude": 45.53340912723174,
      "longitude": -73.57065707445145
    },
    {
      "code": 7031,
      "name": "Berri / Rachel",
      "latitude": 45.522718910827734,
      "longitude": -73.5772043466568
    },
    {
      "code": 7032,
      "name": "Drolet / Laurier",
      "latitude": 45.526251876092516,
      "longitude": -73.58975838928018
    },
    {
      "code": 7033,
      "name": "Aylmer / Prince-Arthur",
      "latitude": 45.508566869474386,
      "longitude": -73.57769787311554
    },
    {
      "code": 7034,
      "name": "Atwater / Greene",
      "latitude": 45.480495143306044,
      "longitude": -73.57782661914825
    },
    {
      "code": 7035,
      "name": "Fullum / Gilford",
      "latitude": 45.53922374455291,
      "longitude": -73.57383679656778
    },
    {
      "code": 7036,
      "name": "Labadie / du Parc",
      "latitude": 45.5198946757576,
      "longitude": -73.59682738780975
    },
    {
      "code": 7037,
      "name": "Prince-Arthur / Ste-Famille",
      "latitude": 45.5116382139746,
      "longitude": -73.57463479042053
    },
    {
      "code": 7038,
      "name": "Guilbault / Clark",
      "latitude": 45.514107949601446,
      "longitude": -73.57523024082184
    },
    {
      "code": 7039,
      "name": "du Mont-Royal / Augustin-Frigon",
      "latitude": 45.543763151117474,
      "longitude": -73.56772005558014
    },
    {
      "code": 7040,
      "name": "St-Urbain / Beaubien",
      "latitude": 45.52951033828327,
      "longitude": -73.61067965626717
    },
    {
      "code": 7041,
      "name": "de Maisonneuve / Peel",
      "latitude": 45.50095054783712,
      "longitude": -73.57457846403122
    },
    {
      "code": 7042,
      "name": "Alexandra / Jean-Talon",
      "latitude": 45.532330645908054,
      "longitude": -73.62018674612045
    },
    {
      "code": 7043,
      "name": "Ernest-Gendreau / du Mont-Royal",
      "latitude": 45.549713734001415,
      "longitude": -73.56384828686714
    },
    {
      "code": 7044,
      "name": "Hôpital Santa Cabrini (St-Zotique / Jeanne-Jugan)",
      "latitude": 45.5793249650848,
      "longitude": -73.5705041885376
    },
    {
      "code": 7045,
      "name": "Casgrain / Mozart",
      "latitude": 45.53472725603326,
      "longitude": -73.6147928237915
    },
    {
      "code": 7046,
      "name": "de Maisonneuve / Mansfield (nord)",
      "latitude": 45.502386079583346,
      "longitude": -73.57333794236183
    },
    {
      "code": 7047,
      "name": "Ottawa / Peel",
      "latitude": 45.49390894768301,
      "longitude": -73.55950713157654
    },
    {
      "code": 7048,
      "name": "Métro Angrignon (Lamont /  des Trinitaires)",
      "latitude": 45.44704365278581,
      "longitude": -73.6021783483011
    },
    {
      "code": 7049,
      "name": "William / Guy",
      "latitude": 45.48986545713166,
      "longitude": -73.56473073363304
    },
    {
      "code": 7050,
      "name": "Ottawa / William",
      "latitude": 45.48972725318433,
      "longitude": -73.56406286358833
    },
    {
      "code": 7051,
      "name": "Jogues / Allard",
      "latitude": 45.450020323797766,
      "longitude": -73.60030621290207
    },
    {
      "code": 7052,
      "name": "Shearer / Centre",
      "latitude": 45.483005619293046,
      "longitude": -73.56218665838242
    },
    {
      "code": 7053,
      "name": "Ropery / Augustin-Cantin",
      "latitude": 45.48091406771754,
      "longitude": -73.56846034526825
    },
    {
      "code": 7054,
      "name": "de la Côte St-Paul / St-Ambroise",
      "latitude": 45.467665653865964,
      "longitude": -73.59391784324544
    },
    {
      "code": 7055,
      "name": "Rose-de-Lima / Notre-Dame",
      "latitude": 45.479950265560184,
      "longitude": -73.5805356502533
    },
    {
      "code": 7056,
      "name": "Bibliothèque de Verdun (Brown / Bannantyne)",
      "latitude": 45.44826204820947,
      "longitude": -73.57785612344742
    },
    {
      "code": 7057,
      "name": "2e avenue / Wellington",
      "latitude": 45.45789352611307,
      "longitude": -73.56752824096475
    },
    {
      "code": 7058,
      "name": "Gordon / Wellington",
      "latitude": 45.461077990108386,
      "longitude": -73.56730699539183
    },
    {
      "code": 7059,
      "name": "Argyle / de Verdun",
      "latitude": 45.45301583620112,
      "longitude": -73.57191503047943
    },
    {
      "code": 7060,
      "name": "de l'Église / de Verdun",
      "latitude": 45.46300108733155,
      "longitude": -73.57156895217486
    },
    {
      "code": 7061,
      "name": "Lajeunesse / de Castelnau",
      "latitude": 45.540396208099985,
      "longitude": -73.61681789159775
    },
    {
      "code": 7062,
      "name": "William / Robert-Bourassa",
      "latitude": 45.49716534003792,
      "longitude": -73.55933010578154
    },
    {
      "code": 7063,
      "name": "Drolet / Jarry",
      "latitude": 45.54195463236575,
      "longitude": -73.62994194030762
    },
    {
      "code": 7064,
      "name": "Clark / de Liège",
      "latitude": 45.539983846015616,
      "longitude": -73.6381347477436
    },
    {
      "code": 7065,
      "name": "de Lanaudière / Bélanger",
      "latitude": 45.54365085053057,
      "longitude": -73.60565051436424
    },
    {
      "code": 7066,
      "name": "St-Urbain / de la Gauchetière",
      "latitude": 45.50707812811467,
      "longitude": -73.56139540672302
    },
    {
      "code": 7067,
      "name": "City Councillors / du President-Kennedy",
      "latitude": 45.50625103256782,
      "longitude": -73.57139065861702
    },
    {
      "code": 7068,
      "name": "Basin / Richmond",
      "latitude": 45.48753098712153,
      "longitude": -73.56507003307343
    },
    {
      "code": 7069,
      "name": "Jeanne-Mance / René-Lévesque",
      "latitude": 45.5063713381299,
      "longitude": -73.5642009973526
    },
    {
      "code": 7070,
      "name": "Bourgeoys / Favard",
      "latitude": 45.47993042065731,
      "longitude": -73.55592101812363
    },
    {
      "code": 7071,
      "name": "St-Mathieu / Sherbrooke",
      "latitude": 45.495789104811756,
      "longitude": -73.58259558677672
    },
    {
      "code": 7072,
      "name": "Beaudry / Sherbrooke",
      "latitude": 45.52303493310712,
      "longitude": -73.56539458036421
    },
    {
      "code": 7073,
      "name": "Logan / de Champlain",
      "latitude": 45.5231943285584,
      "longitude": -73.55584256350994
    },
    {
      "code": 7074,
      "name": "St-André / Robin",
      "latitude": 45.518128086513194,
      "longitude": -73.56185138225555
    },
    {
      "code": 7075,
      "name": "CIUSSS (du Trianon / Pierre-de-Coubertin)",
      "latitude": 45.58753125134183,
      "longitude": -73.5319072008133
    },
    {
      "code": 7076,
      "name": "Tupper / du Fort",
      "latitude": 45.49122961531575,
      "longitude": -73.58078241348267
    },
    {
      "code": 7077,
      "name": "Jean Langlois / Fullum",
      "latitude": 45.526499983000186,
      "longitude": -73.54575277422555
    },
    {
      "code": 7078,
      "name": "Hochelaga / Chapleau",
      "latitude": 45.53445294687473,
      "longitude": -73.55965197086334
    },
    {
      "code": 7079,
      "name": "Notre-Dame / Gauvin",
      "latitude": 45.50010529681542,
      "longitude": -73.56019914150238
    },
    {
      "code": 7080,
      "name": "du President-Kennedy / Union",
      "latitude": 45.50501114975704,
      "longitude": -73.57202768325806
    },
    {
      "code": 7081,
      "name": "St-Denis / de Maisonneuve",
      "latitude": 45.514384629068346,
      "longitude": -73.56173202395439
    },
    {
      "code": 7082,
      "name": "Métro Lionel-Groulx (Atwater / Lionel-Groulx)",
      "latitude": 45.482941269100394,
      "longitude": -73.57974171638489
    },
    {
      "code": 7083,
      "name": "Parc de Bullion (de Bullion / Prince-Arthur)",
      "latitude": 45.515604257816335,
      "longitude": -73.57213497161865
    },
    {
      "code": 7084,
      "name": "McTavish / Sherbrooke",
      "latitude": 45.502812816508936,
      "longitude": -73.57602417469025
    },
    {
      "code": 7085,
      "name": "de la Grande-Allée / Ste-Catherine",
      "latitude": 45.631379636554705,
      "longitude": -73.50685738027096
    },
    {
      "code": 7086,
      "name": "Parc de l'Hôtel-de-Ville (Dubé / Laurendeau)",
      "latitude": 45.630650344762316,
      "longitude": -73.49499464035034
    },
    {
      "code": 7087,
      "name": "St-Jean-Baptiste / René-Lévesque",
      "latitude": 45.64155705644063,
      "longitude": -73.50037515163422
    },
    {
      "code": 7088,
      "name": "du Tricentenaire / de Montigny",
      "latitude": 45.65140583915357,
      "longitude": -73.50041270256041
    },
    {
      "code": 7089,
      "name": "du Tricentenaire / Prince-Albert",
      "latitude": 45.64954588445726,
      "longitude": -73.49191546440125
    },
    {
      "code": 7090,
      "name": "de St-Firmin / Fleury",
      "latitude": 45.57065664170425,
      "longitude": -73.65184217691422
    },
    {
      "code": 7091,
      "name": "Fleury / André-Jobin",
      "latitude": 45.57600034155425,
      "longitude": -73.64676475524902
    },
    {
      "code": 7092,
      "name": "Gare Bois-de-Boulogne",
      "latitude": 45.53972553109637,
      "longitude": -73.67716491222382
    },
    {
      "code": 7093,
      "name": "Laforest / Dudemaine",
      "latitude": 45.539806548176045,
      "longitude": -73.6872661113739
    },
    {
      "code": 7094,
      "name": "Alfred Laliberté / de Poutrincourt",
      "latitude": 45.53308032414161,
      "longitude": -73.6945965886116
    },
    {
      "code": 7095,
      "name": "Chabanel / de l'Esplanade",
      "latitude": 45.540685517278774,
      "longitude": -73.65337640047073
    },
    {
      "code": 7096,
      "name": "Chabanel / du Parc",
      "latitude": 45.53830765459552,
      "longitude": -73.6548838019371
    },
    {
      "code": 7097,
      "name": "Bélanger / des Galeries d'Anjou",
      "latitude": 45.59722114932571,
      "longitude": -73.56279015541077
    },
    {
      "code": 7098,
      "name": "Parc d'Antioche",
      "latitude": 45.59535188887634,
      "longitude": -73.55858981609344
    },
    {
      "code": 7099,
      "name": "Vezina / Victoria",
      "latitude": 45.49704689488635,
      "longitude": -73.64321619272232
    },
    {
      "code": 7100,
      "name": "Métro Namur (des Jockeys / Décarie)",
      "latitude": 45.49404432109336,
      "longitude": -73.65449488162994
    },
    {
      "code": 7101,
      "name": "Métro de la Savane (de Sorel / Bougainville)",
      "latitude": 45.500450948002225,
      "longitude": -73.66142839193344
    },
    {
      "code": 7102,
      "name": "Grand Boulevard / de Terrebonne",
      "latitude": 45.47054370043364,
      "longitude": -73.63168001174927
    },
    {
      "code": 7103,
      "name": "St-Joseph / 8e avenue Lachine",
      "latitude": 45.43147138678842,
      "longitude": -73.67120504379272
    },
    {
      "code": 7104,
      "name": "8e avenue / Notre-Dame Lachine",
      "latitude": 45.43498715540587,
      "longitude": -73.67079868912697
    },
    {
      "code": 7105,
      "name": "St-Joseph / 34e avenue Lachine",
      "latitude": 45.432839840726125,
      "longitude": -73.69349151849747
    },
    {
      "code": 7106,
      "name": "Victoria / 18e avenue Lachine",
      "latitude": 45.43579350588776,
      "longitude": -73.6801904439926
    },
    {
      "code": 7107,
      "name": "19e avenue / St-Joseph Lachine",
      "latitude": 45.43312379149661,
      "longitude": -73.68140548467636
    },
    {
      "code": 7108,
      "name": "Gagne / LaSalle",
      "latitude": 45.422451407155854,
      "longitude": -73.601194024086
    },
    {
      "code": 7109,
      "name": "Cégep André-Laurendeau",
      "latitude": 45.43566446235294,
      "longitude": -73.60565185546875
    },
    {
      "code": 7110,
      "name": "LaSalle / 67e avenue",
      "latitude": 45.415348837097696,
      "longitude": -73.62651407718658
    },
    {
      "code": 7111,
      "name": "Highlands / LaSalle",
      "latitude": 45.42612352042827,
      "longitude": -73.65741580724716
    },
    {
      "code": 7112,
      "name": "Newman / Senkus",
      "latitude": 45.44404309237571,
      "longitude": -73.61375212669373
    },
    {
      "code": 7113,
      "name": "Casgrain / Maguire",
      "latitude": 45.52593260934618,
      "longitude": -73.59525293111801
    },
    {
      "code": 7114,
      "name": "Smith / Peel",
      "latitude": 45.492837758845226,
      "longitude": -73.5564199090004
    },
    {
      "code": 7115,
      "name": "Métro Radisson (Sherbrooke / des Groseilliers)",
      "latitude": 45.58917500418707,
      "longitude": -73.53965610265732
    },
    {
      "code": 7116,
      "name": "Métro Honoré-Beaugrand (Sherbrooke / Honoré-Beaugrand)",
      "latitude": 45.5967964774917,
      "longitude": -73.53517949581145
    },
    {
      "code": 7117,
      "name": "François-Boivin / Bélanger",
      "latitude": 45.59259615276133,
      "longitude": -73.56617510318756
    },
    {
      "code": 7118,
      "name": "Tellier / des Futailles",
      "latitude": 45.58600999065885,
      "longitude": -73.52183818817139
    },
    {
      "code": 7119,
      "name": "Notre-Dame / Liébert",
      "latitude": 45.59280261038491,
      "longitude": -73.51046562194824
    },
    {
      "code": 7120,
      "name": "Notre-Dame / des Ormeaux",
      "latitude": 45.59920617334637,
      "longitude": -73.5122399032116
    },
    {
      "code": 7121,
      "name": "de Bruxelles / Hochelaga",
      "latitude": 45.59264808020603,
      "longitude": -73.52521777153015
    },
    {
      "code": 7122,
      "name": "de Belleville / Fleury",
      "latitude": 45.58116002977833,
      "longitude": -73.64124342799187
    },
    {
      "code": 7123,
      "name": "des Récollets / Martial",
      "latitude": 45.59089190991344,
      "longitude": -73.64061713218689
    },
    {
      "code": 7124,
      "name": "Dollard / Bernard",
      "latitude": 45.51678269880724,
      "longitude": -73.61142262816429
    },
    {
      "code": 7125,
      "name": "Rosemont / Viau",
      "latitude": 45.56833021674857,
      "longitude": -73.56666326522826
    },
    {
      "code": 7126,
      "name": "41e avenue / Rosemont",
      "latitude": 45.57178977666956,
      "longitude": -73.56431499123573
    },
    {
      "code": 7127,
      "name": "Jeanne-Mance / Beaubien",
      "latitude": 45.527650097960205,
      "longitude": -73.61229971051216
    },
    {
      "code": 7128,
      "name": "Métro Côte-Vertu (Gohier / Edouard-Laurin)",
      "latitude": 45.512989627641865,
      "longitude": -73.68249848484993
    },
    {
      "code": 7129,
      "name": "de l'Eglise / St-Germain",
      "latitude": 45.51255920872999,
      "longitude": -73.67701068520546
    },
    {
      "code": 7130,
      "name": "Métro du Collège (Cartier / Décarie)",
      "latitude": 45.50843904979172,
      "longitude": -73.6729645729065
    },
    {
      "code": 7131,
      "name": "Bibliothèque du Boisé (Thimens / Todd)",
      "latitude": 45.50463493033909,
      "longitude": -73.70443224906921
    },
    {
      "code": 7132,
      "name": "Ste-Croix / Tassé",
      "latitude": 45.519492499678165,
      "longitude": -73.6851042509079
    },
    {
      "code": 7133,
      "name": "Thimens / Alexis-Nihon",
      "latitude": 45.50897852206792,
      "longitude": -73.69856357574463
    },
    {
      "code": 7134,
      "name": "Poirier / O'Brien",
      "latitude": 45.52246015438048,
      "longitude": -73.69156435132027
    },
    {
      "code": 7135,
      "name": "Cavendish / Poirier",
      "latitude": 45.50622283591452,
      "longitude": -73.71148109436035
    },
    {
      "code": 7136,
      "name": "Marcel-Laurin / Beaudet",
      "latitude": 45.50684315902468,
      "longitude": -73.68175685405731
    },
    {
      "code": 7137,
      "name": "de Lisieux / Jean-Talon",
      "latitude": 45.57934937043077,
      "longitude": -73.58168095350266
    },
    {
      "code": 7138,
      "name": "Dumesnil / Bélanger",
      "latitude": 45.587777966914885,
      "longitude": -73.56935352087021
    },
    {
      "code": 7139,
      "name": "Parc Plage",
      "latitude": 45.50282785563674,
      "longitude": -73.52779269218445
    },
    {
      "code": 7140,
      "name": "St-Jacques / des Seigneurs",
      "latitude": 45.489185716082275,
      "longitude": -73.57190027832984
    },
    {
      "code": 7141,
      "name": "Turgeon / Notre-Dame",
      "latitude": 45.478888528072076,
      "longitude": -73.58198940753937
    },
    {
      "code": 7142,
      "name": "Elgar / de l'Île-des-Sœurs",
      "latitude": 45.45682318753668,
      "longitude": -73.546804189682
    },
    {
      "code": 7143,
      "name": "LaSalle / Godin",
      "latitude": 45.44693448484644,
      "longitude": -73.57219934463501
    },
    {
      "code": 7144,
      "name": "Hickson / Wellington",
      "latitude": 45.46489251773306,
      "longitude": -73.56699787080288
    },
    {
      "code": 7145,
      "name": "Argyle / Bannantyne",
      "latitude": 45.453318765468914,
      "longitude": -73.5767751932144
    },
    {
      "code": 7146,
      "name": "Lusignan / St-Jacques",
      "latitude": 45.492222393331566,
      "longitude": -73.56934815645218
    },
    {
      "code": 7147,
      "name": "Métro de Castelnau (de Castelnau / Clark)",
      "latitude": 45.53473935096963,
      "longitude": -73.62076878547667
    },
    {
      "code": 7148,
      "name": "Papineau / Émile-Journault",
      "latitude": 45.55988367688166,
      "longitude": -73.63356828689575
    },
    {
      "code": 7149,
      "name": "16e avenue / Jean-Talon",
      "latitude": 45.56244008398078,
      "longitude": -73.59533339738846
    },
    {
      "code": 7150,
      "name": "du Souvenir / Chomedey",
      "latitude": 45.55188644388879,
      "longitude": -73.74444007873535
    },
    {
      "code": 7151,
      "name": "Métro Montmorency (de l'Avenir / Jacques-Tétreault)",
      "latitude": 45.558108953383545,
      "longitude": -73.71959745883942
    },
    {
      "code": 7152,
      "name": "Parc St-Claude (7e avenue / 8e rue)",
      "latitude": 45.56266824826759,
      "longitude": -73.6923623085022
    },
    {
      "code": 7153,
      "name": "Métro Cartier (des Laurentides / Cartier)",
      "latitude": 45.56002974868339,
      "longitude": -73.68133574724197
    }
  ];

  export default bixiStations;