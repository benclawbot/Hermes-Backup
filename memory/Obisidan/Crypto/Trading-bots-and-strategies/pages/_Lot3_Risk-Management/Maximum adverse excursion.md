---
titre: "Maximum adverse excursion"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/excursion, #concept/risque, #concept/drawdown]
créé: 2026-04-21
liens_forts: ["[[Maximum favorable excursion]]", "[[Drawdown]]", "[[Stop-loss]]", "[[Position sizing]]", "[[Trade expectancy]]"]
liens_opposition: []
---

# Maximum adverse excursion

> [!info] Résumé
> Le Maximum Adverse Excursion (MAE) mesure laplus grande perte temporaire qu'une position subit pendant sa durée de vie. Cette métrique permet de comprendre combien une opération "rate" avant de se retourner, inform-ant les règles de stop-loss.

## Définition

Le Maximum Adverse Excursion (MAE) est laplus grande perte non réalisée qu'une position atteint pendant qu'elle est ouverte, avant de se fermer soit en profit soit en perte. C'est une mesure de " jusqu'où le prix peut-il aller contre moi avant que je ne sorte ?"

Si un trader achète un actif à 100€ et qu'il descend à 85€ avant de remonter à 120€, le MAE est de 15€ (ou 15%). Cette perte n'est pas realisée si le trader maintient la position, mais le MAE capture le potentiel de perte interimaire.

Le MAE est particulièrement utile pour calibrer les[[Ordre stop-loss|stops de perte]]. Si le MAE moyen de vos opérations est de 10%, fixer un stop-loss à 8% signifie que 50% de vos opérations potentiellement gagnantes seraient'arrêtées pre maturement.

Le MAE peut être analysé en distribution. Quel pourcentage des opérations a un MAE de moins de 5% ? De moins de 10% ? Cette information permet de définir des stops optimaux qui ne sont ni trop serrés ni trop larges.

Pour les[[trading bot]]s, le MAE est une métrique importante à tracking pendant le[[Backtesting]] et le[[Forward testing]]. Un bot avec un MAE moyen de 20% mais un stop-loss à 10% will be stopped out of most profitable trades.

## Contexte et origine

Le concept d'Excursion a été développé par John Sweeney dans les années 1990, particulièrement à travers son livre "Maximum Adverse Excursion". Sweeney a arguments que le prix qui va contre une position est une information cruciale pour le risk management.

L'idée centrale est que le prix n'évolue pas en ligne droite. Il fluctue. Une position rentable peut momentanément être en perte significative. Ces fluctuations temporaires sont mesurées par le MAE et le MFE (Maximum Favorable Excursion).

Le MAE est particulièrement pertinent pour les stratégies de breakout et de tendance où le prix peut d'abord bouger contre la position avant de définir la tendance. Un trader de breakout qui entre sur un cassement et qui est arrêté quand le prix revient peut avoir un MAE élevé même si l'opération était correcte.

Les[[Ordre stop-loss]] basées sur le MAE historique sont plus adaptatives que les stops fixes. Un stop à 2% sur un actif volatil sera toujours atteint, tandis qu'un stop basé sur le MAE moyen de cet actif spécifique sera plus pertinent.

## Mécanismes et caractéristiques

Le MAE se calcule en following chaque opération individuellement. Pour chaque trade, on enregistre le prix le plus bas (pour une position longue) ou le prix le plus haut (pour une position courte) après l'entrée mais avant la fermeture.

La distribution des MAE peut être analysée pour obtenir des statistiques like la moyenne, la médiane, et les percentiles. Le 90e percentile du MAE indique le niveau que 90% des opérations ne dépassent pas.

Le MAE moyen peut être comparé au stop-loss défini. Si le MAE moyen est de 8% mais le stop est à 5%, le trader perdra beaucoup d'opérations potentiellement gagnantes. Si le MAE moyen est de 12% et le stop est à 15%, beaucoup de trades profitables ne seront pas arrêtés.

Le ratio entre le MAE moyen et le take-profit moyen est également utile. Un trade avec un MAE de 5% et un take-profit de 15% a un profile risque-rendement favorable. Beaucoup de traders optimisent leurs stratégies en fonction de ce ratio.

## Nuances, critiques, limites

Le MAE ne captures que les pertes non réalisées pendant la durée de vie de la position. Si une position est fermée avec une perte de 10% et que le MAE était de 12%, le MAE était plus grand que la perte final. Mais si la position avait été fermée à 12%, la perte aurait été plus grande.

Le MAE est sensível à la timeframe. Sur une timeframe très courte (minutes), le MAE peut être très elevé en raison du bruit. Sur une timeframe plus longue (jours), le MAE représente mieux les mouvements de marché significatifs.

Le MAE historyque peut ne pas être représentatif du futur. Les conditions de marché changent, et une stratégie peut avoir un MAE plus élevé dans des marchés plus volatils.

L'utilisation du MAE pour définir les stops peut mener à des stops si larges qu'ils ne protègent plus efficacement. Trouver le bon equilibre entre protection et laisser courir la position est un art.

## Liens et implications

Le[[Maximum adverse excursion]] (MAE) et le[[Maximum favorable excursion]] (MFE) forment une paire de métriques qui décrivent le comportement d'une position du point de vue du prix. Ensemble, elles donnent une image complète de la "vie" d'un trade.

Le[[Drawdown]] est en fait une agrégation des MAE de toutes les positions ouvertes simultanément. Le max drawdown est le plus grand MAE aggregé à un moment donné.

Les[[Ordre stop-loss]] devraient être calibrés en fonction du MAE historique. Un stop basé sur le 90e percentile du MAE would protect against 90% of adverse excursions while allowing the trade to develop.

La[[Trade expectancy]] peut être analysée en conjunction avec le MAE et le MFE. Une stratégie avec une bonne expectative mais un MAE très variable peut être difficile à trader émotionnellement.

## Sources

[^1]: Sweeney, "Maximum Adverse Excursion", Wiley (1998)
[^2]: Tharp, "Trade Your Way to Financial Freedom", McGraw-Hill (1999)
