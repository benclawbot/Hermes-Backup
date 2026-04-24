---
titre: "Ordre take-profit"
type: terme
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 3
tags: [#concept/ordre, #gestion/risque, #trading/bases]
créé: 2026-04-21
liens_forts: ["[[Gestion du risque]]", "[[Ordre stop-loss]]", "[[Risk-reward ratio]]", "[[Ordre à cours limité]]", "[[Position sizing]]"]
liens_opposition: []
---

# Ordre take-profit

> [!info] Résumé
> Un ordre take-profit est un ordre conditionnel qui ferme automatiquement une position gagnante lorsque le prix atteint un objectif prédéfini, verrouillant les profits sans intervention manuelle.

## Définition

L'ordre take-profit (TP) est l'autre face du [[Ordre stop-loss]] dans tout système de gestion de position. Il spécifie un prix auquel la position sera fermée automatiquement si le marché atteint le niveau de profit visé. Comme le stop-loss, le take-profit est un ordre conditionnel dormant : il ne s'active que lorsque le prix de déclenchement est atteint.

Le take-profit transforme une stratégie de trading d'un process open-ended en un système à résultats discrets. Associé au stop-loss, il définit mathématiquement le [[Risk-reward ratio]] de chaque position. Pour un risque de 100 USD et un objectif de 300 USD, le ratio est de 1:3, ce qui signifie qu'un taux de réussite de 33 % suffit à être profitable.

Il est crucial de noter que le take-profit ne "trie" pas entre les positions : il ferme aveuglément à l'objectif, même si le mouvement pourrait se poursuivre. Cette rigidité est à la fois sa force (discipline) et sa limite (sortie précoce potentielle).

## Contexte et origine

L'ordre take-profit tel que le mécanisme automatisé émerge avec le [[Trading algorithmique]] dans les années 1980-1990, lorsque les premières plateformes électroniques ont permis de programmer des sorties conditionnelles. Avant cela, les traders discrets choisissaient mentalement des niveaux de vente, avec toute la charge émotionnelle que cela implique.

Sur les marchés crypto, le take-profit est d'autant plus critique que la volatilité peut être extrême. Un actif qui quadruple peut aussi vite retomber si le trader ne fixe pas d'objectif. Le [[Trading bot]] permet d'automatiser cette discipline 24h/24, une nécessité sur un marché qui ne dort jamais. Des plateformes comme [[3Commas]] et [[Bitsgap]] permettent de configurer facilement des ordres take-profit assortis aux positions.

## Mécanismes / caractéristiques / détails

**Mécanisme de déclenchement** : quand le prix marché atteint le niveau de take-profit, l'ordre se transforme en ordre au marché (ou limité, selon le paramétrage). L'exécution est immédiate mais sujette au [[Slippage]] si la liquidité est insuffisante au prix visé. Pour des objectifs de grande taille, il peut être pertinent d'utiliser une exécution fractionnée via [[TWAP (Time-Weighted Average Price)]] ou [[Exécution VWAP]].

**Calcul de l'objectif** : les méthodes de calcul du take-profit sont diverses. L'[[Analyse technique pour bots]] utilise les niveaux de résistance (support pour les shorts), les [[Fibonacci retracement|niveaux de Fibonacci]], le [[Volume profile]] pour identifier les zones de prix significatives. L'approche par ratio fixe (multiples du risque) dérive le TP du [[Ordre stop-loss]] selon le [[Risk-reward ratio]] désiré.

**Take-profit vs trailing stop** : pour les mouvements de grande amplitude, le [[Trailing stop]] est préféré au take-profit fixe car il suit le prix à la hausse, verrouillant plus de profit sur les trends forts. Le take-profit fixe reste pertinent lorsque le marché approche d'une zone de résistance identifiée où une correction est attendue.

**Interactions avec le stop-loss** : le TP et le SL sont généralement posés simultanément à l'ouverture de la position. Leur rapport définit le expectancy de la stratégie. Le [[Backtesting]] permet de tester différentes combinaisons de SL/TP sur l'historique pour trouver les paramètres optimaux selon la [[Stratégie de momentum|stratégie]] employée.

**Partial take-profit** : certains traders utilisent des sorties partielles — par exemple, fermer 50 % de la position à 1:2 risque/récompense et laisser courir les 50 % restants avec un [[Trailing stop]]. Cette approche combine certitude de gain et potentiel de gain extendu.

## Nuances, critiques, limites

**Sortie précoce systématique** : le take-profit fixe est une règle simple mais peut être sous-optimale. Si le marché est en tendance forte, sortir à l'objectif peut signifie laisser beaucoup de profit sur la table. Les stratégies de [[Stratégie de momentum]] tendent à préférer des stops plus que des take-profits stricts, laissant le marché déterminer la sortie.

**Level grinding** : sur des marchés Range-bound, le prix peut atteindre répétitivement le take-profit sans que la position ne soit jamais fermée car le marché rebondit juste avant. Inversement, un take-profit peut être atteint, l'ordre exécuter, puis le prix continuer dans la même direction — créant un regret de ne pas avoir laissé courir.

**Liquidité à l'objectif** : dans les [[Données de niveau 2|niveaux de liquidité]], les objectifs de prix sont prévisibles. Des acteurs informés peuvent placer des ordres à ces niveaux, absorbant la liquidité avant que les ordres take-profit ne soient exécutés. C'est une forme de [[Impact de marché]] microscopique.

## Liens et implications

Le take-profit est indissociable du [[Ordre stop-loss]] dans tout système de [[Gestion du risque]] complète. Les deux forment un "bounds pair" qui caractérise chaque position. L'[[Ordre stop-limite]] peut être utilisé comme déclencheur conditionnel pour les deux mécanismes.

Sur les stratégies de [[Grid trading]], le take-profit n'existe pas au sens traditionnel — la sortie est determinée par la largeur du grid et le nombre de niveaux. Pour le [[Bot DCA]], le take-profit est souvent paramétré comme un prix moyen plus un pourcentage.

Les stratégies de [[Martingale strategy]] se passent généralement de take-profit fixe car elles visent des retournements de prix, alors que les stratégies contrarian comme la [[Stratégie de mean reversion]] utilisent des take-profits serrés sur des mouvements de prix courts.

## Sources

[^1]: Tharp, Van K. *Trade Your Way to Financial Freedom*. McGraw-Hill, 1998.
[^2]: Elder, Alexander. *The New Trading for a Living*. Wiley, 2014.
[^3]: Murphy, John J. *Technical Analysis of the Financial Markets*. NYU Salomon Center, 1999.
