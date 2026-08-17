import './style.css'

type Product = {
  slug: string
  name: string
  label: string
  description: string
  image: string
  accent: string
  features: string[]
  privacy: string
  links?: string
}

const CONTACT_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfukmLPzPlqdynjy0gJYVWS8cR9vfqWD0fs5ZzvxSlfXPcLsw/viewform'

const products: Product[] = [
  {
    slug: 'expiry-date-manager',
    name: 'Expiry Date Manager',
    label: '暮らしの期限を、見える化する',
    description: '食品ロスを減らしたい方に最適な「賞味期限管理」アプリ。バーコードを読み取って商品を登録し、賞味期限が近づいたらプッシュ通知でお知らせします。音声での日付登録にも対応しています。',
    image: 'images/expiry-date-manager.svg',
    accent: 'mint',
    features: ['バーコードを読み取って登録。Open Food Factsに登録がある商品は画像・品名を自動取得', '「12月31日」と話しかけるだけで賞味期限を入力できる音声入力', '賞味期限が近づいたら端末内のローカル通知でお知らせ', '賞味期限リスト・品目データベース・サムネイルをGoogle DriveやiCloud Driveへバックアップ', '冷蔵庫・戸棚の在庫管理や食品ロス対策、家族の食材管理におすすめ'],
    privacy: '最終更新日：2026年4月16日\n\n収集する情報\n本アプリは、ユーザーの個人情報を収集・外部送信しません。\n\nデータの保存場所\n登録した賞味期限・品目名・画像はすべて、お使いの端末内およびユーザー自身のiCloudにのみ保存されます。開発者がこれらのデータにアクセスすることはありません。\n\n外部サービスとの通信\nバーコードをスキャンした際、読み取ったバーコード番号をOpen Food Facts API（https://world.openfoodfacts.org/）へ送信し、商品名・商品画像を取得します。バーコード番号以外の情報は送信しません。\n\nプッシュ通知\n本アプリのプッシュ通知は端末内のローカル通知です。外部サーバーへの送信は行いません。\n\n広告・解析・クラッシュレポート\n本アプリは広告SDK・解析SDK・クラッシュレポートSDKを使用していません。\n\nプライバシーポリシーの変更\n本ポリシーは予告なく変更される場合があります。変更後は本ページに掲載します。\n\nお問い合わせ\n本ポリシーに関するご質問はサポートページよりお送りください。',
    links: '<a href="https://apps.apple.com/jp/app/expiry-date-manager-%E8%B3%9E%E5%91%B3%E6%9C%9F%E9%99%90%E3%83%9E%E3%83%8D%E3%83%BC%E3%82%B8%E3%83%A3/id6761308148" target="_blank" rel="noreferrer">App Store ↗</a><a href="https://play.google.com/store/apps/details?id=com.expirydatemng" target="_blank" rel="noreferrer">Google Play ↗</a>',
  },
  {
    slug: 'external-touch-screen',
    name: 'eXternalTouchScreen',
    label: '離れた画面を、ひとつの操作感に',
    description: '外部ディスプレイやタッチデバイスを、日々の作業に自然につなげるためのユーティリティです。',
    image: 'images/external-touch-screen.svg',
    accent: 'coral',
    features: ['外部タッチ入力を扱いやすく整理', '作業環境に合わせてカスタマイズ', '軽快に動作する常駐ユーティリティ'],
    privacy: 'プライバシーポリシー本文を Google Site の掲載内容に置き換えてください。',
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
  return `<header class="site-header"><a class="brand" href="#/" aria-label="CorporateTopへ戻る"><span class="brand-mark">C</span><span>CorporateTop</span></a><nav aria-label="メインナビゲーション"><a href="#about">会社紹介</a><a href="#products">製品</a><a class="nav-contact" href="${CONTACT_FORM_URL}" target="_blank" rel="noreferrer">お問い合わせ <span aria-hidden="true">↗</span></a></nav></header>`
}

function footer() {
  return `<footer><div class="footer-brand"><span class="brand-mark">C</span><strong>CorporateTop</strong></div><p>暮らしの中の小さな不便を、ソフトウェアで整える。</p><small>© ${new Date().getFullYear()} CorporateTop</small></footer>`
}

function home() {
  return `${header()}<main><section class="hero"><div class="hero-copy"><p class="eyebrow">SOFTWARE FOR EVERYDAY LIFE</p><h1>暮らしのそばに、<br><em>ちょうどいい</em>ソフトウェア。</h1><p class="hero-lede">CorporateTop は、生活の中にある「あと少し」を見つけ、毎日を軽くするアプリをつくっています。</p><a class="button button-dark" href="#products">製品を見る <span aria-hidden="true">↓</span></a></div><div class="hero-art" aria-label="日常を整えるソフトウェアのイメージ"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="hero-note"><span class="note-dot"></span><span>small tools,<br>better days</span></div><div class="hero-panel"><div class="panel-top"><span></span><span></span><span></span></div><div class="panel-lines"><i></i><i></i><i></i></div><div class="panel-ring">03</div></div></div></section><section id="about" class="intro-section"><div class="section-index">01 / ABOUT</div><div><h2>生活支援のアプリを<br>ていねいに。</h2><p>大きな仕組みを増やすのではなく、日々の中で何度も使うものを、わかりやすく、気持ちよく。私たちは生活に寄り添う小さなソフトウェアを開発しています。</p></div></section><section id="products" class="products-section"><div class="section-heading"><div><p class="eyebrow">OUR PRODUCTS</p><h2>毎日を支える<br>3つの道具</h2></div><p>記録する。つなぐ。守る。<br>それぞれの場面に、専用の道具を。</p></div><div class="product-grid">${products.map((product, index) => `<a class="product-card accent-${product.accent}" href="#/product/${product.slug}"><div class="card-number">0${index + 1}</div><img src="${product.image}" alt="${product.name} の画面イメージ"><div class="card-body"><p class="card-label">${product.label}</p><h3>${product.name}</h3><span class="text-link">詳しく見る <span aria-hidden="true">↗</span></span></div></a>`).join('')}</div></section><section class="contact-strip"><div><p class="eyebrow">GET IN TOUCH</p><h2>ご質問やご相談は<br>お気軽に。</h2></div><a class="button button-light" href="${CONTACT_FORM_URL}" target="_blank" rel="noreferrer">お問い合わせフォーム <span aria-hidden="true">↗</span></a></section></main>${footer()}`
}

function productPage(product: Product) {
  return `${header()}<main class="product-page"><a class="back-link" href="#/">← 製品一覧へ戻る</a><section class="product-hero accent-${product.accent}"><div><p class="eyebrow">PRODUCT / ${product.slug.toUpperCase()}</p><h1>${product.name}</h1><p class="product-label">${product.label}</p><p class="hero-lede">${product.description}</p></div><div class="product-image"><img src="${product.image}" alt="${product.name} の画面イメージ"></div></section><section class="detail-grid"><div><p class="eyebrow">FEATURES</p><h2>使う人の毎日に、<br>自然になじむ機能。</h2></div><ul class="feature-list">${product.features.map((feature, index) => `<li><span>0${index + 1}</span><strong>${feature}</strong><i aria-hidden="true">↗</i></li>`).join('')}</ul></section><section class="privacy"><div><p class="eyebrow">PRIVACY POLICY</p><h2>プライバシー<br>ポリシー</h2></div><div class="privacy-copy"><p>${product.privacy}</p><p class="replace-note">※ 公開前に、Google Site に掲載中の正式な本文へ差し替えてください。</p></div></section><section class="contact-strip"><div><p class="eyebrow">QUESTIONS?</p><h2>製品について<br>お問い合わせください。</h2></div><a class="button button-light" href="${CONTACT_FORM_URL}" target="_blank" rel="noreferrer">フォームを開く <span aria-hidden="true">↗</span></a></section></main>${footer()}`
      <div><p class="eyebrow">PRODUCT / ${product.slug.toUpperCase()}</p><h1>${product.name}</h1><p class="product-label">${product.label}</p><p class="hero-lede">${product.description}</p>${product.links ? `<div class="store-links">${product.links}</div>` : ''}</div><div class="product-image"><img src="${product.image}" alt="${product.name} の画面イメージ"></div></section><section class="detail-grid"><div><p class="eyebrow">FEATURES</p><h2>使う人の毎日に、<br>自然になじむ機能。</h2></div><ul class="feature-list">${product.features.map((feature, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><strong>${feature}</strong><i aria-hidden="true">↗</i></li>`).join('')}</ul></section><section class="privacy"><div><p class="eyebrow">PRIVACY POLICY</p><h2>プライバシー<br>ポリシー</h2></div><div class="privacy-copy">${product.privacy.split('\n\n').map((paragraph) => `<p>${paragraph}</p>`).join('')}</div></section><section class="contact-strip"><div><p class="eyebrow">QUESTIONS?</p><h2>製品について<br>お問い合わせください。</h2></div><a class="button button-light" href="${CONTACT_FORM_URL}" target="_blank" rel="noreferrer">フォームを開く <span aria-hidden="true">↗</span></a></section></main>${footer()}`
}

function render() {
  const slug = window.location.hash.match(/^#\/product\/(.+)$/)?.[1]
  const product = products.find((item) => item.slug === slug)
  app.innerHTML = product ? productPage(product) : home()
  window.scrollTo({ top: 0, behavior: 'instant' })
}

window.addEventListener('hashchange', render)
render()
