---
titre: "Simulation Monte Carlo"
type: méthode
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#méthode/simulation, #concept/risque, #concept/probabilité]
créé: 2026-04-21
liens_forts: ["[[Risk of ruin]]", "[[Kelly Criterion]]", "[[Gestion du risque]]", "[[Position sizing]]", "[[Scenario analysis]]", "[[Drawdown]]", "[[Expected shortfall]]"]
liens_opposition: []
---

# Simulation Monte Carlo

> [!info] Résumé
> La simulation Monte Carlo génère des milliers de scénarios aléatoires pour estimer la distribution des résultats possibles d'une stratégie. Elle permet de quantifier le risk of ruin, les drawdowns probables, et la variance des rendements au-delà des métriques standards.

## Définition

La simulation Monte Carlo utilise des méthodes statistiques aléatoires pour résoudre des problèmes qui seraient déterministiquement insolubles. En trading, elle génère des milliers (voire millions) de chemins de prix et de sequences de trades possibles, permettant d'estimer la distribution complète des résultats plutôt qu'une simple estimation ponctuelle.

Concrètement, pour une stratégie avec un win rate de 55% et un avg gain/perte de 1.5, la simulation va générer 10 000 séquences de 500 trades chacune, en randomisant l'ordre des gains et pertes selon les probabilités observées. Chaque séquence produit une courbe de capital différente. L'analyse de ces 10 000 courbes donne la distribution des rendements possibles.

Cette approche révèle des informations inaccessibles via les calculs analytiques : les pires scénarios (tail risk), la variance des drawdowns, la probabilité de ruine given different position sizing.

## Contexte et origine

Le nom "Monte Carlo" vient du célèbre casino, utilisé comme métaphore par les mathématiciens Stanislaw Ulam et John von Neumann dans les années 1940. Ils travaillaient sur la simulation de la diffusion des neutrons pour le projet Manhattan et ont réalisé qu'un ordinateur pouvait simuler des processus aléatoires pour résoudre des équations différentielles complexes.

En finance, les simulations Monte Carlo ont été appliquées dès les années 1970 pour évaluer les options et les dérivés. Aujourd'hui, elles sont omniprésentes dans l'évaluation des stratégies de trading, la gestion de portefeuille, et la quantification des risques.

En crypto, où les distributions de rendements sont rarement gaussiennes et où les événements extrêmes sont fréquents, la simulation Monte Carlo est particulièrement précieuse. Elle capture la skewness et la kurtosis des rendements crypto que les méthodes analytiques traditionnelles ne peuvent pas gérer.

## Mécanismes et caractéristiques

### Bootstrap des trades

La méthode la plus courante en trading est le bootstrap : on prend la série historique des rendements (ou des P&L par trade), et on resample aléatoirement avec remise pour générer des milliers de sequences de trades possibles. Chaque sequence est treated as un possible futur.

Les entrées nécessaires :
- Liste historique des rendements par trade
- Nombre de simulations (10 000 minimum pour la précision)
- Horizon de simulation (500 trades, 2 ans, etc.)

Les sorties :
- Distribution des rendements finaux
- Distribution des max drawdowns
- Percentiles (5%, 1% tail risk)
- Probabilité de ruine given un seuil

### Monte Carlo pour le position sizing

Une application critique est la détermination de la taille de position optimale. En simulant 10 000 sequences pour différentes tailles de position (1%, 2%, 5% du capital), on peut visualiser comment le risk of ruin et le rendement attendu évoluent.

Le [[Kelly Criterion]] suggère une taille agressive ; la simulation Monte Carlo permet de voir la variance. Avec 2% du capital (moitié du Kelly pour un profile donné), le 95e percentile du rendement peut être acceptable tandis que le 5e percentile ne cause pas de ruine.

### Analyse des drawdowns

La simulation Monte Carlo permet d'analyser la distribution des max drawdowns. Au lieu d'un simple max drawdown historique, on obtient le 90e percentile des max drawdowns, le 95e, etc. Si le 5e percentile des max drawdowns est déjà catastrophique, la stratégie est trop risquée.

Cette analyse informe directement la [[gestion du risque]] et les [[Risk limits and circuit breakers]]. Définir un circuit breaker à 30% de drawdown peut être validé par simulation : quel pourcentage des simulations atteint ce seuil ?

## Nuances, critiques, limites

La qualité des résultats dépend de la qualité des inputs. Si la série historique des trades n'est pas représentative du futur (parce que la stratégie a changé ou parce que le marché a évolué), les simulations seront des projections basadas sur un passé non représentatif.

La simulation assume que les trades futurs seront distribués comme les trades passés. En réalité, les marchés crypto évoluent. Une stratégie de [[Grid trading]] qui a fonctionné en 2020-2021 peut avoir des caractéristiques très différentes en 2024-2025 à cause de la changeante volatilité et liquidité.

Le risque de "garbage in, garbage out" est réel. Une stratégie avec peu de trades historiques ( moins de 100) produit des distributions peu fiables. Plus la série historique est longue et riche, plus les simulations sont robustes.

La simulation Monte Carlo计算密集ée. 10 000 simulations de 1 000 trades chacune prend plusieurs secondes à minutes selon la complexité. Pour du trading haute fréquence avec des décisions millisecondes, ce n'est pas toujours praticable.

## Liens et implications

La simulation Monte Carlo est le outil principal pour estimer le [[Risk of ruin]] de manière précise. Au lieu d'une formule analytique qui假设 une distribution gaussienne, elle génère la distribution empirique des résultats.

Le [[Kelly Criterion]] trouve sa validation pratique via Monte Carlo. Une taille de position "optimale" selon Kelly peut être simulée pour voir la variance des résultats. Le Half-Kelly ou Quarter-Kelly émerge souvent comme plus praticable quand on visualise la variance.

La [[Gestion du risque]] benefit directement de Monte Carlo pour définir les limites de drawdown acceptables. Les [[Risk limits and circuit breakers]] peuvent être calibrés selon les percentiles de la distribution simulée.

L'[[Expected shortfall]] (CVaR) complète le VaR et peut être estimé via Monte Carlo. Le 5e percentile des résultats (CVaR à 95%) est directelement observable dans les simulations.

## Sources

[^1]: Glasserman, "Monte Carlo Methods in Financial Engineering", Springer (2003)
[^2]: Ralph Vince, "The Mathematics of Money Management", Wiley (1992)
