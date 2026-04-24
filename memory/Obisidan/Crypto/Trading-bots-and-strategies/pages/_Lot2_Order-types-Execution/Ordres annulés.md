---
titre: "Ordres annulés"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/ordre, #microstructure, #trading/bases]
créé: 2026-04-21
liens_forts: ["[[Ordre à cours limité]]", "[[Cycle de vie d'un ordre]]", "[[Rejet d'ordre]]", "[[Order book dynamics]]", "[[Liquidité]]"]
liens_opposition: []
---

# Ordres annulés

> [!info] Résumé
> L'annulation d'ordre est la suppression d'un ordre en attente avant son exécution. Elle peut être initiée par le trader ou par l'exchange (annulation automatique) et représente une part normale du cycle de vie d'un ordre.

## Définition

L'annulation d'ordre (order cancellation) est l'action de supprimer un ordre qui avait été soumis et accepté par l'exchange mais qui n'a pas encore été exécuté (complètement ou partiellement). L'ordre est retiré du [[Order book dynamics|carnet d'ordres]] et ne pourra plus être exécuté.

L'annulation est l'un des états finaux du [[Cycle de vie d'un ordre|cycle de vie de l'ordre]], au même titre que l'exécution complète et le [[Rejet d'ordre|rejet]]. Elle peut être initiée par le trader (demande d'annulation) ou par l'exchange (annulation automatique dans certains cas : expiration de la durée de validité, solde insuffisant après une exécution partielle, etc.).

Le taux d'annulation (cancel-to-trade ratio) est un indicateur utilisé par les exchanges et les régulateurs pour évaluer la santé du marché. Un taux d'annulation très élevé peut indiquer du spoofing ou d'autres pratiques manipulatives.

## Contexte et origine

L'annulation d'ordres est une fonctionnalité fondamentale des marchés electroniques depuis leur origine. Avec les premiers systèmes de trading automatisés dans les années 1970-1980, les traders ont pu soumettre et annuler des ordres en quelques millisecondes, créant un nouveau paradigme de liquidité "provisoire".

Dans l'écosystème crypto, l'annulation d'ordre est omniprésente. Les stratégies de [[Market making]] annulnt leurs ordres des milliers de fois par jour quand les conditions changent. Les [[Trading bot|algorithmes]] de scalping peuvent soumettre et annuler des centaines d'ordres pour quelques ticks de profit. Le volume d'annulations sur les grands exchanges crypto est souvent plusieurs fois le volume d'exécutions.

## Mécanismes / caractéristiques / détails

**Processus d'annulation** : le trader envoie une demande d'annulation (cancel request) à l'exchange avec l'identifiant de l'ordre à annuler. L'exchange vérifie que l'ordre existe toujours et n'a pas déjà été exécuté, puis le retire du carnet. Un message de confirmation (ACK de l'annulation) est renvoyé au client.

**Annulation partielle** : si un ordre a été partiellement exécuté, l'annulation ne concerne que la partie restante. Par exemple, un ordre de 10 BTC dont 6 BTC ont été exécutés ne peut annuler que les 4 BTC restants. L'exécution partielle n'est pas reversible.

**Annulation par l'exchange** : dans certains cas, l'exchange annule automatiquement l'ordre. Les causes fréquentes incluent : expiration de la durée de validité ([[Durée de validité de l'ordre|GTC qui expire après X jours]]), ajustement des règles de marché (prix hors plage), ou suppression du ment.

**Race condition** : il est possible qu'un ordre soit exécuté au moment précis où une demande d'annulation arrive. Dans ce cas, l'exchange traite généralement l'exécution comme prioritaire — l'ordre est exécuté malgré la demande d'annulation concurrente. Le client reçoit ensuite un execution report plutôt qu'un cancel ACK.

**Cancel-Replace** : le protocole FIX et certaines APIs permettent le "cancel-replace" (ou modification d'ordre) qui cancel un ordre et en remplace un nouveau en une seule opération atomique. Cela maintient la priorité temporelle de l'ordre original.

**Ratio d'annulation** : le cancel-to-trade ratio (CTR) est le nombre d'ordres annulés divisé par le nombre d'ordres exécutés. Sur les marchés très actifs, un CTR de 10:1 ou plus est normal. Un CTR extrèmement élevé peut être un signal de spoofing.

## Nuances, critiques, limites

**Spoofing et annulation** : le spoofing est une forme de manipulation oÙ un trader place de gros ordres avec l'intention de les annuler avant exécution pour donner l'illusion de liquidité directionnelle. Cette pratique est interdite sur les marchés réglementés mais reste un problème sur crypto.

**Impact sur la liquidité perçue** : les annulations créent une "liquidité fantôme" — le carnet montre des ordres qui seront peut-être bientôt annulés. Les participants qui se basent sur la profondeur du carnet ([[Profondeur du carnet d'ordres]]) peuvent être induits en erreur.

**Coût des annulations** : certaines plateformes facturent les annulations (cancel fees) pour decourager le churn excessif d'ordres. Sur Binance Futures par exemple, les annulations dans la seconde qui suit la soumission sont soumises à des frais pour éviter le spamming d'ordres.

**Annulation et latence** : dans un environnement [[Haute fréquence]], le temps entre lplacement et l'annulation peut être de quelques millisecondes. Le risque de race condition (être exécuté malgré la demande d'annulation) est réel et doit être géré par l'algorithme.

## Liens et implications

L'annulation d'ordres est le talon d'Achille des stratégies de [[Market making]]. Un market maker qui annule trop lentement ses ordres risque d'être "run over" par un mouvement de marché. La vitesse d'annulation est un avantage compétitif majeur.

Les [[Trading bot]]s qui utilisent des stratégies de "[[Smart money concept|chasing]]" (courir après le prix) soumettent souvent des ordres qui sont annulés quasi-immédiatement car le prix a déjà bougé. Un taux d'annulation excessif est un signal de stratégie défaillante.

La gestion des annulations dans le [[Backtesting]] est complexe : un backtest qui ne simulate pas la possibilité d'annulation des ordres peut surrévaluer la performance car il suppose que tous les ordres restent en attente jusqu'à exécution.

## Sources

[^1]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^2]: SEC — Synthetic Access and Market Manipulation.
[^3]: Documentation Binance — Cancel an Order. https://binance-docs.github.io/apidocs/spot/en/
