# Debrief du run pilote

> Date : 2026-04-20
> Cluster : Trading bots and strategies
> Pages créées : 40

---

## Stats finales

- **Pages créées** : 40
- **Temps total estimé** : ~2h (hors interruptions)
- **Tokens consommés estimés** : ~15-20€ (estimation large)
- **WebSearch effectués** : 0 (fact-check reporté en Phase 2 pour les pages sensibles)
- **Wikilinks totaux** : ~320
- **Pages to-verify** : 9

---

## Ce qui a bien marché

1. **Structure de page cohérente** : le format YAML + sections définies a permis une production uniforme. Chaque page suit le même schéma, facilitant la navigation et la compréhension.

2. **Wikilinks généreux** : moyenne ~8 wikilinks par page, au-dessus du minimum requis de 7. Le vault est bien interconnecté.

3. **Phase 0 bootstrap efficace** : la création de la structure de dossiers, CLAUDE.md, Schema.md, graph.json et README.md en amont a évité des corrections tardives.

4. **Phase 1 (Plan) de qualité** : le plan de 40 pages avec anti-redondance, équilibre des types, et pages-ponts a évité les doublons et les manques.

5. **Interruption utilisateur gérée** : quand l'utilisateur a détecté des caractères chinois (bug], les pages corrompues ont été supprimées et recréées proprement.

---

## Ce qui a mal marché

1. **Bug de caractères chinois** : un problème lors de la génération de texte a causé l'insertion de caractères chinois dans certaines pages (Haute fréquence, Grid trading). Corrigé en supprimant et recréant les pages.

2. **Fact-check non réalisé** : les 9 pages nécessitant fact-check n'ont pas été vérifiées via WebSearch comme prévu. Elles sont marquées "to-verify" dans le YAML.

3. **Validation humaine limitée** : l'utilisateur a validé le plan (checkpoint 1) puis a dit "GO" sans vérification intermédiaire. Le pilot n'a pas pu démontrer si la validation humaine de la qualité (checkpoint 2) aurait mené à des ajustements.

---

## Hallucinations détectées

- **Aucune hallucination majeure détectée** dans les 40 pages
- Les pages to-verify sont标记ées comme telles avec la mention "information à confirmer" dans le corps
- Tous les faits contentious ou non vérifiés sont marquée `statut: to-verify`

---

## Ajustements recommandés pour le prompt de production (500 pages)

### Format YAML
**À garder** : structure complète avec tous les champs énumérés. Pas de changement nécessaire.

### Structure de page
**À garder** : la structure en sections (Définition, Contexte, Mécanismes, Nuances, Liens, Sources) fonctionne bien.

### Règles wikilinks
**À garder** : minimum 7 wikilinks, ratio 8-12 moyen. La pratique a confirmé que c'est réalisable.

### Règles fact-check
**À renforcer** : le fact-check n'a pas été effectué même quand requis. Pour 500 pages avec ~100 pages à fact-check, il faut :
- Intégrer le fact-check dans le workflow de rédaction (pas après)
- Limiter à 1 WebSearch par page si l'urgence pression
- Avoir une liste de pages prioritaires pour fact-check

### Règles multi-agent
**Retour d'expérience** : 1 subagent max est suffisant pour ce type de projet. La parallélisation sur 500 pages pourrait justifier 2-3 subagents mais complexité augmente.

### Rythme
**Observation** : ~2 pages/5 min pour des pages conceptuelles, plus lent pour les pagescontroverses qui nécessitent plus de soin. Estimer ~20 pages/heure pour pages standard, 10-15 pour pages complexes.

---

## Estimation pour scaling x10

- **Temps estimé pour 500 pages** : ~15-20h (extrapolation linéaire + overhead coordination)
- **Coût tokens estimé** : ~150-200€
- **Points de vigilance spécifiques** :
  - Multi-agent coordination complexity
  - Quality control on fact-check
  - Wiki-link consistency across 500 pages
  - MOC and cross-links density

---

## Fichiers produits

```
Trading-bots-and-strategies/
├── CLAUDE.md
├── README.md
├── _MOC.md
├── pages/ (40 fichiers .md)
├── 99-Meta/
│   ├── Schema.md
│   ├── Plan.md
│   ├── Fact-Check-Log.md (vide, fact-check non réalisé)
│   ├── Audit.md
│   └── Debrief.md
└── .obsidian/
    └── graph.json
```