---
titre: "Sortino ratio"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/ratio, #concept/rendement, #concept/risque]
créé: 2026-04-21
liens_forts: ["[[Sharpe ratio]]", "[[Annualized volatility]]", "[[Gestion du risque]]", "[[Drawdown]]", "[[Tail risk]]"]
liens_opposition: []
---

# Sortino ratio

> [!info] Résumé
> Le Sortino ratio mesure le rendement ajusté au risque en ne considérant que la volatilité négative (les pertes). Il corrige le défaut du Sharpe ratio qui pénalise aussi bien les gains que les pertes, ne comptabilisant que la volatilité des rendements négatifs comme coût du risque.

## Définition

Le Sortino ratio, introduit par Brian Sortino dans les années 1990, est une mesure de performance qui ne pénalise que la volatilité des rendements négatifs. Contrairement au Sharpe ratio qui traite toute volatilité comme non désirée, le Sortino ratio ne considère que la "downside deviation" comme coût du risque.

La formule est : (Rendement moyen - Taux cible) / Écart-type des rendements négatifs. Seuls les rendements en dessous d'un seuil (souvent le taux sans risque ou un rendement cible) sont inclus dans le calcul de la volatilité.

Cette approche reflète mieux le comportement réel des investisseurs. Un investisseur se soucie des pertes, pas des gains supérieurs aux attentes. Si une stratégie génère des rendements de +10%, +15%, -5%, +20%, seule la baisse de -5% compte comme "risque" dans le Sortino ratio.

## Contexte et origine

Brian Sortino, trader et gestionnaire de fonds, a développé ce ratio en réponse aux limites du Sharpe ratio qu'il trouvait trop simpliste. Le concept a été formalisé dans les années 1990 avec la publication de "The Sortino Framework for Constructing Portfolios".

L'idée centrale : la volatilité à la hausse est beneficial, pas pénalissante. Un investissement qui génère des rendements erratiques mais majoritairement positifs est preferable à un investissement avec des rendements stables mais faibles. Le Sharpe ratio pénalise les deux de manière égale, le Sortino ratio ne pénalise que la partie négative.

En trading algorithmique crypto, le Sortino ratio est particulièrement pertinent car les marchés cryptos sont très volatils avec de forts drawdowns périodiques. Une stratégie avec des rendements importants mais des drawdowns modérés peut avoir un excellent Sortino ratio même si son Sharpe ratio est mediocre.

## Mécanismes et caractéristiques

Le Sortino ratio nécessite de définir un "target return" ou seuil de rendement acceptable. Ce seuil peut être le taux sans risque (par exemple 5% en stablecoin), un rendement cible (par exemple 10% mensuels), ou simplement zéro.

Le calcul de la "downside deviation" se fait en trois étapes : d'abord, identifier les rendements en dessous du seuil ; ensuite, calculer l'écart-type de ces rendements ; enfin,annualiser si nécessaire. Si aucun rendement n'est en dessous du seuil, la downside deviation est zéro et le Sortino ratio est théoriquement infini.

Le Sortino ratio vs Sharpe ratio en pratique : une stratégie avec des rendements de +5%, +5%, +5%, +20% aura un Sharpe élevé (volatilité modérée due au +20%) mais un Sortino encore plus élevé car aucun rendement n'est négatif. Une stratégie avec +10%, -20%, +10%, +10% aura un Sharpe faible et un Sortino également faible car le -20% est très pénalisant.

Les [[trading bot]]s modernes loggent automatiquement le Sortino ratio alongside le Sharpe ratio. Beaucoup de trackers de performance crypto affichent les deux métriques pour donner une image complete du profile risque-rendement.

## Nuances, critiques, limites

Le Sortino ratio est aussi sensitif au choix du target return. Utiliser 0% comme cible donne des résultats différents qu'utiliser 5% ou le rendement moyen. Il n'y a pas de standard universel, ce qui rend la comparaison entre stratégies plus complexe.

Le ratio suppose que les rendements négatifs sont symétriquement mauvais, ce qui n'est pas toujours vrai. Une perte de -5% est considérée également pénalisante qu'une perte de -20%, alors que l'impact réel sur le capital est très différent.

Le Sortino ratio ne captures toujours pas le risque de queue extrême. Une stratégie avec peu de rendements négatifs modérés mais occasional des crashs de 50% peut avoir un bon Sortino ratio basé sur la downside deviation historique mais sous-estimer le vrai risque de ruine.

La période d'observation influence fortement le ratio. Une stratégie avec un excellent Sortino sur 3 mois peut avoir un ratio degrade sur 1 an si les conditions changent. Il est recommandé de regarder le ratio sur plusieurs périodes.

## Liens et implications

Le Sortino ratio complète le [[Sharpe ratio]] en ne pénalisant que la volatilité négative. Les deux métriques doivent être utilisées ensemble pour obtenir une vue complète. L'[[Annualized volatility]] est le dénominateur alternatif dans le Sharpe, tandis que le Sortino utilise la downside deviation.

Le [[Drawdown]] est la métrique qui capture le mieux l'impact réel des pertes. Une bonne stratégie doit avoir un bon Sortino ratio ET un drawdown acceptable. Le [[Tail risk]] est le risque de queue qui échappe aux deux ratios.

La [[Gestion du risque]] efficace passe par la surveillance du Sortino ratio alongside d'autres métriques. Le ratio doit être tracked dans le temps pour detecter une degradation de la stratégie.

## Sources

[^1]: Sortino, "The Sortino Framework for Constructing Portfolios", Ironwood Publishing (2000)
[^2]: Rolling, "Sortino Ratio: A Better Measure of Risk", http://www.sportizzle.com (consulted 2026)
