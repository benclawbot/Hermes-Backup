---
titre: "Exchange market cap"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/market-cap, #concept/exchange, #concept/ranking]
créé: 2026-04-21
liens_forts: ["[[Exchange volume]]", "[[Exchange liquidity]]", "[[Exchange rate]]", "[[Exchange fees]]", "[[Exchanges centralisés]]", "[[Market making]]", "[[Platform risk]]"]
---

# Exchange market cap

> [!info] Résumé
> La capitalisation boursière d'un exchange (exchange market cap) représente la valeur totale des actifs échangés sur une plateforme, calculée en multipliant le volume de trading par le prix moyen des actifs. Cette métrique est utilisée pour évaluer la taille et l'importance relative des différentes plateformes.

## Définition et calcul

Le exchange market cap est généralement calculé comme le volume quotidien multiplié par le prix moyen des transactions. Pour une évaluation plus precise, certains分析师 utilisent le volume sur 24 heures multiplié par le prix du Bitcoin ou un autre actif de référence.

La formule simplistic est :
Market Cap = Volume × Prix moyen

Cette approche treat tous les volumes également, ce qui peut être problématique si les prix des actifs sont très différents. Une pair avec un volume élevé de transactions sur des tokens à bas prix peut créer une market cap apparente plus élevée qu'une pair avec moins de volume mais des prix plus élevés.

## Métriques associées

### Exchange volume

L'[[Exchange volume]] est la métrique la plus utilisée pour évaluer la taille d'un exchange. Elle représente le montant total échangé sur la plateforme pendant une période donnée, généralement 24 heures.

Le volume est souvent catégorisé par type de trading :
- Volume spot : transactions sur le marché au comptant
- Volume dérivées : transactions sur les contrats perpétuels et futures
- Volume total : somme des deux catégories

### Liquidité et profondeur

La [[Exchange liquidity]] est une mesure de la facilité avec laquelle les actifs peuvent être échangés sans impact significatif sur le prix. Une haute liquiditéCorrespond à une market cap plus significative car les transactions de grande taille peuvent être exécutées sans slippage excessif.

La [[Profondeur du carnet d'ordres]] est directement liée à la liquidité. Un carnet profond avec beaucoup d'ordres à chaque niveau de prix indique une liquidité élevée.

## Classement des exchanges

### Principaux exchanges par market cap

Les grands exchanges comme Binance, Coinbase, et Kraken dominent le classement par market cap. Binance traite généralement le volume le plus élevé, suivi par les autres grands centres d'échange asiatiques et américains.

Les changes de market cap reflètent les tendances du marché. Pendant les périodes de forte activité, le volume augmente significativement sur toutes les plateformes, elevant la market cap totale de l'industrie.

### Exchanges specialized

Les exchanges spécialisés dans les dérivés ou les produits de leverage ont leur propre classification de market cap basée sur le volume de leurs produits spécifiques. Bybit et OKX sont spécialisés dans les perpetual swaps et dominent ce segment.

Les[[Decentralized exchanges (DEX)]] ont leur propre mesure de market cap basée sur le volume on-chain et la valeur totale verrouillée (TVL) dans les contrats intelligents.

## Facteurs influençant le exchange market cap

### Conditions de marché

La volatilité du marché impacte directement le volume et donc la market cap. Pendant les périodes de forte volatilité, le trading volume increase car les traders cherchent à capitalize sur les movements de prix.

Les[[Exchange rate]] fluctuations affectent également le calcul. Si les prix des cryptomonnaies augmente sans une augmentation correspondante du volume, la market cap increase.

### Réglementation et sentiment

L'[[Exchange regulation]] et le sentiment du marché affectent la participation au trading et donc le volume. Les restrictions réglementaires peuvent reduce le volume sur certaines plateformes.

Les scandales comme l'collapse de FTX ont un impact negatif sur la market cap totale de l'industrie quand les traders réduisent leur activité en réponse à la confiance diminuée.

## Utilisation pour les traders

### Évaluation du Platform risk

La market cap peut être utilisée comme indicateur du [[Platform risk]]. Une platform avec une market cap faible peut être plus vulnérable aux stresses du marché ou aux problèmes opérationnels.

Les traders algorithmiques utilisent cette information pour allocation leur capital entre les différentes plateformes. Une platform plus grande avec une market cap élevée peut être considered plus stable.

### Opportunités de trading

Les differences de market cap entre exchanges peuvent créer des opportunités de trading. Si une platform a une market cap significativement différente pour le même actif, cela peut indicar une inefficiency du marché.

L'[[Exchange arbitrage]] peut exploiter ces différences en achetant sur la plateforme moins chère et vendant sur la plateforme plus chère.

## Limites de la métrique

La market cap alone ne capture pas tous les aspects de la santé d'un exchange. Une platform peut avoir un volume élevé mais des problèmes de liquidité ou de sécurité qui ne sont pas reflétés dans la market cap.

Le wash trading (transactions artificielles pour inflate le volume) peut fausser les chiffres de market cap. Les traders doivent être conscients de cette possibilité et compléter l'analyse avec d'autres metrics.

## Sources

[^1]: CoinMarketCap, "Exchange Rankings", https://coinmarketcap.com (consulted 2026)
[^2]: CoinGecko, "Crypto Exchange Metrics", https://coingecko.com (consulted 2026)
[^3]: The Block, "Exchange Volume Analysis", https://theblock.co (consulted 2026)