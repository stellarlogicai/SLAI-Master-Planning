You are helping reorganize my project into a cleaner monorepo-style folder structure.

Root folder:
SLAI_REAL/

Current target structure:
SLAI_REAL/
├── ServicesOS/
│   ├── servicesos-web/
│   ├── employee-app/
│   ├── shared/
│   ├── cloud-functions/
│   ├── docs/
│   └── architecture/
├── SLAIOS/
├── RetailOS/
├── SharedServices/
├── AI/
├── Documentation/
└── Archive/

Task:
1. Inspect the current project structure.
2. Confirm where the existing web app code currently lives.
3. Move only the correct web app files into:
   SLAI_REAL/ServicesOS/servicesos-web/

4. Move Firebase Cloud Functions into:
   SLAI_REAL/ServicesOS/cloud-functions/

5. Move reusable constants, schemas, validation helpers, permissions, and shared utility files into:
   SLAI_REAL/ServicesOS/shared/

Only move files to shared if they are truly reusable by both the web app and future employee app.

6. Leave product-specific React components, pages, routes, and UI files inside:
   SLAI_REAL/ServicesOS/servicesos-web/

7. Update all broken imports caused by the folder rename or file movement.

8. Search the entire project for old folder references such as:
   web-app
   webapp
   old project folder names
   old relative import paths

Replace them with the correct new paths.

9. Check and update:
   package.json scripts
   firebase.json
   .firebaserc
   vite.config.js or react config
   jsconfig.json / tsconfig.json path aliases
   GitHub Actions or deployment scripts if present
   README setup instructions
   .env reference paths

10. Do not delete the original folder until the new structure runs successfully.

11. After moving and updating imports, run:
   npm install
   npm run dev
   npm run build
   npm run lint

12. Fix any errors caused by the move.

13. Verify:
   - app launches
   - login works
   - Firebase connects
   - Firestore reads/writes
   - Stripe functions still work
   - environment variables still load
   - routes still work
   - no broken imports remain

Important:
Do not rewrite features.
Do not redesign the app.
Do not change business logic.
Only reorganize folders, move files carefully, update references, and fix path/import/config issues.

Before making changes, output a move plan showing:
- files/folders to move
- old path
- new path
- why they belong there

Then perform the changes step by step.