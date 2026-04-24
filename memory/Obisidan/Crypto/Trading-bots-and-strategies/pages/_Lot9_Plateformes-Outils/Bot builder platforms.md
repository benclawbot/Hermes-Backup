---
titre: "Bot builder platforms"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/builder, #concept/platform, #concept/nocode]
créé: 2026-04-21
liens_forts: ["[[Trading bot]]", "[[Trading sans code]]", "[[HaasScript]]"]
liens_opposition: []
---

# Bot builder platforms

> [!info] Résumé
> Les bot builder platforms sont des outils qui permettent de créer des stratégies de trading sans écrire de code, via des interfaces visuelles de type drag-and-drop ou des langages domain-specific. Ces plateformes ont democratisé l'accès au trading algorithmique pour les non-programmeurs.

## Définition

Les bot builder platforms sont des environnements de développement，专门用于 créer des stratégies de trading automatisé sans Require programming skills traditionnels. Elles offrent des interfaces visuelles où les utilisateurs assemblent des blocs fonctionnels pour définir leur stratégie.

Les approches varient : certaines utilisent des systèmes de blocs visuels (type puzzle), d'autres des langages simplifiés(domain-specific languages), et d'autres encore des wizards paso a paso.

Les principales bot builder platforms incluent HaasOnline avec HaasScript, Cryptohopper avec son Strategy Builder, et 3Commas avec ses templates de bots.

## Types de bot builders

**Builders visuels (drag-and-drop)**
Ces plateformes permettent d'assembler visuellement des composants : indicators, conditions, actions. Cryptohopper et Tradesanta utilisent cette approche. L'utilisateur place des blocs sur un canvas et définit leurs connexions.

**Langages domain-specific (DSL)**
HaasOnline a développé HaasScript, un langage conçu specifically pour le trading. Il permet d'écrire des stratégies dans un syntaxe simplifié mais powerful. L'avantage est une plus grande flexcibilité.

**Wizards paramétriques**
Ces outils posent une série de questions et génèrent automatiquement une stratégie basée sur les réponses. C'est l'approche la plus simple mais la moins flexible.

**Plateformes hybrides**
 Certaines plateformes combinent plusieurs approches. Par exemple, un builder visuel pour les débutants et un editor de code avancé pour les experts.

## Mécanismes et caractéristiques

Le Strategy Builder de Cryptohopper permet d'assembler :
- Trigger blocks (quando une condition se réalise)
- Indicator blocks (RSI, MACD, etc.)
- Action blocks (acheter, vendre, attendre)
- Logic blocks (si/alors/sinon)

Chaque bloc a des paramètres configurables. Le système vérifie la cohérence des connexions et génère une stratégie executable.

Le HaasScript fonctionne comme un langage de programmation mais avec des abstractions adaptées au trading. Il suporte des variables, des fonctions, et des операторы logiques.

## Nuances, critiques, limites

Les bot builders visuels peuvent créer un faux sentiment de simplicité. Créer une stratégie "visuellement" ne garantit pas que la stratégie est winners. many users create strategies that lose money.

La flexibilité des builders visuels est limitée par les blocs disponibles. Si un utilisateur veut implementer une logique hors des blocs predefinis, il est bloqué.

Les DSL comme HaasScript offrent plus de puissance mais nécessitent un apprentissage. L'utilisateur doit comprendre la logique de programmation pour en profiter.

Le principal risque est le sur-apprentissage visuel : créer une stratégie qui semble logique mais qui overfit aux données historiques sans generalize.

## Liens et implications

Les bot builders sont l'incarnation du [[trading sans code]]. Ils permettent aux non-programmeurs d'accéder au [[trading algorithmique]] sans écrire une seule ligne de code.

Le [[backtesting]] dans les bot builders permet de tester les stratégies avant de les deployer en live. Le HaasScript de HaasOnline offre des capacités de backtesting Avancées.

Les stratégies crées via bot builder s'appuient sur les [[API d'échange]] pour l'exécution. La [[gestion du risque]] doit être intégrée dans la stratégie via le builder.

## Sources

[^1]: HaasOnline, "HaasScript Documentation", https://www.haasonline.com (consulted 2026)
[^2]: Cryptohopper, "Strategy Builder", https://www.cryptohopper.com (consulted 2026)
