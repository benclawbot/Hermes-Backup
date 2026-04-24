---
titre: "Kelly Criterion"
type: théorie
cluster: "Trading bots and strategies"
statut: verified
controverse: high
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#théorie/kelly, #théorie/sizing, #concept/edge]
créé: 2026-04-20
liens_forts: ["[[Position sizing]]", "[[Gestion du risque]]", "[[Expected return]]"]
liens_opposition: []
---

# Kelly Criterion

> [!info] Résumé
> Le Kelly Criterion est une formule mathématique pour dimensionner les positions de manière optimale afin de maximiser la croissance logarithmique du capital. Résultats en positions aggressives, souvent critiquéd comme impraticables en contexte de trading réel.

## Définition

Le Kelly Criterion, développé par John L. Kelly en 1956, calcule le pourcentage optimal du capital à risquer sur chaque pari ou trade pour maximiser la croissance exponentielle à long terme.

La formule : f* = (b × p - q) / b
Où :
- f* = fraction du capital à risquer
- b = odds de gain (ratio profit/perte)
- p = probabilité de gain
- q = probabilité de perte (1 - p)

Si une stratégie a un win rate de 50% et un reward-to-risk de 2:1 (b=2, p=0.5, q=0.5), alors f* = (2 × 0.5 - 0.5) / 2 = 0.25. Le Kelly suggère de risquer 25% du capital par trade.

## Contexte et origine

John Kelly travailla chez Bell Labs en 1956 et publia son article "A New Interpretation of Information Rate" qui connectait le taux de transmission d'information avec les stratégies de pari optimales.

Edward Thorp popularisa le Kelly Criterion dans les années 1960-70 en l'utilisant pour le blackjack et les investissements sur les marchés financiers. Son fonds Princeton-Newport Partners utilisait des principes Kelly pour le dimensionnement.

Warren Buffett et d'autres investisseurs famous ont indiqué utiliser des principes similaires au Kelly, bien que souvent avec une fraction (Half Kelly ou Quarter Kelly) pour réduire la volatilité.

## Mécanismes et caractéristiques

Le Kelly vise à maximiser la croissance logarithmique du capital, pas la croissance linéaire. Cela signifie qu'il prend en compte le risque de ruine : une perte de 50% nécessite un gain de 100% pour récupérer, donc préserver le capital est crucial.

La formule suppose des paris indépendants et identiquement distribués (i.i.d.) et un edge constant. En trading réel, ces hypothèses ne sont jamais parfaitement vérifiées, ce qui rend le Kelly parfois impraticable.

Le "Half Kelly" (risquer la moitié de ce que le Kelly suggère) est souvent recommandé car il réduit significativement la volatilité tout en conservant environ 75% de la croissance géométrique théorique.

Le "Fractional Kelly" (un quart, un cinquième) est encore plus conservateur et est souvent ce que les professionnels utilisent en pratique. Le Kelly complet peut être très agressif si le win rate est élevé.

## Nuances, critiques, limites

L'agressivité du Kelly complet est souvent cited comme impraticable. Une suggestion de risquer 25% du capital par trade est considéré comme extremely agressif par la plupart des traders. Un drawdown de 5 pertes consécutives avec 25% de risque = -76% du capital.

La variance des rendements rend le Kelly difficile à appliquer. Le Kelly suppose que le win rate et le odds sont constants, mais en trading réel, ces paramètres changent. Une série de pertes peut modifier l'estimation de l'edge.

Le risque de ruine avec le Kelly complet est plus élevé qu'il n'y paraît. En pratique, un trader qui suit le Kellystrictement peut connaître des drawdowns très importants qui l'obligent à arrêter avant que la stratégie ne se retourne.

L'application au trading nécessite des adaptations. La croissance géométrique maximale est le objectif, mais la préservation du capital pour "etre là" après les périodes difficiles est tout aussi importante.

## Liens et implications

Le [[Kelly Criterion]] est une méthode de [[position sizing]] mathematically optimale based on the edge de la stratégie. Il se combine avec la [[gestion du risque]] pour déterminer le dimensionnement optimal.

L'[[Expected return]] est le concept sous-jacent : le Kelly maximise la croissance géométrique basée sur l'expectancy de la stratégie. Le [[drawdown]] et le risque de ruine sont les limites principales.

Le [[backtesting]] permet de calculer le win rate et l'expectancy qui servent d'inputs au Kelly. Le [[forward testing]] valide si le Kelly calculé fonctionne en conditions réelles.

## Sources

[^1]: Kelly, "A New Interpretation of Information Rate", Bell System Technical Journal (1956)
[^2]: Thorp, "The Kelly Criterion in Blackjack, Sports Betting, and the Stock Market", http://www.bjmath.com (consulted 2026)