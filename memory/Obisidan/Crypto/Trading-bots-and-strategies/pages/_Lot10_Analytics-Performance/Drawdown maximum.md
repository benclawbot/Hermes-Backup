---
titre: "Drawdown maximum"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/drawdown, #concept/risque, #concept/performance]
créé: 2026-04-21
liens_forts: ["[[Drawdown]]", "[[Durée du drawdown]]", "[[Facteur de récupération]]", "[[Calmar ratio]]", "[[Gestion du risque]]", "[[Position sizing]]", "[[Risk of ruin]]"]
liens_opposition: []
---

# Drawdown maximum

> [!info] Résumé
> Le drawdown maximum (max drawdown) mesure la pire baisse de capital depuis un pic historique. Métrique de risque critique qui capture l'exposition réelle au risque d'une stratégie, indépendamment du rendement.

## Définition

Le drawdown maximum est la plus grande baisse observée du capital, mesurée depuis le pic le plus élevé jusqu'au creux suivant.

Si un compte passe de 10 000€ à 12 000€ puis descend à 8 000€, le drawdown maximum est de 33% ((12 000 - 8 000) / 12 000).

Le max drawdown est toujours positif (exprimé en valeur absolue) même si la baisse est une perte. Il représente la perte maximale qu'un investisseur aurait subie avec un timing malchanceux.

## Contexte et origine

Le max drawdown est la métrique de risque la plus intuitive pour les investisseurs. Elle représente la perte réelle subie, pas une abstraction statistique comme la volatilité.

Les фондовые gestionnaires utilisent le max drawdown comme l'une des métriques principales pour évaluer les stratégies. Beaucoup d'investisseurs définissent un seuil de max drawdown maximum acceptable (ex: 20%) et refusent d'investir dans des stratégies qui dépassent ce seuil.

En trading algorithmique crypto, le max drawdown est particulièrement pertinent car les crypto-actifs sont volatils et les drawdowns de 30-50% sont communs même pour des stratégies bien conçues.

## Mécanismes et caractéristiques

### Calcul

Le max drawdown est calculé en traversant l'historique du capital et en identifiant le drawdown actuel à chaque point. Le maximum de tous les drawdowns observés est le max drawdown.

Le calcul peut être faites sur différentes devises : en pourcentage du pic (méthode standard), en pourcentage du capital initial, ou en euros/dollars absolus.

### Watermark élevé vs faible

Un max drawdown de 50% signifie que le capital a perdu 50% de sa valeur maximale. Pour recover, il faudra un gain de 100% (pas 50%).

La relation non linéaire entre drawdown et récupération :
- 10% drawdown → 11% gain pour recover
- 20% drawdown → 25% gain pour recover
- 50% drawdown → 100% gain pour recover
- 75% drawdown → 300% gain pour recover
- 90% drawdown → 900% gain pour recover

### Composants du drawdown

Le drawdown a deux dimensions : la profondeur (combien) et la durée (combien de temps). Une stratégie peut avoir un max drawdown de 30% qui est récupéré en 2 mois. Une autre peut avoir le même max drawdown mais récupérer en 18 mois.

## Applications pratiques

Le max drawdown est utilisé pour calibrer la taille des positions. Une stratégie avec un max drawdown historique de 30% ne devrait pas risquer plus de quelques pour cent par trade pour éviter les drawdowns catastrophiques.

Le [[Calmar ratio]] utilise le max drawdown comme denominateur. Un bon Calmar ratio ( > 2.0) indique que le rendement annualisé dépasse significativement le max drawdown.

La [[gestion du risque]] définit souvent des règles basé sur le max drawdown : stop automatique si le drawdown actuel dépasse un seuil (ex: 20%).

## Nuances, critiques, limites

Le max drawdown est une métrique historique qui ne预测 pas les drawdowns futurs. Une stratégie peut avoir un historique de max drawdown de 20% mais être exposée à un événement qui cause un drawdown de 50%.

Le max drawdown est sensitif à un seul événement extrême. Si la pire période est causée par des conditions inhabituelles, le max drawdown peut ne pas être représentatif du risque Ongoing.

Le max drawdown ne capture pas la fréquence des drawdowns. Une stratégie avec plusieurs drawdowns de 15% et une stratégie avec un seul drawdown de 15% ont le même max drawdown mais des profils de risque différents.

## Liens et implications

Le max drawdown est une composante clé du [[Calmar ratio]] et influence le [[Sharpe ratio]] à travers son impact sur les rendements.

La [[durée du drawdown]] et le [[facteur de récupération]] complètent le max drawdown pour une picture complète du risque de drawdown.

Le max drawdown affecte le [[risk of ruin]] directement. Plus le max drawdown est élevé, plus le risque de ruin est grand pour une taille de position donnée.

Le [[position sizing]] doit être calibré pour éviter que le drawdown agrégé (de tous les positions) ne dépasse un seuil acceptable.

## Sources

[^1]: Ang, "Risk Management and Regulation", Columbia Business School (2014)
[^2]: Investopedia, "Maximum Drawdown", https://www.investopedia.com/terms/m/maximum-drawdown-mdd.asp (consulted 2026)