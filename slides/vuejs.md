# Vue.js 3 & TypeScript Kurs

Einführung in Vue.js 3 und TypeScript

# Kapitel 1: Willkommen

- Grundlagen und fortgeschrittene Techniken
- Moderne Webentwicklung mit Vue.js 3 und TypeScript
- Praktische Anwendungsfälle

# Kapitel 2: Was ist Vue.js 3?
- Progressives JavaScript-Framework
- Erstellung von Benutzeroberflächen
- Leistungsverbesserungen und Composition API

# Kapitel 3: Vorteile von TypeScript
- Statische Typisierung für JavaScript
- Weniger Fehler im Code
- Verbesserte Codequalität und Wartbarkeit

# Kapitel 4: Setup und Konfiguration
- Einrichtung eines neuen Vue 3 Projekts
- TypeScript-Unterstützung aktivieren
- Wichtige Konfigurationsoptionen

# Kapitel 5: Erste Schritte mit der Composition API
- Grundkonzepte der Composition API
- Verbesserung der Code-Organisation
- Wiederverwendung von Logik

# Kapitel 6: Reaktive Referenzen und Zustände
- Umgang mit ref und reactive
- Erstellen reaktiver Daten
- Beispiele für Zustandsmanagement
- Computed Properties
- Einsatz von Watchers für Datenänderungen
- Nutzung von Lifecycle-Hooks

# Kapitel 7: Komponenten
- Erstellung von wiederverwendbaren Komponenten als SFC (Single File Components)
- Verwendung von Props und Slots
- Binding von Attributen und Textinhalten
- Interaktion mit Events und Benutzereingaben

# Kapitel 8: Composables
- Erstellung von wiederverwendbaren Logikteilen
- Einsatzmöglichkeiten von Composables
- Praktische Beispiele

# Kapitel 9: Interaktion mit Templates
- Daten- und Methodenbindung
- Dynamische Benutzeroberflächen
- Beispiele für Template-Interaktionen

# Kapitel 10: Projektstruktur
- Organisationsstrategien
- Best Practices für die Projektstruktur
- Effiziente Datei- und Ordnerorganisation


# Kapitel 0: Dokumentation, Blogs, Tutorials

## Weblinks zu Vue.js
- Vue.js Guide: https://vuejs.org/guide/introduction.html
- Vue.js Blog: https://v3.vuejs.org/blog/
- Vue.js Tutorials: https://v3.vuejs.org/guide/introduction.html
- Vue.js Forum: https://forum.vuejs.org/
- Vue.js 3 Cheat Sheet: https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf

## Der Vue.js Playground

- Der Vue.js Playground ist ein interaktives Tool, um Vue.js Code zu schreiben und zu testen.
- Vue.js Playground: https://play.vuejs.org/
- Vue.js Interaktives Tutorial: https://v3.vuejs.org/guide/introduction.html
- Vue.js Stackblitz: https://stackblitz.com/edit/vitejs-vite-cragur?file=README.md

# Der Typescript Playground

- Der TypeScript Playground ist ein interaktives Tool, um TypeScript Code zu schreiben und zu testen.




# Kapitel 1.1: Warum Vue.js 3?

Die Philosophie: 

- Templates für deklarative Oberflächen mit eigenen Komponenten (Tags)
- Reaktivität für automatische Aktualisierung der UI bei Änderungen im Code

# Kapitel 1.1: Warum Vue.js 3?

- Das Programmiermodell
- Single File Components mit 3 Sektionen

 1. Template für die Darstellung (HTML mit Vue-Direktiven)
 2. Script für die Logik (am besten in TypeScript)
 3. Style für das Styling (Styled können "scoped" sein)

- Single File Components haben die Endung .vue und werden von der Vue-CLI in Javascript umgewandelt. (Oder mittels Vite, Webpack oder anderen Bundlern mit entsprechenden Plugins)



# Kapitel 1.2: Warum TypeScript?

- Ermöglicht Entwicklern, Typisierungsfehler im Voraus zu erkennen
- Verbessert die Teamkollaboration durch klare Typdefinitionen
- Erleichtert die Wartung und Skalierung von großen Projekten
- Verbessert die Developer Experience (DX) durch bessere Autokomplettierung und IntelliSense

