---
titre: "Regroupement des transactions"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/regroupement, #microstructure, #volume]
créé: 2026-04-21
liens_forts: ["[[Ordre book dynamics]]", "[[Volatilité]]", "[[Liquidité]]", "[[Impact de marché]]", "[[Market timing]]", "[[Haute fréquence]]"]
liens_opposition: []
---

# Regroupement des transactions

> [!info] Résumé
> Le regroupement des transactions (trade clustering) désigne le phénomène par lequel les transactions se produisent par salves groupées plutôt que de façon均匀ément réparties dans le temps. Ce regroupement est une propriété statistique du flux d'ordres et a des implications pour l'estimation de la volatilité et du risque d'inventaire.

## Définition

Le regroupement des transactions (trade clustering) est un phénomène oÙ les transactions ne sont pas均匀ément réparties dans le temps mais plutôt agrupées en clusters temporels. Ce regroupement est une propriété statistique des marchés financiers

Mathématiquement, le regroupement est mesuré par l'autocorrélation du volume de transaction ou par la fonction de durée conditionnelle (ACD model). Si le temps entre les transactions à t est positivement correlé avec le temps à t-1, alors il y a regroupement. Une longue durée est suivie d'une longue durée, et une courte durée est suivie d'une courte durée.

Ce regroupement a des implications pour l'estimation de la volatilité. La volatilité estimée sur des données groupées peut être biaisée si le regroupement n'est pas pris en compte. Le nombre effectif de transactions dans une période est inférieur à ce qu'il serait si les transactions étaient均匀ément reparties.

## Contexte et origine

Le regroupement des transactions a été documenté par Engle et Russell (1998) dans leur travail sur les modèles de durée conditionnelle autoregressive (ACD). Ils ont montré que le temps entre les transactions en finance n'est pas un processus de Poisson avec un taux constant, mais un processus avec une estructura temporelle complexe.

Le regroupement est causé par plusieurs mécanismes. L'arrivée d'information nouvelle génère une salve de trading. Les "[[Flash crash|flash crashes]]" sont des exemples extremes de regroupement oÙ une Cascade d'ordres génère une activité intense. Les "[[Quote stuffing]]" sont une forme délibérée de regroupement destine à surcharger les systèmes.

Dans l'écosystème crypto, le regroupement est particulièrement visible pendant les événements à fort impact (annonces macro, tweets influents, liquidations en cascade). Le regroupement du volume trading affecte les stratégies de market making et d'exécution.

## Mécanismes / caractéristiques / détails

**Mécanismes du regroupement** :
- Arrivée groupée de l'information : une nouvelle génère plusieurs transactions simultanées.
- Triggers et cascades : les ordres stop déclenchent d'autres ordres, créant une cascade.
- Comportement des teneurs de marché : les market makers ajustent leurs ordres en grappe.
- [[Quote stuffing]] : placement massif d'ordres pour créer une activité factice.

**Mesure du regroupement** : l'autocorrélation du temps entre les transactions mesure le regroupement. Si Corr(Δt_i, Δt_{i-1}) > 0, il y a regroupement positif. Les modèles ACD (Autoregressive Conditional Duration) capturent cette structure.

**Impact sur la volatilité** : le regroupement affecte l'estimation de la volatilité. Si les rendements sont échantillonnés à des intervalles fixes mais que les transactions sont groupées, certains intervalles ont beaucoup de transactions (et donc une volatilité apparente plus forte) et d'autres intervalles peu (volatilité apparente plus faible). Les estimateurs de volatilité doivent corriger ce biais.

**Regroupement et liquidité** : le regroupement peut temporairement augmenter ou réduire la liquidité. Pendant un cluster de transactions, le carnet peut être repeatedly déséquilibré et rééquilibré, créant une volatilité de la liquidité. Entre les clusters, la liquidité peut être plus stable.

**Trading haute fréquence et regroupement** : les stratégies de [[Haute fréquence]] doivent gérer le regroupement. Si les ordres sont groupés, le risque d'être adversely selected est plus grand car le flux d'ordres est plus informatif. Les traders HF ajustent leurs stratégies en période de regroupement.

## Nuances, critiques, limites

Le regroupement peut créer des bias dans les estimateurs standards de microstructure. Les modèles qui supposent des intervalles de temps réguliers sous-estiment la variance quand le regroupement est présent.

La distinction entre regroupement "naturel" et regroupement "artificiel" (dû au [[Quote stuffing]]) est importante. Le regroupement naturel causé par l'arrivée d'information est légitime ; le regroupement artificiel est une forme de manipulation.

Le regroupement peut être exploité pour prédire la liquidité future. Si un cluster est détecté, les traders peuvent anticiper une période de liquidité dégradée après le cluster.

## Liens et implications

Le regroupement affecte l'estimation de la [[Volatilité]] et du [[Risque d'inventaire]]. Les modèles qui ne prennent pas en compte le regroupement peuvent biaiser leurs estimations.

L'[[Impact de marché]] peut être sous-estimé en période de regroupement car plusieurs ordres passent simultanément, chacun having less impact que s'il passait seul. Mais l'effet net peut être plus grand.

Le [[Market timing]] peut être affecté par le regroupement. Les signaux de timing qui arrivent pendant un cluster peuvent être plus fiables (car plus d'information est reflétée dans les prix).

## Sources

[^1]: Engle, Robert, and Jeffrey Russell. "Autoregressive Conditional Duration: A New Model for Irregularly Spaced Transaction Data." *Econometrica* 66 (1998): 1127-1162.
[^2]: Hasbrouck, Joel. *Empirical Market Microstructure*. Oxford University Press, 2007.
[^3]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.