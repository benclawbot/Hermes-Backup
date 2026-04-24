---
titre: "Stress testing"
type: méthode
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#méthode/test, #méthode/risque, #concept/simulation]
créé: 2026-04-21
liens_forts: ["[[Scenario analysis]]", "[[Risk limits and circuit breakers]]", "[[Value at Risk]]", "[[Expected shortfall]]", "[[Tail risk]]"]
liens_opposition: []
---

# Stress testing

> [!info] Résumé
> Le stress testing simule des conditions de marché extrêmes pour évaluer comment une stratégie ou un portefeuille se comporte en cas de crise. Cette méthode révèle les faiblesses cachées que les analyses classiques ne capturent pas.

## Définition

Le stress testing est une technique de gestion du risque qui évalue la performance d'un portefeuille ou d'une stratégie dans des conditions de marché extrêmes, réalisées ou hypothétiques. L'objectif est de répondre à la question : "Comment cette stratégie se comporterait-elle si..."

Les types de stress testing :
- **Historique** : utiliser les données d'une crise passée (2008, 2020, etc.)
- **Hypothétique** : simuler des scénarios qui n'ont pas encore eu lieu
- **Sensible** : faire varier un seul facteur (volatilité, corrélation, liquidité)
- **Inverse** : tester des scénarios inversés (hausse extrême au lieu de baisse)

Le stress testing est particulièrement pertinent pour les[[Trading bot]]s car ces derniers peuvent opérer de manière autonome sans supervision humaine, nécessitant une protection contre les conditions extrêmes.

Les résultats du stress testing sont exprimés en termes de perte maximale, drawdown projeté, ou temps de récupération. Une stratégie qui perd 50% dans un stress test modéré est considered plus risquée quune stratégie qui ne perd que 20%.

## Contexte et origine

Le stress testing a été rendu obligatoire pour les grandes banques après la crise de 2008. Les régulateurs ont réalisé que les modèles de risque standards (VaR) étaient insuffisants pour capturer les risques de système.

Les scénarios de stress test réglementaires incluent des événements comme "une chute de 40% des marchés d'actions", "une montée des taux de 300 points de base", ou "une défiance de liquidité sévère".

En trading algorithmique, le stress testing est encore plus crucial car les bots peuvent amplifier les pertes en cas de conditions extrêmes. Un bot avec levier qui opère pendant un flash crash peut perdre plusieurs fois son capital.

Les[[Flash crash]]s sont des exemples où le stress testing aurait pu aider. Un bot qui n'avait pas été testé contre des baisses rapides de 10-20% en quelques minutes a été pris par surprise.

## Mécanismes et caractéristiques

Le stress testing historique utilise les données de crises réelles :
- Crash de 1987 : chute de 22% en une journée
- Crise internet 2000-2002 : baisse prolongée
- Crise financière 2008 : paralysies du crédit
- Flash crash 2010 : baisse de 1000 points en minutes
- Crash COVID 2020 : baisse de 30% en un mois
- Terra/Luna 2022 : baisse de 99% en jours

Le stress testing hypothétique crée des scénarios personnalisés :
- Bitcoin chute de 80% en une semaine
- Un exchange majeur est hacké
- Une regulation restrictive est annoncée
- La volatilité explose 5×

Les[[Scenario analysis]] et le stress testing sont liés mais différents. Le stress testing simule des conditions de marché extrêmes. L'analyse de scénario explore les implications stratégiques de différents problèmes.

## Nuances, critiques, limites

Le stress testing ne peut capturer que les risques connus. Les événements "cygnes noirs" (selon la terminologie de Taleb) par définition ne peuvent pas être anticipés. Un stress test ne protège pas contre l'inattendu.

Les résultats dun stress test peuvent être psychologically difficile. Voir quune stratégie perd 70% dans un scénario de crise peut être décourageant. Mais cest précisément cette information qui permet de se préparer.

Le stress testing, historiquement bas, suppose que le passé est représentatif du futur. Les crises futures peuvent être pires que les crises passées, surtout en crypto.

Les interactions entre facteurs de risque sont complexes. Un stress test qui fait varier un seul facteur à la fois peut sous-estimer le risque réel quand plusieurs facteurs sont stressés simultanément. C'est pourquoi les stress tests les plus complets utilisent des scénarios multivariés où plusieurs paramètres changent en même temps. Par exemple, simuler simultanément une forte hausse de la volatilité, une baisse de la liquidité et une augmentation des corrélations donne une image plus réaliste du risque extrême.

## Liens et implications

Le[[Stress testing]] est lié à la[[Scenario analysis]] mais avec un focus sur les conditions de marché extrêmes. Les deux approches se complètent.

L'[[Expected shortfall]] (CVaR) et le[[Value at Risk]] sont les métriques évaluées dans le stress testing. On mesure combien ces métriques se dégradent dans les scénarios extrêmes.

Les[[Risk limits and circuit breakers]] sont calibrés en fonction des résultats du stress testing. Si un scénario montre qu'une stratégie peut perdre 40%, le circuit breaker doit être fixé avant ce niveau.

Le[[Tail risk]] est le type de risque que le stress testing aide à quantifier. Les événements de queue sont précisément ceux que le stress testing simule.

## Sources

[^1]: BIS, "Stress Testing Principles", Bank for International Settlements (2018)
[^2]: Hull, "Risk Management and Financial Institutions", Wiley (2018)
