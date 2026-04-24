---
titre: "Ratio de Sortino"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/ratio, #concept/rendement, #concept/risque]
créé: 2026-04-21
liens_forts: ["[[Sharpe ratio]]", "[[Calmar ratio]]", "[[Ratio d'information]]", "[[Drawdown]]", "[[Volatilité des rendements négatifs]]", "[[Taux de réussite]]", "[[Gestion du risque]]"]
liens_opposition: []
---

# Ratio de Sortino

> [!info] Résumé
> Le Sortino ratio refine le Sharpe ratio en ne penalisant que la volatilité négative. Plus pertinent pour les stratégies asymétriques où les gains sont bienvenus mais les pertes sont le vrai risque.

## Définition

Le Sortino ratio, créé par Brian Sortino dans les années 1990, modifie le Sharpe ratio en remplaçant la volatilité totale par la volatilité des rendements négatifs (downside deviation). Cela reflète mieux le risque réel perçu par les investisseurs.

La formule est :

Sortino = (Rp - Rf) / σd

Où σd est la downside deviation (volatilité des rendements en dessous du threshold, généralement 0 ou le taux sans risque).

Un Sortino plus élevé indique une meilleure performance ajustée au risque de pertes. Une stratégie avec des rendements stables et peu de pertes aura un Sortino plus élevé qu'une stratégie avec la même volatilité totale mais plus de gains.

## Contexte et origine

Brian Sortino, directeur de la firme de recherche pension, a développé le ratio pour adresser les limitations du Sharpe ratio pour les objectifs de retirement. Le ratio est devenu populaire dans l'évaluation des fonds spéculatifs et des stratégies de trading.

L'idée centrale : seule la volatilité des mauvais résultats devrait être pénalisée. La volatilité des bons résultats (gains au-dessus de la moyenne) est beneficiose, pas coûteuse.

En trading algorithmique crypto, le Sortino ratio est particulièrement pertinent car les distributions de rendements crypto sont fortement non-normales avec des skewness positives.

## Mécanismes et caractéristiques

### Downside deviation

La downside deviation se concentre uniquement sur les rendements qui tombent en dessous d'un threshold (target). Typiquement, le threshold est zéro ou le taux sans risque.

Seuls les rendements négatifs contribuent à la volatilité dans le calcul. Les rendements positifs sont ignorés.

### Différence avec le Sharpe

Pour une stratégie avec des rendements également distribués autour de zéro, Sharpe et Sortino seront similaires.

Pour une stratégie avec beaucoup de petits gains et quelques pertes importantes, le Sortino sera plus défavorable que le Sharpe car les pertes importantes dominate la downside deviation.

Pour une stratégie avec beaucoup de pertes petites et quelques gains importants, le Sortino peut être plus favorable car les pertes petites ont moins d'impact.

### Threshold personnalisé

Le threshold peut être personnalisé selon l'objectif de l'investisseur. Un investisseur conservatif pourrait utiliser un threshold de 5% pour penaliser les pertes au-dessus de ce niveau.

En pratique, la plupart des calculs utilisent zéro comme threshold car il est simple et intuitif : tout rendement négatif est une mauvaise chose.

## Applications pratiques

Le Sortino ratio est particulièrement utile pour évaluer les stratégies de mean reversion qui peuvent avoir des pertes asymétriques (quelques grosses pertes, plusieurs petits gains).

Pour les stratégies de momentum, le Sortino peut être plus favorable car les pertes sont typiquement limitées (le stop-loss fonctionne) tandis que les gains peuvent être substantiels.

Le ratio est utilisé pour comparer des stratégies avec le même Sharpe ratio mais des profils de risque différents. Celui avec le Sortino plus élevé est preferred.

## Nuances, critiques, limites

Le Sortino ratio peut être manipulé en ajustant le threshold. Un threshold très bas (loin dans la queue) produira une downside deviation faible et un Sortino élevé.

Le ratio ne capture pas la fréquence des pertes, seulement leur magnitude. Une stratégie avec plusieurs petites pertes et une stratégie avec une seule grande perte peuvent avoir le même Sortino.

Le Sortino suppose que tous les rendements en dessous du threshold sont également mauvais, ce qui n'est pas toujours le cas. Une perte de 5% est moins mauvaise qu'une perte de 20%.

## Liens et implications

Le Sortino ratio complète le [[Sharpe ratio]] en se concentrant spécifiquement sur le risque de perte. Une évaluation complète utilise les deux.

Le [[Calmar ratio]] utilise le drawdown comme mesure de risque, ce qui est encore plus sévère que la downside deviation pour capturer le risque de pertes extrêmes.

La [[volatilité des rendements négatifs]] est le composant clé du Sortino. Comprendre comment elle est calculée aide à interpréter le ratio.

Le Sortino informe la [[gestion du risque]] en identifiant le risque spécifique des pertes plutôt que la volatilité totale.

## Sources

[^1]: Sortino, "Performance Measurement in a Downside Risk Framework", Financial Analysts Journal (1994)
[^2]: Investopedia, "Sortino Ratio Definition", https://www.investopedia.com/terms/s/sortinoratio.asp (consulted 2026)