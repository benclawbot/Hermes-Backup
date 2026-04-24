---
titre: "Volatilité de la liquidité"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/liquidité, #microstructure, #volatilité]
créé: 2026-04-21
liens_forts: ["[[Liquidité]]", "[[Écart bid-ask]]", "[[Impact de marché]]", "[[Risque d'inventaire]]", "[[Market making]]", "[[Flash crash]]", "[[Volatilité]]"]
liens_opposition: []
---

# Volatilité de la liquidité

> [!info] Résumé
> La volatilité de la liquidité désigne les fluctuations de la liquidité d'un marché dans le temps. Elle se manifeste par des variations du spread, de la profondeur, et de la résilience du carnet d'ordres face à des ordres de taille. La volatilité de la liquidité est un risque majeur pour les teneurs de marché et les exécutants de gros ordres.

## Définition

La volatilité de la liquidité (liquidity volatility) mesure l'instabilité de la liquidité d'un marché sur différentes échelles de temps. Un marché peut être très liquide à certains moments et très illiquide à d'autres, parfois en l'espace de quelques minutes. Cette variation de la liquidité est mesurée par les fluctuations du [[Écart bid-ask]], de la [[Profondeur du marché]], et du [[Ratio annulation-commerce]].

La volatilité de la liquidité est différente de la volatilité des prix. Un marché peut avoir des prix stables mais une liquidité volatile, ou inversement. Les deux volatilités sont liées mais distinctes. La volatilité de la liquidité est particulièrement importante pour les stratégies de [[Market making]] qui doivent adapter leurs tailles d'ordres aux conditions changeantes.

La liquidité d'un marché peut se dégrader soudainement lors d'événements extrêmes. Un "[[Flash crash]]" est une manifestation extrême de la volatilité de la liquidité oÙ la liquidité disparaît complètement pendant quelques minutes, causant des mouvements de prix extrêmes.

## Contexte et origine

L'étude de la volatilité de la liquidité émerge dans les années 1990-2000 avec l'augmentation du trading algorithmique. Les chercheurs ont observé que la liquidité n'est pas stable mais varie considérablement selon les conditions de marché. Les travaux de Pastor et Stambaugh (2003) sur les variations de liquidité ont montré que ces variations ont un impact sur les rendements des actifs.

Dans le contexte crypto, la volatilité de la liquidité est particulièrement marquée. Les marchés crypto sont ouverts 24h/24 mais la liquidité varie fortement selon les heures de la journée et les fuseaux horaires. La nuit (en heure américaine ou européenne) la liquidité est généralement plus faible, les spreads plus larges, et la profondeur réduite.

Les périodes de stress sur les marchés crypto (crash de mars 2020, collapses de stablecoins en 2022) ont montré des exemples extrêmes de volatilité de la liquidité. Sur le BTC, les spreads ont explosé de 0.1% à plusieurs pour cent en quelques heures pendant ces périodes.

## Mécanismes / caractéristiques / détails

**Causes de la volatilité de la liquidité** : plusieurs facteurs déclenchent des variations de liquidité. Les changements de volatilité des prix affectent le risque de marché making. Les événements macro (annonces économiques, regulatory news) peuvent faire fuir les market makers. Les changements de session (passage de la session asiatique à européenne à américaine) modifient la structure de la liquidité.

**Liquidité microstructure** : la liquidité peut être décomposée en plusieurs composantes : la tightness (spread), la depth (volume aux différents niveaux), et la resiliency (capacité du marché à se récupérer après un choc).

**Runs sur la liquidité** : dans certaines conditions, les market makers se retirent tous en même temps, créant un "run" sur la liquidité. Ce phénomène amplifie les mouvements de prix car il n'y a plus de contrepartie pour absorber les ordres. Les "[[Flash crash|flash crashes]]" sont un exemple de ce mécanisme.

**Impact sur les stratégies** : les stratégies qui supposent une liquidité stable doivent intégrer la volatilité de la liquidité. Les ordres de taille doivent être fractionnés davantage quand la liquidité se dégrade. Les ordres [[TWAP (Time-Weighted Average Price)|TWAP]] et [[Exécution VWAP|VWAP]] doivent adapter leur rythme à la liquidité disponible.

**Liquidité et volatilité des prix** : la relation entre les deux est bidirectionnelle. Une volatilité des prix élevée deter market makers et thus reduce liquidity, which in turn amplifies price volatility. Cette boucle de rétroaction peut créer des spirales de liquidité dégradée.

## Nuances, critiques, limites

La volatilité de la liquidité est difficile à mesurer et à prévoir. Les modèles standards supposent une liquidité constante, ce qui peut mener à des erreurs d'estimation du risque. Les risk models doivent intégrer la volatilité de la liquidité comme une variable distincte.

La volatilité de la liquidité peut être exploitée par des stratégies de "liquidity provision during stress". Les market makers qui restent pendant les périodes de faible liquidité peuvent gagner des spreads très élevés, mais ils prennent aussi un risque majeur si le prix bouge contre eux.

La fragmentation des marchés crypto peut tanto réduire qu'augmenter la volatilité de la liquidité. D'un côté, la competition entre exchanges peut stabilizer la liquidité agrégée. De l'autre, un choc sur un exchange peut créer des opportunités d'arbitrage mais aussi une volatilité localized.

## Liens et implications

La volatilité de la liquidité affecte les stratégies de [[Market making]] qui doivent constantemente ajuster leurs tailles et leurs spreads. Les market makers qui ne s'adaptent pas à la volatilité de la liquidité subissent des pertes pendant les périodes de stress.

Les stratégies de [[Stratégie de momentum|momentum]] doivent être conscientes de la volatilité de la liquidité. Un signal de momentum dans un marché peu liquide peut être un faux signal à cause de l'impact de marché.

Le [[Backtesting]] qui suppose une liquidité constante sous-estime les risques et surestime les performances pour les stratégies qui ne gèrent pas la volatilité de la liquidité.

## Sources

[^1]: Pastor, Lubos, and Robert Stambaugh. "Liquidity Risk and Expected Stock Returns." *Journal of Political Economy* 111 (2003): 642-685.
[^2]: Hasbrouck, Joel. *Empirical Market Microstructure*. Oxford University Press, 2007.
[^3]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.