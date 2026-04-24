---
titre: "Aave"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/aave, #concept/defi, #concept/lending]
créé: 2026-04-21
liens_forts: ["[[DeFi lending protocols]]", "[[Compound]]", "[[Flash loans]]", "[[Yield farming]]", "[[MakerDAO]]"]
liens_opposition: []
---

# Aave

> [!info] Résumé
> Aave est un protocole de lending décentralisé permettant d'emprunter et de prêter des cryptomonnaies via des smart contracts. Il fut le premier à introduire les flash loans et continue d'innover avec des fonctionnalités comme les prêt hypothécaires et les taux d'intérêt stables.

## Définition

Aave est un protocole de money market décentralisé construit sur Ethereum. Il permet aux utilisateurs de déposer des cryptomonnaies dans des pools de liquidité pour earn des intérêts, ou d'emprunter des actifs en deposit un collateral supérieur à 100% de la valeur empruntée.

Le protocole utilise des taux d'intérêt variables qui s'ajustent en temps réel selon l'utilisation du pool. Quand le pool est peu utilisé, les taux sont bas pour attirer les emprunteurs. Quand le pool est proche de la saturation, les taux augmentent pour compenser le risque de rareté.

Aave a introduit plusieurs innovations majeures dans le space DeFi lending :
- Flash loans : prêts sans collateral exécutés dans une seule transaction
- Taux d'intérêt stables : option de taux fixe pour les emprunteurs
- Prêts hypothécaires : nouveaux types de collatéraux
- Portails : prête contre des collatéraux cross-chain

Le token AAVE est le token de gouvernance du protocole. Les détenteurs peuvent stake leurs tokens dans le Safety Module pour protéger le protocole contre les deficits et earn des récompenses.

## Contexte et origine

Aave a été fondé en 2017 sous le nom ETHLend par Stani Kulechov, devenant l'un des premiers protocoles DeFi. Le nom "Aave" signifie "fantôme" en finnois, reflétant la nature peer-to-peer du protocole.

En 2020, Aave a lancé sa V2 avec des améliorations significatives, incluant la possibilité de collateral swap, les repayements flash, et un mécanisme de gouvernance révisé. La même année, Aave est devenu l'un des plus grands protocoles DeFi par TVL.

En 2021-2022, Aave a lancé des produits institutionnels (Aave Arc) et descollaborations avec des entités traditionnelles. Le protocole continue d'innover avec des taux d'intérêt stables et des markets pour des actifs non-cryptographiques.

## Mécanismes et caractéristiques

Les pools de liquidité Aave regroupent les dépôts des prêteurs. Chaque actif a son propre pool avec son propre taux d'intérêt. Les prêteurs reçoivent des aTokens (token de receipt) qui s'accumulent avec les intérêts.

Les emprunteurs déposent un collateral (généralement 150%+ de la valeur) et peuvent emprunter. Si le health factor (facteur de santé) tombe sous 1, une liquidation est déclenchée. Les liquidateurs peuvent acheter le collateral avec une prime.

Le Health Factor est calculé comme :
HF = (Collateral × Prix × Seuil_liquidité) / Dette_totale

Un HF supérieur à 1 signifie que le collateral vaut plus que la dette. En dessous de 1, des liquidations peuvent survenir.

Les flash loans Aave permettent d'emprunter n'importe quel montant sans collateral, à condition de rembourser dans le même bloc. Les frais sont de 0,09% (avec 0,09% going to the protocol and the rest to flash loan initiators in some cases).

## Nuances, critiques, limites

Les risques de smart contract persistent malgré de nombreux audits. En 2023, un bug dans Aave V3 a été identifié et corrigé avant exploitation. Cependant, le risque zéro n'existe pas.

La concentration des risques est une préoccupation. Si un actif collateral chute précipitamment, de nombreuses positions pourraient être liquidées simultanément, causant un effet domino sur les prix.

Les risques de oracle peuvent affecter Aave. Si les prix sont manipulés, les liquidations peuvent être injustes. Aave utilise des aggregateurs de prix (Chainlink) pour atténuer ce risque.

## Liens et implications

[[Aave]] est un protocole central des [[DeFi lending protocols]]. Il partage des similarités avec [[Compound]] et [[MakerDAO]]. Les [[flash loans]] ont été popularisés par Aave. Le [[yield farming]] utilise souvent Aave pour les stratégies de leverage.

Le token AAVE est utilisé pour la [[governance tokens|gouvernance]] du protocole. Les [[staking rewards]] peuvent être obtenus en staking AAVE dans le Safety Module. Les [[cross-chain bridges]] sont intégrés via les Portals Aave.

Le [[risk-reward ratio]] du lending sur Aave doit inclure les risques de liquidation. Le [[backtesting]] de stratégies avec Aave requiert des données de taux d'intérêt. La [[volatility scaling]] affecte les valorisations de collatéral.

## Sources

[^1]: Aave Documentation, "Aave Protocol V3", https://docs.aave.com (consulted 2026)
[^2]: Aave Governance, "AAVE Token", https://aave.com (consulted 2026)
[^3]: DeFi Pulse, "Aave TVL", https://defipulse.com (consulted 2026)
