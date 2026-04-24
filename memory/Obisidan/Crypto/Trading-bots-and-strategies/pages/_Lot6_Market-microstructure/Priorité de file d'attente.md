---
titre: "Priorité de file d'attente"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/file-attente, #microstructure, #ordre]
créé: 2026-04-21
liens_forts: ["[[Ordre à cours limité]]", "[[Ordre au marché]]", "[[Order book dynamics]]", "[[Market making]]", "[[Écart bid-ask]]", "[[Frais maker vs taker]]", "[[Liquidité]]"]
liens_opposition: []
---

# Priorité de file d'attente

> [!info] Résumé
> La priorité de file d'attente (queue priority) détermine l'ordre dans lequel les ordres à cours limité sont exécutés quand plusieurs ordres sont en attente au même niveau de prix. Le système "price-time priority" favorise les ordres les plus anciens au prix le plus bas pour les achats (ou le plus haut pour les ventes).

## Définition

La priorité de file d'attente est la règle qui détermine l'ordre d'exécution des ordres en attente dans le carnet d'ordres quand plusieurs ordres sont présents au même prix. Le système dominant sur la plupart des exchanges est le "price-time priority" (priorité prix-temps) : au même niveau de prix, l'ordre le plus ancien est exécuté en premier. Pour les achats, le prix le plus bas (meilleur bid) est servi en premier ; pour les ventes, le prix le plus élevé (meilleur ask) est servi en premier.

Ce système crée une incitation à placer des ordres tôt pour être en tête de la file. Les traders qui veulent être premiers au meilleur prix doivent battre les autres en termes de temps. Cela a conduit à une course à la vitesse oÙ les participants essaient de placer leurs ordres le plus tôt possible.

某些 exchanges utilisent des systèmes de priorité différents. Le "pro-rata" privilégie les ordres selon leur taille plutôt que leur temps. D'autres systèmes peuvent donner une priorité aux market makers designated ou aux grands exécutants. Le système utilisé affecte la stratégie de passation d'ordres.

## Contexte et origine

Le concept de priorité de file d'attente émerge des premiers marchés électroniques organisés dans les années 1980 et 1990. Les systèmes manuels de contrepartie (specialists) avaient des règles de priorité différentes basées sur le jugement du specialist. L'avènement des carnets d'ordres électroniques a standardisé la règle price-time priority.

La priorité de file d'attente est particulièrement importante pour les stratégies de [[Market making]]. Un market maker qui est le premier à placer un ordre au meilleur prix reçoit un avantage structurel. Il capture le spread avant les autres market makers et reçoit les exécutions en premier. Cela crée une incitation à investir dans la vitesse de passation d'ordres.

Dans l'écosystème crypto, la priorité de file d'attente est une composante clé de la竞争 entre teneurs de marché. Les bots de market making sophistiqués竞争ent pour la première position au meilleur prix, investing dans la réduction de latence pour être les premiers dans la file.

## Mécanismes / caractéristiques / détails

**Price-time priority** : au même prix, l'ordre le plus ancien est exécuté en premier. Cette règle est standard sur la plupart des exchanges crypto (Binance, Coinbase, Kraken). L'ordre arrive à l'exchange à un timestamp précis, et les antérieurs reçoivent la priorité.

**Pro-rata priority** : au même prix, les ordres sont exécutés proportionnellement à leur taille. Un ordre plus grand reçoit une exécution plus importante. Ce système est parfois utilisé sur les marchés à terme. Il favorise les gros ordres mais peut désavantager les petits producteurs de liquidité.

**Priorité de marché** : certains exchanges donnent une priorité spéciale à certains participants. Les "market makers designated" peuvent avoir une priorité garantie pour maintenir leur engagement à fournir de la liquidité. Cette priorité est généralement disclose dans les règles de l'exchange.

**Queue positioning** : la position dans la file d'attente dépend du timing de l'ordre et du prix. Un ordre très proche du meilleur prix (juste en dedans) peut être exécuté avant un ordre au même prix mais plus ancien. Les traders calculent leur position optimale en fonction de la profondeur du carnet et de l'écart par rapport au meilleur prix.

**Impact sur le spread** : la priorité de file d'attente affecte la формирование du spread. Si la file d'attente au meilleur bid est longue, les nouveaux ordres doivent attendre pour être exécutés. Cela réduit l'incitation à passer des ordres à ce prix, ce qui peut influencer le niveau du spread.

## Nuances, critiques, limites

La priorité de file d'attente crée des incitations à investir dans la vitesse plutôt que dans l'information. La course à la latence pour être le premier dans la file consume des ressources sans créer de nouvelle information. Certains économistes arguent que cette course est un gaspillage social.

La priorité de file d'attente peut être exploitée par des stratégies de "layering" oÙ un trader place plusieurs ordres à différents niveaux pour занимать plusieurs positions dans les files. Si le prix se déplace, ces ordres peuvent être exécutés dans l'ordre, créant un profit.

La notion de "priorité" peut être différent selon le contexte. Dans les périodes de volatilité extrême, certains exchanges suspendent la priorité de file d'attente pour éviter les "[[Flash crash|flash crashes]]". La règle "first in, first out" (FIFO) peut être remplacée temporairement par un système de lots aléatoires.

## Liens et implications

La priorité de file d'attente est fondamentale pour les stratégies de [[Market making]]. Être le premier au meilleur prix est un avantage compétitif majeur. Les market makers investissent massivement pour réduire leur latence et être les premiers à placer des ordres au meilleur prix.

Les stratégies de "[[Ordre à cours limité]]" dépendent de la position dans la file. Un ordre passé trop tard au meilleur prix peut ne jamais être exécuté si la file est longue. Les traders doivent décider entre être plus agressifs (placer l'ordre plus proche du midpoint) pour être exécutés plus tôt ou rester au meilleur prix avec une position incertaine.

Le système de priorité affecte les "[[Frais maker vs taker|frais maker]]". Être un maker implique de placer des ordres en avance et d'attendre dans la file. La-prime de maker existe en partie pour compenser ce risque de ne pas être exécuté.

## Sources

[^1]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^2]: Jain, Prasanna, and John F. Muthuswamy. "Order Priority in Electronic Markets." *Journal of Financial Markets* 8 (2005): 257-277.
[^3]: Battalio, Robert, and Brian M. Roy. "Do Securities Markets have a Comparative Advantage in Processing Orders?" *University of Notre Dame* working paper, 2017.