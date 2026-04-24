---
titre: "Market timing"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/timing, #stratégie, #microstructure]
créé: 2026-04-21
liens_forts: ["[[Découverte du prix]]", "[[Impact de marché]]", "[[Volatilité]]", "[[Liquidité]]", "[[Ordre book dynamics]]", "[[Stratégie de momentum]]", "[[Arbitrage]]"]
liens_opposition: []
---

# Market timing

> [!info] Résumé
> Le market timing désigne la capacité à exécuter des ordres à des moments optimaux pour bénéficier de conditions de marché favorables. Il repose sur l'hypothèse que les prix n'incorporent pas l'information instantanément et que des stratégies de timing peuvent générer de l'alpha.

## Définition

Le market timing est la pratique de gérer le moment d'exécution des ordres pour optimiser le prix d'exécution. L'objectif est d'exécuter quand les conditions sont les plus favorables (liquidité élevée, volatilité faible, impact minimal) et d'éviter les périodes défavorables (liquidité basse, volatilité élevée, risque de manipulation).

Le timing repose sur l'observation que les marchés ne sont pas parfaitement efficients. L'information prend du temps à être incorporée dans les prix. Les conditions de liquidité varient dans le temps. Le timing vise à exploiter ces variations pour améliorer la qualité d'exécution ou générer de l'alpha.

Le market timing est distinct du directional betting. On peut avoir une opinion baissière sur le marché et choisir de vendre à un moment oÙ la liquidité est favorable plutôt qu'immédiatement. Le timing ne présume pas de la direction du trade mais de la qualité de l'exécution.

## Contexte et origine

Le market timing en tant que concept émerge avec l'étude des anomalies de marché. Les researchers ont identifié que les prix n'incorporent pas l'information instantanément, créant des windows d'opportunité pour ceux qui peuvent identifier ces délais. Les travaux de Treynor et Black (1973) sur le timing sont foundational.

Le timing est particulièrement important dans les marchés crypto où la volatilité est élevée et les conditions de liquidité changent rapidement. Les stratégies de timing en crypto doivent être plus agiles que dans les marchés actions traditionnels.

Le "[[Flash crash]]" de mars 2020 sur le BTC a montré l'importance du timing : les traders qui ont vendu pendant le crash ont subi un slippage énorme, tandis que ceux qui ont attendu la récupération ont pu exécuter à des prix bien meilleurs.

## Mécanismes / caractéristiques / détails

**Timing basé sur la liquidité** : l'objectif est d'exécuter quand la liquidité est la plus abondante pour minimiser l'impact. Les périodes de forte liquidité (session de jour aux États-Unis ou en Europe) sont généralement préférables pour les gros ordres. Les périodes de faible liquidité (nuit, weekends) sont à éviter.

**Timing basé sur la volatilité** : la volatilité affecte le risque de slippage et d'impact. Les stratégies de timing évitent les périodes de volatilité extrême oÙ les mouvements de prix sont imprévisibles. Le [[Risk-reward ratio]] est moins favorable en période de haute volatilité.

**Timing basé sur le flux d'ordres** : l'observation du [[Ordre book dynamics|flux d'ordres]] et du déséquilibre du carnet peut indiquer des moments propices ou défavorables. Un carnet très déséquilibré peut indiquer une pression directionnelle imminente.

**Timing événementiel** : les événements macro (annonces économiques, decisions de politique monétaire) créent des windows de volatilité accrue. Les stratégies de timing peuvent éviter ces périodes ou, inversement, les exploiter si elles ont un avantage informationnel.

**Timing et impact** : le market timing est intimement lié à l'[[Impact de marché]]. Un ordre exécuté au mauvais moment subit un impact plus grand. Le timing optimal minimise l'impact en choisissant les moments où la profondeur est maximale.

## Nuances, critiques, limites

Le market timing suppose une forme d'inéfficience des marchés. Si les marchés étaient parfaitement efficients, le timing n'ajouterait pas de valeur. Cette hypothèse est débattue : certains arguent que les inefficiencies sont trop petites pour couvrir les coûts de timing.

Le timing peut être self-defeating. Si une stratégie de timing devient connue, les autres participants adoptent le même timing, éliminant l'avantage. Le timing doit être constamment évoluer pour rester profitable.

Le timing n'est pas gratuit. Attendre le bon moment implique de maintenir une position plus longtemps, ce qui encourt un risque de marché et un coût d'opportunité. Le bénéfice du timing doit compenser ces coûts.

## Liens et implications

Le market timing est une composante du "[[Best execution]]". Trouver le meilleur moment pour exécuter un ordre fait partie de l'obligation de best execution pour les brokers.

Les stratégies de [[Stratégie de momentum]] utilisent le timing pour entrer dans les mouvements directionnels au bon moment. Le timing permet de réduire le slippage et d'améliorer le entry price.

L'[[Impact de marché]] est directement affectée par le timing. Un ordre exécuté au mauvais moment (liquidité basse) a un impact plus grand. Le timing optimal minimise cet impact.

## Sources

[^1]: Treynor, Jack, and Fischer Black. "How to Use Security Analysis to Improve Portfolio Selection." *Journal of Business* 46 (1973): 66-86.
[^2]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^3]: Hasbrouck, Joel. *Empirical Market Microstructure*. Oxford University Press, 2007.