---
description: Vercel'e proje yükleme ve güncelleme rehberi
---

# Projeyi Vercel'e Yükleme ve Güncelleme

Bu rehber, projenizi Vercel'e nasıl yükleyeceğinizi (deploy) ve değişiklik yaptığınızda nasıl güncelleyeceğinizi adım adım anlatır.

## 1. Hazırlık: GitHub'a Yükleme

Vercel, projenizi GitHub'dan otomatik olarak çeker. Bu yüzden önce projenizi GitHub'a yüklemelisiniz.

1.  **GitHub'da Yeni Depo (Repository) Açın:**
    *   [github.com](https://github.com) adresine gidin ve sağ üstteki "+" ikonundan "New repository" seçin.
    *   Depo adını girin (örn: `dilek-hukuk-web`).
    *   "Public" veya "Private" seçin (Private önerilir).
    *   "Create repository" butonuna tıklayın.

2.  **Projeyi GitHub'a Bağlayın:**
    Terminalde proje klasörünüzde şu komutları sırasıyla çalıştırın (GitHub'ın size verdiği komutlar):

    ```bash
    git init
    git add .
    git commit -m "İlk yükleme"
    git branch -M main
    git remote add origin https://github.com/KULLANICI_ADINIZ/REPO_ADINIZ.git
    git push -u origin main
    ```
    *(Not: `KULLANICI_ADINIZ` ve `REPO_ADINIZ` kısımlarını kendi bilgilerinizle değiştirin.)*

## 2. Vercel'e Bağlama (Deploy)

1.  [vercel.com](https://vercel.com) adresine gidin ve GitHub hesabınızla giriş yapın.
2.  "Add New..." butonuna tıklayın ve "Project"i seçin.
3.  "Import Git Repository" kısmında GitHub hesabınızı göreceksiniz. Az önce oluşturduğunuz `dilek-hukuk-web` deposunun yanındaki "Import" butonuna tıklayın.
4.  **Configure Project:**
    *   **Framework Preset:** Vite (Otomatik algılamalı, algılamazsa seçin).
    *   **Root Directory:** `./` (Varsayılan).
    *   **Build Command:** `npm run build` (Varsayılan).
    *   **Output Directory:** `dist` (Varsayılan).
5.  "Deploy" butonuna tıklayın.
6.  Birkaç dakika içinde siteniz yayına girecek ve size bir link (örn: `dilek-hukuk-web.vercel.app`) verilecektir.

## 3. Projeyi Güncelleme

Müşterinizden geri dönüş aldınız ve kodu değiştirdiniz. Güncellemek için yapmanız gereken tek şey değişiklikleri GitHub'a göndermektir.

1.  Kodunuzda değişiklikleri yapın.
2.  Terminalden şu komutları çalıştırın:

    ```bash
    git add .
    git commit -m "Müşteri geri bildirimleri uygulandı"
    git push
    ```

3.  **Otomatik Güncelleme:** `git push` komutunu verdiğiniz anda Vercel değişikliği algılar, projeyi tekrar derler (build) ve yayındaki siteyi günceller. Bu işlem genellikle 1-2 dakika sürer.

## Özet
*   **İlk Kurulum:** GitHub'a yükle -> Vercel'e bağla.
*   **Güncelleme:** Kodu değiştir -> `git push` yap -> Vercel otomatik günceller.
