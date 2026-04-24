---
titre: "Ratio de Sharpe"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/ratio, #concept/rendement, #concept/risque]
créé: 2026-04-21
liens_forts: ["[[Sortino ratio]]", "[[Calmar ratio]]", "[[Ratio d'information]]", "[[Volatilité annualisée]]", "[[Drawdown]]", "[[Taux de réussite]]", "[[Gestion du risque]]"]
liens_opposition: []
---

# Ratio de Sharpe

> [!info] Résumé
> Le Sharpe ratio mesure le rendement ajusté au risque en divisant le rendement excédentaire par la volatilité. Standard de l'industrie, il permet de comparer des stratégies avec différents profils de risque.

## Définition

Le Sharpe ratio, développé par William Sharpe en 1966, est le ratio le plus utilisé pour évaluer la performance ajustée au risque d'une stratégie de trading. Il mesure combien de rendement excédentaire une stratégie génère par unité de volatilité.

La formule standard est :

Sharpe = (Rp - Rf) / σp

Où Rp est le rendement de la stratégie, Rf le taux sans risque, et σp la volatilité des rendements.

Un Sharpe ratio de 1.0 signifie que pour chaque unité de volatilité, la stratégie génère une unité de rendement excédentaire. Un Sharpe de 2.0 est excellent, de 3.0+ est exceptionnel.

## Contexte et origine

William Sharpe, futur Prix Nobel, a développé le Sharpe ratio dans le cadre du modèle CAPM. Le ratio est devenu le standard de l'industrie pour comparer les performances de gestionnaires d'actifs.

En trading algorithmique crypto, le Sharpe ratio est utilisé extensivement malgré ses limites. La volatilité extreme des crypto-actifs peut produire des Sharpe très variables.

Le taux sans risque en crypto est souvent ignoré ou remplacé par 0, car les taux d'intérêt sur les actifs crypto sont complexes à définir et souvent proches de zéro pour les petits montants.

## Mécanismes et caractéristiques

### Calcul et annualisation

Le Sharpe ratio peut être calculé sur différentes périodes. Pour annualiser un Sharpe quotidien, on le multiplie généralement par sqrt(252) (jours de trading).

Un Sharpe de 0.5 quotidien annualise à environ 7.9, ce qui semble excellent mais reflète juste la volatilité élevée du court terme.

### Interprétation

Les seuils typiques pour le Sharpe ratio annualisé :
- < 0.5 : Pauvre
- 0.5 - 1.0 : Acceptable
- 1.0 - 2.0 : Bon
- 2.0 - 3.0 : Excellent
- > 3.0 : Exceptionnel (suspecter possible manipulation ou risque sous-estimé)

Un Sharpe de 2.0 annualisé signifie que le rendement mensuel moyen est deux fois plus grand que l'écart-type mensuel.

### Limitations

Le Sharpe ratio penalise autant la volatilité positive que négative. Une stratégie avec des rendements stables et une volatilité basse peut avoir un meilleur Sharpe qu'une stratégie avec des rendements plus élevés mais plus erratiques.

Le ratio suppose que les rendements suivent une distribution normale. Les crypto-actifs ont souvent des distributions avec des queues épaisses, invalidant cette假设.

## Applications pratiques

Le Sharpe ratio est utilisé pour comparer des stratégies avant allocation. Une stratégie avec un Sharpe plus élevé est preferée, toutes choses égales par ailleurs.

Le tri par Sharpe est common pour筛选 les stratégies dans un portefeuille. Les stratégies avec les plus hauts Sharpe reçoivent plus de capital.

En crypto, leSharpe est souvent calculé sur des périodes courtes (mensuel, trimestriel) à cause de la volatilité du marché. Un Sharpe annualisé basé sur 3 mois de données est peu fiable.

## Nuances, critiques, limites

Le Sharpe ratio est sensible à la période de calcul. Une stratégie peut avoir un excellent Sharpe sur un an mais un mauvais sur trois ans.

Le ratio ne capture pas le drawdown. Une stratégie avec un Sharpe de 2.0 mais un max drawdown de 60% est très risquée malgré le bon Sharpe.

Les stratégies avec des rendements très erratiques (alternance de gains et pertes importants) peuvent avoir un Sharpe décent même si l'expérience investisseur est mauvaise.

Le Sharpe ratio est insuffisant pour évaluer des stratégies avec des distributions de rendements non-normales. Le [[Sortino ratio]] et le [[Calmar ratio]] offrent des perspectives complémentaires.

## Liens et implications

Le Sharpe ratio est étroitement lié au [[Sortino ratio]] (qui ne penalise que la volatilité négative) et au [[Calmar ratio]] (qui utilise le drawdown comme mesure de risque).

La [[volatilité annualisée]] est le denominateur du Sharpe. Comprendre comment elle est calculée et ses limitations est essentiel.

Le Sharpe ratio informe la [[gestion du risque]] et le [[position sizing]]. Une stratégie avec un haut Sharpe peut justifier des positions plus grandes.

Le [[drawdown maximum]] n'est pas capturé par le Sharpe mais est tout aussi important. Une stratégie avec un excellent Sharpe mais des drawdowns fréquents et profonds est problématique.

## Sources

[^1]: Sharpe, "Mutual Fund Performance", Journal of Business (1966)
[^2]: Investopedia, "Sharpe Ratio Definition", https://www.investopedia.com/terms/s/sharperatio.asp (consulted 2026)