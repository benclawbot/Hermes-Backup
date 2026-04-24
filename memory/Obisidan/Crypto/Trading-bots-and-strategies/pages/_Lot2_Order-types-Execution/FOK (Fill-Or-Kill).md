---
titre: "FOK (Fill-Or-Kill)"
type: terme
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/ordre, #méthode/exécution, #trading/bases]
créé: 2026-04-21
liens_forts: ["[[Ordre à cours limité]]", "[[Ordre au marché]]", "[[Order book dynamics]]", "[[Remplissage partiel]]", "[[Liquidité]]"]
liens_opposition: []
---

# FOK (Fill-Or-Kill)

> [!info] Résumé
> L'ordre FOK (Fill-Or-Kill) est un ordre qui doit être exécuté intégralement et immédiatement, sinon il est entièrement annulé. Il ne tolère aucun remplissage partiel.

## Définition

L'ordre FOK (Fill-Or-Kill) est une instruction d'exécution conditionnelle qui exige que l'ordre soit rempli en une seule transaction complète au prix spécifié (ou mieux), sans quoi il est complètement annulé. Si la liquidité disponible au prix demandé est insuffisante pour absorber la totalité de l'ordre, l'ordre est tué — rien n'est exécuté.

Le FOK se distingue de l'IOC (Immediate Or Cancel) qui permet les exécutions partielles, et de l'ordre simple à cours limité qui attend indéfiniment une contrepartie. Le FOK est une instruction de type "tout ou rien" avec une composante temporelle d'immédiateté.

Sur le plan du risque, le FOK est particulièrement adapté pour les traders qui ont absolument besoin de la taille complète de leur ordre et ne veulent pas de [[Remplissage partiel]]. Par exemple, un arbitrage qui nécessite 10 BTC pour être rentable ne sert à rien avec 5 BTC — le FOK garantit que soit les 10 sont exécutés, soit rien ne l'est.

## Contexte et origine

Le FOK émerge avec les premiers systèmes de trading électroniques dans les années 1970-1980, lorsque les protocoles de communication entre bourses et intermédiaires ont commencé à inclure des instructions conditionnelles sur les ordres. Auparavant, les traders devaient vérifier manuellement si leur ordre était complet et ajuster.

Dans le contexte crypto, le FOK est disponible sur la plupart des [[API d'échange]] modernes. Binance, Kraken, Coinbase Pro et d'autres exchanges majeurs supportent le FOK comme flag d'instruction d'ordre. Les stratégies de [[Trading algorithmique]] qui dépendent d'une taille de position précise pour leur gestion du risque utilisent le FOK pour éviter les positions incomplètes.

La distinction entre FOK et IOC (Immediate Or Cancel) est fondamentale dans la microstructure moderne : FOK = tout ou rien ; IOC = immédiatement ce qui peut être exécuté, annuler le reste.

## Mécanismes / caractéristiques / détails

**Mécanisme d'exécution** : l'exchange vérifie au moment de la réception de l'ordre si la liquidité disponible au prix limite (ou mieux) est suffisante pour exécuter la totalité de l'ordre. Si oui, l'ordre est exécuté instantanément. Si non, l'ordre est tué et une réponse "cancelled" est renvoyée au client. Le tout se passe en millisecondes sur les exchanges modernes.

**Prix limite** : le FOK est généralement un type d'instruction associée à un ordre limite. L'ordre est "acheter 10 BTC à 60 000 USD maximum (FOK)". Si le carnet offre 10 BTC ou plus à 60 000 USD ou moins, l'ordre est exécuté. Sinon, il est tué. L'ordre ne sera pas exécuté à un prix supérieur à 60 000 USD.

**Remplissage fractionné impossible** : contrairement à l'IOC, le FOK ne permet aucun remplissage partiel. Si le carnet propose 6 BTC à la condition et que l'ordre en demande 10, l'ordre est entièrement tué. Ce comportement est crucial pour les stratégies d'[[Arbitrage]] où une position partielle ne génère pas le profit espéré et pourrait même être perdante.

**Cas d'usage typique** : les stratégies d'arbitrage utilisent le FOK pour leurs ordres d'exécution car elles ont besoin de la totalité du capital pour que l'arbitrage soit rentable. Une stratégie de [[Market making]] sur un carnet d'ordres peut aussi utiliser le FOK pour éviter d'avoir une position delta non anticipée.

**Relation avec les autres durées** : le FOK est une forme de [[Durée de validité de l'ordre|durée de validité]] très courte — elle expire instantanément si non exécutée. À l'autre extrême, GTC (Good Till Cancelled) maintient l'ordre jusqu'à exécution ou annulation manuelle. IOC est un intermédiaire qui remplit ce qui peut immédiatement et annule le reste.

## Nuances, critiques, limites

**Risque de non-exécution (fill failure)** : le principal inconvenient du FOK est le risque de non-exécution en période de faible liquidité ou de volatilité élevée. Un trader qui ne peut pas exécuter son ordre FOK doit décider s'il passe un ordre limite (avec le risque de ne jamais être exécuté) ou un ordre au marché (avec le risque de slippage). Ce dilemme est au cœur de la microstructure.

**Non exécutable sur marchés minces** : sur des marchés avec très peu de liquidité (certaines altcoins par exemple), le FOK peut échouer systématiquement si les ordres au livre ne sont jamais assez grands. Le trader est alors contraint de fractionner son ordre manuellement, ce qui introduit un risque de slippage cumulatif sur plusieurs exécutions.

**Déclenchement dans un marché en mouvement** : si un ordre FOK arrive au moment précis où le prix traverse un niveau, la différence entre une exécution complète et un échec peut dépendre de millisecondes. Sur des marchés très volatiles ou lors d'un [[Flash crash]], le FOK peut être systématiquement tué si la liquidité est aspirée avant que l'ordre n'arrive.

**Impact sur l'[[Order book dynamics|Carnet d'ordres]]** : un gros ordre FOK qui échoue n'affecte pas le carnet. Un ordre qui réussit affecte le carnet comme un ordre limite standard — il est exécuté et disparaît du livre. Les observateurs du carnet peuvent voir des ordres disparaître sans transaction, suggérant des ordres FOK tués.

## Liens et implications

Le FOK est intimement lié à la problématique du [[Remplissage partiel]] : il élimine ce risque en éliminant toute possibilité de remplissage incomplet. Pour les stratégies de [[Gestion du risque]] qui ne peuvent pas tolérer une position différente de celle planifiée, le FOK est souvent préférable.

Dans l'[[Arbitrage]], le FOK est quasi-indispensable car la rentabilité de la stratégie dépend de la taille complète de la position. Un arbitrage exécuté partiellement peut même être perdant si les frais de transaction sur la position incomplète ne sont pas couverts.

Le [[Backtesting]] d'une stratégie utilisant des ordres FOK doit simuler la disponibilité de liquidité au moment de chaque signal, pas simplement supposer que l'ordre est toujours exécuté. C'est une erreur fréquente de supposer une exécution à 100% dans les backtests, ce qui surestime significativement la performance.

## Sources

[^1]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^2]: Hasbrouck, Joel. *Empirical Market Microstructure*. Oxford University Press, 2007.
[^3]: Documentation Binance Trading API — Order types and time-in-force. https://binance-docs.github.io/apidocs/spot/en/