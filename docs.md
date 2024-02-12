# Projekt Documentation: 3D Multiplayer Auto Game

## Idee der App:

1. **App Koncept:**

- Das Project ist ein 3D Multiplayer Party Game. Es soll ähnlich wie Mario
  Kart sein.
- Das Game soll man mit bis zu 4 Leuten (wenn möglich bis zu 8 oder
  sogar mehr) spielen können
- Die Spieler werden auf einem Host auf einem Monitor getrennt angezeit.
  Dabei wird das Display in 4 gleichmäßige Screens eingeteilt damit jeder seinen
  eigenen Screen hat
- Um Beizutreten joint man einfach den Raum mit dem Handy, der als Lenkrad dient

2. **Ziel Gruppe:**

- Entwickelt als Party-Spiel ähnlich wie Mario Kart für ein unterhaltsames und
  ansprechendes Erlebnis für alle Altersgruppen.
- Fokus jedoch hauptsächlich auf Gamer, also Kinder und Jugendliche.

3. **Ästhetiks:**

- Visueller Stil: 3D-Grafiken mit pixelierten, lebendigen und hellen Farben.
- Inspiration aus optisch ansprechenden Spielen wie Hollow Knight und Rain World.

<!-- 4. **Mock-up:** -->
<!-- - Develop a mock-up showcasing essential scenes: start screen, gameplay, and settings. -->
<!-- - Highlight the unique steering control using smartphones. -->

## Entwicklung und Dokumentation:

1. **Technologie Stack:**

- Three.js für 3D Rendering.
- JavaScript für Game Logik.
- Socket.io für Multiplayer Funktionalität.
- pnpm für Package und Monorepository Management .
- Git für Version Control (Projekt auch auf Github)
- Unklar:
  - Solid.js für Frontend
  - Fastify oder Express für Backend
  - MySQL für Datenbank

2. **Entwicklungsumgebung:**

- IDE/Editor: Neovim mit angepasste Konfiguration.
- Terminal-Emulator: Wezterm mit angepasste Konfiguration.
- [Konfigurationen](https://github.com/scrythe/ansible/tree/main/dotfiles)

<!-- - Testing: [Describe any testing systems/tools used]. -->

<!-- 3. **Code Documentation:** -->
<!---->
<!-- - Use meaningful comments and documentation for code clarity. -->
<!-- - Emphasize maintainability and ease of understanding for future developers. -->
<!---->
<!-- 4. **Database Schema:** -->
<!---->
<!-- - If applicable, provide a relational database schema. -->
<!-- - Explain design choices and their relevance to game data storage. -->

3. **Benutzeroberflächendesign:**

- Startbildschirm: Spielbutton und Settings Button
- Beim Klicken auf dem Spielbutton: Menü zum Auswählen ob man Host oder
  Spieler ist.

<!-- 4. **Interaction Design:** -->
<!---->
<!-- - Explain how users will interact with the game, especially using smartphones as steering wheels. -->
<!-- - Describe any additional gestures or controls for gameplay. -->
<!---->
<!-- 5. **Visual Design:** -->
<!---->
<!-- - Focus on creating a visually stunning experience. -->
<!-- - Incorporate pixelated, bright colors inspired by Hollow Knight and Rain World. -->
<!---->

4. **Projektstruktur:**

- Monorepo mithilfe von pnpm gemanaged
- Frontend und Backend Ordner für Clientseitige und Serverseitige Funktionen
- Game Ordner für seperate Game Logik

<!-- 8. **Future Considerations:** -->
<!---->
<!-- - Outline potential future features or improvements. -->