- Im Vue.js Playground im ```<script setup lang=”ts”>``` angeben um TypeScript dort zu aktivieren


# Kapitel 1.3: Wichtigste Grundtechnologien

Vue.js 3 basiert auf folgenden Technologien:

1. HTML
2. CSS
3. JavaScript (bzw. TypeScript)


# Kapitel 1.3: Typische Libraries

- Tailwind CSS für das Styling. https://tailwindcss.com/
- Axios für HTTP-Requests. https://axios-http.com/
- Vue Router für das Routing. https://next.router.vuejs.org/
- Vuex für das Zustandsmanagement. https://next.vuex.vuejs.org/
- Pinia als Alternative zu Vuex. https://pinia.esm.dev/
- Nuxt.js für Server-Side Rendering. https://nuxtjs.org/
- V18n für Internationalisierung. https://v18n.js.org/

# Kapitel 1.3: GUI-Komponenten Libraries

- Quasar: https://quasar.dev/
- Vuetify: https://vuetifyjs.com/
- Bulma: https://bulma.io/
- Bootstrap: https://getbootstrap.com/
- Shadcn-Vue: https://www.shadcn-vue.com/docs/introduction.html
- Vue Material: https://vuematerial.io/
- VuePress: https://vuepress.vuejs.org/


# Kapitel 1.3: Links zu Grundlagen-Technologien

- MDN (Mozilla Developer Network) für HTML, CSS und JavaScript: https://developer.mozilla.org/
- TypeScript Dokumentation: https://www.typescriptlang.org/docs/
- CSS-Flexbox Layouts: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- CSS-Grid Layouts: https://css-tricks.com/snippets/css/complete-guide-grid/



# Kapitel 1.4: Fortgeschrittene Techniken in Vue.js 3
- Nutzung der Composition API für komplexe Anwendungsfälle
- Feingranulare Reaktivität und Zustandsmanagement
- Performance-Optimierungen und best practicesInsbesondere die Verwendung von shallowRef() anstelle von ref() bei Arrays und größeren JSON Strukturen die nicht intern geändert werden.

# Kapitel 1.5: Praktische Anwendungsfälle

- Erstellung von Single Page Applications (SPAs)
- Entwicklung interaktiver und reaktiver Benutzeroberflächen
- Integration von Vue.js 3 mit anderen modernen Technologien und APIs
- Verwendung im Nuxt.js SSR-Framework
- Standalone SSR Rendering mit Vue.js

# Kapitel 1.6: Welche Vorkenntnisse sind erforderlich?

- Grundkenntnisse in HTML, CSS und JavaScript
- Einzelne Aspekte von Typescript wie:
 - Typen, Interfaces, Klassen, Generics, Dekoratoren
 - Typisierung von Funktionen, Props und Daten
- Einzelne Aspekte von Javascript wie:
 - Promise und Async/Await, Fetch API, Arrow Functions, Spread Operator, Destructuring, ES6-Modules



# Kapitel 2.1: Architektur von Vue.js 3

- Verwendung des Virtual DOM für effizientes Rendering
- Modularer Aufbau ermöglicht leichte Integration
- Reaktivitätssystem auf Proxy-Basis

# Kapitel 2.2: Die Composition API

- Ermöglicht potentiell eine bessere Code-Organisation und Wiederverwendbarkeit
- Zugriff auf alle reaktiven und lifecycle Features
- Die Composition API ist ähnlich zu Programmierweisen in modernem Angular oder SvelteKit. Außerdem sind die Composables in Vue.js 3 vergleichbar mit den Custom Hooks in React.

# Kapitel 2.3: Typische Vue.js 3 SFC Components

Empfohlen wird die Verwendung von Single File Components (SFCs) für die klare Trennung von Logik, Darstellung und Styling. Diese Components haben folgende Eigenschaften:

1. Einen optionalen Bereich für den Code (Script) eingeschlossen in einem ```<script>``` Tag
2. Ein Template für die Darstellung eingeschlossen in einem ```<template>``` Tag
3. Einen optionalen Bereich für das Styling eingeschlossen in einem ```<style>``` Tag

