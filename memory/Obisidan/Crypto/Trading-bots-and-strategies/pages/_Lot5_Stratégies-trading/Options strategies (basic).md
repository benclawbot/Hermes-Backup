---
titre: "Options strategies (basic)"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/options, #concept/derivatives, #concept/calls-puts]
créé: 2026-04-21
liens_forts: ["[[Options Greeks basics]]", "[[Straddle and strangle]]", "[[Iron condor]]"]
liens_opposition: []
---

# Options strategies (basic)

> [!info] Résumé
> Les stratégies d'options de base utilisent les calls et puts pour exprimer des vues sur la direction, la volatilité, ou le temps. Comprendre les combinaissions de base est essentiel avant d'aborder des stratégies plus complexes.

## Définition

Une option est un dérivé qui donne le droit d'acheter (call) ou de vendre (put) un actif sous-jacent à un prix prédéterminé (strike) avant une date d'expiration. Le prix payé pour acheter ce droit est la prime.

Un call augmente de valeur quand le prix du sous-jacent monte. Un put augmente de valeur quand le prix du sous-jacent baisse. Ces instruments permettent de spéculer sur la direction avec un effet de levier.

Les quatre opérations de base sont : acheter un call (bullish), vendre un call (bearish sans posséder le sous-jacent), acheter un put (bearish), vendre un put (neutral à bullish modéré). Chaque position a un profil de risque particulier.

La combinaison de ces positions de base permet de créer des stratégies avec des profils de risque/rendement très spécifiques.

## Contexte et origine

Les options existent depuis l'Antiquité. Les marchands grecs utilisaient des contrats optionnels sur les cargaisons. Les options modernes sur actions ont été institutionnalisées au XIXe siècle.

Le marché des options a été formalisé en 1973 quand le CBOE a lancé le premier marché d'options listées. Le modèle de Black-Scholes pour le pricing des options a été développé la même année.

En crypto, les options sont devenues disponibles sur certaines plateformes comme Deribit, LedgerX, et Bakkt. L'écosystème des options crypto est moins développé que sur les marchés traditionnels mais croît rapidement.

## Mécanismes et caractéristiques

Le call donne le droit d'acheter à un prix fixe (strike). Si le prix du sous-jacent est au-dessus du strike à l'expiration, le call vaut la différence. Si le prix est en dessous, le call expire sans valeur (mais la prime est perdue).

Le put donne le droit de vendre à un prix fixe. Si le prix du sous-jacent est en dessous du strike à l'expiration, le put vaut la différence. Si le prix est au-dessus, le put expire sans valeur.

La prime d'une option dépend de plusieurs facteurs : le prix actuel du sous-jacent, le strike, le temps jusqu'à l'expiration, et la volatilité implicite. Ces facteurs sont captés par les [[options greeks basics|Greeks]] (delta, gamma, theta, vega).

Les stratégies combinées utilisent plusieurs options pour créer des profils de payoff spécifiques. Par exemple, un investisseur qui veut être protecteur peut combine un long put avec un long call pour créer un straddle.

## Nuances, critiques, limites

La principale limite des options est la complexité. Les profils de augmentation peuvent être difficile à comprendre, surtout pour les stratégies qui impliquent plusieurs jambes.

Le temps est l'ennemi de l'acheteur d'options. La décroissance temporelle (theta) fait que la prime diminue à mesure que l'expiration approche. Les options sont des actifs consomptibles.

La volatilité est un facteur majeur souvent sous-estimé. Une position peut être perdante même si la direction du trade est correcte si la volatilité change de manière défavorable.

## Liens et implications

Les [[options strategies (basic)]] sont les fondements pour des stratégies plus avancées comme l'[[iron condor]] et le [[straddle and strangle]]. La compréhension des [[options greeks basics]] est essentielle.

La [[gestion du risque]] avec les options requiert une compréhension précise des Greeks. Le [[drawdown]] maximum est limité à la prime payée pour les achats d'options.

Le [[backtesting]] des stratégies d'options est complexe car il faut simuler la chaîne complète des prix du sous-jacent. Le [[Sharpe ratio]] ajusté pour les options doit tenir compte de la nature asymétrique des rendements.


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
[^2]: CBOE, "Options Basics", https://www.cboe.com (consulted 2026)
