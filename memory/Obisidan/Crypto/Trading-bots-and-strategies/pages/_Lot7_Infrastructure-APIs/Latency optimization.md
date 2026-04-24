---
titre: "Latency optimization"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/latence, #concept/performance, #concept/hft]
créé: 2026-04-21
liens_forts: ["[[Latence et exécution]]", "[[Co-location]]", "[[Network topology]]"]
liens_opposition: []
---

# Latency optimization

> [!info] Résumé
> L'optimisation de la latence est l'ensemble des techniques pour réduire le temps entre la décision de trade et son exécution. Chaque milliseconde compte pour les stratégies haute fréquence, et l'optimisation touche le code, le réseau, et l'infrastructure.

## Définition

La latence est le délai entre le moment où le bot décide de passer un ordre et le moment où l'ordre est exécuté par l'échange. Ce délai comprend le temps de traitement du signal, la génération de l'ordre, la transmission réseau, et le temps de traitement par l'échange.

L'optimisation de la latence vise à réduire ce délai à son minimum absolu. Pour un bot haute fréquence, la latence se mesure en microsecondes ou millisecondes. Pour un bot classique, quelques centaines de millisecondes sont acceptables.

Les techniques vont de l'optimisation du code (langages bas niveau,避免了 des allocations mémoire) à l'infrastructure (fibre, co-localisation) en passant par les algorithmes (batch processing).

## Contexte et origine

Le trading haute fréquence a popularisé l'optimisation de latence comme discipline. Les firmes comme Citadel Securities, Virtu Financial, et Jane Street ont des équipes entière dediées à la réduction de latence.

Les techniques ursprünglich entwickelt pour la finance traditionnelle ont été adaptées pour la crypto. Des entreprises comme Jump Trading et Wintermute appliquent leurs expertise HFT au marché des cryptomonnaies.

L'optimisation de latence est devenue plus accessible avec des outils comme les FPGA (Field-Programmable Gate Arrays) qui permettent du traitement réseau en hardware rather than software.

## Mécanismes et caractéristiques

Les couches d'optimisation :

1. **Code** : Langages compilés (C++, Rust) plutôt qu'interprétés (Python). Éviter les allocations mémoire en cours de trading. Pré-allouer les buffers. Éviter les locks.

2. **Réseau** : Utiliser UDP plutôt que TCP si la fiabilité n'est pas critique. Utiliser des connexions persistantes. Réduire le nombre de hops réseau. Co-localisation.

3. **Kernel** : Utiliser des techniques comme DPDK (Data Plane Development Kit) pour绕过 le kernel Linux et traiter les paquets directement. HFTrading utilise des techniques similar.

4. **Hardware** : FPGA pour le traitement des ordres. NIC (Network Interface Card) avec support pour time stamping précis. GPS pour la synchronisation temporelle.

Les profilers permettent de mesurer où le temps est perdu. Les outils comme perf (Linux), Valgrind, ou VTune identifient les bottlenecks.

## Nuances, critiques, limites

L'optimisation a un coût. Chaque niveau d'optimisation ajoute de la complexité et du coût. L'investissement n'est justifié que si le gain de latence se traduit par un gain financier.

Le code optimisé est plus difficile à maintenir. Les micro-optimisations、乱雑 le code et le rendent dur à débugger. Un équilibre doit être trouvé.

La latence réseau est hors du contrôle du développeur. Même avec du code parfait, la physique impose des limites. La vitesse de la lumière dans une fibre est ~200,000 km/s, soit 5ns par mètre.

Le "jitter" (variance de latence) peut être aussi important que la latence moyenne. Un système avec 5ms de latence moyenne mais 1ms de jitter peut être préfér able à 3ms de latence mais 10ms de jitter.

## Liens et implications

L'[[latence optimisation]] réduit la [[latence et exécution]] totale. Elle est critique pour les stratégies [[haute fréquence]] comme le [[market making]] ou l'[[arbitrage]].

La [[co-location]] et le [[network topology]] sont des composants clés. Même du code parfaitement optimisé ne peut compenser une connexion réseau lente.

Le [[server infrastructure]] détermine le socle. Le [[Docker containers]] peut ajouter de la latence (virtualisation) mais facilite le déploiement. Un équilibre entre performance et maintainability.

## Sources

[^1]: Buse, "Latency Optimization in Trading Systems", Tradewave (2020)
[^2]: CFTC, "Concept release on risk controls and system safeguards", https://www.cftc.gov (consulted 2026)