- Der Code kann (sollte!) in TypeScript geschrieben werden, indem im ```<script>``` Tag ```lang="ts"``` angegeben wird.
- Die Styles können mit dem Attribut ```scoped``` auf den Componentenbereich beschränkt werden. 

# Kapitel 2.3: Hello World in Vue.js

Das Counter Beispiel:

```html
<script setup lang="ts">
import { ref } from 'vue';
const counter = ref(1)
</script>
<template>
  <button @click="counter++">Counter value: {{ counter }}</button>
</template>
```

# Kapitel 2.3: Template Syntax und Alternativen

In SFC werden die Templates definiert und eine Syntax-Unterstüzung wird durch
IDEs wie VS-Code und IntelliJ/Webstorm geboten.

Die Syntax ist HTML-ähnlich und bietet zusätzlichen Direktiven für Standard-Anwendungen wie:

- Bedingtes Rendern mit ```v-if```, ```v-else```, ```v-show```
- Listen-Rendering mit ```v-for```
- Event-Handling mit ```v-on```
- Model-Bindung mit ```v-model```

Außerdem können sowohl Attribute also auch der Inhalt von Tags dynamisch gebunden werden oder direkt mit Typescript-Code versehen werden.


# Kapitel 2.3: Template Syntax und Alternativen

- Templates könnnen auch dynamisch als Strings erzeugt werden. Das ist aber inhärent unsicher und muss um jeden Preis vermieden werden.
- Alternativ kann auch JSX verwendet werden, um dynamische UIs zu erstellen. Dies ist jedoch eher unüblich in Vue.js
- Es können VNode-Elemente direkt erstellt werden, um die UI zu manipulieren. Dies ist jedoch eher unüblich in Vue.js, ist aber in Ausnahmefällen aus Performancegründen notwendig (z.B. bei der Erstellung von großen Tabellen oder SVGs)

# Kapitel 2.4: Single File Components (SFCs) Vor- und Nachteile
- Komplette Komponenten in einer einzigen Datei (Template, Script, Style)
Klare Trennung von Logik und Darstellung
- Gute Wiederverwendbarkeit und PflegeAlternativ kann man Komponenten auch programmatisch mittels defineComponent oder per Default-Export erstellen
- Für jede Komponente wird eine eigene Datei erstellt
. Es ist folglich (in größeren Projekten) notwendig eine Directory-Struktur zu haben, die die Komponenten gut organisiert.
Zum Beispiel: 
```
components/basic/
components/tables/
components/forms/
components/layouts/
...
```

# Kapitel 2.5: Vite für das Tooling
- Vite für schnelles Projektsetup
- Vite als moderner Packager (selbst im React Umfeld in Gebrauch)
- Vite bringt ein eigenes Dev-Server mit, der auf ES-Modules basiert
- Der Vite-Devserver hat einen integrierten Proxy um CORS Setups für die lokale Entwicklung zugänglich zu machen
- Vite hat ein Plugin-System um die Konfiguration zu erweitern
- Vitest ist ein auf Vite basierendes Test-Runner-Tool

# Kapitel 2.5: Vitest Einrichtung

Abhängigkeiten installieren:
```bash
npm install --save-dev vitest @vitest/ui @testing-library/vue @testing-library/jest-dom jsdom
```
Vite-Config-Datei anpassen:
```
import { configDefaults } from 'vitest/config';

export default defineConfig({
  ...
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    exclude: [...configDefaults.exclude, 'e2e/*'],
  },
  ...
})
```

Test Setup-Datei erstellen:
```typescript
import '@testing-library/jest-dom';
``` 

# Kapitel 2.5: Vitest und das Testen von Components

Beispiel Test:

```typescript
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import App from './App.vue';

describe('App component', () => {
    it('renders correctly', () => {
      const wrapper = mount(App);
      expect(wrapper.text()).toContain('hello world');
    });
})
```



# Kapitel 2.6: Vitest und das Testen von Components


# Kapitel 3.1: Typsicherheit
- Statische Typisierung hilft, Fehler frühzeitig zu erkennen.
```
Compile-Time vs. Runtime
```

ä Kapitel 3.2: Typescript-Tooling-Unterstützung
- Verbesserte Autokomplettierung und IntelliSense in Entwicklungsumgebungen
- Einfachere Navigation durch den Code (Go to Definition, Find References)

