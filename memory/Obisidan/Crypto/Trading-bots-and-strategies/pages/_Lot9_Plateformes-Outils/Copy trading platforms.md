---
titre: "Copy trading platforms"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/copytrading, #concept/social, #concept/platforms]
créé: 2026-04-21
liens_forts: ["[[Copy trading]]", "[[Social trading]]", "[[Trading bot]]"]
liens_opposition: []
---

# Copy trading platforms

> [!info] Résumé
> Les copy trading platforms sont des plateformes qui permettent aux traders de reproduire automatiquement les positions d'autres traders sélectionnés. Ces plateformes combinentaspect social et automatisation, lowering the barrier d'entrée pour ceux qui n'ont pas l'expertise ou le temps de développer leurs propres stratégies.

## Définition

Les copy trading platforms sont des services qui permettent à un utilisateur ("suiveur") de copier automatiquement les opérations d'un trader sélectionné ("leader"). Quand le leader ouvre une position, elle est recréée proportionnellement dans le compte du suiveur.

Le mécanisme fonctionne comme suit :
1. Le suiveur sélectionne un leader à suivre et définit un percentage de capital à allouer
2. Le leader ouvre une position sur son compte
3. La plateforme réplique automatiquement la position sur le compte du suiveur
4. Quand le leader ferme la position, elle est aussi fermée pour le suiveur

Les plateformes offrent généralement des outils pour évaluer les leaders : historique de performance, risque,风格 de trading, etc.

## Plateformes principales

**eToro**
Le pionnier du copy trading retail avec des milliers de traders à suivre. Le modèle est battle-tested mais les frais sont plus élevés.

**Cryptohopper**
Spécialisé crypto avec marketplace de stratégies et copy trading. Plus récent mais bien adapté à l'écosystème.

**Shrimpy**
Focus sur la gestion de portfolio multi-exchange avec des fonctionnalités de copy trading.

** ZuluTrade**
Forex-focused mais扩展 vers crypto. Offre des outils sophistiqués de gestion du risque.

**Darwinex**
Modèle unique où les traders peuvent créer des "investable products" et ganar un commission sur les gains des suiveurs.

## Mécanismes de fonctionnement

**Automatic copying**
Les ordres sont répliqués automatiquement sans intervention du suiveur. Le delay est généralement de quelques secondes entre le leader et le suiveur.

**Proportional sizing**
Si le leader achète 1 BTC et que le suiveur a alloué 10% de son capital, la position suiveur sera пропорциональ.

**Risk management**
Les bonnes plateformes permettent au suiveur de définir des stops loss personnels même en copiant. Cela previent que les erreurs du leader détruisent le compte du suiveur.

**Leader ranking**
Les plateformes classent les leaders par performance ajustée au risque, wins rate, et d'autres metrics.

## Nuances et limites

**Risque de leader**
Le suiveur dépend entièrement des compétences du leader. Si le leader fait une erreur de calcul ou de jugement, elle est répercutée sur tous les suiveurs.

**Survival bias**
Les leaders affichés sont généralement ceux qui performent bien. Les perdants quittent la plateforme, créant un biais de sélection.

**Delay et slippage**
During forte volatilité, le delay entre l'ouverture de la position leader et suiveur peut causer un slippage qui grignote les profits.

**Conflicts d'intérêts**
有些 plateformes payent les leaders en function du nombre de suiveurs, ce qui peut créer des incitations à prendre des risques excessifs pour attirer l'attention.

## Liens et implications

Les [[copy trading platforms]] sont une implémentation du [[copy trading]] plus large. Le [[social trading]] inclut d'autres formes d'interaction sociale comme les signaux et les discussions.

Le [[trading bot]] est la technologie sous-jacente qui permet la replication automatique. Les plateformes comme [[Cryptohopper]] et [[Shrimpy]] offrent ces fonctionnalités.

La [[gestion du risque]] est critique en copy trading : même en copiant un trader performant, le suiveur doit définir ses propres limites de perte. Le [[backtesting]] ne s'applique pas directement since le trading dépend d'un tiers.

## Sources

[^1]: eToro, "CopyTrading", https://www.etoro.com (consulted 2026)
[^2]: Investopedia, "Copy Trading", https://www.investopedia.com (consulted 2026)
