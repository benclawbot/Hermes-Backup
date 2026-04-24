---
titre: "Liquidité"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/liquidité, #concept/market, #concept/depth]
créé: 2026-04-20
liens_forts: ["[[Market making]]", "[[Order book dynamics]]", "[[Slippage]]"]
liens_opposition: []
---

# Liquidité

> [!info] Résumé
> La liquidité désigne la facilité avec laquelle un actif peut être acheté ou vendu sans déplacer significativement le prix. La faible liquidité amplifie le slippage et rend les gros ordres dangereux en crypto, particulièrement sur les small caps et pendant la volatilité.

## Définition

La liquidité d'un marché ou d'un actif mesure la facilité avec laquelle on peut échanger cet actif à un prix proche du prix de marché. Un marché liquide permet des transactions importantes sans impact significatif sur le prix. Un marché illiquide peut subir des mouvements de prix importants pour des transactions relativement petites.

Les dimensions de la liquidité incluent :
- **Profondeur** : volume d'ordres disponibles aux différents niveaux de prix
- **Tightness** : écart entre bid et ask (spread)
- **Résilience** : capacité du marché à retrouver des niveaux normaux après des perturbations

La liquidité n'est pas statique : elle varie selon les heures de trading, les événements de marché, et les conditions économiques. Un actif qui semble liquide en temps normal peut devenir extremely illiquide pendant un crisis.

## Contexte et origine

La liquidité a toujours été une préoccupation des marchés financiers. Les petites capitalisations boursières ont moins de liquidité que les grandes. Les obligations d'État sont plus liquides que les obligations corporate.

En crypto, la liquidité varie enormement entre Bitcoin/Ethereum (très liquides) et les small caps (peu liquides). Les exchanges centralisés (Binance, Coinbase) ont plus de liquidité que les DEX sur les small tokens.

L'année 2022 a révélé des problèmes de liquidité quand plusieurs plateformes ont fait fail (FTX, Celsius, 3AC), causant une contraction de la liquidité disponible et une aumento de la volatilité.

## Mécanismes et caractéristiques

La profondeur du order book détermine la liquidité à différents niveaux de prix. Un livre profond avec beaucoup d'ordres à chaque niveau permet des transactions importantes sans slippage excessif. Un livre shallow (peu profond) signifie que chaque transaction déplace le prix significativement.

Le bid-ask spread reflète la liquidité : un spread serré indica un marché liquide où les participants sont prêts à trade à des prix proches. Un spread large indica une liquidité réduite ou un risque accru perçu par les market makers.

Le slippage est la différence entre le prix attendu et le prix d'exécution. En marché liquide, le slippage est faible (0.01-0.1%). En marché peu liquide ou volatil, le slippage peut être de plusieurs pour cent.

La impact de marché décrit combien une transaction de taille donnée déplace le prix. Une transaction de 1 million sur un actif avec une capitalisation de 100 millions aura un impact bien plus grand que la même transaction sur un actif de 10 milliards.

## Nuances, critiques, limites

La fragmentation de liquidité en crypto (multiples exchanges, multiples chains) signifie que la liquidité totale est divisée. Un actif peut sembler liquide sur Binance mais peu liquide sur Bybit.

La "fausse liquidité" des ordres limit fantasma peut créer une impression de profondeur qui disparaît quand on essaie d'exécuter. Les market makers sophistiqués placent des ordres qui semblent grands mais qui sont cancellés rapidement.

Les événements de liquidité (flash crash, krack de protocole) peuvent transformer un marché apparemment liquide en marché extremely illiquide en quelques secondes. Les ordres stop-loss sont exécutés avec un slippage énorme.

La liquidité des small caps est souvent artificiallement gonflée par des wash trading et des mécanismes de wash sales. La liquidité "réelle" peut être beaucoup plus basse que ce que les données suggère.

## Liens et implications

La [[liquidité]] est le fondement du [[market making]]. Sans liquidité, le market making n'est pas rentable et les stratégies d'arbitrage sont impossibles. Les [[order book dynamics]] reflètent la liquidité disponible.

Le [[slippage]] est directement causé par la faible liquidité. L'[[API d'échange]] expose la liquidité disponible via le order book. Les [[flash crash]] sont souvent le résultat d'un retrait soudain de liquidité.

Le [[backtesting]] qui ne modélise pas la liquidité réelle sous-estime les coûts et surestime les rendements. Un slippage de 1% peut transformer une stratégie profitable en stratégie perdante.

## Sources

[^1]: Kyle, "Continuous Auctions and Insider Trading", Econometrica (1985)
[^2]: Bamberger, " liquidity in Crypto Markets", Uniswap Blog (consulted 2026)