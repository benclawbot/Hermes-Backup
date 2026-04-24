---
titre: "Volatility scaling"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/volatilité, #concept/scaling, #concept/position]
créé: 2026-04-21
liens_forts: ["[[Annualized volatility]]", "[[Position sizing]]", "[[Sharpe ratio]]", "[[Information ratio]]", "[[Risk budgeting]]"]
liens_opposition: []
---

# Volatility scaling

> [!info] Résumé
> Le volatility scaling ajuste automatiquement la taille des positions en fonction de la volatilité recente du marché. L'objectif est de maintenir un risque constant en euros quelle que soit la volatilité, stabilisant le Sharpe ratio dans le temps.

## Définition

Le volatility scaling, aussi appelé "risk parity" ou "volatility-adjusted sizing", est une méthode de dimensionnement des positions qui ajuste la taille en fonction de la volatilité recente. L'idée est de prendre des positions plus petites quand la volatilité est élevée et plus grandes quand elle est basse.

La formule de base est : Taille de position = Capital × Constante / Volatilité récente. Si la volatilité double, la taille de position est réduite de moitié pour maintenir le même risque en euros.

Cette approche stabilise les rendements dans le temps. Sans volatility scaling, une stratégie subit automatiquement plus de risque en période de haute volatilité (car les mouvements sont plus grands). Avec le scaling, le risque en euros est constant.

Le volatility scaling est particulièrement pertinent pour les[[trading bot]]s car la volatilité crypto varie considérablement. Quand Bitcoin passe de 20% à 80% de volatilité annualisée, une position fixe subit 4× plus de risque sans scaling.

## Contexte et origine

Le volatility scaling est né de l'observation que la volatilité n'est pas stable dans le temps. Les stratégies qui semblent avoir un bon[[Sharpe ratio]] en période de basse volatilité peuvent avoir un Sharpe très dégradé en période de haute volatilité si le sizing n'est pas ajusté.

L'approche a été popularisée par les fonds de volatility targeting comme Bridgewater. L'idée de "risk parity" consiste à allouer le risque également entre les classes d'actifs plutôt que le capital.

En trading algorithmique retail, le volatility scaling est devenu accessible grâce aux outils de calcul automatisé. La plupart des[[trading bot]]s modernes incluent une forme de volatility scaling dans leur[[Position sizing]].

Le concept est étroitement lié à l'[[Information ratio]] target. Many funds target a constant Information ratio par le volatility scaling : quand la volatilité augmente, ils réduisent l'exposition pour maintenir le même ratio.

## Mécanismes et caractéristiques

L'[Annualized volatility|volatilité annualisée]] se calcule généralement sur une fenêtre de 20 à 60 jours. On utilise l'écart-type des rendements journaliers multiplié par sqrt(365) pour annualiser.

La constante de scaling (souvent appelée "target vol" ou "vol cible") est le niveau de volatilité qu'on souhaite maintenir. Si on choisit une cible de 20% et que la volatilité courante est 40%, on prend la moitié de la position normale.

Le volatility scaling peut être implémenté de différentes manières : par un multiplicateur fixe (multiplicateur = cible / actuelle), par un ajustement de la taille du contrat, ou par un nombre variable de contrats.

Les avantages incluent : un[[Sharpe ratio]] plus stable dans le temps, moins de drawdowns en période de volatilité élevée, et une meilleure utilisation du capital. Les inconvénients incluent : des périodes de faible activité quand la volatilité est très élevée, et une complexité accrue.

## Nuances, critiques, limites

Le volatility scaling suppose que la volatilité passée prédit la volatilité future. En réalité, la volatilité change et peut changer rapidement, especially in crypto. Une stratégie peut être surdimensionnée juste avant un événement de volatilité.

La fenêtre de calcul de la volatilité est cruciale. Une fenêtre courte (10 jours) réagit plus vite mais est plus sensible au bruit. Une fenêtre longue (60 jours) est plus stable mais slower à s'adapter aux changements.

Le volatility scaling peut générer des "signaux de trading" qui ne sont pascorrélés aux opportunités réelles. En période de volatilité extrêmement élevée, les positions sont très réduites, ce qui peut signifier rater un mouvementImportant.

La constante de scaling doit être choisie soigneusement. Une cible trop basse limite les rendements. Une cible trop haute expose à des drawdowns significatifs. Beaucoup de traders commencent avec une cible conservative. En pratique, une cible de 15-20% de volatilité annualisée est un bon point de départ pour les stratégies de trading crypto. Cette cible peut être ajustée en fonction du profil de risque et des objectifs de rendement.

## Liens et implications

Le[[Volatility scaling]] est une composante clé du[[Position sizing]]. Il détermine combien de capital risquer en fonction des conditions de marché actuelles. L'ajustement se fait automatiquement.

L'[[Annualized volatility]] est l'input principal du volatility scaling. Sans une bonne mesure de la volatilité, le scaling ne fonctionne pas correctement. L'ATR (Average True Range) est souvent utilisé comme proxy.

Le[[Risk budgeting]] peut intégrer le volatility scaling pour maintenir un niveau de risque global constant. En ajustant les positions de chaque stratégie selon sa volatilité, on peut équilibrer le risque du portefeuille.

Le[[Sharpe ratio]] tends to be more stable with volatility scaling. C'est l'un des principaux benefits de cette approche pour les[[trading bot]]s.

## Sources

[^1]: Bernstein, "The New Finance", Holt (1994)
[^2]: Ang, "Risk Management and Regulation", Columbia Business School (2014)
