---
titre: "Profondeur du marché"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 3
tags: [#concept/profondeur, #microstructure, #liquidité]
créé: 2026-04-21
liens_forts: ["[[Order book dynamics]]", "[[Liquidité]]", "[[Écart bid-ask]]", "[[Impact de marché]]", "[[Données de niveau 2]]", "[[Ordre iceberg]]", "[[Slippage]]"]
liens_opposition: []
---

# Profondeur du marché

> [!info] Résumé
> La profondeur du marché mesure le volume total disponible aux différents niveaux de prix dans le carnet d'ordres. Elle indique la capacité du marché à absorber des ordres sans impact excessif sur le prix.

## Définition

La profondeur du marché (market depth) représente la quantification du volume d'ordres disponibles à chaque niveau de prix dans le carnet d'ordres. Elle décrit la capacité d'un marché à absorber des transactions de taille sans provoquer un déplacement significatif du prix. Un marché profond dispose de volumes importants à plusieurs niveaux de prix, permettant l'exécution de grosses ordres avec un impact limité. À l'inverse, un marché peu profond dispose de volumes faibles, rendant les ordres de taille modérée capables de déplacer substantiellement le prix.

La profondeur est généralement représentée graphiquement sous forme de "cumulative depth chart" montrant le volume cumulatif accessible à mesure que l'on s'éloigne du meilleur prix. Cette visualisation permet aux traders de comprendre combien de volume peut être exécuté à chaque niveau de prix et d'estimer le [[Impact de marché]] potentiel de leurs ordres.

La profondeur du marché est liée à la liquidité mais s'en distingue. La liquidité est un concept plus large incluant la vitesse et le coût de transaction. La profondeur est une composante spécifique de la liquidité, mesurant le volume disponible. Un marché peut avoir une grande profondeur à prix moyen mais une liquidité faible si les ordres mettent longtemps à s'exécuter.

## Contexte et origine

L'étude de la profondeur du marché émerge dans les années 1980 avec l'avènement de la collecte électronique des données de carnet d'ordres. Avant cette période, la profondeur n'était accessible qu'indirectement via les rapports des specialists ou des teneurs de marché. Les "[[Données de niveau 2]]" ont transformé l'analyse du marché en permettant une vision en temps réel de la structure du carnet.

Dans le contexte crypto, les exchanges centralisés affichent publiquement le carnet d'ordres complet, permettant à tout participant de voir la profondeur du marché. Cette transparence est une différence notable avec les marchés actions traditionnels oÙ l'accès à l'information de profondeur était thérapeutiquement limité. Les [[Trading bot]]s utilisent cette information pour optimiser l'exécution de leurs ordres et détecter des opportunités de [[Arbitrage]] entre exchanges.

## Mécanismes / caractéristiques / détails

**Niveaux de profondeur** : la profondeur est mesurée par niveau de prix (level 2) ou de façon cumulative. Le niveau 1 montre uniquement le meilleur bid et ask. Le niveau 2 (market depth) montre tous les niveaux de prix avec leurs volumes. Le niveau 3 inclut les ordres de chaque participant identifié, accessible uniquement sur certaines plateformes.

**Profondeur et impact** : la relation entre profondeur et impact de marché est inverse : plus la profondeur est grande, plus l'impact d'un ordre de taille donnée est faible. Mathématiquement, l'impact peut être modélisé comme une fonction du volume de l'ordre divisé par la profondeur disponible. Une ordre de 1 BTC dans un marché avec 100 BTC de profondeur au meilleur niveau aura un impact faible ; la même ordre dans un marché avec 1 BTC de profondeur aura un impact majeur.

**Visualisation de la profondeur** : les graphiques en "book depth" montrent le volume disponible en achat (bid side) et en vente (ask side) à chaque niveau de prix. L'asymétrie entre les deux côtés signale un déséquilibre potentiel. Un côté significativement plus profond que l'autre peut indiquer une pression acheteuse ou vendeuse latente.

**Profondeur et volatilité** : la profondeur du marché varie avec la volatilité. Pendant les périodes de forte volatilité, les teneurs de marché ([[Market making]]) réduisent leurs tailles d'ordres par crainte du risque, ce qui diminue la profondeur. Cette réduction peut amplifier les mouvements de prix : un ordre de taille modeste traverse un marché plus fin et génère un impact plus grand.

**Profondeur fragmentée** : sur les marchés crypto avec multiples exchanges, la profondeur totale du marché pour un actif est la somme des profondeurs sur tous les exchanges. L'arbitrage entre exchanges est possible tant que les coûts de transaction et de latence ne dépassent pas les écarts de prix. La profondeur sur un exchange donné peut être temporairement épuisée par un gros ordre, créant des opportunités pour des participants plus rapides.

## Nuances, critiques, limites

La profondeur affichée n'est pas toujours la profondeur réelle. Les "[[Ordre iceberg|ordres iceberg]]" ne révèlent qu'une fraction de leur taille réelle, créant une profondeur apparente plus grande que la profondeur effective. Les annulations massives peuvent aussi créer une profondeur factice. Le [[Ratio annulation-commerce]] est un indicateur de la qualité de la profondeur affichée.

La profondeur au meilleur prix est particulièrement instable. Un seul gros ordre peut déplacer le "best bid" ou "best ask" et épuiser la profondeur au niveau précédent. Les traders qui passent des "[[Ordre à cours limité|ordres à cours limité]]" légèrement en dedans du best price peuvent voir leur ordre exécuter contre un volume bien plus faible que prévu si le carnet s'éclaircit.

L'interpretation de la profondeur nécessite de considérer la distribution des ordres dans le temps. Un carnet qui semble profond peut être principalement composé d'ordres à expiration lointaine qui ne seront pas servis si le prix bouge rapidement. La "[[Latence des cotations]]" entre différents participants du marché peut créer des situations oÙ la profondeur affichée ne reflète pas la réalité au moment de l'exécution.

## Liens et implications

La profondeur du marché est une entrée clé pour les stratégies d'exécution algorithmique. Les algorithmes [[TWAP (Time-Weighted Average Price)|TWAP]] et [[Exécution VWAP|VWAP]] utilisent la profondeur pour estimer le temps nécessaire à l'exécution et le impact anticipé. Ignorer la profondeur conduit à des estimations de slippage erronées et à une exécution sous-optimale.

Les stratégies de [[Market making]] adaptent leurs tailles d'ordres à la profondeur. Un market maker qui place des ordres trop gros dans un marché peu profond risque un impact de marché excessif et une couverture incomplète. Les modèles de risk management intègrent la profondeur pour limiter la taille maximale des positions.

La détection des "[[Order book dynamics|dynamiques du carnet d'ordres]]" via la profondeur permet de prévoir les mouvements de prix à court terme. Une accumulation rapide de volume acheteur à un niveau de résistance peut signaler une rupture imminente. Les bots de [[Stratégie de momentum|momentum]] utilisent cette information pour timing leurs entrées.

## Sources

[^1]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^2]: Hasbrouck, Joel. *Empirical Market Microstructure*. Oxford University Press, 2007.
[^3]: Kyle, Albert. "Market Structure, Information, and Market Depth." *Journal of Financial Economics* 14 (1985): 599-619.