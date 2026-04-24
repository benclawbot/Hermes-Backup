---
titre: "BTC momentum breakout"
type: méthode
cluster: "Trading bots and strategies"
statut: hypothétique
controverse: medium
importance: standard
source_knowledge: mixed
sources_count: 2
tags: [#méthode/btc, #méthode/momentum, #méthode/breakout, #méthode/backtesting]
créé: 2026-04-22
liens_forts: ["[[Breakout trading]]", "[[Trend trading]]", "[[Volume-weighted strategies]]", "[[Position sizing]]", "[[Cadres de backtesting]]"]
liens_opposition: ["[[Stratégie de mean reversion]]", "[[Counter-trend trading]]"]
---

# BTC momentum breakout

> [!info] Résumé
> Stratégie long-only sur BTC visant à capturer les cassures haussières dans un régime déjà haussier. L'idée n'est pas de prédire Bitcoin, mais de n'entrer que quand la structure, le momentum et le volume confirment une continuation.

## Hypothèse d'edge

Le meilleur edge praticable trouvé dans le vault pour du trading réel sur BTC est une combinaison de [[Breakout trading]], [[Trend trading]] et confirmation par le volume. Le marché crypto est souvent porté par des régimes de momentum, et BTC en particulier réagit fortement aux sorties de range, aux niveaux psychologiques, et aux changements de structure.

Cette stratégie cherche donc à éviter les paris discrétionnaires sur les tops et bottoms et à ne prendre que des configurations où :
- la tendance de fond est déjà positive
- le prix casse un plus haut récent
- le volume confirme la cassure

## Règles de la stratégie

### Entrée
Entrer long sur BTC quand, sur données journalières :
1. le close est au-dessus de la moyenne mobile 200 jours
2. le close casse le plus haut des 20 derniers jours
3. le volume du jour est supérieur à 1,2 fois la moyenne mobile 20 jours du volume

L'exécution du backtest a été simulée à l'open du jour suivant.

### Sortie
Sortir si l'un des critères suivants est déclenché :
1. close sous le plus bas des 10 derniers jours
2. close sous la moyenne mobile 50 jours
3. stop de protection à -8% depuis l'entrée

### Coûts de transaction
Le backtest inclut 10 bps par côté pour approximer frais + slippage.

## Pourquoi cette version et pas une autre

Cette version est plus réaliste pour Thomas qu'une stratégie plus complexe car elle reste :
- compréhensible
- backtestable simplement
- compatible avec une charge mentale limitée
- moins dépendante d'une infrastructure lourde que l'[[Arbitrage]] ou le market making

Elle est aussi plus robuste qu'une simple logique d'indicateur isolé. Ici, la tendance longue, la cassure et le volume doivent être alignés.

## Confiance et allocation

Confiance actuelle : **modérée**, pas élevée.

Raisons :
- la logique est cohérente avec le vault
- le backtest full-history est bon
- la performance out-of-sample reste positive
- mais la stratégie sous-performe un buy-and-hold BTC très haussier sur 2023+ en performance brute
- elle reste sensible aux faux breakouts et aux régimes latéraux

Allocation proposée : **12% de la sleeve crypto actuelle**, soit environ **600 USD sur 5 000 USD**.

Interprétation :
- assez importante pour être significative
- assez petite pour rester compatible avec un contexte personnel fragile
- allocation adaptée à une confiance prudente, pas à une conviction maximale

## Implémentation live (2026-04-23)

Stratégie codée dans `benclawbot/Claude-trading-bot` :
- `strategies/btc_momentum_breakout.py`
- `utils/indicators.py` : ajout `rolling_close_high_20` (max close, pas max high)

**Backtest 500 jours (Dec 2024 – Apr 2026) :**
- CAGR : +1.4% | WinRate : 50% | Prof Factor : 2.28 | MaxDD : 0.8% | Trades : 4
- Note : fenêtre capture la pire période BTC depuis 2022 (76k→63k, -21.5%). BTC sous 200d EMA la majeure partie du temps — la stratégie reste à juste titre à l'écart. Working as designed.

## Résultats de backtest

Voir : [[BTC momentum breakout backtest]]

Résumé rapide :
- période testée : 2018-01-01 → 2026-04-22
- rendement total stratégie : +1748,72%
- CAGR : +42,07%
- max drawdown : -34,60%
- buy-and-hold BTC sur la même période : +487,32%
- en out-of-sample 2023+ : la stratégie reste positive mais sous-performe le buy-and-hold en rendement pur, avec un drawdown bien plus faible

## Limites

- stratégie encore daily, pas intraday
- pas de filtre macro ou on-chain
- pas de test multi-exchange
- pas d'analyse approfondie des faux breakouts en phase de range prolongé
- pas encore de walk-forward complet ni d'optimisation robuste des paramètres

## Prochaine amélioration utile

La meilleure suite logique serait :
1. ajouter un filtre de régimes pour éviter les marchés trop latéraux
2. tester plusieurs variantes de breakout sur BTC uniquement
3. faire un walk-forward propre
4. comparer à une variante pullback après breakout

## Sources

[^1]: Vault interne : [[Breakout trading]], [[Trend trading]], [[Volume-weighted strategies]], [[Position sizing]], [[Cadres de backtesting]]
[^2]: Backtest quotidien BTCUSDT sur données Binance exécuté le 2026-04-22
