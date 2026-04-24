---
titre: "MakerDAO"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/makerdao, #concept/defi, #concept/stablecoin]
créé: 2026-04-21
liens_forts: ["[[DeFi lending protocols]]", "[[Stablecoin dynamics]]", "[[Dai]]", "[[Governance tokens]]", "[[Yield farming]]"]
liens_opposition: []
---

# MakerDAO

> [!info] Résumé
> MakerDAO est le protocole qui émet DAI, un stablecoin décentralisé collateralisé par des cryptomonnaies. Le protocole utilise des "vaults" où les utilisateurs verrouillent des collatéraux pour générer des DAI en dette, avec un système de gouvernance décentralisée.

## Définition

MakerDAO est un protocole de crédit décentralisé qui émet DAI, un stablecoin indexé au dollar américain avec un mécanisme de stabilisation hybride. Contrairement aux stablecoins centralisés (USDC, USDT), DAI est garanti par des collatéraux crypto deposited dans des vaults.

Le mécanisme fonctionne ainsi : un utilisateur dépose des collatéraux (ETH, WBTC, ou autres actifs approvalés) dans un vault. En échange, il génère des DAI jusqu'à un maximum determined par le ratio de collatéralisation. Le minimum typical est 150%.

Si la valeur du collatéral chute et que le ratio tombe sous le minimum, le vault est liquidé. Une partie du collatéral est vendue pour rembourser la dette DAI, avec une prime pour les liquidateurs.

DAI est unique parmi les stablecoins car son taux d'épargne (DSR) est contrôlé par la gouvernance. Les détenteurs de DAI peuvent lock leur DAI dans le DSR pour earn un taux d'intérêt.

## Contexte et origine

MakerDAO a été lancé en 2017 par Rune Christensen. Le protocole a evolué depuis le "Single Collateral DAI" (supportant seulement ETH) vers le "Multi Collateral DAI" qui supporte de nombreux collatéraux.

Le protocole a survécu au crash de mars 2020 (Black Thursday) où de nombreux vaults ont été liquidés avec des pertes importantes en raison de la volatilité extrême. Cet événement a mené à des améliorations du système.

MakerDAO est considéré comme l'une des organisations autonomes décentralisées (DAO) les plus établies. La gouvernance via le token MKR a résisté à l'épreuve du temps, avec des milliers de détenteurs participants aux décisions.

## Mécanismes et caractéristiques

Le système MakerDAO comprend plusieurs composants :

1. Vaults : contrats où les utilisateurs déposent des collatéraux et génèrent des DAI
2. DAI : le stablecoin émis, targeté à $1
3. DSR : Dai Savings Rate, le taux d'intérêt pour les détenteurs de DAI
4. MKR : le token de gouvernance, utilisé pour couvrir les deficits

Le système utilise des oracles pour obtenir les prix des collatéraux. Ces prix sont moyennés sur le temps pour éviter les manipulations. La sélection des oracles est faite par les détenteurs de MKR.

Les types de collatéraux acceptés ont évolé. Initialement ETH seulement, le protocole supporte maintenant WBTC, USDC (via PSM), WETH, et d'autres. Le PSM (Peg Stability Module) permet des échanges 1:1 de USDC contre DAI.

## Nuances, critiques, limites

L'efficacité capital de MakerDAO est limitée par les ratios de collatéralisation élevés. Pour émettre 100$ de DAI, il faut deposit 150$ ou plus de collatéral. Cela est moins efficace que les stablecoins centralisés.

Le risque de liquidation existe toujours. Pendant la volatilité, les vaults peuvent être liquidés automatiquement. Les utilisateurs doivent gérer activement leurs ratios de collatéralisation.

La gouvernance de MakerDAO a été critiquée pour sa complexity et sa lenteur à prendre des décisions. Certains soutiennent que le processus est trop lent pour répondre aux urgences.

## Liens et implications

[[MakerDAO]] émet [[Dai]], un stablecoin central pour le [[DeFi lending protocols|écosystème DeFi]]. Les vaults sont le mécanisme de collatéralisation. Le [[governance tokens|MKR]] est le token de gouvernance.

Le [[stablecoin dynamics|Dai]] a des dynamiques uniques grâce au DSR. Les stratégies de [[yield farming]] peuvent utiliser DAI comme activo de base. Les [[liquidity pools]] DAI sont essentiels pour les échanges.

Le [[risk-reward ratio]] des vaults doit inclure les risques de liquidation. La [[volatility scaling]] affecte directement les ratios de collatéralisation. Le [[backtesting]] doit inclure les événements de volatilité historique.

## Sources

[^1]: MakerDAO Documentation, "MakerDAO", https://docs.makerdao.com (consulted 2026)
[^2]: MakerDAO Governance, "MKR Token", https://makerdao.com (consulted 2026)
[^3]: Christensen, "The History of MakerDAO", https://blog.makerdao.com (consulted 2026)
