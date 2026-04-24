---
titre: "DeFi lending protocols"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/lending, #concept/defi, #concept/borrowing]
créé: 2026-04-21
liens_forts: ["[[Aave]]", "[[Compound]]", "[[MakerDAO]]", "[[Flash loans]]", "[[Yield farming]]"]
liens_opposition: []
---

# DeFi lending protocols

> [!info] Résumé
> Les protocoles de lending DeFi sont des smart contracts permettant d'emprunter et de prêter des cryptomonnaies sans intermediary. Ces protocoles utilisent des collaterals surdimensionnés et des taux d'intérêt variables pour créer des marchés de capitaux entièrement on-chain.

## Définition

Les protocoles de lending DeFi permettent aux utilisateurs de prêter et d'emprunter des cryptomonnaies de manière automatisée et sans permission. Contrairement aux prêteurs traditionnels, les smart contracts facilitent les prêts sans avoir besoin d'une banque ou d'un intermédiaire financier.

Le fonctionnement basique est le suivant : les prêteurs déposent des fonds dans un pool de liquidité et reçoivent des intérêts. Les emprunteurs déposent un collateral (généralement supérieur à 100% de la valeur empruntée) et peuvent emprunter des fonds. Les taux d'intérêt sont déterminés algorithmiquement en fonction de l'offre et de la demande.

Le collateral doit être surdimensionné car les cryptomonnaies sont volatiles. Un emprunteur qui dépose 100$ d'ETH ne peut typically emprunter que 50-75$ de stablecoins. Si la valeur du collateral chute, une liquidation est déclenchée.

Les protocoles de lending sont un pilier du DeFi car ils permettent :
- La génération de rendements sur les holdings crypto
- L'accès à des fonds sans vendre ses positions
- Le leverage pour les traders
- Le refinancement automatisé

## Contexte et origine

Compound Finance a été le premier protocole de lending majeur, lancé en 2018 par Robert Leshner. Compound a créé un marché monétaire automatisé où les taux d'intérêt s'ajustent en temps réel selon l'utilisation du pool.

Aave (fondé sous le nom ETHLend en 2017) a été le premier à introduire les flash loans et les taux d'intérêt stables. La communauté Aave a fait évoluer le protocole vers un système plus sophistiqué avec plusieurs types de prêts.

MakerDAO, bien que principalement connu pour DAI, fonctionne comme un protocole de lending avec ses vaults. Les utilisateurs verrouillent des collateraux et génèrent de la dette en DAI.

## Mécanismes et caractéristiques

Les composants principaux d'un protocole de lending :

1. Pool de liquidité : où les fonds sont déposés et empruntés
2. Moteur de taux d'intérêt : calcule les taux en temps réel selon l'utilisation
3. Système de collatéral : gère les dépôts et les liquidations
4. Oracles de prix : fournissement les prix des actifs pour calculer les ratios

Le taux d'intérêt est typiquement une fonction linéaire de l'utilisation du pool. Si peu de fonds sont empruntés, le taux est bas. Si le pool est presque full, les taux augmentent pour attirer plus de prêteurs.

Les liquidations sont déclenchées quand le ratio de collateral d'un emprunteur tombe sous le seuil. n'importe qui peut exécuter la liquidation et reçoit une prime (généralement 5-10% du collateral).

Les risks principaux :
- Risque de smart contract
- Risque d'oracle (prix manipulés)
- Risque de liquidation
- Risque de undercollateralization

## Nuances, critiques, limites

L'undercollateralization est un mythe dans la plupart des protocoles DeFi. Pour emprunter 1$ de valeur, vous devez dépôt 1,5-2$ de collateral. Cela limite l'efficacité capital par rapport aux système financiers traditionnels.

Les risques de oracle sont réels. Si le prix d'un actif est manipulé sur l'oracle, les liquidations peuvent être falsifiées ou au contraire, des positions saines peuvent être liquidées injustement.

Les taux d'intérêt variables peuvent fluctuer largement. Pendant les periods de forte demande, les taux peuvent atteindre des niveaux squeeze qui rendent le borrowing coûteux.

## Liens et implications

Les [[DeFi lending protocols]] comme [[Aave]], [[Compound]], et [[MakerDAO]] sont les principaux acteurs. Les [[flash loans]] sont une fonctionnalité clé de ces protocoles. Le [[yield farming]] utilise souvent les protocoles de lending.

Les [[stablecoin dynamics]] sont étroitement liées car les stablecoins sont les actifs les plus empruntés. Les [[liquidity pools]] des protocoles de lending fonctionnent différemment des pools AMM. Le [[staking rewards]] peut être utilisé comme collateral sur certains protocoles.

Le [[risk-reward ratio]] du lending doit inclure les risques de liquidation et de smart contract. La [[volatility scaling]] affecte les valorisations de collatéral. Le [[backtesting]] doit inclure les scénarios de liquidation.

## Sources

[^1]: Compound Finance Documentation, "How Compound Works", https://compound.finance (consulted 2026)
[^2]: Aave Documentation, "Aave Protocol", https://docs.aave.com (consulted 2026)
[^3]: MakerDAO Documentation, "MakerDAO", https://docs.makerdao.com (consulted 2026)
