---
titre: "Application desktop"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/application, #concept/desktop, #concept/software]
créé: 2026-04-21
liens_forts: ["[[Terminal de trading]]", [["Interface d'échange]], ["[[Trading bot]]"]
liens_opposition: []
---

# Application desktop

> [!info] Résumé
> L'application desktop est un logiciel installé localement sur un ordinateur pour accéder aux services de trading. Contrairement aux interfaces web, les applications desktop offrent généralement une meilleure performance et des fonctionnalités avancées mais nécessitent une installation et une maintenance régulières.

## Définition

Une application desktop de trading est un programme installé sur un ordinateur (Windows, Mac, Linux) qui permet d'accéder aux fonctionnalités de trading. Elle peut être un client lourd (application native) ou un client léger (qui se connecte à des serveurs distants).

Les applications desktop étaient le standard avant l'avènement du cloud computing. Aujourd'hui, elles persistent pour des cas d'usage spécifiques où la performance ou les fonctionnalités locales sont critiques.

## Types d'applications desktop

**Clients d'exchange**
Certaines plateformes comme Binance ou Kraken proposent des applications desktop dédiées avec des fonctionnalités complètes.

**Terminaux professionnels**
Des terminaux comme Bloomberg Terminal sont des applications desktop puissantes avec accès à des données en temps réel et des outils d'exécution avancés.

**Outils de charting**
TradingView propose aussi une application desktop en plus de son interface web, avec des fonctionnalités supplémentaires.

**Clients API personalisés**
Les développeurs peuvent construire leurs propres applications qui communiquent avec les exchanges via les API.

## Avantages du desktop

**Performance**
Pas de latence réseau vers un serveur web. L'exécution peut être plus rapide.

**Fonctionnalités avancées**
Accès à des fonctionnalités qui ne seraient pas possibles dans un navigateur (accès au filesystem, processus en arrière-plan, etc.).

**Offline capability**
Certaines fonctionnalités peuvent fonctionner sans connexion internet.

**Personnalisation**
L'utilisateur peut modifier le code source de ses propres outils pour les adapter à ses besoins.

## Inconvénients du desktop

**Installation requise**
Chaque ordinateur doit être configuré individuellement. Pour plusieurs appareils, c'est plus lourd.

**Maintenance**
Les mises à jour doivent être appliquées manuellement. Risque de bugs avec les nouvelles versions.

**Platform lock-in**
Une application Windows ne fonctionne pas sur Mac sans layer d'émulation.

**Sécurité locale**
L'ordinateur hébergeant l'application doit être sécurisé. Un keylogger sur la machine compromet tout.

## Comparaison web vs desktop

| Critère | Web | Desktop |
|---------|-----|---------|
| Accessibilité | N'importe quel appareil | Poste spécifique |
| Installation | Aucune | Requise |
| Performance | Bonne | Excellente |
| Fonctionnalités | Standard | Avancées |
| Maintenance | Aucune (automatisée) | Manuelle |
| Sécurité | Générale | Locale (variable) |

## Liens et implications

L'[[application desktop]] complète le [[terminal de trading]] avec des fonctionnalités avancées. L'[[interface d'échange]] basique peut être substituée par une application desktop.

Le [[trading bot]] peut être hébergé sur une machine desktop pour ceux qui ne veulent pas utiliser le cloud. Cela demande plus de compétences techniques.

La [[sécurité des clés API]] prend une dimension différente sur desktop : la machine doit être physiquement sécurisée.

## Sources

[^1]: Various exchange desktop applications (consulted 2026)
[^2]: Bloomberg Terminal, "Desktop Application", https://www.bloomberg.com (consulted 2026)
