---
titre: "Appariement du carnet d'ordres"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/carnet-ordres, #microstructure, #trading/bases]
créé: 2026-04-21
liens_forts: ["[[Order book dynamics]]", "[[Ordre à cours limité]]", "[[Ordre au marché]]", "[[Liquidité]]", "[[Central limit order book (CLOB)]]"]
liens_opposition: []
---

# Appariement du carnet d'ordres

> [!info] Résumé
> L'appariement du carnet d'ordres est le mécanisme par lequel les ordres d'achat et de vente sont matched pour exécuter les transactions. Il définit les règles de priorité (prix, temps) qui déterminent quelle contrepartie est servie.

## Définition

L'appariement (order matching ou order matching engine) est le processus par lequel un exchange détermine quelles paires d'ordres peuvent être exécutées ensemble, à quel prix, et dans quelle séquence. C'est le cœur algorithmique de tout exchange, qu'il soit centralisé ou décentralisé.

Le matching repose sur des règles de priorité définies par la plateforme. Les deux principes fondamentaux sont la priorité par prix (price priority) — l'ordre au prix le plus élevé pour un achat, le plus bas pour une vente est servi en premier — et la priorité par temps (time priority) — à prix égal, le premier ordre arrivé est servi en premier.

Quand un ordre arrive et peut être exécuté contre des ordres existants, le moteur d'appariement identifie la ou les contreparties, calcule le prix d'exécution selon les règles du marché (prix de l'ordre entrant, prix de l'ordre en attente, ou prix mid), et exécute la transaction.

## Contexte et origine

Les moteurs d'appariement modernes ont été développés pour les premières bourses électroniques dans les années 1970-1980, avec le NASDAQ et les systèmes de trading automatisés. Le protocole des règles de priorité (prix d'abord, temps ensuite) est devenu un standard industriel adopté par virtually tous les marchés electroniques.

Dans l'écosystème crypto, les exchanges centralisés comme Binance, Coinbase et Kraken ont des moteurs d'appariement proprietaires mais qui respectent les mêmes principes fondamentaux. Les DEX (exchanges décentralisés) comme Uniswap utilisent un mécanisme fondamentalement différent (constant product market maker) plutôt qu'un carnet d'ordres .

La comprenhension du matching est importante pour les [[Trading algorithmique]] car elle affecte directement la probabilité d'exécution et le prix d'exécution des ordres.

## Mécanismes / caractéristiques / détails

**Priority price** : dans un carnet d'ordres, les ordres sont classés par prix. Pour les ordres d'achat, le prix le plus élevé est en tête. Pour les ordres de vente, le prix le plus bas est en tête. Quand un nouvel ordre arrive, il est compare aux ordres existants du côté opposé. S'il peut être exécuté (prix de l'ordre acheteur ≥ prix de l'ordre vendeur), le matching commence.

**Priority time (FIFO)** : à prix égal, l'ordre le plus ancien (premier arrivé) est exécuté en premier. Ceprincipe "premier arrivé, premier servi" est aussi appele FIFO (First In, First Out). Il incentiver les traders à placer leurs ordres tôt pour avoir une meilleure priorité.

**Prix d'exécution** : dans la plupart des marchés, le prix d'exécution est le prix de l'ordre qui était dans le carnet (l'ordre passif), pas le prix de l'ordre entrant. Si un ordre d'achat à 60 050 USD est exécuté contre un ordre de vente à 60 000 USD, le prix d'exécution est généralement 60 000 USD (prix du maker).

**Ordre de passage (matching sequence)** : si un ordre peut être exécuté contre plusieurs ordres du côté opposé, le matching se fait dans l'ordre de priorité (prix puis temps). Un ordre de 10 BTC peut être exécuté contre 5 BTC au prix A, 3 BTC au prix B, et 2 BTC au prix C si les prix sont tous dans la range de l'ordre entrant.

**Marché continu vs	call auction** : la plupart des échanges crypto fonctionnent en "continious trading" oÙ les ordres sont appariés au fur et à mesure de leur arrivée. Certains marchés utilisent des "call auctions" oÙ les ordres sont accumulés pendant une période puis appariés simultanément à un prix unique (le prix qui maximise le volume).

**Types de matching pour les ordres spéciaux** : les ordres avec des conditions (stop, stop-limite) ne participent au matching que quand leur condition est remplie. Un [[Ordre stop-limite]] n'entre dans le carnet que lorsque le prix de déclenchement est atteint, puis il devient un ordre limite ou marché et est apparié selon les règles standard.

## Nuances, critiques, limites

**Front-running potentiel** : dans un système centralisé, l'exchange ou ses employés pourraient théoriquement voir un ordre avant son exécution et placer un ordre en avance (front-running). Les marchés réglementés ont des garde-fous contre cette pratique. Sur crypto, c'est une préoccupation notamment pour les DEX vs CEX.

**Priorité et latence** : la priorité time signifie que les ordres les plus anciens sont servis en premier. Pour les traders à haute fréquence, être "le plus ancien" est un avantage competitif. Les stratégies de "queue jumping" (qui essaient de traverser la queue) sont une préoccupation.

**Appariement sur les marchés fragmentés** : quand un actif est échangé sur plusieurs exchanges, le matching se fait indépendamment sur chaque plateforme. Il n'y a pas de matching global. C'est ce qui permet l'[[Arbitrage]] — les prix peuvent différer entre exchanges car chaque exchange a son propre carnet et son propre matching.

**Matching des ordres complexes** : les ordres comme les [[OCO (One-Cancels-Other)|OCO]] ou les ordres avec des conditions especiales require un matching plus complexe. Le système doit gérer les interdépendances entre ordres liés et s'assurer que seule l'issue appropriée est exécutée.

## Liens et implications

Le mécanisme d'appariement définit le comportement du [[Order book dynamics|carnet d'ordres]]. Comprendre comment les ordres sont servis permet de mieux prédire les executions et d'optimiser le placement d'ordres.

La [[Liquidité]] d'un marché est en partie déterminée par le mécanisme d'appariement. Un mécanisme qui reward les makers (avec des rabais) attire plus de liquidité, ce qui améliorer le matching pour tous.

Les stratégies de [[Market making]] dependent du mécanisme de priorité. Être en tête du livre (avoir la meilleure priorité temps) est crucial pour être exécuté de manière fiable et fréquente.

## Sources

[^1]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^2]: Hasbrouck, Joel. *Empirical Market Microstructure*. Oxford University Press, 2007.
[^3]: Documentation Binance — Match Engine. https://binance-docs.github.io/apidocs/spot/en/
