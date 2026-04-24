---
titre: "Risk of ruin"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/risque, #concept/ruine, #concept/ drawdown]
créé: 2026-04-21
liens_forts: ["[[Drawdown]]", "[[Position sizing]]", "[[Kelly criterion practical limits]]", "[[Gestion du risque]]", "[[Expected shortfall]]"]
liens_opposition: []
---

# Risk of ruin

> [!info] Résumé
> Le risk of ruin mesure la probabilité qu'une stratégie perde une fraction donnée de son capital (généralement 100% ou un seuil critique). Cette métrique estime la viabilité à long terme d'une stratégie et est fondamentale pour le dimensionnement des positions.

## Définition

Le risk of ruin est la probabilité que le capital d'un trader ou d'un bot descende en dessous d'un seuil prédéfini (souvent 0%, parfois 50% ou 80% selon les conventions). C'est une mesure de survie qui permet de répondre à la question : quelle est la probabilité que cette stratégie me fasse perdre tout mon argent ?

Le calcul exact dépend du profile de rendement de la stratégie. Pour une stratégie avec un win rate constant et un Risk-reward ratio constant, la formule de risc of ruin peut être dérivée. Pour des stratégies plus complexes, des simulations Monte Carlo sont utilisées.

Une stratégie avec un risk of ruin de 5% sur 1000 trades signifie qu'il y a 5% de chance que le trader perde tout son capital (ou atteigne le seuil critique) avant la fin de ces 1000 trades. Un risk of ruin de 0% signifie qu'il est mathématiquement impossible de perdre le capital avec cette stratégie.

Le risk of ruin est particulièrement critique pour les[[Trading bot]]s car ces derniers opèrent souvent sans supervision humaine directe. Un bot avec un risk of ruin de 50% finira presque certainement par subir un blow-up si déployé assez longtemps.

## Contexte et origine

Le concept de risk of ruin vient de la théorie des probabilités et de la théorie du jeu. Dans le contexte financier, il a été formalisé par les travaux de Ralph Vince sur le position sizing et le Kelly Criterion.

En trading algorithmique, le risk of ruin est devenu une métrique standard après les blow-ups célèbre de fonds comme Long-Term Capital Management (1998) et plus récemment dans le contexte crypto avec des plateformes comme FTX (2022).

Les[[Risk limits and circuit breakers]] sont souvent définis à partir du risk of ruin. Si une stratégie a un risk of ruin de 20% sur 1 an avec un drawdown max de 50%, on pourrait définir un circuit breaker à 40% de drawdown pour arrêter avant la ruine.

## Mécanismes et caractéristiques

Le risk of ruin se calcule différemment selon les hypothèses. Avec un win rate constant W et un rapport gain/perte constant R, et en risquant f% du capital par trade, la probabilité de ruine après N trades est approximable.

Pour une stratégie avec W = 55%, R = 1.5, et f = 2% par trade, le risk of ruin après 1000 trades est très faible (proche de 0%). Pour la même stratégie mais avec f = 10%, le risk of ruin augmente significativement.

Le concept de "risk of ruin par année" est important. Une stratégie pourrait avoir un risk of ruin de 2% par an (acceptable) mais un risk of ruin de 30% sur 20 ans (inacceptable pour un investisseur avec un horizon long).

Les simulations Monte Carlo permettent de calculer le risk of ruin pour des stratégies non gaussiennes. En générant des milliers de scénarios de rendements possibles (en respectant la distribution historique), on peut estimer la probabilité de ruine empiriquement.

## Nuances, critiques, limites

Le risk of ruin est sensible aux hypothèses. Si les rendements ne sont pas stationnaires (c'est-à-dire si la stratégie perd son edge avec le temps), le risk of ruin calculé sous-estime le risque réel. Beaucoup de stratégies crypto ont des edge qui s'érodent rapidement.

Le calcul assume une distribution particulière des rendements. En pratique, les crypto-actifs ont des distributions avec des queues grasses, ce qui signifie que le vrai risk of ruin peut être plus élevé que les modèles gaussiens ne le prédisent.

Le risk of ruin ne captures pas le risque de drawdown significatif qui, sans être une ruine complète, peut être catastrophique pour l'investisseur. Un risk of ruin de 0% mais un risque de drawdown de 50% est toujours très problématique.

La composante psychologique est cruciale. Un risk of ruin de 5% est mathématiquement acceptable, mais pour un investisseur qui ne peut pas dormir la nuit à cause de la volatilité, ce n'est pas une solution viable.

## Liens et implications

Le [[Risk of ruin]] est le critère ultime de la[[Gestion du risque]]. Atteindre un risk of ruin de 0% (ou proche) est souvent l'objectif primaire du dimensionnement des positions.

Le[[Kelly criterion practical limits]] fournit un cadre théorique pour calculer la taille de position optimale qui minimise le risk of ruin tout en maximisant la croissance. Le Half-Kelly est souvent recommandé pour réduire drastiquement le risk of ruin.

Le[[Expected shortfall]] (CVaR) mesure la perte moyenne dans les pires scénarios, ce qui complète le risk of ruin. Un risk of ruin de 5% avec un expected shortfall de 80% est plus inquiétant qu'un risk of ruin de 5% avec un expected shortfall de 30%.

## Sources

[^1]: Vince, "The Mathematics of Money Management", Wiley (1992)
[^2]: Tharp, "Trade Your Way to Financial Freedom", McGraw-Hill (1999)
