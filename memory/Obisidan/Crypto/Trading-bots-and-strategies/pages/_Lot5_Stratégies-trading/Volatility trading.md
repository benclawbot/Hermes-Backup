---
titre: "Volatility trading"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/volatility, #concept/options, #concept/variance]
créé: 2026-04-21
liens_forts: ["[[Options strategies (basic)]]", "[[Annualized volatility]]"]
liens_opposition: []
---

# Volatility trading

> [!info] Résumé
> Le volatility trading exploite les mouvements de la volatilité implicite des prix. Plutôt que de trader la direction du marché, le volatility trader parie sur l'augmentation ou la diminution de la volatilité future, généralement via des produits dérivés.

## Définition

Le volatility trading est une stratégie qui trade la volatilité plutôt que la direction du prix. L'idée est que la volatilité peut être haute ou basse, et que certains actifs sont surévalués ou sous-évalués en termes de volatilité future.

Les volatility traders utilisent souvent des options pour exprimer leur vue sur la volatilité. Acheter des options (calls ou puts) est une manière de gagner si la volatilité augmente. Vendre des options est une manière de parier sur une volatilité stable ou décroissante.

Le concept de "volatility arbitrage" est de détecter quand la volatilité implicite (le prix des options) est supérieure ou inférieure à la volatilité réalisée prévue. Si la volatilité implicite est supérieure à la volatilité réalisée, le trader vend des options.

En crypto, le trading de volatilité est particulièrement pertinent en raison de la volatilité élevée du marché. Les changements de volatilité peuvent être plus importants que les changements de prix lui-même.

## Contexte et origine

Le volatility trading a été popularisé par les travaux de Nassim Taleb et d'autres sur les "fat tails" et la gestion du risque de queue. Le livre "Dynamic Hedging" de Taleb a été une référence pour les traders d'options.

Les volatility indices comme le VIX sur les marchés actions ont permis de trader la volatilité directement. Le VIX mesure la volatilité implicite d'un panier d'options sur l'S&P 500.

En crypto, il n'existe pas de indice de volatilité standard aussi liquide que le VIX, mais des produits comme le BVIX sur certaines plateformes offrent une mesure de la volatilité implicite du Bitcoin.

## Mécanismes et caractéristiques

La volatilité implicite est le prix du risque dans les options. Elle peut être extraite des prix des options via le modèle de Black-Scholes. Une volatilité implicite élevée indique que le marché pricant une forte probabilité de grands mouvements.

La volatilité réalisée est la vraie volatilité du sous-jacent mesurée sur une période donnée. Elle est calculée comme l'écart-type des rendements sur la période.

Le "volatility arbitrage" consiste à vendre des options quand la volatilité implicite est supérieure à la volatilité réalisée historique, et à acheter des options quand elle lui est inférieure.

Les stratégies de volatility trading incluent le straddle et le strangle ([[straddle and strangle]]) qui profitent d'un mouvement de prix dans n'importe quelle direction, et le condor ([[iron condor]]) qui tire profit d'une faible volatilité.

## Nuances, critiques, limites

Le principal risque du volatility trading est que la volatilité peut rester élevée ou faible plus longtemps que prévu. Les périodes de "volatility crush" où la volatilité s'effondre après un événement peuvent causer des pertes importantes aux vendeurs d'options.

La volatilité en crypto est particulièrement imprévisible. Les événements spécifiques à la crypto (hard forks, regulatory announcements, hacks) peuvent provoquer des pics de volatilité soudains.

Le "model risk" est significatif. Les modèles de pricing d'options comme Black-Scholes font des hypothèses qui ne tiennent pas en crypto (distribution normale des rendements, volatilité constante).

## Liens et implications

Le [[volatility trading]] est directement lié aux [[options strategies (basic)|options strategies]] et au [[options greeks basics|options Greeks]]. Le [[vix|VIX]] est le benchmark de volatilité sur les marchés traditionnels.

L'[[annualized volatility]] est la mesure standard de la volatilité. Le [[drawdown]] peut être important si la volatilité move contre la position.

Le [[backtesting]] des stratégies de volatility trading est difficile car les conditions passées ne prédisent pas la volatilité future. Le [[Sharpe ratio]] ajusté au risque de queue est pertinent.


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

[^1]: Taleb, "Dynamic Hedging", 1997
[^2]: Gatheral, "Volatility Surface", 2006
