---
titre: "Trailing stop"
type: terme
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/ordre, #gestion/risque, #trading/bases]
créé: 2026-04-21
liens_forts: ["[[Ordre stop-loss]]", "[[Ordre take-profit]]", "[[Gestion du risque]]", "[[Risk-reward ratio]]", "[[Stratégie de momentum]]"]
liens_opposition: ["[[Ordre take-profit]]"]
---

# Trailing stop

> [!info] Résumé
> Un trailing stop est un stop-loss dynamique qui suit le prix à une distance fixe ou proportionnelle lorsqu'il évolue favorablement, verrouillant les gains tout en laissant courir les positions gagnantes.

## Définition

Le trailing stop (stop suiveur ou stop suiveur) est une forme évoluée de [[Ordre stop-loss]] dont le prix de déclenchement n'est pas fixe mais s'ajuste automatiquement à mesure que le prix du marché évolue en faveur de la position. C'est l'outil de gestion de position qui permet de transformer un profit papier en profit réel sans se fixer de plafond théorique de gain.

Le mécanisme est simple : le trader définit une distance de suivi (un montant fixe en devise ou un pourcentage du prix). Si le prix monte, le suit (suit) à la même distance. Si le prix baisse, le stop reste à son dernier niveau — il ne recule jamais. Quand le prix redescend et touche le stop, la position est fermée.

Le trailing stop incarne le principle fondamental du trading profitable : "cut your losses short, let your winners run." Il résout le problème émotionnel de la sortie prématurée en verrouillant mathématiquement un niveau de sortie minimum tout en permettant des gains potentiellement illimités.

## Contexte et origine

Les trailing stops ont été popularisés dans les années 1980-1990 par des traders de tendances comme Victor Sperandeo ("Trader Vic") et Mark Weinstein. Ils sont devenus une fonctionnalité standard de toutes les plateformes de trading modernes, disponibles même sur des applications grand public.

Dans l'écosystème crypto, le trailing stop est particulièrement pertinent en raison de la volatilité des actifs. Bitcoin peut facilement doubler en quelques semaines, puis retomber de 50 %. Un stop-loss fixe à 10 % sous le prix d'achat aurait laissé perdre 40 % de profit papier avant de fermer la position. Un trailing stop à 10 % aurait déclenché bien plus tôt mais aurait quand même sécurisé une part significative du gain.

Les bots de trading comme [[3Commas]] et [[Bitsgap]] permettent de configurer des trailing stops dans leurs stratégies de[[Trading bot]] automatisées.

## Mécanismes / caractéristiques / détails

**Distance absolue vs pourcentage** : le trailing stop peut être défini en montant fixe (par exemple, 500 USD sous le prix le plus haut) ou en pourcentage (par exemple, 5 % sous le prix le plus haut). Le choix dépend du prix de l'actif et de sa volatilité. Un actif très volatile comme les altcoins nécessite généralement un trailing stop en pourcentage plus large pour éviter les sorties prématurées du au bruit de marché.

**Calcul du prix de déclenchement** : pour une position longue avec un trailing stop à 5 % et un prix d'entrée à 100 USD, le stop est initialement à 95 USD. Si le prix monte à 110 USD, le stop remonte à 104,5 USD (5 % sous 110). Si le prix redescend à 104,5, le stop déclenche. Le profit minimum garanti serait de 4,5 USD par unité.

**Activation et recalcul** : le trailing stop ne s'active qu'après un mouvement de prix minimum (configurable) pour éviter qu'un small pullback ne déclenche pas immédiatement le stop. Certains algorithmes utilisent l'[[ATR (Average True Range)]] plutôt qu'un pourcentage fixe pour adapter automatiquement la distance à la volatilité actuelle du marché.

**Trailing stop vs take-profit** : le [[Ordre take-profit]] ferme la position à un niveau fixe avec un profit garanti mais renonce à tout mouvement au-delà. Le trailing stop laisse le profit potentiel ouvert mais risque une sortie prématurée si le prix retrace avant d'atteindre son apex. La combinaison des deux — partial take-profit plus trailing stop sur le reste — est une approche hybrid couramment utilisée.

**Trailing stop sur position courte** : le mécanisme s'inverse pour les positions courtes. Le stop suiveur descend avec le prix si celui-ci baisse (ce qui est favorable au short) et reste fixe si le prix remonte. La distance est alors un montant ou pourcentage au-dessus du prix le plus bas atteint.

**Implémentation algorithmique** : dans un [[Trading algorithmique]], le trailing stop est typiquement implémenté en tant que variable d'état qui tracks le prix le plus favorable atteint et recalcule le stop à chaque nouvelle bougie ou à chaque tick. L'[[API d'échange]] doit supporter les ordres stop pour permettre une sortie automatique au déclenchement.

## Nuances, critiques, limites

**Pullback et volatilité** : dans un marché avec une forte volatilité, un trailing stop trop serré peut déclencher des sorties prématurées lors de pullbacks dans une tendance plus large. C'est particulièrement vrai sur les cryptos à faible liquidité où le [[Slippage]] peut être significatif même pour de petits ordres. Le calibrage de la distance est un compromis entre protection et sensibilité.

**Arrêt de la progression** : le trailing stop progression ne recule jamais — c'est sa force mais aussi sa limite. Si le prix fait un spike temporaire (flash crash), le stop peut être déclenché à un prix défavorable, et le stop ne "récupère" pas même si le prix revient à son niveau précédent. Le [[Flash crash]] de mars 2020 a déclenché de nombreux trailing stops avant que le marché ne rebondisse.

**Pas de guarantee d'exécution au stop** : comme tout ordre stop, le trailing stop se transforme en ordre au marché ou limite lors du déclenchement. Le prix d'exécution peut différer du prix du stop si la liquidité est insuffisante, particulièrement sur des actifs à faible liquidité.

## Liens et implications

Le trailing stop est l'outil privilégié des stratégies de [[Stratégie de momentum]] où le but est de rester dans les tendances fortes aussi longtemps que possible. Un momentum trader sur Bitcoin avec un trailing stop de 10 % capture l'essentiel des mouvements de tendance sans prédire leur fin.

Dans les stratégies de [[Stratégie de mean reversion]], le trailing stop est généralement plus serré car l'objectif est de prendre des profits rapidement quand le prix revient à la moyenne, pas de laisser courir les outliers. Le [[Risk-reward ratio]] effectif du trailing stop dépend de la estrutura de la tendance.

Le [[Backtesting]] d'une stratégie avec trailing stop est complexe car le résultat dépend de la sequence exacte des prix et de la volatilité pendant la période testée. Une stratégie peut avoir un excellent Sharpe ratio avec un trailing stop sur certaines périodes et une très mauvaise performance sur d'autres.

## Sources

[^1]: Tharp, Van K. *Trade Your Way to Financial Freedom*. McGraw-Hill, 1998.
[^2]: Elder, Alexander. *The New Trading for a Living*. Wiley, 2014.
[^3]: Schwager, Jack D. *Technical Analysis*. Wiley, 2017.
