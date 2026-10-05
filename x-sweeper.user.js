// ==UserScript==
// @name         X清道夫 / X Sweeper
// @namespace    local.x-sweeper
// @version      1.2.4
// @homepageURL  https://github.com/YociLam/XSweeper
// @updateURL    https://raw.githubusercontent.com/YociLam/XSweeper/main/x-sweeper.user.js
// @downloadURL  https://raw.githubusercontent.com/YociLam/XSweeper/main/x-sweeper.user.js
// @icon         data:image/png;base64,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
// @icon64       data:image/png;base64,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
// @description  Clean your own posts on the open X timeline. X清道夫：按类型、时间和关键词清理当前页。
// @match        *://*.x.com/*
// @match        *://x.com/*
// @match        *://*.twitter.com/*
// @match        *://twitter.com/*
// @run-at       document-idle
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @connect      raw.githubusercontent.com
// @noframes
// ==/UserScript==

(function () {
  'use strict';

  if (window.top !== window.self) return;

  const CONFIG = {
    minGapMs: 550,
    bands: [
      { p: 0.78, min: 550, max: 1200 },
      { p: 0.15, min: 1200, max: 2200 },
      { p: 0.05, min: 2800, max: 5000 },
      { p: 0.02, min: 6000, max: 11000 },
    ],
    extraEveryMin: 16,
    extraEveryMax: 34,
    extraPauseMin: 3500,
    extraPauseMax: 9000,
    backoffMs: [22000, 48000, 100000, 170000],
    backoffJitter: 0.55,
    maxLimitHits: 4,
  };

  const TIME_PRESETS = ['all', 'last7', 'last30', 'last365', 'older1', 'older3', 'older5', 'older10', 'custom'];
  const CUSTOM_MODES = ['between', 'before', 'after'];

  const STR = {
    en: {
      title: 'X Sweeper', post: 'Posts', reply: 'Replies', quote: 'Quotes', repost: 'Reposts',
      keepPinned: 'Keep pinned', time: 'Time', customHow: 'Custom range',
      all: 'Any time', last7: 'Last 7 days', last30: 'Last 30 days', last365: 'Last year',
      older1: 'Older than 1 year', older3: 'Older than 3 years', older5: 'Older than 5 years', older10: 'Older than 10 years', custom: 'Custom',
      between: 'Between', before: 'Before', after: 'After', from: 'From', to: 'To', onDate: 'Date',
      keywords: 'Keywords', perLine: 'One per line', kwOff: 'Any', kwInclude: 'Only these', kwExclude: 'Keep these',
      more: 'More', media: 'Media', mediaAll: 'Any', mediaWith: 'With photo or video', mediaWithout: 'Text only',
      likes: 'Keep if likes are above', chars: 'Delete only if at least this long',
      onlyLink: 'Links only', onlyTag: 'Hashtags only', caseSensitive: 'Match case',
      alsoReplies: 'On your profile, continue to replies',
      confirm: 'Matching posts with a delete or undo control will be removed. This cannot be undone.',
      yes: 'Clean', back: 'Back', start: 'Start', stop: 'Stop', fold: 'Hide', expand: 'Show',
      placeholder: 'Leave empty to ignore keywords',
      dateHint: 'Type a date, such as 2026-10-05. / and . work too.',
      note: 'Deletes one mounted post at a time, then steps down. A second pass catches matches that were skipped.',
      ready: 'Press Start. Only posts with a delete or undo control are touched.',
      needWords: 'Choose “Only these” and enter at least one keyword.',
      needDate: 'Type the date as 2026-10-05.', needRange: 'Type both dates as 2026-10-05.', needOrder: 'The start date has to be on or before the end date.', needType: 'Choose at least one type.',
      deletedOne: 'Deleted one. Total {n}', undoneOne: 'Undid one repost. Total {n}',
      scanning: 'No new post in this row. Stepping down ({n}/8)',
      goReplies: 'This page is done. Opening replies.', onReplies: 'On replies. Continuing.',
      noTweets: 'No posts on this page yet. Scroll the timeline into view, then start again.',
      started: 'Started. Stay on the timeline.', stopping: 'Stopping after the current post.',
      stopped: 'Stopped. Press Start to continue on this page.',
      donePage: 'Finished this pass. Deleted {n}. Still unmatched: {missed}.',
      rateLimitStop: 'Rate limited {n} times. Wait a few minutes, then start again.',
      cancelled: 'Cancelled.', resumeReplies: 'Continuing on replies.',
      next: 'Next in {n}s', pause: 'Pausing {n}s', rateWait: 'Rate limited. Waiting {n}s',
      recover: 'Scanning from the top for matches that were not deleted.',
      stats: 'Deleted {deleted} · Skipped {skipped} · Missed {missed}',
      rate: ' · about {n}/min',
      updateReady: 'Version {v} is ready. Click to install.',
      checkUpdate: 'Check for updates',
      updateCurrent: 'Version {v} is already current.',
      updateFail: 'Could not check for updates.',
    },
    'zh-Hans': {
      title: 'X清道夫', post: '原创', reply: '回复', quote: '引用', repost: '转帖',
      keepPinned: '保留置顶', time: '时间', customHow: '自定义方式',
      all: '不限', last7: '最近 7 天', last30: '最近 30 天', last365: '最近 1 年',
      older1: '1 年前', older3: '3 年前', older5: '5 年前', older10: '10 年前', custom: '自定义',
      between: '介于', before: '早于', after: '晚于', from: '开始', to: '结束', onDate: '日期',
      keywords: '关键词', perLine: '一行一个词', kwOff: '不限', kwInclude: '含有才删', kwExclude: '含有就留',
      more: '更多条件', media: '媒体', mediaAll: '不限', mediaWith: '仅含图片或视频', mediaWithout: '仅纯文字',
      likes: '点赞高于这个数就留下，留空不限', chars: '正文至少多少字才删，留空不限',
      onlyLink: '仅含链接', onlyTag: '仅含话题', caseSensitive: '关键词区分大小写',
      alsoReplies: '在自己的主页时，帖子处理完继续回复页',
      confirm: '符合条件、并且页面上有删除或撤销转帖入口的帖会被处理，不能恢复。',
      yes: '确认清理', back: '返回', start: '开始清理', stop: '停止', fold: '收起', expand: '展开',
      placeholder: '留空则不按词筛选',
      dateHint: '直接输入，例如 2026-10-05，斜线或点也可以。',
      note: '每次只删当前列表最上面的一条，再小步下移。扫完会从顶部再找符合条件但没删掉的。',
      ready: '点「开始清理」。只处理带删除或撤销转帖入口的帖。',
      needWords: '选了「含有才删」，请先写上关键词。',
      needDate: '日期写成 2026-10-05。', needRange: '起止都写成 2026-10-05。', needOrder: '开始日期要早于或等于结束日期。', needType: '请至少选择一种帖子。',
      deletedOne: '刚删掉一条，累计 {n}', undoneOne: '刚撤销一条转帖，累计 {n}',
      scanning: '这一行没有新帖，向下一步（{n}/8）',
      goReplies: '这一页处理完了，接着去回复', onReplies: '到回复页了，继续',
      noTweets: '这一页还没看到帖子。滚到时间线出来后再按开始。',
      started: '开始了。清理时不要点进单条帖子。', stopping: '正在停下，当前这一条处理完就停。',
      stopped: '已停止。留在这页再按开始可以继续。',
      donePage: '这一遍结束。累计删除 {n}。符合条件但未删除 {missed}。',
      rateLimitStop: '连续限速 {n} 次，先停下。过几分钟再按开始。',
      cancelled: '已取消。', resumeReplies: '接着处理回复。',
      next: '下一条 {n} 秒', pause: '停一下 {n} 秒', rateWait: '碰到限速，休息 {n} 秒',
      recover: '回到顶部，查找符合条件但没删掉的帖。',
      stats: '已删 {deleted} · 跳过 {skipped} · 未删除 {missed}',
      rate: ' · 约 {n} 条/分',
      updateReady: '有新版本 {v}。点这条通知安装。',
      checkUpdate: '检查更新',
      updateCurrent: '当前已是 {v}。',
      updateFail: '暂时没能检查更新。',
    },
    'zh-Hant': {
      title: 'X清道夫', post: '原創', reply: '回覆', quote: '引用', repost: '轉帖',
      keepPinned: '保留置頂', time: '時間', customHow: '自訂方式',
      all: '不限', last7: '最近 7 天', last30: '最近 30 天', last365: '最近 1 年',
      older1: '1 年前', older3: '3 年前', older5: '5 年前', older10: '10 年前', custom: '自訂',
      between: '介於', before: '早於', after: '晚於', from: '開始', to: '結束', onDate: '日期',
      keywords: '關鍵詞', perLine: '一行一個詞', kwOff: '不限', kwInclude: '含有才刪', kwExclude: '含有就留',
      more: '更多條件', media: '媒體', mediaAll: '不限', mediaWith: '僅含圖片或影片', mediaWithout: '僅純文字',
      likes: '讚數高於這個數就留下，留空不限', chars: '正文至少多少字才刪，留空不限',
      onlyLink: '僅含連結', onlyTag: '僅含話題', caseSensitive: '關鍵詞區分大小寫',
      alsoReplies: '在自己的主頁時，帖子處理完繼續回覆頁',
      confirm: '符合條件、而且頁面上有刪除或取消轉帖入口的帖會被處理，不能復原。',
      yes: '確認清理', back: '返回', start: '開始清理', stop: '停止', fold: '收起', expand: '展開',
      placeholder: '留空則不按詞篩選',
      dateHint: '直接輸入，例如 2026-10-05，斜線或點也可以。',
      note: '每次只刪目前列表最上面的一則，再小步下移。掃完會從頂部再找符合條件但沒刪掉的。',
      ready: '點「開始清理」。只處理帶刪除或取消轉帖入口的帖。',
      needWords: '選了「含有才刪」，請先寫上關鍵詞。',
      needDate: '日期寫成 2026-10-05。', needRange: '起迄都寫成 2026-10-05。', needOrder: '開始日期要早於或等於結束日期。', needType: '請至少選擇一種帖子。',
      deletedOne: '剛刪掉一則，累計 {n}', undoneOne: '剛取消一則轉帖，累計 {n}',
      scanning: '這一列沒有新帖，向下一步（{n}/8）',
      goReplies: '這一頁處理完了，接著去回覆', onReplies: '到回覆頁了，繼續',
      noTweets: '這一頁還沒看到帖子。滾到時間線出來後再按開始。',
      started: '開始了。清理時不要點進單則帖子。', stopping: '正在停下，目前這一則處理完就停。',
      stopped: '已停止。留在這頁再按開始可以繼續。',
      donePage: '這一遍結束。累計刪除 {n}。符合條件但未刪除 {missed}。',
      rateLimitStop: '連續限速 {n} 次，先停下。過幾分鐘再按開始。',
      cancelled: '已取消。', resumeReplies: '接著處理回覆。',
      next: '下一則 {n} 秒', pause: '停一下 {n} 秒', rateWait: '碰到限速，休息 {n} 秒',
      recover: '回到頂部，尋找符合條件但沒刪掉的帖。',
      stats: '已刪 {deleted} · 跳過 {skipped} · 未刪除 {missed}',
      rate: ' · 約 {n} 則/分',
      updateReady: '有新版本 {v}。點這則通知安裝。',
      checkUpdate: '檢查更新',
      updateCurrent: '目前已是 {v}。',
      updateFail: '暫時沒能檢查更新。',
    },
    ja: {
      title: 'X Sweeper', post: '投稿', reply: '返信', quote: '引用', repost: 'リポスト',
      keepPinned: '固定を残す', time: '期間', customHow: '指定方法',
      all: 'すべて', last7: '直近7日', last30: '直近30日', last365: '直近1年',
      older1: '1年以上前', older3: '3年以上前', older5: '5年以上前', older10: '10年以上前', custom: '指定',
      between: '期間内', before: 'より前', after: 'より後', from: '開始', to: '終了', onDate: '日付',
      keywords: 'キーワード', perLine: '1行に1語', kwOff: '指定なし', kwInclude: '含むものだけ', kwExclude: '含むものは残す',
      more: '詳細', media: 'メディア', mediaAll: 'すべて', mediaWith: '画像または動画', mediaWithout: 'テキストのみ',
      likes: 'いいね数がこれより多いものは残す', chars: 'この文字数以上だけ削除',
      onlyLink: 'リンク付きのみ', onlyTag: 'ハッシュタグ付きのみ', caseSensitive: '大文字小文字を区別',
      alsoReplies: 'プロフィールでは返信も続ける',
      confirm: '条件に合い、削除またはリポスト解除がある投稿を処理します。元に戻せません。',
      yes: '実行', back: '戻る', start: '開始', stop: '停止', fold: '閉じる', expand: '開く',
      placeholder: '空ならキーワードでは絞りません',
      dateHint: '2026-10-05 のように入力。/ や . も使えます。',
      note: '表示中のいちばん上から1件ずつ削除し、少しずつ下へ進みます。最後に上から漏れを再確認します。',
      ready: '開始を押してください。削除またはリポスト解除がある投稿だけを処理します。',
      needWords: '「含むものだけ」にはキーワードが必要です。',
      needDate: '日付は 2026-10-05 の形で入力してください。', needRange: '開始と終了を 2026-10-05 の形で入力してください。', needOrder: '開始日は終了日以前にしてください。', needType: '種類を1つ以上選んでください。',
      deletedOne: '1件削除。合計 {n}', undoneOne: 'リポストを1件解除。合計 {n}',
      scanning: '新しい投稿がありません。下へ移動（{n}/8）',
      goReplies: 'このページは完了。返信を開きます。', onReplies: '返信ページで続行。',
      noTweets: '投稿がまだ見えません。タイムラインを表示してから開始してください。',
      started: '開始しました。投稿ページは開かないでください。', stopping: 'この1件のあと停止します。',
      stopped: '停止しました。このページで再開できます。',
      donePage: '一巡完了。削除 {n}。条件一致で未削除 {missed}。',
      rateLimitStop: '制限が {n} 回続きました。少し待って再開してください。',
      cancelled: 'キャンセルしました。', resumeReplies: '返信の処理を続けます。',
      next: '次まで {n} 秒', pause: '休止 {n} 秒', rateWait: '制限中。{n} 秒待ちます',
      recover: '上から、条件に合う未削除を探します。',
      stats: '削除 {deleted} · スキップ {skipped} · 未削除 {missed}',
      rate: ' · 約 {n}/分',
      updateReady: '新しいバージョン {v} があります。クリックでインストール。',
      checkUpdate: '更新を確認',
      updateCurrent: 'バージョン {v} は最新です。',
      updateFail: '更新を確認できませんでした。',
    },
    ko: {
      title: 'X Sweeper', post: '게시물', reply: '답글', quote: '인용', repost: '리포스트',
      keepPinned: '고정 유지', time: '기간', customHow: '지정 방식',
      all: '전체', last7: '최근 7일', last30: '최근 30일', last365: '최근 1년',
      older1: '1년 이전', older3: '3년 이전', older5: '5년 이전', older10: '10년 이전', custom: '직접 지정',
      between: '사이', before: '이전', after: '이후', from: '시작', to: '끝', onDate: '날짜',
      keywords: '키워드', perLine: '한 줄에 하나', kwOff: '제한 없음', kwInclude: '포함할 때만', kwExclude: '포함하면 유지',
      more: '더보기', media: '미디어', mediaAll: '전체', mediaWith: '사진 또는 동영상', mediaWithout: '텍스트만',
      likes: '좋아요가 이 수보다 많으면 유지', chars: '이 글자 수 이상만 삭제',
      onlyLink: '링크 포함만', onlyTag: '해시태그만', caseSensitive: '대소문자 구분',
      alsoReplies: '내 프로필이면 답글도 계속',
      confirm: '조건에 맞고 삭제 또는 리포스트 취소가 있는 게시물을 처리합니다. 되돌릴 수 없습니다.',
      yes: '정리', back: '뒤로', start: '시작', stop: '중지', fold: '접기', expand: '펼치기',
      placeholder: '비우면 키워드로 거르지 않습니다',
      dateHint: '2026-10-05처럼 입력하세요. / 와 . 도 됩니다.',
      note: '현재 목록의 맨 위부터 하나씩 지운 뒤 조금 아래로 이동합니다. 끝나면 위에서 빠뜨린 항목을 다시 찾습니다.',
      ready: '시작을 누르세요. 삭제 또는 리포스트 취소가 있는 게시물만 처리합니다.',
      needWords: '「포함할 때만」에는 키워드가 필요합니다.',
      needDate: '날짜는 2026-10-05 형식으로 입력하세요.', needRange: '시작과 끝을 2026-10-05 형식으로 입력하세요.', needOrder: '시작 날짜는 끝 날짜와 같거나 이전이어야 합니다.', needType: '종류를 하나 이상 선택하세요.',
      deletedOne: '1개 삭제. 합계 {n}', undoneOne: '리포스트 1개 취소. 합계 {n}',
      scanning: '새 게시물이 없습니다. 아래로 이동 ({n}/8)',
      goReplies: '이 페이지는 끝났습니다. 답글로 이동합니다.', onReplies: '답글 페이지에서 계속합니다.',
      noTweets: '게시물이 아직 없습니다. 타임라인을 연 뒤 시작하세요.',
      started: '시작했습니다. 개별 게시물은 열지 마세요.', stopping: '현재 항목 다음 중지합니다.',
      stopped: '중지했습니다. 이 페이지에서 다시 시작할 수 있습니다.',
      donePage: '한 바퀴 완료. 삭제 {n}. 조건 일치지만 미삭제 {missed}.',
      rateLimitStop: '제한이 {n}회 계속되었습니다. 잠시 후 다시 시작하세요.',
      cancelled: '취소했습니다.', resumeReplies: '답글 처리를 계속합니다.',
      next: '다음까지 {n}초', pause: '잠시 멈춤 {n}초', rateWait: '제한됨. {n}초 대기',
      recover: '맨 위에서 조건에 맞지만 지우지 못한 항목을 찾습니다.',
      stats: '삭제 {deleted} · 건너뜀 {skipped} · 미삭제 {missed}',
      rate: ' · 약 {n}/분',
      updateReady: '새 버전 {v}이 있습니다. 알림을 누르면 설치합니다.',
      checkUpdate: '업데이트 확인',
      updateCurrent: '현재 버전은 {v}입니다.',
      updateFail: '업데이트를 확인하지 못했습니다.',
    },
  };

  function pageLang() {
    const lang = `${document.documentElement.lang || ''} ${navigator.language || ''}`.toLowerCase();
    if (lang.includes('zh')) return /tw|hk|hant|mo/.test(lang) ? 'zh-Hant' : 'zh-Hans';
    if (lang.includes('ja')) return 'ja';
    if (lang.includes('ko')) return 'ko';
    return 'en';
  }

  function t(key, vars) {
    const pack = STR[pageLang()] || STR.en;
    let text = pack[key] || STR.en[key] || key;
    if (vars) {
      for (const [name, value] of Object.entries(vars)) text = text.replaceAll(`{${name}}`, String(value));
    }
    return text;
  }

  const SS = {
    resume: 'xsweeper.resume',
    switched: 'xsweeper.switched',
    count: 'xsweeper.count',
    settings: 'xsweeper.settings',
  };

  const defaultSettings = {
    types: { post: true, reply: true, quote: true, repost: false },
    keepPinned: true,
    alsoReplies: true,
    timePreset: 'all',
    customMode: 'between',
    timeStart: '',
    timeEnd: '',
    keywordMode: 'off',
    keywords: '',
    media: 'all',
    likesAbove: '',
    minChars: '',
    onlyLink: false,
    onlyTag: false,
    caseSensitive: false,
    ui: { collapsed: false, floating: false, left: null, top: null },
  };

  function loadSettings() {
    const today = todayStamp();
    const finish = (value) => {
      delete value.lang;
      if (!parseDay(value.timeStart)) value.timeStart = today;
      if (!parseDay(value.timeEnd)) value.timeEnd = today;
      return value;
    };
    try {
      const saved = JSON.parse(localStorage.getItem(SS.settings) || localStorage.getItem('tlClean.settings') || 'null');
      if (!saved || typeof saved !== 'object') return finish(structuredClone(defaultSettings));
      const timePreset = TIME_PRESETS.includes(saved.timePreset)
        ? saved.timePreset
        : (saved.timeMode === 'between' && saved.timeStart && saved.timeEnd ? 'custom' : 'all');
      return finish({
        ...structuredClone(defaultSettings),
        ...saved,
        timePreset,
        customMode: CUSTOM_MODES.includes(saved.customMode) ? saved.customMode : 'between',
        types: { ...defaultSettings.types, ...(saved.types || {}) },
        ui: { ...defaultSettings.ui, ...(saved.ui || {}) },
      });
    } catch (error) {
      return finish(structuredClone(defaultSettings));
    }
  }

  const settings = loadSettings();
  const state = {
    running: false,
    confirming: false,
    recovered: false,
    skipIds: new Set(),
    doneIds: new Set(),
    holdIds: new Set(),
    missed: new Map(),
    attempts: new Map(),
    skipped: 0,
    limitHits: 0,
    stall: 0,
    nextExtraAt: 0,
    deletedSinceExtra: 0,
    recent: [],
    status: '',
    dragging: false,
  };
  state.status = t('ready');

  function between(min, max) {
    return min + Math.random() * (max - min);
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function gapMs() {
    let roll = Math.random();
    let band = CONFIG.bands[CONFIG.bands.length - 1];
    for (const item of CONFIG.bands) {
      roll -= item.p;
      if (roll <= 0) {
        band = item;
        break;
      }
    }
    const span = band.max - band.min;
    const wobble = (Math.random() - 0.5) * span * 0.12;
    return Math.round(Math.max(CONFIG.minGapMs, band.min + Math.random() * span + wobble));
  }

  function backoffMs(hit) {
    const base = CONFIG.backoffMs[Math.min(Math.max(hit, 1) - 1, CONFIG.backoffMs.length - 1)];
    return Math.round(base * (1 + Math.random() * CONFIG.backoffJitter));
  }

  function scheduleExtra() {
    state.deletedSinceExtra = 0;
    state.nextExtraAt = Math.floor(between(CONFIG.extraEveryMin, CONFIG.extraEveryMax + 1));
  }

  function saveSettings() {
    try { localStorage.setItem(SS.settings, JSON.stringify(settings)); } catch (error) { /* ignore */ }
  }

  function sessionCount() {
    return Number(sessionStorage.getItem(SS.count) || '0');
  }

  function bumpCount() {
    const next = sessionCount() + 1;
    sessionStorage.setItem(SS.count, String(next));
    state.recent.push(Date.now());
    const cutoff = Date.now() - 60000;
    while (state.recent.length && state.recent[0] < cutoff) state.recent.shift();
    return next;
  }

  function rateSuffix() {
    const cutoff = Date.now() - 60000;
    const recent = state.recent.filter((stamp) => stamp >= cutoff).length;
    return recent >= 3 ? t('rate', { n: recent }) : '';
  }

  function setStatus(text) {
    state.status = text;
    const status = document.getElementById('xs-status');
    const stats = document.getElementById('xs-stats');
    const button = document.getElementById('xs-go');
    if (status) status.textContent = text;
    if (stats) {
      stats.textContent = t('stats', {
        deleted: sessionCount(),
        skipped: state.skipped,
        missed: state.missed.size,
      }) + rateSuffix();
    }
    if (button) button.textContent = state.running ? t('stop') : t('start');
  }

  async function waitMs(ms, key) {
    const end = Date.now() + ms;
    while (state.running && Date.now() < end) {
      const left = Math.max(1, Math.ceil((end - Date.now()) / 1000));
      if (key) setStatus(t(key, { n: left }));
      await sleep(Math.min(250, end - Date.now()));
    }
  }

  async function waitFor(fn, timeout) {
    const start = Date.now();
    while (Date.now() - start < timeout) {
      if (!state.running) return null;
      const value = fn();
      if (value) return value;
      await sleep(60);
    }
    return null;
  }

  function parseCount(label) {
    const compact = String(label || '').replace(/,/g, '').replace(/\s+/g, '');
    const match = compact.match(/(\d+(?:\.\d+)?)(万|億|亿|[kKmM])?/);
    if (!match) return 0;
    let value = Number(match[1]);
    const unit = match[2] || '';
    if (unit === '万') value *= 10000;
    else if (unit === '亿' || unit === '億') value *= 100000000;
    else if (unit.toLowerCase() === 'k') value *= 1000;
    else if (unit.toLowerCase() === 'm') value *= 1000000;
    return Math.round(value);
  }

  function todayStamp(date = new Date()) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${date.getFullYear()}-${month}-${day}`;
  }

  function parseDay(value) {
    const text = String(value || '').trim();
    const split = text.match(/^(\d{4})[-/.年](\d{1,2})[-/.月](\d{1,2})日?$/);
    const compact = text.match(/^(\d{4})(\d{2})(\d{2})$/);
    const parts = split || compact;
    if (!parts) return null;
    const year = Number(parts[1]);
    const month = Number(parts[2]);
    const day = Number(parts[3]);
    if (year < 2006 || year > 2100 || month < 1 || month > 12 || day < 1 || day > 31) return null;
    const date = new Date(year, month - 1, day);
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return null;
    return date;
  }

  function dayStart(value) {
    const date = parseDay(value);
    if (!date) return null;
    date.setHours(0, 0, 0, 0);
    return date;
  }

  function dayEnd(value) {
    const date = parseDay(value);
    if (!date) return null;
    date.setHours(23, 59, 59, 999);
    return date;
  }

  function timeWindow(preset, customMode, startValue, endValue, now) {
    const day = 86400000;
    if (preset === 'last7') return { after: new Date(now - 7 * day) };
    if (preset === 'last30') return { after: new Date(now - 30 * day) };
    if (preset === 'last365') return { after: new Date(now - 365 * day) };
    if (preset === 'older1') return { before: new Date(now - 365 * day) };
    if (preset === 'older3') return { before: new Date(now - 365 * 3 * day) };
    if (preset === 'older5') return { before: new Date(now - 365 * 5 * day) };
    if (preset === 'older10') return { before: new Date(now - 365 * 10 * day) };
    if (preset !== 'custom') return { any: true };
    if (customMode === 'before') {
      const cut = dayStart(endValue);
      return cut ? { before: cut } : null;
    }
    if (customMode === 'after') {
      const cut = dayEnd(startValue);
      return cut ? { after: cut } : null;
    }
    const start = dayStart(startValue);
    const end = dayEnd(endValue);
    return start && end ? { after: start, before: end } : null;
  }

  function keywordList() {
    return settings.keywords.split(/\n/).map((item) => item.trim()).filter(Boolean);
  }

  function loggedInHandle() {
    const direct = document.querySelector('a[data-testid="AppTabBar_Profile_Link"]');
    const labeled = [...document.querySelectorAll('a[aria-label]')].find((anchor) =>
      /profile|个人资料|個人資料|主页|主頁|プロフィール|프로필/i.test(anchor.getAttribute('aria-label') || '')
    );
    const href = direct?.getAttribute('href') || labeled?.getAttribute('href') || '';
    const match = href.match(/^\/([A-Za-z0-9_]{1,15})\/?$/);
    return match ? match[1] : '';
  }

  function pageHandle() {
    const match = location.pathname.match(/^\/([A-Za-z0-9_]{1,15})(?:\/(with_replies|replies))?\/?$/i);
    if (!match) return '';
    const reserved = new Set(['home', 'explore', 'search', 'notifications', 'messages', 'settings', 'i', 'compose', 'intent', 'all']);
    if (reserved.has(match[1].toLowerCase())) return '';
    return match[1];
  }

  function onOwnProfile() {
    const page = pageHandle();
    const me = loggedInHandle();
    return Boolean(page && me && page.toLowerCase() === me.toLowerCase());
  }

  function isRepliesPath() {
    return /\/(with_replies|replies)\/?$/i.test(location.pathname);
  }

  function tweetNodes() {
    const articles = [...document.querySelectorAll('article[data-testid="tweet"]')];
    const nodes = articles.length
      ? articles
      : [...document.querySelectorAll('[data-testid="tweet"]')].filter((el) => !el.parentElement?.closest('[data-testid="tweet"]'));
    return nodes.filter((article) => !article.closest('#xs-root, #tl-clean, #own-del-panel'));
  }

  function tweetId(article) {
    const time = article.querySelector('time');
    const timed = time?.closest('a[href*="/status/"]')?.getAttribute('href') || '';
    const preferred = timed.match(/\/status\/(\d+)/);
    if (preferred) return preferred[1];
    for (const anchor of article.querySelectorAll('a[href*="/status/"]')) {
      if (anchor.closest('[data-testid="tweetText"]')) continue;
      const match = anchor.getAttribute('href')?.match(/\/status\/(\d+)/);
      if (match) return match[1];
    }
    return '';
  }

  function articleHandle(article) {
    const scope = article.querySelector('[data-testid="User-Name"]') || article;
    for (const anchor of scope.querySelectorAll('a[href^="/"]')) {
      const match = anchor.getAttribute('href')?.match(/^\/([A-Za-z0-9_]{1,15})\/?$/);
      if (match) return match[1];
    }
    return '';
  }

  function tweetText(article) {
    return article.querySelector('[data-testid="tweetText"]')?.innerText || '';
  }

  function tweetDate(article) {
    const value = article.querySelector('time')?.getAttribute('datetime');
    if (!value) return null;
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function isPinned(article) {
    const text = article.querySelector('[data-testid="socialContext"]')?.innerText || '';
    return /pinned|置顶|置頂|釘選|钉选|固定|핀/i.test(text);
  }

  function isRepostContext(article) {
    const text = article.querySelector('[data-testid="socialContext"]')?.innerText || '';
    if (isPinned(article)) return false;
    return /repost|retweet|转帖|轉帖|转推|轉推|转发|轉發|リポスト|리포스트/i.test(text);
  }

  function isReply(article) {
    for (const anchor of article.querySelectorAll('a[href^="/"]')) {
      const parent = anchor.parentElement;
      if (!parent) continue;
      if (parent.closest('[data-testid="tweetText"], [role="group"], [data-testid="User-Name"]')) continue;
      const text = parent.innerText.replace(/\s+/g, ' ').trim();
      if (text.length < 100 && /^(replying to|回复|回覆|正在回复|返信先|답글)/i.test(text)) return true;
    }
    return false;
  }

  function isQuote(article) {
    if (article.querySelector('[data-testid="quoteTweet"], [data-testid="quoteTweetContainer"]')) return true;
    const own = tweetId(article);
    for (const el of article.querySelectorAll('[role="link"][href*="/status/"]')) {
      if (el.querySelector('time') || el.closest('[data-testid="User-Name"], [data-testid="tweetText"]')) continue;
      const match = (el.getAttribute('href') || '').match(/status\/(\d+)/);
      if (match && match[1] !== own) return true;
    }
    return false;
  }

  function kindsOf(article) {
    const me = loggedInHandle();
    const author = articleHandle(article);
    const repost = Boolean(article.querySelector('[data-testid="unretweet"]')) || isRepostContext(article);
    if (repost && me && author && author.toLowerCase() !== me.toLowerCase()) {
      return { post: false, reply: false, quote: false, repost: true };
    }
    const reply = isReply(article);
    const quote = isQuote(article);
    return { post: !reply && !quote, reply, quote, repost: false };
  }

  function hasMedia(article) {
    return Boolean(article.querySelector('[data-testid="tweetPhoto"], [data-testid="videoPlayer"], [data-testid="videoComponent"]'));
  }

  function likeCount(article) {
    const button = article.querySelector('[data-testid="like"], [data-testid="unlike"]');
    return parseCount(button?.getAttribute('aria-label') || '');
  }

  function wants(kinds) {
    return (kinds.post && settings.types.post)
      || (kinds.reply && settings.types.reply)
      || (kinds.quote && settings.types.quote)
      || (kinds.repost && settings.types.repost);
  }

  function passesTime(article) {
    const windowRange = timeWindow(settings.timePreset, settings.customMode, settings.timeStart, settings.timeEnd, Date.now());
    if (windowRange?.any) return true;
    if (!windowRange) return false;
    const when = tweetDate(article);
    if (!when) return false;
    if (windowRange.after && when < windowRange.after) return false;
    if (windowRange.before && when > windowRange.before) return false;
    return true;
  }

  function passesKeywords(article) {
    const words = keywordList();
    if (settings.keywordMode === 'off' || words.length === 0) return settings.keywordMode !== 'include';
    const raw = tweetText(article);
    const hay = settings.caseSensitive ? raw : raw.toLowerCase();
    const hit = words.some((word) => hay.includes(settings.caseSensitive ? word : word.toLowerCase()));
    if (settings.keywordMode === 'include') return hit;
    return !hit;
  }

  function passesExtra(article) {
    const text = tweetText(article);
    if (settings.media === 'with' && !hasMedia(article)) return false;
    if (settings.media === 'without' && hasMedia(article)) return false;
    if (settings.likesAbove !== '' && likeCount(article) > Number(settings.likesAbove)) return false;
    if (settings.minChars !== '' && [...text].length < Number(settings.minChars)) return false;
    const body = article.querySelector('[data-testid="tweetText"]');
    if (settings.onlyLink && !body?.querySelector('a[href]')) return false;
    if (settings.onlyTag && !body?.querySelector('a[href*="/hashtag/"]')) return false;
    return true;
  }

  function decide(article) {
    const me = loggedInHandle();
    const author = articleHandle(article);
    const others = Boolean(me && author && author.toLowerCase() !== me.toLowerCase());
    const kinds = kindsOf(article);
    if (others && !(kinds.repost && settings.types.repost)) return 'skip';
    if (settings.keepPinned && isPinned(article)) return 'skip';
    if (!wants(kinds)) return 'skip';
    if (!passesTime(article) || !passesKeywords(article) || !passesExtra(article)) return 'skip';
    if (kinds.repost && others) return 'undo';
    return 'delete';
  }

  function filtersReady() {
    if (settings.keywordMode === 'include' && keywordList().length === 0) return t('needWords');
    if (settings.timePreset === 'custom' && settings.customMode === 'before' && !dayStart(settings.timeEnd)) return t('needDate');
    if (settings.timePreset === 'custom' && settings.customMode === 'after' && !dayStart(settings.timeStart)) return t('needDate');
    if (settings.timePreset === 'custom' && settings.customMode === 'between') {
      const start = dayStart(settings.timeStart);
      const end = dayStart(settings.timeEnd);
      if (!start || !end) return t('needRange');
      if (start > end) return t('needOrder');
    }
    if (!Object.values(settings.types).some(Boolean)) return t('needType');
    return '';
  }

  function firstLine(text) {
    return text.replace(/\u00a0/g, ' ').trim().split('\n')[0].trim();
  }

  function isDeleteLabel(text) {
    const line = firstLine(text);
    if (!line || line.length > 16) return false;
    if (/undo|撤销|撤銷|取消|draft|草稿|解除|되돌/i.test(line)) return false;
    return /delete|刪除|删除|削除|supprimer|eliminar|excluir|löschen|удалить|sil|hapus|삭제|削除/i.test(line);
  }

  function isVisible(el) {
    const rect = el.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }

  function findDeleteMenuItem() {
    return [...document.querySelectorAll('[role="menuitem"]')].find((item) =>
      isVisible(item) && isDeleteLabel(item.innerText || '')
    ) || null;
  }

  function findConfirm() {
    const direct = document.querySelector('[data-testid="confirmationSheetConfirm"]');
    if (direct && isVisible(direct)) return direct;
    const dialog = document.querySelector('[data-testid="confirmationSheetDialog"], [role="alertdialog"], [role="dialog"]');
    if (!dialog) return null;
    return [...dialog.querySelectorAll('[role="button"], button')].find((button) =>
      isVisible(button) && isDeleteLabel(button.innerText || '')
    ) || null;
  }

  function toastText() {
    return document.querySelector('[data-testid="toast"]')?.innerText || '';
  }

  function isNewRateLimit(previous) {
    const now = toastText();
    if (!now || now === previous) return false;
    return /rate limit|too many|try again|over the limit|稍后再|請稍後|请稍后|过于|過於|too fast|频繁|頻繁|制限|제한/i.test(now);
  }

  function dismissOverlays() {
    document.querySelector('[data-testid="confirmationSheetCancel"]')?.click();
    document.querySelector('[data-testid="mask"]')?.click();
  }

  function mountedArticles() {
    return tweetNodes().filter((article) => tweetId(article));
  }

  function topUnfinished() {
    for (const article of mountedArticles()) {
      const id = tweetId(article);
      if (!id || state.doneIds.has(id) || state.skipIds.has(id) || state.holdIds.has(id)) continue;
      return { article, id };
    }
    return null;
  }

  function findScroller(node) {
    let el = node?.parentElement || null;
    while (el && el !== document.body) {
      const style = getComputedStyle(el);
      if (/(auto|scroll)/.test(style.overflowY) && el.clientHeight > 240 && el.scrollHeight > el.clientHeight + 80) return el;
      el = el.parentElement;
    }
    return document.scrollingElement || document.documentElement;
  }

  function scrollBy(scroller, delta) {
    if (!scroller || scroller === document.body || scroller === document.documentElement || scroller === document.scrollingElement) {
      window.scrollBy(0, delta);
      return;
    }
    scroller.scrollTop += delta;
  }

  function markSkip(id) {
    state.skipIds.add(id);
    state.holdIds.delete(id);
    state.missed.delete(id);
    state.skipped += 1;
    return 'skipped';
  }

  function markMiss(id) {
    const count = (state.attempts.get(id) || 0) + 1;
    state.attempts.set(id, count);
    if (count >= 2) {
      state.holdIds.add(id);
      state.missed.set(id, 'failed');
      return 'skipped';
    }
    return 'retry';
  }

  function markDeleted(id, key) {
    state.doneIds.add(id);
    state.holdIds.delete(id);
    state.missed.delete(id);
    state.attempts.delete(id);
    state.limitHits = 0;
    const total = bumpCount();
    state.deletedSinceExtra += 1;
    setStatus(t(key, { n: total }));
    return 'deleted';
  }

  function ensureVisible(article) {
    const rect = article.getBoundingClientRect();
    if (rect.top >= 70 && rect.bottom <= window.innerHeight - 24) return;
    article.scrollIntoView({ block: 'nearest', behavior: 'auto' });
  }

  async function undoRepost(article, id) {
    const button = article.querySelector('[data-testid="unretweet"]');
    if (!button) return markMiss(id);
    const previousToast = toastText();
    ensureVisible(article);
    button.click();
    const confirm = await waitFor(() => document.querySelector('[data-testid="unretweetConfirm"]'), 1200);
    if (confirm) {
      await sleep(between(40, 140));
      confirm.click();
    }
    const gone = await waitFor(() => !document.contains(article) || !article.querySelector('[data-testid="unretweet"]'), 2500);
    if (isNewRateLimit(previousToast)) return 'ratelimit';
    if (!gone) return markMiss(id);
    return markDeleted(id, 'undoneOne');
  }

  async function deleteOne(article, id) {
    const choice = decide(article);
    if (choice === 'skip') return markSkip(id);
    if (choice === 'undo') return undoRepost(article, id);

    ensureVisible(article);
    await sleep(between(40, 120));
    if (!state.running) return 'stopped';
    const caret = article.querySelector('[data-testid="caret"]');
    if (!caret) return markMiss(id);
    const previousToast = toastText();
    if (findDeleteMenuItem()) dismissOverlays();
    caret.click();
    const item = await waitFor(findDeleteMenuItem, 1400);
    if (!state.running) return 'stopped';
    if (!item) {
      dismissOverlays();
      if (isNewRateLimit(previousToast)) return 'ratelimit';
      if (document.querySelector('[role="menuitem"]')) return markSkip(id);
      return markMiss(id);
    }
    await sleep(between(50, 160));
    item.click();
    const confirm = await waitFor(findConfirm, 1600);
    if (!state.running) return 'stopped';
    if (!confirm) {
      dismissOverlays();
      if (isNewRateLimit(previousToast)) return 'ratelimit';
      return markMiss(id);
    }
    await sleep(between(60, 180));
    confirm.click();
    const gone = await waitFor(() => !document.contains(article) || tweetId(article) !== id, 3200);
    if (isNewRateLimit(previousToast)) return 'ratelimit';
    if (!gone) return markMiss(id);
    return markDeleted(id, 'deletedOne');
  }

  async function pauseForRows() {
    const start = Date.now();
    const minWait = between(380, 820);
    while (Date.now() - start < minWait) {
      if (!state.running) return;
      await sleep(160);
    }
    let extra = 0;
    const articles = mountedArticles();
    const last = articles[articles.length - 1];
    const cell = last?.closest('[data-testid="cellInnerDiv"]') || last;
    while (cell?.nextElementSibling?.querySelector?.('[role="progressbar"]') && extra < 2500) {
      if (!state.running) return;
      await sleep(200);
      extra += 200;
    }
  }

  async function advance() {
    const articles = mountedArticles();
    const before = articles.map(tweetId).join(',');
    const anchor = articles[articles.length - 1];
    const scroller = findScroller(anchor || document.body);
    if (!anchor) {
      scrollBy(scroller, 180);
    } else {
      const rect = anchor.getBoundingClientRect();
      const edge = scroller === document.scrollingElement || scroller === document.documentElement
        ? 0
        : scroller.getBoundingClientRect().top;
      if (rect.top > edge + 16) anchor.scrollIntoView({ block: 'start', behavior: 'auto' });
      else scrollBy(scroller, Math.max(72, Math.round((rect.height || 120) * 0.9)));
    }
    await pauseForRows();
    const after = mountedArticles().map(tweetId).join(',');
    if (after && after !== before) {
      state.stall = 0;
      return true;
    }
    state.stall += 1;
    setStatus(t('scanning', { n: state.stall }));
    return state.stall < 8;
  }

  async function scrollToStart() {
    const scroller = findScroller(mountedArticles()[0] || document.body);
    if (scroller && scroller !== document.scrollingElement && scroller !== document.documentElement) scroller.scrollTop = 0;
    window.scrollTo(0, 0);
    await pauseForRows();
  }

  async function moveToReplies() {
    const me = loggedInHandle();
    if (!me || isRepliesPath() || !onOwnProfile()) return false;
    sessionStorage.setItem(SS.switched, '1');
    sessionStorage.setItem(SS.resume, 'replies');
    setStatus(t('goReplies'));
    location.assign(`https://x.com/${me}/with_replies`);
    const moved = await waitFor(() => (isRepliesPath() ? true : null), 10000);
    if (!moved) return false;
    state.stall = 0;
    state.skipIds.clear();
    state.holdIds.clear();
    setStatus(t('onReplies'));
    return true;
  }

  function finish(message) {
    state.running = false;
    state.confirming = false;
    sessionStorage.removeItem(SS.resume);
    sessionStorage.removeItem(SS.switched);
    dismissOverlays();
    setStatus(message);
    reflect();
  }

  async function loop() {
    scheduleExtra();
    while (state.running) {
      const found = topUnfinished();
      if (!found) {
        const more = await advance();
        if (!state.running) return;
        if (more) continue;
        if (!state.recovered) {
          state.recovered = true;
          state.holdIds.clear();
          state.stall = 0;
          setStatus(t('recover'));
          await scrollToStart();
          continue;
        }
        if (settings.alsoReplies && onOwnProfile() && !isRepliesPath() && sessionStorage.getItem(SS.switched) !== '1') {
          const moved = await moveToReplies();
          if (!state.running) return;
          if (moved) {
            state.recovered = false;
            continue;
          }
        }
        finish(t('donePage', { n: sessionCount(), missed: state.missed.size }));
        return;
      }

      const result = await deleteOne(found.article, found.id);
      if (!state.running || result === 'stopped') {
        finish(t('stopped'));
        return;
      }
      if (result === 'ratelimit') {
        state.limitHits += 1;
        dismissOverlays();
        if (state.limitHits >= CONFIG.maxLimitHits) {
          finish(t('rateLimitStop', { n: CONFIG.maxLimitHits }));
          return;
        }
        await waitMs(backoffMs(state.limitHits), 'rateWait');
        continue;
      }
      if (result === 'deleted' && state.deletedSinceExtra >= state.nextExtraAt) {
        await waitMs(between(CONFIG.extraPauseMin, CONFIG.extraPauseMax), 'pause');
        scheduleExtra();
        continue;
      }
      if (result === 'skipped') {
        await sleep(between(80, 220));
        setStatus(state.status);
        continue;
      }
      await waitMs(gapMs(), 'next');
    }
  }

  async function start(manual) {
    if (state.running) return;
    const problem = filtersReady();
    if (problem) {
      state.confirming = false;
      setStatus(problem);
      reflect();
      return;
    }
    if (manual) {
      sessionStorage.removeItem(SS.switched);
      sessionStorage.setItem(SS.count, '0');
      state.skipIds.clear();
      state.doneIds.clear();
      state.holdIds.clear();
      state.missed.clear();
      state.attempts.clear();
      state.skipped = 0;
      state.recent = [];
      state.recovered = false;
    }
    state.running = true;
    state.confirming = false;
    state.stall = 0;
    reflect();
    const ready = await waitFor(() => (
      tweetNodes().some((article) => article.querySelector('[data-testid="caret"], [data-testid="unretweet"]')) ? true : null
    ), 8000);
    if (!state.running) return;
    if (!ready) {
      state.running = false;
      setStatus(t('noTweets'));
      reflect();
      return;
    }
    sessionStorage.setItem(SS.resume, 'run');
    setStatus(t('started'));
    await loop();
    if (!state.running) dismissOverlays();
  }

  function stop() {
    state.running = false;
    state.confirming = false;
    sessionStorage.removeItem(SS.resume);
    setStatus(t('stopping'));
    reflect();
  }

  function isDarkPage() {
    const color = getComputedStyle(document.body).backgroundColor;
    const parts = color.match(/\d+/g);
    if (!parts) return false;
    const [r, g, b] = parts.slice(0, 3).map(Number);
    return (r + g + b) / 3 < 80;
  }

  function applyTheme(root) {
    const dark = isDarkPage();
    const theme = dark
      ? ['#000000', '#e7e9ea', '#71767b', '#2f3336', '#16181c', '#eff3f4', '#0f1419']
      : ['#ffffff', '#0f1419', '#536471', '#eff3f4', '#f7f9f9', '#0f1419', '#ffffff'];
    ['bg', 'text', 'muted', 'line', 'soft', 'on', 'on-text'].forEach((name, index) => {
      root.style.setProperty(`--xs-${name}`, theme[index]);
    });
  }

  function fillSelect(select, values, selected) {
    const previous = select.value;
    select.replaceChildren();
    for (const value of values) {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = t(value);
      select.append(option);
    }
    select.value = values.includes(selected) ? selected : (values.includes(previous) ? previous : values[0]);
  }

  function text(id, key) {
    const node = document.getElementById(id);
    if (node) node.textContent = t(key);
  }

  function applyTexts() {
    const root = document.getElementById('xs-root');
    if (!root) return;
    root.dataset.lang = pageLang();
    text('xs-title', 'title');
    text('xs-fold', settings.ui.collapsed ? 'expand' : 'fold');
    for (const button of root.querySelectorAll('[data-type]')) button.textContent = t(button.dataset.type);
    for (const button of root.querySelectorAll('[data-mode]')) {
      button.textContent = t(button.dataset.mode === 'off' ? 'kwOff' : button.dataset.mode === 'include' ? 'kwInclude' : 'kwExclude');
    }
    text('xs-pin-label', 'keepPinned');
    text('xs-time-label', 'time');
    text('xs-custom-label', 'customHow');
    text('xs-start-label', settings.customMode === 'between' ? 'from' : 'onDate');
    text('xs-end-label', settings.customMode === 'between' ? 'to' : 'onDate');
    text('xs-date-hint', 'dateHint');
    text('xs-key-label', 'keywords');
    text('xs-line-label', 'perLine');
    text('xs-more', 'more');
    text('xs-media-label', 'media');
    text('xs-likes-label', 'likes');
    text('xs-chars-label', 'chars');
    text('xs-link-label', 'onlyLink');
    text('xs-tag-label', 'onlyTag');
    text('xs-case-label', 'caseSensitive');
    text('xs-replies-label', 'alsoReplies');
    text('xs-confirm-copy', 'confirm');
    text('xs-yes', 'yes');
    text('xs-no', 'back');
    text('xs-note', 'note');
    const keywords = root.querySelector('#xs-keywords');
    if (keywords) keywords.placeholder = t('placeholder');
    fillSelect(root.querySelector('#xs-time'), TIME_PRESETS, settings.timePreset);
    fillSelect(root.querySelector('#xs-custom'), CUSTOM_MODES, settings.customMode);
    const media = root.querySelector('#xs-media');
    const mediaValue = media.value || settings.media;
    media.replaceChildren();
    for (const [value, key] of [['all', 'mediaAll'], ['with', 'mediaWith'], ['without', 'mediaWithout']]) {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = t(key);
      media.append(option);
    }
    media.value = ['all', 'with', 'without'].includes(mediaValue) ? mediaValue : 'all';
  }

  function releaseDockGap() {
    document.documentElement.classList.remove('xs-docked');
    document.documentElement.style.removeProperty('--xs-dock-h');
  }

  function clearFixed(root) {
    root.style.position = '';
    root.style.left = '';
    root.style.top = '';
    root.style.right = '';
    root.style.width = '';
    root.style.maxHeight = '';
    root.style.zIndex = '';
  }

  function dockSlot(side) {
    const input = side.querySelector('[data-testid="SearchBox_Search_Input"]');
    if (input && side.contains(input)) {
      let block = input;
      while (block.parentElement && block.parentElement !== side) {
        const parent = block.parentElement;
        const siblings = [...parent.children].filter((child) => child.id !== 'xs-root');
        if (siblings.length > 1) {
          const before = block.nextSibling && block.nextSibling.id === 'xs-root' ? block.nextSibling.nextSibling : block.nextSibling;
          return { parent, before };
        }
        block = parent;
      }
      if (block.parentElement === side) {
        const before = block.nextSibling && block.nextSibling.id === 'xs-root' ? block.nextSibling.nextSibling : block.nextSibling;
        return { parent: side, before };
      }
    }
    const inner = [...side.children].find((child) => child.id !== 'xs-root');
    if (inner && inner.children.length > 1) {
      const before = [...inner.children].find((child) => child.id !== 'xs-root') || null;
      return { parent: inner, before };
    }
    return { parent: side, before: inner || null };
  }

  function cornerButtons() {
    const nodes = [...document.querySelectorAll('a, button, div[role="button"]')];
    const found = [];
    for (const el of nodes) {
      if (el.closest('#xs-root, #xs-peek')) continue;
      const rect = el.getBoundingClientRect();
      if (rect.width < 32 || rect.height < 32 || rect.width > 72 || rect.height > 72) continue;
      if (Math.abs(rect.width - rect.height) > 8) continue;
      if (rect.right < window.innerWidth - 96) continue;
      if (rect.bottom < window.innerHeight - 280) continue;
      const style = getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) continue;
      found.push(el);
    }
    const outer = found.filter((el) => !found.some((other) => other !== el && other.contains(el)));
    outer.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
    if (!outer.length) return [];
    const left = outer[outer.length - 1].getBoundingClientRect().left;
    return outer.filter((el) => Math.abs(el.getBoundingClientRect().left - left) < 8);
  }

  function paintSource(el) {
    const painted = (node) => {
      const style = getComputedStyle(node);
      const bg = style.backgroundColor;
      return (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') || (style.boxShadow && style.boxShadow !== 'none');
    };
    if (painted(el)) return el;
    return [...el.querySelectorAll('div')].find((child) => painted(child) && child.getBoundingClientRect().width >= 32) || el;
  }

  function paintPeek(peek, sample) {
    const source = paintSource(sample);
    const box = getComputedStyle(source);
    const rect = source.getBoundingClientRect();
    peek.style.width = `${rect.width}px`;
    peek.style.height = `${rect.height}px`;
    peek.style.borderRadius = box.borderRadius;
    peek.style.backgroundColor = box.backgroundColor;
    peek.style.boxShadow = box.boxShadow;
    peek.style.border = `${box.borderTopWidth} ${box.borderTopStyle} ${box.borderTopColor}`;
    const svg = sample.querySelector('svg');
    const icon = svg ? Math.round(svg.getBoundingClientRect().width) : Math.round(rect.width * 0.5);
    const img = peek.querySelector('img');
    img.style.width = `${icon}px`;
    img.style.height = `${icon}px`;
  }

  function columnHost(stack) {
    let node = stack[0].parentElement;
    while (node && node !== document.documentElement) {
      if (!stack.every((el) => node.contains(el))) return null;
      const style = getComputedStyle(node);
      if ((style.display === 'flex' || style.display === 'inline-flex') && style.flexDirection.startsWith('column')) return node;
      node = node.parentElement;
    }
    return null;
  }

  function dockPeek(peek) {
    const stack = cornerButtons();
    const host = stack.length >= 2 ? columnHost(stack) : null;
    if (!host) return false;
    const sample = stack[0];
    paintPeek(peek, sample);
    peek.style.position = 'relative';
    peek.style.left = 'auto';
    peek.style.top = 'auto';
    peek.style.right = 'auto';
    peek.style.bottom = 'auto';
    peek.style.zIndex = 'auto';
    peek.style.flex = '0 0 auto';
    peek.style.alignSelf = 'center';
    let child = sample;
    while (child.parentElement && child.parentElement !== host) child = child.parentElement;
    peek.style.margin = getComputedStyle(child).margin;
    const reverse = getComputedStyle(host).flexDirection === 'column-reverse';
    if (reverse) {
      if (child.nextElementSibling !== peek) child.after(peek);
    } else if (child.previousElementSibling !== peek) child.before(peek);
    return peek.parentElement === host;
  }

  function syncPeek() {
    const peek = document.getElementById('xs-peek');
    if (!peek) return;
    if (!settings.ui.collapsed) {
      peek.style.display = 'none';
      delete peek.dataset.docked;
      if (peek.parentElement && peek.parentElement !== document.documentElement) document.documentElement.append(peek);
      return;
    }
    peek.setAttribute('aria-label', t('expand'));
    if (dockPeek(peek)) {
      peek.dataset.docked = '1';
      peek.style.display = 'inline-flex';
      return;
    }
    delete peek.dataset.docked;
    peek.style.display = 'none';
  }

  function place(root) {
    if (state.dragging) return;
    releaseDockGap();
    root.classList.toggle('xs-hidden', settings.ui.collapsed);
    syncPeek();
    if (settings.ui.collapsed) return;
    root.classList.remove('collapsed');
    const parked = Boolean(settings.ui.floating) && Number.isFinite(settings.ui.left) && Number.isFinite(settings.ui.top);
    root.classList.toggle('floating', parked || !document.querySelector('[data-testid="sidebarColumn"]'));
    if (parked) {
      if (root.parentElement !== document.documentElement) document.documentElement.append(root);
      root.style.position = 'fixed';
      root.style.right = 'auto';
      root.style.width = '328px';
      root.style.left = `${settings.ui.left}px`;
      root.style.top = `${settings.ui.top}px`;
      root.style.maxHeight = 'calc(100vh - 24px)';
      return;
    }
    const side = document.querySelector('[data-testid="sidebarColumn"]');
    if (!side) {
      clearFixed(root);
      if (root.parentElement !== document.documentElement) document.documentElement.append(root);
      return;
    }
    const slot = dockSlot(side);
    if (root.parentElement === slot.parent && root.nextSibling === slot.before) {
      clearFixed(root);
      root.classList.remove('floating');
      return;
    }
    clearFixed(root);
    root.classList.remove('floating');
    slot.parent.insertBefore(root, slot.before);
  }

  function reflect() {
    const root = document.getElementById('xs-root');
    if (!root) return;
    applyTexts();
    for (const button of root.querySelectorAll('[data-type]')) {
      button.setAttribute('aria-pressed', settings.types[button.dataset.type] ? 'true' : 'false');
    }
    for (const button of root.querySelectorAll('[data-mode]')) {
      button.setAttribute('aria-pressed', button.dataset.mode === settings.keywordMode ? 'true' : 'false');
    }
    const keywords = root.querySelector('#xs-keywords');
    if (document.activeElement !== keywords) keywords.value = settings.keywords;
    root.querySelector('#xs-likes').value = settings.likesAbove;
    root.querySelector('#xs-chars').value = settings.minChars;
    root.querySelector('#xs-pinned').checked = settings.keepPinned;
    root.querySelector('#xs-replies').checked = settings.alsoReplies;
    root.querySelector('#xs-link').checked = settings.onlyLink;
    root.querySelector('#xs-tag').checked = settings.onlyTag;
    root.querySelector('#xs-case').checked = settings.caseSensitive;
    const startInput = root.querySelector('#xs-time-start');
    const endInput = root.querySelector('#xs-time-end');
    const today = todayStamp();
    startInput.placeholder = today;
    endInput.placeholder = today;
    if (document.activeElement !== startInput) startInput.value = settings.timeStart;
    if (document.activeElement !== endInput) endInput.value = settings.timeEnd;
    const custom = settings.timePreset === 'custom';
    root.querySelector('#xs-custom-wrap').classList.toggle('xs-off', !custom);
    root.querySelector('#xs-start-wrap').classList.toggle('xs-off', !custom || settings.customMode === 'before');
    root.querySelector('#xs-end-wrap').classList.toggle('xs-off', !custom || settings.customMode === 'after');
    root.querySelector('#xs-date-hint').classList.toggle('xs-off', !custom);
    root.querySelector('#xs-confirm').classList.toggle('xs-off', !state.confirming);
    root.querySelector('#xs-go').classList.toggle('xs-off', state.confirming);
    root.querySelector('#xs-fold').setAttribute('aria-expanded', settings.ui.collapsed ? 'false' : 'true');
    place(root);
    setStatus(state.status);
  }

  function bind(root) {
    root.addEventListener('pointerdown', (event) => event.stopPropagation());
    root.addEventListener('mousedown', (event) => event.stopPropagation());
    root.addEventListener('click', (event) => event.stopPropagation());
    const bar = root.querySelector('#xs-bar');
    let drag = null;
    const endDrag = (event) => {
      if (!drag || event.pointerId !== drag.id) return;
      state.dragging = false;
      if (drag.moved) {
        settings.ui.floating = true;
        settings.ui.left = Number.parseFloat(root.style.left);
        settings.ui.top = Number.parseFloat(root.style.top);
        saveSettings();
        reflect();
      }
      drag = null;
    };
    bar.addEventListener('pointerdown', (event) => {
      if (event.button !== 0 || event.target.closest('button')) return;
      const rect = root.getBoundingClientRect();
      drag = { id: event.pointerId, dx: event.clientX - rect.left, dy: event.clientY - rect.top, moved: false };
      state.dragging = true;
      bar.setPointerCapture(event.pointerId);
    });
    bar.addEventListener('pointermove', (event) => {
      if (!drag || event.pointerId !== drag.id) return;
      const left = event.clientX - drag.dx;
      const top = event.clientY - drag.dy;
      if (!drag.moved && Math.hypot(left - root.getBoundingClientRect().left, top - root.getBoundingClientRect().top) < 4) return;
      drag.moved = true;
      if (root.parentElement !== document.documentElement) document.documentElement.append(root);
      root.classList.add('floating');
      root.style.right = 'auto';
      const maxLeft = Math.max(8, window.innerWidth - root.offsetWidth - 8);
      const maxTop = Math.max(8, window.innerHeight - 48);
      root.style.left = `${Math.min(Math.max(8, left), maxLeft)}px`;
      root.style.top = `${Math.min(Math.max(8, top), maxTop)}px`;
    });
    bar.addEventListener('pointerup', endDrag);
    bar.addEventListener('pointercancel', endDrag);
    root.querySelector('#xs-fold').addEventListener('click', () => {
      settings.ui.collapsed = !settings.ui.collapsed;
      saveSettings();
      reflect();
    });
    root.querySelector('#xs-types').addEventListener('click', (event) => {
      const button = event.target.closest('[data-type]');
      if (!button) return;
      settings.types[button.dataset.type] = !settings.types[button.dataset.type];
      state.skipIds.clear();
      saveSettings();
      reflect();
    });
    root.querySelector('#xs-modes').addEventListener('click', (event) => {
      const button = event.target.closest('[data-mode]');
      if (!button) return;
      settings.keywordMode = button.dataset.mode;
      state.skipIds.clear();
      saveSettings();
      reflect();
    });
    const wire = (id, apply, refresh) => {
      root.querySelector(id).addEventListener('input', (event) => {
        apply(event.target);
        state.skipIds.clear();
        state.holdIds.clear();
        saveSettings();
        if (refresh) reflect();
      });
    };
    wire('#xs-time', (el) => { settings.timePreset = el.value; }, true);
    wire('#xs-custom', (el) => { settings.customMode = el.value; }, true);
    const commitDate = (key, input) => {
      const date = parseDay(input.value);
      settings[key] = date ? todayStamp(date) : todayStamp();
      input.value = settings[key];
      state.skipIds.clear();
      state.holdIds.clear();
      saveSettings();
    };
    root.querySelector('#xs-time-start').addEventListener('blur', (event) => commitDate('timeStart', event.target));
    root.querySelector('#xs-time-end').addEventListener('blur', (event) => commitDate('timeEnd', event.target));
    wire('#xs-time-start', (el) => { settings.timeStart = el.value; });
    wire('#xs-time-end', (el) => { settings.timeEnd = el.value; });
    wire('#xs-keywords', (el) => { settings.keywords = el.value; });
    wire('#xs-media', (el) => { settings.media = el.value; });
    wire('#xs-likes', (el) => { settings.likesAbove = el.value; });
    wire('#xs-chars', (el) => { settings.minChars = el.value; });
    wire('#xs-pinned', (el) => { settings.keepPinned = el.checked; });
    wire('#xs-replies', (el) => { settings.alsoReplies = el.checked; });
    wire('#xs-link', (el) => { settings.onlyLink = el.checked; });
    wire('#xs-tag', (el) => { settings.onlyTag = el.checked; });
    wire('#xs-case', (el) => { settings.caseSensitive = el.checked; });
    root.querySelector('#xs-go').addEventListener('click', () => {
      if (state.running) stop();
      else {
        state.confirming = true;
        reflect();
      }
    });
    root.querySelector('#xs-yes').addEventListener('click', () => start(true));
    root.querySelector('#xs-no').addEventListener('click', () => {
      state.confirming = false;
      setStatus(t('cancelled'));
      reflect();
    });
  }

  function mount() {
    if (document.getElementById('xs-root')) return;
    if (!document.getElementById('xs-style')) {
      const style = document.createElement('style');
      style.id = 'xs-style';
      style.textContent = `
        #xs-root { all: initial; position: relative; display: block; box-sizing: border-box; width: 100%; max-width: 100%;
          flex: 0 0 auto; margin: 0 0 16px; padding: 0 0 12px; border-radius: 16px; background: var(--xs-soft); color: var(--xs-text);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 15px; line-height: 20px; }
        #xs-root * { box-sizing: border-box; font-family: inherit; }
        #xs-root.floating { position: fixed; top: 12px; right: 16px; left: auto; z-index: 2147483000; width: 328px; max-width: none;
          max-height: calc(100vh - 24px); overflow: auto; margin: 0; background: var(--xs-bg); border: 1px solid var(--xs-line);
          box-shadow: 0 8px 28px rgba(0,0,0,.18); }
        #xs-bar { display: flex; align-items: center; gap: 8px; padding: 12px 12px 0; cursor: grab; user-select: none; }
        #xs-bar:active { cursor: grabbing; }
        #xs-mark { width: 28px; height: 28px; flex: 0 0 28px; display: block; border-radius: 8px; }
        #xs-root h2 { margin: 0; flex: 1; font-size: 17px; line-height: 20px; font-weight: 800; letter-spacing: -0.02em; }
        #xs-body { padding: 0 16px; }
        #xs-root.collapsed #xs-body { display: none; }
        #xs-root.collapsed { padding-bottom: 12px; }
        #xs-root p, #xs-root .xs-note { margin: 8px 0 0; color: var(--xs-muted); font-size: 13px; line-height: 16px; }
        #xs-root .xs-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
        #xs-root .xs-field { display: flex; flex-direction: column; gap: 6px; margin-top: 10px; color: var(--xs-muted); font-size: 13px; font-weight: 700; }
        #xs-root button { all: unset; box-sizing: border-box; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; font: inherit; font-weight: 700; }
        #xs-root .xs-chip, #xs-root .xs-quiet, #xs-root .xs-icon { background: var(--xs-bg); color: var(--xs-text); border: 1px solid var(--xs-line); border-radius: 999px; padding: 6px 12px; }
        #xs-root .xs-icon { padding: 4px 10px; }
        #xs-root .xs-chip[aria-pressed="true"] { background: var(--xs-on); color: var(--xs-on-text); border-color: transparent; }
        #xs-root .xs-go, #xs-root .xs-yes { display: flex; width: 100%; margin-top: 12px; border-radius: 999px; padding: 8px 12px; background: var(--xs-on); color: var(--xs-on-text); }
        #xs-root .xs-block { display: flex; width: 100%; margin-top: 8px; }
        #xs-root input, #xs-root textarea, #xs-root select { width: 100%; background: var(--xs-bg); color: var(--xs-text); border: 1px solid var(--xs-line); border-radius: 12px; padding: 8px 10px; font: inherit; font-weight: 400; }
        #xs-root textarea { min-height: 72px; resize: vertical; }
        #xs-root .xs-check { display: flex; gap: 8px; align-items: center; margin-top: 8px; color: var(--xs-text); font-weight: 400; font-size: 14px; }
        #xs-root .xs-check input { width: auto; }
        #xs-root .xs-off { display: none !important; }
        #xs-root details { margin-top: 10px; }
        #xs-root summary { cursor: pointer; font-weight: 700; }
        #xs-root.xs-hidden { display: none !important; }
        #xs-home { display: block; margin: 12px 0 0; color: #1d9bf0; font-size: 13px; line-height: 16px; font-weight: 400; text-align: center; text-decoration: none; }
        #xs-home:hover { text-decoration: underline; }
        #xs-peek { all: initial; box-sizing: border-box; display: none; align-items: center; justify-content: center; padding: 0; cursor: pointer; flex: 0 0 auto; }
        #xs-peek img { display: block; border-radius: 8px; pointer-events: none; }
        #xs-root :focus-visible, #xs-peek:focus-visible { outline: 2px solid #1d9bf0; outline-offset: 2px; }
        #own-del-panel, #own-del-style, #tl-clean, #tl-clean-style { display: none !important; }
      `;
      document.documentElement.appendChild(style);
    }
    const root = document.createElement('section');
    root.id = 'xs-root';
    root.innerHTML = `
      <div id="xs-bar">
        <img id="xs-mark" alt="" width="28" height="28" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAABJmlDQ1BJQ0MgUHJvZmlsZQAAGJV9kLFKw1AUhr9oRS2KgxkcHDKU4qBSRMS17VAEhxAVrE5J2kYhTS9JxLrr5uDqJi6+gOhjKAgO4hM4iaCz57aWVkUP/Pwf/z3ce+4B49lVKswUoBmlsVMpWdvVHWv0hSwjmOTJu36iira9jlTPv9fHI4b2hwV91+/zf2u8Vk988VdRzldxCoYpbB+mSnNN2IxlKOG25qDLp5q9Ll90ejadsvC18Jw3wMEAN8MD/+tdPfFEPdraEB8TzZLgUKH0R89yp6dMC8URMfsE7JFiUZREEVIXXiPCZ5F54SUKohW9z5976metS1h9h+Gzfuadw+0JzDz1s5z8ceoYbu6UG7udKCMaajTg7QomqzB9D9nd3mI/AS8USvjWm82tAAAAOGVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAACoAIABAAAAAEAAACAoAMABAAAAAEAAACAAAAAAGtGJk0AAA6nSURBVHgB7Z13jFXFF8dBQGmCSpXeFAgoTYMRgSAldBAiLTQ10iEaCQYVgRhaINJRqlKiAkoRUPoiXYr0roAUKdIkKCqIvw+c/A7jvfPK7nsPdt/O/ePt3LlnZs58z5kzM2fKpknjHoeAQ8Ah4BBwCDgEHAIOAYeAQ8Ah4BCIFwTSpk2bgqqSsrhNQcA6Vh0CDgGHgEPAIeAQcAg4BBwCDgGHgEPAIeAQcAg4BBwCDgGHgEPAIeAQSBOrNRPWN3j+/fdfMJawgE2YgMZ7JKBJbt686fl0b17TpUsnHGpxvP7zzz+3bt3SmOgGYiKA/PnzJyQkPProo/BKBR544AGtlQbMahCJSPTTmTNnnn/++UuXLpk0sQ5Tert27UaNGqXcipbcuHGjbdu2y5YtizUDUc6/Y8eOaDGKI48o0f/fQv+dOXOmyiPKnAXIrnnz5n/99ZfJGQL4+++/kco95iQAg4mMhuk5c+aY9UlUGOGBSCLLTDp5rVq1rl27ZnKIxvD06tUrEvQjSZv0ymjKPHnynDx5kmpoxcwwkaiY/vppfvnll7x582pusQs899xzV65cUQYkAKv9+/e/BwjGpA9QsOrVq7dw4cL06dNrDIHVq1dfvXoVU0tVeRVTSyBbtmw1atQgXoiJ/+qrr1q1aiVkEhn136effnrFihW5cuXy5Dx27Ng333wzpkV7SozJKxo0btw40Sn5RbOIkY6Or+aTIUMGum7ItKEQaNmyJTQxYS5NmieffJI2arIn4U8++cSjNDFi4F5kmz179v379yum1BD7XrduXX/ZAF2qVKnffvvNROTs2bMxMkQFChT48ccfTcakXJrdgw8+6GcvBcdgZK9fv27CeuzYMX+rlxr27t3bpCT8xRdfqF2KFgqU/sMPP3gK4nXp0qWZM2eOVinJJR9Ue+DAgeiaqW4zZsyw2ha0b9OmTSY0pMIQRbEydDYbNmygCJMfXtevX097jWJBySirhx56aOPGjSasGKIWLVpYWSxbtuzvv/9uEjMievzxx63EISM9Ys6UKROzKg/0dPjbtm3LkSNHyNxSMEHp0qUZ/Jh6h31nzmyt0jvvvOPBKCqGiOY1d+5ckwcR8969e2PU01hrd38i0cTu3bvL9FhmAEC8aNEi3C9+hjJmzLh9+3azEUD88ssv+ynDj6GgKVOmmHlK+MiRI3TI4eeTgikZ29HLKQSi46+88oq1Ss8884x23SKwU6dOBeq6rTmYkYh/xIgRFC2FSoa8njhxgsGoSRnn4UKFCp07d05QEElcvHixaNGi/moD2eDBg5WSAM+sWbOSMCIiK7Fp5KDiJwAnTMT8Rcd5TJs2bTxALF++3GqI6DB3796tkKG2JGzatCmAJgqjLl264NTUfCSA4J999tlE5RMnxMDHGNSEg46hZ8+eVlhfeOEFnJSmwJi75s6dO0wsyJMhLE5NitNMCDDdq1q1apiZxCEZA77jx4+bMmCAVLJkSX9VQfDDDz9USgFx+vTpVmn5k9evX186Eu32yeqPP/6oU6dOmDn484yTmNq1a5tmAWSZB1l9AEyODh8+LNALjrQYDFFIIGg9ly9fVuFJAHm89NJLqR19sAOC0aNHe9Dp06ePHxpi8JKKGVH6n3/+OWfOnEFkUK5cuV9//VXpJYA169Chg7+IIPnE8ye8LtLHot3SwWIcAM5fZyAbP368oimtYdq0acTz+Omtbk4aHL2xld6fQ2qJqVixosfrsHXrVgY//vo/8sgjP/30k8cQNWrUyE/JrOrQoUMqLQmQEDefQ98LF4j4R+gDBgywIoUT2+w2QJae3OPAwS55ptCQgf4HH3xgzdPLUCp8p+Nds2aNqbD0k9YROghidkxKwpMmTVJkH3744bVr13oIeGV5yzrPSIVo26v8xBNPeFZld+3aZfXLP/bYY6wlmIaIzpkBFTLA4bp48WI/+p9++mn8LG/Z8YtG7KuvviqwCoKEhw4dqqptltCwYUOTEnosPi5+z+RO8vnyyy+tQ1szQxe+jQAennnz5pn6y5DRM1kVefCLUvtl4InhFb+/tRk5xO0I4JHH32nK4MCBA6i2nxpXxOnTp01KwjJH00jWvOJ2ecuPSLRiGjdubI5z0GL2CloNEWsDzIc9Wq/oMxDyjI6ixWGc5wPWEydONGGlj61WrZq/2lB+9tlnirgZ2LdvX758+fxJXExYCGA3Dh48qIAiDAwR40t/YkwW23iVUgLsNClcuLCf2MUkAgH63j///NNElsWsQIbIbC4kWbVqlRvyJwJrKylYDxo0SAUAxMijevXqfmIoPVuAIe7UqZNVWv7kLiYgAgwfPRunsOxZsmTxJ8DciyHSpsDBgoIFC/opXUziEKhUqZIuytMawHfIkCFW1W7durVsttBGw/ZCZ4gSB7efGqzfe+89cNfFLKZmlStXtlKCuKJPEh5Wnv2ULiZxCOBF2Lx5syJLYOfOnVZnNS7o8+fPm5TM1MJfOk4cW6mKmm2Ksp9OwEW1Azmr2V/EV5UB4Xt/zikORaPjHAGXXzqGChUq+KuKN+nrr782ZUDHgOfO2m34k7sYCwJg1759e3VOKLjff/89zmd/Ao8hgh7fNR5sP6WLCY0A6NesWZNVYrUqZqBv375+1SaGNXeRk0qL1Rg/ZejiHQXLxWxeM0E3/Z2sJFt3FTL65FSaok9yxk7WSZxDOBgC+HPYeAJ8JpSmMAgH2keEIWJDiimtPXv2uIWBYHB7vmG1WZL0wM0W/rfeeksmXICLYHg4yOg3L8TIiAgCMhFityjvATngK8N8HGoe9HE2sNUH88KRUj7dAf82uIxQS5Qo4c+LEdH8+fMFfcmKvqR8+fJ+ShfzHwRYPWfwLhALcPxyhr1KlSroNQ/7R1m+F9UWAg4cWL0O7IO/cOGCmRVzOrc+/B+4PS/gi7dHcZcAY1BcPXxSYgwRn8TEiyRY0NevZgBDZK6aQUxak8CF7yIAxF27djVVW5S3X79+JvokYAbA7jmTEieEdQmMluE5kMNSpdWTcZePVBtq0qSJZ/stAmAbltW8eBylUM6ePdsjJ0GyePHibJBGWvwydWC5jbsP2LNuJU614KfhdiDPAXkw5UoJjupZQQE+dg1JExFbhKlhQd9PDGW3bt1YZ2aFoEGDBuwFRhgQc4mFnziVxrAtjmPAoGk+rAMHP4/HuJ4lGjMJ8war14ER0VNPPfXtt9/KEFaSkNbNDG4rHB5jD44AxDSKSyNC6iPzW3UTkQrV/uijjzy2hfy5G0RWmM1ug3CzZs1CFhHnBFmzZvXvpcXZ+eKLL4ZTc7CeMGGCCSvykD0sfGL9kmkaI1GTQOTE9q/OnTtzOUs4pcQtDfWXQ+tiE/iVKevrr7/u0eIgEHBoAH+ndAMC7pgxY+i3OcCEEZOcTQEwpRg2bBiphIazSkEyj+dPQIyT0oQGsLDRw4cPDx99AYgzGmKIuBSHfhgXHrNl09yLGIhhpMQ8jvzZ+y40tA/rEeV4hl7qxlkwQV9lQGDBggVJ2EcOoB9//PHbb7+N/45jTPg+TcWncQA96wd0GPTGTI+5jIkuQRsNR5STUGgKlhB4cQ+hZ8gPHFu2bLHuww1ZVTIEQdqBHMlDkAouYYZGFIcHArPDlTk62FUyxMPRpZClxAkBYHGYwlxjEbCOHj2KbkZSSdknKrkBLo0ArN9//332NDKZwFfBnRDSMlQ88sov/Fg3W0TCTzJNy1ouu6a05gQAizmqdY03/DogV3YzaqsigJ0pUqQIPS3y3rFjhxQk5VIiBPzyKCecQw5+6DV8ZpIvJd0dZ+rMalN/TDaOgciZRgZcRYM9WblyJeqMuWc7BSeW7uB81ygJ4ox0lyxZQthkhph49pUyR2VLj2qcBKh/tA7uIgCsDS4N+gPuK2VGRk+r+HoCvOIo1f5AmQm0BThy/bjPOTAnwrFjoi+GOAmDzuA1QQwgi5UDYrX1/tsK+MT9E/7bAeHQusQWvNDk/hWV/Pzzz6mbqqFIgsioj/8QgHn9ASXyECNGXzWASK5cYVy0bt06whpPAJOYUi+LtioCtnjkyJGeSlJPDgZbtzpbMwk/EgF4TltSFjcQf/PNNyYPEqat0FFzb50pAJEB16WTVfjlJl9KnXBpJWn+LK8H93RGUh8cn3TFWhwB5nesaKrbTtCHDWbO9LpMIHTuJqkgIAZbhPZEwsl9TosGoUeetk8NGY8XK1YsdszhYjKPWoImm4tobfidFHrpHpDTG2+8AcrswTYFpmHcSqy+pdSmwI1ITHCkqlolsIj11gTwmjp1Klhr0YRxumFtZAqi8XDF+j6DY7oiboAS8SirvPLgrI2pusRKEfGIyY4ErQ8BPJFh+pkjZItSxAqBoDDAGB9NxwWtMcSLJBISEjBELBRzgabJrVBCw4Iz/4wi6uOFCOsYLDm6JpvazPpgVQPdkxssryR9AywW30FQlR1LyGSbiTFDL1MGwiGrm4iHxQn6apNnkkMsD6MGfKjJ0Rx5eOJ4NJvaYJqaaP3Rxx49engok4RtwERm5oT5jxiArgzADNcWgDKL8iIbBVrwZUMGqVikxGUtzCuBVIRIMmSzF17V5NsarJvaQD/QkYqAcEb8ATTRaxNK2JDLytg5ylqNyEYJaKCvvfYaEgJcXHhgbQqAsFLyCdd3xAzGIAPqjJp/d+eh7+IhyC97rahYDAoMkSUG59133zUdEkyJy5QpQzI8r/hFBFOxM0DMOBV6WOXBhcdhcQVdA6RiawU1DVH2/foMZ9bnPvLDFnb2pHB8Hs2lERBgpxD8MA3Ggw2yRPIQ4EEGXG8jJ8sYuTKJ4agsSdgHNnnyZHayxML4JFdhRk9oohNYf/onEOS6YpoC2aPpXIlPpOw+ohHgJWWoylgZaZEKGn5pIvJLIHpMuZwcAg4Bh4BDwCHgEHAIOAQcAg4Bh4BDwCHgEHAIOAQcAikNAXGZpTSuHb8OAYeAQ8Ah4BBwCDgEHAIOAYeAQ8Ah4BBwCDgEHAIOAYeAQ8Ah4BC41wj8DwqkCHzpLLTPAAAAAElFTkSuQmCC">
        <h2 id="xs-title"></h2>
        <button id="xs-fold" class="xs-icon" type="button"></button>
      </div>
      <div id="xs-body">
        <div class="xs-row" id="xs-types">
          <button class="xs-chip" type="button" data-type="post"></button>
          <button class="xs-chip" type="button" data-type="reply"></button>
          <button class="xs-chip" type="button" data-type="quote"></button>
          <button class="xs-chip" type="button" data-type="repost"></button>
        </div>
        <label class="xs-check"><input id="xs-pinned" type="checkbox"><span id="xs-pin-label"></span></label>
        <label class="xs-field"><span id="xs-time-label"></span><select id="xs-time"></select></label>
        <label class="xs-field" id="xs-custom-wrap"><span id="xs-custom-label"></span><select id="xs-custom"></select></label>
        <div class="xs-row">
          <label class="xs-field" id="xs-start-wrap" style="flex:1"><span id="xs-start-label"></span><input id="xs-time-start" type="text" autocomplete="off" spellcheck="false" maxlength="16"></label>
          <label class="xs-field" id="xs-end-wrap" style="flex:1"><span id="xs-end-label"></span><input id="xs-time-end" type="text" autocomplete="off" spellcheck="false" maxlength="16"></label>
        </div>
        <p id="xs-date-hint" class="xs-note"></p>
        <div class="xs-field"><span id="xs-key-label"></span>
          <div class="xs-row" id="xs-modes">
            <button class="xs-chip" type="button" data-mode="off"></button>
            <button class="xs-chip" type="button" data-mode="include"></button>
            <button class="xs-chip" type="button" data-mode="exclude"></button>
          </div>
        </div>
        <label class="xs-field"><span id="xs-line-label"></span><textarea id="xs-keywords"></textarea></label>
        <details>
          <summary id="xs-more"></summary>
          <label class="xs-field"><span id="xs-media-label"></span><select id="xs-media"></select></label>
          <label class="xs-field"><span id="xs-likes-label"></span><input id="xs-likes" type="number" min="0" step="1"></label>
          <label class="xs-field"><span id="xs-chars-label"></span><input id="xs-chars" type="number" min="0" step="1"></label>
          <label class="xs-check"><input id="xs-link" type="checkbox"><span id="xs-link-label"></span></label>
          <label class="xs-check"><input id="xs-tag" type="checkbox"><span id="xs-tag-label"></span></label>
          <label class="xs-check"><input id="xs-case" type="checkbox"><span id="xs-case-label"></span></label>
          <label class="xs-check"><input id="xs-replies" type="checkbox"><span id="xs-replies-label"></span></label>
        </details>
        <div id="xs-confirm" class="xs-off">
          <p id="xs-confirm-copy"></p>
          <button id="xs-yes" class="xs-yes" type="button"></button>
          <button id="xs-no" class="xs-quiet xs-block" type="button"></button>
        </div>
        <button id="xs-go" class="xs-go" type="button"></button>
        <p id="xs-stats"></p>
        <p id="xs-status"></p>
        <p id="xs-note" class="xs-note"></p>
        <a id="xs-home" href="https://github.com/YociLam/XSweeper" target="_blank" rel="noopener noreferrer">github.com/YociLam/XSweeper</a>
      </div>
    `;
    applyTheme(root);
    document.documentElement.append(root);
    const peek = document.createElement('button');
    peek.id = 'xs-peek';
    peek.type = 'button';
    const mark = document.createElement('img');
    mark.alt = '';
    mark.src = root.querySelector('#xs-mark').src;
    peek.append(mark);
    peek.addEventListener('click', () => {
      settings.ui.collapsed = false;
      saveSettings();
      reflect();
    });
    document.documentElement.append(peek);
    bind(root);
    reflect();
  }

  function removeLegacy() {
    document.getElementById('own-del-panel')?.remove();
    document.getElementById('own-del-style')?.remove();
    document.getElementById('tl-clean')?.remove();
    document.getElementById('tl-clean-style')?.remove();
    try { sessionStorage.removeItem('ownPostDelete.resume'); } catch (error) { /* ignore */ }
  }

  const VERSION = '1.2.4';
  const UPDATE_URL = 'https://raw.githubusercontent.com/YociLam/XSweeper/main/x-sweeper.user.js';

  function versionGreater(remote, local) {
    const nums = (value) => String(value).split('.').map((part) => Number.parseInt(part, 10) || 0);
    const left = nums(remote);
    const right = nums(local);
    const count = Math.max(left.length, right.length);
    for (let i = 0; i < count; i += 1) {
      const gap = (left[i] || 0) - (right[i] || 0);
      if (gap) return gap > 0;
    }
    return false;
  }

  function notifyUpdate(text, open) {
    if (typeof GM_notification !== 'function') return;
    GM_notification({
      title: t('title'),
      text,
      timeout: 0,
      onclick() {
        if (open && typeof GM_openInTab === 'function') GM_openInTab(UPDATE_URL, { active: true });
      },
    });
  }

  function checkUpdate(manual) {
    const fail = () => { if (manual) notifyUpdate(t('updateFail')); };
    if (typeof GM_xmlhttpRequest !== 'function') {
      fail();
      return;
    }
    GM_xmlhttpRequest({
      method: 'GET',
      url: UPDATE_URL,
      timeout: 15000,
      nocache: true,
      onload(response) {
        if (response.status !== 200) {
          fail();
          return;
        }
        const found = /@version\s+([0-9]+(?:\.[0-9]+){1,3})/.exec(String(response.responseText || '').slice(0, 500));
        const remote = found && found[1];
        if (!remote) {
          fail();
          return;
        }
        if (!versionGreater(remote, VERSION)) {
          if (manual) notifyUpdate(t('updateCurrent', { v: VERSION }));
          return;
        }
        if (!manual) {
          try {
            if (sessionStorage.getItem('xsweeper.updateSeen') === remote) return;
            sessionStorage.setItem('xsweeper.updateSeen', remote);
          } catch (error) { /* ignore */ }
        }
        notifyUpdate(t('updateReady', { v: remote }), true);
      },
      onerror: fail,
      ontimeout: fail,
    });
  }

  function boot() {
    const waitBody = () => {
      if (!document.body) {
        setTimeout(waitBody, 300);
        return;
      }
      removeLegacy();
      mount();
      if (sessionStorage.getItem(SS.resume) === 'replies' && isRepliesPath()) {
        sessionStorage.removeItem(SS.resume);
        setStatus(t('resumeReplies'));
        start(false);
      }
    };
    waitBody();
    const observer = new MutationObserver(() => {
      const root = document.getElementById('xs-root');
      if (!root || pageLang() === root.dataset.lang) return;
      applyTexts();
      setStatus(state.status);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    let sideObserver = null;
    let sideNode = null;
    const watchSidebar = () => {
      const side = document.querySelector('[data-testid="sidebarColumn"]');
      if (!side || side === sideNode) return;
      sideObserver?.disconnect();
      sideNode = side;
      sideObserver = new MutationObserver(() => {
        if (settings.ui.collapsed || state.dragging || settings.ui.floating) return;
        const root = document.getElementById('xs-root');
        if (!root || side.contains(root)) return;
        place(root);
      });
      sideObserver.observe(side, { childList: true, subtree: true });
    };
    setInterval(() => {
      removeLegacy();
      if (!document.body) return;
      const root = document.getElementById('xs-root');
      if (!root) mount();
      else if (settings.ui.collapsed) syncPeek();
      else if (!state.dragging && !settings.ui.floating) {
        const side = document.querySelector('[data-testid="sidebarColumn"]');
        if (side && !side.contains(root)) place(root);
      }
      watchSidebar();
    }, 2000);
    watchSidebar();
    let peekQueued = false;
    const queuePeek = () => {
      if (peekQueued || !settings.ui.collapsed) return;
      const peek = document.getElementById('xs-peek');
      if (peek?.dataset.docked === '1' && peek.isConnected && peek.parentElement !== document.documentElement) return;
      peekQueued = true;
      requestAnimationFrame(() => {
        peekQueued = false;
        syncPeek();
      });
    };
    new MutationObserver(queuePeek).observe(document.documentElement, { childList: true, subtree: true });
    checkUpdate(false);
    if (typeof GM_registerMenuCommand === 'function') {
      GM_registerMenuCommand(t('checkUpdate'), () => checkUpdate(true));
    }
  }

  boot();
})();
