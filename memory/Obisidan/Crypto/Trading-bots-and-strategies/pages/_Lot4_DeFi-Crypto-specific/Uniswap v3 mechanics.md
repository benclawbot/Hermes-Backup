---
titre: "Uniswap v3 mechanics"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/uniswap, #concept/dex, #concept/amm]
créé: 2026-04-21
liens_forts: ["[[Automated Market Makers (AMM)]]", "[[Uniswap v2 mechanics]]", "[[Liquidity pools]]", "[[Impermanent loss]]", "[[Gas optimization]]"]
liens_opposition: []
---

# Uniswap v3 mechanics

> [!info] Résumé
> Uniswap v3 introduit la liquidity concentrée (concentrated liquidity), permettant aux LPs de concentrer leurs liquidités sur des plages de prix spécifiques. Cette innovation améliore drastiquement la capital efficiency mais complexifie la gestion des positions.

## Définition

Uniswap v3 est la troisième version du protocole AMM leader, introduisant le concept de "liquidity concentrée". Les LPs peuvent désormais concentrer leurs liquidités sur des plages de prix spécifiques au lieu de toute la courbe de prix de 0 à l'infini.

Dans v2, le capital était distribué uniformément sur toute la plage de prix. Dans v3, un LP peut choisir de ne fournir des liquidités qu'entre 1000$ et 3000$ pour un pool ETH/USDC, par exemple. Cela permet au même capital de générer plus de frais.

Les positions sont représentées par NFTs plutôt que par des tokens fongibles (v2). Chaque position a ses propres frontières de prix, son propre montant de liquidité, et sa propre collecte de frais.

v3 introduit également des "tiers de frais" différents (0,05%, 0,30%, 1%) permettant aux pools de s'adapter à différents types d'actifs. Les stablecoins utilisent des pools à frais bas, les paires volatiles utilisent des frais plus élevés.

## Contexte et origine

Uniswap v3 a été lancé en mai 2021 par Hayden Adams et l'équipe d'Uniswap Labs. Cette version était le résultat de mois de recherche sur l'amélioration de la capital efficiency des AMM.

La capital efficiency était le principal crítica des AMM. Dans v2, 90% du capital pouvait rester inactif car les prix ne visitaient jamais ces régions. v3 vise à résoudre ce problème.

L'introduction des NFTs pour les positions a été controversial car ellerompt la fongibilité des LP tokens. Cependant, cela a permis des innovations comme les LP(tokens en tant que NFTs négociables.

## Mécanismes et caractéristiques

La liquidity concentrée fonctionne en divisant la courbe de prix en "ticks". Chaque tick représente un niveau de prix. Les LPs déposent des liquidités entre deux ticks. Le capital n'est actif que dans cette plage.

À l'intérieur d'une range, le comportement est similaire à v2 : x × y = k. Mais en dehors de la range, toute la liquidité est dans un seul token. Si le prix sort de la range, le LP n'est plus dans le jeu.

Les frais collectés par position sont calculés en fonction du volume échangé dans la range et de la proportion de liquidité fournie par le position.

Les "ticks" sont des points sur la courbe de prix où le prix unitaire change. v3 permet de configurer desquels ticks sont actives. Les frais sont accumulés dans le contract et réclamés quand l'utilisateur modifie ou retire sa position.

## Nuances, critiques, limites

La complexité accrue de v3 crée une expérience utilisateur plus difficile. Les LPs doivent maintenant choisir leurs ranges de prix, ce qui ajoute une decision de trading en plus du simple deposit.

L'impermanent loss est amplifié pour les positions concentrées. Si le prix sort de la range, le LP se retrouve avec 100% d'un token. Si le prix revient dans la range, l'impermanent loss peut être plus severe.

Les attaques de sandwich restent possibles. La fragmentation de la liquidité entre múltiples positions peut créer des opportunités supplémentaires pour les extracteurs de MEV.

## Liens et implications

[[Uniswap v3 mechanics]] améliore [[Uniswap v2 mechanics]] avec la concentrated liquidity. Les [[liquidity pools]] dans v3 ont des plages de prix définies. L'[[impermanent loss]] est Different pour les positions concentrées.

La [[gas optimization]] est plus importante en v3 car les modifications de positions coûtent du gaz. Les [[sandwich attacks]] exploitent toujours les transactions. Les [[flash loans]] sont toujours disponibles via les flash swaps.

Le [[risk-reward ratio]] doit être réévalué pour les positions concentrées. La [[volatility scaling]] peut aider à choisir les bonnes ranges. Le [[backtesting]] de stratégies v3 est plus complexe.

## Sources

[^1]: Uniswap Documentation, "Uniswap v3", https://docs.uniswap.org (consulted 2026)
[^2]: Adams, "Uniswap v3 Core", https://uniswap.org (consulted 2026)
[^3]: x3y, "Concentrated Liquidity", https://research.uniswap.org (consulted 2026)
