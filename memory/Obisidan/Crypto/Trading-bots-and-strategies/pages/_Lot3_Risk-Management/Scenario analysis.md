---
titre: "Scenario analysis"
type: méthode
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#méthode/analyse, #méthode/risque, #concept/scenario]
créé: 2026-04-21
liens_forts: ["[[Stress testing]]", "[[Risk budgeting]]", "[[Risk limits and circuit breakers]]", "[[Diversification]]", "[[Drawdown]]"]
liens_opposition: []
---

# Scenario analysis

> [!info] Résumé
> La scenario analysis évalue comment une stratégie se comporte dans différents scénarios de marché, chacun représentant une configuration économique ou de marché distincte. Cette approche structure la réflexion sur lincertitude future.

## Définition

La scenario analysis est une méthode qui définit plusieurs scénarios de marché distincts et évalue la performance de la stratégie dans chacun deux. Chaque scénario est une description cohérente dun état possible du monde.

Contrairement au[[Stress testing]] qui se concentre sur les conditions extrêmes, la scenario analysis peut inclure des scénarios neutres ou même favorables. L'objectif est de comprendre la sensibilité de la stratégie à différents environnements.

Les scénarios typiques incluent :
- **Bull market** : tendance haussière persistante
- **Bear market** : tendance baissière prolongée
- **Market neutral** : range, faible tendance
- **High volatility** : volatilité extreme
- **Low liquidity** : liquidité réduite
- **Regulatory change** : nouvelle réglementation

Chaque scénario est caractérisé par des paramètres : direction du prix, volatilité, volume, corrélations entre actifs. La stratégie est backtestée ou simulée dans chaque configuration.

La scenario analysis aide à comprendre si une stratégie est robuste ou si elle ne fonctionne que dans un environnement spécifique. Une stratégie de breakout peut bien performer en bull market mais échouer en bear market.

## Contexte et origine

La scenario analysis est née dans les années 1970 dans le contexte de la planification stratégique. Les entreprises utilisaient des scénarios pour réfléchir à lavenir incertain de leur industrie.

En finance, la méthode a été popularisée par Peter Schwartz et d'autres experts en planification par scénarios. Shell lutilise depuis longtemps pour gérer lincertitude dans lénergie.

Les[[trading bot]]s bénéficient de la scenario analysis car ils opèrent dans des environnements de marché variés. Une stratégie déployée sans compréhension de sa performance dans différents scénarios peut être une surprise négative.

La scenario analysis est particulièrement pertinente pour les stratégies de [[Risk budgeting]]. En allocant le risque entre scénarios, on peut optimiser le portefeuille pour differentes eventualités.

## Mécanismes et caractéristiques

La création de scénarios implique de définir :
1. Les conditions initiales (prix, volatilité, etc.)
2. Les règles devolution des facteurs de risque
3. Lhorizon temporel
4. Les métriques dévaluation

Les scénarios peuvent être qualitatifs (description narrative) ou quantitatifs (séries temporelles de prix simulés). Les deux approches sont complémentaires.

La sensibilité analysis est une forme de scenario analysis où on ne fait varier quun seul facteur à la fois. Cela aide à comprendre l'impact marginal de chaque parameter.

Les scenarios extremes (worst case, best case) sont útiles pour définir les[[Risk limits and circuit breakers]]. Si le worst case est une perte de 40%, le circuit breaker doit être fixé en dessous. En pratique, on fixe généralement le circuit breaker à 50-70% du worst case pour avoir une marge de sécurité. Par exemple, si le stress test montre une perte maximale de 40%, le circuit breaker pourrait être fixé à 25-30% de drawdown maximum. Cette approche prophylactique permet de protéger le capital avant d'atteindre des niveaux de perte critiques. Les scénarios extrêmes sont particulièrement importants en crypto où les mouvements de prix peuvent être très amples et rapides.

## Nuances, critiques, limites

Le nombre de scénarios est forcement limité. Le vrai monde peut avoir une infinite de configurations, et on ne peut en tester quun sous-ensemble. Les scénarios sélectionnés peuvent ne pas être représentatifs.

Les scénarios supposent une certain consistency interne qui peut ne pas exister dans la réalité. Les marchés sont complexes et les facteurs évoluent de manière interconnectée.

La pondération des scénarios est subjective. Si on donne 50% de probabilité au bull market et 50% au bear market, mais que le vrai marché est 100% bear, les résultats seront décevants.

La scenario analysis alone nest pas suffisant pour gérer le risque. Elle doit être combinée avec des methods quantitatives comme le VaR, le stress testing, et les circuit breakers.

## Liens et implications

La[[Scenario analysis]] complète le[[Stress testing]]. La première explore une variété de scénarios normaux et extrêmes, tandis que la seconde se concentre sur les conditions extrêmes.

Les[[Diversification]] des stratégies peut être évaluée via la scenario analysis. Une combination de stratégies qui performe bien dans tous les scénarios est preferable à une combinación qui ne réussit que dans un seul.

Les[[Risk limits and circuit breakers]] peuvent être définis en fonction des scénarios worst case. Chaque scénario donne une perte maximale qui informe le niveau des limits.

Le[[Risk budgeting]] peut utiliser les scénarios pour allouer le risque de manière optimisée. On peut allouer plus de budget aux scénarios les plus probables ou les plus risque.

## Sources

[^1]: Schwartz, "The Art of the Long View", Doubleday (1991)
[^2]: van der Heijden, "Scenarios", Wiley (2006)
