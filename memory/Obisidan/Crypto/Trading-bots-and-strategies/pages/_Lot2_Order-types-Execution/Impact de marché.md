---
titre: "Impact de marché"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/impact-marché, #microstructure, #trading/avancé]
créé: 2026-04-21
liens_forts: ["[[Ordre au marché]]", "[[Order book dynamics]]", "[[Liquidité]]", "[[Slippage]]", "[[Ordre iceberg]]"]
liens_opposition: []
---

# Impact de marché

> [!info] Résumé
> L'impact de marché désigne la déviation du prix causée par l'exécution d'un ordre. Il dépend de la taille de l'ordre relativement à la liquidité et représente un coût de transaction implicite majeur pour les gros exécutants.

## Définition

L'impact de marché (market impact) est la déviation du prix d'un actif causée par l'exécution d'un ordre. Quand un ordre est exécuté, il consomme la liquidité disponible à différents niveaux du carnet d'ordres, déplaçant le prix dans la direction de l'ordre. Plus l'ordre est grand relativement à la [[Profondeur du carnet d'ordres]], plus l'impact est grand.

L'impact de marché est distinct du [[Slippage]] bien que liés. Le slippage est la différence entre le prix auxquels l'ordre était censé s'exécuter et le prix réel. L'impact de marché est la déviation du prix du marché causée par l'ordre. Pour un petit ordre, slippage et impact sont quasi synonymes. Pour un gros ordre, l'impact de marché est le slippage total incluant l'effet de l'ordre sur le marché.

L'impact de marché est l'une des principales sources de coût de transaction implicite, aussi importante voire plus importante que les frais explicites pour les gros exécutants.

## Contexte et origine

L'étude de l'impact de marché émerge dans les années 1980-1990 avec l'avènement du trading algorithmique institutionnel. Les desks de trading ont commencé à mesurer et modéliser l'impact de leurs grosses órdenes sur les marchés pour optimiser leur exécution.

Dans l'écosystème crypto, l'impact de marché est particulièrement visible sur les altcoins à faible liquidité oÙ des ordres de taille modeste peuvent déplacer le prix de plusieurs pour cent. Le [[Flash crash]] de mars 2020 sur Bitcoin a été amplifié par des cascades de liquidation qui ont eu un impact de marché énorme.

Les [[Trading bot]]s institutionnels utilisent des modèles d'impact de marché pour décider si et comment exécuter leurs ordres. Les stratégies qui ignorent l'impact de marché grossissent systématiquement leurs coûts.

## Mécanismes / caractéristiques / détails

**Causes de l'impact** : l'impact de marché provient du fait que chaque exécution modifie l'état du carnet. Un ordre d'achat absorbe les ordres de vente disponibles, réduisant l'offre à ces niveaux. Les autres participants (qui voient le carnet se modifier) adjustent leurs prix, ce qui déplace le prix.

**Modélisation de l'impact** : le modèle le plus simple est "impact proportionnel à la taille" : impact (%) = λ × (taille de l'ordre / volume quotidien moyen). Plus l'ordre représente une fraction importante du volume quotidien, plus l'impact est grand. Le coefficient λ est estimé empiriquement pour chaque marché.

**Impact temporaire vs permanent** : l'impact est souvent séparé en deux composantes. L'impact temporaire est la déviation du prix causée par le déséquilibre instantané du carnet, qui se résorbe après l'exécution. L'impact permanent est le changement durable du prix causée par l'information révélée par l'ordre (si le marché interprète un gros ordre comme un signal d'information).

**Techniques de réduction de l'impact** :

1. **Fractionnement (order splitting)** : au lieu d'un gros ordre, utiliser un [[TWAP (Time-Weighted Average Price)|TWAP]] ou [[Exécution VWAP|VWAP]] pour espacer les exécutions et réduire l'impact par unité de temps.

2. **[[Ordre iceberg]]** : en ne montrant qu'une fraction de l'ordre, l'iceberg reduce la visibilité de la taille totale, ce qui peut réduire l'impact en limitant la réaction des autres participants.

3. **Exécution dans les périodes calmes** : éviter les périodes de forte volatilité oÙ l'impact est amplifié.

4. **Algorithmes d'exécution optimaux** : les modèles d'Almgren-Chriss cherchent à minimiser l'impact de marché en trouvant le meilleur compromis entre impact et risque de marché.

**Impact et volatilité** : l'impact de marché augmente avec la volatilité du marché. En période de forte volatilité, les teneurs de marché ([[Market making]]) réduisent leur taille d'ordres, rendant le carnet moins profond et l'impact plus grand.

## Nuances, critiques, limites

**L'impact est auto-amplifiant** : quand un gros ordre est exécuté, il déplace le prix, ce qui peut déclencher d'autres ordres (stops, algorithmic responses) qui amplifient le mouvement. C'est le mécanisme derrière les [[Flash crash|flash crashes]] oÙ une succession d'ordres mécaniques cause des mouvements extrmes.

**Impact et information** : si les autres participants perçoivent un ordre comme informant (un ordre de grande taille peut signaler que quelqu'un sait quelque chose), l'impact peut être plus grand que prévu. C'est le "signal d'information" de l'ordre.

**Difficulté de mesure** : mesurer l'impact réel d'un ordre est difficile car il faut distinguer l'impact de l'ordre lui-même du mouvement du marché indépendant qui aurait eu lieu de toute façon. Les chercheurs utilisent des méthodes statistiques pour séparer ces deux effets.

**Impact cross-market** : sur les marchés fragmentés (multiples exchanges pour le même actif), un ordre sur un exchange peut affecter les prix sur les autres ([[Arbitrage]] s'en charge en théorie, mais l'arbitrage a un coût). L'impact sur un exchange peut créer des opportunités d'arbitrage temporairement profitables.

## Liens et implications

L'impact de marché est intimement lié au [[Slippage]]. Le slippage d'un ordre est en grande partie la conséquence de son impact de marché. Minimiser l'un revient à minimiser l'autre.

Les stratégies de [[Market making]] sont directement affectées par l'impact de marché. Quand elles exécutent un ordre important d'un client, l'impact de marché peut réduire la qualité de leur couverture et affecter leur rentabilité.

Le [[Backtesting]] qui ignore l'impact de marché surestime la performance des stratégies qui tradent de grosses positions. Intégrer un modèle d'impact est essentiel pour des résultats réalistes.

## Sources

[^1]: Almgren, Robert, and Neil Chriss. "Optimal execution of portfolio transactions." *Journal of Risk* 3 (2000): 5-39.
[^2]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^3]: Kyle, Albert. "Market Structure, Information, and Market Depth." *Journal of Financial Economics*, 1985.
