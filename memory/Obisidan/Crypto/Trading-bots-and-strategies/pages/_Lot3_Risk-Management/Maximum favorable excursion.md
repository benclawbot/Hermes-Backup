---
titre: "Maximum favorable excursion"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/excursion, #concept/gain, #concept/risque]
créé: 2026-04-21
liens_forts: ["[[Maximum adverse excursion]]", "[[Trade expectancy]]", "[[Trailing stop]]", "[[Take-profit]]", "[[Position sizing]]"]
liens_opposition: []
---

# Maximum favorable excursion

> [!info] Résumé
> Le Maximum Favorable Excursion (MFE) mesure le plus grand profit non réalisé qu'une position atteint pendant sa durée de vie. Cette métrique informe les décisions de take-profit et de trailing stop, révélant combien une opération "va dans le bon sens" avant de se retourner.

## Définition

Le Maximum Favorable Excursion (MFE) est leplus grand profit non réalisé qu'une position atteint entre l'ouverture et la fermeture. C'est une mesure de "jusqu'où le prix peut-il aller en ma faveur avant que je ne réalise le profit ?"

Si un trader achète un actif à 100€ et qu'il monte à 130€ avant de redescendre à 115€, le MFE est de 30€ (ou 30%). Ce profit n'est pas réalisé tant que la position n'est pas fermée, mais le MFE capture le potentiel de gain maximal temporaire.

Le MFE est particulièrement utile pour calibrer les[[Ordre take-profit|objectifs de profit]] et les[[Trailing stop|trailing stops]]. Si le MFE moyen est de 20% mais le take-profit est à 10%, le trader réalise des profits avant que la position n'atteigne son potentiel maximum.

Le MFE peut être analysé en distribution, similairement au[[Maximum adverse excursion]]. Quel pourcentage des opérations atteint un MFE de plus de 10% ? Cette information aide à décider si un take-profit est trop serré.

Pour les[[trading bot]]s, le MFE informe les règles de sortie. Un bot qui fixe systématiquement son take-profit à 10% alors que le MFE moyen est de 25% sous-performe par rapport à son potentiel.

## Contexte et origine

Le concept d'Excursion a été développé par John Sweeney dans les années 1990, parallèlement au Maximum Adverse Excursion (MAE). Sweeney a arguments que le prix qui va en faveur d'une position est aussi important que celui qui va contre.

L'idée centrale est que les mouvements de prix ne sont pas linéaires. Un trade peut être profondément rentable à un moment, puis se retourner. Le MFE capture ce maximum temporaire qui ne se réalise pas si on sort trop tôt.

Le MFE est particulièrement pertinent pour les stratégies de tendance où le prix peut continuer à bouger en faveur de la position pendant longtemps. Un trader qui prend un profit trop tôt "rate" une partie significative du mouvement.

Les[[Trailing stop]] sont spécifiquement conçus pour locker les profits après le MFE sans sacrifier tout le gain. Un trailing stop actif après le MFE permet de sécuriser les profits sans sortir prematurely.

## Mécanismes et caractéristiques

Le MFE se calcule en suivant chaque opération individuellement. Pour chaque trade, on enregistre le prix le plus élevé (pour une position longue) ou le prix le plus bas (pour une position courte) après l'entrée mais avant la fermeture.

Le ratio MFE/MAE est une mesure interessante. Un ratio élevé indique que quand une position va dans le bon sens, elle va significativement plus loin que quand elle va contre. C'est un signe d'une stratégie avec un bon skew.

Le MFE moyen peut être utilisé pour optimiser les[[Ordre take-profit|take-profits]]. Si le MFE moyen est de 25%, un take-profit à 15% est trop serré et un take-profit à 35% est trop large (sera rarement atteint).

Le trailing stop basé sur le MFE permet de protéger les profits. Une règle possible : après avoir atteint X% du MFE, on active un trailing stop qui follow le prix sans redescendre en dessous du niveau atteint.

## Nuances, critiques, limites

Le MFE ne garanties pas que ce profit aurait été réalisé. Si le prix atteint le MFE mais revingt rapidement, sortir à ce moment précis est difficile. Le MFE représente le potentiel, pas la réalité de l'exécution.

Le MFE est sensible à la timeframe. Sur des timeframes très courtes, le MFE peut être inflated par le bruit. Sur des timeframes plus longues, le MFE représente des mouvements de marché plus significatifs.

Le MFE historyque peut être différent du MFE futur si les conditions de marché changent. Une stratégie peut avoir un MFE moyen plus faible dans des marchés en range que dans des marchés en tendance.

L'utilisation du MFE pour décider des take-profits peut mener à de la sur-optimisation. Si on fixe le take-profit au niveau du MFE moyen historique, on court le risque de "curve-fit" la stratégie sur les données passées.

## Liens et implications

Le[[Maximum favorable excursion]] (MFE) et le[[Maximum adverse excursion]] (MAE) sont complémentaires. Ensemble, ils forment une "carte" complète de la vie d'un trade du point de vue du prix.

Le[[Trailing stop]] est l'outil principal pour locker les profits après le MFE. Il permet de sécuriser les gains sans sortir au premier pic de profit.

La[[Trade expectancy]] doit être analysée en conjunction avec le MFE et le MAE. Une stratégie peut avoir une expectative positive mais un MFE très erratic, ce qui peut être difficile émotionnellement.

Le[[Position sizing]] peut être ajusté en fonction du MFE. Si une stratégie a un MFE élevée (grand potentiel de gain), on peut prendre des positions plus grandes pour maximise le profit.

## Sources

[^1]: Sweeney, "Maximum Adverse Excursion", Wiley (1998)
[^2]: Tharp, "Trade Your Way to Financial Freedom", McGraw-Hill (1999)
