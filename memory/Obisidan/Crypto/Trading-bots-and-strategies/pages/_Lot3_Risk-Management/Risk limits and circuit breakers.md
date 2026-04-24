---
titre: "Risk limits and circuit breakers"
type: méthode
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#méthode/risque, #méthode/limites, #concept/safety]
créé: 2026-04-21
liens_forts: ["[[Gestion du risque]]", "[[Drawdown]]", "[[Position sizing]]", "[[Stress testing]]", "[[Risk of ruin]]"]
liens_opposition: []
---

# Risk limits and circuit breakers

> [!info] Résumé
> Les risk limits et circuit breakers sont des règles automatiques qui arrêtent ou réduisent le trading quand certains seuils de risque sont atteints. Ces garde-fous sont essentiels pour survivre aux événements extrêmes et éviter les blow-ups catastrophiques.

## Définition

Les risk limits (limites de risque) sont des seuils qui déclenchent des actions spécifiques quand ils sont atteints. Ces limites peuvent concerner le drawdown, la perte quotidienne, le nombre de trades perdants consécutifs, ou dautres métriques.

Les circuit breakers (disjoncteurs) sont des mécanismes qui arrêtent complètement ou partiellement le trading quand des conditions extrêmes sont détectées. Ils sont Named ainsi car ils fonctionnent comme les disjoncteurs électriques qui préviennent les surcharges.

Examples de risk limits :
- Stoppez le bot si le drawdown dépasse 20%
- Réduisez la taille de position de 50% si le drawdown atteint 10%
- Arrêtez un strategy si elle perd plus de 5% en une journée

Les circuit breakers sont généralement plus conservatives que les risk limits. Ils sont designed pour prévenir les pertes catastrophiques en cas d'erreur de stratégie ou de conditions de marché extrêmes.

Les[[Trading bot]]s sans risk limits sont comme une voiture sans freins. Même si le moteur est puissant, labsence de mechanism de arrêt fait courir un risque majeur.

## Contexte et origine

Les circuit breakers ont été introduits par les Bourses après le crash de 1987. Le 19 octobre 1987, le Dow Jones a chuté de 22% en une journée. En réponse, les Bourses ont mis en place des disjoncteurs qui arrêtent le trading si les baisses depassent certains seuils.

Dans le contexte du trading algorithmique, les circuit breakers sont devenus cruciaux après les flash crashes automatisés. En mai 2010, le flash crash a été amplifié par le trading algorithmique haute fréquence qui nevait pas de limites.

Les risk limits personnels sont différents des circuit breakers de marché. Chaque trader ou bot doit définir ses propres limites basées sur sa tolérance au risque et ses objectifs. La[[Gestion du risque]] efficace passe par ces défenses automatic.

Les[[Flash crash]]s sont des événements où les circuit breakers auraient pu aider. Un bot avec des limites de perte journalière aurait été arrêté avant de subir des pertes majeures.

## Mécanismes et caractéristiques

Les risk limits peuvent être stratifiés (layered) :
- Niveau 1 (avertissement) : notification que le seuil approche
- Niveau 2 (action) : réduction automatique de l'exposition
- Niveau 3 (arrêt) : arrêt complet du trading

Cette stratification permet une réponse proportionnée. Un petit dépassement génère une petite réponse, pas forcément l'arrêt immédiat.

Les circuit breakers les plus courants :
- Maximum drawdown limit : arrête si le drawdown depuis le pic dépasse X%
- Perte quotidienne limit : arrête si la perte quotidienne dépasse Y%
- Nombre de pertes consécutives : arrête après Z pertes consécutives
- Limite de VaR : arrête si le VaR dépasse un seuil

Les[[Risk limits and circuit breakers]] doivent être définis avant le déploiement du bot. Les définir "en cours de route" est dangereux car on peut être influencé par les émotions.

## Nuances, critiques, limites

Les risk limits qui sont trop serrés peuvent arrêter le bot trop tôt et l'empêcher de récupérer. Un limit de 5% de drawdown sur une stratégie volatile peut être trop conservative.

Les limits qui sont trop larges n'offrent pas de protection adequate. Un limit de 50% de drawdown est useless car il nexiste praticamente aucune stratégie qui devrait perdre 50% sans être arrêtée.

Le calibration des limits est un exercice délicat. Ils doivent être assez larges pour permitir à la stratégie de fonctionner normalement mais assez serrés pour protéger contre les blow-ups.

Les circuit breakers ne garantissent pas la protection contre le slippage. En marchés très volatils, le prix peut passer à travers du stop avant que le circuit breaker soit déclenché.

## Liens et implications

Les[[Risk limits and circuit breakers]] sont une composante essentielle de la[[Gestion du risque]]. Ils représentent la dernière ligne de défense contre les pertes catastrophiques.

Le[[Drawdown]] et ses limites sont les composants principaux des circuit breakers. Définir un drawdown max acceptable est le premier pas pour establecer des limits.

Le[[Stress testing]] et la[[Scenario analysis]] permettent de calibrer les limits. En simulant des conditions extrêmes, on peut voir à quel niveau le drawdown maximal se Produirait.

Le[[Risk of ruin]] peut être significativement réduit par des circuit breakers apropriés. Un circuit breaker qui arrête le bot avant 30% de drawdown peut transformer une stratégie risquée en une stratégie viable.

## Sources

[^1]: SEC, "Circuit Breakers", https://www.sec.gov/ (consulted 2026)
[^2]: Hull, "Risk Management and Financial Institutions", Wiley (2018)
