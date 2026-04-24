# CLAUDE.md - Crypto Trading Bots Vault

## Sujet
**Crypto trading bots** / **{CLUSTER_CHOISI}** : Trading bots and strategies

## Périmètre
- 35-45 pages denses, interconnectées, en **français intégral**
- Terminologie anglaise conservée dans le corps (ex: "high-frequency trading")
- Vault de calibration avant scaling à 500+ pages

---

## Conventions YAML

```yaml
---
titre: "Nom exact de la page"
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

### Énumérations autorisées
- **type** : concept, théorie, personne, expérience, controverse, école, trouble, méthode, terme, débat, œuvre, institution, événement
- **statut** : verified, to-verify, débattu, débunké, hypothétique, stub, à-sourcer
- **controverse** : low, medium, high
- **importance** : pilier, standard, deep-cut
- **source_knowledge** : internal, web-checked, mixed

---

## Règles wikilinks

- `[[Page exacte]]` ou `[[Page|alias]]`
- Chaque wikilink justifié par la phrase qui l'entoure, **jamais en listing brut** (sauf MOC)
- Minimum 7 wikilinks sortants par page
- Ratio cible : 8-12 wikilinks par page en moyenne

---

## Règles fact-check

- Pages type `personne` / `expérience` / `controverse` = **fact-check obligatoire**
- WebSearch 2 requêtes max par page
- Si introuvable après 2 recherches → `statut: to-verify` dans YAML + mention "information à confirmer" dans corps
- Log dans `99-Meta/Fact-Check-Log.md`

---

## Anti-hallucination (NON-NÉGOCIABLE)

1. Aucun nom propre inventé
2. Aucune date fabricada
3. Aucun chiffre statistique non sourcé
4. Aucune citation directe inventée
5. Théories débunkées → dire "débunké", "non-réplicable", "pseudoscience"
6. Biais WEIRD à reconnaître quand applicable
7. Auto-corrections loggées dans `99-Meta/Fact-Check-Log.md`

---

## Structure de page

```markdown
---
[YAML complet]
---

# Titre

> [!info] Résumé
> 1 à 2 phrases de pitch clair et précis.

## Définition
2 à 4 paragraphes denses.

## Contexte et origine
Qui, quand, où, cadre intellectuel. Paragraphes.

## Mécanismes / caractéristiques / détails
Le cœur. 3 à 6 paragraphes avec exemples concrets.

## Nuances, critiques, limites
OBLIGATOIRE sur toutes les pages. Pages controversées : section "Controverses" dédiée plus fournie.

## Liens et implications
Wikilinks contextualisés dans des phrases complètes.

## Sources
[^1]: Référence 1
```

---

## Règles d'édition future

- Pas de préfixes numérotés sur les fichiers
- Espaces autorisés dans les noms de fichiers
- Titres en français naturel avec accents
- Max 5 tags par page, minuscules, préfixe thématique
- Pas de tiret cadratin — utiliser deux-points ou virgules
- Longueur : 800-1500 mots par page
- Ton neutre mais tranché