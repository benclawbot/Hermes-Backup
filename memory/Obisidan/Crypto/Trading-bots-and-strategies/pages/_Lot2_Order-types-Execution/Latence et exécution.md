---
titre: "Latence et exécution"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 3
tags: [#concept/exécution, #trading/avancé, #infrastructure]
créé: 2026-04-21
liens_forts: ["[[Ordre au marché]]", "[[Ordre à cours limité]]", "[[Haute fréquence]]", "[[Slippage]]", "[[Prix d'exécution vs prix cot]]"]
liens_opposition: []
---

# Latence et exécution

> [!info] Résumé
> La latence est le délai entre la décision de trading et l'exécution effective de l'ordre sur le marché. Elle détermine directement le slippage, le prix d'exécution et la viabilité des stratégies à haute fréquence.

## Définition

La latence d'exécution désigne le temps qui s'écoule entre le moment où un [[Trading bot]] prend une décision d'achat ou de vente et le moment où l'ordre est effectivement exécuté (fill) sur l'exchange. Elle inclut tous les maillons de la chaîne : temps de calcul de la décision, sérialisation de l'ordre, transmission réseau, traitement par l'exchange, et retour de confirmation.

La latence se décompose en plusieurs composants : la latence de transmission réseau (network latency), la latence de traitement de l'ordre par l'exchange (order processing latency), et la latence de confirmation (confirmation latency). La somme de ces composants constitue la latence totale de bout en bout.

À l'échelle des marchés financiers modernes, les latences sont mesurées en millisecondes (ms) voire en microsecondes (μs) pour le [[Haute fréquence|trading haute fréquence]] le plus sophistiqué. Sur les marchés crypto, où les confirmations blockchain ajoutent une couche supplémentaire de latence pour les transactions on-chain, la latence peut être bien supérieure.

## Contexte et origine

La problématique de la latence émerge avec le [[Haute fréquence|trading haute fréquence]] dans les années 1990-2000. À mesure que les algorithmes sont devenus plus rapides, la latence est devenue un avantage compétitif déterminant. Les firmes HFT ont commencé à investir massivement dans la co-localisation (placement des serveurs dans les mêmes centres de données que les exchanges), les connexions fibre dédiées, et les algorithmes optimisés pour la vitesse.

Dans l'écosystème crypto, la latence est un défi supplémentaire car les transactions sur la blockchain nécessitent des confirmations de blocs, ce qui ajoute des secondes à des minutes de latence pour les exchanges décentralisés. Les exchanges centralisés (Binance, Coinbase) offrent des latences comparables aux marchés financiers traditionnels.

Les [[Trading bot]]s de détail qui fonctionnent sur des connexions internet standards ont des latences de 50 ms à 500 ms, tandis qu'un algorithme HFT institutionnel peut être à moins de 1 ms de l'exchange.

## Mécanismes / caractéristiques / détails

**Composantes de la latence** :

1. **Latence de signal** : temps entre l'occurrence d'un événement de marché (prix change) et sa détection par le système de trading. Dépend de la source de données (WebSocket vs polling) et de la bande passante.

2. **Latence de décision** : temps de calcul pour décider si et comment répondre au signal. Pour un algorithme simple, c'est quelques microsecondes. Pour un modèle de [[Machine learning pour trading|machine learning]] ou de [[Neural networks pour trading crypto|réseau de neurones]], cela peut être des millisecondes.

3. **Latence de transmission** : temps pour envoyer l'ordre de l'ordinateur du trader aux serveurs de l'exchange. La distance physique et la qualité de la connexion sont les facteurs clés. Une connexion Shanghai-Londres a une latence minimum d'environ 120 ms (vitesse de la lumière dans la fibre).

4. **Latence de traitement par l'exchange** : temps pour que l'exchange traite l'ordre, le valide, l'insère dans le [[Order book dynamics|carnet d'ordres]] ou l'exécute. Les exchanges modernes traitent des ordres en moins de 100 microsecondes.

5. **Latence de confirmation** : temps pour que la confirmation de l'exécution revienne au trader.

**Impact sur le slippage** : pendant la latence, le prix peut bouger. Plus la latence est élevée, plus le slippage potentiel est grand. Pour une volatilité de 0,1 % par seconde, une latence de 100 ms introduit un slippage attendu de 0,01 % même sans autres facteurs.

**Co-localisation** : les traders qui ont leurs serveurs dans le même centre de données que l'exchange (co-localisation) obtiennent les latences les plus basses. Les exchanges proposent du "proximity hosting" pour attirer les traders haute fréquence.

**Latence et slippage sont liés** : le slippage effectif est la combinaison de la latence et du mouvement du prix pendant cette latence. Diminuer la latence est le principal levier pour réduire le slippage, aux côtés de l'amélioration de la liquidité.

## Nuances, critiques, limites

**Latence vs bande passante** : avoir une faible latence ne suffit pas si la bande passante est insuffisante pour transmettre des ordres de grande taille. Une connexion à faible latence mais faible bande passante sera un goulot d'étranglement pour les stratégies à volume élevé.

**Gigue (jitter)** : la latence n'est pas constante — elle varie (c'est la "gigue"). Une latence moyenne de 50 ms avec une gigue de 100 ms peut occasionnellement produire des latences de 150 ms, créant des pics de slippage inattendus. Les stratégies doivent être conçues pour tolérer la variabilité de la latence, pas seulement sa moyenne.

**Latence sur blockchain** : pour les DEX (exchanges décentralisés) et les transactions on-chain, la latence est fondamentalement différente. Une transaction Ethereum peut mettre plusieurs minutes à être confirmée. Durant ce temps, le prix sur le DEX peut varier significativement, créant un "risque d'exécution" majeur. C'est une différence majeure entre CEX et DEX.

**Latence et fréquences différentes** : une stratégie qui trade sur des chandeliers de 1 heure ([[Multi timeframe analysis]]) n'est pas affectée par une latence de 500 ms. Une stratégie qui trade sur des données de tick ou de millisecondes est directement pénalisée. Le choix de la latence acceptable dépend de la fréquence de trading de la stratégie.

## Liens et implications

La latence est un facteur déterminant pour la viabilité des stratégies de [[Haute fréquence]] : ces stratégies ne sont profitables que si leur avantage (écart bid/ask capturé, inefficacité trouvée) compense la latence. Si la latence efface l'avantage, la stratégie est perdante.

Le slippage généré par la latence doit être intégré dans les calculs de [[Risk-reward ratio]] et dans le [[Backtesting]] pour éviter des estimations trop optimistes. Un backtest qui ignore la latence surestime systématiquement la performance.

Les stratégies d'[[Arbitrage]] sont particulièrement sensibles à la latence car elles profitent de petites différences de prix qui se referment rapidement. Une latence de 10 ms peut transformer un arbitrage profitable en arbitrage perdant.

## Sources

[^1]: Aldridge, Irene. *High-Frequency Trading: A Practical Guide to Algorithmic Strategies and Trading Systems*. Wiley, 2013.
[^2]: Durbin, Michael. *All About High-Frequency Trading*. McGraw-Hill, 2010.
[^3]: Documentation Binance API — WebSocket vs REST latency considerations.