---
titre: "Taux de réussite"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/winrate, #concept/probabilité, #concept/stratégie]
créé: 2026-04-21
liens_forts: ["[[Espérance mathématique]]", "[[Facteur de profit]]", "[[Drawdown]]", "[[Gestion du risque]]", "[[Position sizing]]", "[[Risk of ruin]]", "[[Backtesting]]"]
liens_opposition: []
---

# Taux de réussite

> [!info] Résumé
> Le taux de réussite (win rate) mesure le pourcentage de trades rentables. Indispensable mais insuffisant seul : une stratégie peut avoir un win rate élevé avec des pertes importantes ou un win rate faible avec des gains massifs.

## Définition

Le taux de réussite, ou win rate, est le pourcentage de trades qui se soldent par un profit. Si 60 trades sur 100 sont gagnants, le win rate est 60%.

Le win rate est une métrique intuitive mais souvent mal comprise. Un win rate élevé n'implique pas necessarily une stratégie profitable si les pertes sont grandes. Un win rate faible peut être très profitable si les gains dépassent largement les pertes.

Le win rate se calcule sur une période et doit être mis en contexte avec d'autres métriques comme le rapport moyenne gain/perte pour obtenir l'[[espérance mathématique]].

## Contexte et origine

Le win rate est la métrique la plus intuitive pour les traders. Elle est facile à comprendre et à calculer. Les débutant ont tendance à surestimer son importance.

Les stratégies de mean reversion ont typiquement des win rates élevés (60-80%) mais des rapports gain/perte modestes. Les stratégies de momentum ont typiquement des win rates plus faibles (30-50%) mais des rapports gain/perte plus élevés.

Le trading haute fréquence vise des win rates très élevés (90%+) mais des profits par trade très petits. Le cumul de petits avantages produit des rendements significatifs.

## Mécanismes et caractéristiques

### Calcul

Win rate = (Nombre de trades gagnants) / (Nombre total de trades)

Le win rate peut être calculé brut (tous les trades) ou filtré (seulement certains types de trades ou conditions de marché).

### Win rate vs espérance

L'espérance mathématique combine le win rate avec le rapport moyen gain/perte :

E = (Win rate × Gain moyen) - ((1 - Win rate) × Perte moyenne)

Une stratégie avec un win rate de 40% et un ratio de 2:1 (gain moyen 2x perte moyenne) a une espérance positive :
E = (0.4 × 2) - (0.6 × 1) = 0.8 - 0.6 = 0.2 par unit de risque

### Distribution des résultats

Le win rate seul ne capture pas la distribution des résultats. Deux stratégies avec 50% de win rate peuvent avoir des distributions très différentes : l'une avec beaucoup de petits gains et pertes, l'autre avec peu de gros gains et pertes.

## Applications pratiques

Le win rate est utilisé pour dimensionner les positions avec le [[Kelly Criterion]] ou ses variantes (demi-Kelly, fractionnaire).

Le win rate contribue au calcul du [[risk of ruin]]. Une stratégie avec un win rate de 50% et une espérance nulle a un risk of ruin de 100% si la taille de position est trop grande.

Le win rate aide à définir les attentes lors du [[forward testing]]. Un backtest avec 60% de win rate mais un forward test avec 55% peut indiquer un léger surapprentissage ou simplement la variance naturelle.

## Nuances, critiques, limites

Le win rate peut être manipulé en augmentant le stop-loss serré. Une stratégie avec un win rate de 90% mais une perte moyenne de 10% et un gain moyen de 0.5% est perdante malgré le win rate excellent.

Le win rate varie selon les conditions de marché. Une stratégie peut avoir 70% de win rate en marché calme mais 40% en marché volatil. Le win rate historical doit être stratifié par régide de marché.

Le win rate est une métrique de fréquence, pas de magnitude. Une stratégie avec un win rate de 30% mais des gains de 5x les pertes peut être très profitable. Inversement, une stratégie avec 80% de win rate mais des pertes de 5x les gains peut être déficitaire.

## Liens et implications

Le win rate est un input clé pour l'[[espérance mathématique]]. Ensemble, ils déterminent si une stratégie est profitable à long terme.

Le [[facteur de profit]] combine win rate et ratio de gain/perte pour une vision plus complète de la profitability.

Le win rate affecte le [[drawdown]] attendu et le [[risk of ruin]]. Une stratégie avec faible win rate mais haute espérance aura des périodes de drawdown plus longues et profondes.

Le [[position sizing]] dépend du win rate pour optimally dimensionner les positions selon le Kelly Criterion.

## Sources

[^1]: Thorp, "The Mathematics of Gambling", Gambling Times (1984)
[^2]: Van Tharp, "Trade Your Way to Financial Freedom", McGraw-Hill (1999)