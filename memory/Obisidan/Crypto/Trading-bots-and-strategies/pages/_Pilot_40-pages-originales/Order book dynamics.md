---
titre: "Dynamique du carnet d'ordres"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/carnet-ordres, #concept/microstructure, #concept/profondeur]
créé: 2026-04-20
liens_forts: ["[[Market making]]", "[[Liquidité]]", "[[Données de niveau 2]]"]
liens_opposition: []
---

# Dynamique du carnet d'ordres

> [!info] Résumé
> Le carnet d'ordres est la représentation en temps réel des ordres d'achat et de vente à chaque niveau de prix. Les bots lisent le carnet pour détecter support/résistance, pools de liquidité, et manipulations de murs d'ordres.

## Définition

Le carnet d'ordres (order book) est une structure de données qui liste tous les ordres en attente d'exécution pour un actif sur un exchange. Il montre les ordres d'achat (bids) et de vente (asks) à chaque niveau de prix, avec le volume disponible.

Le niveau de prix le plus élevé pour les bids est le "meilleur bid" (meilleure offre d'achat). Le niveau de prix le plus bas pour les asks est le "meilleur ask" (meilleure offre de vente). L'écart entre meilleur bid et meilleur ask est le spread.

Le carnet d'ordres permet de voir la "profondeur" du marché : combien d'ordres sont disponibles à différents niveaux de prix. Un livre profond indique une bonne liquidité. Un livre superficiel indique une liquidité limitée.

## Contexte et origine

Le carnet d'ordres électronique a transformé les marchés financiers dans les années 1990-2000, remplaçant les trading pits et le criée. Tous les échanges modernes fonctionnent avec des carnets d'ordres électroniques.

Les données de niveau 2 (aussi appelé "market by price") vont au-delà du meilleur bid/ask et montrent tous les niveaux de prix. Le niveau 3 inclut les identités des ordres, réservé aux participants professionnels du marché.

En crypto, le carnet d'ordres est accessible via les APIs des exchanges et est le fondement de nombreuses stratégies algorithmiques. Les bots de market making créent leurs propres carnets pour gérer leur exposition.

## Mécanismes et caractéristiques

Les murs (walls) sont de grands ordres qui semblent bloquer le prix à un certain niveau. Un mur d'achat important peut servir de support, un mur de vente important peut servir de résistance. Les murs peuvent être réels ou artificiels pour manipuler le sentiment.

Le spoofing place de gros ordres qui ne sont pas destinés à être exécutés, juste à créer une illusion de liquidité ou de direction. Quand le prix s'approche, les ordres sont annulés. Cette pratique est illégale sur les marchés réglementés mais existe en crypto.

Le déséquilibre du carnet se produit quand il y a beaucoup plus d'ordres d'achat que de vente à un certain niveau. Cela peut signaler une direction de prix probable. Les bots de market making utilisent ces déséquilibres pour ajuster leurs prix.

Le flux de données du carnet d'ordres via WebSocket fournit les mises à jour en temps réel. La latence de ce flux est critique pour les stratégies HFT. Les différences de latence entre participants créent des avantages informationnels.

## Nuances, critiques, limites

L'interprétation du carnet d'ordres peut être trompeuse. Des gros ordres peuvent être des ordres de panique ou des erreurs. Les murs peuvent être placés pour donner une fausse impression de support/résistance.

La "liquidité fantôme" est la liquidité qui semble disponible mais disparaît quand on essaie de l'exécuter. Les ordres placés près du prix sont vite annulés, ne laissant que les ordres plus lointains.

Les trades haute fréquence peuvent "scanner" le carnet d'ordres pour détecter des ordres de grande taille qui seront bientôt exécutés, et trader devant eux. Cette pratique, appelée "anticipation d'ordre", est controversée.

L'obsolescence du carnet d'ordres est un problème : à tout moment, le carnet peut avoir changé depuis la dernière mise à jour. Les décisions basées sur le carnet sont toujours faites avec un délai informationnel.

## Liens et implications

La [[Dynamique du carnet d'ordres]] est liée à la [[Liquidité]] et au [[Market making]]. Les market makers créent et consomment la liquidité visible dans le carnet.

Les [[Données de niveau 2]] sont l'autre nom pour le carnet complet avec tous les niveaux de prix. La microstructure étudie la façon dont le carnet est formed et modifié.

Les [[Flash crash]] sont souvent visibles dans le carnet d'ordres quand les gros ordres sont exécutés ou annulés soudainement, causant un retrait de liquidité qui amplifie le mouvement.

## Sources

[^1]: Handa and Schwartz, "Limit Order Trading", Journal of Finance (1996)
[^2]: Crowley, "Understanding Order Book Data", Binance Blog (consulted 2026)