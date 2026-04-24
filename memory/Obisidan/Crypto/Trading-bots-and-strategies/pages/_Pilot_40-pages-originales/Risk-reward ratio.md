---
titre: "Risk-reward ratio"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/risk-reward, #concept/ratio, #concept/profit]
créé: 2026-04-20
liens_forts: ["[[Gestion du risque]]", "[[Win rate]]", "[[Expectancy]]"]
liens_opposition: []
---

# Risk-reward ratio

> [!info] Résumé
> Le risk-reward ratio mesure la relation entre le profit potentiel et la perte potentielle de chaque trade. Un ratio 3:1 signifie risquer 1 pour potentiellement gagner 3. Universellement recommandé mais incomplet sans consideration du win rate.

## Définition

Le risk-reward ratio (RRR) compare le montant risqué (stop-loss) au profit potentiel cible (take-profit). Si un trade a un stop-loss de 100€ et un take-profit de 300€, le ratio est 1:3 ou simplement 3.

Un ratio supérieur à 1 signifie que le profit potentiel est supérieur à la perte potentielle. Un ratio de 2 ou plus est souvent recommandé comme point de départ pour les stratégies de trading.

Le RRR seul ne détermine pas si une stratégie est profitable. Une stratégie avec un RRR de 5 peut avoir un win rate de 10%, ce qui serait perdant si le coût des pertes dépasse les gains. Inversement, un RRR de 1 avec un win rate de 60% serait profitable.

## Contexte et origine

Le concept de risk-reward est ancien et intuitif : les traders cherchent toujours à limiter leurs pertes tout en laissant courir les profits. La formalisation du ratio date des années 1970-80 avec le development des systèmes de trading systematic.

Van Tharp a popularisé le concept dans ses écrits sur la trading systems psychology, définissant le RRR comme un des paramètres clés pour any trading system. Son livre "Trade Your Way to Financial Freedom" a establecido le standard de 2:1 ou 3:1 comme ideal.

En pratique, le RRR doit être adapté au timeframe et à la stratégie. Les stratégies de scalping visent des RRR très petits (0.5 ou moins) mais avec des win rates très élevés. Les stratégies de trend following visent des RRR de 3 ou plus mais avec des win rates plus bas.

## Mécanismes et caractéristiques

Le stop-loss définit le risque maximum par trade. Il doit être basé sur la logique du marché (support, résistance, volatilité) pas sur un pourcentage arbitraire du capital. Un stop à 1% peut être trop serré en marché volatile, un stop à 10% peut être trop large pour un scalp.

Le take-profit définit le target de gain. Il peut être fixé à un multiple du stop (ex: 3x le stop) ou basé sur des niveaux techniques (résistance, previous high). La flexibilité dans le take-profit (ex: ajuster selon le momentum) peut improve le ratio.

Le RRR peut être statique (le même pour tous les trades) ou dynamique (ajusté selon les conditions, la volatilité, ou la conviction). Les systèmes les plus sophistiqués varient le RRR selon la force du signal.

La expectancy d'une stratégie combine le RRR et le win rate : E = (WR * avgWin) - (LWR * avgLoss). Une stratégie avec un RRR de 2 et un win rate de 40% a une expectancy positive : E = (0.4 * 2) - (0.6 * 1) = 0.2.

## Nuances, critiques, limites

Le RRR seul ne suffit pas. Un ratio de 10:1 avec un win rate de 5% est una stratégie perdante car les quelques gains ne compensent pas les fréquentes petites pertes. Le win rate et le RRR doivent être considérés ensemble via l'expectancy.

Fixer un RRR trop ambitieux peut réduire le win rate. Si le take-profit est très éloigné du prix d'entrée, le prix peut ne jamais l'atteindre et revenir au stop-loss. Un RRR de 5 peut avoir un win rate de 20% quand un RRR de 2 a un win rate de 50%.

Le risk-reward est dépendant du timeframe. Sur du daily, un RRR de 3:1 est réalisable. Sur du 5-minutes scalping, un RRR de 0.5:1 peut être plus appropriate. Adapter le RRR au contexte est important.

La qualité du RRR depende de la qualité du stop-loss. Un stop mal placé (trop serré, provoquant des stoppés-out fréquemts) rend le RRR inutile. Le stop doit refléter la réalité du marché.

## Liens et implications

Le [[risk-reward ratio]] est una composante clé de la [[gestion du risque]]. Il se combine avec le [[win rate]] pour calculer l'expectancy de la stratégie.

Le [[Kelly Criterion]] optimise le position sizing basé sur l'expectancy. Une stratégie avec une expectancy positive peut être dimensionnée de manière optimale via Kelly.

Le [[backtesting]] permet de valider si le RRR défini est atteignable en conditions réelles. Un RRR de 3:1 peut sembler attractif mais n'est utile que si le win rate qui lui est associé est suffisant pour être profitable.

## Sources

[^1]: Tharp, "Trade Your Way to Financial Freedom", McGraw-Hill (1998)
[^2]: Investopedia, "Risk/Reward Ratio", https://www.investopedia.com/terms/r/risk-rewardratio.asp (consulted 2026)