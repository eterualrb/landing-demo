#!/usr/bin/env bash
# 部署 Bright & Tidy 落地页到 Vercel
#
#   ./deploy.sh              需要先登录（vercel login）
#   ./deploy.sh --temporary  免登录，生成临时部署，之后可 claim
set -euo pipefail

cd "$(dirname "$0")"

# Vercel CLI 只认 http(s) 代理，不认 socks5
export HTTPS_PROXY="${HTTPS_PROXY_HTTP:-http://127.0.0.1:8118}"
export HTTP_PROXY="$HTTPS_PROXY"
unset ALL_PROXY || true

if [ "${1:-}" = "--temporary" ]; then
  echo "→ 临时部署（免登录），完成后按提示 claim"
  npx --yes vercel@latest deploy --temporary
else
  npx --yes vercel@latest --prod --yes
fi
