'use strict';
window.SCIpracticeGuides = {
  "http": [
    [
      "Bandingkan metode, endpoint, dan status respons.",
      "Compare methods, endpoints, and response statuses."
    ],
    [
      [
        "Pilih GET, isi /api/orders/12, lalu Periksa / Jalankan.",
        "Select GET, enter /api/orders/12, then Check / Execute."
      ],
      [
        "Pilih POST, ubah endpoint ke /api/orders; isi {\"product\":\"Mouse\",\"qty\":1}, lalu jalankan.",
        "Select POST, set /api/orders; enter {\"product\":\"Mouse\",\"qty\":1}, then execute."
      ],
      [
        "Ubah qty menjadi 0 dan jalankan; lalu pilih DELETE pada /api/orders/12.",
        "Set qty to 0 and execute; then try DELETE /api/orders/12."
      ]
    ],
    [
      "Urutan hasil: 200, 201, 422, lalu 403. Catat mengapa setiap status berbeda.",
      "Expected sequence: 200, 201, 422, then 403. Explain each status."
    ]
  ],
  "map": [
    [
      "Pisahkan metode, path, dan parameter query.",
      "Separate method, path, and query parameters."
    ],
    [
      [
        "Pilih Pencarian produk. Baca Network log; isi GET, /api/search, dan q.",
        "Select product search. Read Network log; enter GET, /api/search, and q."
      ],
      [
        "Jalankan pemeriksaan. Pilih Detail produk; ganti path menjadi /api/products/42 dan parameter menjadi -.",
        "Check. Select product detail; set path to /api/products/42 and parameter to -."
      ],
      [
        "Pilih Profil akun; isi GET, /api/me, dan -. Periksa kembali.",
        "Select account profile; enter GET, /api/me, and -. Check again."
      ]
    ],
    [
      "Ketiga fitur menghasilkan Inventaris sesuai. Simpan tiga baris metode/path/parameter.",
      "All three features produce a correct inventory. Record three method/path/parameter rows."
    ]
  ],
  "proxy": [
    [
      "Buktikan bahwa total checkout dihitung oleh server.",
      "Show that checkout totals are calculated by the server."
    ],
    [
      [
        "Jalankan JSON awal: sku KB01, qty 2, clientTotal 150000.",
        "Execute the initial JSON: sku KB01, qty 2, clientTotal 150000."
      ],
      [
        "Ubah hanya clientTotal menjadi 1000; jalankan dan bandingkan hasil.",
        "Change only clientTotal to 1000; execute and compare."
      ],
      [
        "Ubah qty menjadi 3; jalankan lagi.",
        "Set qty to 3 and execute again."
      ]
    ],
    [
      "serverTotal tetap 150000 saat harga browser diubah, lalu 225000 untuk qty 3. Catat kedua total.",
      "serverTotal stays 150000 after browser price tampering, then becomes 225000 for qty 3. Record both totals."
    ]
  ],
  "auth": [
    [
      "Verifikasi sesi dicabut setelah logout.",
      "Verify that logout revokes the session."
    ],
    [
      [
        "Klik Profil sebelum Login; amati 401 pada log.",
        "Click Profile before Login; observe 401 in the log."
      ],
      [
        "Klik Login lalu Profil; amati session=demo-123 dan 200.",
        "Click Login then Profile; observe session=demo-123 and 200."
      ],
      [
        "Klik Logout, lalu Uji token lama; amati hasil di panel bawah.",
        "Click Logout, then Retry old token; inspect the result below."
      ]
    ],
    [
      "Login memberi 200, logout 204, dan penggunaan ulang token menghasilkan 401. Simpan urutan tersebut.",
      "Login gives 200, logout 204, and old-token reuse gives 401. Record this sequence."
    ]
  ],
  "authz": [
    [
      "Bandingkan akses objek milik sendiri dan milik akun lain.",
      "Compare access to owned and other users' objects."
    ],
    [
      [
        "Pilih Andi, pesanan 104, pemeriksaan pemilik Aktif; jalankan.",
        "Choose Andi, order 104, ownership check Enabled; execute."
      ],
      [
        "Ganti pesanan ke 105 dengan pemeriksaan tetap Aktif; jalankan.",
        "Change order to 105 with checks Enabled; execute."
      ],
      [
        "Nonaktifkan pemeriksaan; jalankan untuk melihat kebocoran. Aktifkan kembali dan uji ulang.",
        "Disable checks; execute to observe exposure. Enable checks again and retest."
      ]
    ],
    [
      "104 memberi 200; 105 ditolak 403 saat terlindungi, tetapi memberi data Budi saat pemeriksaan mati.",
      "104 gives 200; protected 105 gives 403, but exposes Budi's data when checks are disabled."
    ]
  ],
  "sql": [
    [
      "Pisahkan sintaks query dan nilai input.",
      "Separate query syntax from input values."
    ],
    [
      [
        "Periksa kode awal; temukan penggabungan userInput ke query. Jalankan untuk melihat umpan balik.",
        "Inspect initial code; find userInput concatenation. Execute to see feedback."
      ],
      [
        "Ganti query menjadi SELECT * FROM users WHERE username = ?.",
        "Replace the query with SELECT * FROM users WHERE username = ?."
      ],
      [
        "Isi Parameter terikat dengan [userInput], lalu periksa lagi.",
        "Enter [userInput] in bound parameters, then check again."
      ]
    ],
    [
      "Hasil Perbaikan sesuai. Simpan query dan parameter; pemeriksaan ini berupa aturan teks, bukan eksekusi database.",
      "Expected: correct repair. Record query and parameters; this is a text-rule check, not database execution."
    ]
  ],
  "browser": [
    [
      "Bandingkan data teks dan markup HTML.",
      "Compare plain text and HTML markup."
    ],
    [
      [
        "Isi komentar <b>Halo</b>; pilih textContent dan jalankan.",
        "Enter <b>Halo</b>; select textContent and execute."
      ],
      [
        "Pilih innerHTML, jalankan, lalu bandingkan trace dan penjelasan.",
        "Select innerHTML, execute, then compare trace and explanation."
      ],
      [
        "Kembalikan ke textContent. Catat pilihan yang sesuai untuk komentar biasa.",
        "Return to textContent. Record the appropriate choice for plain comments."
      ]
    ],
    [
      "textContent mempertahankan tag sebagai teks; simulasi innerHTML menampilkan Halo. Tidak ada skrip yang dieksekusi.",
      "textContent preserves tags as text; simulated innerHTML shows Halo. No scripts are executed."
    ]
  ],
  "file": [
    [
      "Periksa batas direktori setelah normalisasi path.",
      "Check directory boundaries after path normalization."
    ],
    [
      [
        "Isi avatar.png lalu jalankan. Catat /app/uploads/avatar.png.",
        "Enter avatar.png and execute. Record /app/uploads/avatar.png."
      ],
      [
        "Ganti dengan ../config/settings.json lalu jalankan.",
        "Replace it with ../config/settings.json and execute."
      ],
      [
        "Coba subdir/../avatar.png untuk membandingkan path yang tetap di dalam direktori.",
        "Try subdir/../avatar.png to compare a path that stays inside the directory."
      ]
    ],
    [
      "Urutan 200, 403, 200. Ini simulasi batas path; tidak membuktikan file benar-benar ada atau dapat dibaca.",
      "Expected: 200, 403, 200. This simulates path boundaries; it does not verify file existence or read permissions."
    ]
  ],
  "config": [
    [
      "Hapus rincian internal dari respons publik.",
      "Remove internal details from public responses."
    ],
    [
      [
        "Baca contoh HTTP 500; tandai SQLSTATE dan /srv/app/db.php:42 sebagai informasi internal.",
        "Read the HTTP 500 example; identify SQLSTATE and /srv/app/db.php:42 as internal details."
      ],
      [
        "Coba respons yang masih memuat SQLSTATE, lalu periksa untuk melihat peringatan.",
        "Try a response containing SQLSTATE; check to see the warning."
      ],
      [
        "Ganti dengan {\"message\":\"Terjadi kesalahan\",\"reference\":\"ERR-104\"}; periksa lagi.",
        "Replace with {\"message\":\"An error occurred\",\"reference\":\"ERR-104\"}; check again."
      ]
    ],
    [
      "Respons umum diterima. Simpan contoh sebelum/sesudah; rincian teknis disimpan di log internal.",
      "The generic response is accepted. Record before/after examples; technical details belong in internal logs."
    ]
  ],
  "state": [
    [
      "Pastikan server menegakkan urutan transaksi.",
      "Verify that the server enforces transaction order."
    ],
    [
      [
        "Pada status Keranjang, klik Kirim terlebih dahulu.",
        "At Cart, click Ship first."
      ],
      [
        "Klik Bayar lalu Kirim; amati perubahan status dan respons.",
        "Click Pay then Ship; inspect state changes and responses."
      ],
      [
        "Klik Mulai ulang, lalu Bayar dan Refund untuk mencoba cabang lain.",
        "Click Reset, then Pay and Refund to test another branch."
      ]
    ],
    [
      "Kirim sebelum bayar ditolak 409. Bayar -> Kirim dan Bayar -> Refund diterima 200. Catat transisi valid/tidak valid.",
      "Shipping before payment gives 409. Pay -> Ship and Pay -> Refund give 200. Record valid/invalid transitions."
    ]
  ],
  "report": [
    [
      "Tulis draf temuan yang dapat diuji ulang.",
      "Write a reproducible finding draft."
    ],
    [
      [
        "Lengkapi bukti: Andi meminta GET /api/orders/105 dan menerima data milik Budi.",
        "Record evidence: Andi requests GET /api/orders/105 and receives Budi's data."
      ],
      [
        "Isi dampak (data pesanan akun lain terbaca) dan rekomendasi (periksa pemilik objek di server).",
        "Describe impact (another account's order is readable) and fix (server-side object ownership check)."
      ],
      [
        "Isi retest: ulangi sebagai Andi, harapkan 403 untuk 105 dan 200 untuk 104. Periksa laporan.",
        "Plan retest: as Andi, expect 403 for 105 and 200 for 104. Check the report."
      ]
    ],
    [
      "Keempat bagian harus terisi kalimat bermakna, minimal 15 karakter per bagian. Status lengkap hanya menilai kelengkapan, bukan akurasi teknis.",
      "All four sections need meaningful text, at least 15 characters each. Completeness does not establish technical accuracy."
    ]
  ]
};
window.SCIpracticeTrials = {
  "http": [
    {
      "steps": [
        [
          "Pilih GET, isi /api/orders/12, lalu Periksa / Jalankan.",
          "Select GET, enter /api/orders/12, then Check / Execute."
        ],
        [
          "Klik Periksa / Jalankan setelah mengisi atau mengubah kolom.",
          "Click Check / Execute after entering or changing the fields."
        ]
      ],
      "expected": [
        "200 OK: data pesanan 12 ditampilkan.",
        "200 OK: order 12 is returned."
      ]
    },
    {
      "steps": [
        [
          "Pilih POST, ubah endpoint ke /api/orders; isi {\"product\":\"Mouse\",\"qty\":1}, lalu jalankan.",
          "Select POST, set /api/orders; enter {\"product\":\"Mouse\",\"qty\":1}, then execute."
        ],
        [
          "Klik Periksa / Jalankan setelah mengisi atau mengubah kolom.",
          "Click Check / Execute after entering or changing the fields."
        ]
      ],
      "expected": [
        "201 Created: pesanan baru dibuat.",
        "201 Created: a new order is created."
      ]
    },
    {
      "steps": [
        [
          "Pilih POST; isi endpoint /api/orders.",
          "Select POST; set endpoint /api/orders."
        ],
        [
          "Isi JSON body {\"product\":\"Mouse\",\"qty\":0}, lalu klik Periksa / Jalankan.",
          "Enter JSON body {\"product\":\"Mouse\",\"qty\":0}, then click Check / Execute."
        ]
      ],
      "expected": [
        "422 Unprocessable Content: qty harus bilangan bulat positif.",
        "422 Unprocessable Content: qty must be a positive integer."
      ]
    },
    {
      "steps": [
        [
          "Pilih DELETE; isi endpoint /api/orders/12.",
          "Select DELETE; set endpoint /api/orders/12."
        ],
        [
          "Klik Periksa / Jalankan untuk menguji izin penghapusan.",
          "Click Check / Execute to test deletion permissions."
        ]
      ],
      "expected": [
        "403 Forbidden: akun latihan tidak memiliki izin menghapus.",
        "403 Forbidden: the practice account lacks deletion permissions."
      ]
    }
  ],
  "map": [
    {
      "steps": [
        [
          "Pilih fitur Pencarian produk; baca GET /api/search?q=mouse pada Network log.",
          "Select product search; read GET /api/search?q=mouse in Network log."
        ],
        [
          "Isi Metode: GET; Path tanpa query: /api/search; Parameter: q.",
          "Enter Method: GET; Path: /api/search; Parameter: q."
        ],
        [
          "Klik Periksa / Jalankan, lalu cocokkan hasil di bawah.",
          "Click Check / Execute and compare the result below."
        ]
      ],
      "expected": [
        "Inventaris sesuai: GET -> /api/search -> q.",
        "Correct inventory: GET -> /api/search -> q."
      ]
    },
    {
      "steps": [
        [
          "Pilih Detail produk; amati perubahan Network log.",
          "Select product detail; inspect the updated Network log."
        ],
        [
          "Isi Metode: GET; Path tanpa query: /api/products/42; Parameter: -.",
          "Enter Method: GET; Path: /api/products/42; Parameter: -."
        ],
        [
          "Klik Periksa / Jalankan. Jangan salin parameter q dari percobaan sebelumnya.",
          "Click Check / Execute. Remove q from the previous attempt."
        ]
      ],
      "expected": [
        "Inventaris sesuai: GET -> /api/products/42 -> -.",
        "Correct inventory: GET -> /api/products/42 -> -."
      ]
    },
    {
      "steps": [
        [
          "Pilih Profil akun; baca GET /api/me pada Network log.",
          "Select account profile; read GET /api/me in Network log."
        ],
        [
          "Isi Metode: GET; Path tanpa query: /api/me; Parameter: -.",
          "Enter Method: GET; Path: /api/me; Parameter: -."
        ],
        [
          "Klik Periksa / Jalankan, lalu bandingkan ketiga endpoint.",
          "Click Check / Execute, then compare the three endpoints."
        ]
      ],
      "expected": [
        "Inventaris sesuai: GET -> /api/me -> -.",
        "Correct inventory: GET -> /api/me -> -."
      ]
    }
  ],
  "proxy": [
    {
      "steps": [
        [
          "Jalankan JSON awal: sku KB01, qty 2, clientTotal 150000.",
          "Execute the initial JSON: sku KB01, qty 2, clientTotal 150000."
        ],
        [
          "Klik Periksa / Jalankan setelah mengisi atau mengubah kolom.",
          "Click Check / Execute after entering or changing the fields."
        ]
      ],
      "expected": [
        "serverTotal = 150000; changed = false.",
        "serverTotal = 150000; changed = false."
      ]
    },
    {
      "steps": [
        [
          "Ubah hanya clientTotal menjadi 1000; jalankan dan bandingkan hasil.",
          "Change only clientTotal to 1000; execute and compare."
        ],
        [
          "Klik Periksa / Jalankan setelah mengisi atau mengubah kolom.",
          "Click Check / Execute after entering or changing the fields."
        ]
      ],
      "expected": [
        "serverTotal = 150000; changed = true.",
        "serverTotal = 150000; changed = true."
      ]
    },
    {
      "steps": [
        [
          "Ubah qty menjadi 3; jalankan lagi.",
          "Set qty to 3 and execute again."
        ],
        [
          "Klik Periksa / Jalankan setelah mengisi atau mengubah kolom.",
          "Click Check / Execute after entering or changing the fields."
        ]
      ],
      "expected": [
        "serverTotal = 225000; changed = true.",
        "serverTotal = 225000; changed = true."
      ]
    }
  ],
  "auth": [
    {
      "steps": [
        [
          "Klik Profil sebelum Login; amati 401 pada log.",
          "Click Profile before Login; observe 401 in the log."
        ]
      ],
      "expected": [
        "401 Unauthorized: belum ada sesi aktif.",
        "401 Unauthorized: no active session."
      ]
    },
    {
      "steps": [
        [
          "Klik Login lalu Profil; amati session=demo-123 dan 200.",
          "Click Login then Profile; observe session=demo-123 and 200."
        ]
      ],
      "expected": [
        "Login dan akses profil menghasilkan 200 OK.",
        "Login and profile access return 200 OK."
      ]
    },
    {
      "steps": [
        [
          "Klik Logout, lalu Uji token lama; amati hasil di panel bawah.",
          "Click Logout, then Retry old token; inspect the result below."
        ]
      ],
      "expected": [
        "Logout menghasilkan 204; token lama ditolak dengan 401.",
        "Logout returns 204; the old token returns 401."
      ]
    }
  ],
  "authz": [
    {
      "steps": [
        [
          "Pilih Andi, pesanan 104, pemeriksaan pemilik Aktif; jalankan.",
          "Choose Andi, order 104, ownership check Enabled; execute."
        ],
        [
          "Klik Periksa / Jalankan setelah mengisi atau mengubah kolom.",
          "Click Check / Execute after entering or changing the fields."
        ]
      ],
      "expected": [
        "200 OK: pesanan 104 milik Andi.",
        "200 OK: Andi owns order 104."
      ]
    },
    {
      "steps": [
        [
          "Ganti pesanan ke 105 dengan pemeriksaan tetap Aktif; jalankan.",
          "Change order to 105 with checks Enabled; execute."
        ],
        [
          "Klik Periksa / Jalankan setelah mengisi atau mengubah kolom.",
          "Click Check / Execute after entering or changing the fields."
        ]
      ],
      "expected": [
        "403 Forbidden: pesanan 105 milik Budi.",
        "403 Forbidden: Budi owns order 105."
      ]
    },
    {
      "steps": [
        [
          "Nonaktifkan pemeriksaan; jalankan untuk melihat kebocoran. Aktifkan kembali dan uji ulang.",
          "Disable checks; execute to observe exposure. Enable checks again and retest."
        ],
        [
          "Klik Periksa / Jalankan setelah mengisi atau mengubah kolom.",
          "Click Check / Execute after entering or changing the fields."
        ]
      ],
      "expected": [
        "Pemeriksaan mati: 200 dan data Budi bocor. Aktif kembali: 403.",
        "Checks disabled: 200 exposes Budi's data. Enabled again: 403."
      ]
    }
  ],
  "sql": [
    {
      "steps": [
        [
          "Klik Ulangi untuk mengembalikan query awal dan mengosongkan parameter.",
          "Click Reset to restore the initial query and clear parameters."
        ],
        [
          "Baca penggabungan userInput dalam Query SQL, lalu klik Periksa / Jalankan.",
          "Inspect userInput concatenation in Query SQL, then click Check / Execute."
        ]
      ],
      "expected": [
        "Masih perlu diperbaiki: query masih menggabungkan input.",
        "Repair required: the query still concatenates input."
      ]
    },
    {
      "steps": [
        [
          "Ganti Query SQL menjadi SELECT * FROM users WHERE username = ?.",
          "Set Query SQL to SELECT * FROM users WHERE username = ?."
        ],
        [
          "Kosongkan Parameter terikat, lalu klik Periksa / Jalankan.",
          "Clear bound parameters, then click Check / Execute."
        ]
      ],
      "expected": [
        "Masih perlu diperbaiki: placeholder belum disertai parameter.",
        "Repair required: the placeholder has no bound parameter."
      ]
    },
    {
      "steps": [
        [
          "Pastikan query SELECT * FROM users WHERE username = ?.",
          "Ensure the query is SELECT * FROM users WHERE username = ?."
        ],
        [
          "Isi Parameter terikat dengan [userInput], lalu klik Periksa / Jalankan.",
          "Enter [userInput] in bound parameters, then click Check / Execute."
        ]
      ],
      "expected": [
        "Perbaikan sesuai: input dipisahkan dari sintaks SQL.",
        "Correct repair: input is separated from SQL syntax."
      ]
    }
  ],
  "browser": [
    {
      "steps": [
        [
          "Isi komentar <b>Halo</b>; pilih textContent dan jalankan.",
          "Enter <b>Halo</b>; select textContent and execute."
        ],
        [
          "Klik Periksa / Jalankan setelah mengisi atau mengubah kolom.",
          "Click Check / Execute after entering or changing the fields."
        ]
      ],
      "expected": [
        "Tag <b>Halo</b> tampil utuh sebagai teks.",
        "The full <b>Halo</b> markup appears as text."
      ]
    },
    {
      "steps": [
        [
          "Pilih innerHTML, jalankan, lalu bandingkan trace dan penjelasan.",
          "Select innerHTML, execute, then compare trace and explanation."
        ],
        [
          "Klik Periksa / Jalankan setelah mengisi atau mengubah kolom.",
          "Click Check / Execute after entering or changing the fields."
        ]
      ],
      "expected": [
        "Trace menjadi Halo; penjelasan menyatakan markup diinterpretasikan.",
        "Trace becomes Halo; feedback explains markup interpretation."
      ]
    },
    {
      "steps": [
        [
          "Kembalikan ke textContent. Catat pilihan yang sesuai untuk komentar biasa.",
          "Return to textContent. Record the appropriate choice for plain comments."
        ],
        [
          "Klik Periksa / Jalankan setelah mengisi atau mengubah kolom.",
          "Click Check / Execute after entering or changing the fields."
        ]
      ],
      "expected": [
        "Mode aman kembali: tag tampil sebagai teks biasa.",
        "Safe mode restored: tags appear as plain text."
      ]
    }
  ],
  "file": [
    {
      "steps": [
        [
          "Isi avatar.png lalu jalankan. Catat /app/uploads/avatar.png.",
          "Enter avatar.png and execute. Record /app/uploads/avatar.png."
        ],
        [
          "Klik Periksa / Jalankan setelah mengisi atau mengubah kolom.",
          "Click Check / Execute after entering or changing the fields."
        ]
      ],
      "expected": [
        "200 OK; path /app/uploads/avatar.png.",
        "200 OK; path /app/uploads/avatar.png."
      ]
    },
    {
      "steps": [
        [
          "Ganti dengan ../config/settings.json lalu jalankan.",
          "Replace it with ../config/settings.json and execute."
        ],
        [
          "Klik Periksa / Jalankan setelah mengisi atau mengubah kolom.",
          "Click Check / Execute after entering or changing the fields."
        ]
      ],
      "expected": [
        "403 Forbidden; path /app/config/settings.json.",
        "403 Forbidden; path /app/config/settings.json."
      ]
    },
    {
      "steps": [
        [
          "Coba subdir/../avatar.png untuk membandingkan path yang tetap di dalam direktori.",
          "Try subdir/../avatar.png to compare a path that stays inside the directory."
        ],
        [
          "Klik Periksa / Jalankan setelah mengisi atau mengubah kolom.",
          "Click Check / Execute after entering or changing the fields."
        ]
      ],
      "expected": [
        "200 OK; path kembali ke /app/uploads/avatar.png.",
        "200 OK; path resolves to /app/uploads/avatar.png."
      ]
    }
  ],
  "config": [
    {
      "steps": [
        [
          "Baca kotak Respons tidak aman. Temukan SQLSTATE dan /srv/app/db.php:42.",
          "Read the unsafe response. Find SQLSTATE and /srv/app/db.php:42."
        ],
        [
          "Catat informasi yang terungkap sebelum mengubah respons publik.",
          "Identify the exposed information before editing the public response."
        ]
      ],
      "expected": [
        "Tandai dua kebocoran: jenis error SQL dan path file internal.",
        "Identify two leaks: SQL error details and an internal file path."
      ]
    },
    {
      "steps": [
        [
          "Isi Respons pengganti untuk pengguna dengan SQLSTATE: connection failed /srv/app/db.php:42.",
          "Enter SQLSTATE: connection failed /srv/app/db.php:42 in replacement response."
        ],
        [
          "Klik Periksa / Jalankan untuk menguji respons yang masih bocor.",
          "Click Check / Execute to test a response that still exposes details."
        ]
      ],
      "expected": [
        "Masih membocorkan informasi: rincian internal belum dihapus.",
        "Information still exposed: internal details remain."
      ]
    },
    {
      "steps": [
        [
          "Ganti dengan {\"message\":\"Terjadi kesalahan\",\"reference\":\"ERR-104\"}; periksa lagi.",
          "Replace with {\"message\":\"An error occurred\",\"reference\":\"ERR-104\"}; check again."
        ]
      ],
      "expected": [
        "Respons publik aman: pesan umum dan ID referensi.",
        "Safe public response: generic message and reference ID."
      ]
    }
  ],
  "state": [
    {
      "steps": [
        [
          "Pada status Keranjang, klik Kirim terlebih dahulu.",
          "At Cart, click Ship first."
        ]
      ],
      "expected": [
        "409 Conflict; status tetap Keranjang.",
        "409 Conflict; state remains Cart."
      ]
    },
    {
      "steps": [
        [
          "Klik Bayar lalu Kirim; amati perubahan status dan respons.",
          "Click Pay then Ship; inspect state changes and responses."
        ]
      ],
      "expected": [
        "200 OK; status Dibayar lalu Dikirim.",
        "200 OK; state becomes Paid, then Shipped."
      ]
    },
    {
      "steps": [
        [
          "Klik Mulai ulang, lalu Bayar dan Refund untuk mencoba cabang lain.",
          "Click Reset, then Pay and Refund to test another branch."
        ]
      ],
      "expected": [
        "200 OK; status Dibayar lalu Dikembalikan.",
        "200 OK; state becomes Paid, then Refunded."
      ]
    }
  ],
  "report": [
    {
      "steps": [
        [
          "Lengkapi bukti: Andi meminta GET /api/orders/105 dan menerima data milik Budi.",
          "Record evidence: Andi requests GET /api/orders/105 and receives Budi's data."
        ],
        [
          "Klik Periksa / Jalankan setelah mengisi atau mengubah kolom.",
          "Click Check / Execute after entering or changing the fields."
        ],
        [
          "Klik Periksa / Jalankan saat tiga bagian lainnya masih kosong.",
          "Click Check / Execute while the other three sections are empty."
        ]
      ],
      "expected": [
        "Laporan belum lengkap; dampak, rekomendasi, dan retest masih kosong.",
        "Incomplete report: impact, fix, and retest are still empty."
      ]
    },
    {
      "steps": [
        [
          "Isi dampak (data pesanan akun lain terbaca) dan rekomendasi (periksa pemilik objek di server).",
          "Describe impact (another account's order is readable) and fix (server-side object ownership check)."
        ],
        [
          "Klik Periksa / Jalankan setelah mengisi atau mengubah kolom.",
          "Click Check / Execute after entering or changing the fields."
        ],
        [
          "Biarkan Rencana retest kosong; klik Periksa / Jalankan.",
          "Leave the retest plan empty; click Check / Execute."
        ]
      ],
      "expected": [
        "Laporan belum lengkap; rencana retest belum diisi.",
        "Incomplete report: the retest plan is still empty."
      ]
    },
    {
      "steps": [
        [
          "Isi retest: ulangi sebagai Andi, harapkan 403 untuk 105 dan 200 untuk 104. Periksa laporan.",
          "Plan retest: as Andi, expect 403 for 105 and 200 for 104. Check the report."
        ],
        [
          "Klik Periksa / Jalankan setelah mengisi atau mengubah kolom.",
          "Click Check / Execute after entering or changing the fields."
        ]
      ],
      "expected": [
        "Draf laporan lengkap; empat bagian tampil dalam hasil.",
        "Complete draft: all four sections appear in the result."
      ]
    }
  ]
};
