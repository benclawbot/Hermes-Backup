---
titre: "Sentiment analysis pour trading"
type: méthode
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#méthode/sentiment, #méthode/nlp, #concept/emotion]
créé: 2026-04-20
liens_forts: ["[[Social sentiment]]", "[[On-chain analytics]]", "[[Market psychology]]"]
liens_opposition: []
---

# Sentiment analysis pour trading

> [!info] Résumé
> L'analyse de sentiment utilise le NLP pour extraire l'humeur du marché depuis les news, réseaux sociaux et données on-chain. Les bots agrègent des scores de sentiment pour timing les entrées, mais les données sont bruitées et facilement manipulables.

## Définition

L'analyse de sentiment en trading est le processus d'extraire une mesure quantitative de l'humeur collective des participants du marché (traders, investisseurs, publie) vis-à-vis d'un actif ou du marché en général.

Les sources de données incluent : Twitter/X, Reddit (WallStreetBets, cryptomarkets), Telegram groups, news articles, et données on-chain (transfer patterns, exchange flows). Chaque source a ses avantages et limites.

Le output est typiquement un score de sentiment (ex: -100 à +100, où +100 est extremely bullish, -100 extremely bearish) ou une classification (bullish, neutral, bearish). Les bots utilisent ces scores pour informer leurs décisions ou déclencher des trades.

## Contexte et origine

L'analyse de sentiment est née avec l'ère numérique et l'explosion des données des réseaux sociaux. Le "Twitter sentiment trading" a commencé vers 2010-2012 avec des chercheurs qui ont trouvé des corrélations entre le sentiment Twitter et les mouvements de marché.

En crypto, le sentiment est particulièrement influent du fait de la nature speculative et de l'importance de la communauté dans la valeur des tokens. Un tweet d'Elon Musk sur un meme coin peut faire bouger le prix de 30%.

Les outils modernes comme LunarCrush, Santiment, et IntoTheBlock fournissent des métriques de sentiment en temps réel. Ces données sont intégrées dans des bots via API pour générer des signaux.

## Mécanismes et caractéristiques

Le NLP (Natural Language Processing) extrait le sentiment des textes. Les modèles peuvent être simples (comptage de mots "haussiers" vs "baissiers") ou complexes (modèles transformers qui comprennent le contexte). Plus le modèle est sophistiqué, plus il capture les nuances.

Les métriques common incluent : le "Social Volume" (nombre de mentions), le "Social Dominance" (part de voix sur un token vs les autres), le "Bear/Bull Ratio" (ratio de messages baissiers vs haussiers), et le "Sentiment Score" (score agrégé).

La corrélation entre sentiment et prix n'est pas siempre directe. Un sentiment très baissier peut précéder un rebond (contrarian) ou continuer à descendre. Les bots doivent avoir des règles pour interpréter le sentiment dans le contexte.

Le sentiment on-chain inclut l'analyse des transferts de gros holders ("whales"), les flux vers/desde les exchanges, et le comportement des addresses actives. Ces données sont moins manipulables que les réseaux sociaux mais plus complexes à analyser.

## Nuances, critiques, limites

La manipulation du sentiment est una préoccupation majeure. Des acteurs peuvent artificiellement gonflér le sentiment positif sur un token pour ensuite vendre leur position. Les "pump and dump" utilisent souvent cette tactique.

Le bruit est omniprésent. La majorité des messages sur "BTC" ne sont pas informatifs pour le trading. Les bots doivent filter le bruit pour ne garder que les signaux pertinents.

Le lag temporel est un problème : le sentiment est souvent un indicateur tardif. Le prix bouge, puis les gens commentent sur Twitter. Trader le sentiment seul peut être comme "chasser la voiture" (pair trading after the fact).

L'overfitting est un risque quand on optimise les règles de sentiment sur l'historique. Les corrélations passées entre sentiment et prix peuvent ne pas se répéter dans le futur.

## Liens et implications

Le [[sentiment analysis]] est lié au [[social sentiment]] et à l'[[on-chain analytics]] qui sont des sources de données complémentaires. Le [[market psychology]] informe l'interprétation du sentiment.

Le [[news trading]] est une forme extrême de sentiment trading où les bots réagissent aux headlines économiques ou geopolitiques. Le [[trading algorithmique]] intègre souvent des modules de sentiment.

Le debat sur [[fiabilité des services de signaux de trading]] inclut une composante de sentiment car certains services vendent des signaux basés sur l'analyse de sentiment.

## Sources

[^1]: Bollen, "Twitter Mood Predicts the Stock Market", Journal of Computational Science (2011)
[^2]: LunarCrush, "Social Metrics Explained", https://lunarcrush.com/blog (consulted 2026)