import './style.css'

type Product = {
  slug: string
  name: string
  label: string
  description: string
  image: string
  icon?: string
  gallery?: string[]
  accent: string
  features: string[]
  privacy: string
  links?: string
  support?: string
  disclaimer?: string
  formUrl?: string
}

const CONTACT_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeFIVAmqLBmGFbkh-ScSXhjg2Pke4hm59ikjNLFL1PLITn32w/viewform?embedded=true'
const HAMSTER_MARK = '<svg class="hamster-mark-svg" viewBox="0 0 40 32" focusable="false"><g class="wheel-spin"><circle cx="20" cy="15" r="13" fill="var(--paper)" stroke="var(--blue)" stroke-width="2"/><path d="M20 2v26M7 15h26M10.8 5.8l18.4 18.4M29.2 5.8 10.8 24.2" fill="none" stroke="var(--blue)" stroke-width=".6" opacity=".75"/><circle cx="20" cy="15" r="2.1" fill="var(--yellow)"/></g></svg>'

const products: Product[] = [
  {
    slug: 'expiry-date-manager',
    name: 'Expiry Date Manager',
    label: '食品ロスを減らしたい方に最適な「賞味期限管理」アプリ。',
    description: 'バーコードを読み取って商品を登録、賞味期限が近づいたらプッシュ通知でお知らせ。音声での日付登録は意外に便利。キッチンでお手軽簡単に登録！',
    image: 'images/expiry-date-manager.svg',
    icon: 'images/EDM_app_icon.png',
    gallery: ['images/EDM_SHOT01.PNG', 'images/EDM_SHOT02.PNG'],
    accent: 'mint',
    features: ['バーコードを読み取って登録\n■ Open Food Facts（オープン・フード・ファクツ）に登録があるものは、画像・品名を自動で取得。\n■ 登録がない場合でも、お客様にて簡単にアプリに覚えさせることができます。', '音声入力で日付を素早く入力\n■ 「12月31日」と話しかけるだけで賞味期限を登録できます。両手がふさがっていても安心。', '賞味期限が近づいたらプッシュ通知（端末内ローカル通知）\n■ 何日前から通知するかを設定できます。通知時刻も自由に変更可能です。うっかり忘れを防いで、食品ロスを減らしましょう。\n※通知はすべて端末内で完結し、外部サーバーへの送信は行いません。', 'バックアップ対応\n■ 賞味期限リスト・品目データベース・サムネイルをまとめて Google DriveやiCloud Driveにバックアップ。機種変更後もすぐに元通りに復元できます。', 'こんな方におすすめ！\n■ 冷蔵庫・戸棚の在庫管理をしたい\n■ 食品ロスを意識している\n■ 家族の食材をまとめて管理したい'],
    privacy: '最終更新日：2026年4月16日\n\n収集する情報\n本アプリは、ユーザーの個人情報を収集・外部送信しません。\n\nデータの保存場所\n登録した賞味期限・品目名・画像はすべて、お使いの端末内およびユーザー自身のiCloudにのみ保存されます。開発者がこれらのデータにアクセスすることはありません。\n\n外部サービスとの通信\nバーコードをスキャンした際、読み取ったバーコード番号をOpen Food Facts API（https://world.openfoodfacts.org/）へ送信し、商品名・商品画像を取得します。バーコード番号以外の情報は送信しません。\n\nプッシュ通知\n本アプリのプッシュ通知は端末内のローカル通知です。外部サーバーへの送信は行いません。\n\n広告・解析・クラッシュレポート\n本アプリは広告SDK・解析SDK・クラッシュレポートSDKを使用していません。\n\nプライバシーポリシーの変更\n本ポリシーは予告なく変更される場合があります。変更後は本ページに掲載します。\n\nお問い合わせ\n本ポリシーに関するご質問はサポートページよりお送りください。',
    links: '<a href="https://apps.apple.com/jp/app/expiry-date-manager-%E8%B3%9E%E5%91%B3%E6%9C%9F%E9%99%90%E3%83%9E%E3%83%8D%E3%83%BC%E3%82%B8%E3%83%A3/id6761308148" target="_blank" rel="noreferrer">App Store ↗</a><a href="https://play.google.com/store/apps/details?id=com.expirydatemng" target="_blank" rel="noreferrer">Google Play ↗</a>',
    support: 'フィードバック\n\nアプリに関するコメントは下記のフォームよりお送りください。\n\nよくある質問\n\nQ. バーコードを読み取っても商品名が表示されません\nA. 商品情報は Open Food Facts（世界中のボランティアが登録するオープンデータベース）から取得しています。日本の商品は登録数が少ないため、表示されない場合があります。その場合は手動でお名前を入力してください。\n\nQ. プッシュ通知が届きません\nA. 本アプリの通知は端末内のローカル通知です。iOS の設定 → 通知 → 賞味期限マネージャー で通知が許可されているかご確認ください。\n\nQ. クラウドバックアップが表示されません\nA. iOS の設定 → Apple ID → iCloud → iCloud Drive がオンになっているかご確認ください。\n\nQ. 機種変更をしたらライセンスがなくなりました\nA. このアプリの設定から「ライセンス」にある「購入またはライセンスの復元」で復元できます。iCloudへのアクセスが必要な場合があります。',
    disclaimer: '本アプリの機能・仕様・提供は予告なく変更または終了する場合があります。本アプリの使用により生じたいかなる損害（食品の廃棄・摂取による健康被害、データの消失、バックアップの破損・消失、その他直接的・間接的損害を含む）についても、開発者は一切の責任を負いません。バーコードスキャンによる商品情報の取得はOpen Food Factsのデータに依存しており、すべての商品に対応しているわけではありません。取得した情報の正確性は保証しません。',
  },
  {
    slug: 'external-touch-display',
    name: 'eXternalTouchDisplay',
    label: 'タブレット/スマートフォンをPCのタッチ対応サブディスプレイに。',
    description: 'デスクトップを広く使いたいとき、プレゼン中に手元で操作したいとき、サブモニターをすぐに追加したいときに活用できます。Wi-Fiで接続し、タブレットから直接タッチ操作できます。',
    image: 'images/external-touch-screen.svg',
    icon: 'images/eXTD_icon.png',
    gallery: ['images/eXTD_situationshot02_clean.png'],
    accent: 'coral',
    features: ['機能概要\n■ iOSやAndroidのタブレットやスマートフォンをPCの外部ディスプレイとして活用\n■ デスクトップを拡張・複製表示\n■ タブレットから直接タッチ操作が可能\n■ フルスクリーン表示・画面回転にも対応', '用途\n■ 会議、プレゼン、作業用モニター、操作パネルに最適', '特徴\n■ レシーバーを自動検出して簡単接続\n■ 最大8台のタブレット接続に対応*\n■ Wi-Fi接続に対応\n■ WebRTCによる低遅延の映像ストリーミング\n■ 日本語・英語を含む多言語UI\n■ 広告なし（アプリ内課金・サブスクリプションあり）\n\n*お客様のハードウエア環境に依存します', 'システム要件\n1. ご利用のPCへのドライバアプリ(eXTDDriver)のインストールが必要（Windows Store）\n2. モバイル/タブレットアプリのダウンロードは、AppStore / Google Play から'],
    privacy: '最終更新日：2026年4月16日\n\n収集する情報\n本アプリは、ユーザーの個人情報を収集・外部送信しません。\n\nデータの保存場所\n登録した賞味期限・品目名・画像はすべて、お使いの端末内およびユーザー自身のiCloudにのみ保存されます。開発者がこれらのデータにアクセスすることはありません。\n\n外部サービスとの通信\nバーコードをスキャンした際、読み取ったバーコード番号をOpen Food Facts API（https://world.openfoodfacts.org/）へ送信し、商品名・商品画像を取得します。バーコード番号以外の情報は送信しません。\n\nプッシュ通知\n本アプリのプッシュ通知は端末内のローカル通知です。外部サーバーへの送信は行いません。\n\n広告・解析・クラッシュレポート\n本アプリは広告SDK・解析SDK・クラッシュレポートSDKを使用していません。\n\nプライバシーポリシーの変更\n本ポリシーは予告なく変更される場合があります。変更後は本ページに掲載します。\n\nお問い合わせ\n本ポリシーに関するご質問はサポートページよりお送りください。',
    links: '<a href="https://docs.google.com/forms/d/e/1FAIpQLSdREUn4WAHsOkJZU5v8CdbB73mw2sM1PrGve_G1zJGemYmaOQ/viewform" target="_blank" rel="noreferrer">フィードバックフォーム ↗</a>',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdREUn4WAHsOkJZU5v8CdbB73mw2sM1PrGve_G1zJGemYmaOQ/viewform',
    support: 'フィードバック\n\nアプリに関するコメントは下記のフォームよりお送りください。\n\nよくある質問\n\nQ.  フルスクリーンの終了方法がわからない。\nA.  Androidは画面下部を下から上にスワイプするなどしてナビゲーションバーを表示させ、戻るボタンをタップ。iOSは画面下部を３～４秒間タップし続けて表示される戻るボタンをタップ。\n\nQ. 複数の端末で、うまく仮想デスクトップが構成できない。\nA.  端末側のアプリを一斉に起動すると時々混乱することがあります。順番に起動してみてください。\n\nQ,  PCのレシーバアプリに接続/再接続できない、または見つからない\nA.  同じネットワーク上のPC上でドライバアプリ(eXTDDriver)が起動していることを確認してください。\nA.  レシーバアプリ（タスクトレイのアプリ）を再起動してください。\nA.  常駐しているセキュリティソフトに除外されている場合はセキュリティソフトに登録してください。\nA.  ルーターの設定などをご確認ください。\n\nQ. 機種変更をしたらライセンスがなくなりました\nA. このアプリの設定から「ライセンス」にある「購入またはライセンスの復元」で復元できます。',
    disclaimer: '本アプリの機能・仕様・提供は予告なく変更または終了する場合があります。本アプリの使用により生じたいかなる損害（仕様や品質、および動作の不備に起因する損害を含み、それらに限らない）についても、開発者は一切の責任を負いません。',
  },
  {
    slug: 'antiswipe',
    name: 'antiSwipe',
    label: '意図しないスワイプを、静かに防ぐ',
    description: '画面に触れたときの意図しない操作を抑え、見る・読む・置いておく時間を守ります。',
    image: 'images/antiswipe.svg',
    accent: 'blue',
    features: ['意図しないスワイプをブロック', '必要なときだけすぐ解除', '集中したい場面に寄り添う設計'],
    privacy: 'プライバシーポリシー本文を Google Site の掲載内容に置き換えてください。',
  },
]

