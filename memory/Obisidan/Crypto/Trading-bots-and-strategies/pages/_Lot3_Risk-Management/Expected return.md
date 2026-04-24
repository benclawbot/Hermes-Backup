---
titre: "Expected return"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/rendement, #concept/esperance, #concept/risque]
créé: 2026-04-21
liens_forts: ["[[Annualized volatility]]", "[[Sharpe ratio]]", "[[Trade expectancy]]", "[[Risk-reward ratio]]", "[[Kelly criterion]]"]
liens_opposition: []
---

# Expected return

> [!info] Résumé
> L'expected return (rendement attendu) est le gain moyen qu'un investisseur peut espérer obtenir d'un investissement sur une période donnée. Cette métrique est fondamentale pour évaluer l'attractivité d'une stratégie mais doit toujours être mise en balance avec le risque.

## Définition

L'expected return est lespérance mathématique du rendement d'un actif ou d'une stratégie. C'est le rendement moyen qu'on obtient si on répète l'investissement un grand nombre de fois dans les mêmes conditions.

La formule simple pour une action est : E[R] = Σ (pi × Ri) où pi est la probabilité de chaque scénario et Ri est le rendement dans ce scénario. En pratique, on utilise souvent la moyenne historique comme estimateur du rendement attendu.

En trading, l'expected return d'une stratégie est lié à l'[[Trade expectancy]]. Si l'expectancy est de 10€ par trade et qu'on fait 100 trades par an, le rendement attendu annuel dépend de la taille moyenne des positions.

L'expected return nexiste pas de manière absolue. Il dépend du modèle utilisé pour lestimer. Différents modèles (CAPM, APT, Fama-French) donnent des estimations différentes pour le même actif.

L'expected return est toujours subjectif car il est basé sur des hypothèses. Deux analystes peuvent avoir des estimations différentes pour le même actif selon leur modèle et leurs hypothèses.

## Contexte et origine

Le concept de expected return est au cœur de la finance moderne. Harry Markowitz a utilisé le rendement attendu et le risque (via la variance) pour construire son modèle de portefeuille efficient.

Le Capital Asset Pricing Model (CAPM) de Sharpe (1964) a formalisé le expected return comme une fonction du risque systématique (beta). Selon ce modèle, le rendement attendu dépend uniquement du risque non diversifiable.

Les modèles plus récents comme le Fama-French three-factor model ont élargi le cadre pour inclure dautres facteurs de risque (size, value, momentum).

En trading algorithmique crypto, lestimation du expected return est particulièrement difficile car les crypto-actifs nont pas de fondamentaux évidents et les conditions de marché changent rapidement.

L'expected return est utilisé pour calculer le[[Sharpe ratio]] et dautres métriques de performance. Il est également un input pour le[[Kelly criterion]].

## Mécanismes et caractéristiques

L'estimation du expected return peut se faire par :
- **Moyenne historique** : simple mais suppose que le futur ressemble au passé
- **Modèles factoriels** : utilisent des facteurs de risque pour estimer le rendement
- **Analyse technique** : les indicateurs peuvent donner des signaux de direction
- **Analyse fondamentale** : les modèles dactioniers donnent des estimations de valeur

La moyenne historique est souvent utilisée en pratique pour les stratégies de trading car elle est simple et ne nécessite pas de modèle complexe.

Le expected return annualisé se calcule en composant les rendements. Si le rendement mensuel moyen est de 2%, le rendement annualisé est (1.02)^12 - 1 ≈ 26.8%.

Le[[Risk-reward ratio]] est une façon de voir le expected return. Si le RRR est de 2:1 et le win rate est de 50%, le expected return est positif. Plus le RRR et le win rate sont élevés, plus le expected return est élevé.

## Nuances, critiques, limites

L'expected return basé sur lhistorique est peu fiable pour les crypto-actifs. Les rendements passés de Bitcoin sur 10 ans sont exceptionnels mais ne prédisent pas les rendements futurs.

Le expected return est une espérance, pas une garantie. Une stratégie avec 15% de expected return annualisé peut tout de même perdre 50% dans une année donné si les conditions sont défavorables. Il est crucial de comprendre que le expected return décrit le centre de la distribution des résultats possibles, pas les extrêmes.

L'estimation du expected return est plus incertaine que lestimation du risque (volatilité). Les rendements ont une variance plus grande que la volatilité, donc les intervalles de confiance sont plus larges.

Le[[Trade expectancy]] est une forme de expected return pour chaque trade. Mais le expected return dun actif ou dune stratégie sur une période plus longue peut intégrer dautres facteurs.

## Liens et implications

L'[[Expected return]] est utilisé avec l'[[Annualized volatility]] pour calculer le[[Sharpe ratio]]. Ce ratio est le rendement ajusté au risque le plus utilisé.

Le[[Kelly criterion]] utilise le expected return (via l'expectance) pour calculer la taille de position optimale. Sans une bonne estimation du expected return, le Kelly nest pas applicable.

La[[Trade expectancy]] peut être vue comme le expected return par trade. Elle est plus granulaire mais conceptuellement liée. Les deux mesures capturent la même idée de rendement moyen attendu mais à des horizons différents.

Le[[Risk-reward ratio]] est une composante du expected return. Un meilleur RRR augmente le expected return toutes choses égales par ailleurs.

## Sources

[^1]: Sharpe, "Capital Asset Prices", Journal of Business (1964)
[^2]: Ang, "Risk Management and Regulation", Columbia Business School (2014)
