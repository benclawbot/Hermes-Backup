---
titre: "Detrended Price Oscillator"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: deep-cut
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/oscillateur, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[RSI Divergence strategy]]", "[[Stratégie de momentum]]", "[[Backtesting]]"]
liens_opposition: []
---

# Detrended Price Oscillator

> [!info] Résumé
> Le Detrended Price Oscillator (DPO) est un oscillateur qui élimine la tendance de fond du prix pour isoler les cycles courts. Il permet d'identifier les points de retournement périodiques et les durations de cycle.

## Définition

Le Detrended Price Oscillator (DPO) est un indicateur qui retire la tendance du prix en décalant une moyenne mobile. Contrairement au MACD ou au RSI, le DPO n'est pas un oscillateur borné. Il oscille autour de zéro quand le prix est aligné avec sa moyenne mobile.

Le calcul : DPO = Prix - SMA(N/2 + 1 périodes ago). Le décalage de la SMA permet d'aligner le DPO avec les cycles passés plutôt que de les projeter dans le futur.

Le DPO n'inclut pas les données les plus récentes dans son calcul (à cause du décalage). Il est donc moins réactif que d'autres indicateurs et ne doit pas être utilisé pour générer des signaux de trading en temps réel.

## Contexte et origine

Le Detrended Price Oscillator a été popularisé par le trader et auteur Constance Brown dans les années 1990. L'objectif était de créer un indicateur qui élimine l'effet de la tendance pour se concentrer sur les mouvements cycliques.

L'idée de base : les prix ont des cycles de différentes périodes. En éliminant la tendance, on peut voir ces cycles plus clairement. Le DPO révèle les cycles que le prix masque avec sa tendance directionnelle.

En trading algorithmique crypto, le DPO est moins courant que d'autres oscillateurs. Il est utilisé principalement pour l'analyse de cycle et pour identifier des durations récurrentes entre points de retournement.

## Mécanismes et caractéristiques

Le DPO oscille autour de zéro. Quand il est positif, le prix est au-dessus de sa moyenne mobile décalée (tendance perçue comme haussière après élimination). Quand il est négatif, le prix est en dessous.

Les pics et creux du DPO correspondent aux points de retournement du prix. En analysant l'intervalle entre ces pics/creux, on peut estimer la durée du cycle. Par exemple, si les pics du DPO apparaissent toutes les 20 barres, le cycle est d'environ 20 périodes.

Le paramètrage N contrôle la période de la SMA utilisée. Un N de 20 utilise une SMA 20 et un décalage de 11 périodes. Un N plus grand capture des cycles plus longs, un N plus petit capture des cycles courts.

Le DPO ne prédit pas les mouvements futurs. Il analyse les cycles passés. Il ne doit pas être utilisé seul pour prendre des décisions de trading mais plutôt comme outil d'analyse complémentaire.

## Nuances, critiques, limites

Le DPO exclut les données récentes (à cause du décalage). Il ne représente pas l'état actuel du marché mais plutôt l'état d'il y a N/2+1 périodes. Cela le rend inutilisable pour le timing d'entrée.

Le DPO est mieux utilisé pour l'analyse historique des cycles que pour le trading en temps réel. Il permet de comprendre la structure du marché mais pas de générer des signaux exploitables.

Les cycles identifiés par le DPO peuvent ne pas se répéter. Un cycle passé de 20 périodes ne signifie pas que le prochain cycle sera aussi de 20 périodes. Les cycles sont instables et changent avec le temps.

Le [[backtesting]] du DPO seul comme système de trading montre des résultats médiocres. Il doit être combiné avec d'autres outils pour générer des signaux pratiques.

## Liens et implications

Le RSI et le Momentum sont des indicateurs plus adaptés au trading en temps réel que le DPO. Le DPO est un outil d'analyse complémentaire pour comprendre les cycles sans la tendance.

La tendance est ce que le DPO élimine. En eliminant la tendance, le DPO permet de voir les cycles cachés. Les support et résistance peuvent aussi être analysés en termes de cycles.

L'[[analyse technique pour bots]] utilise rarement le DPO comme signal principal mais il peut servir à identifier des périodes historiques favorables pour certains patterns.

## Sources