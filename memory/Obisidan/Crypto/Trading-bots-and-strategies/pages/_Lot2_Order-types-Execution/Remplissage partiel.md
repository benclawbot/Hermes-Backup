---
titre: "Remplissage partiel"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/ordre, #microstructure, #slippage]
créé: 2026-04-21
liens_forts: ["[[Ordre à cours limité]]", "[[Order book dynamics]]", "[[Liquidité]]", "[[FOK (Fill-Or-Kill)]]", "[[Prix d'exécution vs prix cot]]"]
liens_opposition: []
---

# Remplissage partiel

> [!info] Résumé
> Un remplissage partiel survient lorsqu'un ordre est exécuté pour une quantity inférieure à celle demandée, laissant une portion de l'ordre en attente dans le carnet d'ordres.

## Définition

Le remplissage partiel (partial fill) se produit quand un ordre est exécuté pour une quantity inférieure à la taille totale de l'ordre, que ce soit en une seule transaction ou en plusieurs transactions successives. L'ordre reste dans le [[Order book dynamics|carnet d'ordres]] pour la portion non exécutée avec sa priorité temporelle originale (time priority).

Le remplissage partiel est un phénomène normal et fréquent sur tous les marchés. Il survient quand la liquidité disponible au prix de l'ordre est inférieure à la taille de l'ordre. Pour un [[Ordre à cours limité]], c'est une eventualité commune. Pour un [[Ordre au marché]], le remplissage partiel est la norme quand la taille de l'ordre depasse la liquidité disponible à chaque niveau de prix.

Le remplissage partiel pose des défis de gestion de position pour les [[Trading bot|algorithmes de trading]] qui doivent tracker l'état de la position en temps réel et décider quoi faire avec la portion restante : attendre, compléter avec un ordre additionnel, ou annuler le reste.

## Contexte et origine

Le remplissage partiel est inhérent à la microstructure des marchés depuis leur existence. Même sur les marchés manuels du XIXe siècle, un ordre de vente important pouvait être exécuté en plusieurs fois à mesure que des acheteurs se présentaient. Avec les marchés électroniques, le mécanisme est plus explicite : chaque "fill" genere un event qui est traité par le système.

Sur les marchés crypto, le remplissage partiel est particulièrement fréquent sur les altcoins à faible liquidité, oÙ un ordre de taille modeste peut déjà dépasser la liquidité disponible à un prix donné. Les exchanges qui proposent du levier (futures, margin) amplifient l'effet : un ordre important sur un contrat perpetual peut absorber plusieurs niveaux du carnet.

## Mécanismes / caractéristiques / détails

**Mécanisme d'exécution** : quand un ordre arrive dans le carnet, il est exécuté contre les ordres existants du côté opposé. Si la liquidité disponible est de 3 BTC et que l'ordre est de 10 BTC, les 3 BTC sont exécutés et l'ordre de 7 BTC reste dans le carnet avec sa priorité d'origine. Les 3 exécutions génèrent 3 "fill events" reportés au client.

**Partial fill et frais** : chaque exécution partielle génère des frais de transaction. Un ordre de 10 BTC exécuté en 3 fois (3 + 3 + 4 BTC) génère 3 lots de frais. Si les frais sont répartis ad valorem, le coat total est le même que pour une exécution unique (en ignorant le slippage). Cependant, les frais fixes par exécution peuvent render the partial fill plus coûteux.

**Stratégies de completion** : quand un ordre est partiellement exécuté, l'algorithme doit décider quoi faire avec la portion restante. Options : (1) laisser l'ordre en attente avec la même priority ; (2) passer un ordre complémentaire pour compléter la taille ; (3) passer un ordre [[Ordre au marché]] pour compléter immédiatement ; (4) annuler la portion restante si la partie exécutée est suffisante.

**Prix d'exécution moyen** : avec plusieurs exécutions partielles à des prix différents, le prix moyen d'exécution est la moyenne pondérée des prix par les volumes exécutés. Si 5 BTC sont exécutés à 60 000 USD et 5 autres à 60 010 USD, le prix moyen est 60 005 USD. Ce prix moyen est compared au prix côté initial pour calculer le slippage.

**IOC vs GTC** : avec une durée [[FOK (Fill-Or-Kill)|FOK]], le remplissage partiel n'est pas autorisé — si l'ordre ne peut pas être exécuté intégralement, il est tué. Avec une durée IOC, le remplissage partiel est allowed — seule la portion exécutable l'est. Avec GTC, l'ordre reste pour le reste.

## Nuances, critiques, limites

**Risque de prix moyen dégradé** : sur un marché en mouvement, les exécutions partielles successives peuvent se faire à des prix de moins en moins favorables. Si le prix augmente pendant l'exécution d'un ordre d'achat partiel, chaque nouvelle tranche est plus chère, degradant le prix moyen au-delà du slippage anticipate.

**Problème de state management** : pour un [[Trading algorithmique]], le remplissage partiel nécessite un state management prées de l'ordre. Si le système recoit un fill event et envoie simultanément un ordre complémentaire basé sur un ancien état, les deux ordres peuvent se superposer et créer une surexposition. Les algorithms doivent traiter les événements dans l'ordre et maintenir un état cohérent.

**Annulation de la partie restante** : après un remplissage partiel, le trader peut décider d'annuler la portion restante. Si le marché s'est déplacé défavorablement, cette portion pourrait maintenant être beaucoup plus dangereuse que si l'ordre initial avait été exécuté en une seule fois. L'annulation libère le capital mais ferme la position avec un fill déjà partiellement dégradé.

**Partial fill sur [[Ordre iceberg]]** : l'[[Ordre iceberg]] est conçue précisément pour éviter le remplissage partiel massif en n'affichant qu'une fraction de l'ordre. Cependant, l'iceberg lui-même peut être partiellement exécuté si le prix ne permet pas de révéler la-totalité de l'ordre avant que le prix ne sorte du range.

## Liens et implications

Le [[Backtesting]] doit intégrer le remplissage partiel pour être réaliste. Un backtest qui suppose que tous les ordres sont toujours exécutés intégralement surestime la performance. Intégrer un modèle de liquidité (par exemple, profondeur du carnet simulée) permet de mieux estimer les vrais remplissages partiels.

Le slippage lié au remplissage partiel est un composant important du coat total de transaction. Les stratégies à haute fréquence ([[Haute fréquence]]) qui génèrent beaucoup d'ordres sont d'autant plus exposées aux effets du slippage additif sur les remplissages partiels.

Dans les stratégies de [[Arbitrage]], le remplissage partiel est problématique car la position doit généralement être complète pour que l'arbitrage soit rentable. Un arbitrage exécuté partiellement peut être perdant. C'est pourquoi le [[FOK (Fill-Or-Kill)]] est souvent preferé pour ces stratégies.

## Sources

[^1]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^2]: Hasbrouck, Joel. *Empirical Market Microstructure*. Oxford University Press, 2007.
[^3]: Documentation Binance — Order Update WebSocket Events.
