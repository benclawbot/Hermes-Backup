---
titre: "Calendar spread"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: deep-cut
source_knowledge: internal
sources_count: 0
tags: [#concept/calendar-spread, #concept/options, #concept/time-spread]
créé: 2026-04-21
liens_forts: ["[[Butterfly spread]]", "[[Options strategies (basic)]]", "[[Options Greeks basics]]"]
liens_opposition: []
---

# Calendar spread

> [!info] Résumé
> Le calendar spread exploite les différences de prix entre options de différentes expirations. Le trader achète une option à une expiration lointaine et vend une option au même strike mais à une expiration proche, tablant sur un widening du temps.

## Définition

Le calendar spread est une stratégie qui vend une option à court terme et achète une option à long terme au même strike. L'objectif est de profit de la décroissance temporelle (theta) plus rapide des options à court terme par rapport aux options à long terme.

Si le prix du sous-jacent reste proche du strike à l'expiration du premier contrat, l'option courte expire sans valeur. L'option longue conserve sa valeur (moins le theta). Le profit est la différence entre les primes.

La version haussière du calendar spread (bull calendar) utilise des calls ou puts au même strike, tablant sur une hausse modérée. La version baissière (bear calendar) utilise des strikes différents.

Le calendar spread est une stratégie sur la volatilité et le temps plutôt que sur la direction. Le trader pense que le mouvement sera faible à court terme mais que la situation sera plus claire à long terme.

## Contexte et origine

Le calendar spread a été développé par les teneurs de marché d'options qui voulaient trade the time dimension of options pricing. La structure a été formalisée dans les manuels d'options dans les années 1980.

Les traders ont découvert que les options à court terme ont un theta plus proportionnel que les options à long terme, créant des opportunités de calendar spread.

En crypto, le calendar spread est utilisé sur les options BTC ou ETH quand la volatilité implicite à court terme est élevée comparée à la volatilité à long terme. Cette condition se produit souvent avant des événements majeurs.

## Mécanismes et caractéristiques

La construction est simple : vendre une option à une expiration (par exemple 1 mois) et acheter la même option au même strike à une expiration plus lointaine (par exemple 3 mois). Les strikes ATM ou légèrement OTM sont les plus utilisés.

Le profit dépend de plusieurs facteurs : si le prix reste proche du strike à l'expiration courte, l'option courte expire sans valeur. Si le prix bouge significativement, l'une des options prend de la valeur.

Le gamma est le risque principal. Un mouvement important du prix à court terme affecte négativement la position car l'option courte devient plus sensitive au prix.

Le vega (exposition à la volatilité) est positif pour l'option longue et négatif pour l'option courte. Typiquement, l'option longue a plus de vega, donc le calendar spread est veg positif.

## Nuances, critiques, limites

Le principal risque est le mouvement de prix important. Si le prix s'écarte significativement du strike avant l'expiration courte, la position peut subir des pertes même si la thesis de calendar spread est correcte.

Le calendar spread demande de gérer deux expirations, ce qui est plus complexe qu'une stratégie sur une seule expiration. Le rollover de l'option courte implique des coûts de transaction supplémentaires.

La liquidité des options à long terme peut être limitée en crypto, rendant l'exécution difficile et les spreads larges.

## Liens et implications

Le [[calendar spread]] est une variante du [[butterfly spread]] qui utilise seulement des calls ou des puts plutôt que des combinaisons de calls et puts. Les deux stratégies sont des spreads de temps.

Les [[options greeks basics]] sont essentiels pour comprendre le calendar spread. Le gamma et le theta s'opposent dans cette stratégie. Le vega détermine l'impact de la volatilité.

Le [[backtesting]] du calendar spread est complexe car il faut simuler plusieurs expirations. Le [[Sharpe ratio]] ajusté pour le temps peut évaluer la performance.


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
[^2]: Tradingoptions.org, "Calendar Spread Strategy", https://www.tradingoptions.org (consulted 2026)
