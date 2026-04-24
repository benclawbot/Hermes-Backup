---
titre: "ADX (Average Directional Index)"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/tendance, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[ATR (Average True Range)]]", "[[Analyse technique pour bots]]", "[[Stratégie de momentum]]", "[[Backtesting]]"]
liens_opposition: []
---

# ADX (Average Directional Index)

> [!info] Résumé
> L'ADX (Average Directional Index) mesure la force d'une tendance sans indiquer sa direction. Il est utilisé pour déterminer si un marché est en tendance (ADX > 25) ou en range (ADX < 20), permettant aux traders d'adapter leur stratégie en conséquence.

## Définition

L'ADX est une composante du système de trading Directional Movement Index (DMI) créé par J. Welles Wilder. L'ADX lui-même ne mesure que la force de la tendance, pas sa direction. Il est dérivé du +DI (Directional Indicator positif) et du -DI (Directional Indicator négatif).

L'ADX est calculé comme la moyenne mobile du DX (Directional Index), lui-même dérivé du rapport entre le +DI et le -DI lissé. L'ADX augmente quand la tendance se renforce, diminue quand le marché entre en range.

Les valeurs de l'ADX vont de 0 à 100. Un ADX en dessous de 20 indique un marché sans tendance (range). Un ADX entre 20 et 25 est une zone grise. Un ADX au-dessus de 25 signale une tendance, au-dessus de 40 une tendance forte, au-dessus de 60 une tendance très forte.

## Contexte et origine

J. Welles Wilder a développé l'ADX et le système DMI dans les années 1970, publié dans "New Concepts in Technical Trading Systems" (1978), le même livre qui a introduit l'ATR, le RSI, et le Parabolic SAR.

Wilder cherchait un moyen de quantifier la "force" d'une tendance de manière objective. Avant l'ADX, les traders identificaient les tendances visuellement, ce qui rendait difficile l'automatisation et le backtesting. L'ADX a permis de mettre en place des règles de trading algorithmique autour de la force de la tendance.

L'ADX est particulièrement populaire en [[trading algorithmique]] pour déterminer les conditions de marché avant d'appliquer une stratégie. Une stratégie de breakout peut exiger un ADX > 25 avant de considérer les signaux comme valides, évitant les faux signaux en marché latéral.

## Mécanismes et caractéristiques

Le système DMI comprend trois lignes : +DI (verde), -DI (rouge), et ADX (noir). Le +DI mesure la force du mouvement haussier. Le -DI mesure la force du mouvement baissier. L'ADX mesure la force globale.

Le signal d'achat directionnel vient quand +DI croise au-dessus de -DI, avec ADX en hausse. Le signal de vente directionnel vient quand -DI croise au-dessus de +DI, avec ADX en hausse.

L'ADX seul (sans les lignes +DI/-DI) est souvent utilisé comme filtre. Une règle simple : ne prendre que les signaux dans la direction de la tendance si ADX > 25. En dessous de 20, pas de trades car le marché est en range.

Le comportement de l'ADX pendant un trade est également utilisé. Si l'ADX commence à baisser alors qu'un trade est ouvert, cela peut signaler un affaiblissement de la tendance et justifier la prise de profit ou le resserrement du stop loss.

## Nuances, critiques, limites

L'ADX est retardataire. Il est basé sur des moyennes mobiles de prix passés, donc il ne prédit pas les changements de tendance, il les confirme après qu'ils se soient produits. En marché volatile, les signaux arrivent tard.

L'ADX ne distingue pas une tendance haussière d'une tendance baissière. Deux actifs avec le même ADX peuvent avoir des directions opposées. Le trader doit utiliser +DI et -DI pour déterminer la direction, ou ajouter un autre indicateur directionnel.

En marché range (ADX < 20), les stratégies de mean reversion fonctionnent mieux. Les traders qui appliquent des stratégies de tendance dans ces conditions subissent des pertes. Reconnaître le contexte (tendance vs range) est crucial.

L'ADX peut rester élevé pendant les retournements de tendance. Un ADX très haut pendant une vente massive peut indiquer une tendance baissière forte, pas un signal d'achat. L'interprétation doit tenir compte du contexte.

## Liens et implications

L'[[ATR]] et l'ADX sont souvent utilisés ensemble pour former un système de trading complet. L'ATR fixe les stops et les tailles de position en fonction de la volatilité. L'ADX détermine si la stratégie à utiliser est une stratégie de tendance ou de range.

La [[stratégie de momentum]] utilise l'ADX comme filtre principal. Une stratégie de momentum typique entre en position quand l'ADX dépasse 25 et sort quand il descend en dessous de 20.

L'analyse technique pour bots intègre l'ADX dans les systèmes multi-indicateurs.

## Sources