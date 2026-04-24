---
titre: "Standard Deviation"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/volatilité, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[Bollinger Bands breakout]]", "[[Backtesting]]", "[[Position sizing]]", "[[Gestion du risque]]"]
liens_opposition: []
---

# Standard Deviation

> [!info] Résumé
> L'écart-type (Standard Deviation) est une mesure statistique de la dispersion des valeurs autour de la moyenne. En trading, il est utilisé pour mesurer la volatilité d'un actif et constitue la base des [[Bollinger Bands]] et d'autres indicateurs de dispersion.

## Définition

L'écart-type (Standard Deviation, σ) mesure la dispersion des valeurs d'un ensemble de données par rapport à leur moyenne. En finance, il est utilisé pour quantifier le risque et la volatilité d'un actif.

Le calcul : σ = √(Σ(xi - μ)² / N), où xi est chaque valeur, μ est la moyenne, et N est le nombre de valeurs. En trading, les "valeurs" sont typiquement les rendements (returns) ou les prix sur N périodes.

Un écart-type élevé signifie que les rendements varient beaucoup (haute volatilité). Un écart-type faible signifie des rendements stables (faible volatilité). En termes de prix : un actif avec un écart-type de 5% sur ses rendements quotidiens connaît des fluctuations plus importantes qu'un actif avec 2%.

En analyse technique, l'écart-type est utilisé pour créer des bandes de prix autour d'une moyenne mobile (Bollinger Bands : moyenne mobile ± 2 écarts-types). Ces bandes servent de niveaux de support/résistance et de mesure de la volatilité.

## Contexte et origine

L'écart-type est un concept statistique fondamental introduit par Karl Pearson en 1893. En finance, il a été popularisé par Harry Markowitz dans les années 1950 pour mesurer le risque des portefeuilles (théorie moderne du portefeuille).

John Bollinger a adapté l'écart-type à l'analyse technique en créant les Bollinger Bands dans les années 1980. L'idée : encadrer le prix avec des bandes basées sur la volatilité réelle du marché.

En trading algorithmique crypto, l'écart-type est omniprésent. Il est utilisé non seulement pour les Bollinger Bands, mais aussi pour le [[position sizing]] (plus de volatilité = position plus petite), le [[risk management]], et les systèmes de breakout.

## Mécanismes et caractéristiques

L'écart-type comme mesure de volatilité : un actif avec σ = 0.05 (5%) sur ses rendements quotidiens a une volatilité plus élevée qu'un actif avec σ = 0.02. Cette information est cruciale pour le dimensionnement des positions.

La règle empirique : environ 68% des observations se situent à ±1σ de la moyenne, 95% à ±2σ, 99.7% à ±3σ. En trading, cela signifie que si le prix est à 2σ d'une moyenne, il est statistiquement rare et susceptible de retourner vers la moyenne.

L'écart-type des rendements permet de calculer la VaR (Value at Risk) d'un portefeuille. Si un actif a un rendement moyen de 0.1% par jour avec σ = 2%, le rendement sur 1 jour à 95% confidence ne dépassera pas 0.1% + (1.65 × 2%) = 3.4% ou ne descendra pas en dessous de 0.1% - (1.65 × 2%) = -3.2%.

Le [[position sizing]] basé sur l'écart-type suit la logique : risquer un montant fixe par trade. Si l'ATR (ou σ) est élevé, la position doit être réduite pour maintenir le même risque en dollars.

## Nuances, critiques, limites

L'écart-type suppose une distribution normale des rendements. En réalité, les rendements financiers ont souvent des "fat tails" (excess kurtosis), signifiant que les événements extrêmes sont plus fréquents que prédit par une distribution normale.

L'écart-type est une mesure de volatilité passée. Il ne préd pas la volatilité future. Pendant les événements de marché (crash, rally), l'écart-type peut changer rapidement et drastiquement.

L'écart-type est uniforme : il ne distingue pas la direction du mouvement. Un actif avec σ = 5% peut avoir un rendement moyen de +0.5% ou -0.5%. L'écart-type seul ne donne pas d'information directionnelle.

Le calcul de l'écart-type nécessite N périodes de données. Plus N est grand, plus la mesure est stable mais lente à réagir aux changements. Un N petit est réactif mais bruité.

## Liens et implications

Les [[Bollinger Bands]] sont construites autour de l'écart-type. La bande médiane est une SMA, les bandes supérieure et inférieure sont SMA ± 2σ. L'écart-type détermine la largeur des bandes et donc les niveaux de support/résistance.

La volatilité mesurée par l'écart-type est cruciale pour la gestion du risque.

Le [[backtesting]] des stratégies basées sur l'écart-type (ex: Bollinger Bands breakout) révèle que l'écart-type comme mesure de volatilité fonctionne mieux quand il est comparé à sa propre moyenne historique (volatilité relative).

## Sources