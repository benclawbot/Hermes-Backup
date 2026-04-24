---
titre: "Alpha et Beta"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/alpha, #concept/beta, #concept/rendement]
créé: 2026-04-21
liens_forts: ["[[Sharpe ratio]]", "[[Gestion du risque]]", "[[Diversification]]", "[[Corrélation]]", "[[Ratio de Sharpe]]", "[[Drawdown]]", "[[Comparaison de benchmark]]"]
liens_opposition: []
---

# Alpha et Beta

> [!info] Résumé
> L'alpha mesure le rendement excédentaire d'une stratégie par rapport à son benchmark, tandis que le beta mesure sa sensibilité aux mouvements du marché. Ensemble, ils décomposent le rendement en composantes attribuables au marché et à la skill du trader.

## Définition

L'**alpha** représente le rendement excédentaire d'une stratégie par rapport à ce que prédirait un modèle de marché (comme le CAPM). Un alpha positif signifie que la stratégie génère plus de rendement que le risque pris ne le justifierait.

Le **beta** mesure la sensibilité de la stratégie aux mouvements du marché. Un beta de 1.5 signifie que quand le marché monte de 1%, la stratégie monte de 1.5%. Un beta de 0.5 signifie que la stratégie ne bouge que la moitié du marché.

L'alpha et le beta viennent du modèle CAPM (Capital Asset Pricing Model) développé dans les années 1960 par Sharpe, Lintner, et Treynor.

## Contexte et origine

Le modèle CAPM a révolutionné la finance enProviding a framework pour séparer le rendement du marché (beta) de la performance absolue (alpha). Cette décomposition permet d'évaluer si un gérant surperforme grâce à la skill ou grâce à une surexposition au risque.

Pour le trading algorithmique crypto, l'application du CAPM est complexifiée par l'absence de benchmark universellement accepté. Le BTC est souvent utilisé comme proxy pour le "marché crypto", mais cette approximation est imparfaite.

L'alpha est particulièrement important en crypto car beaucoup de stratégiesessayent de générer du rendement absolu independent du marché. Un bot qui génère 20% de rendement quand le BTC perd 50% a un alpha très positif.

## Mécanismes et caractéristiques

### Calcul de l'alpha

L'alpha est calculé comme la différence entre le rendement réel de la stratégie et le rendement prédit par le modèle :

Alpha = Rendement stratégie - (Rf + β × (Rm - Rf))

Où Rf est le taux sans risque, Rm le rendement du marché, et β le beta.

En pratique, l'alpha est souvent calculé comme le rendement excédentaire simple par rapport à un benchmark : Alpha = Rendement stratégie - Rendement benchmark.

### Calcul du beta

Le beta est estimé par régression linéaire entre les rendements de la stratégie et ceux du marché :

β = Cov(R stratégie, R marché) / Var(R marché)

Un beta proche de 0 indique une stratégie largement décorrélée du marché. Un beta négatif indique une stratégie qui tendance à performer oppositely au marché (couverture naturelle).

### Interprétation

Un alpha de 5% annualisé avec un beta de 0.8 signifie que la stratégie génère 5% au-dessus du benchmark tout en étant moins volatile que le marché.

Un alpha de 10% avec un beta de 2.0 est moins impressionnant car le risque pris (beta élevé) explique une partie du rendement excédentaire.

## Applications pratiques

L'allocation d'actifs utilise l'alpha et le beta pour construire des portfolios avec les caractéristiques souhaitées. Un investisseur qui veut une exposition au marché mais avec plus de rendement cherchera des stratégies avec un alpha positif et un beta modéré.

La surveillance de l'alpha en production permet de détecter quand une stratégie cesse de générer de la value ajoutée. Si l'alpha décroît progressivement, cela peut indiquer que la stratégie est devenue moins efficace.

Le crypto trading présente des alphas plus élevés que les marchés traditionnels due à l'inefficacité relative. Cependant, ces alphas ont tendance à decay as the marché matures.

## Nuances, critiques, limites

L'alpha crypto est difficile à mesurer précisément car le benchmark "marché" est mal défini. Utiliser le BTC comme benchmark élimine l'alpha des stratégies qui outperform le BTC mais sous-performent d'autres crypto-actifs.

Le beta peut varier significativement selon la période de calcul. Une stratégie peut avoir un beta de 0.5 sur un an mais de 1.5 pendant une période de volatilité extrême.

L'alpha calculé sur données historiques n'est pas garantie de persister. En fait, beaucoup d'études montrent que l'alpha moyens dans les marchés efficients sont proches de zéro après coûts de transaction.

## Liens et implications

L'alpha et le beta sont liés à la [[comparaison de benchmark]] et à la [[corrélation]] du portfolio. La [[diversification]] peut réduire le beta sans réduire l'alpha.

Les stratégies avec un alpha élevé et un beta faible sont les plus recherchées. Elles génèrent du rendement additionnel sans augmentation proportionnelle du risque systématique.

Le [[Sharpe ratio]] capture le concept d'alpha ajusté du risque. Une stratégie avec un bon Sharpe génère un alpha "propre" par rapport à la volatilité totale.

## Sources

[^1]: Sharpe, "Capital Asset Prices", Journal of Finance (1964)
[^2]: Ang, "Asset Management", Columbia Business School (2014)