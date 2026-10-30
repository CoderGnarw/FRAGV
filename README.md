# FRAG//V website

Static site: no build step and no server code. It runs on Vercel's free Hobby plan; the installer itself is hosted on GitHub Releases.

## Files
- `index.html`: the landing page. It's generated, so edit `index.template.html` and run `node build.js`.
- `impressum.html`, `datenschutz.html`: German legal pages. **Fill in every orange `[placeholder]` before going live.**
- `config.js`: your GitHub user name and repository name. The Download buttons fetch the newest `.exe` from `github.com/<owner>/<repo>/releases/latest`.
- `changelog.json`: copied from the app. After a new release, run `node build.js --from ../fragv-desktop/renderer/index.html`.

## One-time setup
1. **GitHub:** create a public repository named `fragv` and upload the contents of this folder. Open `config.js` and replace `YOUR-GITHUB-NAME` with your user name.
2. **First release:** on the repo page, go to Releases → *Draft a new release*. Use tag `v1.0.15` and title `FRAG//V v1.0.15`, attach `FRAGV-Setup-1.0.15.exe`, then *Publish release*.
3. **Vercel:** sign in with GitHub, choose *Add New → Project*, import the `fragv` repository and click *Deploy*. Leave the framework preset as "Other"; no build command is needed.
4. **Domain:** in Vercel go to Project → Settings → Domains, add your domain, and set the DNS records Vercel shows at your domain registrar.

## Every new FRAG//V version
1. Build the installer as usual.
2. On GitHub, create a new release (e.g. `v1.0.16`) and attach the new `FRAGV-Setup-1.0.16.exe`. The Download buttons pick it up automatically.
3. Optionally update the changelog and version on the site: `node build.js --from ../fragv-desktop/renderer/index.html`, then commit. Vercel redeploys on every push.
