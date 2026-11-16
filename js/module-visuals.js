'use strict';
(()=>{
const cases={
  "http": {
    "title": [
      "Satu request, satu respons",
      "One request, one response"
    ],
    "caption": [
      "Browser mengirim metode, path, dan cookie. Server memeriksa sesi serta izin sebelum mengembalikan status, header, dan body.",
      "The browser sends method, path, and cookie. The server checks session and permission before returning status, headers, and body."
    ],
    "nodes": [
      [
        "browser",
        "Browser",
        "GET /api/orders/12"
      ],
      [
        "server",
        "Server",
        "Cookie: session=demo"
      ],
      [
        "file",
        "Response",
        "200 OK + JSON"
      ]
    ],
    "edges": [
      [
        0,
        1,
        "request"
      ],
      [
        1,
        2,
        "response"
      ]
    ],
    "notes": [
      [
        "Request: minta resource",
        "Request: retrieve a resource"
      ],
      [
        "Cookie mengidentifikasi sesi",
        "Cookie identifies a session"
      ],
      [
        "Status tidak membuktikan izin",
        "Status does not prove permission"
      ]
    ]
  },
  "map": {
    "title": [
      "Dari fitur ke lokasi input",
      "From features to input locations"
    ],
    "caption": [
      "Setiap fitur dipetakan ke metode, path, dan lokasi input. Parameter query berbeda dengan ID pada path atau data dalam body.",
      "Map each feature to its method, path, and input location. A query parameter differs from a path ID or body data."
    ],
    "nodes": [
      [
        "search",
        "Pencarian / Search",
        "GET /api/search?q=mouse"
      ],
      [
        "file",
        "Detail produk / Product",
        "GET /api/products/42"
      ],
      [
        "lock",
        "Profil / Profile",
        "GET /api/me"
      ]
    ],
    "edges": [],
    "notes": [
      [
        "Query: q = mouse",
        "Query: q = mouse"
      ],
      [
        "Path: ID = 42",
        "Path: ID = 42"
      ],
      [
        "Header: Cookie sesi",
        "Header: session cookie"
      ]
    ]
  },
  "proxy": {
    "title": [
      "Harga dari browser diperiksa ulang",
      "Recheck browser-supplied prices"
    ],
    "caption": [
      "Proxy dapat mengubah request. Server menggunakan harga katalog untuk menghitung total, sehingga clientTotal tidak menentukan jumlah pembayaran.",
      "A proxy can edit requests. The server calculates totals using catalog prices rather than clientTotal."
    ],
    "nodes": [
      [
        "browser",
        "Browser",
        "qty: 2 | total: 150000"
      ],
      [
        "search",
        "Proxy",
        "clientTotal: 1000"
      ],
      [
        "server",
        "Server",
        "2 x 75000 = 150000"
      ]
    ],
    "edges": [
      [
        0,
        1,
        "request"
      ],
      [
        1,
        2,
        "edit + forward"
      ]
    ],
    "notes": [
      [
        "Harga dikirim klien",
        "Client-supplied price"
      ],
      [
        "Ubah satu nilai lalu bandingkan",
        "Change one value and compare"
      ],
      [
        "Gunakan harga katalog",
        "Use catalog prices"
      ]
    ]
  },
  "auth": {
    "title": [
      "Logout mencabut sesi",
      "Logout revokes the session"
    ],
    "caption": [
      "Setelah login, browser membawa ID sesi. Logout mencabut sesi pada server; pemakaian token lama kemudian ditolak.",
      "After login the browser carries a session ID. Logout revokes the server session, so reuse of the old token is rejected."
    ],
    "nodes": [
      [
        "lock",
        "Login",
        "200 | session=demo-123"
      ],
      [
        "shield",
        "Logout",
        "204 | revoke demo-123"
      ],
      [
        "browser",
        "Token lama / Old token",
        "GET /api/me -> 401"
      ]
    ],
    "edges": [
      [
        0,
        1,
        "session active"
      ],
      [
        1,
        2,
        "session revoked"
      ]
    ],
    "notes": [
      [
        "Identitas sudah diverifikasi",
        "Identity verified"
      ],
      [
        "Hapus validitas pada server",
        "Revoke validity on the server"
      ],
      [
        "Token ada, sesi tidak aktif",
        "Token exists, session is inactive"
      ]
    ]
  },
  "authz": {
    "title": [
      "Login tidak memberi akses ke semua pesanan",
      "Login does not grant access to every order"
    ],
    "caption": [
      "Andi boleh membaca pesanan 104 miliknya. Permintaan ke pesanan 105 milik Budi harus ditolak walaupun Andi sudah login.",
      "Andi may read his own order 104. Access to Budi's order 105 must be denied even when Andi is signed in."
    ],
    "nodes": [
      [
        "lock",
        "Andi",
        "session valid"
      ],
      [
        "file",
        "Order 104",
        "owner: Andi | 200 OK"
      ],
      [
        "file",
        "Order 105",
        "owner: Budi | 403"
      ]
    ],
    "edges": [
      [
        0,
        1,
        "owner = Andi"
      ],
      [
        0,
        2,
        "owner != Andi"
      ]
    ],
    "notes": [
      [
        "Authentication: siapa Anda?",
        "Authentication: who are you?"
      ],
      [
        "Akses objek sendiri diterima",
        "Access to own object allowed"
      ],
      [
        "Akses lintas akun ditolak",
        "Cross-account access denied"
      ]
    ]
  },
  "sql": {
    "title": [
      "Pisahkan kode SQL dari nilai input",
      "Separate SQL code from input values"
    ],
    "caption": [
      "Placeholder menjaga struktur query tetap. Nilai userInput dikirim sebagai parameter terikat, bukan disambungkan menjadi sintaks SQL.",
      "A placeholder preserves query structure. userInput is supplied as a bound value rather than concatenated into SQL syntax."
    ],
    "nodes": [
      [
        "code",
        "Query",
        "WHERE username = ?"
      ],
      [
        "file",
        "Parameter",
        "[userInput]"
      ],
      [
        "database",
        "Database",
        "SQL + bound value"
      ]
    ],
    "edges": [
      [
        0,
        2,
        "SQL template"
      ],
      [
        1,
        2,
        "value binding"
      ]
    ],
    "notes": [
      [
        "Struktur ditentukan aplikasi",
        "Application defines structure"
      ],
      [
        "Input diperlakukan sebagai data",
        "Input is treated as data"
      ],
      [
        "Gunakan binding driver database",
        "Use database driver binding"
      ]
    ]
  },
  "browser": {
    "title": [
      "Input sama, cara render berbeda",
      "Same input, different rendering"
    ],
    "caption": [
      "textContent menampilkan tag sebagai teks. innerHTML menafsirkan markup; input tidak tepercaya memerlukan penanganan sesuai konteks.",
      "textContent displays tags as text. innerHTML interprets markup; untrusted input requires context-appropriate handling."
    ],
    "nodes": [
      [
        "code",
        "Komentar / Comment",
        "<b>Halo</b>"
      ],
      [
        "shield",
        "textContent",
        "<b>Halo</b>"
      ],
      [
        "browser",
        "innerHTML",
        "Halo (bold)"
      ]
    ],
    "edges": [
      [
        0,
        1,
        "plain text"
      ],
      [
        0,
        2,
        "HTML parsing"
      ]
    ],
    "notes": [
      [
        "Input berasal dari pengguna",
        "Input originates from a user"
      ],
      [
        "Tag tidak menjadi elemen HTML",
        "Tags do not become HTML elements"
      ],
      [
        "Markup membentuk elemen DOM",
        "Markup creates DOM elements"
      ]
    ]
  },
  "file": {
    "title": [
      "Normalisasi dahulu, periksa batas folder",
      "Normalize first, check the folder boundary"
    ],
    "caption": [
      "Gabungkan path dengan direktori unggahan, normalisasi, lalu pastikan hasil tetap di /app/uploads/. Pemeriksaan izin dan keberadaan file tetap diperlukan.",
      "Resolve the path against uploads, normalize it, and verify that it stays in /app/uploads/. Permissions and file existence still require checking."
    ],
    "nodes": [
      [
        "file",
        "/app/uploads/",
        "Allowed directory"
      ],
      [
        "file",
        "avatar.png",
        "/app/uploads/avatar.png"
      ],
      [
        "alert",
        "../config/settings.json",
        "/app/config/settings.json"
      ]
    ],
    "edges": [
      [
        0,
        1,
        "inside -> 200"
      ],
      [
        0,
        2,
        "outside -> 403"
      ]
    ],
    "notes": [
      [
        "Batas akses folder",
        "Directory access boundary"
      ],
      [
        "Tetap berada dalam uploads",
        "Stays within uploads"
      ],
      [
        "Keluar dari folder unggahan",
        "Escapes the uploads directory"
      ]
    ]
  },
  "config": {
    "title": [
      "Pisahkan respons publik dan log internal",
      "Separate public responses and internal logs"
    ],
    "caption": [
      "Pesan umum dan ID referensi membantu pengguna melaporkan error. Stack trace dan path internal dicatat pada log yang aksesnya dibatasi.",
      "A generic message and reference ID help users report errors. Stack traces and internal paths belong in restricted logs."
    ],
    "nodes": [
      [
        "gear",
        "Application error",
        "SQLSTATE | /srv/app/db.php"
      ],
      [
        "browser",
        "Public response",
        "Error | ref: ERR-104"
      ],
      [
        "file",
        "Internal log",
        "ERR-104 + stack trace"
      ]
    ],
    "edges": [
      [
        0,
        1,
        "redact details"
      ],
      [
        0,
        2,
        "restricted access"
      ]
    ],
    "notes": [
      [
        "Kesalahan terjadi di server",
        "An error occurs on the server"
      ],
      [
        "Tidak memaparkan detail internal",
        "Does not expose internal details"
      ],
      [
        "Detail tersedia untuk investigasi",
        "Details support investigation"
      ]
    ]
  },
  "state": {
    "title": [
      "Pengiriman memerlukan pembayaran",
      "Shipping requires payment"
    ],
    "caption": [
      "Server memeriksa status saat ini sebelum menerima transisi. Permintaan Kirim saat masih Keranjang harus ditolak, meskipun tombol dapat dimanipulasi.",
      "The server checks the current state before accepting a transition. Shipping from Cart must be denied even if buttons can be manipulated."
    ],
    "nodes": [
      [
        "cart",
        "Keranjang / Cart",
        "Not paid"
      ],
      [
        "lock",
        "Dibayar / Paid",
        "Payment verified"
      ],
      [
        "check",
        "Dikirim / Shipped",
        "Shipment accepted"
      ]
    ],
    "edges": [
      [
        0,
        1,
        "Pay -> 200"
      ],
      [
        1,
        2,
        "Ship -> 200"
      ],
      [
        0,
        2,
        "Skip payment -> 409"
      ]
    ],
    "notes": [
      [
        "Belum memenuhi syarat kirim",
        "Shipping precondition unmet"
      ],
      [
        "Status divalidasi server",
        "Server validates state"
      ],
      [
        "Urutan transaksi dipenuhi",
        "Transaction order respected"
      ]
    ]
  },
  "report": {
    "title": [
      "Hubungkan bukti, dampak, dan retest",
      "Connect evidence, impact, and retest"
    ],
    "caption": [
      "Temuan harus dapat direproduksi. Catat identitas akun, endpoint, respons, dampak, perbaikan, dan kondisi pembanding untuk retest.",
      "A finding must be reproducible. Record account identity, endpoint, response, impact, remediation, and retest controls."
    ],
    "nodes": [
      [
        "search",
        "Bukti / Evidence",
        "Andi -> order 105 -> 200"
      ],
      [
        "shield",
        "Perbaikan / Fix",
        "Check object ownership"
      ],
      [
        "check",
        "Retest",
        "105 -> 403 | 104 -> 200"
      ]
    ],
    "edges": [
      [
        0,
        1,
        "exposure -> fix"
      ],
      [
        1,
        2,
        "verify"
      ]
    ],
    "notes": [
      [
        "Dampak: pesanan Budi terbaca",
        "Impact: Budi's order is exposed"
      ],
      [
        "Terapkan pemeriksaan pada server",
        "Enforce the check on the server"
      ],
      [
        "Uji penolakan dan akses sah",
        "Test denial and legitimate access"
      ]
    ]
  }
};
const E=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
window.SCImoduleVisual=(key,lang='id')=>{const c=cases[key],p=x=>x[lang==='en'?1:0],uid='case-'+key;const labels={"Response":"Respons","Application error":"Kesalahan aplikasi","Public response":"Respons publik","Internal log":"Log internal","Query":"Query","Parameter":"Parameter","Database":"Basis data","Allowed directory":"Direktori yang diizinkan","Not paid":"Belum dibayar","Payment verified":"Pembayaran terverifikasi","Shipment accepted":"Pengiriman diterima","request":"permintaan","response":"respons","edit + forward":"ubah + teruskan","session active":"sesi aktif","session revoked":"sesi dicabut","owner = Andi":"pemilik = Andi","owner != Andi":"pemilik != Andi","SQL template":"pola query SQL","value binding":"pengikatan nilai","plain text":"teks biasa","HTML parsing":"pemrosesan HTML","inside -> 200":"di dalam -> 200","outside -> 403":"di luar -> 403","redact details":"sembunyikan rincian","restricted access":"akses terbatas","Pay -> 200":"Bayar -> 200","Ship -> 200":"Kirim -> 200","Skip payment -> 409":"Lewati pembayaran -> 409","exposure -> fix":"kebocoran -> perbaikan","verify":"verifikasi"};const labelText=x=>{if(x.includes(' / '))return x.split(' / ')[lang==='en'?1:0];return lang==='en'?x:(labels[x]||x)};const node=(n,i)=>{const x=35+i*350;return `<g transform="translate(${x} 135)"><rect width="300" height="195" rx="20" fill="var(--card)" stroke="var(--border)" stroke-width="2"/><circle cx="150" cy="51" r="33" fill="var(--surface)"/><svg x="121" y="22" width="58" height="58" viewBox="-36 -36 72 72" color="var(--red)">${window.SCIicon(n[0]).match(/<g[\s\S]*<\/g>/)[0]}</svg><text x="150" y="111" text-anchor="middle" fill="var(--ink)" font-size="21" font-weight="750">${E(labelText(n[1]))}</text><text x="150" y="151" text-anchor="middle" fill="var(--muted)" font-size="${n[2].length>27?16:19}" font-family="ui-monospace,Consolas,monospace">${E(labelText(n[2]))}</text></g><text x="${x+150}" y="370" text-anchor="middle" fill="var(--muted)" font-size="18">${E(p(c.notes[i]))}</text>`};return {title:p(c.title),caption:p(c.caption),svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1070 430" role="img" aria-labelledby="${uid}-title ${uid}-desc"><title id="${uid}-title">${E(p(c.title))}</title><desc id="${uid}-desc">${E(p(c.caption))}</desc><defs><marker id="${uid}-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 10 5 0 10Z" fill="var(--red)"/></marker></defs>${c.edges.map(([a,b,label],i)=>{const ax=185+a*350,bx=185+b*350,top=95-i*27;return `<path d="M${ax} 130V${top}H${bx}V130" fill="none" stroke="var(--red)" stroke-width="2.5" marker-end="url(#${uid}-arrow)"/><text x="${(ax+bx)/2}" y="${top-9}" text-anchor="middle" fill="var(--ink)" font-size="17">${E(labelText(label))}</text>`}).join('')}${c.nodes.map(node).join('')}</svg>`}};
})();
