---
titre: "Poloniex"
type: exchange
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: web-checked
sources_count: 3
tags: [#exchange, #exchange/cex, #concept/trading]
créé: 2026-04-21
liens_forts: ["[[Exchanges centralisés]]", "[[Exchange API]]", "[[Exchange fees]]", "[[Exchange volume]]", "[[Exchange security]]", "[[Exchange listing]]", "[[Exchange withdrawal]]"]
---

# Poloniex

> [!info] Résumé
> Poloniex est un exchange de cryptomonnaies fondé en 2014, acquis par Polo Digital Assets en 2019 puis par Bullish en 2021. Il offre une gamme de services de trading incluant le spot, le margin, et les prêts crypto. La plateforme a traversé des périodes de difficultés mais reste active avec une selection décente de cryptos.

## Présentation générale

Poloniex a été fondé en 2014 par Tristan D'Agosta et était autrefois l'un des plus grands exchanges au monde par volume. L'exchange a été acquis en 2019 par le groupe Polo Digital Assets, puis racheté en 2021 par Bullish, un consortium incluant le fondateur de Block.one.

L'histoire de Poloniex include des période de difficulties. En 2019, les retraits ont été suspendus temporairement pour des raisons de maintenance et de sécurité. Cette période a causé des préocupations parmi les utilisateurs mais les retraits ont repris.

La nouvelle ownership sous Bullish a apporté des ressources supplémentaires et une refonte de la plateforme. Poloniex opère désormais comme partie de l'écosystème Bullish avec des intégration possible avec d'autres produits.

## Exchange API et développement

L'[[Exchange API]] de Poloniex offre des endpoints REST et WebSocket pour le trading algorithmique. L'API permet l'accès aux données de marché, le placement d'ordres, et la gestion de compte. La documentation est disponible et regularly updated.

Les [[API rate limiting|limites de taux]] sont fairly standard, permettant la plupart des stratégies non ultra haute fréquence. Les WebSockets permettent le streaming temps réel avec un bon latency.

Pour les [[Trading bot]], Poloniex propose un environnement de test pour valider les stratégies. La [[API sandbox]] permet de tester sans risquer de vrais fonds.

## Frais et structure tarifaire

La structure de [[Exchange fees|frais]] de Poloniex est competitive dans l'ensemble. Les frais maker varient de 0.00% à 0.08% selon le volume. Les frais takers vont de 0.08% à 0.20%, fairly standard.

Les [[Exchange withdrawal|retraits]] sont facturés selon le réseau. Les deposits sont gratuits pour la plupart des cryptos.

Pour les stratégies de [[Market making]] et d'[[Arbitrage]], ces frais sont acceptables. Les programmes de reduction pour les gros volumes offrent des économies supplémentaires.

## Sécurité et fiabilité

La [[Exchange security]] de Poloniex a été renforcée après les incidents de 2019. Les mesures incluent le cold storage pour les fonds, l'authentification multi-facteurs, et les audits de sécurité réguliers.

La nouvelle ownership par Bullish a apporté des ressources additionnelles pour la sécurité et l'infrastructure. Les pratiques de sécurité sont régulièrement auditées.

## Liquidité et produits

La [[Exchange liquidity|liquidité]] de Poloniex est adequate pour les paires principales. La [[Exchange volume]] a diminué depuis ses sommets historiques mais reste significative pour les cryptos principales.

Poloniex propose le trading spot, le margin trading avec effet de levier jusqu'à 5x, et les prêts crypto. Le lending peer-to-peer permet de earn interest sur les cryptos déposées.

Pour les stratégies de [[Carry trading]] ou de [[Funding rate arbitrage]], le margin trading de Poloniex peut être utilisé bien que le leverage soit limité compared à d'autres plateformes.

## Exchange listing et selection

Le [[Exchange listing]] sur Poloniex inclut une selection reasonable de cryptos majeures et quelques small caps. La platform a réduit le nombre de tokens listés après les problèmes de 2019, se concentrant sur les cryptos plus établies.

Pour les stratégies de [[Breakout trading]] ou [[Momentum]], cette selection peut limiter les opportunités sur les nouveaux tokens.

## Sources

[^1]: Poloniex, "About Poloniex", https://poloniex.com (consulted 2026)
[^2]: CoinMarketCap, "Poloniex Review", https://coinmarketcap.com (consulted 2026)
[^3]: The Block, "Poloniex Market Analysis", https://theblock.co (consulted 2026)