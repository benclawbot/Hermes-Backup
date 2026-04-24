---
titre: "Annualized volatility"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 2
tags: [#concept/volatilité, #concept/risque, #concept/portefeuille]
créé: 2026-04-21
liens_forts: ["[[Sharpe ratio]]", "[[Volatility scaling]]", "[[Value at Risk]]", "[[Expected return]]", "[[Position sizing]]"]
liens_opposition: []
---

# Annualized volatility

> [!info] Résumé
> L'annualized volatility mesure la dispersion des rendements annualisée. C'est la mesure de risque la plus utilisée, formant le denominateur du Sharpe ratio et permettant de comparer des stratégies sur différentes périodes.

## Définition

L'annualized volatility est l'écart-type des rendements dun actif ou dune stratégie, mis à léchelle annuelle. Elle mesure la variabilité des rendements : plus elle est élevée, plus l'actif est volatile et risqué.

Le calcul commence par les rendements journaliers (ou sur dautres fréquences). On calcule lécart-type de ces rendements, puis on annualise en multipliant par la racine carrée du nombre de périodes par an.

Pour des rendements journaliers : Volatilité annualisée = σ_daily × √252 où 252 est le nombre Approximatif de jours de trading par an. Pour des rendements hebdomadaires : σ_weekly × √52.

Une volatilité de 20% signifie que les rendements sont typiquement dispersés dans une plage denviron ±20% autour de la moyenne (à peu près ±2 écarts-types pour une distribution normale).

La volatilité est exprimée en pourcentage du capital (pour un portefeuille) ou en points de prix (pour un actif). Dans les deux cas, elle représente le risque de fluctuation.

L'annualized volatility est le dénominateur du [[Sharpe ratio]], ce qui permet de comparer des stratégies avec différentes volatilités. Une stratégie avec 30% de rendement et 15% de volatilité a un Sharpe de 2.0, equivalent à une stratégie avec 40% de rendement et 20% de volatilité.

## Contexte et origine

Le concept de volatilité vient de la finance moderne. Louis Bachelier (1900) a le premier modélisé les cours des actions comme un mouvement brownien avec une variance, posant les fondements de la théorie.

La volatilité implicite (calculée à partir des prix des options) a été développée plus tard. Mais la volatilité historique (based on rendements passés) reste la plus utilisée pour les stratégies de trading.

La volatilité nest pas constante dans le temps. Elle suit ses propres dynamiques, un phénomène appelé "volatility clustering". Les périodes de haute volatilité ont tendance à se regrouper.

En crypto, la volatilité est significativement plus élevée que dans les marchés traditionnels. Bitcoin a une volatilité annualisée typiquement entre 50% et 100%, contre 15-20% pour les actions.

Lannualized volatility est utilisée dans le[[Volatility scaling]] pour maintenir un risque constant en ajustant la taille des positions selon la volatilité corrente.

## Mécanismes et caractéristiques

Lécart-type se calcule en trois étapes :
1. Calcul des rendements (logarithmiques de préférence)
2. Calcul de la moyenne des rendements
3. Calcul de la moyenne des carrés des écarts à la moyenne

La Formule de lécart-type : σ = √(Σ(Ri - R̄)² / (N-1)) où Ri est le rendement i, R̄ est la moyenne, et N est le nombre dobservations.

La volatilité peut être calculée sur différentes fenêtres :
- Court terme (10-20 jours) : réactive mais bruitée
- Standard (20-60 jours) : bon équilibre
- Long terme (100+ jours) : stable mais lente à sadapter

L'ATR (Average True Range) est une mesure alternative de volatilité qui prend en compte les gaps de prix. Il est souvent préféré pour les stratégies basées sur les points d'entrée.

## Nuances, critiques, limites

La volatilité passé ne prédict pas la volatilité future. Une stratégie peut avoir une volatilité historique de 20% mais une volatilité future de 40% si les conditions changent.

La volatilité est symmetric : elle ne distingue pas les hausses et les baisses. Une volatilité élevée peut signifier soit de grands gains, soit de grandes pertes, soit les deux. Pour capturer lasymétrie, dautres métriques sont nécessaires.

La distribution des rendements crypto nest pas normale. Elle a des queues plus grasses, ce qui signifie que les événements extrêmes sont plus fréquents que la volatilité seule ne le prédit.

La volatilitéannualisée nest pas comparable entre actifs si les distributions sont différentes. Deux actifs avec la même volatilité peuvent avoir des profiles de risque très différents en raison dasymétries ou de queues différentes.

## Liens et implications

L'[[Annualized volatility]] est le denominateur du[[Sharpe ratio]]. Sans volatilité, le Sharpe nest pas calculable. Une volatilité plus basse (pour un même rendement) signifie un meilleur Sharpe.

Le[[Volatility scaling]] utilise la volatilité pour ajuster dynamiquement la taille des positions. Une volatilité plus élevée conduit à des positions plus petites pour maintenir le même risque.

Le[[Value at Risk]] utilise la volatilité dans sa forme paramétrique. Avec une volatilité de 20% et en hypothèse normale, le VaR 95% sur 1 jour est environ 1.65 × 20% / √252 ≈ 2.5%.

Le[[Position sizing]] basé sur la volatilité est plus sophistiqué quun simple pourcentage du capital. Il maintient un risque constant en euros quelle que soit la volatilité.

L'[[Expected return]] doit toujours être evalué par rapport à la volatilité. Un rendement de 20% avec une volatilité de 10% est beaucoup plus attractif que le même rendement avec une volatilité de 50%.

## Sources

[^1]: Bachelier, "Théorie de la spéculation", Annales Scientifiques (1900)
[^2]: Hull, "Risk Management and Financial Institutions", Wiley (2018)
