---
titre: "Liquidity mining"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: web-checked
sources_count: 3
tags: [#concept/liquidity-mining, #concept/defi, #concept/incentives]
créé: 2026-04-21
liens_forts: ["[[Yield farming]]", "[[Governance tokens]]", "[[Liquidity pools]]", "[[Staking rewards]]", "[[Liquidity incentives]]"]
liens_opposition: []
---

# Liquidity mining

> [!info] Résumé
> La liquidity mining est le processus par lequel les utilisateurs fournissent des liquidités à un protocole DeFi en échange de récompenses, généralement sous forme de tokens de gouvernance. Ce mécanisme a démocratisé l'accès au market making mais a aussi créé des dynamiques inflationnistes.

## Définition

La liquidity mining, aussi appelée yield farming, est un mécanisme par lequel les utilisateurs sont récompensés pour fournir des liquidités à un protocole. Les récompenses sont généralement des tokens de gouvernance émis par le protocole, créant un Incentivealignement entre les utilisateurs et le protocole.

Le processustype est le suivant : un utilisateur dépose des tokens dans un pool de liquidité ou un protocole de lending. En retour, il reçoit des récompenses proportionnelles à sa contribution. Ces récompenses viennent s'ajouter aux fees de transaction ou aux intérêts générés.

La liquidity mining diffère du staking car elle implique généralement la prise de risque sur des pools de liquidité, pas seulement le verrouillage de tokens. Les rewards incluent souvent deux composantes : les revenus réels (frais, intérêts) et les incentives de tokens.

Les protocoles utilisent la liquidity mining pour bootstraper leur liquidité. Au lieu de payer des market makers professionnels, ils distribuent des tokens aux utilisateurs ordinaires. C'est une forme de crowdsourcing du market making.

## Contexte et origine

La liquidity mining a été popularisée par Compound Finance en juin 2020 avec le lancement de son COMP token. En déposant ou empruntant des actifs sur Compound, les utilisateurs recevaient des tokens COMP proportionnellement. Cette distribution massive a lancé la "DeFi Summer".

Yearn Finance a popularisé l'automatisation du yield farming en 2020. Son protocole regroupait les fonds des utilisateurs et les déplaçait automatiquement entre les opportunités les plus rentables. Les détenteurs de tokens YFI pouvaient stake leurs tokens pour une partie des revenus.

Synthetix a été précurseur avec son staking de SNX dès 2019. Les stakers de SNX recevaient des récompenses pour maintenir les positions de collateral nécessaires au protocole. C'était une formeprimitive de liquidity mining.

## Mécanismes et caractéristiques

Les récompenses de liquidity mining sont généralement composées de deux éléments :

1. Les récompenses natives du protocole : frais de transaction, intérêts de lending, ou autres revenus réels générés par le protocole
2. Les incentives de tokens : tokens de gouvernance nouvellement émis pour attirer la liquidité

Le deuxième élément est préoccupant car il est inflationniste. Quand un protocole émet des tokens comme récompense, cela dilue la valeur des tokens existants. Les utilisateurs qui vendent leurs récompenses immédiatement causent une pression de vente.

Les programmes de liquidity mining ont typiquement une schedule d'émissions décroissante. Les récompenses sont plus élevées au début pour attirer la liquidité, puis diminuent progressivement. Cela crée une "yield cliff" où les APY chutent brusquement.

Les risques de la liquidity mining :
- Impermanent loss dans les pools de liquidité
- Valorisation des tokens de récompense volatile
- Rug pull si les fondateurs abandonnent le projet
- Concurrence excessive qui réduit les parts individuelles

## Nuances, critiques, limites

Les APY élevés affichés par les programmes de liquidity mining sont souvent insoutenables. Ils sont basés sur le prix actuel du token de récompense et ne tiennent pas compte de la dilution future ni de la baisse potentielle du prix.

La "mer de tokens" générée par les programmes de liquidity mining a créé une complexité fiscale et administrative pour les utilisateurs. Dans de nombreuses juridictions, les tokens reçus sont considérés comme un revenu imposable.

Les protocoles qui dépendent de la liquidity mining pour leur liquidité sont vulnérables. Si les récompenses diminuent ou si un protocole concurrent offre de meilleurs rendements, la liquidité peut partir rapidement. C'est une forme de dépendance aux rendement.

## Liens et implications

La [[liquidity mining]] est une forme de [[yield farming]] axée sur les récompenses de tokens. Les [[governance tokens]] sont le véhicule de récompense principal. Les [[liquidity pools]] sont la destination typique des fonds.

Les [[staking rewards]] sont souvent une composante des rendements de liquidity mining. Les [[liquidity incentives]] attirent les mineurs de liquidité. L'[[impermanent loss]] est un risque majeur à considérer.

Le [[risk-reward ratio]] doit être évalué en considérant la volatilité des tokens de récompense. Les [[flash loans]] peuvent être utilisés dans certaines stratégies de liquidity mining. Le [[backtesting]] de ces stratégies est complexe en raison de la variation des rendements.

## Sources

[^1]: Compound Finance Documentation, "COMP Distribution", https://compound.finance (consulted 2026)
[^2]: Yearn Finance Documentation, "Vaults", https://docs.yearn.finance (consulted 2026)
[^3]: Messari, "Liquidity Mining Report", https://messari.io (consulted 2026)
