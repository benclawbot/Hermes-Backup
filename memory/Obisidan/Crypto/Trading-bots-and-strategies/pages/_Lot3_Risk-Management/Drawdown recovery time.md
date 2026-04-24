---
titre: "Drawdown recovery time"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/drawdown, #concept/temps, #concept/risque]
créé: 2026-04-21
liens_forts: ["[[Drawdown]]", "[[Max drawdown duration]]", "[[Gestion du risque]]", "[[Position sizing]]"]
liens_opposition: []
---

# Drawdown recovery time

> [!info] Résumé
> Le drawdown recovery time mesure combien de temps il faut pour récupérer un drawdown après l'avoir subi. Cette durée croît exponentiellement avec la profondeur du drawdown, rendant les gros drawdowns extrêmement coûteux en temps.

## Définition

Le drawdown recovery time est le temps nécessaire pour que le capital retrouve son niveau antérieur au drawdown. Si un compte passe de 10 000€ à 7 500€ (drawdown de 25%), combien de temps faudra-t-il pour remonter à 10 000€ ? La réponse dépend du taux de croissance.

Un drawdown de 10% nécessite un gain de 11.1% pour récupérer. Un drawdown de 20% nécessite un gain de 25%. Un drawdown de 50% nécessite un gain de 100%. Cette progression géométrique est souvent sous-estimée par les traders.

Le recovery time dépend de deux facteurs : la profondeur du drawdown et le taux de croissance futur. Une stratégie avec un drawdown de 30% mais un rendement mensuel de 5% récupérera plus vite qu'une stratégie avec 20% de drawdown mais seulement 1% de rendement mensuel.

Cette métrique est critique pour les [[trading bot]]s car elle touche à la fois au [[Risk-reward ratio|reward potentiel]] et à la dimension temporelle. Un bot peut être techniquement rentable mais impraticable si ses périodes de recovery sont trop longues.

## Contexte et origine

Le concept de recovery time est intrinsèquement lié à la problématique du drawdown dans la gestion de patrimoine. Les conseillers financiers utilisent cette métrique pour calibrer les attentes des clients et définir des profils de risque appropriés.

Les recherches en finance comportementale montrent que les investisseurs sous-estiment régulièrement la difficulté de récupération après un drawdown. Beaucoup croient qu'un drawdown de 30% nécessite un gain de 30% pour récupérer, alors que c'est en réalité un gain de 43%.

En trading algorithmique, le recovery time est un paramètre souvent négligé dans le [[backtesting]] mais il devrait être une métrique de première classe. Les stratégies avec des drawdowns profonds mais des récupérations rapides peuvent être préférables à celles avec des drawdowns modérés mais des récupérations lentes.

Les stratégies de [[Martingale strategy]] sont particulièrement vulnérables au recovery time. Après un drawdown important, la stratégie nécessite une longue série de gains pour récupérer, augmentant le risque de ruine avant récupération complète.

## Mécanismes et caractéristiques

Le calcul du recovery time peut se faire en nombre de périodes (jours, semaines, mois) nécessaires pour atteindre le nouveau pic de capital. Si le drawdown est de D% et le rendement par période est r%, le nombre de périodes nécessaires est approximativement log(1/(1-D)) / log(1+r).

Pour un drawdown de 50% (D = 0.5) et un rendement de 5% par période (r = 0.05), le recovery time est environ 15 périodes. Pour un drawdown de 80%, il faut environ 22 périodes avec le même rendement.

Le recovery time moyen est une statistique utile au même titre que le max recovery time. Une stratégie peut avoir un max recovery time de 200 jours mais une moyenne de seulement 30 jours, ce qui suggère que la plupart des récupérations sont rapides malgré quelques événements extrêmes.

La[[Volatility scaling]] peut aider à réduire le recovery time en augmentant l'exposition après un drawdown, mais cela augmente aussi le risque. Cette approche "double ou rien" est controversée et ne convient pas à tous les profils d'investisseur.

## Nuances, critiques, limites

Le recovery time est une projection qui suppose des conditions futures constantes. Si la stratégie change de comportement ou si les conditions de marché évoluent, le recovery time réel peut différer significativement de l'estimation.

Le concept de "temps de récupération" peut être fallacieux si la stratégie n'a pas retrouvé son niveau de performance. Un compte qui remonte à son pic de capital mais avec une stratégie dégradée n'est pas vraiment "récupéré".

Le recovery time n'intègre pas le risque de nouveaux drawdowns pendant la période de récupération. En pratique, une stratégie peut être en recovery quand un nouveau drawdown survient, allongeant considérablement le temps total en territoire négatif.

L'impact psychologique du recovery time est souvent sous-estimé. Trader avec un drawdown de 30% pendant 12 mois pèse sur le plan émotionnel même si la stratégie est techniquement correcte. Beaucoup de traders abandonnent avant recovery complète.

## Liens et implications

Le[[Drawdown recovery time]] est une composante de la [[Max drawdown duration]] qui inclut à la fois la descente et la remontée. Le recovery time seul ne capture que la phase ascendante après le creux.

La[[Gestion du risque]] doit intégrer le recovery time dans ses limites. Définir un drawdown max et un temps de recovery max comme conditions d'arrêt protège contre les situations où la récupération devient impraticable.

Le[[Position sizing]] affecte directement le recovery time. Un sizing plus conservateur (risque moins par trade) peut réduire le drawdown max et accélérer la récupération. Le[[Kelly criterion practical limits]] donne un cadre pour le dimensionnement optimal.

## Sources

[^1]: Bernstein, "The New Finance", Holt (1994)
[^2]: Ang, "Risk Management and Regulation", Columbia Business School (2014)
