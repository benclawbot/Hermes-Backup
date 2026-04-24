---
titre: "Risk parity"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/allocation, #concept/risque, #concept/diversification]
créé: 2026-04-21
liens_forts: ["[[Risk budgeting]]", "[[Diversification]]", "[[Volatility scaling]]", "[[Position sizing]]", "[[Correlation matrix]]"]
liens_opposition: []
---

# Risk parity

> [!info] Résumé
> Le risk parity est une méthode d'allocation qui répartit le risque également entre les composants d'un portefeuille plutôt que le capital. Cette approche égalise la contribution de chaque position au risque total, offrant une meilleure diversification.

## Définition

Le risk parity, aussi appelé "allocation parité risque", est une méthode d'allocation où chaque composant du portefeuille contribue de manière égale au risque total. Au lieu d'allouer 50% du capital à l'actif A et 50% à l'actif B, on alloue assez à chaque actif pour que chacun contribue 50% du risque total.

La formule de base est : Pour chaque actif i, Contribution au risque_i = Poids_i × Volatilité_i × Corrélation_i_avec_portefeuille. Le poids est ajusté jusqu'à ce que toutes les contributions soient égales.

Cette approche diffère de l'allocation traditionnelle par capital (50/50) ou par risque equal (mais avec des actifs de volatilités différentes). Un actif très volatil recevra un poids plus faible dans un portefeuille risk parity.

L'avantage du risk parity est une meilleure diversification. Les actifs qui semblent similaires en termes de capital peuvent avoir des profils de risque très différents. Le risk parity corrige ce biais.

En pratique, le risk parity nécessite souvent l'utilisation de levier pour atteindre les rendements cibles tout en maintenant une faible volatilité. Ce levier est controversé et constitue l'une des limites de l'approche.

## Contexte et origine

Le risk parity a été développé par Bridgewater Associates dans les années 1990. Ray Dalio, le fondateur, cherchait une méthode d'allocation qui performerait dans tous les environnements de marché.

L'idée centrale était que les rendements des différente classes d'actifs ne sont pas proportionnels à leur risque. En actions, le risque (volatilité) est élevé mais le rendement aussi. En obligations, le risque est plus faible. Le risk parity equalise le risque sans se concentrer sur le rendement.

L'approche a gagné en popularité après la crise financière de 2008, quand beaucoup de portefeuilles traditionnels ont subi des pertes importantes. Le risk parity, avec sa meilleure diversification, a mieux.performé en relatif.

En trading algorithmique crypto, le risk parity peut être appliqué aux différentes stratégies ou aux différentes positions. Une stratégie de tendance et une stratégie de mean reversion peuvent être combinées via risk parity pour lisser les rendements.

## Mécanismes et caractéristiques

Le calcul du risk parity nécessite la matrice de covariance entre tous les actifs. Pour N actifs, on calcule la covariance de chaque paire. Ensuite, on résout un système d'équations pour trouver les poids qui equalisent les contributions au risque.

Les contributions au risque doivent représenter la volatilité totale du portefeuille. Si la volatilité totale est de 15%, chaque actif contribue 15% / N au risque (dans le cas de N actifs non corrélés).

Le[[Correlation matrix]] joue un rôle crucial. Si les actifs sont très corrélés, le risk parity ne donne pas une vraie diversification. Des actifs avec des corrélations faibles permettent une meilleure distribution du risque.

Le[[Volatility scaling]] est souvent utilisé conjointement avec le risk parity. Après avoir déterminé les poids par risque, on ajuste ces poids selon la volatilité récente pour maintenir un risque constant.

## Nuances, critiques, limites

Le risk parity nécessite souvent du levier pour atteindre des rendements acceptables. Une allocation risk parity entre actions et obligations peut n'avoir que 5-6% de rendement annualisé sans levier, nécessitant 2× ou 3× de levier pour atteindre 10-12%.

Le levier amplifie les pertes aussi bien que les gains. Un portefeuille risk parity avec 2× de levier qui baisse de 30% voit une perte de 60%. Cette caractéristique a causé des pertes significatives pour certains fonds en 2022 quand les obligations et les actions ont toutes deux baissé.

Les[[Correlation risk]] limitations s'appliquent aussi au risk parity. Si les actifs deviennent plus corrélés en période de crise, la diversification se réduit précisément quand elle est la plus nécessaire.

Le concept est plus complexe à implémenter pour les traders retail. Le calcul de la matrice de covariance et l'optimisation des poids nécessitent des outils et des compétences qui ne sont pas toujours disponibles.

## Liens et implications

Le[[Risk parity]] est une forme de[[Risk budgeting]] où le "budget risque" est distribué également entre les composants. Le risk budgeting plus general permet d'allouer le risque de manière inégale selon les objectifs.

La[[Diversification]] est le bénéfice principal du risk parity. En égalisant la contribution au risque, on évite la concentration excessive sur un seul actif ou stratégie.

Le[[Correlation matrix]] est un input crucial. Sans une matrice précise, le risk parity ne fonctionne pas correctement. L'évolution des corrélations doit être surveillée.

La[[Volatility scaling]] complète le risk parity en ajustant les positions selon la volatilité courants. Beaucoup d'implémentations combinent les deux approches.

## Sources

[^1]: Dalio, "Principles", Bridgewater (2018)
[^2]: Ang, "Risk Management and Regulation", Columbia Business School (2014)
