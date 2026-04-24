---
titre: "Exchange futures"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/futures, #concept/exchange, #concept/derivatives]
créé: 2026-04-21
liens_forts: ["[[Exchange perpetual]]", "[[Exchange margin trading]]", "[[Exchange fees]]", "[[Exchange liquidation]]", "[[Exchange order types]]", "[[Funding rate]]", "[[Contango]]"]
---

# Exchange futures

> [!info] Résumé
> Les contrats futures sont des instruments financiers qui obligent l'acheteur à acheter et le vendeur à vendre un actif à un prix prédéfini à une date future. Sur les exchanges crypto, les futures permettent de s'exposer à l'évolution du prix des cryptomonnaies avec un effet de levier, sans posséder l'actif sous-jacent.

## Définition des contrats futures

### Mécanisme de base

Un contrat futures définit un actif sous-jacent (par exemple BTC), une quantité (1 BTC), un prix (50000 USD), et une date d'expiration (fin du trimestre). L'acheteur s'engage à buy BTC à 50000 USD à l'expiration, que le prix soit plus haut ou plus bas.

Le profit ou la perte est déterminé par la différence entre le prix d'expiration et le prix du contrat. Si BTC vaut 60000 USD à l'expiration, l'acheteur gagne 10000 USD. Si BTC vaut 40000 USD, l'acheteur perd 10000 USD.

Les contrats sont settled (réglés) à l'expiration, soit par livraison physique du actif, soit par règlement en espèces (cash settlement).

## Caractéristiques des crypto futures

### Date d'expiration

Les crypto futures ont des dates d'expiration стандартные : fin de chaque trimestre (Mars, Juin, Septembre, Décembre). À l'expiration, les positions sont closed au prix du marché.

Le prix à l'expiration est généralement une moyenne du prix spot sur une période spécifiée, prevénissant la manipulation du prix de règlement.

### Marge et levier

Comme pour le [[Exchange margin trading]], les futures nécessitent un dépôt de marge initial. Le levier disponible peut atteindre 100x sur certaines plateformes, permettant de contrôler des positions plus grandes avec moins de capital.

La marge de maintenance est le niveau minimum requis pour maintenir la position. Si le collateral tombe en dessous, une liquidation est déclenchée.

## Différences avec les perpétuels

Les [[Exchange perpetual]] sont des contrats sans date d'expiration. Les traders peuvent maintain leurs positions indefiniment tant qu'ils ont assez de collateral. Les perpétuels utilisent un mécanisme de funding rate pour manter le prix aligné avec le spot.

Les futures avec expiration ont une date de settlement définie. Les traders doivent either roll over leur position vers le prochain contrat ou accepter le règlement.

### Term structure et contango

La structure des prix futures (term structure) peut être en contango ou en backwardation. En contango, les prix futures sont supérieurs au prix spot actuel. En backwardation, les prix futures sont inférieurs.

Cette structure affecte les stratégies de [[Spot-Futures arbitrage]] et les coûts de rollover. En contango, maintenir une position longue futures coûte plus cher que le spot en raison du coût du carry négatif.

## Utilisation dans les stratégies

### Directionnel trading

Les traders utilisent les futures pour prendre des positions directionnelles sur le prix des cryptomonnaies. Une position longue sur BTC futures bénéficierait d'une hausse du prix du BTC.

L'effet de levier permet d'amplifier les mouvements de prix, увеличивая both profits et pertes. Les stratégies directionnelles requièrent une bonne gestion du risque et du timing.

### Couverture (hedging)

Les futures peuvent être utilisés pour hedge des positions spot ou d'autres expositions. Un holder de BTC qui craint une baisse peut prendre une position courte sur BTC futures pour compenser les pertes potentielles.

Cette stratégie de couverture est utilisée par les institutions et les traders professionnels pour protéger leur portefeuille contre la volatilité.

### Arbitrage

Les stratégies d'arbitrage exploitent les inefficiências entre le marché futures et le marché spot. Le [[Spot-Futures arbitrage]] capture le spread entre les prix quand ils divergent.

Le [[Funding rate arbitrage]] exploite les differences de funding rate entre contrats. Si le funding est élevé, les shorts paient les longs, creating une opportunity pour les shorts de générer du yield.

## Frais et coûts

Les [[Exchange fees]] pour les futures incluent les frais de transaction et le funding rate pour les perpétuels. Les frais de rollover sont également à consider quand on maintient une position à travers l'expiration.

Le coût total d'une position futures inclure le prix du contrat, les frais de financement, et les coûts de liquidation potentielle.

## Considérations réglementaires

L'[[Exchange regulation]] des futures crypto varie selon les juridictions. Certains pays restrictions les produits à effet de levier pour les retail investors. D'autres ont des exigences de marge plus élevées.

Les traders doivent connaître les restrictions applicables à leur juridiction et s'assurer que leurs stratégies sont conformes.

## Sources

[^1]: CME Group, "Bitcoin Futures", https://cmegroup.com (consulted 2026)
[^2]: Binance, "Futures Trading", https://www.binance.com (consulted 2026)
[^3]: Bybit, "Futures Guide", https://www.bybit.com (consulted 2026)