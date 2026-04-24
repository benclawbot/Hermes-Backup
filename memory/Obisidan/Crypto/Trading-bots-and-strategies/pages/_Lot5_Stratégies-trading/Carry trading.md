---
titre: "Carry trading"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/carry, #concept/funding-rate, #concept/yield]
créé: 2026-04-21
liens_forts: ["[[Funding rate arbitrage]]", "[[Perpetual futures]]", "[[Staking rewards]]"]
liens_opposition: []
---

# Carry trading

> [!info] Résumé
> Le carry trading consiste à percevoir un rendement pour détenir une position, en exploitant les différentiels de taux d'intérêt ou les funding rates entre actifs. En crypto, le carry trading repose principalement sur les contrats perpétuels et le staking.

## Définition

Le carry trading est une stratégie qui génère des revenus passifs en détenant un actif financier. Le "carry" fait référence au coût ou au revenu de portage, c'est-à-dire ce que rapporterait la détention d'un actif sur une période donnée.

Sur les marchés traditionnels, le carry trading exploite les différentiels de taux d'intérêt entre devises. Un trader emprunte dans une devise à faible taux (comme le yen japonais) et investit dans une devise à rendement plus élevé (comme le real brésilien), capturant la différence.

En crypto, le carry trading s'exprime principalement à travers deux mécanismes. Premier : les contrats perpétuels avec funding rate positif, où les positions longues paient quotidiennement les positions courtes. Second : le staking de tokens Proof of Stake qui génère des récompenses de staking.

L'objectif du carry trader en crypto est de percevoir ces rendements tout en restant exposé au risque de prix du sous-jacent. Si le rendement perçu est supérieur à la perte potentielle due aux mouvements de prix, la stratégie est rentable.

## Contexte et origine

Le carry trading existe depuis les premiers marchés financiers internationalisés. Les marchands de l'Antiquité practiceaient une forme de carry en transportant des biens entre marchés pour profiter des différentiels de prix.

Les currency carry trades modernes ont été popularisés dans les années 1990 quand les taux d'intérêt des grandes banques centrales ont divergé significativement. Le yen carry trade, où les traders empruntaient en yen pour investir dans des actifs en dollars, a été particulièrement notable.

En crypto, le carry trading a émergé avec les contrats perpétuels et les mécanismes de staking. Les plateforme comme Binance, ByBit, et FTX ont introduit les funding rates permanents qui permettent un carry trading direct sur les prix des crypto.

## Mécanismes et caractéristiques

Sur les marchés perpétuels, le funding rate est le mécanisme qui maintient le prix du contrat perpétuel proche du prix spot. Quand le funding rate est positif, les positions longues paient les positions courtes. Le carry trader long achète le spot et short les perpétuels pour percevoir le funding.

Le staking rewards sur les protocoles Proof of Stake (voir [[staking rewards]]) génère un rendement annuel en tokens supplémentaires. Le carry trader stake ses tokens et perçoit les récompenses tout en restant exposé au risque de prix du token staké.

Le risque de prix est le principal risque du carry trading crypto. Si le prix du token chute significativement, les revenus de carry peuvent être insuffisants pour compenser la perte. Le carry trader doit gérer la taille de position et potentiellement hedger le risque de prix.

Le [[Risk-reward ratio]] du carry trading dépend du rendement de carry vs la volatilité du sous-jacent. Un carry de 10% annuel avec une volatilité de 50% offre un carry ajusté au risque modeste. Un carry de 5% avec une volatilité de 20% est plus favorable.

## Nuances, critiques, limites

Le carry trading en crypto est risqué car les rendements de carry peuvent changer rapidement. Les funding rates étaient élevés en 2021 (30-50% annualisé) mais se sont normalisés en 2022-2023. Les récompenses de staking diminuent à mesure que plus de tokens sont stakés.

Le risque de liquidité existe sur les marchés perpétuels. En période de stress, les positions courtes peuvent être liquidées forcées si le prix du contrat perpétuel diverge significativement du spot. Le carry trader doit maintenir des marges suffisantes.

Le carry trading sur les altcoins est particulièrement risqué car les funding rates peuvent être extrêmes (très élevés) en période de spéculation. Des funding rates de 100% ou plus annualisés attirent des carry traders mais signalent aussi un marché extrêmement biaisé.

## Liens et implications

Le [[carry trading]] est directement lié au [[funding rate arbitrage]] qui est une forme spécifique de carry trading sur les marchés perpétuels. Les deux stratégies exploitent les différentiels de rendement.

Le staking rewards ([[staking rewards]]) est une composante clé du carry trading en crypto pour les protocoles Proof of Stake. Le [[DeFi lending protocols]] offre des rendements similaires sans le risque de prix de la même manière.

Le [[Risk-reward ratio]] doit être calculé en tenant compte du rendement de carry et du risque de prix. Le [[Sharpe ratio]] permet de mesurer la performance ajustée au risque de la stratégie de carry.


## Points clés à retenir

- Cette stratégie nécessite une gestion rigoureuse du risque et du money management
- Le backtesting sur des données historiques est essentiel pour valider les paramètres
- La psychologie trading joue un rôle crucial dans l'application de cette stratégie
## Sources

[^1]: BIS Quarterly Review, "Carry Trades and Risk Appetite", 2009
[^2]: Binance Academy, "Funding Rate Explained", https://academy.binance.com (consulted 2026)
