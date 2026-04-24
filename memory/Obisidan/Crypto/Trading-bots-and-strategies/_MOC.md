# Map of Content - Trading Bots and Strategies

> Cluster : Crypto trading bots / Trading bots and strategies
> Vault généré : 2026-04-20

---

## Introduction

Le cluster "Trading bots and strategies" couvre l'écosystème des bots de trading automatique appliqués au marché crypto. Il aborde les architectures techniques (comment construire un bot), les stratégies de trading (grid, momentum, mean reversion, arbitrage), les méthodes d'évaluation et de validation (backtesting, forward testing), et les controverses associées (martingale, HFT, scams).

Le cluster est structuré autour de plusieurs pôles : les **concepts fondamentaux** (trading bot, trading algorithmique, market making, liquidité), les **stratégies** (mean reversion, momentum, grid, arbitrage), les **méthodes** (backtesting, gestion du risque, position sizing), et les **débats/controverses** (martingale, HFT, fiabilité des signaux, scams).

L'interconnexion est forte : une page sur le backtesting lie au machine learning, qui lui-même lie aux neural networks et au surapprentissage. La gestion du risque connecte à peu près toutes les autres pages, reflétant son importance centrale.

---

## Pages par type

### Concepts (10 pages)

| Page                  | Description                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------ |
| Trading bot           | Logiciel automatisé qui exécute des ordres selon des règles préprogrammées, éliminant les émotions |
| Trading algorithmique | Exécution systématique d'ordres via instructions mathématiques pré-programmées             |
| Market making         | Stratégie de capture du spread via ordres simultanés achat/vente                           |
| Arbitrage             | Exploitation des différences de prix entre marchés                                         |
| Haute fréquence       | Stratégies sub-secondes nécessitant infrastructure massive                                 |
| Grid trading          | Placement d'ordres à intervalles réguliers pour capturer la volatilité                     |
| BTC momentum breakout | Variante BTC-only combinant trend filter, breakout et confirmation par le volume           |
| Bot DCA               | Achats automatiques à intervalles réguliers pour accumuler                                 |
| Liquidité             | Facilité d'acheter/vendre sans impact significatif sur le prix                             |
| Order book dynamics   | Visualisation en temps réel du carnet d'ordres                                             |
| Risk-reward ratio     | Relation entre profit potentiel et perte potentielle                                       |

### Théories (6 pages)

| Page | Description |
|------|-------------|
| Stratégie de mean reversion | Théorie que les prix retournent vers leur moyenne |
| Stratégie de momentum | Théorie que les prix continuent dans leur direction récente |
| Moving average crossover | Croisement de moyennes mobiles pour générer des signaux |
| RSI Divergence strategy | Divergences RSI pour identifier les retournements |
| Bollinger Bands breakout | Cassures des bandes de volatilité |
| Kelly Criterion | Formule mathématique pour le dimensionnement optimal |
| Machine learning pour trading | Application du ML à la prédiction et stratégies |
| Neural networks pour trading crypto | Réseaux de neurones pour la prédiction crypto |
| Apprentissage par renforcement | Agents RL qui apprennent par trial and error |

### Méthodes (8 pages)

| Page | Description |
|------|-------------|
| Backtesting | Test de stratégies sur données historiques |
| Forward testing | Test en temps réel simulé (paper trading) |
| Gestion du risque | Méthodes pour identifier, évaluer et contrôler les risques |
| Position sizing | Dimensionnement des positions par trade |
| Analyse technique pour bots | Utilisation d'indicateurs et patterns pour générer des signaux |
| Multi timeframe analysis | Analyse sur plusieurs horizons temporels |
| Sentiment analysis | Extraction de l'humeur du marché via NLP |

### Termes (6 pages)

| Page | Description |
|------|-------------|
| Slippage | Différence entre prix attendu et prix d'exécution |
| Drawdown | Baisse du capital depuis le pic jusqu'au creux |
| API d'échange | Interface de programmation pour interagir avec les exchanges |

### Controverses (5 pages)

| Page | Description |
|------|-------------|
| Martingale strategy | Doubler la position après chaque perte - risqué |
| Smart money concept | Théorie de tracking des gros acteurs institutionnels |
| L'arbitrage crypto est-il sans risque ? | Risques réels de l'arbitrage souvent sous-estimés |
| Les bots de trading sont-ils des schemes de Ponzi ? | Analyse critique des plateformes frauduleuses |
| Flash crash | Chutes de prix soudaines causées par des cascades algorithmiques |

### Débats (3 pages)

| Page | Description |
|------|-------------|
| Les bots surpassent-ils le trading manuel | Bots vs humains : outperformance mitigée |
| Fiabilité des services de signaux de trading | Track records souvent fabricated |
| Le HFT est-il bénéfique ou nuisible pour le crypto | Débat sur la liquidité vs toxicité du HFT |
| Le ML peut-il battre l'analyse technique | ML vs analyse technique traditionnelle |

### Institutions (2 pages)

| Page | Description |
|------|-------------|
| 3Commas | Plateforme de bots popularisée, touchée par le collapse FTX |
| Bitsgap | Plateforme concurrente avec focus sur l'arbitrage |

---

## Bridge Pages (connexions cross-cluster)

Ces pages connectent le cluster Trading Bots à d'autres domaines :

1. **[[Machine learning pour trading]]** → AI/ML cluster
2. **[[Sentiment analysis pour trading]]** → NLP/Social cluster
3. **[[Liquidité]]** → Blockchain cluster (on-chain analytics)
4. **[[Haute fréquence]]** → Traditional Finance cluster
5. **[[3Commas]]** → Platform ecosystem
6. **[[Bollinger Bands breakout]]** → Technical analysis cluster

---

## Pages à approfondir (to-verify / à-sourcer)

| Page | Statut | Action requise |
|------|--------|----------------|
| Flash crash | to-verify | Vérifier incidents spécifiques via WebSearch |
| Martingale strategy | to-verify | Confirmer données sur les pertes liées à la martingale |
| Les bots surpassent-ils le trading manuel | to-verify | Vérifier études citées |
| Smart money concept | to-verify | Confirmer efficacité vs backtest |
| Fiabilité des services de signaux | to-verify | Vérifier études Reuters/Bloomberg |
| Le HFT est-il bénéfique ou nuisible | to-verify | Vérifier données SEC/CFTC |
| L'arbitrage crypto est-il sans risque | to-verify | Confirmer risques documentés |
| Les bots de trading sont-ils des schemes de Ponzi | to-verify | Confirmer cas Bitconnect, 3Commas |
| 3Commas | to-verify | Confirmer informations biographiques |

---

## Statistiques du cluster

- **Total pages** : 40
- **Wikilinks** : ~320+ (moyenne ~8 par page)
- **Pages to-verify** : 9
- **Pages vérifiées** : 31
- **Distribution** : 8 types représentés, aucun type > 30%

## Extensions post-pilot

- [[BTC momentum breakout]]
- [[BTC momentum breakout backtest]]