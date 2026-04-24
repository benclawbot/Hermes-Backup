---
titre: "Exchange margin trading"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/margin, #concept/exchange, #concept/leverage]
créé: 2026-04-21
liens_forts: ["[[Exchange perpetual]]", "[[Exchange futures]]", "[[Exchange fees]]", "[[Exchange liquidation]]", "[[Exchange security]]", "[[Exchange order types]]", "[[Risk management]]"]
---

# Exchange margin trading

> [!info] Résumé
> Le margin trading sur les exchanges crypto permet aux traders d'augmenter leur exposition au-delà de leur capital propre en empruntant des fonds. Cette effet de levier amplifie à la fois les gains et les pertes, nécessitant une gestion rigoureuse du risque et une compréhension approfondie des mécanismes de liquidation.

## Mécanisme du margin trading

### Borrowing et levier

Le margin trading permet d'emprunter des fonds pour increase la taille d'une position. Si un trader a 1000 USD et utilise un levier de 10x, il peut ouvrir une position de 10000 USD. Les fonds empruntés sont généralement fournis par d'autres utilisateurs qui prêtent leur capital pour earn interest.

Le levier est exprimé comme un ratio. Un levier de 5x signifie que pour 1 USD de capital propre, le trader contrôle 5 USD de position. Le leverage de 100x est disponible sur certaines plateformes pour les paires principales.

### Collateral et marge

Le trader doit déposér un collateral (marge initiale) pour ouvrir une position. Ce collateral est généralement un pourcentage de la valeur de la position. Si la position vaut 10000 USD avec un levier de 10x, le trader doit déposer 1000 USD de collateral.

La marge minimale (maintenance margin) est le niveau minimum de collateral requis pour maintenir la position ouverte. Si le collateral tombe en dessous de ce niveau, la position est liquidée automatiquement.

## Modes de margin

### Cross margin

En mode cross margin, le collateral est partagé entre toutes les positions ouvertes sur le compte. Si une position subit des pertes, le collateral des autres positions peut être utilisé pour éviter la liquidation.

Ce mode offre une plus grande flexibilité mais augmente le risque qu'une position perdante affecte les autres positions.

### Isolated margin

En mode isolated margin, chaque position a son propre collateral separate. Les pertes sur une position n'affectent pas les autres positions.

Ce mode permet de limiter le risque par position. Si une position est liquidée, seules les fonds alloués à cette position sont perdus.

## Taux d'intérêt et coûts

Les frais de borrowing sur le margin sont determined par l'offre et la demande sur le marché de prêt. Les taux varient selon la paire de trading, la durée de la position, et les conditions de marché.

Ces taux sont généralement exprimés en taux horaire ou quotidien. Pour les positions held longtemps, ces coûts peuvent s'accumuler et affecter significativement la rentabilité.

L'[[Exchange fees]] de borrowing s'ajoute aux frais de trading normaux. Les stratégies de margin doivent include ces coûts dans leurs calculs de profitabilité.

## Liquidation et risque

### Mécanisme de liquidation

Quand le prix move contre la position et que le collateral tombe en dessous du niveau de maintenance margin, une liquidation est déclenchée. La position est fermée automatiquement au prix du marché.

Les liquidations sont généralement executed au prix du marché avec un slippage potentially significant. Les grosses liquidations peuvent themselves move le prix, creating un cycle de liquidation.

### Calcul du prix de liquidation

Le prix de liquidation pour une position longue est calculé comme :
Prix de liquidation = Prix d'entrée × (1 - 1/Levier)

Pour une position longue avec prix d'entrée de 50000 USD et levier de 10x :
Prix de liquidation = 50000 × (1 - 0.10) = 45000 USD

## Stratégies avec margin trading

### Augmentation du capital

Le margin trading peut être utilisé pour amplifier les gains sur des positions winner. Si une position augmente de 10%, avec un levier de 5x, le gain sur le capital propre est de 50%.

Inversement, les pertes sont également amplifiées. Une position de -10% avec un levier de 5x représente une perte de 50% sur le capital propre.

### Short selling

Le margin trading permet également de prendre des positions courtes (betting on price decrease). Le trader emprunte un actif, le vend, et espere le racheter à un prix inférieur pour le retourner au prêteur.

Les stratégies de [[Short squeeze]] exploitent les positions courtes lorsque le prix augmente, forcing les short sellers à buy pour couvrir leurs positions, amplifiant la hausse.

## Risques et considérations

### Risk of liquidation

Le risque de liquidation est le principal risque du margin trading. Même si le prix rebondit après une baisse initiale, la liquidation peut occur avant le rebond.

Les [[Ordre stop-loss]] sont essentiels pour limiter les pertes et éviter la liquidation. Placer le stop-loss au bon niveau est una science et un art.

### Risque de perte totale

Avec un levier élevé, il est possible de perdre la totalité du capital dépôt. Une position avec levier 100x peut être liquidée avec seulement 1% de movement против.

La volatilité élevée des cryptomonnaies rend le margin trading particulièrement dangereux. Les mouvements de 5-10% en quelques heures sont fréquents.

## Réglementation du margin trading

L'[[Exchange regulation]] du margin trading varie selon les juridictions. Certains pays limitent le levier disponible aux retail investors à 2x ou 5x maximum.

D'autres juridictions permettent des leviers plus élevés mais imposent des exigences de margen plus strictes. Les traders doivent connaître les règles applicables à leur situation.

## Sources

[^1]: Binance, "Margin Trading", https://www.binance.com (consulted 2026)
[^2]: Kraken, "Margin Position Management", https://www.kraken.com (consulted 2026)
[^3]: CME Group, "Margin Requirements", https://cmegroup.com (consulted 2026)