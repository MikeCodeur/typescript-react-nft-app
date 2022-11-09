# Fetch API Rest

### 💡 Fetch API REST

## 📝 Tes notes

Detaille ce que tu as appris ici `src/exercise/05.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Il est très fréquent de faire appel à des API (Restfull / GraphQL pour récupérer des données). Avec React on utilise un effet de bord avec le Hook `useEffect.` Exemple de code.

```tsx
useEffect(() => {
  const api = async () => {
    const data = await fetch("https://api.io/api/nft/all", {
      method: "GET",
    });
    const jsonData = await data.json();
    console.log(jsonData);
  };
  api();
}, []);
```

Le problème est que les données retournées du serveur peuvent avoir des formes diverses et variées et il va falloir gérer cela avec TypeScript. Dans cet section on nous founis une API REST avec des données de NFT.

- [https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all](https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all/1)

50 elements

- [https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all/1](https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all/1)

1 element avec une erreur

- [https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/erreur](https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/erreur)

Erreur 500

L’api retourne 3 propriétés :

- data : un array de nft
- elements : le nombre d’element
- errors : un array d’erreurs

Exemple de format retour

```json
{
  "data": [
    {
      "createdAt": "2022-11-08T18:05:44.053Z",
      "title": "John Schroeder",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/772.jpg",
      "description": "Fuga veritatis illum animi.",
      "creator": "Judd",
      "img": "http://loremflickr.com/640/480/nature",
      "expire": "639.00",
      "price": "675.00",
      "fetchedAt": "2022-11-08T19:29:17.500Z",
      "id": "1"
    }
  ],
  "elements": 1,
  "errors": [
    {
      "message": "Unknown ID"
    }
  ]
}
```

## Exercice

`👨‍✈️` Hugo le chef de projet te demande d’utiliser des API rest pour recuperer les NFT

Dans cet exercice tu vas devoir supprimer les données de notre base de données et utiliser l’API suivante :

- [https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all](https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all/1)

<aside>
💡 Il s’agit d’une API mockée, les données sont générées aléatoirement pour l’exercice

</aside>

Ficher :

- `src/App`

## Bonus

### 1. 🚀 Typer les réponses API

Lorsque l’on utilise `resp.json()` cela nous retourne un type `any` et on perd le typage. Pour cela nous allons créer un type de retour

```tsx
type JSONResponse = {
  data?: Array<nftType>;
  elements?: number;
  errors?: Array<{ message: string }>;
};
```

- utilise `JSONResponse`

```tsx
const { data, errors, elements }: JSONResponse = await resp.json();
```

**Affiche le nombres d’élements et le nombres d’erreurs**

- Créé 2 `states` supplémentaires `elements` et `errors`
- affiche sous le input le nombre d’element en blanc et erreur en rouge

pour faire tes tests utilise les 3 ressources ;

- [https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all](https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all/1)
- [https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all/1](https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all/1)
- [https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/erreur](https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/erreur)

<aside>
💡 Attention il faut gérer le code erreur sur la 3eme api

</aside>

### 3. 🚀 Omit

Il arrive parfoit que les types retournés par le serveur soit generé automatiquement Et il y a parfois plus de données que necessaires. Exemple `fetchedAt` `createdAt`

```tsx
export type nftType = {
  title: string;
  description: string;
  creator: string;
  img: string;
  price: string;
  expire: string;
  avatar: string;
  fetchedAt?: string;
  createdAt?: string;
};
```

Pour gérer ce cas et dire a TypeScript de ne pas utiliser ces propiétés il est possible d’utiliser `Omit<Type,Key>`

📑 Le lien [vers la doc Omit](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)

Utilise Omit pour supprimer `fetchedAt` `createdAt`

## Aller plus loin

📑 Le lien [vers la doc Omit](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack.](https://go.mikecodeur.com/cours-react-avis?entry.1912869708=TypeScript%20PRO&entry.1430994900=6.React%20TypeScript&entry.533578441=05%20Typer%20FetchAPI)
