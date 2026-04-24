---
titre: "Automated Market Makers (AMM)"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/amm, #concept/defi, #concept/pricing]
créé: 2026-04-21
liens_forts: ["[[Decentralized exchanges (DEX)]]", "[[Liquidity pools]]", "[[Impermanent loss]]", "[[Yield farming]]", "[[Slippage]]"]
liens_opposition: ["[[Central limit order book (CLOB)]]"]
---

# Automated Market Makers (AMM)

> [!info] Résumé
> Les Automated Market Makers (AMM) sont des protocoles qui utilisent des formules mathématiques pour déterminer les prix des actifs dans les liquidity pools, permettant des échanges automatiques sans order book traditionnel. Ces systèmes ont démocratisé l'accès au market making pour les utilisateurs ordinaires.

## Définition

Un Automated Market Maker (AMM) est un protocole d'échange décentralisé qui utilise des algorithmes mathématiques pour fixer les prix des actifs et exécuter les échanges. Contrairement aux market makers traditionnels qui placent des ordres dans un order book, les AMM utilisent des liquidity pools contenant des paires de tokens dont les proportions déterminent le prix d'échange selon une formule prédéfinie.

Le modèle AMM le plus répandu est le constant product market maker, popularisé par Uniswap, qui utilise la formule x × y = k (où x et y sont les quantités de chaque token dans le pool, et k est une constante). Cette formule garantit que le produit des quantités de tokens reste constant lors des échanges, créant ainsi une courbe de prix continue.

D'autres modèles existent : le constant sum market maker (x + y = k) qui maintient des prix égaux mais n'offre pas de liquidité infinie ; le constant geometric mean market maker ; et les modèles hybrid qui combinent plusieurs fonctions pour réduire le slippage sur les gros ordres. Chaque modèle présente des compromis entre slippage, capital efficiency, et vulnérabilité aux attaques.

Les AMM permettent à n'importe qui de devenir market maker en déposant des tokens dans un pool de liquidité. Ces liquidity providers (LP) reçoivent des tokens représentant leur part du pool, et gagnent une proportion des frais de transaction générés par les échanges. Ce mécanisme a démocratisé le market making, permettant aux holders ordinaires de participer.

## Contexte et origine

Le concept d'Automated Market Maker a été Formalisé par les recherches de Guillermo Angeris et Tarun Chitra en 2020, qui ont démontré que le constant product market maker (x × y = k) converge vers le prix du marché sous certaines conditions. Cependant, l'origine intellectuelle remonte aux travaux d'Adi Shamir et de la finance quantitative sur les market makers automatisés.

Hayden Adams a lancé Uniswap en novembre 2018, basant son protocole sur les travaux de Vitalik Buterin qui avait proposé le concept sur son blog. Le succès de Uniswap a prouvé que les AMM pouvaient fonctionner de manière pratique et sécuriser des milliards de dollars de transactions.

La même année, Curve Finance (Michael Egorov) a introduit des AMM optimisés pour les stablecoins et les assets corrélés, réduisant significativement le slippage pour ces actifs. Balancer (Fernando Martinelli) a permis des pools avec jusqu'à 8 tokens et des ratios personnalisables, étendant les possibilités de création de marché.

## Mécanismes et caractéristiques

Quand un trader échange des tokens dans un AMM, la formule mathématique détermine le nouveau prix. Si un trader achète du ETH avec des USDC, la quantité de ETH dans le pool diminue et la quantité de USDC augmente. Le prix du ETH dans le pool s'ajuste automatiquement selon la formule du protocole.

Le slippage est la différence entre le prix attendu et le prix réel d'exécution. Plus la taille de la transaction est grande par rapport à la liquidité du pool, plus le slippage est important. Les traders doivent estimer le slippage avant d'exécuter et peuvent définir un slippage tolerance pour contrôler ce paramètre.

L'impermanent loss (perte impermanente) est le phénomène par lequel la valeur des tokens déposés dans un pool AMM peut être inférieure à la valeur qu'auraient eue ces tokens s'ils étaient restés dans un wallet. Cette perte devient "permanente" quand le LP retire ses fonds après que les prix ont divergé. Comprendre l'impermanent loss est essentiel pour évaluer la rentabilité du liquidity providing.

Les frais de transaction (souvent 0,3% sur Uniswap) sont distribués aux LPs proportionnellement à leur part du pool. Ces frais rémunèrent le risque pris par les liquidity providers et compensent partiellement l'impermanent loss. Sur des pools très actifs, les frais générés peuvent dépasser les pertes.

## Nuances, critiques, limites

La capital efficiency des AMM est intrinsèquement basse. Pour maintenir des prix compétitifs avec un slippage acceptable, les pools doivent avoir beaucoup de capital dormants. Les AMM nouvelle génération (comme Uniswap v3) permettent de concentrer la liquidité pour améliorer l'efficience capital, mais augmentent la complexité et le risque.

L'adversarial design des AMM les rend vulnérables aux attaques. Les attaquants peuvent exploiter les transactions avec un slippage mal configuré, ou profiter du délai entre la soumission et la confirmation des transactions pour extraire de la valeur. Les sandwich attacks sont une forme d'exploitation courante.

Lesrug pulls et les scams sont plus fáciles sur DEX car il n'y a pas de intermédiaire pour vérifier les projets. Les utilisateurs doivent researchindependently avant d'investir dans des tokens inconnus. Les mécanismes de sniping (achats immédiats de nouveaux tokens) créent des dynamique speculative intense.

## Liens et implications

Les AMM sont le cœur des [[Decentralized exchanges (DEX)]] modernes. Ils utilisent les [[liquidity pools]] comme mécanisme de base pour le pricing. Les stratégies de [[yield farming]] dépendent des AMM pour générer des rendements sur les positions de liquidité.

L'[[impermanent loss]] est un risque inhérent aux AMM que les liquidity providers doivent comprendre. Le [[slippage]] et la [[price impact]] sont des paramètres critiques pour les traders utilisant les AMM. Les [[flash loans]] sont souvent utilisés en combinaison avec les AMM pour des stratégies d'arbitrage.

Les [[DEX aggregators]] améliorent l'expérience utilisateur en findant les meilleurs prix across múltiples AMM. Le [[market making]] sur AMM diffère des stratégies traditionnelles en raison de l'impermanent loss. Les [[liquidity incentives]] des protocoles encouragent la participation aux pools.

## Sources

[^1]: Angeris & Chitra, "Improved Price Oracles: Constant Product Market Makers", arXiv (2020)
[^2]: Uniswap Documentation, "How Uniswap Works", https://docs.uniswap.org (consulted 2026)
[^3]: Curve Finance Documentation, "StableSwap", https://curve.fi (consulted 2026)
