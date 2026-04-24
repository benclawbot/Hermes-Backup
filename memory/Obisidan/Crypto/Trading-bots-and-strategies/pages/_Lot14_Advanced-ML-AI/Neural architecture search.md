---
tags:
  - AutoML
  - neural-architecture-search
  - optimization
  - trading
created: 2026-04-21
---

# Neural Architecture Search (NAS)

Le Neural Architecture Search (NAS) automatise la conception d'architectures de réseaux de neurones, éliminant le besoin d'expertise manuelle pour trouver des topologies optimales. Appliqué au trading algorithmique, le NAS peut découvrir des architectures spécialisées pour la prédiction de séries temporelles financières et l'analyse de marché.

## Cadre conceptuel

Le NAS pose le problème de la conception de réseaux comme un problème d'optimisation. L'espace de recherche englobe toutes les architectures possibles : types de couches (dense, convolution, recurrent), nombre de couches, connexions entre couches, hyperparamètres (filtres, kernel size, dropout).

L'optimisation doit trouver l'architecture qui maximise les performances sur un ensemble de validation, tout en minimisant les coûts computationnels. Différentes stratégies existent : les méthodes de recherche par renforcement utilisent un contrôleur (souvent un RNN) qui génère des descriptions d'architecture et est récompensé selon les performances des architectures générées.

Les **méthodes évolutionnaires** traitent les architectures comme des individus d'une population qui évoluent par mutation et crossover. Les **méthodes basées sur les gradients** comme DARTS relaxent l'espace discret en混、交带 paramtres continus, permettant l'optimisation par descente de gradient.

## Application au trading

En trading, le NAS peut être utilisé pour découvrir automatiquement les meilleures architectures pour des tâches spécifiques. Une architecture optimale pour la prédiction de prix de cryptomonnaies peut différer significativement de celle pour les actions traditionnelles.

Le NAS permet d'adapter automatiquement l'architecture à la fréquence de trading, à l'instrument, et aux objectifs de la stratégie. Pour le [[Time series forecasting]] financier, le NAS peut découvrir des architectures combinant [[LSTM]], attention, et couches denses de manière optimale.

Les techniques de NAS peuvent également être appliquées à la sélection de features et à la conception de [[Feature engineering]] pipeline. Le search space peut inclure des opérations de transformation de données, permettant une optimisation jointe de l'architecture et du prétraitement.

## Méthodes efficientes

Le NAS traditionnel nécessite des milliers de milliers d'heures GPU, le rendant impractical pour la plupart des applications. Les méthodes efficientes réduisent le coût computationnel par différents mécanismes.

**Progressive NAS** construit des architectures incrémentalement, commençant par des blocs simples et ajoutant progressivement de la complexité. **Weight sharing** permet de réutiliser les poids entre les architectures candidates, évitant de réentraîner from scratch.

**Once-for-all** networks apprennent un réseau巨大 qui contient tous les sous-réseaux possibles, chacun pouvant être extrait sans réentraînement. Cette approche permet de déployer différents modèles selon les contraintes de latence ou de mémoire.

Les espaces de recherche spécialisés pour le trading incluent des opérations comme les convolutions temporelles, l'attention, et les LSTM, adaptés aux données séquentielles financières. La reduction de l'espace de recherche aux opérations pertinents accélère la convergence.

## Considérations pratiques

Le NAS nécessite une fonction d'évaluation fiables pour mesurer les performances des architectures candidates. En trading, cette évaluation doit être faite sur des données holdout non vues pendant l'entraînement pour éviter le surapprentissage.

La robustesse des architectures découvertes est importante. Une architecture qui performe bien sur une période historique peut échouer sur une autre. Le NAS avec des métriques robustes (Sharpe ratio, drawdown) peut produire des architectures plus adaptées au trading réel.

L'intégration avec les systèmes de trading existants nécessite des considérations de déploiement. Les architectures découvertes peuvent être complexs et difficiles à déployer en production. Les techniques de [[Model compression]] sont souvent nécessaires après le NAS.

Voir aussi : [[Feature engineering]], [[LSTM]], [[Transformer]], [[Deep reinforcement learning]], [[Transfer learning]], [[Model compression]], [[Time series forecasting]], [[Ensemble methods]]