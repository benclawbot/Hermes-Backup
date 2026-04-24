---
titre: "Théorie de la microstructure"
type: théorie
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 3
tags: [#théorie/microstructure, #concept, #fondation]
créé: 2026-04-21
liens_forts: ["[[Écart bid-ask]]", "[[Sélection adverse]]", "[[Liquidité]]", "[[Glosten-Milgrom]]", "[[Kyle lambda]]", "[[Roll impact model]]", "[[Découverte du prix]]"]
liens_opposition: []
---

# Théorie de la microstructure

> [!info] Résumé
> La théorie de la microstructure des marchés étudie comment les règles d'échange, les comportements des participants, et l'information affectent la formation des prix. Elle fournnit le cadre analytique pour comprendre le spread, la liquidité, et la découverte du prix.

## Définition

La théorie de la microstructure est un domaine de la finance qui étudie comment les marchés financiers fonctionnent au niveau de la couche d'échange. Elle analyse les mécanismes d'appariement des ordres, le comportement des teneurs de marché, le rôle de l'information, et la formation des prix. Cette théorie explique pourquoi les marchés ont des spreads, comment la liquidité se forme, et comment les prix découvrent l'information.

Les trois acteurs principaux dans la microstructure sont : les fournisseurs de liquidité (market makers qui placent des ordres passifs), les preneurs de liquidité (ceux qui prennent la liquidité avec des ordres market), et les arbitres (qui éliminent les anomalies de prix entre marchés). Les interactions entre ces acteurs déterminent les propriétés du marché.

La microstructure étudie les propriétés statistiques du flux d'ordres et leur relation avec les mouvements de prix. Le prix d'équilibre est le prix où le nombre d'ordres d'achat égal le nombre d'ordres de vente. Ce prix incorpore l'information disponible et les anticipations des participants. Les variations du prix sont liées au déséquilibre du flux d'ordres.

## Contexte et origine

La microstructure émerge comme champ de recherche distinct dans les années 1970-1980 avec l'avènement du trading électronique et la disponibilité de données de transaction détaillées. Les travaux fondateurs de Demsetz (1968), Glosten et Milgrom (1985), et Kyle (1985) ont établi les bases théoriques du domaine.

Demsetz (1968) a étudié la structure des marchés d'actions et montré que les écarts bid-ask varient selon la liquidité et le volume. Glosten et Milgrom (1985) ont formalisé l'équilibre du marché avec des traders informés et non informés. Kyle (1985) a modélisé comment l'information se reflète dans les prix à travers le "lambda de Kyle".

Dans le contexte crypto, la microstructure est particulièrement pertinente car les marchés sont électroniques depuis leur origine, sans les couches institutionnelles des marchés financiers traditionnels. Les règles de marché sont explicites et transparentes, ce qui facilite l'analyse microstructurelle.

## Mécanismes / caractéristiques / détails

**Prix de transaction** : la microstructure définit le prix d'équilibre comme le prix où le nombre d'ordres d'achat égal le nombre d'ordres de vente. Ce prix incorpore l'information disponible et les anticipations des participants. Les variations du prix sont liées au déséquilibre du flux d'ordres.

**Coût de transaction total** : le coût de transaction pour un taker de liquidité inclut le spread (coût immédiat), l'impact de marché (coût causé par l'ordre sur le prix), et les frais d'échange (coût explicite). La microstructure quantifie chacun de ces composants.

**Information et prix** : le processus de découverte du prix est central en microstructure. Les modèles montrent comment l'information privée est révélée à travers le flux d'ordres et comment elle affecte les prix. Le prix à un instant donné reflète toute l'information disponible.

**Hétérogénéité des participants** : la microstructure reconnaît que les participants ont des objectifs différents. Les market makers veulent maximiser leur capture du spread avec un risque minimal. Les traders informés veulent maximiser la valeur de leur information. Les arbitres veulent exploiter les écarts de prix. Chaque comportement affecte les propriétés du marché.

**Résilience du marché** : après un choc, le marché revient à un équilibre. La vitesse de cette récupération est une mesure de la santé du marché. Un marché résilient absorbe les chocs rapidement ; un marché non résilient a des désalignements prolongés.

## Nuances, critiques, limites

La théorie de la microstructure suppose que les participants sont rationnels, ce qui n'est pas toujours le cas. Les biais comportementaux affectent la formation des prix de façons que les modèles standards ne capturent pas. La recherche en microstructure comportementale explore ces déviations.

Les modèles supposent la propreté du marché (pas de manipulation, pas de trading d'initié), mais les marchés réels ont des irrégularités. Le problème de la liquidité fantôme (ordres qui apparaissent mais sont annulés) viole les hypothèses des modèles standards.

La fragmentation des marchés crypto sur des centaines d'exchanges crée une complexité que les modèles single-market ne capturent pas. Le prix global du Bitcoin est une moyenne sur de nombreux marchés fragmentés, chacun avec sa propre microstructure.

## Liens et implications

La théorie de la microstructure est le socle théorique du [[Market making]] et des stratégies de liquidité. Comprendre la microstructure est essentiel pour toute stratégie de trading algorithmique.

Les modèles de microstructure comme [[Glosten-Milgrom]] et le [[Roll impact model]] sont utilisés dans les stratégies de trading pour estimer les coûts et l'impact. Le [[Kyle lambda]] est utilisé pour mesurer la profondeur du marché et la directionnalité du flux.

La microstructure explique les anomalies de marché comme le "[[Rebond BID ASK]]" et les effets de fin de mois. Elle fournit aussi le cadre pour comprendre les pratiques manipulatrices comme le "[[Quote stuffing]]" et le "[[Layering]]".

## Sources

[^1]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^2]: Hasbrouck, Joel. *Empirical Market Microstructure*. Oxford University Press, 2007.
[^3]: O'Hara, Maureen. *Market Microstructure Theory*. Blackwell Publishers, 1995.