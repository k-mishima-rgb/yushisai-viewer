#!/bin/zsh
# 生徒用の「見るだけ」ページを、2つのアプリのビルド結果から取り込む。
# 使い方: 各アプリで npm run build したあと ./scripts/sync.sh → コミット → push（GitHub Pages に反映）
set -euo pipefail
ROOT="${0:A:h:h}"
DOLPHIN="$HOME/Desktop/勇志祭/yushi-dolphin-voting/dist-viewer"
TREE="$HOME/projects/yushisai-message-tree/dist-viewer"

for src in "$DOLPHIN" "$TREE"; do
  [[ -f "$src/index.html" ]] || { echo "見つかりません: $src（先に npm run build）" >&2; exit 1; }
done
# 鍵が紛れ込んでいたら止める（配信PC用の finale-key.js は公開しない）
if grep -rqs "YUSHI_FINALE_KEY = " "$DOLPHIN" "$TREE"; then
  echo "鍵らしきものが含まれています。公開を中止します" >&2; exit 1
fi

rsync -a --delete "$DOLPHIN/" "$ROOT/dolphin/"
rsync -a --delete "$TREE/" "$ROOT/tree/"

# 検索エンジンに載せない（GitHub Pages のプロジェクトサイトは robots.txt を置けないので各ページに meta を入れる）
NOINDEX='<meta name="robots" content="noindex,nofollow">'
for page in "$ROOT/index.html" "$ROOT/dolphin/index.html" "$ROOT/tree/index.html"; do
  grep -q 'name="robots"' "$page" || perl -0pi -e "s{(<meta charset=[^>]*>)}{\$1\n  $NOINDEX}i" "$page"
  grep -q 'name="robots" content="noindex' "$page" || { echo "noindex を入れられませんでした: $page" >&2; exit 1; }
done
echo "取り込みました: dolphin/ と tree/（noindex 済み）"
