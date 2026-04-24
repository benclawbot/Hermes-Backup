---
titre: "Risk budgeting"
type: méthode
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#méthode/risque, #méthode/allocation, #concept/risk]
créé: 2026-04-21
liens_forts: ["[[Risk parity]]", "[[Diversification]]", "[[Position sizing]]", "[[Gestion du risque]]", "[[Stress testing]]"]
liens_opposition: []
---

# Risk budgeting

> [!info] Résumé
> Le risk budgeting est le processus d'allocation d'un budget de risque total entre les différentes stratégies, positions ou classes d'actifs. Cette approche structurée assure que le risque global reste dans des limites définies.

## Définition

Le risk budgeting est une approche de gestion du risque qui commence par définir un budget de risque total (en euros, en pourcentage du capital, ou en termes de VaR/ES) puis allocate ce budget entre les différents composants du portefeuille.

L'idée est que plutôt que de commencer par les rendements attendus, on commence par le risque acceptable, puis on construit les positions de manière à respecter ce budget.

Le risk budgeting est particulièrement pertinent pour les[[Trading bot]]s multi-stratégies. Chaque stratégie reçoit une part du budget de risque total basée sur sa contribution au risque et à lespérance de rendement.

Les étapes du risk budgeting :
1. Définir le budget de risque total (ex: max 20% de drawdown, max 5% de VaR quotidien)
2. Allouer ce budget entre les stratégies selon des critères définis
3. Monitorer l'utilisation du budget en temps réel
4. Réallouer si nécessaire

Cette approche diffère de l'allocation traditionnelle par capital. Deux stratégies peuvent avoir la même allocation en capital mais des profils de risque très différents.

## Contexte et origine

Le risk budgeting est né dans les années 1990 avec les grands fonds de risque comme Bridgewater et Long-Term Capital Management. L'approche a été formalisée dans le cadre du "Enterprise Risk Management" (ERM).

L'idée était de considérer le risque comme une ressource rare qui doit être allouée de manière rationnelle. Cette perspective a transformé la gestion de portefeuille.

Les[[Risk limits and circuit breakers]] sont une forme de risk budgeting où le budget de risque est défini en termes de drawdown maximum ou de perte quotidienne maximale.

En trading algorithmique, le risk budgeting devient plus complexe car les stratégies peuvent être corrélées et le risque du portefeuille n'est pas la somme des risques individuels.

## Mécanismes et caractéristiques

L'allocation du budget de risque peut se faire selon plusieurs critères :
- Égal : chaque stratégie reçoit la même part du budget
- Proportionnel au rendement : plus une stratégie génère de rendement, plus elle reçoit de budget
- Inversed volatility : les stratégies plus volatiles reçoivent moins de budget
- Kelly fractionné : allocation basée sur l'expectance Kelly

Le[[Risk parity]] est une forme spécifique de risk budgeting où le risque est distribué également entre les composants.

Le[[Stress testing]] et la[[Scenario analysis]] sont utilisés pour valider le risk budgeting. On simule des conditions extrêmes et on vérifie que le portefeuille respecte toujours le budget de risque.

La surveillance du budget en temps réel est cruciale. Si une stratégie consume plus que sa part du budget, elle doit être réduite ou fermée. Beaucoup de bots ont des alertes automatiques quand le risque approche des limites.

## Nuances, critiques, limites

Le risk budgeting assume que les risques des stratégies peuvent être mesurés précisément. En pratique, les estimateurs de risque (VaR, ES) sont imparfaits, surtout pour les queues de distribution.

Le risque de corrélation n'est pas bien capturé par les méthodes simples. Si toutes les stratégies deviennent corrélées en période de crise, le risque total peut dépasser le budget même si chaque stratégie individuellement est dans les limites.

L'optimisation du risk budgeting peut mener à des concentrations inattendues. Une stratégie qui semble peu risquée à court terme peut avoir un risque de queue significatif qui n'est pas capturé.

Le risk budgeting est plus complexe à implémenter que le simple position sizing. Il nécessite des systèmes de surveillance et des règles de réallocation claires. En pratique, les traders commencent souvent avec un risk budgeting simple : répartir le risque également entre les stratégies, puis affinent au fur et à mesure que les données s'accumulent. L'important est de commencer et d'itérer. Un risk budgeting imparfait mais mis en place vaut mieux qu'un risk budgeting parfait jamais appliqué.

## Liens et implications

Le[[Risk budgeting]] est une extension du[[Risk parity]] avec plus de flexibilité dans l'allocation. Le risk parity equalise le risque, le risk budgeting permet des allocations inégales selon les objectifs.

La[[Diversification]] est le bénéfice principal du risk budgeting. En allouant le risque entre plusieurs stratégies non corrélées, on réduit le risque global sans sacrifier le rendement.

Les[[Risk limits and circuit breakers]] sont une forme de risk budgeting avec des limites strictes. Ils définissent les boundaries du budget de risque.

Le[[Stress testing]] valide si le risk budgeting est adequate sous des conditions extrêmes.

## Sources

[^1]: Ang, "Risk Management and Regulation", Columbia Business School (2014)
[^2]: Crouhy, "Risk Management", McGraw-Hill (2014)
