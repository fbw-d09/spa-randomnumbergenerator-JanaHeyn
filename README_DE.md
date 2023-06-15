# Zufallszahlen

-   Erstelle eine Komponente `RandomList` (dt. "Zufallsliste") in `src/RandomList.js`, die einen Button und eine Liste mit Zufallszahlen rendert (anzeigt).

-   Wenn auf den Button geklickt wird, soll eine weitere Zufallszahl zu der Liste hinzugefügt werden.
-   Speichere das Array der Zahlen mit Hilfe von `useState`.
-   Der Anfangszustand (engl. "initial state") sollte ein leeres Array sein.

Teste es:

```js
numbers.push(Math.random());
setNumbers(numbers);
```

**Hinweis:** Dies wird nicht funktionieren, da das Pushen in ein Array das ursprüngliche Array nicht ersetzt. React wird nur neu gerendert (angezeigt), wenn sich der Wert des Zustandes (engl. "state") ändert!
