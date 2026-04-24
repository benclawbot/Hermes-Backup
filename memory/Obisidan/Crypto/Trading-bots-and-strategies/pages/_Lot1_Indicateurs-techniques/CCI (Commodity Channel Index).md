---
titre: "CCI (Commodity Channel Index)"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/oscillateur, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[Analyse technique pour bots]]", "[[RSI Divergence strategy]]", "[[Stochastic Oscillator]]", "[[Backtesting]]", "[[Momentum]]", "[[RSI]]", "[[Volatility scaling]]"]
liens_opposition: []
---

# CCI (Commodity Channel Index)

> [!info] Résumé
> Le CCI (Commodity Channel Index) est un oscillateur qui mesure l'écart du prix par rapport à sa moyenne statistique. Il permet d'identifier les conditions de surachat et de survente, ainsi que les divergences entre le prix et le momentum.

## Définition

Le CCI (Commodity Channel Index) a été créé par Donald Lambert en 1980. Il mesure à combien d'écarts-types le prix actuel se situe par rapport à sa moyenne mobile sur une période donnée. La formule requiert un "prix typique" (Typical Price) qui est la moyenne du plus haut, du plus bas, et de la clôture.

La formule du CCI : (Prix typique - SMA 20 du Prix typique) / (0.015 × Ecart-type du Prix typique)

Le facteur 0.015 normalise l'indicateur, faisant en sorte qu'environ 70-80% des lectures du CCI se situent entre -100 et +100 en marché stable.

## Contexte et origine

Donald Lambert a développé le CCI et l'a présenté dans un article du magazine "Commodities" (1980). Initiallement conçu pour les marchés des matières premières, il a été rapidement adopté sur tous les marchés financiers, y compris les crypto-actifs.

Lambert avait une hypothèse : les matières premières (et les actifs en général) suivent des cycles de prix avec des mouvements périodiques autour de leur valeur moyenne. Le CCI permettait d'identifier quand un actif était significativement dévié de sa moyenne, suggérant une possible correction ou continuation.

En analyse technique moderne, le CCI est moins populaire que le RSI ou le Stochastic Oscillator, mais il conserve une utilité particulière pour identifier les mouvements de prix extrêmes et les divergences.

## Mécanismes et caractéristiques

Le CCI oscille sans limites supérieure ou inférieure, contrairement au RSI (0-100) ou au Stochastic (0-100). Une lecture au-dessus de +100 indique une condition de surachat où le prix est significativement au-dessus de sa moyenne. Une lecture en dessous de -100 indique une condition de survente.

Les signaux de trading viennent de plusieurs sources. Le croisement de la ligne zéro : quand le CCI passe au-dessus de zéro, c'est un signal haussier (le prix au-dessus de sa moyenne). Le croisement au-dessus de +100 ou en dessous de -100 peut signaler des retournements mais avec un délai.

Les divergences CCI sont particulièrement surveillées. Une divergence baissière se forme quand le prix fait un nouveau haut mais que le CCI fait un nouveau haut plus bas. Une divergence haussière se forme quand le prix fait un nouveau bas mais que le CCI fait un nouveau bas plus haut.

Le CCI est souvent utilisé avec une période de 20 (par défaut) mais peut être ajusté. Des périodes plus courtes (8-10) rendent le CCI plus sensible, produisant plus de signaux mais avec plus de bruit. Des périodes plus longues (30-40) lissent le CCI mais retardent les signaux.

## Nuances, critiques, limites

L'absence de limites naturelles du CCI le rend difficile à interpréter. Les seuils de +100 et -100 sont arbitraires et varient selon l'actif et la volatilité. Un actif volatile peut régulièrement dépasser +200 ou -200 sans que cela indique un retournement.

Le [[backtesting]] du CCI seul montre généralement des résultats médiocres. Les croisements de la ligne zéro produisent des signaux tardifs en marché trending. Les lectures extrêmes (+100, -100) sont trop rares pour être exploitées systématiquement.

Le CCI ne fonctionne bien qu'en marché sans tendance (range). En marché fortement orienté par une tendance, le CCI peut rester en territoire extrême pendant longtemps, produisant de faux signaux de retournement si le trader suppose que "suracheté signifie vente".

La période du CCI doit être ajustée selon l'actif et le timeframe. Le même actif peut nécessiter des périodes différentes selon qu'on l'analyse en journalier ou en hourly.

## Liens et implications

Le CCI appartient à la famille des oscillateurs comme le RSI et le Stochastic Oscillator.

Les support et résistance identifiés via le CCI fonctionnent mieux quand le prix revient vers un niveau où le CCI était extrême previously.

La divergence CCI peut anticipier un retournement de tendance, similaire à la divergence RSI. Les stratégies qui combinent divergences sur plusieurs indicateurs (CCI + RSI + MACD) renforcent la robustesse des signaux.

## Sources