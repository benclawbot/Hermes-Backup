---
titre: "Ordre au marché"
type: terme
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 3
tags: [#concept/ordre, #méthode/exécution, #trading/bases]
créé: 2026-04-21
liens_forts: ["[[Ordre à cours limité]]", "[[Slippage]]", "[[Order book dynamics]]", "[[Liquidité]]", "[[Frais maker vs taker]]"]
liens_opposition: ["[[Ordre à cours limité]]"]
---

# Ordre au marché

> [!info] Résumé
> Un ordre au marché est une instruction d'achat ou de vente exécutée immédiatement au meilleur prix disponible dans le carnet d'ordres. Il garantit l'exécution mais ne garantit pas le prix.

## Définition

Un ordre au marché (market order) est le type d'ordre le plus simple et le plus immédiat disponible sur une plateforme d'échange. Lorsqu'un trader émet un ordre au marché, il demande à l'exchange d'exécuter la transaction au prix le plus favorable actuellement proposé, sans fixer de limite de prix. Pour un achat, cela correspond au prix ask le plus bas disponible ; pour une vente, au prix bid le plus élevé.

L'ordre au marché est dit "taker" : il consomme de la liquidité existante dans le [[Order book dynamics|carnet d'ordres]] plutôt que d'en créer. Il retire des ordres passifs (ordres à cours limité) du livre d'ordres et génère une exécution immédiate. Cette caractéristique le distingue fondamentalement de l'[[Ordre à cours limité]], qui ajoute de la liquidité et attend une contrepartie.

La garantie d'exécution est la propriété la plus précieuse de l'ordre au marché. Dans des situations de marché rapide ou lors de sorties d'urgence, le trader sacrifie le contrôle du prix pour obtenir la certitude d'être exécuté. C'est le choix naturel lorsque la vitesse prime sur l'optimisation du coût.

## Contexte et origine

Les ordres au marché constituent l'un des mécanismes les plus anciens des marchés financiers organisés, remontant aux premières bourses de valeurs où les commissionnaires exécutaient les ordres au mieux sur le plancher. Dans le contexte du [[Trading algorithmique]], ils restent une primitive fondamentale que tout [[Trading bot]] doit savoir émettre via l'[[API d'échange]] de l'exchange cible.

Sur les marchés crypto, qui fonctionnent 24h/24 et 7j/7 avec une liquidité variable, l'ordre au marché revêt des propriétés particulières. Les spreads bid-ask peuvent être larges sur des paires peu liquides, rendant le coût implicite d'un ordre au marché significatif. Sur des paires majeures comme BTC/USDT sur Binance, ce coût reste minimal mais non nul.

## Mécanismes / caractéristiques / détails

**Exécution contre le carnet d'ordres** : un ordre d'achat au marché pour 1 BTC va d'abord consommer les ordres à cours limité côté ask dans l'ordre de prix croissant. Si le premier niveau du carnet propose 0,5 BTC à 60 000 USD et le deuxième 0,5 BTC à 60 010 USD, l'ordre sera rempli à deux prix différents, produisant un [[Remplissage partiel|prix moyen pondéré]].

**Le [[Slippage]]** est le phénomène central associé aux ordres au marché. Plus le volume de l'ordre est grand par rapport à la [[Liquidité]] disponible dans le carnet, plus l'ordre "mange" dans les niveaux profonds du carnet, créant un écart entre le prix attendu et le prix réel d'exécution. Sur des marchés peu liquides ou lors de pics de volatilité, le slippage peut atteindre plusieurs pourcents.

**Frais de passage** : les exchanges appliquent des [[Frais maker vs taker|frais taker]] aux ordres au marché, généralement plus élevés que les frais maker appliqués aux ordres à cours limité. Sur Binance, les frais taker standard sont de 0,1 % et les frais maker de 0,1 % également, mais sur d'autres plateformes l'écart peut être de 2 à 5 fois plus élevé.

**Cas d'usage en trading automatisé** : dans un [[Trading bot]] réactif, l'ordre au marché est utilisé pour les signaux urgents, les sorties de position en cas de déclenchement de [[Gestion du risque|règles de risque]], ou lors de conditions d'arbitrage à saisir dans une fenêtre temporelle très courte. Le [[Haute fréquence|trading haute fréquence]] fait usage massif d'ordres au marché pour capturer des opportunités éphémères.

**Risques en marché fin** : sur des exchanges peu liquides ou lors de faible volume, un ordre au marché peut déclencher une exécution à des prix absurdes si le carnet est vide à plusieurs niveaux. Des mécanismes de protection comme les "circuit breakers" ou les limites de déviation de prix existent sur certaines plateformes pour prévenir cet écueil. Le [[Flash crash]] de mai 2010 sur les marchés actions illustre l'effet cascade des ordres au marché dans un livre d'ordres dépeuplé.

**Alternatives selon le contexte** : lorsque la précision du prix prime, le trader préférera un [[Ordre à cours limité]]. Lorsqu'une sortie doit être garantie avec un plancher de prix, le [[Ordre stop-limite]] peut être utilisé. Pour des positions importantes, des techniques d'exécution algorithmique comme le [[TWAP (Time-Weighted Average Price)]] ou le [[Exécution VWAP]] permettent de fractionner les ordres au marché pour réduire l'impact.

## Nuances, critiques, limites

L'ordre au marché est souvent décrit comme "simple" mais sa gestion algorithmique est complexe. Un bot qui émet des ordres au marché en cascade peut générer un [[Impact de marché|impact de marché]] significatif sur lui-même, dégradant sa propre performance. La taille optimale d'un ordre au marché dépend de la profondeur du carnet, consultable via les [[Données de niveau 2]].

La transparence post-exécution est un autre enjeu : le [[Prix d'exécution vs prix coté|prix d'exécution réel]] peut différer substantiellement du prix affiché au moment de l'émission de l'ordre, notamment sur des marchés en mouvement rapide. Cette différence n'est pas toujours visible immédiatement dans l'interface de l'exchange.

Enfin, sur des marchés décentralisés (DEX), l'équivalent de l'ordre au marché subit le risque de MEV (Maximal Extractable Value), où des bots peuvent s'insérer avant l'ordre pour en capturer la valeur, aggravant le slippage effectif.

## Liens et implications

L'exécution d'un ordre au marché consomme la liquidité fournie par les market makers, tel que le décrit la page [[Market making]], créant une relation symbiotique entre ces deux types d'acteurs. Le [[Trading algorithmique]] moderne distingue soigneusement les stratégies "taker" et "maker" car leur structure de coût est fondamentalement différente.

Dans le cadre du [[Grid trading]], les ordres au marché ne sont généralement pas utilisés car la stratégie repose sur des ordres à cours limité pour capter le spread. En revanche, dans les stratégies de [[Stratégie de momentum|momentum]], l'ordre au marché est souvent préféré pour ne pas manquer le mouvement en attendant une exécution à cours limité.

Le [[Slippage]] généré par les ordres au marché est un paramètre critique à intégrer dans tout [[Backtesting]] sérieux, au risque de surestimer massivement les performances théoriques d'une stratégie.

## Sources

[^1]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^2]: Hasbrouck, Joel. *Empirical Market Microstructure*. Oxford University Press, 2007.
[^3]: Documentation officielle Binance Spot API — Types d'ordres supportés. https://binance-docs.github.io/apidocs/spot/en/#order-types
