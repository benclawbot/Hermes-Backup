---
titre: "Token velocity"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: web-checked
sources_count: 3
tags: [#concept/token-velocity, #concept/defi, #concept/economics]
créé: 2026-04-21
liens_forts: ["[[Governance tokens]]", "[[Yield farming]]", "[[Staking rewards]]", "[[Stablecoin dynamics]]", "[[Proof of stake economics]]"]
liens_opposition: []
---

# Token velocity

> [!info] Résumé
> La token velocity mesure la fréquence à laquelle un token change de mains dans un période donnée. Une velocity élevée peut indiquer Speculation plutôt qu'utilité, tandis qu'une velocity basse suggère que les détenteurs conservent le token.

## Définition

La token velocity est une mesure de combien de fois un token est échangé en moyenne sur une période de temps. Elle est calculée comme le volume de transactions divisé par l'offre en circulation. Une velocity de 10 signifie que chaque token change de mains 10 fois par an en moyenne.

La formula simplifiée est :
Velocity = Volume de transactions annuelles / Offre en circulation

Une velocity élevée n'est pas intrinsèquement bonne ou mauvaise. Elle indique simplement que le token est activement traded. Cependant, dans le contexte des tokens de gouvernance, une velocity trop élevée peut signaler que les détenteurs ne sont pas engagés dans la gouvernance.

Les protocoles DeFi essaient souvent de réduire la velocity de leurs tokens de gouvernance pour encourager la participation à la gouvernance et aligned les incitations à long terme.

## Contexte et origine

Le concept de token velocity est devenu populaire en DeFi vers 2020-2021, quand de nombreux protocoles ont lancé des tokens de gouvernance avec des émissions massives. Les investisseurs etanalystes voulaient comprendre si les métriques traditionnelles comme la TVL étaient significatives.

Vitalik Buterin a discusión le concept en 2021, notant que les tokens avec une utility ont intrinsèquement une velocity plus basse car les utilisateurs les conservent pour utiliser le protocole. Les tokens purement spéculatifs ont tendance à avoir une velocity plus élevée.

Les protocoles comme Uniswap et Compound ont implémenté des mécanismes pour réduire la velocity, comme le staking de tokens pour obtenir des récompenses ou des droits de gouvernance accrus.

## Mécanismes et caractéristiques

Les facteurs qui influencent la velocity :

Utility : Les tokens qui donnent accès à des services ont tendance à avoir une velocity plus basse. Les utilisateurs conservent les tokens pour payer les frais.

Staking : Les programmes de staking réduisent la velocity en verrouillant les tokens. C'est pourquoi le staking est souvent utilisé pour stabilize le prix.

Gouvernance : Les tokens de gouvernance qui confèrent des droits de vote peuvent être conservés par les holders actifs.

Spéculation : Les tokens sans utility autre que la revente ont généralement une velocity très élevée.

Yield farming : Les tokens distribués comme récompenses ont souvent une velocity élevée car les farmers vendent immédiatement.

La velocity peut être mesurée de différentes manières :
- Velocity simple : volume/offre
- Velocity pondérée : considère la duration du staking
- Velocity effective : ajuste pour les wallets dormants

## Nuances, critiques, limites

Une low velocity peut être un signe de santé ou de problème. Elle peut signifier que les détenteurs croient au projet (good) ou que le token est illiquide (bad).

Une high velocity peut indiquer speculation mais aussi liquidité. Les tokens avec une haute velocity peuvent avoir des prix plus découverts et un slippage plus faible.

Les mécanismes de réduction de velocity (staking, lock-up) ne sont pas toujours efficaces. Si les récompenses de staking sont trop faibles, les détenteurs peuvent préférer vendre.

## Liens et implications

La [[token velocity]] est liée aux [[governance tokens]] car elle affecte la participation à la gouvernance. Les programmes de [[staking rewards]] sont diseñados pour réduire la velocity. Le [[yield farming]] peut augmenter la velocity quand les récompenses sont vendues.

Les [[stablecoin dynamics]] sont particulières car les stablecoins ont une velocity très élevée (utilisés pour les paiements). Le [[proof of stake economics]] intègre la velocity comme facteur de sécurité.

Le [[risk-reward ratio]] des stratégies doit considerer la velocity du token. Le [[backtesting]] peut inclure des métriques de velocity. La [[volatility scaling]] peut être affectée par la velocity.

## Sources

[^1]: Buterin, "Token Velocity and Network Effects", https://vitalik.ca (consulted 2026)
[^2]: Messari, "Crypto Token Velocity", https://messari.io (consulted 2026)
[^3]: Token Terminal, "Velocity", https://tokenterminal.com (consulted 2026)
