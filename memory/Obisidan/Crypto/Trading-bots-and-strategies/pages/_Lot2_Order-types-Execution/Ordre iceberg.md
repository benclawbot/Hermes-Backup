---
titre: "Ordre iceberg"
type: terme
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/ordre, #méthode/exécution, #trading/avancé]
créé: 2026-04-21
liens_forts: ["[[Ordre au marché]]", "[[Order book dynamics]]", "[[Liquidité]]", "[[Impact de marché]]", "[[Données de niveau 2]]"]
liens_opposition: []
---

# Ordre iceberg

> [!info] Résumé
> Un ordre iceberg est un ordre de grande taille qui n'affiche publiquement qu'une fraction de son volume total, révélant le reste uniquement au fur et à mesure des exécutions partielles, afin de minimiser l'impact de marché.

## Définition

L'ordre iceberg est une technique d'exécution utilisée pour placer de gros ordres sans révéler la taille totale de la position à exécuter. Le principe est simple : seule la partie visible (le "haut" ou "pointe") de l'ordre est affichée dans le [[Order book dynamics|carnet d'ordres]] public. Quand cette partie est exécutée, une nouvelle tranche est révélée, et ainsi de suite jusqu'à ce que l'ordre total soit rempli.

L'analogie avec l'iceberg vient du fait que seule la pointe émerge de l'eau (le carnet public), tandis que la majeure partie reste immergée (invisible). Cette technique répond à un problème fondamental de la microstructure des marchés : les gros ordres ont un impact de marché considérable car les autres participants adaptent leur comportement quand ils détectent une intention de trading directionnel.

L'iceberg est particulièrement pertinent pour les teneurs de marché ([[Market making]]) et les exécutants institutionnels qui doivent mover de grands volumes sans indiquer leur direction au marché.

## Contexte et origine

Les ordres iceberg émergent dans les années 1990 avec l'avènement des carnets d'ordres électroniques sur les marchés actions. Les premières implémentations institutionnelles sont développées par les desks de trading électronique des banques d'investissement pour exécuter les grosses orders de leurs clients institutionnels avec un minimum d'impact de marché.

Dans l'écosystème crypto, la plupart des exchanges majeurs supportent les ordres iceberg via leur [[API d'échange]]. Binance, Kraken et Bybit proposent ce type d'ordre natif. Les [[Trading bot|algorithmes de trading]] haute fréquence l'utilisent pour exécuter des stratégies d'arbitrage ou de market making sans révéler leur exposition nette.

La pratique a toutefois une dimension controversée : les ordres iceberg créent une asymétrie d'information entre ceux qui savent qu'un gros ordre est en cours (généralement le donneur d'ordre ou son algorithme) et ceux qui ne le voient que morceau par morceau. Cela peut être considéré comme une forme de manipulation de marché dans certaines juridictions.

## Mécanismes / caractéristiques / détails

**Affichage partiel (display quantity)** : le paramètre clé d'un ordre iceberg est la quantité affichée publiquement. Sur Binance, l'utilisateur peut définir le "display quantity" entre le minimum supporté et la taille totale de l'ordre. Plus cette quantité est petite, plus l'ordre est discret mais plus il prend de temps à exécuter.

**Révélation progressive** : à chaque exécution de la partie visible, l'exchange révèle automatiquement une nouvelle tranche de la partie cachée. Le processus est transparent pour le donneur d'ordre mais invisible pour les autres participants au marché, sauf à détecter des patterns dans les exécutions successives.

**Impact sur le carnet** : chaque nouvelle tranche révélée s'insère dans le carnet d'ordres comme un ordre à cours limité standard au prix spécifié. Les observateurs du carnet (cf. [[Données de niveau 2]]) peuvent voir une succession d'ordres au même prix qui se renouvellent, suggérant un possible iceberg, mais ne peuvent pas confirmer la taille totale.

**Calcul du temps d'exécution** : un iceberg de 100 BTC avec une display quantity de 1 BTC prendra au minimum 100 exécutions pour être complet, dépendant de la liquidité disponible au prix choisi. Si le marché se déplace significativement pendant l'exécution, l'ordre peut devenir sous-optimal ou ne jamais être rempli si le prix sort du prix limite.

**Optimisation algorithmique** : les algorithmes d'exécution d'iceberg modernes (comme les algorithmes AWAVE, Implementation Shortfall) calculent automatiquement le meilleur prix et la meilleure vitesse d'exécution pour minimiser l'[[Impact de marché]] tout en limitant le risque de non-exécution. Le VWAP et le TWAP sont des benchmarks courants pour évaluer la performance d'un iceberg.

## Nuances, critiques, limites

**Détection par les autres participants** : bien que l'iceberg soit conçu pour être discret, des acteurs avec accès aux données de marché fines ([[Données de niveau 2]]) ou aux flux de données d'exchange (comme les flux d'order flow) peuvent détecter des patterns révélateurs. Certains [[Haute fréquence|algorithmes HFT]] sont spécialisés pour "sniffer" les icebergs et ajuster leurs stratégies en conséquence.

**Dynamique adverse** : quand un acteur détecte un iceberg, il peut adopter un comportement adverse — par exemple, vendre devant l'ordre iceberg pour accélérer son exécution à un prix défavorable au donneur d'ordre, puis racheter après. Ce phénomène contribue à l'[[Impact de marché]] que l'iceberg cherchait précisément à éviter.

**Sur les marchés crypto décentralisés (DEX)** : les protocoles de finance décentralisée comme Uniswap n'ont pas de carnet d'ordres au sens traditionnel. L'équivalent de l'iceberg existe sous forme de "dust attacks" ou de division des transactions en plusieurs petits swaps, mais c'est un mécanisme fondamentalement différent basé sur les pools de liquidité.

**Risque de mouvement du marché** : si le prix évolue défavorablement pendant l'exécution de l'iceberg, le prix moyen d'exécution peut être moins favorable que si un ordre au marché avait été émis immédiatement. L'iceberg trade le slippage immédiat contre un risque de slippage progressif et un risque de marché directionnel.

## Liens et implications

L'iceberg est intimement lié à la problématique de l'[[Impact de marché]] pour les gros exécutants. Dans une stratégie d'[[Arbitrage]] ou de [[Market making]] où la taille de position est significative par rapport à la liquidité du marché, l'iceberg est un outil essentiel pour minimiser le coût d'exécution.

L'[[Order book dynamics|ordre du livre d'ordres]] est directement affecté par les icebergs car ils créent une liquidité apparente qui peut être rapidement retirée. Un carnet avec beaucoup d'ordres iceberg peut paraître plus profond qu'il ne l'est réellement.

Les [[Trading bot]]s institutionnels implémentent des stratégies spécialisées de détection d'iceberg pour adapter leur propre exécution ou pour placer des ordres en avance de l'iceberg détecté, créant un jeu de chat et de souris permanent entre exécutants.

## Sources

[^1]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^2]: Biais, Bruno, Pierre Hillion, and Marc Slot. "Order flow and transaction prices." *Journal of Political Economy* 103, no. 3 (1995): 597-633.
[^3]: Documentation Binance — Iceberg Orders. https://binance-docs.github.io/apidocs/spot/en/