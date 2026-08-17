# CorporateTop

生活支援のソフトウェアを紹介する静的サイトです。Vite + TypeScript で構成し、GitHub Pages へ自動デプロイできます。

## ローカルで確認

```bash
npm install
npm run dev
```

本番ビルドは `npm run build` です。

## 公開前に差し替える場所

- `src/main.ts` の `CONTACT_FORM_URL` を Google Forms の公開URLへ変更
- `src/main.ts` の `products` に Google Site の正式な特徴・プライバシーポリシー本文を反映
- 実際の製品画像を `public/images/` に同じファイル名で配置
  - `expiry-date-manager.svg`
  - `external-touch-screen.svg`
  - `antiswipe.svg`

SVG以外の画像を使う場合は、`src/main.ts` の各 `image` パスも変更してください。

## GitHubで公開

1. GitHubで空のリポジトリを作成し、このフォルダを `main` ブランチへ push
2. GitHubリポジトリの Settings > Pages > Build and deployment で Source を `GitHub Actions` に設定
3. `main` への push 後、Actions の `Deploy to GitHub Pages` が成功すると公開URLが表示されます
4. 独自ドメインは Settings > Pages > Custom domain にドメインを入力し、DNS側で指定されたCNAMEまたはAレコードを設定

独自ドメインを使う場合は、GitHub PagesのCustom domain設定後にHTTPSを有効化してください。
