---
titre: "Bear put spread"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/bear-put-spread, #concept/options, #concept/directional]
créé: 2026-04-21
liens_forts: ["[[Bull call spread]]", "[[Options strategies (basic)]]", "[[Counter-trend trading]]"]
liens_opposition: []
---

# Bear put spread

> [!info] Résumé
> Le bear put spread est une stratégie baissière qui combine l'achat d'un put et la vente d'un put à un strike inférieur. Cette structure permet de parier sur une baisse modérée avec un coût réduit et un risque limité.

## Définition

Le bear put spread est une stratégie d'options qui vise à profit d'une baisse modérée du prix du sous-jacent. La structure consiste à acheter un put à un strike supérieur et à vendre un put au même actif à un strike inférieur.

L'achat du put haut donne l'exposition baissière, mais la vente du put bas réduit le coût net. En échange, le profit potentiel est limité à la différence entre les deux strikes.

Si le prix descend en dessous du strike inférieur à l'expiration, les deux puts sont exercés et le profit est la différence entre les strikes moins la prime nette payée. Si le prix reste au-dessus du strike supérieur, les deux puts expirent sans valeur.

Le bear put spread est utilisé quand le trader est modérément baissier et ne veut pas payer le coût complet d'un put nu ou prendre le risque illimité d'un put nu.

## Contexte et origine

Le bear put spread est une stratégies documentée dans les mêmes manuels que le bull call spread, avec une التاريخrie aussi longue dans l'utilisation des options.

La stratégie a été utilisée par les traders baissiers pour expresses une vue négative sur un actif avec un capital réduit et un risque défini.

En crypto, le bear put spread est pertinent pour les périodes de tendance baissière modérée ou de consolidation baissière. Il permet de profitter d'une baisse sans risquer plus que la prime payée.

## Mécanismes et caractéristiques

La construction requiert deux jambes : achat d'un put ATM ou légèrement ITM au strike K1, vente d'un put OTM au strike K2 < K1. Le coût net est la prime du put acheté moins la prime du put vendu.

Le profit maximum est K1 - K2 - prime nette payée. Ce profit est atteint si le prix est en dessous de K2 à l'expiration. La perte maximale est la prime nette payée.

Le breakeven est K1 moins la prime nette payée. Pour que la position soit profitable, le prix doit descendre en dessous de ce niveau.

Le bear put spread a un delta négatif mais limité. Le gamma est faible car les deux puts ont des strikes différents. Le theta est généralement légèrement positif ou négatif selon les strikes.

## Nuances, critiques, limites

Le profit potentiel limité peut être une limitation si le prix fait un mouvement baissier extrême. Un bear put spread avec des strikes à 10% ne capture qu'une partie d'une baisse de 30%.

La volatilité implicite élevée augmente le coût des deux puts, réduisant l'attractivité de la stratégie. Un bear put spread en période de faible volatilité est plus susceptible d'être rentable.

Le timing est crucial. Si le mouvement baissier ne se produit pas avant l'expiration, la position expire sans valeur.

## Liens et implications

Le [[bear put spread]] est la version baissière du [[bull call spread]], utilisant des puts au lieu de calls. Les deux stratégies partagent la même logique de spreads.

Les [[options strategies (basic)]] montrent comment le spread s'intègre dans les stratégies directionnelles. Le [[counter-trend trading]] est le contexte natural pour utiliser un bear put spread.

Le [[backtesting]] permet de valider le timing et les paramètres. Le [[drawdown]] maximum est limité à la prime payée.


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
[^2]: Investopedia, "Bear Put Spread", https://www.investopedia.com (consulted 2026)
