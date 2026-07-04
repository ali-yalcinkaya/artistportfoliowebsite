# B. Figen Yalçınkaya — Tezhip & Minyatür Portfolyosu

Tezhip ve minyatür sanatçısı **B. Figen Yalçınkaya** için hazırlanmış, klasik
Türk bezeme sanatının estetiğini yansıtan portfolyo web sitesi.

- **Framework:** [Astro](https://astro.build) (statik site üreticisi — hızlı ve güvenli)
- **Stil:** Tailwind CSS v4 + klasik serif tipografi (Cormorant Garamond & EB Garamond)
- **İçerik Yönetimi (Admin Panel):** [Decap CMS](https://decapcms.org) (eski adıyla Netlify CMS)
- **Yayınlama (Deploy):** Netlify

## Sayfalar

| Sayfa | Yol | İçerik |
| --- | --- | --- |
| Ana Sayfa | `/` | Tanıtım, öne çıkan eserler |
| Hakkımda | `/hakkimda` | Biyografi, sergiler, kitaplar |
| Eserler | `/galeri` | Tüm eserler (masonry galeri + büyütme) |
| İletişim | `/iletisim` | E-posta ve telefon (tıklanabilir) |
| Yönetim Paneli | `/admin` | Eser ekleme/düzenleme (Decap CMS) |

> Tasarım gereği eserlerde **fiyat bilgisi gösterilmez.**

## Geliştirme

```bash
npm install       # bağımlılıkları kur
npm run dev       # http://localhost:4321 adresinde geliştirme sunucusu
npm run build     # dist/ klasörüne statik çıktı üret
npm run preview   # üretilen çıktıyı önizle
```

Node.js 20+ gereklidir.

## İçerik Yapısı

Her eser `src/content/artworks/` klasöründe ayrı bir Markdown dosyasıdır:

```markdown
---
title: "İnşirah Suresi"
technique: "Tezhip"
calligrapher: "Hat: Kenan Yüksel"
dimensions: "60 x 60 cm"
image: "/images/artworks/eser-03.jpeg"
order: 3
featured: false
description: "Eser hakkında açıklama..."
---
```

Görseller `public/images/artworks/` klasöründe tutulur.

## Yönetim Paneli ile Eser Ekleme (Kod Bilgisi Gerekmez)

Site yayına alındıktan sonra sanatçı yeni eserleri şu adımlarla ekleyebilir:

1. Tarayıcıda **`siteadresi/admin`** sayfasına gidin.
2. **GitHub** ile giriş yapın (Netlify Identity).
3. **Eserler** koleksiyonunda **"New Eser"** düğmesine tıklayın.
4. Eser görselini yükleyin, adını ve açıklamasını yazın.
5. **Publish** deyin — değişiklik GitHub'a kaydedilir ve Netlify siteyi
   otomatik olarak yeniden yayınlar.

### Netlify Kurulumu (İlk Kurulum — Yönetici İçin)

1. Bu depoyu [Netlify](https://app.netlify.com)'a bağlayın.
   Build ayarları `netlify.toml` içinde tanımlıdır (`npm run build` → `dist`).
2. Netlify panelinde **Identity** özelliğini etkinleştirin:
   *Site settings → Identity → Enable Identity.*
3. **Registration** ayarını *Invite only* yapın ve sanatçıyı e-posta ile
   davet edin (*Identity → Invite users*).
4. **Git Gateway**'i etkinleştirin:
   *Identity → Services → Git Gateway → Enable.*
5. Artık `/admin` üzerinden içerik yönetimi hazırdır.

> Not: `public/admin/config.yml` içindeki `branch` alanı, Netlify'ın yayın
> yaptığı dala (varsayılan `main`) göre ayarlanmalıdır.

## Lisans

Tüm görseller ve eserler © B. Figen Yalçınkaya. Tüm hakları saklıdır.
