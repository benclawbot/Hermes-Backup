---
titre: "Williams %R"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/oscillateur, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[RSI Divergence strategy]]", "[[Stochastic Oscillator]]", "[[Analyse technique pour bots]]", "[[Backtesting]]"]
liens_opposition: []
---

# Williams %R

> [!info] Résumé
> Le Williams %R (Williams Percent Range) est un oscillateur de momentum qui mesure où le prix se situe dans le range entre le plus haut et le plus bas sur N périodes. Il identifie les conditions de surachat et de survente de manière similaire au Stochastic.

## Définition

Le Williams %R a été créé par Larry Williams en 1973. Il mesure le niveau de clôture par rapport au plus haut de la période. La formule : %R = (Plus haut N - Clôture) / (Plus haut N - Plus bas N) × -100.

Une lecture de -20 (par convention, l'indicateur est inversé) signifie que le prix a fermé près du plus haut de la période. Une lecture de -80 signifie que le prix a fermé près du plus bas.

Les lectures au-dessus de -20 sont traditionnellement considérées comme surachetées. Les lectures en dessous de -80 sont considérées comme survendues. Le système est inversé par rapport au RSI (où >70 = suracheté).

## Contexte et origine

Larry Williams, trader et auteur américain, a créé le Williams %R en 1973. Il l'a présenté dans son livre "How I Made One Million Dollars Last Year in Commodities" (1973). Williams est également connu pour avoir gagné le Robbins Trading Company Cup en 1987 avec un rendement de 11 000% en un an.

Le Williams %R est particulièrement efficace pour identifier les points de retournement à court terme. Williams l'utilisait pour ses stratégies de swing trading sur les matières premières et les actions.

En crypto, le Williams %R est utilisé principalement pour le trading de swing sur des timeframes de 4h à journalier. Il est moins populaire que le RSI mais offre des signaux similaires avec une sensibilité différente.

## Mécanismes et caractéristiques

Le paramètrage par défaut du Williams %R utilise 14 périodes. Cela peut être ajusté : 5-10 périodes pour plus de sensibilité (signaux plus nombreux mais plus de bruit), 20+ périodes pour moins de sensibilité (signaux plus rares mais plus fiables).

Le signal principal est les lectures extrêmes. Quand le %R descend en dessous de -80 et remonte au-dessus, c'est un signal d'achat (retournement de survente). Quand le %R monte au-dessus de -20 et redescend, c'est un signal de vente.

Les divergences sont également utilisées. Une divergence haussière (prix en baisse mais %R en hausse) signale un possible retournement à la hausse. Une divergence baissière (prix en hausse mais %R en baisse) signale un possible retournement à la baisse.

Le Williams %R peut también être utilisé pour confirmer les tendances. En tendance haussière, le %R a tendance à rester dans la zone supérieure (-20 à 0). En tendance baissière, il reste dans la zone inférieure (-100 à -80).

## Nuances, critiques, limites

Le Williams %R est très sensible aux mouvements de prix à court terme. Il peut osciller entre les zones extrême très rapidement en marché volatile, causant des faux signaux. Un filtre de confirmation (autre indicateur) est recommended.

Le %R fonctionne mieux en marché range. En marché fortement tendance, il peut rester en zone extrême pendant longtemps, et les signaux de retournement (crossing back through -20 ou -80) peuvent être premature.

La période de 14 est un compromis standard mais peut ne pas convenir à tous les actifs. Une altcoin volatile peut nécessiter une période plus longue (20-25) pour lisser les fluctuations. Le [[backtesting]] est nécessaire pour trouver le bon paramètrage.

Le Williams %R ne donne pas d'information sur la direction de la tendance. Un %R en zone survendue (-80) peut rester bas même si la tendance baissière continue. Les traders doivent combiner avec un indicateur de tendance.

## Liens et implications

Le RSI et le Williams %R mesurent des concepts similaires mais avec des échelles inversées.

Le [[Stochastic Oscillator]] est plus directement lié au Williams %R. Les deux comparent le prix de clôture au range recent. Le calcul diffère mais l'interprétation est similaire.

La surachat et la survente sont les conditions que le Williams %R identifie.

## Sources