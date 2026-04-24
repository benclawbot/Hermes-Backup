---
titre: "Bitfinex"
type: exchange
cluster: "Trading bots and strategies"
statut: verified
controverse: high
importance: standard
source_knowledge: web-checked
sources_count: 3
tags: [#exchange, #exchange/cex, #concept/trading]
créé: 2026-04-21
liens_forts: ["[[Exchanges centralisés]]", "[[Exchange API]]", "[[Exchange fees]]", "[[Exchange volume]]", "[[Exchange security]]", "[[Exchange margin trading]]", "[[Exchange withdrawal]]"]
---

# Bitfinex

> [!info] Résumé
> Bitfinex est un exchange de cryptomonnaies fondé en 2012, reconnu pour sa liquidité élevée sur les paires principales et ses fonctionnalités avancées pour les traders professionnels. Il a été au centre de plusieurs controverses incluant des hacks majeurs et des allégations de manipulation de marché. Malgré ces controverses, il reste une plateforme importante dans l'écosystème crypto.

## Présentation générale

Bitfinex a été fondé en 2012 et est devenu l'un des exchanges les plus anciens encore en opération. La plateforme appartenait initialement à l'équipe derrière la populaire wallet Bitcoin-hole et a evolué pour devenir un exchange complet avec des fonctionnalités avancées.

L'histoire de Bitfinex include des événements significatifs. Le hack de 2016 a resulted in la perte de 72 millions de dollars en bitcoins, événements qui ont contribué à la création de Tether (USDT). Bitfinex a également été au centre d'allégations du New York Attorney General concernant des fonds manquants et des conflits d'intérêts avec Tether.

Malgré ces controverses, Bitfinex maintient une liquidité élevée sur de nombreuses paires de trading. La plateforme propose des fonctionnalités avancés pour les traders professionnels, incluant le margin trading avec un effet de levier significatif.

## Exchange API et connectivité

L'[[Exchange API]] de Bitfinex est reconnue comme complète et stabile, offrant des fonctionnalités avancées pour les traders algorithmiques. L'API v2 support les endpoints REST et WebSocket avec une latence faible.

Les [[API rate limiting|limites de taux]] sont fairly généreuses pour les endpoints principaux. Les WebSockets supportent le multiplexing et le auth channel séparé. La authentication utilise des clés API avec signature HMAC SHA-384.

Pour les développeurs de [[Trading bot]], Bitfinex offre des环境和 pour tester les stratégies. La documentation API est exhaustive et inclut des examples de code.

## Frais et structure tarifaire

La structure de [[Exchange fees|frais]] de Bitfinex est compétitive pour les gros volumes. Les frais maker varient de -0.02% à 0.02% selon le volume, avec des rebates pour les plus gros market makers. Les frais takers vont de 0.00% à 0.20%, fairly standard.

Les [[Exchange withdrawal|retraits]] sont facturés selon le réseau avec des frais autour de 0.0004 BTC pour les retraits Bitcoin. Les deposits sont gratuits pour la plupart des cryptos.

Pour les stratégies de [[Market making]], les frais négatifs de maker pour les gros volumes font de Bitfinex une plateforme attractive. Les rebates peuvent générer des revenus passifs pour les market makers à fort volume.

## Exchange margin trading et levier

L'[[Exchange margin trading]] sur Bitfinex est parmi les plus flexibles du marché. L'effet de levier peut atteindre 10x sur le margin trading spot et jusqu'à 100x sur les produits dérivés selon les conditions.

Bitfinex propose le peer-to-peer margin funding où les utilisateurs peuvent prêter leurs fonds pour earn interest. Ce système de lending direct permet aux traders de obtenir du leverage tout en permettant aux prêteurs de earn un retour sur leur capital.

Les [[Ordre stop-loss]] et [[Ordre take-profit]] sont essentiels pour manage le risque sur les positions avec levier. Le funding rate sur les positions margin est déterminée par l'offre et la demande sur le marché peer-to-peer.

## Sécurité et controverses

La [[Exchange security]] de Bitfinex a été mise à l'épreuve avec le hack de 2016 qui a损失 72 millions de dollars. Depuis, l'exchange a renforcé ses mesures de sécurité mais les controverses persistent.

Les allegations du NYAG en 2019 ont allégué que Bitfinex avait perdu des fonds client et les avait cachés en utilisant les réserves de Tether. Bitfinex a contests ces allégations mais l'affaire a affecté la confiance de certains utilisateurs.

Malgré ces controverses, Bitfinex n'a pas été condamné pour wrongdoing et continue ses operations. Les utilisateurs doivent evaluate ces risques contre les avantages de la plateforme.

## Liquidité et profondeur de marché

La [[Exchange liquidity|liquidité]] de Bitfinex est particulièrement élevée sur les paires principales comme BTC/USD et ETH/USD. La [[Exchange volume]] reste significative malgré les controverses.

Pour les stratégies de [[Scalping]] ou de [[Market making]], cette liquidité permet l'exécution d'ordres importants avec un slippage limité. Les écarts bid-ask sur les paires principales sont fairly tight pendant les heures de marché.

Pour les stratégies d'[[Arbitrage]], Bitfinex peut ofrecer des opportunités avec d'autres plateformes. Le [[Cross-exchange arbitrage]] est possible quand les prix divergent significativement.

## Sources

[^1]: Bitfinex, "About Bitfinex", https://www.bitfinex.com (consulted 2026)
[^2]: CoinDesk, "Bitfinex Controversies", https://coindesk.com (consulted 2026)
[^3]: The Block, "Bitfinex Market Analysis", https://theblock.co (consulted 2026)