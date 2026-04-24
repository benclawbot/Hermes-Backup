---
titre: "Exécution VWAP"
type: terme
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/ordre, #méthode/exécution, #trading/avancé]
créé: 2026-04-21
liens_forts: ["[[TWAP (Time-Weighted Average Price)]]", "[[Ordre iceberg]]", "[[Order book dynamics]]", "[[Impact de marché]]", "[[Volume profile]]"]
liens_opposition: []
---

# Exécution VWAP

> [!info] Résumé
> L'exécution VWAP (Volume-Weighted Average Price) est une stratégie d'exécution algorithmique qui ajuste le rythme d'exécution en fonction du profil de volume historique du marché, visant à obtenir un prix moyen proche du prix moyen pondéré par le volume de la journée.

## Définition

L'exécution VWAP est un algorithme d'exécution qui vise à reproduire le prix moyen pondéré par le volume (VWAP) du marché sur une période donnée. Contrairement au [[TWAP (Time-Weighted Average Price)|TWAP]], qui distribue les ordres uniformément dans le temps, le VWAP adapte le rythme d'exécution au profil historique du volume — exécutant plus quand le marché est liquide et moins quand il est fin.

Le VWAP est à la fois un benchmark et une stratégie. Comme benchmark, il permet de mesurer si une exécution a été meilleure (en dessous du VWAP pour un achat) ou pire (au-dessus) que le prix moyen du marché sur la période. Comme stratégie, il cherche à "matcher" le VWAP pour minimiser l'[[Impact de marché]] en s'alignant sur le flux naturel de liquidité.

La formula du VWAP de marché est la somme des (prix × volume) divisée par le volume total. L'algorithme d'exécution VWAP essaie de reproduire ce prix en exécutant une fraction du volume total à chaque intervalle, calibrée sur la fraction historique du volume total échangée à cet intervalle.

## Contexte et origine

Le VWAP emerge comme benchmark institutionnel dans les années 1980-1990 sur les marchés d'actions américains, remplacé progressivement le "mid-point" ou le "last sale" comme référence de prix pour les exécutions institutionnelles. Les desks de trading algorithmique des banques developpent des stratégies pour exécuter les ordres au VWAP ou mieux que le VWAP.

Dans l'écosystème crypto, le VWAP est disponible comme indicateur de référence (cf. [[VWAP (Volume Weighted Average Price)]] page existante) et comme stratégie d'exécution sur les plateformes de [[Trading algorithmique]]. Les [[Trading bot]]s qui implementent des stratégies de [[Stratégie de momentum]] ou de [[Stratégie de mean reversion]] l'utilisent souvent comme prix de référence pour décider si une exécution a été favorable.

Les [[API d'échange]] de certaines plateformes crypto supportent des endpoints VWAP pour l'exécution algorithmique. Sur les plateformes où ce n'est pas natif, les algorithm traders implementent leur propre VWAP algorithm en utilisant les données de volume temps réel.

## Mécanismes / caractéristiques / détails

**Profil de volume** : le VWAP utilise un profil de volume historique — généralement la moyenne des X derniers jours — pour prédire le volume à chaque intervalle de la journée. Par exemple, si historiquement 15 % du volume quotidien se trade entre 9h et 10h, l'algorithme essayera d'exécuter 15 % de l'ordre total pendant cette heure.

**Participation rate** : un paramètre clé est le "participation rate" — le pourcentage du volume de marché que l'algorithme vise à representer. Un participation rate de 10 % signifie que pour chaque 100 BTC échangés sur le marché, l'algorithme en exécute 10. Un taux élevé exécute plus vite mais génère plus d'[[Impact de marché]] ; un taux faible est plus discret mais prend plus de temps.

**Adaptation au volume réel** : les VWAP modernes sont adaptatifs — si le volume réel du marché est supérieur (ou inférieur) au volume historique prévu, l'algorithme accélère (ou ralentit) ses exécutions pour rester synchronisé avec le flux de liquidité. Cette adaptation contínuelle distingue les implémentations sophistication des versions naïves.

**Benchmark d'évaluation** : la performance d'une exécution VWAP est mesurée par l'écart entre le prix d'exécution moyen et le VWAP du marché sur la même période. Un ecart négatif (prix d'exécution < VWAP pour un achat) indica une execution " melhor que le marche" ; un ecart positif indica une execution "pire que le marche".

**Impact sur le carnet** : comme le [[TWAP (Time-Weighted Average Price)|TWAP]], l'exécution VWAP interagit avec l'[[Order book dynamics|ordre du livre d'ordres]]. Un VWAP avec un fort participation rate peut décider d'utiliser des [[Ordre au marché]] pour les grosses tranches, engendrant un impact immediate, tandis qu'un taux faible privilégiera les [[Ordre à cours limité]] pour être maker.

## Nuances, critiques, limites

**Dépendance au passé (look-ahead bias)** : le VWAP est basé sur des données historiques. Si le profil de volume du jour diverge significativement du profil historique (par exemple lors d'annonces macro ou d'événements de marché), l'algorithme peut exécuter mal à propos. Les VWAP "intraday" adaptatifs tentaient de corriger ce problème en temps réel.

**Prévisibilité et gaming** : comme le TWAP, le VWAP schedule est partiellement prévisible. Les autres participants peuvent détecter qu'un algorithme VWAP est en cours d'exécution (via la succession d'ordres au même rythme) et ajuster leurs prix. Les implémentations modernes introduisent donc une randomisation des horaires et des tailles de tranches.

**Profil de volume crypto** : sur les marchés crypto 24h/24, le concept de "journée" est arbitraire. Les algorithmes VWAP doivent définir un horizon temporel (24h, ou aligné sur UTC) et un profil de volume correspondant. Les cryptomarchés ont des profils de volume distincts avec souvent une activité plus forte sur les exchanges asiatiques et pendant les horaires américains.

**Coût d'opportunité** : si le prix drift défavorablement pendant l'exécution VWAP (ce qui peut prendre des heures pour un gros ordre), le coût doccasion peut être supérieur au gain issu de la meilleure exécution par rapport au VWAP. Le VWAP minimise l'impact de marché statistic mais ne protège pas contre la dérive directionnelle du prix.

## Liens et implications

Le VWAP est souvent utilisé comme price benchmark dans les stratégies de [[Stratégie de momentum]] où l'on veut s'assurer que l'entrée est faite à un prix compétitif par rapport au flux de volume naturel du marché. C'est aussi le benchmark standard pour les desks d'exécution institutionnelle qui doivent rapporter leurs performances à leurs clients.

Le [[Volume profile]] est intimement lié au VWAP — les deux utilisent le volume comme dimension fondamentale pour analyser le prix. Un marché avec un fort volume profile à certains niveaux de prix indiques des zones de support/résistance naturelles qui sont aussi des niveaux où le VWAP historique indiquera une liquidité accrue.

Les stratégies de [[Arbitrage]] entre exchanges utilisent des exec VWAP pour exécuter leurs ordres sans dériver le prix local, car un arbitrage qui exécuterait au marché pourrait avoir un impact auto-infligé qui réduit ou elimine le profit d'arbitrage.

## Sources

[^1]: Almgren, Robert, and Neil Chriss. "Optimal execution of portfolio transactions." *Journal of Risk* 3 (2000): 5-39.
[^2]: Kissell, Robert. *The Science of Algorithmic Trading and Portfolio Management*. Academic Press, 2013.
[^3]: Burghardt, Gordon. *The Daily PVWAP. "Institutional Investor".* 2003.
