---
titre: "Moving average crossover"
type: théorie
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#théorie/ma, #théorie/crossover, #concept/strategy]
créé: 2026-04-20
liens_forts: ["[[Momentum]]", "[[Analyse technique pour bots]]", "[[Trend following]]"]
liens_opposition: ["[[Whipsaw]]"]
---

# Moving average crossover

> [!info] Résumé
> Le croisement de moyennes mobiles (MA crossover) génère un signal d'achat quand la moyenne courte croise au-dessus de la longue, et un signal de vente dans le cas inverse. Simple à implémenter mais produit beaucoup de faux signaux en marché agité.

## Définition

Le moving average crossover est une stratégie qui utilise deux moyennes mobiles (une courte, une longue) et génère un signal quand la courte croise la longue. Un croisement haussier (courte passe au-dessus de la longue) est un signal d'achat. Un croisement baissier (courte passe en dessous) est un signal de vente.

Les combinaisons populaires incluent : SMA 9 / SMA 21 (scalping), EMA 12 / EMA 26 (standard), EMA 50 / EMA 200 (trend long terme). Plus les périodes sont longues, plus le signal est en retard mais plus il est fiable.

Le signal n'indique pas où entrer spécifiquement, juste la direction de la tendance. Les traders utilisent souvent le prix du croisement comme point d'entrée approximatif et un stop-loss en dessous du dernier creux.

## Contexte et origine

Le croisement de moyennes mobiles est l'une des premières stratégies de trading algorithmique. Elle date des années 1960-70 quand les computers ont permis de calculer et tester des moyennes mobiles sur de grands ensembles de données.

La simplicité du concept a fait qu'il est resté populaire pendant des décennies. Il est souvent la première stratégie appris par les traders, et reste une composante de nombreux systèmes plus complexes.

En crypto, le MA crossover est particulièrement populaire dû à la simplicité d'implémentation dans des bots. Beaucoup de bots Telegram et de stratégies automatisées sont basés sur des croisements de EMA.

## Mécanismes et caractéristiques

Le choix des périodes détermine le comportement. Une MA courte (ex: 9) réagit rapidement aux changements de prix mais produit plus de faux signaux. Une MA longue (ex: 200) lag beaucoup mais définit clairement la tendance long terme.

Le type de moyenne (SMA vs EMA) affecte aussi la réactivité. L'EMA donne plus de poids aux prix récents, donc elle réagit plus vite. La SMA est plus lisse mais plus lente.

Le delay inhérent au système signifie que quand le croisement se produit, le mouvement a déjà commencé. Plus le timeframe est long, plus ce delay est important. Sur du daily, le signal peut arriver 5-10 jours après le début du mouvement.

Les filtres reduce le bruit : exiger que le prix soit au-dessus des deux MA pour un achat, ou que le volume confirme le croisement. Ces filtres reduce le nombre de trades mais peuvent improve le taux de réussite.

## Nuances, critiques, limites

Le [[whipsaw]] est le principal problème : en marché latéral (range), les croisements successifs générent des signaux faux qui s'annulent. Un filtre de tendance (ex: ADX > un seuil) peut réduire les faux signaux.

Le lag fait que les points d'entrée sont toujours en retard sur le mouvement réel. En trend fort, le prix peut continuer à monter après le croisement mais le signal arrive tard. Le [[stop-loss]] doit être placé correctement pour protéger contre les retournements.

Le nombre de paramètres (périodes des deux MA) peut être optimisé sur l'historique (surapprentissage). Une configuration qui a bien performé dans le passé peut ne pas performer aussi bien dans le futur.

Les coûts de transaction shred les profits si la stratégie génère beaucoup de trades. Chaque croisement (achat puis vente) génère deux rounds de frais. Une stratégie avec un win rate de 40% et un RRR de 2 peut être barely profitable après frais.

## Liens et implications

Le [[moving average crossover]] est une forme de [[momentum]] strategy. Il est souvent utilisé avec d'autres indicateurs comme le RSI pour confirmer les signaux.

Le [[trend following]] est le contexte naturel du MA crossover. En marché range, le système génère des pertes. L'[[analyse technique pour bots]] intègre souvent le MA crossover comme composante.

Le [[multi timeframe analysis]] peut utiliser le MA crossover sur plusieurs timeframes. Par exemple, confirmer un achat sur le daily avec un croisement haussier sur le 4h.

## Sources

[^1]: Murphy, "Technical Analysis of the Financial Markets", Wiley (1999)
[^2]: Investopedia, "Moving Average (MA) Crossover", https://www.investopedia.com/terms/m/movingaverage.asp (consulted 2026)