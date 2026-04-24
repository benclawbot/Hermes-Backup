---
titre: "Facteur de profit"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/profitfactor, #concept/rendement, #concept/stratégie]
créé: 2026-04-21
liens_forts: ["[[Espérance mathématique]]", "[[Taux de réussite]]", "[[Drawdown]]", "[[Sharpe ratio]]", "[[Gestion du risque]]", "[[Position sizing]]", "[[Backtesting]]"]
liens_opposition: []
---

# Facteur de profit

> [!info] Résumé
> Le facteur de profit mesure le rapport entre les gains bruts et les pertes brutes. Un facteur de profit supérieur à 1 signifie que la stratégie est profitable, avec 2 signifiant que les gains sont le double des pertes.

## Définition

Le facteur de profit est le ratio entre le total des gains et le total des pertes sur une période donnée.

Facteur de profit = Gains bruts totaux / Pertes brutes totales

Un facteur de profit de 1.5 signifie que pour chaque dollar perdu, la stratégie génère 1.50$ de gain. Un facteur de 2.0 est souvent considéré comme excellent.

Le facteur de profit peut aussi être exprimé comme le rapport inverse pour les stratégies défensives : Pertes/Gains = 1/Facteur de profit.

## Contexte et origine

Le facteur de profit est une métrique populaire car elle est simple à calculer et intuitive. Elle est largement utilisée dans le trading algorithmique et les plateformes de backtesting.

La métrique est particulièrement pertinente pour les stratégies avec des distributions de gains très asymétriques, où le [[win rate]] seul est insuffisant.

En trading algorithmique crypto, un facteur de profit de 1.5+ est généralement considéré comme acceptable, 2.0+ comme bon, et 3.0+ comme excellent pour des stratégies jangka panjang.

## Mécanismes et caractéristiques

### Calcul détaillé

Le facteur de profit brut (Gross Profit Factor) ne considère que les gains et pertes bruts.
Le facteur de profit net (Net Profit Factor) déduit les coûts de transaction.

Pour une évaluation réaliste, le facteur net est preferé car les coûts de slippage et de frais peuvent significativement reduire le facteur brut.

### Interprétation

Facteur < 1.0 : Stratégie déficitaire
Facteur 1.0 - 1.25 : Légèrement profitable (ou non rentable après coûts)
Facteur 1.25 - 1.5 : Modérément profitable
Facteur 1.5 - 2.0 : Profitable
Facteur 2.0 - 3.0 : Très profitable
Facteur > 3.0 : Excellente (ou possiblement surapprentissage)

### Limitations

Le facteur de profit ne considère pas le timing des gains et pertes. Une stratégie avec facteur de 2.0 pourrait avoir des périodes de drawdown très longues avant de générer ses gains.

Le facteur de profit est vulnérable aux outliers. Une stratégie avec quelques très gros gains et beaucoup de petites pertes peut avoir un excellent facteur malgré une espérance très variable.

## Applications pratiques

Le facteur de profit est utilisé comme critère de sélection des stratégies. Beaucoup de traders définissent un seuil minimum (ex: 1.5) avant de considerer une stratégie.

Le facteur de profit est particulièrement utile quand combiné avec le [[drawdown]] maximum. Une stratégie avec facteur de 2.0 mais un max drawdown de 60% est plus risquée qu'une stratégie avec facteur de 1.5 et max drawdown de 15%.

En allocation de capital, le facteur de profit contribue à la décision d'allocation. Les stratégies avec facteurs plus élevés méritent plus de capital, toutes choses égales par ailleurs.

## Nuances, critiques, limites

Le facteur de profit ne dit rien sur le [[win rate]]. Une stratégie peut avoir un facteur de 2.0 avec un win rate de 20% (gains très importants) ou de 80% (petits gains fréquents).

Le facteur de profit calculé sur différentes périodes peut varier significativement. Une stratégie peut avoir un facteur excellent sur 6 mois mais déficitaire sur 3 ans.

Le facteur de profit est sensible aux coûts de transaction. Une stratégie avec facteur de 1.3 brut peut devenir déficitaire avec des coûts de transaction élevés (particulièrement pertinent en trading haute fréquence crypto).

## Liens et implications

Le facteur de profit est intimement lié à l'[[espérance mathématique]], qui combine le win rate et le ratio de gain/perte pour donner une image complète de la profitability.

Le facteur de profit contribue au [[Sharpe ratio]] et à d'autres métriques de performance. Une stratégie avec un bon facteur aura généralement un bon Sharpe.

Le [[drawdown]] attendu est lié au facteur de profit. Une stratégie avec un facteur élevé mais des pertes clusterisées peut avoir des drawdowns importants malgré un bon facteur global.

Le [[position sizing]] est affecté par le facteur de profit. Une stratégie avec un facteur plus élevé peut potentiellement justifier des positions plus grandes selon le Kelly Criterion.

## Sources

[^1]: Achelis, "Technical Analysis from A to Z", McGraw-Hill (2000)
[^2]: Investopedia, "Profit Factor", https://www.investopedia.com/terms/p/profitfactor.asp (consulted 2026)