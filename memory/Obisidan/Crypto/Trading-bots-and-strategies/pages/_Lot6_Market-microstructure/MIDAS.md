---
titre: "MIDAS"
type: méthode
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#méthode/midas, #analyse/ordres, #volume]
créé: 2026-04-21
liens_forts: ["[[Ordre book dynamics]]", "[[Volume profile]]", "[[Horloge de volume]]", "[[Impact de marché]]", "[[Liquidité]]", "[[Données de niveau 2]]", "[[Market making]]"]
liens_opposition: []
---

# MIDAS

> [!info] Résumé
> MIDAS (Market Interest Data Aggregated System) est une approche d'analyse du flux d'ordres développée par Jim Orri, qui utilise le volume et la structure du carnet pour identifier les niveaux de support et résistance et prédire les mouvements de prix à court terme.

## Définition

MIDAS est une méthodologie d'analyse du carnet d'ordres et du flux de volume développée par Jim Orri (Anmti). Contrairement à l'analyse technique classique qui se base sur les prix passés, MIDAS se concentre sur l'analyse du comportement du volume et des ordres pour identifier les niveaux oÙ les acteurs institutionnels sont susceptibles d'intervenir.

Le système MIDAS identifie les "lignes de prise de décision" basées sur le volume accumulé à différents niveaux de prix. Les niveaux oÙ un volume anormalement élevé s'est accumulé deviennent des zones de support ou de résistance car les acteurs qui y ont placé des ordres défendent ces niveaux.

Le concept central de MIDAS est que le marché est un système dynamique oÙ les participants placent des ordres à certains niveaux, et ces ordres créent un "réseau" de soutien/résistance visible dans le volume accumulé. Le prix réagit à ces niveaux car les acteurs qui ont accumulé une position défendent leur coût moyen.

## Contexte et origine

MIDAS a été développé par Jim Orri (pseudonyme Anmti), un analyste de marché qui a commencé à partager ses recherches sur les forums de trading dans les années 2010. Le système a gagné en popularité sur les forums de trading comme l'ancien forumpe, oÙ Jim partagait ses analyses basées sur le carnet d'ordres.

L'approche de MIDAS s'inspire des travaux sur la microstructure et le order flow analysis, mais les present de façon accessible pour les traders. Le système se concentre sur l'analyse du "volume profile" et des "lignes MIDAS" qui sont des niveaux de prix significatifs basés sur l'accumulation de volume.

Dans l'écosystème crypto, MIDAS a été adopté par plusieurs communautés de traders qui tradent les actifs numériques. L'accès aux données de niveau 2 sur les exchanges crypto a facilité l'application de l'approche MIDAS aux marchés crypto.

## Mécanismes / caractéristiques / détails

**Accumulation du volume** : MIDAS trace les "lignes d'accumulation" oÙ le volume s'est accumulé sur plusieurs périodes. Ces lignes deviennent des zones de support/résistance quand le prix revient à ces niveaux.

**Lignes de prise de décision** : les lignes MIDAS sont tracées à des niveaux de prix significatifs. Quand le prix approche une ligne, le système prédit une réaction basé sur le contexte historique de ce niveau. Si le niveau a historiquement arrêté le prix, une réaction haussière ou baissière est anticipée selon la nature du niveau.

**Calcul du volume accumulé** : le volume à chaque niveau de prix est additionné sur une période (session, jour, semaine). Les niveaux avec le volume le plus élevé deviennent les "lignes" du système. Le système utilise une normalisation pour identifier les niveaux les plus significatifs.

**Application au trading** : les traders MIDAS passent des ordres à cours limité près des lignes de support/résistance pour capturer le rebond. Le risque est limité par le placement de stop-loss juste au-delà de la ligne.

**Intégration avec d'autres outils** : MIDAS est souvent utilisé en combinaison avec d'autres indicateurs comme le [[Volume profile]], l'analyse technique classique, ou les chandeliers japonais. Le système ne prétend pas être une stratégie standalone mais un outil d'analyse du contexte.

## Nuances, critiques, limites

MIDAS est basé sur des patterns historiques et suppose que le comportement passé se répète. Cette hypothèse est commune à toute l'analyse technique et est suje à caution. Les marchés peuvent changer de régime et les niveaux qui ont fonctionné dans le passé peuvent ne plus fonctionner.

Le système MIDAS ne capture pas tous les facteurs influençant le prix. Les événements fondamentaux (annonces macro, regulatory news) peuvent temporairement eclipse les niveaux techniques. Les lignes MIDAS peuvent être traversées en cas de nouvel information.

L'approche est difficile à automatiser car elle repose sur l'interprétation du contexte et du comportement du prix aux niveaux clés. Les attemptations d'automatisation ont généralement des résultats mixed.

## Liens et implications

MIDAS est intimately lié à l'analyse du [[Volume profile]] et du flux d'ordres. Les deux approches utilisent le volume comme intrant principal pour identifier les niveaux de prix significatifs.

L'approche MIDAS peut être utilisée pour améliorer les stratégies de [[Market making]] en identifiant les niveaux oÙ le prix est susceptible de réagir. Les market makers peuvent ajuster leurs tailles d'ordres près de ces niveaux.

Le [[Backtesting]] des stratégies MIDAS est difficile car l'approche repose beaucoup sur l'interprétation contextuelle. Les résultats historiques peuvent ne pas être reproduits en live trading.

## Sources

[^1]: Orri, Jim (Anmti). "MIDAS: Market Interest Data Aggregated System." *Tradiers' forum posts*, 2010-2015.
[^2]: Bourdeix, R. "Volume Profile and MIDAS approach." *Technical Analysis of Stocks & Commodities*, 2018.
[^3]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.