const app = document.querySelector<HTMLDivElement>('#app')!

function header() {
  return `<header class="site-header"><a class="brand" href="#/" aria-label="Hamster Worksへ戻る"><span class="brand-mark" aria-hidden="true">${HAMSTER_MARK}</span><span>Hamster Works</span></a><nav aria-label="メインナビゲーション"><a href="#about">会社紹介</a><a href="#products">製品</a><a class="nav-contact" href="${CONTACT_FORM_URL}" target="_blank" rel="noreferrer">お問い合わせ <span aria-hidden="true">↗</span></a></nav></header>`
}

function footer() {
  return `<footer><div class="footer-brand"><span class="brand-mark" aria-hidden="true">${HAMSTER_MARK}</span><strong>Hamster Works</strong></div><p>毎日をちょっとだけプラス。</p><small>© ${new Date().getFullYear()} Hamster Works</small></footer>`
}

function home() {
  return `${header()}<main><section class="hero"><div class="hero-copy"><p class="eyebrow">SOFTWARE FOR EVERYDAY LIFE</p><h1>あなたに寄り添う、<br><em>ちょうどいい</em>をつくってます。</h1><p class="hero-lede">Hamster Works は、毎日の中の「あと少し」を見つけてはやっつけるために走り続けます。</p><a class="button button-dark" href="#products">製品を見る <span aria-hidden="true">↓</span></a></div><div class="hero-art" aria-label="日常を整えるソフトウェアのイメージ"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="hero-note"><span class="note-dot"></span><span>small tools,<br>better days</span></div><div class="hero-panel"><div class="panel-top"><span></span><span></span><span></span></div><div class="panel-lines"><i></i><i></i><i></i></div><div class="panel-ring">03</div></div></div></section><section id="about" class="intro-section"><div class="section-index">01 / ABOUT</div><div><h2>ちょっとしたことに<br>取り組もう。</h2><p>日々の中で何度も使うものを、わかりやすく、楽ちんに。Hamster Worksは生活に寄り添う小さな幸せを育みます。</p></div></section><section id="products" class="products-section"><div class="section-heading"><div><p class="eyebrow">OUR PRODUCTS</p><h2>毎日をちょっとだけ<br>プラス。</h2></div></div><div class="product-grid">${products.map((product, index) => `<a class="product-card accent-${product.accent}" href="#/product/${product.slug}"><div class="card-number">0${index + 1}</div><img src="${product.image}" alt="${product.name} の画面イメージ"><div class="card-body"><p class="card-label">${product.label}</p><h3 class="card-title">${product.icon ? `<img class="card-icon" src="${product.icon}" alt="">` : ''}<span>${product.name}</span></h3><span class="text-link">詳しく見る <span aria-hidden="true">↗</span></span></div></a>`).join('')}</div></section><section class="contact-strip"><div><p class="eyebrow">GET IN TOUCH</p><h2>お問い合わせはこちらから。</h2></div><a class="button button-light" href="${CONTACT_FORM_URL}" target="_blank" rel="noreferrer">お問い合わせフォーム <span aria-hidden="true">↗</span></a></section></main>${footer()}`
}

