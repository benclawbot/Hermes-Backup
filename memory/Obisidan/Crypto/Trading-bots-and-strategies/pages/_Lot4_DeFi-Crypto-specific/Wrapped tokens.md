---
titre: "Wrapped tokens"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: web-checked
sources_count: 3
tags: [#concept/wrapped-token, #concept/defi, #concept/bridge]
créé: 2026-04-21
liens_forts: ["[[Cross-chain bridges]]", "[[Stablecoin dynamics]]", "[[Layer 2 scaling]]", "[[Decentralized exchanges (DEX)]]", "[[Ethereum]]"]
liens_opposition: []
---

# Wrapped tokens

> [!info] Résumé
> Les wrapped tokens sont des représentations tokenisées d'actifs natifs d'une blockchain sur une autre blockchain. Ils permettent l'interopérabilité des actifs en créant des versions ERC-20 d'actifs qui otherwise n'existeraient pas sur Ethereum.

## Définition

Un wrapped token est un actif numérique qui représente la valeur d'un autre actif, généralement natif d'une autre blockchain. Le processus de wrapping (emballage) crée un token avec un peg (ancrage) 1:1 avec l'actif sous-jacent.

Le cas d'utilisation le plus courant est le wrapped Bitcoin (WBTC), qui est un token ERC-20 sur Ethereum représentant du Bitcoin. Les utilisateurs peuvent échanger leurs BTC contre WBTC via des vaults, et vice versa. Le WBTC est backed par du BTC réel custodied par des trusted custodians.

Les wrapped tokens permettent aux actifs non-EVM d'être utilisés dans l'écosystème DeFi Ethereum. Sans wrapping, Bitcoin ne pourrait pas être utilisé dans les smart contracts Ethereum. Le WBTC ouvre Bitcoin à Uniswap, Aave, et tous les autres protocoles DeFi.

Les mécanismes de wrapping incluent :
- Collateralized : chaque token wrapping est backed par 1:1 avec l'actif sous-jacent custodied
- Mint/Burn : les tokens sont mintés quand l'actif est déposé, brûlés quand retirés
- Vérification centralisée ou décentralisée du collateral

## Contexte et origine

Le WBTC a été lancé en 2018 par BitGo, Kyber Network, et Ren Protocol. C'était la première tentative majeure de mettre Bitcoin sur Ethereum. Le succès du WBTC a demostrado la demande pour des actifs cross-chain.

D'autres wrapped tokens ont émergé :
- WETH : wrapping d'ETH pour être compatible ERC-20 (souvent juste un mapping, pas un vrai wrapper)
- renBTC : alternative decentralized à WBTC par Ren Protocol
- StETH : ETH staké sur Lido, représentant l'ETH staking

Les wrapped tokens ont joué un rôle crucial dans la croissance du DeFi car ils ont permis à Bitcoin de devenir un actif DeFi. À son apogée, WBTC représentait des billions de dollars de Bitcoin utilisés dans les protocoles Ethereum.

## Mécanismes et caractéristiques

Le mécanisme de WBTC implique plusieurs acteurs :
- Les custodians : stockent le BTC réel (ex: BitGo)
- Les merchants : peuvent mint et brûler des WBTC (interopérateurs directs)
- Les utilisateurs : échangent via les merchants ou DEX

Pour créer WBTC, un utilisateur envoie du BTC à un custodian, qui émet un équivalent WBTC sur Ethereum. Pour redeem, le processus inverse : WBTC est brûlé, BTC est libéré par le custodian.

Les wrapped tokens sont típiquement :
- Réductibles : 1:1 avec l'actif sous-jacent
- Révocables : le custodian peut brûler les tokens en cas de problème
- Compliants : les custodians peuvent geler les fonds

Les risques include :
- Risque de contrepartie (custodian)
- Risque de smart contract
- Risque deblacklisting des addresses
- Risque de Peg break

## Nuances, critiques, limites

Le risque de contrepartie est le principal problème des wrapped tokens centralisés. Si le custodian de WBTC fait défaut ou est hacké, le peg peut être compromis. Le WBTC a été critiqué pour sa centralisation excessive.

Les wrapped tokens décentralisés comme renBTC utilisent des protocoles comme RenVM pour fournir le wrapping sans entité centralisée. Cependant, ces protocoles ont leurs propres risques.

Les regulators ont commencé à s'intéresser aux wrapped tokens. Certains soutiennent qu'ils devraient être considéré comme des securities, ce qui pourrait avoir des implications réglementaires.

## Liens et implications

Les [[wrapped tokens]] sont créés via les [[cross-chain bridges]]. Ils sont utilisés dans les [[stablecoin dynamics]] pour les stablecoins wrapping. Les [[Layer 2 scaling]] protocoles ont leurs propres wrapped tokens.

Les [[Decentralized exchanges (DEX)]] supportent les wrapped tokens comme n'importe quel token ERC-20. Les [[DeFi lending protocols]] comme Aave et Compound acceptent souvent les wrapped tokens comme collateral. Les [[liquidity pools]] peuvent contenir des wrapped tokens.

Le [[slippage]] peut être plus élevé pour les wrapped tokens en raison de la liquidité fragmentée. La [[gas optimization]] est importante car les transactions avec wrapped tokens peuvent avoir des coûts supplémentaires. Le [[backtesting]] doit inclure la liquidité des wrapped tokens.

## Sources

[^1]: WBTC Documentation, "How WBTC Works", https://wbtc.network (consulted 2026)
[^2]: Ren Protocol Documentation, "RenVM", https://renproject.io (consulted 2026)
[^3]: Ethereum Foundation, "Wrapped Ether", https://ethereum.org (consulted 2026)