# Kapitel 3.3: Refactoring und Wartung
- Erleichtert das sichere Refactoring von Code
- Fördert lesbaren und wartbaren Code

# Kapitel 3.4: Integration in das Vue-Ecosystem
- Nahtlose Integration mit Vue 3 und der Composition API
- Typunterstützung für Props, Events/Emits und Slots

# Kapitel 3.5: Verbesserung der Entwicklererfahrung
-Typüberprüfungen zur Kompilierzeit
- Ermöglicht präzisere Dokumentation und bessere Teamkommunikation
- Unterstützung für moderne Javascript-Features (aktuell nicht mehr so notwengi wie früher). Dieser Punkt wird immer unwichtiger, aber TypeScript ist auch ein Transpiler um moderne Features in älteren Javascriptversionen zu unterstützen.

# Kapitel 3.6: Debugging

- Debugging aus der IDE heraus mit IDE-Level-Debugging ist möglich. Siehe auch:  https://code.visualstudio.com/docs/nodejs/browser-debugging

- Debugging im Browser mit den Dev-Tools des Browsers ist möglich. Dazu gibt es die Möglichkeit Breakpoints programmatisch mittels des

```javascript
debugger
```
Javascript-Statements zu setzen. In den Devtools des Browsers kann man bei Dev-Builds aufgrund der Source-Maps auch direkt in den TypeScript-Code springen.

Tipp: Letzterer Ansatz ist eine Umgewöhnung für Java/C++ Programmierer aber sehr effizient und man kann sich so auch die Zeit für das Einrichten von IDE-Level-Debugging sparen.

# Kapitel 3.6: Debugging und Dev-Tools

Für Chrome/Edge gibt es die Vue.js Devtools Extension, die das Debugging von Vue.js-Anwendungen erleichtern kann.

https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd


# Kapitel 4.1: Einrichtung eines Vue 3 Projekts
- Verwendung von Vite für das Projekt-Setup (vue-cli hat ausgedient)
- Konfiguration von TypeScript-Unterstützung
- Einrichten von Linting und Formatierung
  - Die Standard-Tools sind: prettier und eslint

# Kapitel 4.2: Verzeichnisstruktur

Empfehlungen für eine effektive Projektstruktur
Trennung von:
- Komponenten
- Composables
- Assets
- Pages (?)

```
public/
src/
  components/
  composables/
  assets/
  pages/
  router/
  store/
  utils/
```

# Kapitel 4.3: Zustandsmanagement und Routing
- Konfiguration von Vue Router für Single Page Applications
- Einrichtung von Vuex oder Pinia für das Zustandsmanagement

# Kapitel 4.4: Einbindung von Drittanbieterbibliotheken
Integration von UI-Bibliotheken wie Vuetify oder Quasar
Anbindung an APIs mit Axios, Prisma
Internationalisierung mit: V18n
Nuxt.js
Vuepress

# Kapitel 4.5: Entwicklungsumgebung
- Hot Module Replacement (HMR) für schnelle Entwicklung
- Source Maps für einfaches Debugging
- Environment Variablen für verschiedene Deployment-Ziele und für Entwickler-Erleichterungen:.env.local  (Auch typisiert möglich)


# Kapitel 5.1: Einführung in die Composition API

- Erlaubt eine funktionsbasierte API-Nutzung
- Wiederverwendbarkeit und Lesbarkeit von Code
- Fördert die Nutzung von funktionalen Programmierkonzepten. Der React-Stil von Customhooks findet sein Pendant in den Vue-Composables

# Kapitel 5.2: setup() Funktion

- Zentraler Einstiegspunkt für Composition API Komponenten
- Zugriff auf Props, Context und Lifecycle-Hooks
- Definition von reaktiven Zuständen und Funktionen

Alle in der setup() Funktion definierten Variablen und Funktionen sind im Template der Komponente verfügbar. Nichts muss explizit exportiert werden.

#  Kapitel 5.3: Reaktive Zustände mit ref() und reactive()
Erstellen von reaktiven Objekten, die Reactivität kann auch tief sein.
Ein Ref kann auch mittels unref() wieder zum eingepackten Wert zurückgeführt werden.

