---
titre: "Stochastic RSI"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/oscillateur, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[RSI Divergence strategy]]", "[[Stochastic Oscillator]]", "[[Backtesting]]", "[[Trading bot]]"]
liens_opposition: []
---

# Stochastic RSI

> [!info] Résumé
> Le Stochastic RSI est un oscillateur qui applique le calcul du Stochastic Oscillator au RSI lui-même. Il identifie les conditions de surachat et de survente du RSI avec une sensibilité plus grande que le RSI seul.

## Définition

Le Stochastic RSI (StochRSI) applique la formule du Stochastic Oscillator aux valeurs du RSI au lieu du prix. Le RSI est un oscillateur borné entre 0 et 100. Le StochRSI applique la même logique : où se situe le RSI actuel par rapport à son range sur N périodes.

La formule : StochRSI = (RSI actuel - RSI le plus bas sur N périodes) / (RSI le plus haut sur N périodes - RSI le plus bas sur N périodes) × 100.

Les valeurs du StochRSI oscillent entre 0 et 100, comme le RSI. Mais la dynamique est différente : le StochRSI atteint les extremités (0 ou 100) plus facilement que le RSI, ce qui le rend plus réactif mais aussi plus bruité.

## Contexte et origine

Le Stochastic RSI a été popularisé dans les années 1990 quand les plateformes de trading ont commencé à permettre le calcul d'indicateurs sur d'autres indicateurs. L'idée : amplifier les signaux du RSI pour avoir des points d'entrée plus précis.

Le StochRSI n'a pas de créateur unique identifié. C'est une application logique de la formule du Stochastic sur le RSI, rendu possible par l'informatique. Tushar Chande a contribué à formaliser l'utilisation d'indicateurs sur d'autres indicateurs.

En crypto, le StochRSI est populaire car les mouvements de prix sont plus volatils. Le RSI standard peut rester dans la zone neutre (40-60) pendant longtemps. Le StochRSI génère plus de signaux dans ces périodes.

## Mécanismes et caractéristiques

Le StochRSI réagit plus vite que le RSI aux changements de prix. Il atteint les zones extrèmes (0 et 100) plus facilement. Cela peut être utile pour identifier des points de retournement plus tôt.

Les lectures du StochRSI suivent les mêmes règles que le Stochastic standard : au-dessus de 80 = surachat, en dessous de 20 = survente. Mais ces niveaux sont atteints plus fréquemment.

Les croisements %K/%D (comme pour le Stochastic standard) peuvent générer des signaux. Un croisement %K au-dessus de %D en zone survendue (<20) est un signal d'achat. Un croisement en zone surachetée (>80) est un signal de vente.

Le StochRSI fonctionne mieux en marché range. En marché tendance, il peut rester en zone extrème longtemps, causant des faux signaux si le trader suppose qu'un retour à la moyenne est imminent.

## Nuances, critiques, limites

Le StochRSI est plus bruité que le RSI car il amplifie les mouvements du RSI. Un RSI qui oscille entre 45 et 55 peut produire un StochRSI qui oscille entre 10 et 90. Ce bruit peut causer des faux signaux.

En marché trending, le StochRSI peut rester en territoire extrême pendant longtemps. Si le prix a une forte tendance haussière, le RSI peut rester au-dessus de 60 et le StochRSI au-dessus de 80 pendant plusieurs semaines. Trader le StochRSI comme si un retournement était imminent serait une erreur.

Le [[backtesting]] du StochRSI seul montre des résultats très variables. Il fonctionne mieux comme indicateur complémentaire que comme signal principal. Une stratégie qui combine StochRSI (timing) avec une moyenne mobile (direction) peut être plus robuste.

Le StochRSI peut être sujet à des lectures extrême fréquentes. Les niveaux de surachat/survente (80/20) doivent peut-être être ajustés (90/10) pour réduire le bruit sur certains actifs.

## Liens et implications

Le RSI est la base du StochRSI.

Le [[Stochastic Oscillator]] et le StochRSI utilisent la même formule mais sur des données différentes. Le premier utilise le prix, le second utilise le RSI. Les deux peuvent être utilisés en même temps pour confirmer les signaux.

Le [[risk-reward ratio]] doit être considéré quand on trade le StochRSI. Les signaux en zone extrème peuvent avoir un meilleur RRR si le prix retourne effectivement à la moyenne, mais le timing est difficile à prédire.

## Sources