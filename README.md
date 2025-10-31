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
cd "\nextjs-profile"
npm install
npm run dev
```

Visit `http://localhost:3000` to verify the page renders correctly.

### Docker build & run commands

```cmd
cd "\nextjs-profile"
REM Ensure package-lock.json is present for reproducible builds
npm install --package-lock-only

docker build -t profile-web:latest .
docker run --rm -p 3000:3000 profile-web:latest
```

Open `http://localhost:3000` in the browser to confirm the containerized site works. Stop the container with `Ctrl+C` in the same terminal.


## 2. Python Arithmetic Container

- Project folder: `python-calculator`
- Entrypoint: `python-calculator/app.py`
- Container definition: `python-calculator/Dockerfile`

### Docker build & run commands

```cmd
cd "\python-calculator"
docker build -t python-calculator:latest .
docker run --rm -it python-calculator:latest
```

Provide two numbers when prompted to see their sum and product. The container uses Python 3.12 and flushes output immediately for a smooth interactive experience.
