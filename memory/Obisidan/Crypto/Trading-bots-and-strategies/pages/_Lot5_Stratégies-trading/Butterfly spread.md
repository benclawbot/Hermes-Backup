---
titre: "Butterfly spread"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/butterfly-spread, #concept/options, #concept/neutral]
créé: 2026-04-21
liens_forts: ["[[Iron condor]]", "[[Calendar spread]]", "[[Options strategies (basic)]]"]
liens_opposition: []
---

# Butterfly spread

> [!info] Résumé
> Le butterfly spread est une stratégie neutre qui génère un profit si le prix reste proche d'un strike spécifique à l'expiration. La structure combine plusieurs options pour créer un profil de profit convergent avec un risque limité.

## Définition

Le butterfly spread est une stratégie d'options qui gagne si le prix du sous-jacent reste proche d'un strike prédéterminé à l'expiration. La structure combine quatre options : achat d'un call/put au strike inférieur, vente de deux calls/puts au strike central, achat d'un call/put au strike supérieur.

Le butterfly symmetric utilise des strikes également espacés autour du prix actuel. Par exemple, avec BTC à 50000 : achat call 48000, vente calls 50000 (x2), achat call 52000. Le profit maximum est au prix de 50000 à l'expiration.

Le profit maximum est la différence entre les strikes moins la prime nette payée. Cette situation se produit si le prix est exactement au strike intermédiaire à l'expiration. La perte maximale est la prime nette payée.

Le butterfly spread est une stratégie à risque limité et profit limité. Elle est utilisée quand le trader pense que le prix ne boudera pas significativement avant l'expiration.

## Contexte et origine

Le butterfly spread a été développé par les teneurs de marché d'options dans les années 1970-1980 comme une façon de trader la stabilité avec un risque limité.

La structure a été popularisée par les traders d'options sur actions qui voulaient bénéficie de l'écoulement du temps sans risquer des pertes illimitées. C'est une stratégies de "theta positive" avec un gamma limité.

En crypto, le butterfly spread est utilisé sur les options BTC ou ETH quand le trader s'attend à une période de faible volatilité. La结构的 complexe peut être difficile à exécuter sur les plateformes moins sophistiquée.

## Mécanismes et caractéristiques

La construction requiert quatre jambes : achat call/put K1, vente 2 calls/puts K2, achat call/put K3, où K1 < K2 < K3 et K2 = (K1 + K3) / 2. Les quatre jambes créent un profil de profit en forme de papillon.

Le prix central (K2) est le strike où le profit maximum est atteint. Plus le prix est proche de K2 à l'expiration, plus le profit est élevé. Si le prix est exactement à K2, le profit est maximum.

Le break-even supérieur est K3 moins la prime nette. Le break-even inférieur est K1 plus la prime nette. Si le prix est en dehors de cette range à l'expiration, la position perd la prime nette.

Le theta est positif pour le vendeur des deux calls/puts centraux. Le gamma est négatif sur les ailes (K1 et K3) et positif au centre (K2).

## Nuances, critiques, limites

Le principal risque est le mouvement de prix au-delà des strikes extérieurs. Si BTC fait un mouvement majeur, le butterfly perd la prime payée. L'événement doit être pequeños pour que la stratégie fonctionne.

Le butterfly spread a un profit maximum limité qui peut être modeste par rapport au capital engagé. Les commissions sur quatre jambes peuvent représenter une part importante du profit.

La liquidité peut être un problème pour les strikes moins tradés. Le bid-ask spread peut être large, surtout pour les options crypto moins liquides.

## Liens et implications

Le [[butterfly spread]] est une extension du [[iron condor]] qui limite le risque encore davantage. Le [[calendar spread]] est une autre stratégie de temps apparentée.

Les [[options strategies (basic)]] montrent comment combiner les calls et puts pour créer des profils de profit spécifiques. Les [[options greeks basics]] guident l'allocation du capital entre les jambes.

Le [[backtesting]] du butterfly spread nécessite de simuler plusieurs scénarios de prix. Le [[Sharpe ratio]] ajusté pour le risque limité peut évaluer la performance.


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
[^2]: CBOE, "Butterfly Spread", https://www.cboe.com (consulted 2026)
