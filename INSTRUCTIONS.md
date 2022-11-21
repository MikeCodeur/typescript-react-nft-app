# useState & React Event

### 💡 useState & React Event

## 📝 Tes notes

Detaille ce que tu as appris ici `src/exercise/04.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Il est possible de typer les states avec le hook `useState` avec les `generics` grace la syntaxe suivante `useState<string>`

```tsx
interface User {
  id: string;
  username: string;
  email: string;
}

const currentUser: User = {
  id: "my-id",
  username: "Joe",
  email: "joe@example.com",
};

const [user, setUser] = React.useState<User>(currentUser);
```

Les events

Il existe de nombreux types d’events géré avec React. Pour en citer quelques uns

- `React.ChangeEvent`
- `React.MouseEvent`
- `React.SyntheticEvent`

liste [des events](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/)

## Exercice

Dans cet exercice tu vois devoir gérer le cas ou l’on recherche des nft. Tu vas devoir gérer les events lors de la saisie dans le champs input du composant `Search,` faire remonté l'info au niveau de App et filtrer les NFT. Commence par le composant `Search`

fichiers :

- `src/App.tsx`
- `src/components/Search.tsx`

##

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack.](https://go.mikecodeur.com/cours-react-avis?entry.1912869708=TypeScript%20PRO&entry.1430994900=6.React%20TypeScript&entry.533578441=04%20State%20Event)
