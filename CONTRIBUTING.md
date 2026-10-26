# Contributing

Thanks for looking. NextFloor is free and open source out of conviction, and every contribution keeps it that way: whatever you add belongs to everyone, under the MIT licence. It is a small project and is built with AI assistance (see the README), so contributions are welcome the same way: written by you, with a tool, or both. Please just say in the pull request if an AI wrote a good part of it, and make sure you have understood and run what you send.

## Before a pull request

```bash
cd frontend
npm install
npm run typecheck
npm test
npm run build      # the built bundles are committed; CI fails when they are stale
cd ..
ruff check . && ruff format --check .
pytest -q          # the Home Assistant side
```

- Keep a change small and say what it is for. A screenshot helps for anything you can see (`npm run screenshot` renders the preview).
- New furniture or vehicles: the built-in packs come from `tools/build_packs.py`; the format of your own packs is in [docs/packs.md](docs/packs.md). Please only use sizes and shapes you made yourself, never another project's files or a brand's own 3D models.
- 3D models you own (for example a car): they stay on your own Home Assistant and never go into this repository, see [docs/models.md](docs/models.md).

## Translations

German and English are built in. Further languages are files in `frontend/lang/<code>.json` (keys as in `frontend/src/i18n.ts`), fetched only when Home Assistant runs in that language; a key a file lacks shows in English. They are community-maintained: new texts land in German and English first. Pack items and paint colours are named under `pack:<pack>:<item>`, `packname:<pack>` and `color:<colour>`. The integration's own texts are in `custom_components/nextfloor/translations/`.

## Ideas and bugs

[Discussions](https://github.com/therealMRBK/NextFloor/discussions) for ideas and questions, [issues](https://github.com/therealMRBK/NextFloor/issues/new/choose) for bugs. For a bug, the version, your Home Assistant version and what you expected help most.
