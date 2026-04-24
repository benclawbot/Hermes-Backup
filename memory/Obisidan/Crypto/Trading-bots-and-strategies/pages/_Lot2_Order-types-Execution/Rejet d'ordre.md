---
titre: "Rejet d'ordre"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/ordre, #microstructure, #api]
créé: 2026-04-21
liens_forts: ["[[Ordre à cours limité]]", "[[Ordre au marché]]", "[[API d'échange]]", "[[Liquidité]]", "[[Cycle de vie d'un ordre]]"]
liens_opposition: []
---

# Rejet d'ordre

> [!info] Résumé
> Un rejet d'ordre survient quand l'exchange refuse un ordre pour des raisons techniques ou réglementaires. Comprendre les codes de rejet est essentiel pour diagnostiquer les problèmes d'exécution d'un trading bot.

## Définition

Un rejet d'ordre (order rejection) se produit quand un ordre soumis par un trader (ou un [[Trading bot]]) n'est pas accepté par l'exchange et ne subit aucune modification sur le carnet d'ordres. Le rejet est un état terminal du [[Cycle de vie d'un ordre|cycle de vie de l'ordre]], different de l'annulation (qui est demandée par le client) ou de l'expiration (qui est temporelle).

Chaque exchange définit ses propres codes de rejet, mais les catégories sont largement similaires : ordres avec des paramètres invalides, fonds insuffisants, taille hors des limites du marché, prix hors de la fourchette autorisée, breach de levier maximum, ou violation de règles de trading du pays concerné.

Le rejet est different de l'annulation et different de l'exécution : c'est un refus pur et simple de traiter l'ordre. L'ordre n'apparaît pas dans le carnet et ne génère pas de transaction.

## Contexte et origine

Les rejets d'ordres sont une fonctionnalité fondamentale des systèmes de trading modernes, implementée dès les premiers systèmes electroniques dans les années 1970. Le protocole FIX (Financial Information eXchange) standardise certains codes de rejet dans l'industrie financière traditionnelle.

Dans l'écosystème crypto, les rejections sont fréquentes pour les développeurs de bots qui ne maîtrisent pas parfaitement les subtilités de chaque [[API d'échange]]. Binance, Coinbase, Kraken et d'autres plateformes publient des listes exhaustives de codes de rejet que les développeurs doivent intégrer dans leur logique de gestion d'erreurs.

## Mécanismes / caractéristiques / détails

**Catégories de rejet** :

1. **Paramètres invalides** : prix hors de la fourchette autorisée (par exemple, prix à 0 pour un actif qui requiert un prix minimum), taille en dessous du minimum (lot minimum) ou au-dessus du maximum, type d'ordre non supporté pour ce marché,précision du prix (tick size) non respectée.

2. **Fonds insuffisants** : le solde du compte est insuffisant pour couvrir l'ordre. Sur le spot, cela concerne le solde de l'actif à acheter ou de l'actif de marge. Sur les contrats futures ou margin, cela concerne la marge disponible.

3. **Limites de marché** : certaines paires ont des restrictions de prix (prix maximum et minimum absolu, ou prix maximum de variation par rapport au dernier prix). Un ordre qui dépasse ces limites est rejeté.

4. **Limites de levier** : sur les marchés à terme ou margin, l'exchange impose des limites de levier qui dependent de la volatilité de l'actif. Un ordre qui impliquerait un levier supérieur au maximum autorisé est rejeté.

5. **Conformité réglementaire** : dans certaines juridictions, certains types d'ordres ou certaines paires ne sont pas autorisés pour certains types de comptes. Ces restrictions sont appliquées par l'exchange.

6. **Rate limiting** : quand le nombre de requêtes API dépasse les limites de l'exchange, les ordres peuvent être rejectés avec un code de rate limit.

**Codes de rejet sur Binance** : les codes courants incluent -1000 (Unknown order), -1015 (Too many new orders), -2019 (Margin is not sufficient), -2021 (Order would immediately trigger and violate price frozen rules).

**Gestion des rejets dans un bot** : un [[Trading algorithmique]] robuste doit intercepter les rejets, les logger avec leur code, et décider de la conduite à tenir : retry avec des paramètres corrigés, skipper ce trade, ou alertter l'opérateur.

## Nuances, critiques, limites

**Rejets en série** : si un bot subit des rejets successifs sans intervention, il peut indiquer un problème systémique (solde insuffisant après des exécutions précédentes, drift du prix qui sort des fourchettes). Ignorer les rejets peut conduire à une impossibilité totale de trading sans que l'opérateur ne le sache.

**Race conditions** : un ordre peut être accepté (ACK) puis rejeté lors du matching (processus d'exécution). Dans ce cas, le rejet arrive après une acceptation — le bot doit gérer ce cas rare mais possible. Généralement, l'exchange émet un "business rule reject" plutôt qu'un rejet d'ordre pur.

**Différence avec les cancels** : un rejet n'est pas une annulation. Un ordre annulé (cancelled) a été accepte puis retiré à la demande du client. Un ordre rejeté ne l'a jamais été. La distinction est importante pour le calcul de la position et du risque.

**Rejet de stop non déclenché** : un [[Ordre stop-limite]] peut être rejeté si son prix de déclenchement est trop proche du prix actuel (trigger price would immediately execute). Certains exchanges imposent une distance minimale entre le prix actuel et le stop.

## Liens et implications

Les rejets d'ordres sont un sujet de préoccupation majeur pour la fiabilité des stratégies de [[Trading algorithmique]]. Un bot qui ne gère pas correctement les rejets peut avoir une position différente de celle attendue, avec des conséquences pour la [[Gestion du risque]].

L'[[API d'échange]] de chaque plateforme définit les règles de validation qui peuvent causer des rejets. Vérifier ces règles avant de mettre en production est une étape critique du [[Forward testing|test avant mise en production]].

Les stratégies de [[Haute fréquence]] qui soumettent un grand volume d'ordres sont plus exposées aux rejets pour cause de rate limiting. Une bonne implémentation inclut un backoff exponentiel et une limitation du taux d'ordres pour éviter les rejets en cascade.

## Sources

[^1]: FIX Protocol Organization. FIX 5.0 Session Layer. https://www.fixtrading.org/
[^2]: Documentation Binance — General API Information and Error Codes. https://binance-docs.github.io/apidocs/spot/en/
[^3]: Documentation Kraken — Trading API Error Codes.
