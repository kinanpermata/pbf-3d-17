# 11 - Redux Thunk

## Tujuan Pembelajaran
1. Mahasiswa dapat mempelajari membuat login dengan Thunk

## Hasil Praktikum

1. Source Code

    1. Praktikum 1

        a. firebase.config.js

        ![SS-1-1-1](img/firebaseconfig.jpg)

        b. src/redux/actions/auth.js

        ![SS-1-1-2](img/authaction1.jpg)

        ![SS-1-1-3](img/authaction2.jpg)

        ![SS-1-1-4](img/authaction3.jpg)

        c. src/redux/reducers/auth.js

        ![SS-1-1-5](img/authreducer1.jpg)

        ![SS-1-1-6](img/authreducer2.jpg)

        d. src/redux/index.js

        ![SS-1-1-7](img/indexreducer.jpg)

        e. src/redux/configureStore.js

        ![SS-1-1-8](img/configurestore.jpg)

        f. src/components/Login.js

        ![SS-1-1-9](img/login1.jpg)

        ![SS-1-1-10](img/login2.jpg)

        g. src/components/Home.js

        ![SS-1-1-11](img/home.jpg)

        h. src/routes/protectedRoute.js

        ![SS-1-1-12](img/protectedroute.jpg)

        i. src/Root.js

        ![SS-1-1-13](img/root.jpg)

        j. src/App.js

        ![SS-1-1-14](img/app.jpg)


2. Hasil Tampilan

    1. Praktikum 1

        ![SS-2-1](img/hasillogin1.jpg)

        ![SS-2-2](img/hasillogin2.jpg)

3. Tugas

    1. Berdasarkan praktikum yang telah Anda lakukan, jelaskan perbedaan fitur yang ada dalam komponen Login dan Home! Mengapa komponen Login tidak menggunakan class seperti pada komponen Home?

    Jawaban:
    a. Perbedaan pada fitur Home dan Login adalah di halaman login memiliki fitur login dengan menggunakan email dan password sedangkan di halaman home memiliki tampilan halaman yang terproteksi.

    Gambar:

    ![SS-3-1](img/tugasno1.jpg)

    b. Mengapa Login tidak menggunakan class seperti Home karena fungsi halaman nya berbeda.

    2. Jelaskan kegunaan dan alur logika dari protectedRoute.js!

    Jawaban: Kegunaan nya untuk memproteksi route ketika dari Login ke Home.

    3. Coba lakukan login dengan email atau password yang salah, apa yang terjadi? Jelaskan!

    Jawaban: Ketika kita menekan tombol login dengan email/password yang salah akan muncul pemberitahuan sedang loading kemudian ketika dikonfirmasi salah maka akan muncul pemberitahuan jika email/password salah.

    Gambar:
    ![SS-3-3](img/tugasno3.jpg)

    4. Jika Anda berada di halaman Home, coba akses form login tanpa melakukan logout. Apakah form login bisa diakses? Jelaskan!

    Jawaban:

    5. Tambahkan menu Register pada form login sehingga user yang belum terdaftar dapat melakukan registrasi! Jika registrasi sukses, maka user langsung diarahkan ke halaman Home.

    Jawaban: