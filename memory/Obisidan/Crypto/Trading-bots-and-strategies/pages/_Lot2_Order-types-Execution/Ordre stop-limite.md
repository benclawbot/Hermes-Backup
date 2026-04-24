---
titre: "Ordre stop-limite"
type: terme
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/ordre, #méthode/exécution, #gestion/risque]
créé: 2026-04-21
liens_forts: ["[[Ordre stop-loss]]", "[[Ordre à cours limité]]", "[[Ordre au marché]]", "[[Slippage]]", "[[Gestion du risque]]"]
liens_opposition: []
---

# Ordre stop-limite

> [!info] Résumé
> Un ordre stop-limite combine un prix de déclenchement et un prix limite : une fois déclenché, l'ordre se transforme en ordre limité (et non au marché), offrant un contrôle du prix d'exécution au prix d'un risque de non-exécution.

## Définition

L'ordre stop-limite (stop-limit order) est une variante de l'ordre stop-loss où le prix de déclenchement et le prix limite sont séparés. Quand le prix de marché atteint le prix de déclenchement (stop price), l'ordre devient un [[Ordre à cours limité]] au prix limite spécifié — et non un ordre au marché. Cela signifie que l'ordre ne s'exécutera qu'à ce prix précis ou mieux, mais pas en dessous.

La distinction avec un stop-loss classique (qui devient ordre au marché) est fondamentale. Le stop-limite protège contre le slippage excessif en fixant un prix maximum d'achat ou minimum de vente, mais il introduit un nouveau risque : si le marché traverse le prix de déclenchement sans se stabiliser à un niveau exécutable, l'ordre peut ne jamais être exécuté.

Sur la plupart des exchanges crypto (Binance, Kraken, Coinbase), la syntaxe courante est "stop-price → limit-price". Le stop-price déclenche la conversion ; le limit-price est le prix de l'ordre limité qui en résulte.

## Contexte et origine

Les ordres stop-limite sont une extension naturelle des[[Ordre stop-loss]] basiques, apparue avec les premières plateformes de trading électroniques dans les années 1990. La possibilité de contrôler le prix d'exécution exact, et pas seulement le prix de déclenchement, répond à un besoin de précision des traders institutionnels.

Dans le contexte du [[Trading algorithmique]] et du [[Trading bot]] modernes, le stop-limite est une primitive essentielle. Il permet de construire des stratégies de sortie sophistiquées où le prix minimum acceptable est défini, éliminant le worst-case scenario d'un slippage extrême tout en gardant la certitude relative du déclenchement.

Pour les marchés crypto, le stop-limite est particulièrement pertinent sur les actifs à forte volatilité et faible liquidité où le [[Slippage]] peut être  pour cent sur un ordre au marché. Définir un prix limite protège contre ce coût additif.

## Mécanismes / caractéristiques / détails

**Prix de déclenchement vs prix limite** : le prix de déclenchement (stop price) est le niveau qui active l'ordre. Le prix limite (limit price) est le prix de l'ordre limité resultante. Si le prix du marché est à 100 USD, un stop-limite d'achat peut être configure avec stop-price = 105 USD et limit-price = 106 USD. Quand le marché atteint 105, l'ordre devient un ordre d'achat limité à 106 maximum. Si le marché ouvre à 108 (gap), l'ordre ne sera pas exécuté car 108 > 106.

**Risque de non-exécution (fill failure)** : c'est le risque majeur du stop-limite. Si le marché a un gap au-delà du prix limite, l'ordre reste non exécuté même si le prix a "traversé" le niveau souhaité.

**Ordre stop-limite d'achat vs de vente** : pour une position longue avec prix d'entrée à 100 USD, un take-profit serait un stop-limite de vente avec stop-price = 120 USD et limit-price = 119 USD (vendre si le prix monte à 120, mais pas en dessous de 119). Un stop-loss serait configure avec stop-price = 90 USD et limit-price = 89 USD (stop si le prix tombe à 90, mais vendre au minimum à 89).

**Relation avec l'[[Order book dynamics|Carnet d'ordres]]** : au déclenchement, l'ordre stop-limite s'injecte dans le carnet comme un ordre limite standard. Il a donc une priorité par prix puis par temps (time priority). S'il y a plusieurs ordres en attente au même prix, le plus ancien est execute en premier. Cela peut créer un délai entre le déclenchement et l'exécution effective.

**Comparaison avec le stop-market** : le stop-market devient ordre au marché au déclenchement — exécution garantie mais prix incertain. Le stop-limite devient ordre limite — prix certain mais exécution incertaine. Le choix dépend du contexte : volatilité, liquidité, urgence de la sortie.

## Nuances, critiques, limites

**Gap risk (risque de gap)** : le principal écueil du stop-limite est le risque de gap. En mars 2020, Bitcoin est passé de 9 000 USD à 5 500 USD en quelques heures sans passer par 7 000 USD. Un stop-limite à 7 500 USD n'aurait pas été exécuté — le prix a gap au-delà. Un stop-market aurait été exécuté, probablement avec un slippage significatif. Il n'y a pas de solution parfaite : le gap est un aléa fondamental des marchés.

**Prix limite trop proche du stop** : si le limit-price est trop proche du stop-price (par exemple stop = 100, limite = 99 pour un stop de vente), la fourchette entre les deux peut être inférieure au spread bid-ask, rend l'exécution difficile. Il faut toujours une cushion entre stop et limite pour absorber le spread.

**Complexité de paramétrage** : le stop-limite ajoute un paramètre supplémentaire par rapport au stop-market, ce qui complicate le design des [[Trading bot|stratégies de bots]]. Le calibrage du limit-price optimal requiert une analyse de la [[Liquidité]] locale et de la volatilité historique.

## Liens et implications

Le stop-limite est un composant fondamental de la structure [[OCO (One-Cancels-Other)]] où take-profit et stop-loss sont généralement tous deux des stop-limites pour garder le contrôle du prix d'exécution en cas de déclenchement.

Dans les stratégies de [[Gestion du risque]] automation, le stop-limite est préféré pour les positions importantes où le slippage de plusieurs pour cent représente une somme significative. Pour une position de 100 000 USD, un slippage de 1 % = 1 000 USD — le prix de ce petit assurance vaux souvent le risque de non-exécution.

L'[[Analyse technique pour bots]] utilise les niveaux de support et resistance comme prix de déclenchement naturels pour les stop-limites. Un stop de vente sous un support à 95 USD avec un limit-price à 94 USD offre une bonne protection contre un breach du support.

## Sources

[^1]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^2]: Hasbrouck, Joel. *Empirical Market Microstructure*. Oxford University Press, 2007.
[^3]: SEC — Limit Order Book and Stop Orders. https://www.sec.gov/
