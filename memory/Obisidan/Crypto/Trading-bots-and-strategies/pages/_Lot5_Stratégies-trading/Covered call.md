---
titre: "Covered call"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/covered-call, #concept/options, #concept/income]
créé: 2026-04-21
liens_forts: ["[[Protective put]]", "[[Options strategies (basic)]]", "[[Position trading]]"]
liens_opposition: []
---

# Covered call

> [!info] Résumé
> Le covered call est une stratégie qui génère un revenu en vendant des calls sur un actif déjà détenu. Le trader échange un potentiel de gain illimité contre une prime, acceptant de vendre l'actif si le prix dépasse le strike.

## Définition

Le covered call est une stratégie qui consiste à détenir une position longue sur un actif et à vendre des calls sur cet actif. La vente du call génère une prime qui constitue un revenu. En échange, le trader accepte de vendre l'actif au prix strike si le call est exercé.

Si le prix de l'actif reste en dessous du strike à l'expiration, le call expire sans valeur et le trader garde la prime. C'est un scénario favorable où le trader a généré un revenu sans coût.

Si le prix monte au-dessus du strike, le call est exercé et le trader doit livrer l'actif au prix strike. Le trader participe à la hausse jusqu'au strike, mais pas au-delà. La prime reçue augmente le rendement effectif.

Le covered call est une stratégie de "yield enhancement" : elle augmente le rendement de la position longue en échange de la limitation du potentiel de hausse.

## Contexte et origine

Le covered call est l'une des stratégies d'options les plus anciennes et les plus utilisées. Elle a été popularisée par les investisseurs en actions qui voulaient générer un revenu supplémentaire sur leurs positions actions.

Les gérances de fonds ont utilisé le covered call comme source de revenus pendant les périodes de faible volatilité. Cette stratégie est à la base de nombreux fonds covered call comme ceux sur le CBOE.

En crypto, le covered call est particulièrement pertinent pour les détenteurs de BTC ou ETH qui veulent générer un revenu supplémentaire sans vendre leur position. C'est une forme de "yield farming" sur des actifs déjà possédés.

## Mécanismes et caractéristiques

La construction est simple : détenir au moins 100 actions (ou équivalent en crypto) et vendre un call pour chaque 100 actions détenues. La position est "covered" car les actions détenues couvrent l'obligation de livraison si le call est exercé.

Le choix du strike dépend de la vue du trader. Un strike proche du prix actuel génère une prime plus élevée mais laisse moins de room pour la hausse. Un strike plus éloigné génère moins de prime mais permet plus de hausse.

La expiration du call affecte aussi la prime. Une expiration plus lointaine génère plus de prime mais exige de attendre plus longtemps pour closing la position.

Le risk/récompense est limité. Le profit maximum est la prime reçue plus la différence entre le prix actuel et le strike (si le call est exercé). La perte maximum est la baisse du prix de l'actif.

## Nuances, critiques, limites

La principale limite est le potentiel de gain illimité sacrifié. Si l'actif fait un mouvement majeur à la hausse, le trader ne participe pas car il doit vendre au strike.

Le risque de baisse reste entier. Le covered call ne protège pas contre la baisse du prix de l'actif. La prime reçue réduit le coût de la baisse mais ne l'élimine pas.

En marché haussier, le covered call underperforme la position longue nue. Le trader aurait été mieux lot en ne vendant pas le call et en détenant simplement l'actif.

## Liens et implications

Le [[covered call]] est une stratégie complémentaire du [[protective put]] qui protège contre la baisse. Les deux stratégies modifient le profil de risque/rendement de la position longue nue.

Les [[options strategies (basic)]] montrent comment le covered call s'intègre dans l'univers des stratégies d'options. Le [[position trading]] est le contexte natural pour cette stratégie.

La [[gestion du risque]] doit inclure des considerations sur le strike et l'expiration. Le [[drawdown]] peut être significatif si le prix baisse significativement.


## Points clés à retenir

- L'application de cette stratégie requiert une discipline de fer et une execution rigoureuse
- Les parameters doivent être ajustés en fonction de la volatilité du marché et de la liquidité disponible
- Le suivi régulier des performances permet d'identifier les éventuelles dérives

- L'analyse technique constitue un outil essentiel pour identifier les configurations propices
- Legestion du risque doit être adapté à la volatilité du marché concerned
- Les conditions de marché évoluent constamment et exigent une adaptation des paramètres

- Cette stratégie nécessite une gestion rigoureuse du risque et du money management
- Le backtesting sur des données historiques est essentiel pour valider les paramètres
- La psychologie trading joue un rôle crucial dans l'application de cette stratégie
## Sources

[^1]: McMillan, "Options as a Strategic Investment", 2012
[^2]: Investopedia, "Covered Call", https://www.investopedia.com (consulted 2026)
