# Proof of concept - Angular

## Kör projektet

**Följ denna guide för att starta upp projektet på en lokal server**

Då Angular använder sig av sin egna CLI behöver du installera denna. Det gör du med hjälp av npm. NPM följer med när du installerar Node. Är du osäker på om du har node kan du köra node -v i terminalen. Skriv in följande i terminalen för att installera Angulars CLI:

**npm install -g @angular/cli**

Sedan skriver du in följande i terminalen:

**npm update**

När CLI är färdiginstallerad och npm uppdaterad så kan du använda dig av dess funktioner och sätta upp en lokal server. Säkerställ att du står i mappen angular-project-master och skriv följande i terminalen:

**cd .**

**ng serve --open**

Då bör det ha öppnats en lokal server i webbläsaren på
http://localhost:4200/

---

## Komponeneter jag skapat

[**app-component**](./src/app/)

[**form-component**](./src/app/form)

[**todos-component**](./src/app/components/todos/)

[**todo-model**](./src/app/models)

Made by: William Saar, 22-02-17.
