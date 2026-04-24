---
titre: "Platform risk"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/risk, #concept/platform, #concept/sécurité]
créé: 2026-04-21
liens_forts: ["[[Fiabilité des plateformes]]", "[[Sécurité des clés API]]", [["Sécurité des clés]]"]
liens_opposition: []
---

# Platform risk

> [!info] Résumé
> Le platform risk est le risque de perdre ses fonds en raison de problèmes liés à la plateforme de trading ou au service utilisé, indépendamment des performances du marché. Ce risque inclut la fraude, les pannes techniques, et les problèmes de liquidité de la plateforme.

## Définition

Le platform risk désigne l'ensemble des risques qui ne sont pas liés aux marchés financiers eux-mêmes mais au service utilisé pour accéder à ces marchés. Ces risques peuvent destruir un portfolio profitable sans que le marché n'ait bougé.

Les composantes du platform risk incluent :
- Risque de contrepartie (la plateforme ne honore pas ses obligations)
- Risque opérationnel (panne technique)
- Risque de sécurité (piratage)
- Risque réglementaire (fermeture forcée)

Ce risque est souvent sous-estimé par les traders retail concentrés sur le risk de marché.

## Types de platform risk

**Risque de fraude**
Une plateforme frauduleuse qui绮收回 les dépôts. Les exemples abundent : MtGox, Bitfinex hack, QuadrigaCX, FTX.

**Risque de hacking**
Même les plateformes honnêtes peuvent être piratées. Les hackers ciblent les storage de clés API et les wallets.

**Risque opérationnel**
Des pannes prolongées peuvent laisser des positions ouvertes sans gestion. Une plateforme down pendant un crash peut cause des pertes massives.

**Risque de liquidité**
Une plateforme peut ne pas avoir assez de liquidité pour honrar les retraits. Cela arrive quand too many utilisateurs veulent retirer en même temps.

**Risque réglementaire**
Les reguladores peuvent fermer une plateforme ou restringer son accès à certains utilisateurs.

## Mitigation du platform risk

**Due diligence**
Évaluer la fiabilité de la plateforme avant d'y depositar des fonds. Vérifier l'historique, les audits, et la réputation.

**Diversification**
Ne pas mettre tous ses fonds sur une seule plateforme. Répartir entre 2-3 plateformes fiables.

**Vérification constante**
Surveiller régulièrement que la plateforme opère normalement. Des changements soudains peuvent être des signaux d'alerte.

**Limiter l'exposition**
Ne pas exposer plus que ce qu'on peut se permettre de perdre sur une plateforme. En cas de perte totale, le impact doit être manageable.

**Clés API avec permissions minimales**
Sur les plateformes de bots, utiliser des clés avec uniquement les permissions de trading, pas de withdrawal.

## Exemples documentés

**MtGox (2014)**
Le largest exchange de l'époque a fait faillite après un hack de 850 000 BTC. Des années de bataille juridique pour récupérer les fonds.

**QuadrigaCX (2019)**
Le fondateur serait mort avec les clés privées des cold wallets, verrouillant 200 millions de dollars de fonds clients.

**FTX (2022)**
La troisiegrave;me plus grande exchange s'est effondrée frauduleusement, causant des pertes de milliards pour les utilisateurs.

**3Commas (2022)**
Problèmes après le collapse FTX où les bots des utilisateurs ont continué à trader sur FTX, causant des pertes.

## Liens et implications

Le [[platform risk]] est le risque non-marché qui affecte la sécurité des fonds. La [[fiabilité des plateformes]] et la [[sécurité des clés API]] sont les deux faces de ce risque.

Le [[trading algorithmique]] ne élimine pas le platform risk. Un bot performant sur une plateforme peu fiable peut perdre tout son capital à cause de la plateforme.

L'[[évaluation de plateforme]] doit inclure une évaluation explicite du platform risk. Les [[avis utilisateurs]] informent aussi ce risque.

## Sources

[^1]: CoinDesk, "Exchange Hacks History", https://www.coindesk.com (consulted 2026)
[^2]: various sources, "Crypto Platform Failures", various sources (consulted 2026)