#  Kapitel 5.3: Reaktive Zustände mit ref()

Ein ref() ist ein Wrapper um einen Wert, der reaktiv ist. Das bedeutet, dass Vue automatisch Änderungen an diesem Wert erkennt und die UI aktualisiert.

Hinter den Kulissen wird ein Wrapper-Objekt verwendet, um die Reaktivität zu ermöglichen. Dabei werden getter und setter verwendet, um die Abhängigkeiten zu tracken.Die Abhängigten Objekte werden intern in einer Liste gespeichert und bei Änderung benachrichtigt. 

Die Implementierung ist nicht schwer zu verstehen:

- https://github.com/vuejs/core/blob/main/packages/reactivity/src/ref
- https://github.com/vuejs/core/blob/main/packages/reactivity/src/dep.ts


# Kapitel 5.3: Refs Standalone

Beispiel für die Verwendung von Refs als Event-Listener. Dafür wird die watchEffect() Funktion verwendet.

```typescript
const myRef = ref(0);
watchEffect(() => {
    console.log('Value changed:', myRef.value)
})

setTimeout(() => {
    myRef.value = 3;
}, 10_000);
```

# Kapitel 5.3: Refs Standalone mit computed()

Refs können mittels computed() weitergeleitet werden. computed() funktionen schreiben die verwendeten Refs automatisch mit und sind dann von allen Refs die Sie verwenden abhängig.

```typescript
const myRef1 = ref(10)
const myRef2 = ref(20)
const myComputed = computed(() => myRef1.value * mvRef2.value)
watchEffect(() => {
    console.log('Value changed:', myComputed.value)
})
```

# Kapitel 5.3: Übersicht über die Reaktivität von Vue.js

- ref() für primitive Werte
- reactive() für komplexe Objekte und Arrays
- shallowRef() für flache Reaktivität
- shallowReactive() für flache Reaktivität bei Objekten

- toRef() für die Weitergabe von Reaktivität
. toRefs() für die Weitergabe von Reaktivität an mehrere Refs
- readonly() für schreibgeschützte Refs
- isRef() und isReactive() für Typüberprüfungen
- watch() und watchEffect() für die Beobachtung von Änderungen
- computed() für die Definition von berechneten Eigenschaften mit weitergeleiteter Reaktivität
- unref() für den Zugriff auf den eingepackten Wert eines Refs

# Kapitel 5.4: Unterschiede zwischen ref() und reactive()

- ref() für primitive Werte möglich. Der Zugriff auf den Wert erfolgt über .value. In Vue-Templates ist der .value-Zugriff nicht notwendig.

- reactive() für komplexe Objekte und Arrays. Der Zugriff auf die Werte erfolgt direkt über die Objekteigenschaften. 

- ref() with mittels getter und setter implementiert. reactive() ist ein Proxy-Objekt.

- die Shallow-Reaktivität kann mit shallowRef() und shallowReactive() erreicht werden und bezieht sich nur auf die Objekte in der obersten Ebene.


# Kapitel 5.4: Computed Properties und Watchers
- Definition von berechneten Eigenschaften mit computed()(mit automatischen Tracking der verwendeten Refs). Computed() erzeugt aber keinen Callback sondern eine weitere Ref.
- Beobachten von Änderungen an reaktiven Datenquellen mit watch()
watchEffect() ist wie Watch aber mit automatischen Tracking der verwendeten Refs. Watch() ist expliziter und kann auch auf tiefere Ebenen zugreifen. Sowohl watch() als auch watchEffect() können async sein und können auch auf die alten und neuen Werte zugreifen. Beide werden mit einem Callback aufgerufen, welcher dann bei Änderung der getrackten oder expliziten Refs aufgerufen wird.


# Kapitel 5.5: Nutzung von Lifecycle-Hooks
- Zugriff auf Komponenten-Lifecycle-Hooks innerhalb der setup() Funktion
Verwendung von onMounted, onUpdated, onUnmounted
- Beispiele für die Anwendung von Lifecycle-Hooks sind composables… 


# Kapitel 6.1: Grundlagen der Reaktivität
- Vue’s Reaktivitätssystem basierend auf Proxies oder Getter/Settern. Beides sind Javascript Features die in modernen Browsern verfügbar sind. 
- Siehe auch bei MDN unter: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set

