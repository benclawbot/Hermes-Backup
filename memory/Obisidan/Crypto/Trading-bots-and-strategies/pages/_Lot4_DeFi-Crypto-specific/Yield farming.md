---
titre: "Yield farming"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/yield-farming, #concept/defi, #concept/returns]
créé: 2026-04-21
liens_forts: ["[[Liquidity pools]]", "[[Automated Market Makers (AMM)]]", "[[Impermanent loss]]", "[[Staking rewards]]", "[[Governance tokens]]"]
liens_opposition: ["[[HODLing]]", "[[Buy and hold]]"]
---

# Yield farming

> [!info] Résumé
> Le yield farming est une stratégie DeFi qui consiste à maximiser les rendements en déplaçant des capital entre différents protocoles de lending, staking, et liquidity pools. Cette pratique a popularisé le concept de "money legos" mais expose les utilisateurs à des risques complexes.

## Définition

Le yield farming, aussi appelé liquidity mining, est une stratégie d'investissement en DeFi qui cherche à maximiser le rendement du capital en l'allouant aux opportunités les plus rentables à travers plusieurs protocoles. Le yield farmer recherche constamment les meilleurs rendements et déplace ses fonds en fonction des incitations offertes.

Le processus typique est le suivant : un utilisateur dépose des tokens dans un pool de liquidité ou un protocole de lending. En retour, il reçoit des récompenses proportionnelles à sa contribution. Ces récompenses viennent s'ajouter aux fees de transaction ou aux intérêts générés.

Le concept de "money legos" décrit l'interopérabilité des protocoles DeFi qui peuvent être combinés comme des briques de LEGO. Par exemple, on peut déposer des tokens dans un pool de liquidité, recevoir des LP tokens, staker ces LP tokens dans un protocole de yield aggregation, et reinvestir les récompenses.

Les rendements sont généralement exprimés en APY (Annual Percentage Yield) ou APR (Annual Percentage Rate). L'APY inclut les effets de la composition (intérêts sur intérêts) tandis que le APR ne les inclut pas. Les protocoles affichent souvent l'APY car il est plus impressionnant.

## Contexte et origine

Le terme "yield farming" a été popularisé en 2020 par des protocoles comme Compound et Yearn Finance. Compound a lancé son programme de governance token en juin 2020, distribuant des tokens COMP aux utilisateurs du protocole. Cette airdrop massive a lancé la "DeFi summer".

Synthetix a été précurseur avec son programme de staking de SNX en 2019, où les stakers recevaient des récompenses pour maintenir les positions de collateral. yearn.finance (Yearn) a emerge en 2020 comme le premier aggregateur de yield, automatisant les transferts de fonds entre protocoles pour maximiser les rendements.

Synthetix a été précurseur avec son programme de staking de SNX dès 2019. Les stakers de SNX recevaient des récompenses pour maintenir les positions de collateral nécessaires au protocole. C'était une forme primitive de liquidity mining.

## Mécanismes et caractéristiques

Les stratégies de yield farming varient en complexité. Les stratégies simples consistent à déposer des stablecoins dans un protocole de lending comme Aave pour earn un taux variable. Les stratégies avancées utilisent le leverage, les flash loans, et les transactions cross-protocole.

Les flash loans sont souvent utilisés dans les stratégies de yield farming avancées. Le farmer emprunte des fonds via un flash loan, les utilise pour deposit dans un protocole, reçoit des tokens de staking, puis les stake dans un autre protocole pour accumuler des récompenses supplémentaires. Tout est remboursé en une seule transaction.

Les yield aggregators comme Yearn, Convex, et Beefy automatisent ce processus. Ils pooling le capital des utilisateurs, executent des stratégies optimisées, et distribuent les gains. Les frais de gestion (généralement 2% sur les gains + 20% de performance) sont prélevés.

Les risks du yield farming sont multiples :
- Impermanent loss dans les pools de liquidité
- Risque de smart contract
- Risque de liquidité si lesAPY baissent
- Risque de token emission inflationniste
- Risque de attaque de prêt instantané (flash loan attack)

## Nuances, critiques, limites

Les APY affichés sont souvent basé sur des projectionsFuture et non sur des rendements réels. Quand un protocole offre 500% APY, c'est généralement parce qu'il émet des tokens de gouvernance comme récompense. Une fois ces émissions réduites, l'APY chute souvent de manière dramatique.

La "dégradation des rendements" est un phénomène où l'afflux de capitaux dans un protocole réduit automatiquement les rendements pour tous. Les nouveaux entrants bénéficient moins que les anciens. C'est une forme de Tragédie des communs appliqué à laYield.

Les risques de smart contract sont amplifiés en yield farming car les stratégies impliquent généralement plusieurs protocoles. Une vulnérabilité dans l'un des protocoles peut entraîner la perte totale des fonds. Les audits de sécurité atténuent ce risque mais ne l'éliminent pas.

Les stratégies avec effet de levier (leveraged yield farming) amplifient à la fois les gains et les pertes. Un agriculteur pourrait emprunter des fonds pour augmenter son exposition, mais la liquidation devient alors une possibilité réelle si les prix évoluent défavorablement.

## Liens et implications

Le [[yield farming]] dépend des [[liquidity pools]] pour les composantes de pool de liquidité. Les [[Automated Market Makers (AMM)]] sont souvent le théâtre principal du yield farming. Les [[staking rewards]] sont une source de yield souvent utilisée.

Les [[governance tokens]] distribués sont souvent le moteur des incitations au yield farming. L'[[impermanent loss]] est un risque majeur non négligeable. Les [[flash loans]] sont un outil fréquemment utilisé dans les stratégies avancées.

Le [[risk-reward ratio]] doit être évalué avec soin car les rendements élevés masquent souvent des risques élevés. Les [[DEX aggregators]] peuvent être utilisés pour optimiser les routes de swap. La [[volatility scaling]] peut aider à gérer l'exposition.

## Sources

[^1]: Yearn Finance Documentation, "How Yearn Works", https://docs.yearn.finance (consulted 2026)
[^2]: Compound Finance Documentation, "COMP Distribution", https://compound.finance (consulted 2026)
[^3]: Binance Academy, "Yield Farming", https://academy.binance.com (consulted 2026)
