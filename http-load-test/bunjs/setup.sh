#!/bin/bash
set -euo pipefail

if [ -f src/database.sqlite ]; then
    exit 0
fi

sqlite3 src/database.sqlite "VACUUM"
