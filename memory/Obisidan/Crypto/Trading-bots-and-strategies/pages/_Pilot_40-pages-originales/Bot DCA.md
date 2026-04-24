---
titre: "Bot DCA"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/dca, #concept/accumulation, #concept/investing]
créé: 2026-04-20
liens_forts: ["[[Grid trading]]", "[[Volatilité]]", "[[Investissement long terme]]"]
liens_opposition: []
---

# Bot DCA

> [!info] Résumé
> Le bot DCA (Dollar Cost Averaging) achète automatiquement un actif à intervalles réguliers indifféremment du prix, réduisant le risque de timing tout en accumulant une position progressive. Outil populaire pour les investisseurs de long terme mais vulnérable aux cascades en période de volatilité extrême.

## Définition

Le Dollar Cost Averaging (DCA) est une stratégie d'investissement qui consiste à acheter un montant fixe d'un actif à intervalles réguliers,peu importe le prix. L'objectif est de lisser le prix d'entrée moyen et de réduire l'impact de la volatilité sur l'investissement total.

Implémenté en bot, le DCA automatise ce processus : toutes les heures, tous les jours, ou toutes les semaines, le bot passe un ordre d'achat pour un montant prédéfini. Si le prix est bas, le même montant achète plus d'unités. Si le prix est haut, moins d'unités. Sur le long terme, le prix d'entrée moyen tend à être plus stable.

Le bot DCA diffère du grid trading en ce qu'il n'inclut pas de componente de vente. C'est une stratégieunidirectionnelle orientée accumulation. Certains bots DCA incluent un mécanisme de vente partielle pour sécuriser des profits (DCA avec take-profit).

## Contexte et origine

Le DCA est une stratégie popularisée dans l'investissement action traditionnelle depuis les années 1950-60. Les mutual funds et les plans d'épargne salariés utilisent le DCA pour permettre aux investisseurs de accumulate progressivement sans se soucier du timing.

En crypto, le DCA a été popularisé par les plateformes comme 3Commas, Bitsgap, et les bots Telegram. La simplicité (un paramètre : le montant et l'intervalle) a attract les novices. Des vidéos YouTube ont présenté le DCA comme une stratégie "set and forget" qui fonctionne sans surveillance.

L'hiver crypto 2022-2023 a testé le DCA sévèrement : des bots qui continuaient à acheter alors que le prix tombait de 80% ont causé des drawdowns importants pour les utilisateurs qui n'avaient pas configuré de limites de perte.

## Mécanismes et caractéristiques

L'intervalle d'achat est le paramètre principal : horaire, quotidien, hebdomadaire. Plus l'intervalle est court, plus le prix d'entrée moyen est lissé, mais plus les frais de transaction s'accumulent. L'intervalle quotidien est un bon compromis pour la plupart des stratégies.

Le montant par achat doit être calibré selon le capital total et la durée prévue. Un investisseur avec 10 000€ qui prévoit d'investir sur 12 mois pourrait acheter 27€ par jour. Le montant doit être suffisamment petit pour ne pas épuiser le capital avant la fin de la période.

Le stop-loss DCA est uneafety importante : si le prix tombe sous un seuil (ex: -50% du prix initial), le bot arrête les achats pour éviter d'accumuler dans un marché baissier prolongé. Sansstop-loss, le bot peut accumuler une position large à un prix de plus en plus bas avec no guarantees de remontée.

Le take-profit partiel peut être activé pour vendre une partie de la position quand le prix atteint un certain seuil de gain. Cela permet de sécuriser des profits sans vendre toute la position.

## Nuances, critiques, limites

Le [[drawdown]] peut être très important si le marché entre dans un bear market prolongé. Un bot DCA qui continue d'acheter pendant une baisse de 80% peut accumuler une position considérable qui ne remonte pas avant des années.

La volatilité extremo test les limites du DCA. Pendant le crash covid mars 2020 ou l'effondrement FTX novembre 2022, des bots DCA ont continué à acheter au milieu de baisses vertigineuses. Certains y ont vu une opportunité, d'autres ont subi des pertes importantes.

Le DCA n'est pas une stratégie de trading mais d'investissement. Il fonctionne mieux sur des actifs avec une tendencia haussière long terme. Sur un actif qui ne remonte jamais (shitcoin sans utility), le DCA accumule une position qui ne vaut rien.

La discipline émotionnelle du [[bot DCA]] est paradoxale : le concept original est d'investir sans émotion, mais voir sa position chuter de 50% demande une discipline extreme pour ne pas arrêter le bot. Beaucoup de traders arrêtent exactement au mauvais moment (au fond).

## Liens et implications

Le [[bot DCA]] est lié au [[grid trading]] dans sa logique d'accumulation ordonnée. Le [[buy the dip]] est une stratégie apparentée mais plus agressive (acheter massivement quand le prix chute).

La [[volatilité]] est à la fois l'ennemi et l'allié du DCA : elle crée des opportunités d'achat à bas prix mais aussi des drawdowns stressants. Le [[backtesting]] d'une stratégie DCA sur plusieurs années de données est recommendé avant deployment.

L'[[investissement long terme]] est le contexte naturel du DCA. Les bots qui promettent des rendements courts termes via DCA sont généralement des arnaqueurs.

## Sources

[^1]: Vanguard, "Dollar Cost Averaging", https://investor.vanguard.com/investor-resources-education/asset-allocation/dollar-cost-averaging (consulted 2026)
[^2]: Investopedia, "Recurring Buys", https://www.investopedia.com/terms/r/recurringbuys.asp (consulted 2026)