# Kapitel 6.1: Wie Vue Änderungen an Daten erkennt und darauf reagiert:

Jede Instanz eines Refs verwaltet intern eine Liste von Listenern (sogenannten Effekten) und informiert diese bei Änderung seines Values

# Kapitel 6.2: Verwendung von ref()
- Erstellen einer reaktiven Referenz für primitive Werte
- Zugriff und Mutation von ref-Werten
- Anwendung in Templates und reaktiven Ausdrücken

# Kapitel 6.3: Einsatz von reactive()

- Definition eines reaktiven Objekts für komplexe Zustände

# Kapitel 6.4: Reaktivität weitergeben mit toRef()

- toRef erzeugt eine Referenz transparent zur Weitergabe (für Composables)
- toRefs ist praktisch mit destructuring für mehrere Refs

#  Kapitel 6.5: Beobachtung von Zustandsänderungen

Einsatz von watch und watchEffect

- watch() bekommt explizite Abhängigkeiten
- watchEffect() tracked die Abhängigkeiten beim ersten Ausführen
(Achtung bei If-Statements)


# Kapitel 6.6: Deep Watching

Konfiguration von watchern für tiefe Beobachtungen
Beobachtung von Änderungen in verschachtelten Objekten
Nutzung von Optionen wie { deep: true }

# Kapitel 6.7: Immediate Watchers

Sofortige Ausführung von Seiteneffekten mit { immediate: true }

# Kapitel 6.8: Lifecycle-Hook onMounted

- Ausführung von Code nach dem Einfügen der Komponente in den DOM
Typischer Anwendungsfal ist das Abrufen von Daten
- Die Funktion die an onMounted() übergeben wird kann async sein und somit mittels await Daten laden.

# Kapitel 6.8 : Lifecycle-Hook onUnmounted
- Aufräumarbeiten vor der Zerstörung der Komponente
- Beispiel für den Einsatz: Das Entfernen von Event Listeners

Achtung: Wenn man vergisst Event-Listener zu entfernen, wird dieses zu Memory-Leaks und sehr langsamen Anwendungen führen.

# Kapital 7: Komponenten

- Komponenten sind die Bausteine von Vue.js-Anwendungen
- Wiederverwendbare und isolierte Einheiten
- Gute Vue.Js Anwendungen haben viele kleine Komponenten
- Datenübergabe via Props, Composables oder über project/inject

# Kapitel 7.1: Erstellung von Komponenten

- Definition von Single File Components (SFCs)
- Struktur und Aufbau von SFCs
- Slots (hier eine Div welches seinen Inhalt in rot darstellt)

```html
<template>
        <div class="color: red;"><slot></slot></div>
</template>        
```

# Kapitel 7.2: Verwendung von Props

- Definition von Props für die Datenübergabe an Komponenten
. Die einzelnen Props können required oder optional sein. Default-Werte können auch angegeben werden.
- Typisierung von Props für Typsicherheit

```typescript
<script setup lang="ts">
const props = defineProps<{
    title: string
    size: number
}>()
</script>
```


- DefineProps ist eine Funktion die Props definiert und optional Default-Werte setzt.

# Kapitel 7.2: Verwendung von Props
```typescript
const props = withDefaults(defineProps<{
  title: string
  size?: number
  optionalProp?: boolean
}>(), {
  // Default value for optional prop
  optionalProp: false
})
```

# Kapitel 7.3: Slots und Scoped Slots

- Slots für die flexible Darstellung von Inhalten
. EIne Komponente kann mehrere Slots haben und diese können auch benannt werden. 

Beispiel:

```html
<template>
  <div>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
```

Verwendung:
```html
<my-component>
  <template v-slot:header>
    <h1>Header</h1>
  </template>
  <p>Content</p>
  <template v-slot:footer>
    <p>Footer</p>
  </template>
```

# Kapitel 7.4: Binding von Attributen

Attribute können mit v-bind gebunden werden. Dies ist besonders nützlich für dynamische Attribute wie class oder style.

```html
<template>
    <div :class="className" :style="{ color: textColor }">
        {{ message }}
    </div>
</template>
```

