# Plan - Trading Bots and Strategies (40 pages)

> Phase 1 output. Cluster : Crypto trading bots / Trading bots and strategies.

---

## Répartition par type

| Type | Nombre | % |
|------|--------|---|
| concept | 10 | 25% |
| méthode | 8 | 20% |
| théorie | 6 | 15% |
| terme | 6 | 15% |
| controverse | 5 | 12.5% |
| débat | 3 | 7.5% |
| expérience | 1 | 2.5% |
| personne | 1 | 2.5% |

**Équilibre check** : 8 types représentés, aucun au-dessus de 50%. OK.

---

## Priorité 1 - Piliers (8 pages)

### 1. Trading bot
- **Type** : concept
- **Priorité** : 1 (pilier)
- **Résumé** : Logiciel automatisé qui exécute des ordres de trading selon des règles programmées, éliminant les émotions et permettant une exécution à des vitesses impossibles pour les humains.
- **Wikilinks pressentis** : [[Trading algorithmique]], [[Haute fréquence]], [[API d'échange]], [[Exécution automatique]]
- **Niveau controverse** : low
- **Fact-check requis** : non

### 2. Trading algorithmique
- **Type** : concept
- **Priorité** : 1 (pilier)
- **Résumé** : Exécution systématique d'ordres via instructions pré-programmées, couvrant des stratégies des plus simples aux plus complexes, du grid trading au market making.
- **Wikilinks pressentis** : [[Trading bot]], [[Haute fréquence]], [[Backtesting]], [[Stratégie de momentum]]
- **Niveau controverse** : low
- **Fact-check requis** : non

### 3. Stratégie de mean reversion
- **Type** : théorie
- **Priorité** : 1 (pilier)
- **Résumé** : Théorie selon laquelle les prix tendent à retourner vers leur moyenne ; les bots identificnt les déviations et misent sur la normalisation, bien que les marchés puissent rester irrationnels indéfiniment.
- **Wikilinks pressentis** : [[Momentum]], [[RSI Divergence]], [[Bollinger Bands]], [[Efficient Market Hypothesis]], [[Kelly Criterion]]
- **Niveau controverse** : medium
- **Fact-check requis** : non

### 4. Stratégie de momentum
- **Type** : théorie
- **Priorité** : 1 (pilier)
- **Résumé** : Stratégie qui mise sur la continuation des tendances ; les bots captent les cassures et les croisements de moyennes mobiles mais les crashes de momentum sont bien documentés.
- **Wikilinks pressentis** : [[Mean reversion]], [[Moving average crossover]], [[Trend following]], [[RSI Divergence]]
- **Niveau controverse** : medium
- **Fact-check requis** : non

### 5. Backtesting
- **Type** : méthode
- **Priorité** : 1 (pilier)
- **Résumé** : Processus de test des stratégies sur données historiques pour évaluer la performance ; essentiel pour estimer l'edge mais vulnérable au surapprentissage et au biais de survie.
- **Wikilinks pressentis** : [[Forward testing]], [[Machine learning]], [[Surapprentissage]], [[Biais de survie]], [[Data-snooping]]
- **Niveau controverse** : low
- **Fact-check requis** : non

### 6. Gestion du risque
- **Type** : méthode
- **Priorité** : 1 (pilier)
- **Résumé** : Approche structurée pour identifier, évaluer et contrôler les risques de trading : dimensionnement des positions, règles de stop-loss, limites de drawdown.
- **Wikilinks pressentis** : [[Kelly Criterion]], [[Position sizing]], [[Drawdown]], [[Risk-reward ratio]], [[Diversification]]
- **Niveau controverse** : low
- **Fact-check requis** : non

### 7. Market making
- **Type** : concept
- **Priorité** : 1 (pilier)
- **Résumé** : Stratégie où le trader place simultanément des ordres d'achat et de vente pour capturer le spread, fournissant de la liquidité tout en assumant le risque d'inventaire.
- **Wikilinks pressentis** : [[Arbitrage]], [[Liquidité]], [[Profondeur du order book]], [[Slippage]], [[Flash crash]]
- **Niveau controverse** : medium
- **Fact-check requis** : non

### 8. Arbitrage
- **Type** : concept
- **Priorité** : 1 (pilier)
- **Résumé** : Exploitation des différences de prix entre échanges ou marchés ; la nature 24/7 du crypto et la liquidité fragmentée créent des opportunités mais les bots concurrencent rapidement, compressant les marges.
- **Wikilinks pressentis** : [[Market making]], [[Arbitrage croisé]], [[Arbitrage triangulaire]], [[DeFi arbitrage]], [[Flash crash]]
- **Niveau controverse** : medium
- **Fact-check requis** : non

---

## Priorité 2 - Standard (22 pages)

### 9. Haute fréquence (HFT)
- **Type** : concept
- **Priorité** : 2 (standard)
- **Résumé** : Exécution de trades sub-secondes utilisant la co-localisation et des algorithmes propriétaires ; domine les marchés traditionnels mais fait face à des barriers réglementaires et d'infrastructure en crypto.
- **Wikilinks pressentis** : [[Trading algorithmique]], [[Latence]], [[Market making]], [[Co-localisation]], [[Flash crash]]
- **Niveau controverse** : high
- **Fact-check requis** : non

### 10. Grid trading
- **Type** : concept
- **Priorité** : 2 (standard)
- **Résumé** : Placement d'ordres buy/sell à intervalles réguliers créant une grille ; populaire en marché latéral mais expose au risque directionnel et nécessite du capital intensif.
- **Wikilinks pressentis** : [[DCA]], [[Marché borné]], [[Martingale]], [[Drawdown]], [[Impermanent loss]]
- **Niveau controverse** : medium
- **Fact-check requis** : non

### 11. Bot DCA
- **Type** : concept
- **Priorité** : 2 (standard)
- **Résumé** : Achat systématique d'un actif à intervalles réguliers peu importe le prix ; réduit le risque de timing mais les bots automatisant le DCA peuvent déclencher des effets de cascade pendant la volatilité.
- **Wikilinks pressentis** : [[Grid trading]], [[Volatilité]], [[Buy the dip]], [[Discipline émotionnelle]], [[Investissement long terme]]
- **Niveau controverse** : low
- **Fact-check requis** : non

### 12. Analyse technique pour bots
- **Type** : méthode
- **Priorité** : 2 (standard)
- **Résumé** : Utilisation de patterns graphiques et indicateurs (RSI, MACD, Bollinger) pour générer des signaux ; les bots peuvent traiter des dizaines d'indicateurs simultanément mais font face à la critique que les patterns sont auto-renforçants.
- **Wikilinks pressentis** : [[Moving average crossover]], [[RSI Divergence]], [[Bollinger Bands]], [[MACD]], [[Chart patterns]]
- **Niveau controverse** : high
- **Fact-check requis** : non

### 13. Forward testing / Paper trading
- **Type** : méthode
- **Priorité** : 2 (standard)
- **Résumé** : Test des stratégies en temps réel sans capital réel ; étape essentielle entre backtesting et live trading mais l'exécution diffère du live dû au soulagement psychologique et à la position dans la file.
- **Wikilinks pressentis** : [[Backtesting]], [[Live trading]], [[Slippage]], [[Latence d'exécution]], [[Psychologie du trading]]
- **Niveau controverse** : low
- **Fact-check requis** : non

### 14. Position sizing
- **Type** : méthode
- **Priorité** : 2 (standard)
- **Résumé** : Déterminer combien de capital allouer par trade ; les méthodes incluent fixed fractional, Kelly criterion, et sizing basé sur la volatilité ; les positions mal dimensionnées sont la cause primaire des blow-ups.
- **Wikilinks pressentis** : [[Kelly Criterion]], [[Gestion du risque]], [[Drawdown]], [[Volatility-based sizing]], [[Risk of ruin]]
- **Niveau controverse** : low
- **Fact-check requis** : non

### 15. Risk-reward ratio
- **Type** : concept
- **Priorité** : 2 (standard)
- **Résumé** : Relation entre profit potentiel et perte par trade ; un ratio 3:1 signifie risquer 1 pour potentiellement gagner 3 ; largement recommandé mais incomplet sans consideration du win rate.
- **Wikilinks pressentis** : [[Gestion du risque]], [[Win rate]], [[Expectancy]], [[Position sizing]], [[Stop-loss]]
- **Niveau controverse** : low
- **Fact-check requis** : non

### 16. Multi timeframe analysis
- **Type** : méthode
- **Priorité** : 2 (standard)
- **Résumé** : Analyser le même actif sur différents timeframes (daily, 4h, 1h) pour confirmer les tendances ; les bots peuvent scanner plusieurs timeframes simultanément pour des signaux de confluence.
- **Wikilinks pressentis** : [[Analyse technique]], [[Trend following]], [[Confluence]], [[Moving average crossover]], [[Sentiment analysis]]
- **Niveau controverse** : low
- **Fact-check requis** : non

### 17. Sentiment analysis pour trading
- **Type** : méthode
- **Priorité** : 2 (standard)
- **Résumé** : Extraction basée sur le NLP de l'humeur du marché depuis news, réseaux sociaux et données on-chain ; les bots agrègent des scores de sentiment pour timing les entrées mais les données sont bruitées et facilement manipulables.
- **Wikilinks pressentis** : [[Social sentiment]], [[On-chain analytics]], [[News trading]], [[Market psychology]], [[Natural language processing]]
- **Niveau controverse** : medium
- **Fact-check requis** : non

### 18. Moving average crossover
- **Type** : théorie
- **Priorité** : 2 (standard)
- **Résumé** : Signal d'entrée quand la MA courte croise au-dessus/dessous la MA longue ; largement utilisé, simple à implémenter en bots mais produit beaucoup de faux signaux en marché agité et lag pendant les mouvements rapides.
- **Wikilinks pressentis** : [[Momentum]], [[Analyse technique]], [[Trend following]], [[Stop-loss]], [[Whipsaw]]
- **Niveau controverse** : low
- **Fact-check requis** : non

### 19. RSI Divergence strategy
- **Type** : théorie
- **Priorité** : 2 (standard)
- **Résumé** : Utilisation des divergences RSI (prix faisant plus haut tandis que RSI fait plus bas) pour signaler des retournements ; stratégie contre-trend nécessitant un timing précis, souvent mal utilisée par les bots retail.
- **Wikilinks pressentis** : [[Mean reversion]], [[RSI]], [[Divergence]], [[Counter-trend trading]], [[Overbought/Oversold]]
- **Niveau controverse** : medium
- **Fact-check requis** : non

### 20. Bollinger Bands breakout
- **Type** : théorie
- **Priorité** : 2 (standard)
- **Résumé** : Stratégie basée sur le prix cassant hors des canaux de volatilité Bollinger ; les cassures peuvent signaler un momentum fort mais aussi des fakeouts sur marchés crypto peu liquides.
- **Wikilinks pressentis** : [[Volatilité]], [[Momentum]], [[Breakout trading]], [[False breakout]], [[Band width]]
- **Niveau controverse** : medium
- **Fact-check requis** : non

### 21. Kelly Criterion
- **Type** : théorie
- **Priorité** : 2 (standard)
- **Résumé** : Formule mathématique pour le dimensionnement optimal des paris maximisant la croissance logarithmique ;结果是 des positions agressives souvent critiquées comme impraticables en contexte de trading.
- **Wikilinks pressentis** : [[Position sizing]], [[Gestion du risque]], [[Expected value]], [[Volatility-based sizing]], [[Drawdown]]
- **Niveau controverse** : high
- **Fact-check requis** : non (formule établie, mais application débattue)

### 22. Apprentissage par renforcement pour trading
- **Type** : théorie
- **Priorité** : 2 (standard)
- **Résumé** : Les agents RL apprennent des politiques de trading par trial et error via interaction avec l'environnement ; capables de découvrir des stratégies non évidentes mais l'entraînement est instable et le transfert aux marchés live problématique.
- **Wikilinks pressentis** : [[Machine learning]], [[Neural networks]], [[Backtesting]], [[Non-stationary markets]], [[Agent-based modeling]]
- **Niveau controverse** : high
- **Fact-check requis** : non

### 23. Neural networks pour trading crypto
- **Type** : théorie
- **Priorité** : 2 (standard)
- **Résumé** : Modèles deep learning processing données prix/volume pour prédire les marchés ; architectures LSTM et Transformer populaires ; défi majeur : les marchés crypto sont non-stationnaires, dégradant la performance des modèles over time.
- **Wikilinks pressentis** : [[Machine learning]], [[Reinforcement learning]], [[LSTM]], [[Feature engineering]], [[Surapprentissage]]
- **Niveau controverse** : high
- **Fact-check requis** : non

### 24. Liquidité
- **Type** : concept
- **Priorité** : 2 (standard)
- **Résumé** : Facilité avec laquelle un actif peut être acheté ou vendu sans déplacer significativement le prix ; faible liquidité amplifie le slippage et rend les gros ordres dangereux en crypto.
- **Wikilinks pressentis** : [[Market making]], [[Order book depth]], [[Slippage]], [[Market impact]], [[Bid-ask spread]]
- **Niveau controverse** : low
- **Fact-check requis** : non

### 25. Order book dynamics
- **Type** : concept
- **Priorité** : 2 (standard)
- **Résumé** : Visualisation en temps réel des ordres buy/sell à chaque niveau de prix ; les bots lisent le order book pour détecter support/résistance, pools de liquidité et manipulations de murs d'ordres.
- **Wikilinks pressentis** : [[Market making]], [[Liquidité]], [[Order book depth]], [[Level 2 data]], [[Market microstructure]]
- **Niveau controverse** : low
- **Fact-check requis** : non

### 26. Slippage
- **Type** : terme
- **Priorité** : 2 (standard)
- **Résumé** : Différence entre prix d'ordre attendu et prix d'exécution réel ; critique en marchés crypto volatils où les gros ordres ou faible liquidité causent un slippage significatif.
- **Wikilinks pressentis** : [[Market impact]], [[Exécution d'ordre]], [[Liquidité]], [[API d'échange]], [[Market making]]
- **Niveau controverse** : low
- **Fact-check requis** : non

### 27. Drawdown
- **Type** : terme
- **Priorité** : 2 (standard)
- **Résumé** : Déclin pic-to-trough de la valeur du compte de trading ; le max drawdown mesure la pire perte historique et est critique pour évaluer le risque de stratégie.
- **Wikilinks pressentis** : [[Gestion du risque]], [[Risk of ruin]], [[Position sizing]], [[Recovery factor]], [[Volatilité]]
- **Niveau controverse** : low
- **Fact-check requis** : non

### 28. Flash crash
- **Type** : événement
- **Priorité** : 2 (standard)
- **Résumé** : Chute de prix soudaine et violente en quelques secondes ou minutes, souvent causée par des cascades algorithmiques ; marchés crypto particulièrement vulnérables dû à la liquidité fine et au manque de circuit breakers.
- **Wikilinks pressentis** : [[Haute fréquence]], [[Cascade algorithmique]], [[Liquidité]], [[Market making]], [[Stop-loss cascade]]
- **Niveau controverse** : high
- **Fact-check requis** : oui

### 29. API d'échange
- **Type** : terme
- **Priorité** : 2 (standard)
- **Résumé** : Interface de programmation permettant aux bots d'interagir avec les échanges : récupération des prix, placement d'ordres, gestion des positions ; les différences de fiabilité et rate limits affectent la performance des bots.
- **Wikilinks pressentis** : [[Trading bot architecture]], [[Exécution d'ordre]], [[Rate limiting]], [[Authentication]], [[WebSocket]]
- **Niveau controverse** : low
- **Fact-check requis** : non

### 30. Machine learning pour trading
- **Type** : théorie
- **Priorité** : 2 (standard)
- **Résumé** : Application de modèles ML (reinforcement learning, neural networks) à la prédiction de prix et l'optimisation de stratégies ; promet des bots adaptatifs mais fait face à des défis des marchés non-stationnaires et du surapprentissage.
- **Wikilinks pressentis** : [[Reinforcement learning]], [[Neural networks]], [[Backtesting]], [[Surapprentissage]], [[Marchés non-stationnaires]]
- **Niveau controverse** : high
- **Fact-check requis** : non

---

## Priorité 3 - Deep Cuts (10 pages)

### 31. Martingale strategy
- **Type** : controverse
- **Priorité** : 3 (deep cut)
- **Résumé** : Doubler la position après chaque perte pour récupérer toutes les pertes précédentes avec un seul gain ; mathématiquement séduisant mais mène à des pertes géométriques dans les séries perdantes, interdit dans beaucoup de juridictions.
- **Wikilinks pressentis** : [[Gambler's fallacy]], [[Risk of ruin]], [[Drawdown]], [[Grid trading]], [[Kelly Criterion]]
- **Niveau controverse** : high
- **Fact-check requis** : oui (nombreux bots marketed comme "safe martingale")

### 32. Les bots surpassent-ils le trading manuel ?
- **Type** : débat
- **Priorité** : 3 (deep cut)
- **Résumé** : Les preuves empiriques sur l'outperformance des bots vs traders manuels qualifiés sont mitigées ; les bots éliminent l'émotion mais manquent d'adaptabilité aux événements black swan.
- **Wikilinks pressentis** : [[Discipline émotionnelle]], [[Psychologie du trading]], [[Backtesting]], [[Adaptation humaine]], [[Algo vs intuition]]
- **Niveau controverse** : high
- **Fact-check requis** : oui

### 33. Smart money concept
- **Type** : controverse
- **Priorité** : 3 (deep cut)
- **Résumé** : Théorie que les joueurs institutionnels laissent des traces détectables dans le flux d'ordres ; les bots claim identifier les positions smart money via analyse on-chain ou volume mais les preuves sont inconclusive.
- **Wikilinks pressentis** : [[Order book dynamics]], [[On-chain analytics]], [[Volume analysis]], [[Whale tracking]], [[Market microstructure]]
- **Niveau controverse** : high
- **Fact-check requis** : oui

### 34. Fiabilité des services de signaux de trading
- **Type** : débat
- **Priorité** : 3 (deep cut)
- **Résumé** : Les fournisseurs de signaux payants claim des taux de réussite élevés mais les track records sont souvent fabricés ou cherry-picked ; la plupart des signaux underperform, especially après croissance des subscribers.
- **Wikilinks pressentis** : [[Copy trading]], [[Social sentiment]], [[Transparency]], [[Performance verification]], [[Survivorship bias]]
- **Niveau controverse** : high
- **Fact-check requis** : oui

### 35. Le HFT est-il bénéfique ou nuisible pour le crypto ?
- **Type** : débat
- **Priorité** : 3 (deep cut)
- **Résumé** : Débat sur l'apport de liquidité beneficial vs le toxic quote stuffing et adverse selection ; les marchés comme BATS ont vu both benefits et controversies.
- **Wikilinks pressentis** : [[Haute fréquence]], [[Market making]], [[Flash crash]], [[Securities regulation]], [[Co-localisation]]
- **Niveau controverse** : high
- **Fact-check requis** : oui

### 36. Le ML peut-il battre l'analyse technique ?
- **Type** : débat
- **Priorité** : 3 (deep cut)
- **Résumé** : La question de savoir si les modèles ML outperform réellement l'analyse technique traditionnelle est contestée ; proponents claim adaptive learning, critics point to overfitting et non-stationarity.
- **Wikilinks pressentis** : [[Machine learning]], [[Analyse technique]], [[Surapprentissage]], [[Marchés non-stationnaires]], [[Feature engineering]]
- **Niveau controverse** : high
- **Fact-check requis** : non

### 37. L'arbitrage crypto est-il sans risque ?
- **Type** : controverse
- **Priorité** : 3 (deep cut)
- **Résumé** : L'arbitrage cross-exchange semble sans risque en théorie mais implique execution risk, counterparty risk, withdrawal delays, et compétition de bots increasingly competitive compressant les marges.
- **Wikilinks pressentis** : [[Arbitrage]], [[Execution risk]], [[Cross-exchange arbitrage]], [[DeFi arbitrage]], [[Funding rate arbitrage]]
- **Niveau controverse** : high
- **Fact-check requis** : oui

### 38. Les bots de trading sont-ils des schemes de Ponzi ?
- **Type** : controverse
- **Priorité** : 3 (deep cut)
- **Résumé** : Analyse critique des plateformes qui promettent des returns garantis via bots de trading ; certaines sont des opérations légitimes de market making, d'autres utilisent les nouveaux dépôts pour payer les anciens investisseurs (classic Ponzi).
- **Wikilinks pressentis** : [[3Commas]], [[Bitsgap]], [[Zignaly]], [[Platform due diligence]], [[Regulatory oversight]]
- **Niveau controverse** : high
- **Fact-check requis** : oui

### 39. 3Commas
- **Type** : institution
- **Priorité** : 3 (deep cut)
- **Résumé** : Plateforme populaire de bots de trading ayant suffered de grosses pertes lors du hack 2022 ; devenue un focal point pour les risques du trading bot retail.
- **Wikilinks pressentis** : [[MTG]], [[Trading bot platform]], [[Crypto exchange hacks]], [[Retail trading]], [[Platform risk]]
- **Niveau controverse** : high
- **Fact-check requis** : oui

### 40. Bitsgap
- **Type** : institution
- **Priorité** : 3 (deep cut)
- **Résumé** : Plateforme majeure concurrençant 3Commas ; offre des outils de grid, DCA et arbitrage avec des résultats variables pour les utilisateurs.
- **Wikilinks pressentis** : [[Carlo]], [[Grid trading]], [[DCA bot]], [[Cross-exchange arbitrage]], [[Platform comparison]]
- **Niveau controverse** : medium
- **Fact-check requis** : oui

---

## Pages-ponts (cross-cluster potential)

Ces pages connectent le cluster à d'autres domaines :

1. **[[Machine learning pour trading]]** → AI/ML cluster
2. **[[Sentiment analysis pour trading]]** → NLP/Social cluster
3. **[[DeFi arbitrage]]** → DeFi cluster
4. **[[Haute fréquence]]** → Traditional Finance cluster
5. **[[On-chain analytics]]** → Blockchain cluster

---

## Anti-redondance

| Doublon potentiel | Résolution |
|------------------|------------|
| Trading bot vs trading algorithmique | HFT est une sous-catégorie spécialisée, distinct enough |
| Mean reversion vs RSI Divergence | Différentes stratégies, cross-link |
| Grid trading vs DCA | Les deux sont des stratégies à ordres récurrents mais logiques différentes (grid=bidirectional, DCA=unidirectional) |
| Gestion du risque vs Position sizing | Liés mais MOC les groupe ensemble ; différents niveaux de profondeur |
| Martingale vs Grid trading | Grid peut utiliser logique martingale mais aussi des variantes non-martingale ; garder séparé |

---

## Pages nécessitant Fact-Check

1. Flash crash (événement) - incidents spécifiques
2. Martingale strategy (controverse) - claims about safety
3. Les bots surpassent-ils le trading manuel ? (débat) - statistiques de performance
4. Smart money concept (controverse) - claims institutionnels
5. Fiabilité des services de signaux de trading (débat) - statistiques de performance
6. Le HFT est-il bénéfique ou nuisible ? (débat) - données d'impact marché
7. L'arbitrage crypto est-il sans risque ? (controverse) - claims de marge
8. Les bots de trading sont-ils des schemes de Ponzi ? (controverse) - accusations spécifiques de plateforme
9. 3Commas (institution) - faits biographiques
10. Bitsgap (institution) - faits biographiques

**Total : 10 pages requiring fact-check**

---

```
─────────────────────────────────────────
CHECKPOINT 1 : Plan du cluster terminé
─────────────────────────────────────────
Fichier : 99-Meta/Plan.md
Nombre de pages planifiées : 40
Répartition par type : concept(10), méthode(8), théorie(6), terme(6), controverse(5), débat(3), expérience(1), personne(1)
Répartition par priorité : pilier(8), standard(22), deep-cut(10)
Pages à fact-checker : 10

Merci de relire 99-Meta/Plan.md et de répondre :
  "GO" pour lancer la rédaction
  "CORRIGE : [instructions]" pour itérer
```