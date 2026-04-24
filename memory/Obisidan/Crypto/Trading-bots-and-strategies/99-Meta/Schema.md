# Schema - Conventions YAML frontmatter

## Template complet

```yaml
---
titre: "Titre exact de la page"
type: concept | théorie | personne | expérience | controverse | école | trouble | méthode | terme | débat | œuvre | institution | événement
cluster: "Trading bots and strategies"
statut: verified | to-verify | débattu | débunké | hypothétique | stub | à-sourcer
controverse: low | medium | high
importance: pilier | standard | deep-cut
source_knowledge: internal | web-checked | mixed
sources_count: N
tags: [#tag1, #tag2]
créé: 2026-04-20
liens_forts: ["[[Page1]]", "[[Page2]]"]
liens_opposition: ["[[Page3]]"]
---
```

## Définitions des champs

| Champ | Type | Description |
|-------|------|-------------|
| `titre` | string | Titre exact en français naturel avec accents |
| `type` | enum | Catégorie de la page |
| `cluster` | string | Toujours "Trading bots and strategies" |
| `statut` | enum | État de vérification |
| `controverse` | enum | Niveau de controverse |
| `importance` | enum | Importance stratégique |
| `source_knowledge` | enum | Méthode d'acquisition du savoir |
| `sources_count` | integer | Nombre de sources externes |
| `tags` | array | Max 5 tags, minuscules, préfixe thématique |
| `créé` | date | Date de création YYYY-MM-DD |
| `liens_forts` | array | Connexions fortes vers d'autres pages |
| `liens_opposition` | array | Liens d'opposition ou contradiction |

## Énumérations

### type
- **concept** : Idée abstraite ou construit mental
- **théorie** : Cadre théorique ou modèle
- **personne** : Individu humain (fact-check requis)
- **expérience** : Expérience ou étude (fact-check requis)
- **controverse** : Sujet controversé (fact-check requis)
- **école** : Courant de pensée
- **trouble** : Trouble ou pathologie
- **méthode** : Méthodologie ou technique
- **terme** : Terme de glossaire
- **débat** : Débat en cours
- **œuvre** : Ouvrage (livre, article, etc.)
- **institution** : Organisation ou entité
- **événement** : Événement ou occurrence

### statut
- **verified** : Confirmé par des sources
- **to-verify** : Nécessite vérification externe
- **débattu** : Présentement débattu
- **débunké** : Débunké ou discrédité
- **hypothétique** : Spéculation théorique
- **stub** : Placeholder, à développer
- **à-sourcer** : Nécessite des citations

### controverse
- **low** : Consensus, peu de désaccord
- **medium** : Quelques désaccords dans le domaine
- **high** : Controverse significative

### importance
- **pilier** : Page core, fondamentale (Priorité 1)
- **standard** : Importance régulière (Priorité 2)
- **deep-cut** : Niche ou avancé (Priorité 3)

### source_knowledge
- **internal** : Dérivé du savoir existant
- **web-checked** : Vérifié via WebSearch
- **mixed** : Combinaison des deux

## Conventions tags

- Minuscules uniquement
- Préfixe thématique : #concept/, #personne/, #méthode/, #débat/, etc.
- Max 5 tags par page
- Français pour les tags

### Exemples
```yaml
tags: [#concept/agent, #méthode/backtesting, #controverse/scam]
```

## Nommage des fichiers

- Espaces autorisés (Obsidian gère)
- Titres en français naturel avec accents
- Pas de préfixes numérotés
- Extension `.md`