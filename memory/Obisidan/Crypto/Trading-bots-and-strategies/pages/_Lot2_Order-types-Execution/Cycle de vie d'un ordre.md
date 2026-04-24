---
titre: "Cycle de vie d'un ordre"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 3
tags: [#concept/ordre, #trading/bases, #microstructure]
créé: 2026-04-21
liens_forts: ["[[Ordre à cours limité]]", "[[Ordre au marché]]", "[[Order book dynamics]]", "[[Rejet d'ordre]]", "[[Remplissage partiel]]"]
liens_opposition: []
---

# Cycle de vie d'un ordre

> [!info] Résumé
> Le cycle de vie d'un ordre décrit les différents états qu'un ordre traverse depuis sa création jusqu'à sa finalisation (exécution complète, annulation ou rejet), en passant par les états intermédiaires de modification et de déclenchement.

## Définition

Le cycle de vie d'un ordre est la séquence d'états par laquelle passe un ordre depuis sa soumission jusqu'à sa terminaison. Les états principaux sont : créé (new), partiellement rempli (partially filled), rempli (filled), partiellement annulé (partially cancelled), annulé (cancelled), rejeté (rejected), et dans le cas des ordres conditionnels, en attente de déclenchement (pending trigger).

La compréhension précise de ce cycle est essentielle pour le [[Trading algorithmique]] car chaque transition d'état peut déclencher des actions dans l'algorithme — un remplissage partiel peut recalculer la taille restante, un rejet peut déclencher une tentative sur un autre exchange, etc.

Chaque exchange crypto définit son propre diagramme d'états mais le modèle général est similaire au standard FIX Protocol utilisé dans la finance traditionnelle. Les [[API d'échange]] modernes exposent ces états dans leursWebSocket streams permettant un suivi en temps réel.

## Contexte et origine

Le modèle de cycle de vie des ordres s'est formalisé avec le protocole FIX (Financial Information eXchange) dans les années 1990, qui a standarisé les états et les transitions entre institutions financières. Ce modèle a été adopté par les plateformes de trading electroniques puis adapté par les exchanges crypto dans leurs APIs.

Dans l'écosystème crypto, la complexité du cycle de vie est accrue par la diversité des types d'ordres (limite, marché, stop, iceberg, TWAP, etc.) et par la diversité des exchanges qui peuvent avoir des modèles d'états légèrement différents. Un [[Trading bot]] qui opère sur plusieurs exchanges doit gérer ces différences.

## Mécanismes / caractéristiques / détails

**Création (New)** : l'ordre est soumis à l'exchange via l'API. L'exchange valide les paramètres (prix, taille, type) et accepte l'ordre s'ils sont conformes aux règles du marché. L'ordre est inséré dans le [[Order book dynamics|carnet d'ordres]] s'il s'agit d'un ordre limite, ou exécuté immédiatement s'il s'agit d'un ordre marché.

**Exécution (Filled)** : quand une contrepartie est trouvée, l'ordre est exécuté. L'exécution peut être totale (full fill) en une seule transaction, ou partielle (partial fill) en plusieurs transactions. Chaque exécution génère un "fill report" envoyé au client, often via WebSocket for real-time updates.

**Annulation (Cancelled)** : le trader peut annuler un ordre actif à tout moment avant son exécution complète. L'annulation peut être totale (si l'ordre n'a pas encore été exécuté) ou partielle (si une partie a déjà été exécutée — on annule alors la partie restante). L'annulation est un droit du trader mais n'est pas guaranteed si l'ordre est en cours d'exécution au moment où la demande d'annulation arrive.

**Remplacement (Replaced)** : certains systèmes permettent de modifier un ordre existant (changement de prix ou de taille) sans l'annuler et le remplacer. Le nouvel ordre maintient sa priorité temporelle originale. C'est le mécanisme de modification d'ordre le plus efficace.

**Déclenchement (Triggered)** : pour les ordres conditionnels (stop, stop-limite), l'ordre passe dans un état "en attente" jusqu'à ce que la condition de déclenchement soit remplie. Une fois triggeré, il se transforme en ordre limite ou marché selon le type et rejoint le carnet ou s'exécute.

**Rejet (Rejected)** : si l'ordre ne peut pas être accepté par l'exchange (fond insuffisant, taille hors limites, prix hors plage, etc.), il est rejeté et ne modifie pas le carnet. Cf. [[Rejet d'ordre]] pour plus de détails.

**États terminaux** : les états terminaux sont Filled (complètement exécuté), Cancelled (complètement annulé), et Rejected (rejeté). Un ordre dans un état terminal ne peut plus changer d'état.

## Nuances, critiques, limites

**Latence entre états** : il existe une latence entre le moment où un événement se produit (exécution, annulation) et le moment où le client en est informé. Pendant cette fenêtre, le client peut envoyer des ordres basés sur un état outdated, créant des conditions de course (race conditions). Les [[Trading bot|algorithmes]] doivent gérer ces cas avec des mécanismes de retry ou de validation.

**Ordre d'arrivée (sequence)** : les exécutions partielles peuvent créer des problèmes de séquence si plusieurs mises à jour arrivent en désordre. Un algorithme doit traiter les mises à jour dans l'ordre pour maintenir un état coherent de la position.

**Annulation asynchrone** : une demande d'annulation peut être acceptée par l'exchange (ACK) avant que l'ordre ne soit effectivement retiré du carnet. Pendant ce délai, l'ordre peut encore être exécuté. Le trader recoit ensuite un "cancelled" event pour un ordre qui a en réalité été partiellement exécuté. Il est crucial de reconcilier les états.

## Liens et implications

Le cycle de vie de l'ordre est le cadre technique dans lequeloperent toutes les stratégies de [[Trading algorithmique]]. Comprendre les états et les transitions est indispensable pour debugging des bots qui fonctionnent mal, et pour diseñar des stratégies qui gèrent correctement les cas limites.

L'[[API d'échange]] expose généralement les états via deux mécanismes : REST API pour une vueinstantanee (snapshot) et WebSocket pour les mises à jour en temps réel (stream). Un [[Trading bot]] bien conçu utilise les deux : le WebSocket pour le suivi temps réel et le REST pour resynchroniser en cas de déconnexion.

Les stratégies de [[Gestion du risque]] doivent monitorer les états d'ordres pour maintenir des positions exactes. Un ordre en attente de déclenchement (stop) représente une exposition potentielle qui doit être intégrée dans les calculs de risque.

## Sources

[^1]: FIX Protocol Organization. FIX 5.0 Session Layer. https://www.fixtrading.org/
[^2]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^3]: Documentation Binance WebSocket Streams — Order Update Events.
