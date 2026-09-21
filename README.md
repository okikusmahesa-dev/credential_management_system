## Pengembangan lokal

Prasyarat: Node.js 20+, pnpm (atau npm), dan Docker Desktop.

1. Jalankan PostgreSQL:

```bash
docker compose up -d postgres
```

2. Buat `backend/.env` (pastikan file ini tidak masuk dalam kontrol versi):

```env
DATABASE_URL="postgresql://credential_app:credential_dev_password@localhost:5432/credential_manager?schema=public"
JWT_SECRET="replace-with-a-long-random-secret"
CREDENTIAL_ENCRYPTION_KEY="<base64 value containing exactly 32 bytes>"
```

Buat kunci enkripsi menggunakan perintah `openssl rand -base64 32`.

3. Instal dan inisialisasi backend:

```bash
cd backend
npm install
npx prisma migrate deploy
npx prisma db seed
npm run start:dev
```

Proses *seed* membuat akun `admin` dengan kata sandi `Admin123!`. Ubah kata sandi tersebut sebelum menggunakan instans yang telah di-*deploy*.

4. Jalankan frontend di terminal kedua:

```bash
cd frontend
pnpm install
pnpm dev --port 3001
```

Buka `http://localhost:3001`. API berjalan di `http://localhost:3000` dan basis data di `localhost:5432`.

## Kemampuan API

Semua *endpoint* sumber daya memerlukan JWT yang diperoleh dari `POST /auth/login`:

- `GET|POST|PATCH|DELETE /credential-groups` dengan menu bersarang di `GET /credential-groups/menu`
- `GET|POST|PATCH|DELETE /credential-categories`
- `GET|POST|PATCH|DELETE /credentials` dengan parameter `page`, `limit`, `search`, `groupId`, dan `categoryId`

*Endpoint* penghapusan hanya menetapkan nilai `deletedAt` dan `deletedBy`. Rahasia kredensial dienkripsi menggunakan AES-256-GCM sebelum disimpan dan hanya didekripsi dalam respons API yang terautentikasi. Kunci enkripsi hanya dibaca oleh lingkungan backend. ## Deployment ke lingkungan produksi

Lakukan build pada backend dengan menjalankan `cd backend && npm run build`, atur variabel lingkungan produksi `DATABASE_URL`, `JWT_SECRET`, dan `CREDENTIAL_ENCRYPTION_KEY`, lalu jalankan `npx prisma migrate deploy` diikuti dengan `npm run start:prod`. Lakukan build pada aplikasi Nuxt dengan `cd frontend && pnpm build`; atur `NUXT_PUBLIC_API_BASE_URL` ke URL API publik dan jalankan `pnpm preview`, atau deploy direktori `.output` yang dihasilkan ke host yang kompatibel dengan Node.