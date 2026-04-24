---
titre: "Scalping"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/scalping, #concept/short-term, #concept/high-frequency]
créé: 2026-04-21
liens_forts: ["[[Haute fréquence]]", "[[Market making]]", "[[Ordre au marché]]"]
liens_opposition: ["[[Position trading]]"]
---

# Scalping

> [!info] Résumé
> Le scalping est une stratégie de trading à très court terme qui vise à capturer de petits mouvements de prix avec des positions de grande taille et un volume élevé. La rentabilité repose sur le volume des trades plutôt que sur l'amplitude des mouvements.

## Définition

Le scalping est une approche de trading caractérisée par des durées de positions très courtes, allant de quelques secondes à quelques minutes. L'objectif est de capturer de petits profits fréquents dont la somme constitue le gain global. Chaque trade peut ne générer que quelques points de base, mais le volume élevé compense cette faible amplitude.

La logique du scalping repose sur l'hypothèse que les petits mouvements sont plus prévisibles et plus fréquents que les grands mouvements. Les marchés passent plus de temps en range que en tendance, et le scalping exploite cette inertie latérale.

Les scalpers utilisent des graphiques en chandeliers de 1 à 5 minutes, des indicateurs comme le [[RSI Divergence strategy|RSI]] ou le [[Stochastic Oscillator]] pour identifier les points d'entrée, et passent un grand nombre d'ordres avec une taille importante. La vitesse d'exécution est critique.

## Contexte et origine

Le scalping a émergé dans les années 1980-1990 sur les marchés actions américains, quand les teneurs de marché (market makers) ont commencé à exploiter les petits écarts entre le prix acheteur et vendeur. Les plateformes de trading électronique ont démocratisé cette pratique.

En crypto, le scalping s'est développé avec l'augmentation de la liquidité des exchanges. La nature 24/7 du marché crypto est particulièrement propice au scalping, car il n'y a pas de clôture de marché qui interrupt les positions overnight.

Le [[high-frequency trading]] est une forme extreme de scalping automatisé, avec des algorithmes qui détennent des positions pendant quelques millisecondes seulement. En crypto, cette pratique est moins répandue en raison de la fragmentation des exchanges.

## Mécanismes et caractéristiques

Le scalper vise un profit de 0,1% à 0,5% par trade. Avec un effet de levier modéré (2x à 5x), ces petits profits sont amplifiés. Mais l'effet de levier increase aussi les pertes potentielles, et un seul trade défavorable peut effacer plusieurs jours de gains.

Les coûts de transaction sont un facteur critique. Chaque trade génère des frais de transaction (voir [[Frais maker vs taker]]), et au volume élevé caractéristique du scalping, ces coûts peuvent représenter une part importante des profits. Un scalper doit être conscient de l'impact des frais sur sa rentabilité.

Le [[slippage]] est un autre risque majeur. En période de volatilité, l'ordre peux être exécuté à un prix différent de celui attendu, particulièrement si le scalper utilise des [[ordre au marché|ordres au marché]] plutôt que des [[ordre à cours limité|ordres limités]].

La gestion de position est simplifiée mais strict. Chaque position est tiny par rapport au capital total, et le drawdown cumulé est limité. Les scalpers professionnels définissent un drawdown maximal journalier au-delà duquel ils cessent de trader.

## Nuances, critiques, limites

Le scalping exige une concentration intense et des temps de réaction rapides. C'est une stratégie stressante qui peut mener à la fatigue décisionnelle. Les erreurs de jugement sont amplifiées par le volume des trades.

La rentabilità à long terme du scalping est remise en question par de nombreux analysts. Après prise en compte des coûts de transaction (frais, slippage) et de l'effet de levier, le net return peut être négatif pour la majority des scalpers.

Le risque psychologique est significant. Enchaîner des trades gagnants et perdants rapidement peut altérer le jugement. La tentation d'augmentation de la taille de position après une perte (martingale) est un danger réel.

## Liens et implications

Le [[scalping]] est une forme extrême de [[trading algorithmique]] quand il est automatisé. Le [[high-frequency trading]] représente la version la plus évoluée du scalping automatisé.

Le [[market making]] implique des stratégies de scalping inverse : le market maker gagne le spread en placant des ordres des deux côtés du livre, ce qui est structurellement similaire à faire du scalping sur les deux directions.

Le [[Risk-reward ratio]] du scalping est défavorable en apparence (petit profit vs perte potentiellement plus grande), mais le taux de victoire élevé peut compenser. La [[gestion du risque]] au niveau du drawdown est essential.


## Points clés à retenir

- L'utilisation d'indicateurs techniques comme le RSI ou le MACD permet d'identifier les points d'entrée optimaux
- La gestion du drawdown est essentielle pour survivre aux périodes défavorables
- La diversification entre plusieurs stratégies peut réduire le risque global du portfolio

- Cette stratégie nécessite une gestion rigoureuse du risque et du money management
- Le backtesting sur des données historiques est essentiel pour valider les paramètres
- La psychologie trading joue un rôle crucial dans l'application de cette stratégie
## Sources

[^1]: Thorp, "The Mathematics of Gambling", 1984
[^2]: Investopedia, "Scalping", https://www.investopedia.com/terms/s/scalping.asp (consulted 2026)
