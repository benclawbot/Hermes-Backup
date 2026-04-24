---
titre: "Stratégie de momentum"
type: théorie
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#théorie/strategy, #théorie/momentum, #concept/trend]
créé: 2026-04-20
liens_forts: ["[[Mean reversion]]", "[[Moving average crossover]]", "[[Trend following]]"]
liens_opposition: ["[[Mean reversion]]"]
---

# Stratégie de momentum

> [!info] Résumé
> La stratégie de momentum exploite la tendance des prix à continuer dans leur direction récente, les bots identifiant les cassures de tendance et les croisements de moyennes pour entrer dans le sens du mouvement.

## Définition

La stratégie de momentum repose sur l'hypothèse que les prix ont tendance à continuer dans leur direction récente plutôt qu'à retourner à une moyenne. Le trader momentum achète quand le prix monte (capture la continuation haussière) et vend quand il baisse (ou achète pour profiter de la baisse via positions courtes).

Ce paradigme est théoriquement cohérent avec la Behavioral finance : les traders réagissent de manière sous-optimale aux informations nouvelles, créant des tendances qui persistent plus longtemps que ce qu'un modèle rationnel prédirait. Les biais comme l'anchoring et le herding amplifient ces tendances.

Concrètement, le momentum se mesure via le taux de variation des prix sur une période donnée (rate of change), le croisement de moyennes mobiles (prix > MA courte = momentum haussier), ou des indicateurs comme l'ADX (Average Directional Index) qui quantifie la force de la tendance.

## Contexte et origine

Le momentum a été documenté dans la finance académique depuis les années 1970. Jegadeesh et Titman (1993) ont montré que des stratégies buy-and-hold sur des winners surpassaient les losers sur des périodes de 3 à 12 mois. Cette anomalie conteste l'efficience des marchés.

Les praticiens ont popularisé des stratégies comme "trend following" dans les années 1970-80, notamment via les travaux de Ed Seykota et d'autres pioneers du systematic trading. Ces approches ignoraient les fondamentaux pour se concentrer uniquement sur l'action des prix.

En crypto, le momentum est particulièrement populaire dû à la nature trend-based du marché. Les ciclos de boom-bust crypto sont prononcés, créant des trends puissant que les stratégies momentum capturent bien. Le défi est d'identifier quand le trend s'inverse.

## Mécanismes et caractéristiques

Le [[moving average crossover]] est l'implémentation la plus simple : quand la MA courte (ex: 20 periods) croise au-dessus de la MA longue (ex: 50 periods), signal d'achat. Le inverse pour signal de vente. Plus le croisement est fort (prix loin des deux MA), plus le signal est robuste.

Les stops de trailing sont essentiels pour protéger les gains accumulés. Le trailing stop suit le prix à une distance fixe ou percentage, verrouillant les gains sans limiter le upside potentiel. Sans trailing stop, un retournement peut transformer un trade winner en loser.

Le dimensionnement de position selon la volatilité (volatility-adjusted sizing) ajuste la taille du trade selon la volatilité récente de l'actif. Un actif plus volatile reçoit une position plus petite pour risquer le même montant en euros. Cette approche equalise le risque across trades.

Le filtrage des faux signaux est critique. Les marchés en range (sideways) génèrent beaucoup de croisements de moyennes qui échouent. Les filtres incluent la confirmation par un indicateur de momentum (RSI > 50 pour achat), le filtrage par timeframe plus long (tendance daily aligned), ou l'ADX > un seuil pour confirmer la tendance.

## Nuances, critiques, limites

Le momentum crash est un risque documenté. En 2020, de nombreux stratégies momentum ont simultanément vendu pendant la baisse covid, amplifiant la volatilité. Quand tous les bots font la même chose, les mouvements deviennent plus extrêmes.

Les coûts de transaction shred les gains du momentum. Chaque trade génère des frais (commission, slippage, spread). Une stratégie qui tourne fréquemment (high turnover) perd une partie significative de ses rendements aux coûts. Les marchés crypto avec leurs frais élevés sont particulièrement sensibles.

Le lag est inherent au momentum. Les indicateurs comme les moyennes mobiles laggent le prix. Plus on utilise une moyenne longue pour éviter les faux signaux, plus le signal arrive tard et plus on rate une partie du move. Ce décalage peut transformer un trade potentiellement winner en trade loser si le retournement arrive vite.

L'overfitting est le risque principal pour les bots sophistiqués. Optimiser une stratégie de momentum sur 5 ans de données peut révéler une configuration qui marchait parfaitement dans le passé mais échoue en live. Le [[backtesting]] doit être complémenté par du forward testing.

## Liens et implications

Le momentum est souvent opposé à la [[mean reversion]], bien que de nombreux bots combinent les deux approches selon les conditions de marché. La [[gestion du risque]] et le [[stop-loss]] sont indispensables pour toute stratégie de momentum.

Le [[RSI Divergence strategy]] peut être utilisé pour identifier des retournements contrarian à l'intérieur d'une tendance majeure. Le [[Bollinger Bands breakout]] signale des cassures de volatilité qui peuvent initier de nouveaux momentum.

La [[psychologie du trading]] est importante : le momentum testé la discipline car les buybacks sur des prix déjà hauts sont counter-intuitifs. Le [[drawdown]] peut être severe pendant les range markets quand les signaux échouent.

## Sources

[^1]: Jegadeesh et Titman, "Returns to Buying Winners and Selling Losers", Journal of Finance (1993)
[^2]: Moskowitz et al., "Time to Momentum", Chicago Booth (2012)