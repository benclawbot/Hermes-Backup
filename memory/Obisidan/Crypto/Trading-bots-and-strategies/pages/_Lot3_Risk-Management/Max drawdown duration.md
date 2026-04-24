---
titre: "Max drawdown duration"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/drawdown, #concept/temps, #concept/risque]
créé: 2026-04-21
liens_forts: ["[[Drawdown]]", "[[Drawdown recovery time]]", "[[Calmar ratio]]", "[[Gestion du risque]]", "[[Risk of ruin]]"]
liens_opposition: []
---

# Max drawdown duration

> [!info] Résumé
> Le max drawdown duration mesure le temps le plus long que met une stratégie pour atteindre son pic de capital puis plonger jusqu'au creux suivant. Cette métrique capture la dimension temporelle du risque souvent négligée par les autres indicateurs de drawdown.

## Définition

Le max drawdown duration, aussi appelé "longest drawdown period" ou "duration de drawdown maximale", mesure l'intervalle de temps entre le début d'un drawdown et sa fin. Il répond à la question : combien de temps un investisseur doit-il endurer une baisse avant de récupérer son capital ?

Si un compte passe par un pic à 10 000€ le 1er janvier, chute à 6 000€ le 15 mars, puis remonte à 10 000€ le 20 avril, la duration du drawdown est d'environ 110 jours (de janvier à avril). Le max drawdown duration est la plus longue période de ce type observée historiquement.

Cette métrique est particulièrement importante en crypto où les cycles de marché peuvent être longs. Un [[Trading bot]] peut avoir un max drawdown de seulement 20% mais si cette baisse dure 18 mois, l'impact psychologique et le coût d'opportunité sont significatifs. À l'inverse, un drawdown de 30% récupéré en 2 mois est moins problématique.

## Contexte et origine

Le concept de drawdown duration provient de la gestion de fonds institutionnelle où les investisseurs institutionnels (fonds de pension, assurances) ont des horizons de placement long terme et des contraintes de liquidité. Ils doivent s'assurer que les stratégies ne restent pas trop longtemps en territoire de drawdown.

Les family offices et les fonds souverains utilisent cette métrique pour évaluer les gestionnaires. Un gestionnaire qui génère des rendements attractifs mais avec des périodes de drawdown très longues peut ne pas convenir à tous les investisseurs.

En trading algorithmique retail, la drawdown duration est souvent sous-estimée. Les traders individuels ont tendance à se concentrer sur le pourcentage de drawdown sans considérer combien de temps ils devront "tenir" avant la récupération. Cette erreur peut mener à des décisions de trading émotionnelles mal synchronisées.

## Mécanismes et caractéristiques

Le calcul de la duration nécessite de tracer le capital au fil du temps. Pour chaque période où le capital est en dessous du pic précédent, on mesure la durée. Le max drawdown duration est le maximum de toutes ces durées.

La distribution des durations est aussi importante que le maximum. Une stratégie peut avoir un max drawdown duration de 200 jours mais une median drawdown duration de seulement 20 jours. Cela suggère que la plupart des drawdowns sont courts mais que certains événements extrêmes créent des périodes longues.

Le [[drawdown recovery time]] est étroitement lié mais distinct. Le recovery time mesure combien de temps il faut pour remonter après le creux, tandis que la drawdown duration inclut à la fois la descente et la récupération.

En pratique, les[[Trading bot]]s sophistiqués tracent la drawdown duration en temps réel. Si la duration actuelle approche du record historique, une alarme est déclenchée pour examiner la stratégie.

## Nuances, critiques, limites

La drawdown duration n'est pas directement comparable entre stratégies sans normalisation. Une stratégie long-only sur crypto peut avoir des drawdowns longs mais peu fréquents. Une stratégie market neutral peut avoir des drawdowns courts mais fréquents.

La duration est impactée par la volatilité du marché pendant la période de drawdown. En période de forte volatilité, la recovery peut être plus rapide (ou plus lente) selon la stratégie. Il faut donc Contextualiser la duration par rapport aux conditions de marché.

Un long drawdown duration peut être acceptable si le rendement annualisé compense. Une stratégie avec 200 jours de drawdown max mais 100% de rendement annualisé peut être preferable à une stratégie avec 30 jours de drawdown mais seulement 10% de rendement.

La dimension psychologique est cruciale. Beaucoup d'investisseurs ne peuvent pas tolérer des périodes de drawdown longues, même si la stratégie est fondamentalement solide. Cela peut mener à des rachats au pire moment.

## Liens et implications

Le max drawdown duration est une composante clé du [[Drawdown]]. Le [[Drawdown recovery time]] mesure combien de temps supplémentaires après le creux pour revenir au pic.

Le [[Calmar ratio]] pourrait être amélioré en incluant la duration en plus du simple max drawdown. Un "Calmar ratio ajusté" qui penalise les longs drawdowns serait plus complet.

La [[Gestion du risque]] doit inclure des limites de duration en plus des limites de pourcentage. Arrêter un bot après 3 mois de drawdown (même si le drawdown n'est que de 15%) peut être plus sûr que d'attendre que le drawdown atteigne 30%.

Le [[Risk of ruin]] est impacted par la drawdown duration. Une stratégie avec des drawdowns longs mais modérés peut avoir le même risque de ruine qu'une stratégie avec des drawdowns courts mais profonds.

## Sources

[^1]: Ang, "Risk Management and Regulation", Columbia Business School (2014)
[^2]: Investopedia, "Drawdown", https://www.investopedia.com/terms/d/drawdown.asp (consulted 2026)
