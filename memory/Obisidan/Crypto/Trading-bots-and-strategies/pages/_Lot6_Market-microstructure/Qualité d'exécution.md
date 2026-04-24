---
titre: "Qualité d'exécution"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 3
tags: [#concept/exécution, #méthode, #performance]
créé: 2026-04-21
liens_forts: ["[[Ordre au marché]]", "[[Ordre à cours limité]]", "[[Slippage]]", "[[Impact de marché]]", "[[Best execution]]", "[[Liquidité]]", "[[Backtesting]]"]
liens_opposition: []
---

# Qualité d'exécution

> [!info] Résumé
> La qualité d'exécution mesure à quel point le prix réel d'un ordre exécuté s'écarte du prix anticipé. Elle est déterminée par le spread, le slippage, l'impact de marché, et la vitesse d'exécution. La qualité d'exécution est un déterminant majeur de la performance nette des stratégies de trading.

## Définition

La qualité d'exécution (execution quality) est une métrique composite qui évalue à quel point une exécution d'ordre est favorable par rapport à une référence. Les métriques de qualité d'exécution incluent le slippage (différence entre prix d'exécution et prix de référence), l'impact de marché (déplacement du prix causé par l'ordre), et le temps d'exécution (délai entre order et remplissage).

La qualité d'exécution est mesurée par rapport à plusieurs références. Le prix au moment de la décision (decision price) est le prix quand la décision de trader a été prise. Le prix au moment de l'ordre (order price) est le prix affiché quand l'ordre a été passé. Le prix moyen du marché sur la période (VWAP) est une autre référence commune. Le [[Best execution]] est le concept plus large qui inclut toutes ces métriques.

Une exécution de haute qualité signifie que le prix réel était proche du prix de référence, avec un slippage et un impact minimaux. Une exécution de basse qualité signifie un écart significatif entre le prix exécuté et le prix anticipé, généralement défavorable pour le trader.

## Contexte et origine

L'étude de la qualité d'exécution émerge avec la montée du trading algorithmique dans les années 1990-2000. Les desks de trading institutionnel ont commencé à mesurer précisément l'exécution de leurs ordres pour optimiser leurs stratégies. Les régulateurs ont aussi porté attention à la qualité d'exécution comme mesure de fairness du marché.

Dans l'écosystème crypto, la qualité d'exécution est particulièrement importante car les marchés sont volatils et les écarts peuvent être significatifs. Un slippage de 1% sur un trade de BTC peut représenter des centaines de dollars de différence. Les bots de trading doivent intégrer la qualité d'exécution dans leur analyse de performance.

Les "[[Ordre iceberg]]" et les algorithmes d'exécution avancés comme le [[TWAP (Time-Weighted Average Price)|TWAP]] et l'[[Exécution VWAP|VWAP]] ont été développés spécifiquement pour améliorer la qualité d'exécution en réduisant l'impact de marché.

## Mécanismes / caractéristiques / détails

**Métriques de qualité** :
- **Slippage** : différence entre prix d'exécution et prix de référence (généralement le prix au moment de l'ordre).
- **Impact de marché** : différence entre prix d'exécution et prix du marché sans ordre.
- **Arrival price** : prix au moment oÙ l'ordre arrive sur le marché.
- **VWAP d'exécution** : prix moyen pondéré par le volume de l'exécution comparé au VWAP du marché.

**Facteurs de qualité** :
- Taille de l'ordre : les gros ordres ont plus d'impact et un slippage plus grand.
- Liquidité du marché : les marchés peu liquides ont une qualité d'exécution dégradée.
- Volatilité : la volatilité augmente le slippage et l'impact.
- Type d'ordre : les ordres au marché ont une exécution garantie mais un slippage potentiel.

**Amélioration de la qualité** :
- Fractionnement des ordres pour réduire l'impact.
- Utilisation d'ordres à cours limité pour éviter le slippage si le prix ne revient pas.
- Timing : choisir de préférence les périodes de faible volatilité pour exécuter.
- Algorithmes d'exécution optimaux comme le [[Exécution VWAP|VWAP]] ou le [[TWAP (Time-Weighted Average Price)|TWAP]].

**Quality in crypto** : sur les marchés crypto, la qualité d'exécution est particulièrement variable. Pendant les périodes de forte volatilité (liquidation cascades), la qualité peut se dégrader massivement. Les traders doivent intégrer cette variabilité dans leurs stratégies.

## Nuances, critiques, limites

La qualité d'exécution ne peut être évaluée ex ante avec certitude. Le slippage dépend de l'évolution du marché pendant l'exécution, qui est inconnu au moment de la passation. Les estimations sont basées sur des modèles probabilistes.

La qualité d'exécution est corrélée avec la toxicité du marché. Sur les marchés très toxiques, les ordres des takers sont défavorisés par rapport aux anticipations car les market makers adaptent leurs prix. La qualité d'exécution est thus un proxy de la toxicité.

La qualité d'exécution mesurée en [[Backtesting]] peut différer significativement de la qualité réelle en live trading. Le backtesting utilisant des données de niveau 2 peut sous-estimer l'impact si les conditions changent entre le test et le live.

## Liens et implications

La qualité d'exécution est directement liée au [[Slippage]] et à l'[[Impact de marché]]. Ces deux métriques sont les principales composantes de la qualité d'exécution pour les ordres de taille.

Les stratégies de [[Market making]] dépendent d'une bonne qualité d'exécution pour leurs propres ordres. Si la qualité d'exécution se dégrade, la stratégie de market making peut devenir non rentable.

Le [[Best execution]] est le concept plus large qui inclut la qualité d'exécution comme composante. Les obligations de best execution requièrent que les brokers cherchent le meilleur résultat pour leurs clients.

## Sources

[^1]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^2]: Kissell, Robert. *The Science of Algorithmic Trading and Portfolio Management*. Academic Press, 2014.
[^3]: Almgren, Robert, and Neil Chriss. "Optimal execution of portfolio transactions." *Journal of Risk* 3 (2000): 5-39.