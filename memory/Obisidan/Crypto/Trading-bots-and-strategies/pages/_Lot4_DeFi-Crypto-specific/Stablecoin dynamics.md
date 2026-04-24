---
titre: "Stablecoin dynamics"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/stablecoin, #concept/defi, #concept/monetary]
créé: 2026-04-21
liens_forts: ["[[Wrapped tokens]]", "[[Decentralized exchanges (DEX)]]", "[[DeFi lending protocols]]", "[[Curve Finance]]", "[[Yield farming]]"]
liens_opposition: ["[[Bitcoin]]"]
---

# Stablecoin dynamics

> [!info] Résumé
> Les stablecoins dynamics décrivent les mécanismes par lesquels les stablecoins maintiennent leur peg (ancrage) à une devise. Chaque type de stablecoin (collateralisé, algorithmique, etc.) présente des dynamiques différentes avec des risques distincts.

## Définition

Un stablecoin est un actif numérique conçu pour maintenir une valeur stable en étant pegged à un actif de référence (souvent le dollar américain). Les stablecoins sont essentiels pour le fonctionnement du DeFi car ils permettent la fourniture de liquidité sans volatilité.

Il existe plusieurs types de stablecoins selon leur mécanisme de stabilisation :

1. Collateralized on-chain : chaque token est backed par un collateral supérieur à 1:1 en cryptomonnaie. Ex: MakerDAO DAI ( maintenant plus mult-collateral).

2. Collateralized off-chain : les tokens sont backed par des actifs traditionnels custodied par une entité centrale. Ex: USDC (Coinbase), USDT (Tether).

3. Algorithmique : utilisent des mécanismes automatiques pour maintenir le peg sans collateral traditionnel. Ex: FRAX (partiellement algorithmique).

4. Rebasing : ajustent l'offre de tokens held par chaque porteur pour maintenir le peg. Ex: Ampleforth.

Les dynamics de chaque type diffèrent significativement en termes de risque, décentralisation, et résilience.

## Contexte et origine

Le premier stablecoin majeur fut Center (qui a evolué en USDC) lancé par Circle en 2018. USDT (Tether) existed depuis 2014 mais a été critiqué pour son manque de transparence sur les réserves.

MakerDAO a créé DAI en 2017 comme un stablecoin decentralized vraiment existant sans counterpartie centralisée. DAI est collateralisé par des ETH et autres cryptomonnaies verrouillés dans des vaults.

L'effondrement des stablecoins algorithmiques en 2022 (UST/LUNA de Terraform Labs) a été un événement majeur. UST a perdu son peg de manière catastrophique, causant des pertes de dizaines de milliards de dollars et remodelant la perception du risque des stablecoins.

## Mécanismes et caractéristiques

Pour les stablecoins sur-collateralisés comme DAI :

L'utilisateur dépose des collateral dans un vault et génère des DAI en dette. Si le ratio de collateral tombe en dessous du minimum (souvent 150%), le vault est liquidé. Ce mécanisme garantit que chaque DAI est backed par sufficient collateral.

Pour les stablecoins centralisés comme USDC et USDT :

La société émettrice maintient des réserves (cash, bonds, commercial paper) et émet des tokens 1:1. Les utilisateurs peuvent échanger tokens et USD via les services de la société. La confiance repose sur la transparence et laaudit des réserves.

Pour les stablecoins algorithmiques (avant l'effondrement) :

Le mécanisme utilisait des expans/contrats pour maintenir le peg. Si le prix descendait sous $1, le système achetait des tokens pour réduire l'offre. Si le prix montait au-dessus, de nouveaux tokens étaient émis. Le problème était la réflexivité.

## Nuances, critiques, limites

Les stablecoins centralisés présentent un risque de contrepartie. Les utilisateurs doivent faire confiance à l'émetteur pour maintenir les réserves. Tether a été critiqué pour le manque de transparence sur les réserves de USDT.

Les stablecoins sur-collateralisés en cryptomonnaie sont vulnérables aux crashes de marché. Quand les collateral comme ETH baissent rapidement, les vaults peuvent être liquidés, causant des ventesforced qui amplifient le crash.

Les stablecoins algorithmiques se sont révélés fondamentalement non viables en pratique. Le modèle de UST montrait que même avec des mechanisms complexes, un bank run était possible et dévastateur.

## Liens et implications

Les [[stablecoin dynamics]] affectent les [[Decentralized exchanges (DEX)]] où ils sont échangés. Les [[DeFi lending protocols]] utilisent les stablecoins comme actif de lending populaire. [[Curve Finance]] est spécialisé dans les pools de stablecoins.

Les [[wrapped tokens]] comme WBTC sont souvent tradés contre des stablecoins. Le [[yield farming]] avec des stablecoins offre des rendements stables sans impermanent loss. Les [[liquidity pools]] de stablecoins sont essentiels pour le DeFi.

Le [[risk-reward ratio]] des stablecoins doit inclure le risque de depeg. La [[volatility scaling]] ne s'applique pas aux stablecoins. Le [[backtesting]] de stratégies avec stablecoins doit inclure les événements de depeg.

## Sources

[^1]: MakerDAO Documentation, "How DAI Works", https://docs.makerdao.com (consulted 2026)
[^2]: Circle Documentation, "USDC", https://www.circle.com (consulted 2026)
[^3]: Tal, "The Collapse of UST", https://www.coindesk.com (consulted 2026)
