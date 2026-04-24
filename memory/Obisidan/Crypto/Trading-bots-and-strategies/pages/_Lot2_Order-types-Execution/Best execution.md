---
titre: "Best execution"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: pilier
source_knowledge: internal
sources_count: 3
tags: [#concept/frais, #microstructure, #trading/bases]
créé: 2026-04-21
liens_forts: ["[[Ordre au marché]]", "[[Ordre à cours limité]]", "[[Frais maker vs taker]]", "[[Slippage]]", "[[Liquidité]]"]
liens_opposition: []
---

# Best execution

> [!info] Résumé
> La best execution est l'obligation légale et morale d'obtenir le meilleur prix disponible pour le client lors de l'exécution d'un ordre, en prenant en compte les coûts totaux (frais, slippage) et la vitesse d'exécution.

## Définition

La best execution (meilleure exécution) est un concept juridique et opérationnel qui désigne le devoir d'un intermédiaire (courtier, plateforme de trading) d'exécuter les ordres de ses clients au meilleur prix disponible, en tenant compte du coût total de la transaction — incluant les frais de plateforme, les [[Slippage|slippage]], et la liquidité disponible.

La best execution n'est pas juste "obtenir le prix le plus bas pour un achat" : c'est une évaluation holistique qui inclut la vitesse (certains ordres urgents doivent être exécutés immédiatement même à un prix légèrement moins bon), la taille de l'ordre (un gros ordre peut nécessiter une exécution progressive), et la liquidité du marché.

Sur le plan réglementaire, la best execution est une obligation légale dans la plupart des juridictions. En Europe, MiFID II impose aux entreprises d'investissement l'obligation de prendre toutes les mesures nécessaires pour obtenir le meilleur résultat possible pour leurs clients. Aux États-Unis, la SEC a des règles similaires (Regulation Best Interest).

## Contexte et origine

La best execution émerge comme principe juridique dans les années 1960-1970 aux États-Unis, quand les premiers recours ont été portés contre des courtiers qui passaient les ordres de leurs clients à des teneurs de marché moyennant une rémunération sans garantir le meilleur prix. La SEC a formalisé ces obligations dans les années 1990-2000.

Dans l'écosystème crypto, la best execution est un sujet de débat croissant. Les plateformes de trading qui proposent du PFOF ([[Paiement pour le flux d'ordres]]) sont accusées de ne pas respecter leurs obligations de best execution. Les [[Trading bot|algorithmes de trading]] institutionnels incluent des modules d'analyse de best execution.

Les régulateurs crypto-friendly : la SEC et l'ESMA ont commencé à appliquer les règles de best execution aux plateformes crypto, bien que le cadre réglementaire soit encore en évolution.

## Mécanismes / caractéristiques / détails

**Critères de la best execution** : les 4 critères principaux sont :
1. **Prix** : obtenir le meilleur prix disponible (en considérant tous les marchés où l'actif est échangé)
2. **Coûts** : inclure les frais, commissions, et le coût de l'opération
3. **Vitesse** : prendre en compte l'urgence de l'exécution
4. **Probabilité d'exécution et de règlement** : un ordre exécuté au meilleur prix mais non réglé n'est pas une bonne exécution

**Multi-marché et best execution** : le meilleur prix pour un actif peut être sur un exchange différent. Un courtier a l'obligation de vérifier les prix sur tous les marchés où l'actif est disponible. Pour les cryptos, cela inclut les différents CLOB ([[Central limit order book (CLOB)]]) centralisés et les DEX.

**Analyse post-trade** : la best execution est évaluée ex post à travers des rapports de qualité d'exécution (execution quality reports) qui comparent les prix d'exécution aux prix de référence (VWAP, arrival price, etc.). Ces rapports permettent aux régulateurs de vérifier le respect des obligations.

**Technologie et best execution** : les algorithmes de best execution utilisent des données de marché en temps réel pour router les ordres vers le marché qui offre le meilleur prix net (prix - coûts). Les "smart order routers" (SOR) comparent la liquidité sur plusieurs exchanges et trouvent la meilleure destination pour chaque ordre.

**Conflit avec PFOF** : le [[Paiement pour le flux d'ordres]] crée un conflit d'intérêts potentiel avec la best execution. Si un courtier reçoit un paiement pour envoyer les ordres à un market maker qui n'offre pas le meilleur prix, il viole potentiellement son obligation de best execution.

## Nuances, critiques, limites

**Best execution vs tarif zéro** : les plateformes qui offrent des commissions zéro s'appuient souvent sur le PFOF pour leurs revenus. Cela peut compromettre la best execution car le choix du market maker est basé sur le paiement de PFOF plutôt que sur le meilleur prix pour le client.

**Données de référence** : la best execution nécessite des données de référence fiables (prix VWAP, mid, etc.). Sur les marchés crypto, ces références peuvent être fragmentées entre les exchanges, rendant difficile la détermination du "meilleur prix" entre plateformes.

**Latence et best execution** : pour les ordres de grande taille ou les marchés volatiles, le "meilleur prix" au moment de la décision peut ne plus être le meilleur au moment de l'exécution. Gérer ce compromis est au cœur de la best execution algorithmique.

**Obligation de moyen vs de résultat** : dans la plupart des juridictions, la best execution est une obligation de moyen ("take all reasonable measures") et non de résultat. Un courtier qui a un processus de best execution robuste mais qui occasionnellement n'obtient pas le meilleur prix n'est pas nécessairement en violation si le processus était adéquat.

## Liens et implications

La best execution est le cadre qui détermine comment les [[Frais maker vs taker|frais]] et les coûts de transaction doivent être évalués. Une exécution avec des frais bas mais un gros slippage n'est pas une best execution.

Les stratégies de [[Trading algorithmique]] qui utilisent des smart order routers (SOR) sont des outils de best execution automatique. Ils comparent la liquidité sur plusieurs plateformes ([[Arbitrage]]) et routent l'ordre vers celle qui offre le meilleur prix net.

Le [[Backtesting]] doit intégrer une évaluation de la best execution pour éviter de surrévaluer les performances. Un backtest qui suppose que tous les ordres sont exécutés à un prix "optimal" sans modéliser le slippage et les coûts n'est pas une véritable évaluation de best execution.

## Sources

[^1]: SEC Regulation Best Interest (Reg BI). https://www.sec.gov/
[^2]: ESMA Guidelines on MiFID II Best Execution Requirements.
[^3]: IOSCO Report on Best Execution.