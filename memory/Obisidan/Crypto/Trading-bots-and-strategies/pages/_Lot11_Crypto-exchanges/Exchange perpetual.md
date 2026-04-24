---
titre: "Exchange perpetual"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/perpetual, #concept/exchange, #concept/derivatives]
créé: 2026-04-21
liens_forts: ["[[Exchange futures]]", "[[Exchange margin trading]]", "[[Funding rate]]", "[[Exchange fees]]", "[[Exchange liquidation]]", "[[Exchange order types]]", "[[Contango]]"]
---

# Exchange perpetual

> [!info] Résumé
> Les contrats perpétuels (perpetual swaps) sont des produits dérivés qui permettent de trader l'évolution du prix d'un actif sans date d'expiration. Contrairement aux [[Exchange futures|futures]] avec échéance, les perpétuels utilisent un mécanisme de funding rate pour maintenir le prix du contrat aligné avec le prix spot de l'actif sous-jacent.

## Mécanisme des contrats perpétuels

### Absence d'expiration

La caractéristique définissante des perpétuels est l'absence de date d'expiration. Les traders peuvent maintenir leurs positions aussi longtemps qu'ils le souhaitent, aussi longtemps que leur collateral est sufficient.

Cette caractéristique offre une flexibilité greater que les futures trimestriels. Les traders n'ont pas à se soucier du rollover ou de l'expiration du contrat.

### Funding rate

Le funding rate est un paiement périodique entre les positions longues et les positions courtes. Il est conçu pour maintenir le prix du contrat perpétuel aligné avec le prix spot de l'actif sous-jacent.

Quand le contrat se trade au-dessus du spot (contango), le funding rate est positif, et les longs paient les shorts. Quand le contrat se trade en dessous du spot (backwardation), le funding rate est négatif, et les shorts paient les longs.

Le funding rate est généralement payé toutes les 8 heures. Les traders qui longent et longent le contrat dans le bon sens peuvent receive funding, générant un revenu passif.

## Structure du marché perpétuel

### Marques de référence

Chaque contrat perpétuel a une marque de référence (mark price) qui est le prix théorique du contrat. Cette marque est calculée à partir du prix spot plus le funding rate accumulé.

Le prix de marché réel du contrat peut diverger temporairement de la marque de référence en raison de la liquidité et des imbalances entre buyers et sellers.

### Index de prix

L'index de prix est généralement une moyenne pondérée des prix spot sur plusieurs exchanges majeurs. Cette approche reduce l'impact d'une single exchange sur le prix de référence.

Pour BTC perpetual, l'index pourrait inclure les prix de Binance, Coinbase, Kraken, et d'autres exchanges spot avec une liquidité significative.

## Trading avec les perpétuels

### Position sizing et levier

Comme pour le [[Exchange margin trading]], les traders doivent calculer la taille de leur position en fonction de leur capital et du levier souhaité. Un capital de 1000 USD avec un levier de 10x permet de contrôler une position de 10000 USD.

Le leverage peut aller jusqu'à 125x sur certaines plateformes pour les paires principales. Plus le levier est élevé, plus le risque de liquidation est grand.

### Stratégies de trading

Les perpétuels sont utilisés pour une variety de stratégies :
- Directionnel trading pour capturar les mouvements de prix
- [[Funding rate arbitrage]] pour bénéficier des funding rates élevés
- [[Spot-Futures arbitrage]] pour capturer le contango
- [[Cross-exchange arbitrage]] entre différentes plateformes

### Gestion du risque

La [[Exchange liquidation]] est le risque principal. Si le prix move contre la position et que le collateral tombe en dessous du niveau de maintenance, la position est liquidée automatiquement.

L'utilisation de [[Ordre stop-loss]] est essentielle pour limiter les pertes. Les traders doivent définir des niveaux de stop appropriés pour leur niveau de risque tolerance.

## Frais et coûts

Les [[Exchange fees]] pour les perpétuels incluent les frais de transaction (maker/taker) et le funding rate. Pour les stratégies qui longent ou shortent longtemps, le funding rate peut être un coût ou un revenue significatif.

Les frais de funding sont influencés par le déséquilibre entre positions longues et courtes. Quand il y a plus de longs que de shorts, le funding rate tends to be positif pour incentivize les shorts à prendre des positions.

## Différences entre perpétuels et futures

| Caractéristique | Perpétuels | Futures |
|----------------|------------|---------|
| Expiration | Aucune | Trimestrielle |
| Funding rate | Oui (8h) | Non |
| Flexibilité | Élevée | Limitée |
| Coût du carry | Par funding | Par rollover |
| Popularité | Très haute | Haute |

## Perpetuals sur les principales plateformes

Binance perpetual est le plus grand marché par volume avec des milliards de dollars échangés quotidiennement. Bybit et OKX sont également des acteurs majeurs avec une liquidité Exceptionnelle sur les paires principales.

Chaque plateforme a ses propres caractéristiques de funding rate et ses propres règles de liquidation. Les traders doivent comprendre ces différences avant de trader.

## Sources

[^1]: Binance, "Perpetual Contracts", https://www.binance.com (consulted 2026)
[^2]: Bybit, "Perpetual Swaps", https://www.bybit.com (consulted 2026)
[^3]: CME Group, "Bitcoin Perps", https://cmegroup.com (consulted 2026)