function productPage(product: Product) {
  const storeLinks = product.links ? `<div class="store-links">${product.links}</div>` : ''
  const galleryHtml = product.gallery ? product.gallery.length > 1 ? `<div class="feature-gallery" data-gallery><button class="gallery-image-button" type="button" aria-label="画像を切り替える"><img src="${product.gallery[0]}" alt="${product.name} の紹介画像 1"></button><div class="gallery-dots" role="tablist" aria-label="紹介画像の選択">${product.gallery.map((_, index) => `<button type="button" role="tab" aria-selected="${index === 0}" aria-label="紹介画像 ${index + 1}" data-gallery-index="${index}"></button>`).join('')}</div></div>` : `<div class="feature-gallery"><img class="gallery-static-image" style="width:504px;max-width:100%;height:auto" src="${product.gallery[0]}" alt="${product.name} の利用シーン"></div>` : ''
  const privacyHtml = product.privacy.split('\n\n').map((paragraph) => `<p>${paragraph}</p>`).join('')
  const supportHtml = product.support ? product.support.split('\n\n').map((paragraph) => `<p>${paragraph}</p>`).join('') : ''
  const disclaimerHtml = product.disclaimer ? `<section class="disclaimer"><p class="eyebrow">DISCLAIMER</p><h2>免責事項</h2><p>${product.disclaimer}</p></section>` : ''
  const formUrl = product.formUrl ?? CONTACT_FORM_URL
  return `${header()}<main class="product-page"><a class="back-link" href="#/">← 製品一覧へ戻る</a><section class="product-hero accent-${product.accent}"><div><p class="eyebrow">PRODUCT / ${product.slug.toUpperCase()}</p><div class="product-title">${product.icon ? `<img src="${product.icon}" alt="${product.name} のアイコン">` : ''}<h1>${product.name}</h1></div><p class="product-label">${product.label}</p><p class="hero-lede">${product.description}</p>${storeLinks}</div><div class="product-image"><img src="${product.image}" alt="${product.name} の画面イメージ"></div></section><section class="detail-grid"><div><p class="eyebrow">FEATURES</p><h2>${product.name}の機能と特徴</h2>${galleryHtml}</div><ul class="feature-list">${product.features.map((feature, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><strong>${feature}</strong><i aria-hidden="true">↗</i></li>`).join('')}</ul></section>${product.support ? `<section class="support"><div><p class="eyebrow">SUPPORT</p><h2>サポート</h2></div><div class="support-copy">${supportHtml}<a class="button button-dark" href="${formUrl}" target="_blank" rel="noreferrer">フィードバックフォーム ↗</a></div></section>` : ''}${disclaimerHtml}<section class="privacy"><div><p class="eyebrow">PRIVACY POLICY</p><h2>プライバシー<br>ポリシー</h2></div><div class="privacy-copy">${privacyHtml}</div></section><section class="contact-strip"><div><p class="eyebrow">QUESTIONS?</p><h2>製品についての<br>お問い合わせはこちらから。</h2></div><a class="button button-light" href="${formUrl}" target="_blank" rel="noreferrer">フォームを開く <span aria-hidden="true">↗</span></a></section></main>${footer()}`
}

function initGallery() {
  const gallery = document.querySelector<HTMLElement>('[data-gallery]')
  if (!gallery) return
  const images = products.find((product) => product.gallery)?.gallery ?? []
  const imageButton = gallery.querySelector<HTMLButtonElement>('.gallery-image-button')!
  const image = imageButton.querySelector<HTMLImageElement>('img')!
  const dots = [...gallery.querySelectorAll<HTMLButtonElement>('[data-gallery-index]')]
  let currentIndex = 0
  let startX = 0
  const showImage = (index: number) => {
    currentIndex = (index + images.length) % images.length
    image.src = images[currentIndex]
    image.alt = `Expiry Date Manager の紹介画像 ${currentIndex + 1}`
    dots.forEach((dot, dotIndex) => dot.setAttribute('aria-selected', String(dotIndex === currentIndex)))
  }
  imageButton.addEventListener('click', () => showImage(currentIndex + 1))
  imageButton.addEventListener('pointerdown', (event) => { startX = event.clientX })
  imageButton.addEventListener('pointerup', (event) => {
    const distance = event.clientX - startX
    if (Math.abs(distance) > 30) showImage(currentIndex + (distance < 0 ? 1 : -1))
  })
  dots.forEach((dot) => dot.addEventListener('click', () => showImage(Number(dot.dataset.galleryIndex))))
}

function render() {
  const slug = window.location.hash.match(/^#\/product\/(.+)$/)?.[1]
  const product = products.find((item) => item.slug === slug || (slug === 'external-touch-screen' && item.slug === 'external-touch-display'))
  app.innerHTML = product ? productPage(product) : home()
  initGallery()
  window.scrollTo({ top: 0, behavior: 'instant' })
}

window.addEventListener('hashchange', render)
render()
