---
titre: "Drawdown"
type: terme
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#terme/drawdown, #terme/risk, #concept/performance]
créé: 2026-04-20
liens_forts: ["[[Gestion du risque]]", "[[Risk of ruin]]", "[[Position sizing]]"]
liens_opposition: []
---

# Drawdown

> [!info] Résumé
> Le drawdown mesure la baisse du capital depuis son pic le plus élevé jusqu'à son point le plus bas. Le max drawdown mesure la pire perte historique et est critique pour évaluer le risque d'une stratégie.

## Définition

Le drawdown est la mesure de la baisse du capital depuis un pic jusqu'à un creux subséquent. Si un compte passe de 10 000€ à 8 000€ puis revient à 11 000€, le drawdown maximal atteint était de 20%.

Le drawdown est exprimé en pourcentage ou en euros. Il existe plusieurs types :
- **Drawdown simple** : baisse actuelle par rapport au pic
- **Max drawdown** : pire drawdown historique
- **Relative drawdown** : drawdown par rapport au capital initial

Le max drawdown est souvent utilisé comme métrique de risque car il représente la perte maximale qu'un investisseur aurait subie s'il avait investi au pire moment possible.

## Contexte et origine

Le drawdown est une métrique standard dans la gestion de fonds et le trading. Les fonds utilisent le max drawdown comme l'une des métriques principales pour évaluer les stratégies.

Les stratégies de trading sont évaluées sur leur couple rendement/drawdown. Une stratégie avec un rendement de 50% par an mais un max drawdown de 60% est considérée comme plus risquée qu'une stratégie avec 20% de rendement et 15% de max drawdown.

L drawdown recovery time est également important : combien de temps faut-il pour récupérer après un drawdown. Un drawdown de 50% nécessite un gain de 100% pour récupérer.

## Mécanismes et caractéristiques

Le max drawdown est le point le plus bas atteint divisé par le pic précédent. Si le capital passe de 10 000€ à 5 000€ (drawdown de 50%), puis remonte à 7 500€, le max drawdown reste 50%.

Le drawdown en sequence est le problème : après un drawdown, la tentation est de "reinvestir" plus agressivement pour récupérer. Cela peut mener à un nouveau drawdown plus important si la stratégie échoue encore.

Le drawdown tolerance détermine quand une stratégie doit être arrêtée. Beaucoup de traders définissent un drawdown max acceptable (ex: 20%) et arrêtent le bot si ce seuil est atteint. Cette discipline évite les blow-ups.

La relation entre drawdown et win rate : une stratégie avec un win rate bas (35%) mais un bon RRR peut avoir des drawdowns sévères mais recovers. Une stratégie avec un win rate de 50% mais un RRR de 1 peut avoir des drawdowns moins sévères mais plus fréquents.

## Nuances, critiques, limites

Le drawdown n'est pas réversible linéairement. Un drawdown de 50% nécessite un gain de 100% pour récupérer. Un drawdown de 80% nécessite un gain de 400%. Plus le drawdown est profond, plus la récupération est difficile.

Le temps de récupération est souvent sous-estimé. Un max drawdown de 30% peut prendre 6-12 mois à récupérer selon la volatilité du marché et le calendrier des gains.

Les drawdowns passés ne prédisent pas les drawdowns futurs. Une stratégie qui a eu un max drawdown de 20% en 5 ans peut avoir un drawdown de 40% l'année suivante si les conditions changent.

La volatilité des rendements impacte le drawdown. Une stratégie avec une volatilité élevée peut atteindre des drawdowns profonds même si le rendement annualisé est positif.

## Liens et implications

Le [[drawdown]] est la métrique principale pour évaluer la [[gestion du risque]]. Le [[risk of ruin]] est calculé à partir du drawdown et de la taille de position.

Le [[position sizing]] est le principal levier pour contrôler le drawdown. Un sizing plus conservateur (moins de risque par trade) réduit le drawdown mais aussi le rendement.

Le [[backtesting]] révèle le max drawdown historique d'une stratégie. Le [[forward testing]] montre si le drawdown en simulation correspond au drawdown réel.

## Sources

[^1]: Ang, "Risk Management and Regulation", Columbia Business School (2014)
[^2]: Investopedia, "Maximum Drawdown", https://www.investopedia.com/terms/m/maximum-drawdown-mdd.asp (consulted 2026)