Dabei ist : eine Kurzform für v-bind. Die Zeichen in den Anführungszeichen sind nun Javascript-Code und keine Textkonstanten mehr.

# Kapitel 7.4: Binding von Textinhalten mittels Moustache-Notation

Innerhalb von Text-Content können auch Variablen oder Ausdrücke eingebunden werden. Dies geschieht mittels der Moustache-Notation {{ }}.

```html
<template>
    <div>
        {{ message }}
    </div>
</template>
```

Die Zeichen in den geschweiften Klammern sind ebenfalls Javascript-Code und keine Textkonstanten mehr.

# Kapitel 7.4: Sicherheitsaspekte bei der Textbindung

Es gibt die Möglichkeit, HTML-Inhalte direkt in das Template einzubinden. Dies führt jedoch zu Sicherheitsproblemen, wenn die Inhalte nicht vertrauenswürdig sind. Dieses dauerhaft sicherzustellen ist sehr schwierig und deswegen sollte v-html vermieden werden.

Merksätze:

- Verwendung von v-html für die Ausgabe von HTML-Inhalten
- Vorsicht bei der Verwendung von v-html, da dies XSS-Angriffe ermöglichen kann

- Ohne v-html werden die Inhalte als Text behandelt und nicht als HTML-Code interpretiert. Damit ist man sicher vor XSS-Angriffen, selbst wenn man unsichere Inhalte ausgibt. Unsichere Inhalte sind z.B. Inhalte die von Benutzern eingegeben werden.

# Kapitel 7.5: Conditional Rendering

Um Elemente bedingt anzuzeigen, kann v-if, v-else-if und v-else verwendet werden.


```html
<template>
    <div>
        <p v-if="isVisible">This is visible</p>
        <p v-else>This is not visible</p>
    </div>
</template>
```

# Kapitel 7.6: List Rendering

Um Listen von Elementen zu rendern, kann v-for verwendet werden.

```html
<template>
    <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
</template>
```

Vue stellt auch einen Schleifenindex zur Verfügung, der mit v-for verwendet werden kann.

```html
<template>
    <ul>
        <li v-for="(item, index) in items" :key="item.id">{{ index }}: {{ item.name }}</li>
    </ul>
</template>
```
# Kapitel 7.7: Event Handling

Um auf Benutzeraktionen zu reagieren, kann v-on verwendet werden.

```html
<template>
    <button @click="handleClick">Click me</button>
</template>
```

Für v-on gibt es auch eine Kurzform mit @. Die Zeichen in den Anführungszeichen sind nun Javascript-Code und keine Textkonstanten mehr.

Einige häufige Events sind:

- click, input. change, keyup, keydown, mouseover, mouseout

# Kapitel 7.7: Zugriff auf die Event-Objekte

Um auf das Event-Objekt zuzugreifen, kann dieses als Argument an die Handler-Funktion übergeben werden.

```html
<template>
    <button @click="handleClick">Click me</button>
</template>
```

```typescript
<script setup lang="ts">
const handleClick = (event: MouseEvent) => {
    console.log('Button clicked', event)
}
</script>
```

# Kapitel 7.7: Event-Modifier

Vue bietet auch Event-Modifier, um das Standardverhalten von Events zu ändern.

Diese Modifier sind:

- .stop: stopPropagation()
- .prevent: preventDefault()
- .capture: addEventListener mit capture-Flag
- .self: nur wenn das Event vom Element selbst ausgelöst wird
- .once: nur einmal auslösen

# Kapitel 7.8: Formular-Handling

Mittels v-on kann man bidirektionale Datenbindung implementieren. 

Ohne v-model:

```html
<input :value="text" @input="event => text = event.target.value">
```

Mit v-model:

```html
<input v-model="text">
```

# Kapitel 7.9: Lifecycle-Hooks

Vue bietet Lifecycle-Hooks, um auf den Lebenszyklus einer Komponente zu reagieren.

Diese Hooks sind:

- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeUnmount
- unmounted

Die wichtigsten Lifecycle-Hooks sind created, updated, mounted und unmounted.
In der Composition API gibt es die Lifecycle-Hooks onMounted, onUpdated und onUnmounted. Man rufe diese Funktionen in der setup() Funktion auf und gibt einen Callback an, der dann bei dem entsprechenden Lifecycle-Event aufgerufen wird.

