---
titre: "Biais de récence"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#psychologie/mémoire, #concept/biais, #concept/cognition]
créé: 2026-04-20
liens_forts: ["[[Biais cognitifs]]", "[[Psychologie du trading]]", "[[Analyse technique pour bots]]", "[[Finance comportementale]]", "[[Indicateurs de sentiment]]", "[[Perception du risque]]", "[[Théorie des perspectives]]"]
liens_opposition: []
---

# Biais de récence

> [!info] Résumé
> Le biais de récence est la tendance à donner plus de poids aux informations récentes qu'aux informations plus anciennes. En trading, cela cause des évaluations erronées où une séquence récente de gains ou pertes influence disproportionnément les décisions et la perception du marché.

## Définition

Le biais de récence (recency bias) est un biais cognitif où les individus accordent une importance démesurée aux informations les plus récentes et tendent à ignorer ou sous-estimer les informations plus anciennes. Ce biais est une forme de distortion dans le traitement de l'information temporelle.

En trading, le biais de récence se manifeste quand un trader prend des décisions basées principalement sur les mouvements de prix récents plutôt que sur une vue d'ensemble. Si Bitcoin a augmenté pendant 3 jours, le trader voit "le marché est haussier" et achète, ignorant que cette hausse fait suite à une baisse de 30% sur le mois.

Ce biais est particulièrement dangereux car les dernières données sont plus disponibles en mémoire et semblent plus pertinentes pour prédire le futur proche. Mais les movements récents sont souvent réversibles et ne prédisent pas les tendances à long terme.

## Contexte et origine

Le biais de récence est lié à la "availability heuristic" identifié par Tversky et Kahneman (1974). Cette heuristique stipule que les gens jugent la probabilité d'événements selon la facilité avec laquelle des exemples viennent à l'esprit. Les événements récents sont plus facilement accessibles en mémoire.

En finance, le biais de récence explique des anomalies comme le "momentum" apparent dans les séries de prix. Les traders réagissent aux movements récents, créant une continuation à court terme qui peut être exploitée mais aussi surinterprétée.

Les études sur la mémoire montrent que les souvenirs récents sont plus nets et plus détaillés que les souvenirs anciens. Un trader se rappellera plus facilement du trade de hier que d'un événement similaire il y a six mois, influençant ses décisions actuelles.

## Mécanismes et caractéristiques

Le biais de récence opère à travers plusieurs mécanismespsychologiques.

La mémoire : les événements récents sont plus récents en mémoire et reviennent plus facilement à l'esprit. Un trader qui a vécu un flash crash récemment sera plus prudent face aux positions longues, même si les conditions ont changé.

L'estimation des probabilités : les gens surestiment la probabilité que les patterns récents se répètent. Une série de gains crée une attente de gains futurs, même si les fondamentaux ne supportent pas cette expectation.

La mise à jour des anticipations : les traders ajustent leurs modèles mentaux en fonction des nouvelles données. Mais quand les nouvelles données ont trop de poids, le modèle devient trop réactif aux fluctuations Court terme.

En [[analyse technique pour bots|analyse technique]], le biais de récence peut contribuer à sur-optimiser les indicateurs sur les données récentes plutôt que sur un historique plus large. Un bot qui utilise une moyenne mobile de 10 jours sera très réactif aux mouvements récents mais peut être trop sensible au bruit.

## Nuances, critiques, limites

Le biais de récence peut être partiellement justifié dans des marchés avec des régimes changeants. Si le marché vient de passer d'une basse volatilité à une haute volatilité, les données récentes sont plus informatives que les données historiques.

Cependant, le biais devient problématique quand il domine au détriment d'une vue plus équilibrée. Les marchés crypto sont particulièrement volatils et les regimes peuvent changer rapidement, mais une analysis trop orientée sur le récent peut mener à des décisions réactives plutôt que proactives.

Pour mitiger le biais de récence, les traders peuvent utiliser des stratégies multi-timeframe qui obligent à considérer des horizons plus longs. Le [[multi timeframe analysis]] force à regarder les graphiques quotidiens, hebdomadaires, mensuels en plus du graphique intrajournalier.

Les règles de décision mechanisées ([[trading bot]]s) peuvent être programmées pour appliquer des poids plus équilibrés aux données historiques plutôt que de succomber au biais de récence émotionnel humain.

## Liens et implications

Le [[biais de récence]] est une forme de [[biais cognitif]] lié à la mémoire et au traitement de l'information temporelle. Il affecte la [[psychologie du trading]] et la perception du marché.

L'[[analyse technique pour bots]] peut être affectée par ce biais si les indicateurs sont optimisés sur des périodes récentes sans considerar la stabilité du pattern sur des périodes plus longues.

Les [[indicateurs de sentiment]] sont souvent influencés par le biais de récence collectif : le sentiment est souvent plus récent que la réalité fondamentale, créant des opportunités pour les traders contrarians.

La [[perception du risque]] est déformée par le biais de récence : après une perte, le risque perçu augmente temporairement et influence les décisions de manière disproportionnée par rapport au risque objectif.

## Sources

[^1]: Tversky & Kahneman, "Availability", Cognitive Psychology (1973)
[^2]: Kahneman, "Thinking, Fast and Slow", Farrar, Straus and Giroux (2011)
[^3]: Charron, "Recency Bias in Financial Markets", Journal of Behavioral Finance (2020)