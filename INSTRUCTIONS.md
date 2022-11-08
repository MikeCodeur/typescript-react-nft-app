# Création de composants React TS

### 💡 Découpage de notre application

## 📝 Tes notes

Detaille ce que tu as appris ici `src/exercise/02.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Nous allons découper notre application en plusieurs composants React. Un des choses à rapidement comprendre est la définition des props. Exemple

```tsx
type HelloProps = {
  firstName: string;
  lastName: string;
};
function Hello(props: FullName) {
  // firstName
  // lastName
}

//avec destructuration
function Hello({ firstName, lastName }: FullName) {
  // firstName
  // lastName
}
```

## Exercice

Dans cet exercice tu vas devoir découper tous le code de `App.tsx` dans des composants.

<aside>
💡 Pour les containers nous utiliserons children qui est de type `React.ReactNode`

</aside>

Fichier :

- `src/App.tsx`
- `src/components/Card`
- `src/components/Containers`
- `src/components/Footer`
- `src/components/Search`
- `src/components/Card`

## Bonus

### 1. 🚀 \***\*React.FC\*\***

Une autre manière de déclarer des `props` est d’utiliser `React.FC<>`. Cela apporte querlques avantages :

- le type de retour est implicite
- `children` est automatique présent

exemple :

```tsx
const Compo: React.FC<{ title: string }> = ({ children, title }) => {
  return <div title={title}>{children}</div>;
};
```

<aside>
💡 Ceci est moins recommandé depuis React 18 et la suppression de `children`

</aside>

Utilise `React.FC` dans `CardContainer` et `MainContainer`

Fichiers :

- `src/components/Containers/CardContainer`
- `src/components/Containers/MainContainer`

## Aller plus loin

📑 Le lien vers la doc [des functionnal composants](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components)

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack.](https://go.mikecodeur.com/cours-react-avis?entry.1912869708=TypeScript%20PRO&entry.1430994900=6.React%20TypeScript&entry.533578441=02%20Creation%20Components)
