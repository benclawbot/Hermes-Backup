---
titre: "Straddle and strangle"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/straddle, #concept/strangle, #concept/volatility-trading]
créé: 2026-04-21
liens_forts: ["[[Iron condor]]", "[[Options strategies (basic)]]", "[[Volatility trading]]"]
liens_opposition: []
---

# Straddle and strangle

> [!info] Résumé
> Le straddle et le strangle sont des stratégies d'options qui profitent d'un mouvement de prix fort dans n'importe quelle direction. Ces stratégies sont utilisées quand le trader s'attend à une augmentation de la volatilité mais n'est pas sûr de la direction.

## Définition

Le straddle est une stratégie qui consiste à acheter ou vendre simultanément un call et un put au même strike et à la même expiration. Le straddle long (achat des deux) gagne si le prix bouge significativement dans n'importe quelle direction, mais perd si le prix reste stable.

Le strangle est une variante où le call et le put ont des strikes différents, tous deux légèrement hors de la monnaie. Le strangle est moins cher à acheter mais nécessite un mouvement plus important pour être profitable.

Le straddle long est utilisé avant des événements majeurs (annonces de résultats, releases macro) quand le trader s'attend à un mouvement fort mais ne sait pas dans quelle direction. La prime payée est le coût de cette incertitude.

Le straddle short (vente des deux) est l'opposé : le trader pense que le prix va rester stable. Cette position collecte la prime mais risque des pertes illimitées si un mouvement fort se produit.

## Contexte et origine

Le straddle et le strangle sont des stratégies anciennes utilisées par les traders d'options depuis leur création. Ils ont été popularisés par les traders d'actions qui voulaient trader la volatilité sans prédire la direction.

Les stratégies ont été formalisées dans les manuels d'options dans les années 1970-1980. Le straddle est souvent utilisé autour des événements de marché (earnings, FOMC meetings) sur les actions.

En crypto, ces stratégies sont particulièrement populaires autour des events spécifiques comme les hard forks, les mises à jour de protocole, ou les décisions réglementaires majeures.

## Mécanismes et caractéristiques

Le straddle long a un profil de profit asymétrique. À l'expiration, si le prix est au strike, les deux options expirent sans valeur et la perte est la prime payée. Si le prix monte ou baisse significativement, l'une des options génère un profit.

Le breakeven du straddle est le strike plus/moins la prime totale. Plus la prime est élevée, plus le prix doit bouger pour atteindre le breakeven.

Le strangle est moins coûteux mais exige un mouvement plus important. Avec des strikes OTM, la prime est inférieure, mais le prix doit bouger davantage pour que l'une des options soit dans la monnaie.

Le gamma et le theta sont les Greeks clés. Le straddle long a un gamma positif (bénéfique si le prix bouge) mais un theta négatif (le temps erode la valeur). Ces deux forces s'opposent.

## Nuances, critiques, limites

Le principal risque du straddle short est illimité. Si un événement provoque un mouvement extrême, la perte sur le côté perdant peut être très importante. Le straddle short est une stratégie très risquée.

La volatilité implicite affecte significativement ces stratégies. Un straddle achété quand la volatilité implicite est déjà très élevée peut ne pas être rentable même avec un mouvement significatif.

Le timing est crucial. Acheter un straddle trop tôt avant un événement peut means payer la prime pendant longtemps sans savoir quand le mouvement se produira, et le theta érodera la position.

## Liens et implications

Le [[straddle and strangle]] sont des stratégies de [[volatility trading]] qui expriment une vue sur la volatilité sans direction. L'[[iron condor]] est la stratégie opposée qui mise sur la stabilité.

Les [[options greeks basics]] montrent le gamma positif et le theta négatif du straddle long. Le [[delta hedging]] peut être utilisé pour gérer l'exposition au prix.

La [[gestion du risque]] doit être stricte car ces stratégies ont des profils de perte complexes. Le [[drawdown]] maximum doit être défini avant l'exécution.


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
