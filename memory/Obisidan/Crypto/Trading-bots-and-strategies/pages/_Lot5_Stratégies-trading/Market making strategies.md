---
titre: "Market making strategies"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/market-making, #concept/liquidité, #concept/spread]
créé: 2026-04-21
liens_forts: ["[[Market making]]", "[[Ordre à cours limité]]", "[[Frais maker vs taker]]"]
liens_opposition: []
---

# Market making strategies

> [!info] Résumé
> Les stratégies de market making consistent à placer des ordres d'achat et de vente simultanément pour capturer le spread. Le market maker fournit de la liquidité aux autres participants et est rémunéré par le spread, mais doit gérer le risque d'inventaire et le risque adverse selection.

## Définition

Le market making est une stratégie où le trader place simultanément des ordres d'achat (bid) et des ordres de vente (ask) sur le même actif. La différence entre le prix acheteur et le prix vendeur est le spread, qui représente le profit du market maker.

Le market maker gagne le spread à chaque transaction où les deux côtés de l'ordre sont exécutés. Si un trader achète à 100 et vend à 100,5, le market maker gagne 0,5% du volume. Ce profit semble petit, mais il s'accumule avec le volume.

Les market makers professionnels effectuent des milliers de transactions par seconde. Le volume compense la petitesse du spread unitaire. Mais le market maker doit gérer plusieurs risques : le risque d'inventaire, le risque de adverse selection, et le risque de modèle.

L'adverse selection se produit quand le market maker trade avec des acteurs mieux informés. Si un gros joueur achète massivement, c'est souvent parce qu'il sait quelque chose que le market maker ne sait pas. Le prix peut ensuite bouger contre le market maker.

## Contexte et origine

Le market making a émergé avec les premières Bourses. Les teneurs de marché (jobbers) à Londres et les specialists à New York étaient des market makers officiels qui maintenaient des prix sur certaines actions.

Les plateformes de trading électroniques ont démocratisé le market making. N'importe quel trader peut maintenant placer des ordres limités et devenir un market maker de fait, bien que les véritable market makers institutionnels bénéficient de tarifs préférentiels.

En crypto, le market making a été particulièrement important pour les altcoins avec une liquidité faible. Les équipes de certains projets engagent des market makers pour maintenir des fourchettes de prix convenables.

## Mécanismes et caractéristiques

Le spread optimal dépend de la volatilité de l'actif, du volume traité, et de l'aversion au risque du market maker. Un actif volatile nécessite un spread plus large pour compenser le risque d'inventaire.

L'ajustement dynamique du spread en fonction des conditions de marché est essential. En période de volatile élevée, le spread s'élargit. En période de liquidité abondante, le spread se rétrécit.

La gestion d'inventaire consiste à maintenir une position aussi neutre que possible. Plus la position est déséquilibrée, plus le risque de mouvement de prix contre la position est grand. Les market makers rééquilibrent constamment leurs positions.

Les orders [[ordre à cours limité|à cours limité]] sont le principal outil du market maker. Placer le bid juste au-dessus du prix marché et l'ask juste en dessous demande une calibration précise.

## Nuances, critiques, limites

Le market making est structurellement déficitaire sur les marchés en tendance. Si le prix monte fortement, le market maker qui a placé des ordres d'achat les voit exécutés mais ne peut pas racheter à bon prix. Il se retrouve avec un inventaire perdant.

L'adverse selection est le principal enemy du market maker en crypto. Les traders informés avec des capitaux importants peuvent identifier les niveaux où les stops sontоложés et provoquer des mouvements directionnels qui cassent les positions du market maker.

Le risk de "being picked off" par des traders qui n'exécutent que le côté favorable de l'ordre est constant. Les market makers professionnels ont des modèles pour éviter ces situations.

## Liens et implications

Le [[market making]] est le contexte général de ces stratégies. Le [[grid trading]] est une forme simplifiée de market making où les ordres sont placés à intervalles réguliers.

Les [[frais maker vs taker]] sont cruciaux pour le market making car le profit dépend de la différence entre le spread et les frais. Un market maker qui reçoit des frais de maker (rebate) a un avantage significatif.

Le [[backtesting]] du market making est complexe car il faut simuler l'interaction avec les autres participants du marché. Le [[Sharpe ratio]] permet de mesurer la performance risk-adjusted.


## Points clés à retenir

- L'utilisation d'indicateurs techniques comme le RSI ou le MACD permet d'identifier les points d'entrée optimaux
- La gestion du drawdown est essentielle pour survivre aux périodes défavorables
- La diversification entre plusieurs stratégies peut réduire le risque global du portfolio

- Cette stratégie nécessite une gestion rigoureuse du risque et du money management
- Le backtesting sur des données historiques est essentiel pour valider les paramètres
- La psychologie trading joue un rôle crucial dans l'application de cette stratégie
## Sources

[^1]: Avellaneda, "High Frequency Trading", 2008
[^2]: NASDAQ, "Market Maker Rules", https://www.nasdaq.com (consulted 2026)
