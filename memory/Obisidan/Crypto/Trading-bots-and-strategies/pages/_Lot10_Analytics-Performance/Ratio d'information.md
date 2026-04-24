---
titre: "Ratio d'information"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/ratio, #concept/rendement, #concept/benchmark]
créé: 2026-04-21
liens_forts: ["[[Sharpe ratio]]", "[[Alpha et Beta]]", "[[Comparaison de benchmark]]", "[[Drawdown]]", "[[Taux de réussite]]", "[[Corrélation]]", "[[Gestion du risque]]"]
liens_opposition: []
---

# Ratio d'information

> [!info] Résumé
> Le ratio d'information mesure le rendement actif (追踪误差) divisé par le tracking error. Il évalue combien de rendement excédentaire un manager génère par rapport à un benchmark, ajusté du risque de s'éloigner du benchmark.

## Définition

Le ratio d'information compare le rendement d'une stratégie à celui d'un benchmark, normalisé par le tracking error (l'écart-type de la différence entre les rendements de la stratégie et du benchmark).

La formule est :

IR = (Rp - Rb) / TE

Où Rp est le rendement du portfolio, Rb le rendement du benchmark, et TE le tracking error (écart-type de la différence des rendements).

Un IR de 0.5 signifie que pour chaque unité de tracking error, la stratégie génère 0.5% de rendement excédentaire. Un IR de 1.0 est excellent,signifiant que le rendement excédentaire égal le risque pris pour s'éloigner du benchmark.

## Contexte et origine

Le ratio d'information est utilisé principalement dans la gestion active d'actifs. L'objectif d'un manager actif est de générer de l'alpha tout en controlant le risque de s'éloigner trop du benchmark.

Le concept de tracking error est central : les investisseurs veulent de l'alpha mais pas au prix d'un risque excessif de underperformance par rapport au benchmark.

En trading algorithmique crypto, l'IR est pertinent pour les stratégies qui sont évaluées par rapport à un benchmark comme le BTC ou un indice DeFi. Une stratégie qui génère 50% de rendement avec un tracking error de 30% par rapport au BTC a un IR de 1.67, ce qui est excellent.

## Mécanismes et caractéristiques

### Tracking error

Le tracking error mesure la consistance de l'alpha. Un tracking error bas signifie que la stratégie génère régulièrement son alpha. Un tracking error élevé signifie que l'alpha est inconsistent.

Le tracking error est calculé comme l'écart-type des rendements excédentaires sur une période.

### Ratio d'information vs Sharpe

Le Sharpe ratio compare le rendement au risque total (volatilité). L'IR compare le rendement au risque de s'éloigner du benchmark.

Si le benchmark est le taux sans risque, l'IR équivaut au Sharpe ratio. Pour un benchmark non-trivial, l'IR fournit une mesure plus précise de la performance du manager actif.

### Interprétation

Les seuils typiques pour le ratio d'information :
- < 0.3 : Pauvre
- 0.3 - 0.6 : Acceptable
- 0.6 - 1.0 : Bon
- > 1.0 : Excellent

Un IR de 0.5 signifie que le manager génère environ la moitié du rendement excédentaire en terme de tracking error, ce qui est decent pour une stratégie active.

## Applications pratiques

Le ratio d'information est utilisé pour évaluer les gestionnaires de fonds actifs. Un IR de 0.5 ou plus est considéré comme indicateur de skill de gestion.

En allocation d'actifs, l'IR aide à décider combien de capital allouer à chaque stratégie active. Une stratégie avec un IR plus élevé mérite plus de capital.

Le IR est particulièrement utile quand le benchmark est complexe (un indice multi-actifs) plutôt qu'un simple taux sans risque.

## Nuances, critiques, limites

Le choix du benchmark influence fortement l'IR. Utiliser un benchmark inapproprié peut faire paraître une stratégie bonne ou mauvaise alors qu'elle ne l'est pas.

Le IR penalise également le positif et le negatif tracking. Une stratégie qui dépasse le benchmark de manière consistente aura le même IR qu'une stratégie qui le sous-performe de manière consistente.

Le ratio d'information calculé sur différentes périodes peut donner des résultats très différents. Un IR basé sur 12 mois est moins fiable qu'un IR sur 36 mois.

## Liens et implications

Le ratio d'information est liés au [[Sharpe ratio]] mais se concentre sur le benchmark plutôt que le taux sans risque.

L'[[alpha et beta]] décomposent le rendement en composante de marché (beta) et composante active (alpha). L'IR capture l'alpha ajusté du risque de tracking.

La [[comparaison de benchmark]] est le cadre d'évaluation. Le [[tracking error]] est le denominateur du ratio.

La [[corrélation]] entre la stratégie et le benchmark affecte le tracking error. Une stratégie très corrélée aura un tracking error faible, limitant le potentiel d'alpha.

## Sources

[^1]: Grinold, "The Information Ratio", Financial Analysts Journal (1994)
[^2]: Investopedia, "Information Ratio Definition", https://www.investopedia.com/terms/i/informationratio.asp (consulted 2026)