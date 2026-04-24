---
titre: "In-sample vs out-of-sample"
type: méthode
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#méthode/validation, #concept/backtesting, #concept/testing]
créé: 2026-04-21
liens_forts: ["[[Backtesting]]", "[[Forward testing]]", "[[Surapprentissage]]", "[[Walk-forward analysis]]", "[[Cadres de backtesting]]", "[[Cross-validation]]", "[[Données de trading]]"]
liens_opposition: []
---

# In-sample vs out-of-sample

> [!info] Résumé
> La distinction in-sample vs out-of-sample est fondamentale en backtesting. Les données in-sample servent à développer et optimiser la stratégie ; les données out-of-sample à valider sa performance réelle. Cette séparation prévient le surapprentissage et donne une estimation plus réaliste de la performance future.

## Définition

Les données **in-sample** (échantillon d'entraînement) sont les données historiques sur lesquelles une stratégie est développée, testée et optimisée. Quand un trader code une stratégie et teste des centaines de configurations jusqu'à trouver celle qui performe le mieux sur ces données, il utilise l'in-sample.

Les données **out-of-sample** (échantillon de test) sont les données qui n'ont pas été utilisées lors du développement. Elles sont held-out (mises de côté) et ne sont révélées qu'après avoir finalisé la stratégie. La performance sur ces données donne une estimation plus fiable de la performance en [[live trading]].

L'écart entre performance in-sample et out-of-sample est un indicateur clé de [[surapprentissage]]. Un gap important signale que la stratégie a "mémorisé" les patterns de l'in-sample plutôt que d'apprendre des patterns généralisables.

## Contexte et origine

La validation out-of-sample vient de la statistique classique et du machine learning. En estadística, on appelle "hold-out set" les données mises de côté pour valider un modèle. L'idée est que si un modèle ne generalize pas à des données qu'il n'a jamais vues, il n'a pas vraiment appris.

En trading algorithmique, cette pratique a été adoptée avec le [[backtesting]]. Les premiers traders quantitatifs des années 1980 ont vite réalisé que des stratégies qui performaient parfaitement sur l'historique échouaient lamentablement en réel — le [[surapprentissage]] était né.

Les techniques modernes comme le [[walk-forward analysis]] généralisent ce concept en plusieurs cycles d'in-sample/out-of-sample successifs, simulant comment la stratégie aurait performé si elle avait été déployée et ajustée périodiquement.

## Mécanismes et caractéristiques

### Protocole standard

Le protocole classique in-sample/out-of-sample :
1. Diviser les données en 70-80% in-sample et 20-30% out-of-sample
2. Développer et optimiser la stratégie sur l'in-sample uniquement
3. Tester la stratégie finalisée sur l'out-of-sample sans aucun ajustement
4. Si la performance out-of-sample est acceptable, la stratégie est候选 pour le [[forward testing]]

### Ratios de performance

Le **ISR (In-Sample Ratio)** mesure le ratio entre performance in-sample et out-of-sample. Un ISR > 1.5 (la stratégie performe 50% mieux in-sample) est un signal d'alarme. Plus l'écart est faible, mieux c'est.

Le **IC (Information Coefficient)** en contexte de backtesting mesure la correlation entre les prédictions et les réalisations. Une IC stable à travers les périodes out-of-sample indique une stratégie robuste.

### Walk-forward analysis

Le [[walk-forward analysis]] va au-delà en utilisant des fenêtres glissantes. À chaque période, la stratégie est optimisée sur une fenêtre (in-sample), puis validée sur la période suivante (out-of-sample). Ce processus répétitif simule le déploiement réel où la stratégie doit être périodiquement réoptimisée.

Les résultats sont agrégés pour obtenir une performance "中性" qui reflète mieux les conditions réelles. Si le walk-forward montre un Sharpe de 1.2 contre un Sharpe de 2.8 in-sample complet, la performance réelle estimée est autour de 1.2.

## Nuances, critiques, limites

Le problème fundamental est que même l'out-of-sample n'est pas vraiment "nouveau" — ce sont des données passées. La performance future peut encore différer significativement car les conditions de marché évoluent. Une stratégie qui performe bien en 2019-2021 (in-sample) et en 2022 (out-of-sample) peut échouer en 2024 si les conditions macroéconomiques changent radicalement.

Le "multiple testing problem" complique tout. Si un trader teste 100 stratégies sur l'out-of-sample et en sélectionne une qui performe bien, il y a de fortes chances que cette performance soit due au hasard plutôt qu'à un vrai edge. La significativité statistique exige de contrôler pour ce biais.

Le timing de la séparation in-sample/out-of-sample compte. Choisir une période bull market pour l'in-sample et bear market pour l'out-of-sample (ou vice versa) peut fausser la validation. Les périodes doivent capturer des regimes de marché variés.

L'out-of-sample n'est pas toujours représentatif des conditions de liquidité actuelles. Beaucoup de backtests utilisent des données de 2017 pour valider une stratégie, ignorant que le marché crypto en 2024 a une liquidité et une microstructure très différentes.

## Liens et implications

Le [[Backtesting]] sans validation out-of-sample est incomplet et potentiellement trompeur. L'out-of-sample est la première ligne de défense contre le [[surapprentissage]].

Le [[Forward testing]] complète la validation out-of-sample en testant sur des données en temps réel simulées. Les deux formes de validation sont nécessaires avant le déploiement.

La [[Cross-validation]] en machine learning pour trading suit des principes similaires. K-fold cross-validation divise les données en K parties et valide cycliquement, une approche plus robuste que le simple hold-out.

Les [[Cadres de backtesting]] comme Backtrader ou VectorBT incluent des fonctionnalités pour gérer proprement la séparation in-sample/out-of-sample. Utiliser un framework évite les erreurs courantes de data leakage.

## Sources

[^1]: Marcos López de Prado, "Advances in Financial Machine Learning", Wiley (2018)
[^2]: Michael banks, "Backtesting Strategies", QuantInsti (consulted 2026)
