# Custom Props Type

### 💡 Custom Props Type

## 📝 Tes notes

Détaille ce que tu as appris ici `src/exercise/03.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Pour plus de simplicité nous avons déjà repris le type `NftType.ts` , la base de données `db/nft.ts` et nous avons découpé `Card` en plusieurs sous composants.

- `CardImage`
- `CardContent`
  - `CardCreator`
  - `CardCrypto`

```tsx
const Card = () => {
  return (
    <section className="main-card">
      <CardImage />
      <CardContent />
    </section>
  );
};
```

## Exercice

Le but de cet exercice est de faire du prop drilling. C’est à dire de passer un `prop` de type `NftType` et de les passer aux sous composants.

Pour passer un `prop` NFT au composant `Card` tu peux aller dans `App.tsx`

```tsx
//App.tsx

import { nftsList } from "./db/nft";
//nftsList[0] // le premier NFT
```

Fichiers :

- `src/App.tsx`
- `src/components/Card/Card.tsx`
- `src/components/Card/CardContent.tsx`
- `src/components/Card/CardCreator.tsx`
- `src/components/Card/CardCrypto.tsx`
- `src/components/Card/CardImage.tsx`

## Bonus

### 1. 🚀 Afficher tous les NFT

Dans cet exercice tu vas devoir afficher tous les NFT

utilise `.map` pour afficher tous les NFT

Fichiers :

- `src/App.tsx`

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack.](https://go.mikecodeur.com/cours-react-avis?entry.1912869708=TypeScript%20PRO&entry.1430994900=6.React%20TypeScript&entry.533578441=03%20Custom%20Props)
