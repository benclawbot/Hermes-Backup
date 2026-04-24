---
titre: "Correlation risk"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 2
tags: [#concept/correlation, #concept/risque, #concept/diversification]
créé: 2026-04-21
liens_forts: ["[[Diversification]]", "[[Correlation matrix]]", "[[Risk budgeting]]", "[[Gestion du risque]]", "[[Volatility scaling]]"]
liens_opposition: []
---

# Correlation risk

> [!info] Résumé
> Le correlation risk est le risque que les corrélations entre actifs changent de manière adverse en période de crise. Les stratégies diversifiées peuvent perdre leur protection quand les corrélations convergent vers 1 lors des krachs.

## Définition

Le correlation risk, aussi appelé "risque de corrélation" ou "risque de base", désigne l'incertitude liée aux relations entre les rendements des différents actifs. Une matrice de corrélation suppose que les relations passées resteront stables, ce qui n'est pas garanti.

En temps normal, deux actifs peuvent avoir une corrélation faible ou négative, offrant une bonne[[Diversification]]. Mais en période de crise, les corrélations ont tendance à augmenter vers 1, perdant le bénéfice de la diversification. C'est ce qu'on appelle "correlation breakdown".

Par exemple, les actions et les obligations ont normalement une corrélation négative (les obligations montent quand les actions baissent). Mais lors de la crise de 2008, cette corrélation est devenue positive pendant plusieurs mois, leaving les portefeuilles "diversifiés" sans protection.

En trading algorithmique crypto, le correlation risk est particulièrement important. Beaucoup de crypto-actifs sont très corrélés avec Bitcoin. Même si on diversifie entre BTC, ETH et autres altcoins, on peut avoir une exposition agrégée au marché crypto qui est plus risquée qu'il n'y paraît.

## Contexte et origine

Le concept de correlation risk est né de l'observation que les corrélations ne sont pas stables dans le temps. En périodes de crise, les avantages de la diversification disparaissent précisément quand on en a le plus besoin.

Les recherches de Longin et Solnik (2001) ont montré que les corrélations entre marchés d'actions augmentent significativement en période de volatilité élevée. Ce phénomène est maintenant connu sous le nom de "correlation convergence".

Le domaine du "portfolio optimization" de Markowitz suppose des corrélations fixes, ce qui est une simplification. En réalité, la matrice de covariance varie dans le temps et peut changer drastiquement.

Les[[Flash crash]]s sont des événements où le correlation risk se matérialise. Pendant un flash crash, presque tous les actifs baissent simultanément, avec des corrélations proches de 1. Les stratégies qui dépendent de la diversification échouent lamentablement.

## Mécanismes et caractéristiques

La matrice de corrélation est un tableau carrée symétrique avec des 1 sur la diagonale et des coefficients de corrélation ailleurs. Elle est utilisée pour calculer le risque total d'un portefeuille dans le modèle de Markowitz.

Le coefficient de corrélation varie entre -1 et 1. Une corrélation de 1 signifie que les deux actifs évoluent parfaitement ensemble. Une corrélation de -1 signifie qu'ils évoluent en opposition parfaite. Une corrélation de 0 signifie aucune relation linéaire.

Le[[Correlation matrix]] doit être mis à jour régulièrement pour refléter les changements. Utiliser une matrice obsolète peut mène à une sous-estimation du risque de portefeuille.

En pratique, les traders utilisent des corrélations mobiles sur des fenêtres de 30, 60 ou 90 jours pour suivre l'évolution des corrélations. Une augmentation progressive de la corrélation peut être un signal d'alerte.

## Nuances, critiques, limites

Les corrélations historiques ne prédisent pas les corrélations futures. Une matrice basée sur les 2 dernières années peut ne pas refléter les conditions actuelles de marché. En périodes de transition de marché, les changements peuvent être très rapides.

Le calcul des corrélations assume une relation linéaire. Les crypto-actifs peuvent avoir des relations non linéaires (par exemple, un actif monte quand un autre monte mais descends plus lentement). Ces relations ne sont pas capturées par le coefficient de corrélation standard.

La notion de "correlation régimes" est importante. Les stratégies qui fonctionnent dans un régime de basse volatilité peuvent échouer dans un régime de haute volatilité où les corrélations changent.

Le[[Risk budgeting]] basé sur des corrélations fixes peut mener à des allocations sous-optimales. Les approches robustes utilisent des scénarios de corrélation adverse.

## Liens et implications

La[[Diversification]] est la principale défense contre le correlation risk. Mais la diversification n'est pas une garantie absolue car les corrélations peuvent augmenter en période de crise.

Le[[Correlation matrix]] est l'outil principal pour mesurer et gérer le correlation risk. Une matrice actualisée régulièrement permet de suivre l'évolution des relations entre actifs.

Le[[Risk budgeting]] doit intégrer des scénarios de correlation breakdown. Allouer du capital en supposant que les corrélations resteront stables peut mener à des pertes inattendues.

La[[Volatility scaling]] interagit avec le correlation risk. En période de volatilité élevée, les corrélations ont tendance à augmenter, ce qui peut amplifier les pertes du portefeuille. Lorsque la volatilité augmente, c'est souvent en période de crise où les actifs perdent leur diversification. Le volatility scaling seul ne peut pas protéger contre ce phénomène. Il est donc important de combiner le volatility scaling avec une surveillance active des corrélations et une diversification entre des actifs vraiment non corrélés.

## Sources

[^1]: Longin, "The Correlation Condtion Between Market Extremes", Journal of Business (2001)
[^2]: Ang, "Risk Management and Regulation", Columbia Business School (2014)
