---
tags:
  - generative-models
  - deep-learning
  - trading
created: 2026-04-21
---

# Generative Models

Les modèles génératifs constituent une classe de modèles de machine learning qui apprennent à générer de nouvelles données suivant la distribution des données d'entraînement. Contrairement aux modèles discriminatifs qui predisent des labels, les modèles génératifs modélisent la distribution jointe des données et des labels, permettant la génération de samples originaux.

## Paradigmes fondamentaux

Les **modèles probabilistes** comme les Gaussian Mixture Models et les Hidden Markov Models apprennent explicitement la distribution des données. Ils peuvent générer de nouveaux samples mais sont limités à des distributions simples.

Les **réseaux de neurones génératifs** apprennentimplicitement la distribution via des réseaux de neurones. Les [[Autoencoders]] variationnels (VAE) apprennent un espace latent régulier à partir duquel de nouveaux samples peuvent être générés.

Les **Generative Adversarial Networks (GAN)** utilisent un jeu adversarial entre un générateur et un discriminateur. Le générateur crée des samples, le discriminateur évalue leur authenticité. Cette compétition pousse le générateur à produire des samples de plus en plus réalistes.

Les **diffusion models** apprennent à inverser un processus de bruit graduel. Ces modèles récents ont démontré des performances impressionnant en génération d'images et commencent à être appliqués aux données financières.

## Applications en trading

La **génération de données synthétiques** peut augment les datasets de trading. Les données financières réelles sont limitées et coûteuses à obtenir. Les modèles génératifs peuvent créer des scenarios de marché pour le backtesting et l'entraînement.

La **simulation de marché** utilise les modèles génératifs pour créer des trajectoires de prix alternatives. Ces simulations peuvent étendre la validation des stratégies au-delà des périodes historiques disponibles.

L'**exploration de l'espace des stratégies** peut utiliser la génération pour proposer de nouvelles configurations de paramètres. Les stratégies générées peuvent être évaluéés et affinées par des experts ou des processus automatisés.

La **détection d'anomalies** bénéficie des modèles génératifs qui apprennent la distribution normale. Les samples qui s'écartent significativement de la distribution apprise sont suspectés d'être anormaux.

## GAN pour le trading

Les [[GAN for trading]] constituent une application spécifique des GAN au trading. Le générateur peut créer des sequences de prix synthétiques qui ressemblent aux données réelles, augmentant les ensembles d'entraînement pour les modèles de prédiction.

Le discriminateur apprend à distinguer les vraies séquences de prix des séquences générées. Cette capacité de discrimination peut elle-même être utilisée commefeature pour identifier des patterns inhabituels dans les données réelles.

Les **conditions de marché** peuvent être générées pour tester la robustesse des stratégies. Les regimes extrêmes (crash, bulle) peuvent être générés pour évaluer les réponses des stratégies.

La génération conditionnelle permet de créer des scenarios spécifiques. Un GAN conditionnel peut générer des trajectories de prix sachant certaines conditions initiales (volatile, trending, etc.).

## Considérations éthiques et pratiques

La génération de données financières synthétiques soulève des questions de **conformité réglementaire**. Les données générées ne doivent pas être utilisées pour manipuler les marchés ou créer de faux signaux.

La **qualité des samples** doit être validée soigneusement. Les modèles génératifs peuvent produire des samples visuellement réalistes mais statistiquement irréalistes. L'évaluation doit inclure des tests de cohérence statistique.

La **propriété intellectuelle** des données générées et des stratégies découvertes automatiquement est une question ouverte. Les systèmes qui génèrent automatiquement des stratégies peuvent créer des questions de ownership.

L'intégration avec les [[Risk limits and circuit breakers]] est indispensable pour éviter que les stratégies basées sur des données générées ne prennent des risques excessifs. La validation sur des données réelles remain irremplaçable.

Voir aussi : [[GAN for trading]], [[Autoencoders]], [[Transfer learning]], [[Feature engineering]], [[Time series forecasting]], [[Anomaly detection]], [[Backtesting]], [[Risk management]]