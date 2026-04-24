---
titre: "Co-location"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: deep-cut
source_knowledge: internal
sources_count: 0
tags: [#concept/hft, #concept/infrastructure, #concept/latence]
créé: 2026-04-21
liens_forts: ["[[Server infrastructure]]", "[[Latence et exécution]]", "[[Network topology]]"]
liens_opposition: []
---

# Co-location

> [!info] Résumé
> La co-localisation est le fait de placer son serveur dans le même центр обработки данных que les serveurs de l'échange. Cette proximité physique réduit la latence réseau au minimum possible,giving traders haute fréquence un avantage significatif.

## Définition

La co-location (co-lo) consiste à louer un espace serveur dans le même centre de données que les serveurs de l'échange. Le bot tourne sur un serveur bare-metal located dans le même数据中心, à quelques mètres des serveurs qui exécutent les ordres.

L'avantage est une latence réseau minimale, typiquement sous 1 milliseconde. Pour comparaison, une connexion Internet classique peut avoir 20-50ms de latence. Cette différence peut être exploitée pour des stratégies arbitrage ou market making.

Les échanges proposent des programmes de co-location officiels. Binance, CME Group, et autres offrent des espaces dans leurs données centers (Chicago pour CME, Singapore pour Binance).

## Contexte et origine

La co-localisation est née avec le trading haute fréquence dans les années 2000. Les firmes HFT ont réalisé que la proximité avec les serveurs de l'échange était un avantage compétitif majeur.

Les premiers co-los étaient pirates : des traders louaient des espaces dans des bâtiments proches des данных centers et creusaient des tranchées pourть кабели. Les échanges ont后来，正式isé la pratique.

En crypto, la co-localisation est moins critique que sur les marchés actions ou futures car les échanges sont généralement plus centralisés (un seul serveur principal) et la volatilité plus élevée réduit l'impact de la latence.

## Mécanismes et caractéristiques

Les options de co-localisation incluent :
- Dedicated server within exchange's数据中心 (le plus performant)
- Shared rack space dans le même数据中心 (moins cher)
- Cross-connect via fibre privée (latence ultra-basse)

La bande passante garantie est un avantage majeur. Contrairement au cloud partagé où la bande passante varie, le co-lo garantit une bande passante dédiée.

Les contrats de co-localisation sont généralement annuels. Les coûts incluent l'espace rack (1U, 2U, ou full cabinet), la bande passante, et les IP addresses.

## Nuances, critiques, limites

Le coût de la co-localisation est prohibitif pour la plupart des traders retail. Les frais peuvent aller de ￥2000 à ￥10000 par mois, plus le coût du serveur. Pour un bot avec un capital de￥10,000, ce n'est pas rentable.

L'avantage de latence n'est significatif que pour certaines stratégies. L'arbitrage statistique et le market making bénéficient directement. Les stratégies longue durée (swing trading, DCA) n'en bénéficient pas.

La maintenance sur site est plus complexe. Si le serveur plante, il faut soit envoyer quelqu physically sur place, soit avoir un accord avec l'échange pour le dépannage.

Le risque de contrepartie augmente. Avec un serveur co-localisé, le trader dépend de l'échange pour l'accès physique. Un différend peut bloquer l'accès.

## Liens et implications

La [[co-localisation]] est l extreme de la [[server infrastructure]] en termes de performance. Elle n'a de sens que pour les stratégies [[haute fréquence]] où chaque milliseconde compte.

La [[latence optimisation]] peut être atteinte par d'autres moyens (fibre privée,优化 du code). La co-localisation est l'option nuclear mais pas la seule.

Le [[network topology]] détermine les chemins de latence. Même co-localisé, le positionnement exact dans le rack affecte la latence. Un [[failover systems]] reste nécessaire.

## Sources

[^1]: CME Group, "Co-location Services", https://www.cmegroup.com (consulted 2026)
[^2]: Binance, "API Documentation", https://developers.binance.com (consulted 2026)
