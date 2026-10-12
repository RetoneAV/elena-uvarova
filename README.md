# Elena Uvarova

Portfolio site for [elenauvarova.com](https://elenauvarova.com). Elena is a London-based creative producer working across immersive installations, light, and landmark projection.

The visual system follows the black, white, and gold type of [Skye Von’s about page](https://www.skyevon.com/about): Unbounded for headings, Space Grotesk for text. The projects index follows the large two-column tiles on [Tom Lebon’s projects page](https://www.tomlebon.com/projects).

## Run it locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Pages

- Home
- About
- Projects, with a page for each project
- Skills & Services
- Work with me
- Contact

## Edit the copy

All of the words live in [`lib/content.ts`](lib/content.ts). Change a sentence there, save, and the site updates.

## Add project photographs

Each project currently uses an original colour study. To use a photograph:

1. Put the image in `public/projects/`, for example `public/projects/soma-sleep-lab.jpg`.
2. In `lib/content.ts`, set `image: "/projects/soma-sleep-lab.jpg"` on that project.

## CV

There is no CV file in the repo yet. The “Request my CV” buttons open an email to elenauvarova@me.com. When you have a PDF, add it as `public/elena-uvarova-cv.pdf` and point those buttons at `/elena-uvarova-cv.pdf`.

## Put this on GitHub under RetoneAV

This workspace does not have access to the RetoneAV GitHub account, so the repo has to be created from your machine.

1. Install the [GitHub CLI](https://cli.github.com/) and sign in as RetoneAV:

   ```bash
   gh auth login
   ```

2. From this project folder:

   ```bash
   gh repo create RetoneAV/elena-uvarova --public --source=. --remote=github --push --description "Portfolio website for Elena Uvarova"
   ```

3. On the computer where you want to keep working:

   ```bash
   git clone https://github.com/RetoneAV/elena-uvarova.git
   cd elena-uvarova
   npm install
   npm run dev
   ```

Edit locally, then `git add`, `git commit`, and `git push` to send the changes back to GitHub.