# Kapitel 7.10: provide und inject

Mittels provide und inject können Daten an verschachtelte Komponenten weitergegeben werden. Das verhindert das sogenannte Prop-Drilling.

-  In einem Parent (auch indirekte Parents)
```typescript
const myData = ref('Hello World')
provide('myData', myData)
```

- In einem beliebigen verschachtelten Child
```typescript
const myData = inject('myData')
```
Typsicherheit kann hierbei durch die Verwendung von Generics erreicht werden.

# Kapitel 7.11: Teleport

Teleport ermöglicht das Rendern von Elementen an einer anderen Stelle im DOM.

# Kapitel 8.1: Was sind Composables?

- Wiederverwendbare Kompositionsfunktionen in Vue 3
- Bündeln von reaktiver Logik, Zuständen und Funktionen
- Erleichterung der Wiederverwendung und Modularisierung

# Kapitel 8.2: Erstellen von Composables

- Struktur und Aufbau einer Composable-Funktion
- Verwendung von reaktiven Zuständen und Funktionen
- Rückgabe von Zuständen und Methoden

# Kapitel 8.3: Einsatzbereiche von Composables

Anwendungsfälle für den Einsatz in verschiedenen Komponenten

- Beispiel: Wiederverwendbare Logik für Datenfetching
- Beispiel: Zustandsmanagement innerhalb von Anwendungen

# Kapitel 8.4: Vorteile von Composables

- Verbesserung der Code-Organisation und -Lesbarkeit
- Förderung der Wiederverwendung von Code
- Ermöglicht einheitliche Muster für häufige Problemlösungen

# Kapitel 8.5: Best Practices für Composables

- Benennungskonventionen und Organisationsstrategien
- Vermeidung von Zustandsüberschneidungen und Seiteneffekten
- Testbarkeit und Wartung von Composables

# Kapitel 9.1: Datenbindung für komplexere UIs

- Beispieldaten für Übungsprojekte gibt es unter anderem auf https://dummyjson.com/quotes


# Kapitel 9.2: Laden von Daten aus dem Netz

- onMounted kann async sein.
- Libraries wie Axios oder Fetch API für HTTP-Requests
- Libraries wie Prisma für Datenbankanbindung
- Libraries wie V18n für Internationalisierung
- Highlevel Libraries wie https://tanstack.com/query/latest/docs/framework/vue/overview


# Kapitel 9.3: Tabellen und Pagination

- Empfehlung für die Verwendung von Libraries wie Vuetify oder Quasar für Tabellen und Pagination

. Alternative 1: Selber implementieren mit Slots und Props
- Alternative 2: Libraries wie https://tanstack.com/table/v8/docs/framework/vue/vue-table

# Kapital 9.4: Vue Router

- Der Vue Router ist ein wichtiger Bestandteil von Vue.js-Anwendungen
- Konfiguration von Routen und Navigation
- Verwendung von dynamischen Routen und Parametern
- Schutz von Routen mit Navigation Guards
- Verwendung von Named Routes und Redirects
- Programmatische Navigation mit $router


# Kapitel 10.1: Komponentenstruktur

- Organisieren von Komponenten in logischen Verzeichnissen
Ei- nsatz von Single File Components (SFCs) für Klarheit

# Kapitel 10.2: Verwendung von Modulen

- Modularisierung des Codes für bessere Wartbarkeit
- Export und Import von Funktionen, Zuständen und Composables

# Kapitel 10.3: Asset-Management

- Organisation von Bildern, Stylesheets und anderen Ressourcen
- Effiziente Einbindung und Nutzung von Assets

# Kapitel 10.4: Routing und Store-Verzeichnisse

- Einrichtung von Vue Router und Zustandsmanagement-Tools (z.B. Vuex, Pinia)
- Strukturierung und Organisation von Routen und Stores

# Kapitel 10.5: Build-Konfiguration und Umgebungsvariablen
- Konfiguration von Vite für den Build-Prozess
. Nutzung von Umgebungsvariablen für unterschiedliche Deployment-Ziele
