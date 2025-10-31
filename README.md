# Assignment  – Software Containers

This workspace contains both parts of the Containerization assignment:

- A **Next.js profile site** packaged for Docker and ready to deploy on Vercel.
- A **Python CLI calculator** container that reads two numbers and reports their addition and multiplication.

Update the placeholder content (university name, contact info, and profile photo) before submitting.

---

## 1. Profile Web Page (Next.js + Docker + Vercel)

- Project folder: `nextjs-profile`
- Main source file: `nextjs-profile/app/page.tsx`
- Container definition: `nextjs-profile/Dockerfile`

### Local setup

```cmd
cd "c:\Users\Khaled\Documents\Personal Projects\hegazy\nextjs-profile"
npm install
npm run dev
```

Visit `http://localhost:3000` to verify the page renders correctly. Replace the placeholder university name, contact links, and add a real photo as `public/profile.jpg`.

### Docker build & run commands

```cmd
cd "c:\Users\Khaled\Documents\Personal Projects\hegazy\nextjs-profile"
REM Ensure package-lock.json is present for reproducible builds
npm install --package-lock-only

docker build -t profile-web:latest .
docker run --rm -p 3000:3000 profile-web:latest
```

Open `http://localhost:3000` in the browser to confirm the containerized site works. Stop the container with `Ctrl+C` in the same terminal.

### Deploying to Vercel

1. Sign in to Vercel and create a new project from this folder or push it to GitHub and import it.
2. When prompted, use the default Next.js build settings (`npm install`, `npm run build`, output directory `.next`).
3. After deployment, Vercel provides a live URL such as `https://your-vercel-subdomain.vercel.app`.
4. Record that public URL for submission:
   - **Web page link:** `https://your-vercel-subdomain.vercel.app`

> Vercel automatically rebuilds whenever you push updates to the linked repository.

---

## 2. Python Arithmetic Container

- Project folder: `python-calculator`
- Entrypoint: `python-calculator/app.py`
- Container definition: `python-calculator/Dockerfile`

### Docker build & run commands

```cmd
cd "c:\Users\Khaled\Documents\Personal Projects\hegazy\python-calculator"
docker build -t python-calculator:latest .
docker run --rm -it python-calculator:latest
```

Provide two numbers when prompted to see their sum and product. The container uses Python 3.12 and flushes output immediately for a smooth interactive experience.

---

## Submission Checklist

- [ ] Update the profile page with accurate personal information and photo.
- [ ] Run both containers locally to verify functionality.
- [ ] Deploy the Next.js site to Vercel and capture the live URL.
- [ ] Submit:
  - The Dockerfiles (already provided in this repository).
  - The exact Docker commands from the sections above.
  - The public Vercel link to your profile page.
