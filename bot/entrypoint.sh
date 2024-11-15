#!/bin/sh
rm -f /app/.wwebjs_auth/session/SingletonLock

npm install
rm -rf /app/node_modules/puppeteer-core/.local-chromium

exec "$@"