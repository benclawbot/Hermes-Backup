---
titre: "Lambda de Kyle"
type: théorie
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 3
tags: [#théorie/microstructure, #modèle, #prix]
créé: 2026-04-21
liens_forts: ["[[Impact de marché]]", "[[Théorie de la microstructure]]", "[[Écart bid-ask]]", "[[Découverte du prix]]", "[[Liquidité]]", "[[Market making]]", "[[Ordre book dynamics]]"]
liens_opposition: []
---

# Lambda de Kyle

> [!info] Résumé
> Le lambda de Kyle (Kyle, 1985) mesure la sensibilité du prix de marché au flux d'ordres directionnel. Il quantifie combien le prix bouge pour une unité de flux d'ordres net, fournissant une mesure de la depth du marché et de l'intensité de l'information.

## Définition

Le lambda de Kyle (Kyle's lambda) est le coefficient dans l'équation qui relie le changement de prix au déséquilibre du flux d'ordres. Dans sa forme la plus simple, l'équation de Kyle s'écrit : Δp = λ × (order flow). Le order flow est mesuré comme la différence entre les achats et les ventes (net buy volume). Le lambda mesure l'impact d'une unité de net order flow sur le prix.

Un lambda élevé signifie qu'une petite quantité de net order flow déplace significativement le prix, indiquant un marché peu profond. Un lambda faible signifie qu'il faut un gros déséquilibre pour bouger le prix, indiquant un marché profond. Le lambda est donc une mesure de la liquidité du marché.

Le lambda est estimé empiriquement à partir des données de transaction. La régression du changement de prix sur le flux d'ordres net donne une estimation de lambda. Cette estimation est utilisée dans les modèles de trading et de risk management.

## Contexte et origine

Le lambda de Kyle provient du modèle de Kyle (1985), "Market Structure, Information, and Market Depth". Ce modèle est l'un des fondateurs de la microstructure financière moderne, avec le modèle de Glosten-Milgrom. Le modèle de Kyle formalise comment l'information privée se reflète dans les prix à travers le mécanisme du trading.

Le contexte de l'époque est la montée du trading institutionnel et la préoccupation pour l'impact des gros ordres sur les prix. Kyle a fourni un cadre quantitatif pour mesurer cet impact, permettant aux exécutants de estimer leur impact de marché.

Dans l'écosystème crypto, le lambda de Kyle est utilisé pour mesurer la liquidité des différents marchés. Les traders analysent le lambda de différentes paires pour identifier les marchés les plus profonds et les moins impactables. Les exchanges avec un lambda faible sont préférables pour exécuter des ordres de taille.

## Mécanismes / caractéristiques / détails

**Calcul du lambda** : le lambda est estimé par régression. Pour chaque intervalle de temps (par exemple, chaque minute), on calcule le changement de prix (Δp) et le flux d'ordres net (FO = achats - ventes). La régression de Δp sur FO donne lambda : Δp = λ × FO + ε. L'estimateur λ capture la sensibilité du prix au flux.

**Interprétation du lambda** : lambda a les unités de prix par unité de flux. Si le BTC/USDT a un lambda de 10 USD par BTC de flux net, alors un achat net de 1 BTC fait monter le prix de 10 USD. Un lambda de 100 USD/BTC signifierait un marché moins profond (même ordre bougerait le prix de 100 USD).

**Lambda et profondeur** : la relation entre lambda et profondeur est inverse. Un lambda faible indique un marché profond oÙ il faut beaucoup de flux pour déplacer le prix. La profondeur (depth) D est l'inverse du lambda : D = 1/λ. Un lambda de 0.01 correspond à une profondeur de 100.

**Lambda dans le temps** : le lambda n'est pas constant. Il varie selon les conditions de marché, la volatilité, et le volume. Pendant les périodes de stress, le lambda augmente (marché moins profond). Les traders doivent estimer le lambda conditionnellement aux conditions actuelles.

**Lambda et information** : le lambda de Kyle est lié à la densité de l'information. Plus le marché attire des traders informés, plus le lambda peut augmenter car chaque ordre transporte plus d'information. Le lambda est thus aussi une mesure de l'intensité informationnelle du flux d'ordres.

## Nuances, critiques, limites

Le lambda de Kyle suppose une relation linéaire entre flux et prix, ce qui peut être une simplification. En réalité, la relation peut être non-linéaire, surtout pour les gros ordres oÙ l'impact peut être plus que proportionnel.

Le lambda estimé historiquement peut ne pas refléter le lambda futur. Les conditions de marché changent, et le lambda calculé sur des données passées peut être obsolète. L'estimation doit être mise à jour régulièrement pour rester pertinente.

Le lambda est une mesure agrégée qui cache l'hétérogénéité du marché. Le vrai impact d'un ordre dépend de sa taille relative à la liquidité locale, pas seulement du lambda agrégé.

## Liens et implications

Le lambda de Kyle est directement lié à l'[[Impact de marché]]. Si le lambda est connu, on peut prédire l'impact d'un ordre de taille donnée. L'impact = λ × taille de l'ordre. Cette formule simple permet aux exécutants de estimer leur impact avant de passer l'ordre.

Le lambda fait partie des "[[Order book dynamics]]" car il décrit comment le prix réagit au flux d'ordres. Les modèles de dynamics du carnet utilisent le lambda pour prédire l'évolution du prix.

Les stratégies de [[Market making]] utilisent le lambda pour calibrer leurs tailles d'ordres. Un lambda élevé signale qu'il faut être plus conservateur avec la taille des ordres pour éviter un impact excessif.

## Sources

[^1]: Kyle, Albert. "Market Structure, Information, and Market Depth." *Journal of Financial Economics* 14 (1985): 599-619.
[^2]: Hasbrouck, Joel. *Empirical Market Microstructure*. Oxford University Press, 2007.
[^3]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.