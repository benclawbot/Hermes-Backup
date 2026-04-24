---
titre: "TWAP (Time-Weighted Average Price)"
type: terme
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/ordre, #méthode/exécution, #trading/avancé]
créé: 2026-04-21
liens_forts: ["[[Exécution VWAP]]", "[[Ordre iceberg]]", "[[Order book dynamics]]", "[[Impact de marché]]", "[[Ordre au marché]]"]
liens_opposition: []
---

# TWAP (Time-Weighted Average Price)

> [!info] Résumé
> Le TWAP est une stratégie d'exécution qui divise un ordre de grande taille en petites tranches réparties uniformément sur une période donnée, afin d'obtenir un prix moyen d'exécution proche du prix moyen du marché sur cette période.

## Définition

Le TWAP (Time-Weighted Average Price) est un algorithme d'exécution qui fractionne un ordre important en multiples petits ordres distribués régulièrement dans le temps. L'objectif est d'obtenir un prix d'exécution qui reflète le prix moyen du marché sur la période, plutôt que le prix à un instant donné. C'est un benchmark d'exécution autant qu'une stratégie de minimisation de l'[[Impact de marché]].

Le TWAP est particulièrement utile lorsqu'un trader doit exécuter un gros ordre sur un actif avec une [[Liquidité]] modérée, où un ordre unique de grande taille causerait un glissement de prix significatif (market impact). En étalant l'exécution, le TWAP réduit la signalisation directionnelle envoyée au marché.

La formule du TWAP est simple : c'est la moyenne des prix d'exécution pondérés par le temps passé à chaque niveau de prix, divisée par le temps total. En pratique, les algorithmes divisent la période totale en intervalles réguliers et placent des ordres de taille égale à chaque intervalle.

## Contexte et origine

Le TWAP émerge dans les années 1990 comme benchmark pour l'exécution institutionnelle, en parallèle avec le [[Exécution VWAP|VWAP]] qui pondère les prix par le volume échangé. Les desks d'exécution algorithmique des banques d'investissement développent ces algorithmes pour fournir à leurs clients institutionnels une exécution prévisible et mesurable.

Dans l'écosystème crypto, le TWAP est disponible sur les plateformes de trading algorithmique comme [[3Commas]] et [[Bitsgap]] sous forme de "bot DCA" ou d'ordres planifiés. Les échanges qui proposent des [[API d'échange]] avancées offrent également des endpoints TWAP natifs, ou les traders peuvent implémenter leur propre algorithme TWAP via l'API standard.

Le TWAP est souvent comparé au VWAP : le TWAP est préférable quand le volume échangé n'est pas un bon indicateur de liquidité (par exemple sur des marchés avec des périodes de forte ou faible activité non corrélées au volume), tandis que le VWAP s'adapte mieux quand le volume est un proxy fiable de la liquidité disponible.

## Mécanismes / caractéristiques / détails

**Division temporelle** : un ordre de 100 BTC à exécuter sur 10 heures sera divisé en, disons, 20 tranches de 5 BTC, une toutes les 30 minutes. L'heure et la taille des tranches peuvent être fixes ou s'adapter selon la volatilité du marché. L'algorithme recalcule la taille optimale de chaque tranche en fonction du temps restant et du prix moyen observé jusqu'alors.

**Benchmark et mesure de performance** : le TWAP sert de benchmark pour évaluer si l'exécution a été meilleure ou pire que la moyenne du marché. Si le prix moyen d'exécution est inférieur au TWAP, l'exécution est considérée comme "bonne" (côté achat) ; s'il est supérieur, l'exécution est moins bonne. Cette mesure est appelée "Implementation Shortfall" ou "arrival price comparison".

**Interaction avec l'[[Order book dynamics|Carnet d'ordres]]** : à chaque intervalle, l'algorithme TWAP place un ordre — généralement un [[Ordre au marché]] pour la tranche, ou un [[Ordre à cours limité]] si l'algorithme vise à être maker. L'impact sur le carnet dépend du type d'ordre émis et de la liquidité disponible à ce moment.

**Adaptation dynamique** : les implémentations TWAP modernes incluent des mécanismes d'adaptation. Si le prix s'écarte significativement du calendrier TWAP, l'algorithme peut accélérer ou ralentir l'exécution pour lisser l'impact. Si la volatilité augmente, les intervalles peuvent être réduits pour exécuter plus rapidement avant que le marché ne bouge trop.

**Limites de liquidité** : si la liquidité disponible est insuffisante pour exécuter la taille de tranche prévue, l'algorithme peut émettre un [[Ordre iceberg]] pour la portion non exécutée, ou attendre le prochain intervalle avec une taille réduite. La non-exécution est un risque à gérer dans la conception de l'algorithme.

## Nuances, critiques, limites

**Vulnérabilité aux patterns temporels** : le TWAP schedule est prévisible par définition — si un acteur connaît l'algorithme, il peut anticiper les moments où les ordres seront placés et ajuster ses propres ordres en conséquence. C'est une forme de "gaming" du TWAP. Les implémentations les plus sophistiquées incluent une composante aléatoire dans les horaires d'exécution pour réduire cette prévisibilité.

**Comparaison avec VWAP** : le TWAP ne prend pas en compte le volume comme le VWAP. Si le marché est très liquide pendant certaines périodes et peu liquide pendant d'autres, le TWAP pourrait exécuter pendant les périodes de faible liquidité là où le VWAP exécuterait pendant les périodes de forte liquidité. Le choix entre TWAP et VWAP dépend de la structure du marché.

**Impact de signal** : même étalé dans le temps, un TWAP de grande taille émet une signalisation directionnelle progressive. Les acteurs observant le flux d'ordres peuvent déduire la direction du trade et adapter leur comportement, aggravant l'[[Impact de marché]].

**Coût d'opportunité (opportunity cost)** : si le prix évolue défavorablement pendant la période d'exécution, le TWAP réalise une mauvaise exécution en moyenne. Il n'y a pas de mécanisme de protection contre un marché qui drift contre la position pendant l'exécution.

## Liens et implications

Le TWAP est une brique fondamentale de l'exécution algorithmique, au même titre que le [[Exécution VWAP|VWAP]] et l'[[Ordre iceberg]]. Les stratégies de [[Trading algorithmique]] qui requièrent l'exécution de gros ordres (comme l'[[Arbitrage]] inter-marché ou les stratégies de [[Market making]] sur plusieurs exchanges) utilisent ces algorithmes pour minimiser les coûts.

Dans le [[Backtesting]], il est crucial de simuler l'exécution avec des hypothèses réalistes de slippage et d'impact. Un backtest qui suppose une exécution instantanée au prix du marché surestime systématiquement les performances pour les stratégies à forte rotation ou forte taille de position.

Le TWAP est aussi utilisé comme méthode d'entrée progressive dans les stratégies de [[Bot DCA]] ou de [[Grid trading]], où le but est d'accumuler une position sur plusieurs niveaux de prix plutôt que d'entrer d'un seul coup.

## Sources

[^1]: Almgren, Robert, and Neil Chriss. "Optimal execution of portfolio transactions." *Journal of Risk* 3 (2000): 5-39.
[^2]: Kissell, Robert. *The Science of Algorithmic Trading and Portfolio Management*. Academic Press, 2013.
[^3]: Documentation FTX (historique) et exchanges crypto actuels — APIs d'exécution algorithmique.