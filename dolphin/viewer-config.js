// 生徒の閲覧ページ（dist-viewer/）用の設定。鍵や集計URLは入れない（公開ページなので）。
// 公開用シート「イルカ投票_生徒表示用」（リンクを知っている全員が閲覧可）。
// 中身は Apps Script（apps-script/tally.gs）が書く: [['state', 'hidden'], ['ゆうフィン', ''], …]
window.YUSHI_VIEWER_CONFIG = {
  sheet: { sheetId: '14lJ6PDL-8x4KwoNdaJJt8JGulbq9rqUI2kIPbMLAaQ4', gid: '0' },
};
