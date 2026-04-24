---
titre: "Iron condor"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/iron-condor, #concept/options, #concept/volatility-trading]
créé: 2026-04-21
liens_forts: ["[[Straddle and strangle]]", "[[Options strategies (basic)]]", "[[Volatility trading]]"]
liens_opposition: []
---

# Iron condor

> [!info] Résumé
> L'Iron condor est une stratégie d'options qui génère un profit quand la volatilité reste faible. La structure combine un put spread baissier et un call spread haussier, créant un canal de profit où le prix doit rester pour que la position soit rentable.

## Définition

L'Iron condor est une stratégie d'options qui gagne quand le prix du sous-jacent reste dans une range prédéfinie. La structure est composée de deux spreads : un call spread haussier et un put spread baissier, tous deux légèrement hors de la monnaie.

L'Iron condor est construit en vendant un put spread (vente d'un put, achat d'un put plus bas) et un call spread (vente d'un call, achat d'un call plus haut). Les quatre jambes créent un canal de profit entre les deux strikes intérieurs.

Le profit maximum est la prime nette reçue quand le prix est entre les deux spreads à l'expiration. La perte maximale est la différence entre les strikes d'un spread moins la prime nette.

Cette stratégie est l'opposé du [[straddle and strangle]]. Là où le straddle gagne avec une forte volatilité, l'Iron condor gagne avec une faible volatilité.

## Contexte et origine

L'Iron condor a été popularisé dans les années 1990-2000 par des traders comme Gordon et d'autres qui ont formalisé les stratégies de vente d'options à faible volatilité.

La stratégie a été rendue accessible aux détaillants par les plateformes de trading d'options qui ont permis de construire ces stratégies facilement et avec des commissions réduites.

En crypto, l'Iron condor est particulièrement populaire sur les options BTC et ETH quand la volatilité implicite est élevée et que le trader s'attend à une période de calme.

## Mécanismes et caractéristiques

La structure classique utilise des strikes également espacés du prix actuel. Par exemple, avec BTC à 50000 : vente put 45000, achat put 44000 (put spread baissier), vente call 55000, achat call 56000 (call spread haussier).

La prime reçue pour la vente des spreads constitue le profit potentiel. Plus le canal est large, plus la prime est faible. Plus le canal est étroit, plus la prime est élevée.

Le break-even supérieur est le call spread strike + prime. Le break-even inférieur est le put spread strike - prime. Si le prix reste entre ces points à l'expiration, la position est profitable.

La volatilité implicite affecte la prime. Une volatilité implicite élevée permet de vendre des spreads plus larges pour la même prime, ou de recevoir plus de prime pour des spreads plus étroits.

## Nuances, critiques, limites

Le principal risque est le mouvement de prix extrême. Si BTC fait un mouvement au-delà des strikes extérieurs, la perte est significative. Les événements de marché (hard forks, regulatory announcements) peuvent provoquer de tels mouvements.

La volatilité implicite peut augmenter, faisant perdre de la valeur à la position même si le prix ne bouge pas. Le vega négatif de l'Iron condor signifie que la position perd quand la volatilité monte.

Le temps até short la position. Le theta fonctionne pour le vendeur d'Iron condor, mais ce theta est relativement faible par rapport au [[straddle and strangle]] qui a un theta plus négatif.

## Liens et implications

L'[[iron condor]] est une stratégie de [[volatility trading]] qui mise sur une faible volatilité. Le [[straddle and strangle]] est une stratégie complémentaire qui mise sur une forte volatilité.

Les [[options greeks basics]] montrent que l'Iron condor a un theta positif (le temps travaille pour le vendeur) mais un vega négatif (la volatilité aumenta est défavorable).

Le [[delta hedging]] peut être appliqué pour réduire l'exposition au prix, mais cela modifie les caractéristiques de la stratégie. Le [[drawdown]] maximum doit être calculé avant l'exécution.


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
[^2]: Investopedia, "Iron Condor", https://www.investopedia.com (consulted 2026)
