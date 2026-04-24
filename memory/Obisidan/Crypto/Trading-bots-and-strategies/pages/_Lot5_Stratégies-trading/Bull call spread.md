---
titre: "Bull call spread"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/bull-call-spread, #concept/options, #concept/directional]
créé: 2026-04-21
liens_forts: ["[[Bear put spread]]", "[[Options strategies (basic)]]", "[[Trend trading]]"]
liens_opposition: []
---

# Bull call spread

> [!info] Résumé
> Le bull call spread est une stratégie haussière qui combine l'achat d'un call et la vente d'un call à un strike supérieur. Cette approche réduit le coût net tout en limitant le profit potentiel à la différence entre les strikes.

## Définition

Le bull call spread est une stratégie d'options qui vise à profit d'une hausse modérée du prix du sous-jacent. La structure consiste à acheter un call à un strike inférieur et à vendre un call au même actif à un strike supérieur.

L'achat du call bas donne l'exposition haussière, mais la vente du call haut réduit le coût net de la prime. En échange, le profit potentiel est limité à la différence entre les deux strikes.

Si le prix monte au-dessus du strike supérieur à l'expiration, les deux calls sont exercés et le profit est la différence entre les strikes moins la prime nette payée. Si le prix reste en dessous du strike inférieur, les deux calls expirent sans valeur et la perte est la prime nette.

Le bull call spread est une alternative au call nu pour les traders qui veulent exprimer une vue haussière mais avec un coût réduit et un risque limité.

## Contexte et origine

Le bull call spread est une stratégies classique documentée dans les manuels d'options depuis les années 1970. Elle a été utilisée par les traders pour exprimer des vues haussières avec un capital réduit.

La stratégie a été popularisée par les éducatifs matériels des plateformes d'options et est maintenant couramment enseignée dans les cours de trading d'options.

En crypto, le bull call spread est utilisé pour exprimer une vue haussière sur BTC ou ETH avec un coût inférieur à l'achat d'un call nu, particulièrement quand la volatilité implicite est élevée.

## Mécanismes et caractéristiques

La construction requiert deux jambes : achat d'un call ATM ou légèrement ITM au strike K1, vente d'un call OTM au strike K2 > K1. Le coût net est la prime du call acheté moins la prime du call vendu.

Le profit maximum est K2 - K1 - prime nette payée. Ce profit est atteint si le prix est au-dessus de K2 à l'expiration. La perte maximale est la prime nette payée.

Le breakeven est K1 plus la prime nette payée. Pour que la position soit profitable, le prix doit monter au-dessus de ce niveau.

Le bull call spread a un delta positif mais limité. Le gamma est faible car les deux calls ont des strikes différents. Le theta est généralement légèrement négatif car le call acheté a plus de theta que le call vendu.

## Nuances, critiques, limites

Le profit potentiel limité peut être une limitation en marché très haussier. Si BTC double de prix, un bull call spread avec des strikes à 10% ne capture qu'une partie de cette hausse.

La volatilité implicite élevée augmente le coût des deux calls, rendant la stratégie moins attractive. Un bull call spread en période de faible volatilité est plus susceptible d'être rentable.

Le timing est important. Si le mouvement haussier ne se produit pas avant l'expiration, la position expire sans valeur et la prime est perdue.

## Liens et implications

Le [[bull call spread]] est la version haussière du [[bear put spread]] qui est baissier. Les deux stratégies partagent la même structure mais avec des puts plutôt que des calls.

Les [[options strategies (basic)]] montrent comment le spread s'intègre dans les stratégies directionnelles. Le [[trend trading]] est le contexte natural pour utiliser un bull call spread.

Le [[backtesting]] permet de valider le timing et les paramètres du spread. Le [[drawdown]] maximum est limité à la prime payée.


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
[^2]: CBOE, "Options Strategies", https://www.cboe.com (consulted 2026)
