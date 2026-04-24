---
titre: "Stratégie de mean reversion"
type: théorie
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#théorie/strategy, #théorie/mean-reversion, #concept/price]
créé: 2026-04-20
liens_forts: ["[[Momentum]]", "[[RSI Divergence strategy]]", "[[Bollinger Bands breakout]]"]
liens_opposition: ["[[Efficient Market Hypothesis]]"]
---

# Stratégie de mean reversion

> [!info] Résumé
> La mean reversion est une théorie selon laquelle les prix des actifs tendent à retourner vers leur moyenne historique après des déviations, permettant aux bots d'identifier les situations surachetées ou survendues pour entrer contre la tendance temporaire.

## Définition

La mean reversion est un paradigme de trading qui repose sur l'hypothèse que les prix oscillent autour d'un niveau "normal" ou moyen, et que les déviations temporaires sont progressivement corrigées. Le trader mean reversion achète quand le prix est "trop bas" (sous la moyenne) et vend quand il est "trop haut" (au-dessus de la moyenne).

Concrètement, le bot mesure la distance entre le prix actuel et une moyenne (moyenne mobile, moyenne historique, ou prix "juste" estimé par un modèle). Plus la déviation est grande, plus le signal est fort. Le dimensionnement de la position est souvent inversement proportionnel à la déviation : plus le prix est bas, plus on achète (et inversement).

Cette logique peut sembler logique dans l'absolu : "acheter bas, vendre haut". Mais l'hypothèse que le prix retournera vers la moyenne n'est pas toujours vérifié. Les prix peuvent rester déviation pendant longtemps, voire s'éloigner encore plus de la moyenne.

## Contexte et origine

Le concept de mean reversion a des racines en finance quantitative des années 1970-1980. Les chercheurs ont observé que les rendements financiers tendent à être auto-corrélés négativement à court terme (retour à la moyenne), mais cette propriété est contestée.

Les premiers traders algorithmiques implémentaient la mean reversion sur des actions via des paires trading (pairs trading) : quand deux actions historiquement corrélées divergent, on achète la moins chère et on vend la plus chère, en pariant sur la convergence. Ce style a été popularisé par les hedge funds quantitatifs comme Morgan Stanley.

En crypto, la mean reversion s'applique aux stratégies comme le grid trading (régular intervals, achat automatique quand le prix descend), le DCA automatisé, et les stratégies basées sur des indicateurs comme le RSI ou les Bollinger Bands. La nature volatile du crypto crée des opportunités de mean reversion plus fréquentes que les marchés actions.

## Mécanismes et caractéristiques

L'implémentation classique utilise unemoyenne mobile (MA) comme proxy pour la moyenne. Le prix au-dessus de la MA suggère une déviation haussière (potentialle vente), tandis qu'un prix sous la MA suggère une déviation baissière (potential achat). La longueur de la MA est cruciale : une MA courte capte plus de bruit, une MA longue lag plus.

Les Bandes de Bollinger extensuent ce concept en ajoutant des bands de volatilité autour de la MA. Le prix qui touche la bande inférieure signale une déviation baissière extrême, celui qui touche la bande supérieure une déviation haussière extrême. Le prix revenant vers la bande médiane offre le signal de trading.

Le RSI (Relative Strength Index) mesure la vitesse et la magnitude des changements de prix pour identifier les conditions surachetées (<30) ou surachetées (>70). Le signal de mean reversion arrive quand le RSI sort d'une zone extrême et revient vers la médiane (50).

La gestion de position en mean reversion utilise souvent le "pyramiding" : ajouter à la position quand le prix continue de s'éloigner de la moyenne, réduisant le coût moyen. Cette approche augmente le risque si le prix ne retourne pas.

## Nuances, critiques, limites

Le risque principal est que les prix ne retournent pas. En marché trending, la mean reversion mène à des pertes cumulatives alors que le prix continue de s'éloigner de la moyenne. Les bear markets prolongés ont détruit des traders mean reversion qui ont "acheté le dip" de manière réactive.

L' Efficient Market Hypothesis suggère que les prix reflètent toute l'information disponible, donc les déviations sont aléatoires et non prévisibles. La mean reversion conteste cette view en postulant que les prix sont parfois "irrationnels" avant de se corriger.

Le time decay affecte les stratégies mean reversion car les positions winners finissent par être closes. Plus le marché tarde à corriger, plus le capital est immobilisé dans une position perdante. Les coûts de financement (pour les positions longues sur marge) s'accumulent.

Les événements extrêmes comme les crashes subites ou les bulles spéculatives violent les hypothèses de mean reversion. Le COVID crash en mars 2020 a vu des baisses de 50% en quelques jours sans retour immédiat à la moyenne. Les déviations peuvent devenir plus extrêmes avant correction.

## Liens et implications

La mean reversion est souvent opposée au [[momentum]], qui mise sur la continuation des tendances plutôt que leur reversal. Les traders combinent souvent les deux approches pour gérer differentesconditions de marché.

Le [[RSI Divergence strategy]] et le [[Bollinger Bands breakout]] sont des outils courantes pour implémenter des stratégies de mean reversion. Le [[Kelly Criterion]] aide à dimensionner les positions pour optimiser le ratio risque/rendement.

La [[gestion du risque]] et le [[backtesting]] rigoureux sont essentiels pour valider une stratégie mean reversion avant deployment. Le risque de drawdown prolongé est réel si le marché ne "coopère" pas.

## Sources

[^1]: Investopedia, "Mean Reversion", https://www.investopedia.com/terms/m/meanreversion.asp (consulted 2026)
[^2]: Bouchaud et al., "The (unfortunate) complexity of the economy", Nature Physics (2019)