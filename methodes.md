### componentDidCatch(error, info)

La méthode componentDidCatch() est appelée si une erreur se produit pendant la phase de rendu des méthodes de cycle de vie ou des composants enfants. Cette méthode est utilisée pour implémenter les limites d’erreur pour l’application React. Il est appelé pendant la phase de validation, donc contrairement à getDerivedStateFromError() qui a été appelé pendant la phase de rendu, les effets secondaires sont autorisés dans cette méthode. Cette méthode est également utilisée pour consigner les erreurs.

Peut-on considérer la méthode componentDidCatch() comme "une méthode de cycle de vie" ? - OUI


getDerivedStateFromError()
Peut-on effectuer des effets de bord dans getDerivedStateFromError() ? - 
NON
est appelée pendant la phose de rendu Les effets de bord y sont interdites