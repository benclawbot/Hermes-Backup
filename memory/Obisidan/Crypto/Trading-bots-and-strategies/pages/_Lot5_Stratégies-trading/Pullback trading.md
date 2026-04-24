---
titre: "Pullback trading"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/pullback, #concept/retracement, #concept/trend]
créé: 2026-04-21
liens_forts: ["[[Trend trading]]", "[[Breakout trading]]", "[[Stratégie de momentum]]"]
liens_opposition: ["[[Counter-trend trading]]"]
---

# Pullback trading

> [!info] Résumé
> Le pullback trading consiste à acheter lors de reculs temporaires du prix dans une tendance haussière établie, ou à vendre lors de rebonds temporaires dans une tendance baissière. L'idée est de entrer à meilleur prix dans une tendance dont la direction est déjà confirmée.

## Définition

Le pullback trading est une stratégie qui exploite les mouvements de recul temporaire (pullbacks) ou de rebond temporaire (throwbacks) qui se produisent dans une tendance de prix établie. Un pullback est un recul du prix qui ne remet pas en cause la tendance principale, tandis qu'un throwback est un rebond temporaire dans une tendance baissière.

La logique du pullback trading repose sur le fait que les tendances ne progressent pas en ligne droite. Elles font des pauses, des consolidations, des reculs partiels avant de continuer dans leur direction. Ces reculs offrent des points d'entrée à meilleur prix que si on avait entré au début de la tendance.

En tendance haussière, un pullback ramène le prix vers un niveau de support, une moyenne mobile, ou un ancien point haut. En tendance baissière, un rebond ramène le prix vers une résistance ou une moyenne mobile. Le trader entre dans la direction de la tendance pendant ces pullbacks.

## Contexte et origine

Le pullback trading est une extension naturelle du trend following. Les premiers textes sur l'analyse technique, notamment les travaux de Charles Dow et ses successors, reconnaissaient déjà que les tendances majeures connaissent des corrections intermédiaires avant de se poursuivre.

Les méthodes pour identifier les pullbacks incluent les retracements de Fibonacci (le prix recule de 38,2%, 50% ou 61,8% du mouvement précédent), les niveaux de support dynamiques comme les moyennes mobiles, et les figures chartistes comme les drapeaux et fanions.

Stanley Dash et d'autres praticiens ont popularisé l'approche au cours des décennies suivantes, en développant des règles spécifiques pour distinguer un pullback saludable d'un renversement de tendance. Le pullback trading a été adopté par les traders algorithmiques pour automatiser ces entrées.

## Mécanismes et caractéristiques

L'identification d'un pullback nécessite d'abord de confirmer une tendance établie. Cela peut se faire via le [[multi timeframe analysis]] : une tendance haussière sur le daily avec un pullback sur le hourly offre une configuration propice.

Les niveaux de pullback les plus fréquents sont les retracements de Fibonacci (voir [[Fibonacci retracement]]), les moyennes mobiles (voir [[Moving average crossover]]), et les niveaux de support précédents qui deviennent résistance (ou inversement).

Le [[Risk-reward ratio]] en pullback trading est favorable car le stop-loss peut être placé près du point bas du pullback tout en visant un take-profit près du haut précédent. Typiquement, les traders visent des ratios de 1:2 ou 1:3.

Le volume est un élément clé pour confirmer la nature d'un pullback. Un pullback qui se fait sur un volume décroissant est plus susceptible d'être une simple correction que un renversement. À l'inverse, un volume croissant pendant le pullback peut indiquer un affaiblissement de la tendance.

## Nuances, critiques, limites

Le défi principal du pullback trading est de distinguer un pullback d'un véritable renversement de tendance. Un renversement peut ressembler à un pullback jusqu'au moment où il continue au-delà du niveau de support ou de résistance clé.

Les tendances fortes offrent peu de pullbacks profonds, ce qui peut rendre la stratégie frustrante. Dans un marché comme crypto avec des tendances prononcées, les pullbacks sont souvent superficiels et difficiles à capturer avec des entrées précises.

La gestion du timing est cruciale. Entrer trop tôt dans un pullback qui n'a pas encore fini peut conduire à des pertes. Entrer trop tard, après la reprise, réduit significativement le potentiel de gain.

## Liens et implications

Le [[pullback trading]] est une stratégie complémentaire au [[breakout trading]]. Le breakout trader entre quand le prix sort du range, tandis que le pullback trader entre pendant les reculs de la tendance qui suit le breakout.

Le [[trend trading]] englobe le pullback trading comme une de ses déclinaisons. Le [[momentum trading]] partage la même logique de suivi de tendance mais avec des indicateurs différents.

Le [[Risk-reward ratio]] et la [[gestion du risque]] sont des composantes essentielles pour rendre le pullback trading profitable. Le [[backtesting]] permet de valider les paramètres de la stratégie.

## Sources

[^1]: Alexander Elder, "Trading for a Living", 1993
[^2]: Investopedia, "Pullback", https://www.investopedia.com/terms/p/pullback.asp (consulted 2026)
