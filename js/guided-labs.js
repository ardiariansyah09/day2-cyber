'use strict';
/* Eleven purpose-built guided activities. All actions operate on synthetic local data. */
(()=>{
const E=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const T=(id,en,lang)=>lang==='en'?en:id;
const label=(name,control)=>`<label class="guided-field"><span>${name}</span>${control}</label>`;
const input=(id,value,placeholder='')=>`<input data-lab="${id}" value="${E(value)}" placeholder="${E(placeholder)}" spellcheck="false" autocomplete="off">`;
const area=(id,value)=>`<textarea data-lab="${id}" spellcheck="false" rows="3">${E(value)}</textarea>`;
const sel=(id,items)=>`<select data-lab="${id}">${items.map(([v,t])=>`<option value="${E(v)}">${E(t)}</option>`).join('')}</select>`;
const uiTexts={
  "HTTP method": [
    "Metode HTTP",
    "HTTP method"
  ],
  "JSON body (untuk POST)": [
    "Isi JSON (untuk POST)",
    "JSON body (for POST)"
  ],
  "GET — baca": [
    "GET — baca",
    "GET — read"
  ],
  "POST — buat": [
    "POST — buat",
    "POST — create"
  ],
  "DELETE — hapus": [
    "DELETE — hapus",
    "DELETE — delete"
  ],
  "Fitur / Feature": [
    "Fitur",
    "Feature"
  ],
  "Pencarian produk": [
    "Pencarian produk",
    "Product search"
  ],
  "Detail produk": [
    "Detail produk",
    "Product details"
  ],
  "Profil akun": [
    "Profil akun",
    "Account profile"
  ],
  "Metode": [
    "Metode",
    "Method"
  ],
  "Path tanpa query": [
    "Path tanpa query",
    "Path without query"
  ],
  "Parameter (atau -)": [
    "Parameter (atau -)",
    "Parameter (or -)"
  ],
  "Request body (JSON)": [
    "Isi permintaan (JSON)",
    "Request body (JSON)"
  ],
  "Katalog server: KB01 = Rp75.000 per unit": [
    "Katalog server: KB01 = Rp75.000 per unit",
    "Server catalog: KB01 = IDR 75,000 per unit"
  ],
  "DemoStore · Network log": [
    "DemoStore · Log jaringan",
    "DemoStore · Network log"
  ],
  "1. Login": [
    "1. Login",
    "1. Log in"
  ],
  "2. Profil": [
    "2. Profil",
    "2. Profile"
  ],
  "3. Logout": [
    "3. Logout",
    "3. Log out"
  ],
  "4. Uji token lama": [
    "4. Uji token lama",
    "4. Test old token"
  ],
  "Belum login / Not signed in": [
    "Belum login",
    "Not signed in"
  ],
  "Akun": [
    "Akun",
    "Account"
  ],
  "ID pesanan": [
    "ID pesanan",
    "Order ID"
  ],
  "Periksa pemilik di server": [
    "Periksa pemilik di server",
    "Check ownership on the server"
  ],
  "Aktif / Enabled": [
    "Aktif",
    "Enabled"
  ],
  "Nonaktif / Disabled": [
    "Nonaktif",
    "Disabled"
  ],
  "Query SQL": [
    "Query SQL",
    "SQL query"
  ],
  "Parameter terikat": [
    "Parameter terikat",
    "Bound parameters"
  ],
  "Komentar": [
    "Komentar",
    "Comment"
  ],
  "Cara render": [
    "Cara menampilkan komentar",
    "Rendering method"
  ],
  "textContent (teks)": [
    "textContent (teks)",
    "textContent (text)"
  ],
  "Nama file": [
    "Nama file",
    "File name"
  ],
  "Direktori yang diizinkan: /app/uploads/": [
    "Direktori yang diizinkan: /app/uploads/",
    "Allowed directory: /app/uploads/"
  ],
  "Respons tidak aman:": [
    "Respons tidak aman:",
    "Unsafe response:"
  ],
  "Respons pengganti untuk pengguna": [
    "Respons pengganti untuk pengguna",
    "Replacement public response"
  ],
  "Terjadi kesalahan": [
    "Terjadi kesalahan",
    "An error occurred"
  ],
  "Status saat ini: Keranjang": [
    "Status saat ini: Keranjang",
    "Current state: Cart"
  ],
  "Bayar / Pay": [
    "Bayar",
    "Pay"
  ],
  "Kirim / Ship": [
    "Kirim",
    "Ship"
  ],
  "Refund": [
    "Pengembalian dana",
    "Refund"
  ],
  "Mulai ulang / Reset": [
    "Mulai ulang",
    "Reset"
  ],
  "Pilih tindakan untuk melihat keputusan server.": [
    "Pilih tindakan untuk melihat keputusan server.",
    "Choose an action to inspect the server decision."
  ],
  "Endpoint dan bukti": [
    "Endpoint dan bukti",
    "Endpoint and evidence"
  ],
  "Dampak": [
    "Dampak",
    "Impact"
  ],
  "Rekomendasi": [
    "Rekomendasi",
    "Recommendation"
  ],
  "Rencana retest": [
    "Rencana pengujian ulang",
    "Retest plan"
  ],
  "GET /api/orders/105 sebagai Andi → 200 OK": [
    "GET /api/orders/105 sebagai Andi → 200 OK",
    "GET /api/orders/105 as Andi → 200 OK"
  ],
  "Inventaris tepat": [
    "Inventaris sesuai",
    "Correct inventory"
  ],
  "Periksa kembali traffic": [
    "Periksa kembali lalu lintas HTTP",
    "Review the HTTP traffic"
  ],
  "200 OK · total dihitung server": [
    "200 OK · total dihitung server",
    "200 OK · server-calculated total"
  ],
  "Perbaikan benar": [
    "Perbaikan sesuai",
    "Correct repair"
  ],
  "Masih perlu diperbaiki": [
    "Masih perlu diperbaiki",
    "Repair still required"
  ],
  "Teks ditampilkan aman": [
    "Teks ditampilkan dengan aman",
    "Text displayed safely"
  ],
  "Markup diinterpretasikan (simulasi)": [
    "Markup ditafsirkan (simulasi)",
    "Markup interpreted (simulation)"
  ],
  "Respons publik aman": [
    "Respons publik aman",
    "Safe public response"
  ],
  "Masih membocorkan informasi": [
    "Masih membocorkan informasi",
    "Information is still exposed"
  ],
  "Laporan belum lengkap": [
    "Laporan belum lengkap",
    "Report incomplete"
  ],
  "Draf laporan lengkap": [
    "Draf laporan lengkap",
    "Report draft complete"
  ],
  "200 OK (sesi masih aktif)": [
    "200 OK (sesi masih aktif)",
    "200 OK (session still active)"
  ],
  "200 OK · transisi diterima": [
    "200 OK · perubahan status diterima",
    "200 OK · transition accepted"
  ],
  "409 Conflict · transisi ditolak": [
    "409 Conflict · perubahan status ditolak",
    "409 Conflict · transition denied"
  ],
  "Keranjang": [
    "Keranjang",
    "Cart"
  ],
  "Dibayar": [
    "Dibayar",
    "Paid"
  ],
  "Dikirim": [
    "Dikirim",
    "Shipped"
  ],
  "Dikembalikan": [
    "Dikembalikan",
    "Refunded"
  ],
  "Mulai dari Keranjang.": [
    "Mulai dari Keranjang.",
    "Start from Cart."
  ]
};
const L=(text,lang)=>{const value=String(text??'');if(uiTexts[value])return uiTexts[value][lang==='en'?1:0];if(lang==='en')return value.replace(/^Status saat ini: (.*)$/,(_,state)=>'Current state: '+L(state,lang)).replace(/sesi dicabut/g,'session revoked');return value};
const fieldHTML=(html,lang)=>html.replace(/>([^<>]*)</g,(_,text)=>'>'+L(text,lang).replace(lang==='en'?'Terjadi kesalahan':'__unused__',lang==='en'?'An error occurred':'__unused__')+'<');
const labs={
http:{name:['Susun permintaan HTTP dan baca respons','Build a request and inspect the response'],intro:['Ubah metode, alamat endpoint, dan isi data. Perhatikan bahwa status HTTP bergantung pada metode, resource, dan izin.','Edit the method, endpoint and payload. Status depends on method, resource and permission.'],step:['1. Coba GET /api/orders/12. 2. Coba POST /api/orders dengan nama produk. 3. Coba DELETE pada pesanan yang sama.','1. Try GET /api/orders/12. 2. Try POST /api/orders with a product. 3. Try DELETE.'],fields:l=>label('HTTP method',sel('method',[['GET','GET — baca'],['POST','POST — buat'],['DELETE','DELETE — hapus']]))+label('Endpoint',input('path','/api/orders/12'))+label('JSON body (untuk POST)',area('body','{"product":"Mouse","qty":1}')),run:v=>{let method=v.method,path=v.path.trim(),body; if(!/^\/api\/orders(?:\/\d+)?$/.test(path))return fail('404 Not Found','Endpoint contoh hanya /api/orders atau /api/orders/12.','Only /api/orders or /api/orders/12 exists in this demo.');if(method==='GET')return path==='/api/orders/12'?pass('200 OK','{"id":12,"owner":"andi","product":"Keyboard"}','GET membaca data pesanan yang sudah ada. Server mengirim 200 OK.','GET reads an existing order and returns 200 OK.'):fail('405 Method Not Allowed','Gunakan GET pada /api/orders/12 untuk melihat satu pesanan.','Use GET /api/orders/12 to read one order.');if(method==='POST'){if(path!=='/api/orders')return fail('405 Method Not Allowed','POST untuk membuat pesanan menggunakan /api/orders.','POST /api/orders creates an order.');try{body=JSON.parse(v.body)}catch{return fail('400 Bad Request','JSON tidak valid. Contoh: {"product":"Mouse","qty":1}','Invalid JSON. Example: {"product":"Mouse","qty":1}')};return typeof body.product==='string'&&Number.isInteger(body.qty)&&body.qty>0?pass('201 Created',JSON.stringify({id:13,...body}),'201 Created berarti server membuat resource baru.','201 Created means a new resource was created.'):fail('422 Unprocessable Content','Isi product harus teks dan qty harus bilangan bulat positif.','product must be text and qty must be a positive integer.')}return fail('403 Forbidden','Akun latihan boleh membaca dan membuat, tetapi tidak memiliki izin menghapus. DELETE tidak selalu ditolak dalam aplikasi nyata.','The demo account can read/create but not delete. DELETE is not always forbidden.') }},
map:{name:['Susun daftar endpoint','Build an endpoint inventory'],intro:['Amati fitur aplikasi contoh, lalu isi metode, path, dan parameter yang Anda temukan.','Explore a mock application and record method, path, and parameter.'],step:['1. Pilih fitur. 2. Amati contoh traffic. 3. Isi inventaris. 4. Periksa hasil.','1. Select a feature. 2. Inspect traffic. 3. Complete the inventory. 4. Check it.'],fields:l=>`<div class="mock-site"><b>DemoStore · Network log</b><p id="reconTrace">GET /api/search?q=mouse</p></div>`+label('Fitur / Feature',sel('feature',[['search','Pencarian produk'],['detail','Detail produk'],['profile','Profil akun']]))+label('Metode',input('method','GET'))+label('Path tanpa query',input('path','/api/search'))+label('Parameter (atau -)',input('param','q')),run:v=>{const a={search:['GET','/api/search','q'],detail:['GET','/api/products/42','-'],profile:['GET','/api/me','-']}[v.feature];return [v.method.trim().toUpperCase(),v.path.trim(),v.param.trim()].every((x,i)=>x===a[i])?pass('Inventaris tepat',a.join(' · '),'Anda berhasil mengidentifikasi entry point. Endpoint yang ditemukan belum tentu rentan.','You identified an entry point; discovery alone is not a vulnerability.'):fail('Periksa kembali traffic',`Jawaban untuk fitur ini: ${a.join(' · ')}. Cocokkan path dan parameter.`,`Expected: ${a.join(' · ')}. Check the path and parameter.`)}},
proxy:{name:['Tangkap dan ubah request checkout','Intercept and edit a checkout request'],intro:['Request browser dapat diubah. Server harus menghitung ulang total dari harga katalog.','Browser requests can be modified. The server must recalculate the total.'],step:['1. Ubah clientTotal menjadi 1000. 2. Jalankan. 3. Bandingkan total browser dan server.','1. Change clientTotal to 1000. 2. Run. 3. Compare browser and server totals.'],fields:l=>label('Request body (JSON)',area('body','{"sku":"KB01","qty":2,"clientTotal":150000}'))+`<div class="mock-site">Katalog server: KB01 = Rp75.000 per unit</div>`,run:v=>{let b;try{b=JSON.parse(v.body)}catch{return fail('400 Bad Request','Periksa format JSON.','Check JSON syntax.')};if(b.sku!=='KB01'||!Number.isInteger(b.qty)||b.qty<1)return fail('422 Unprocessable Content','Gunakan sku KB01 dan qty bilangan bulat positif.','Use KB01 and a positive integer quantity.');let total=b.qty*75000;return pass('200 OK · total dihitung server',JSON.stringify({clientTotal:b.clientTotal,serverTotal:total,changed:b.clientTotal!==total}),b.clientTotal!==total?'Anda mengubah harga di request, tetapi server tetap menggunakan harga katalog.':'Nilai dari browser sesuai dengan total server. Ubah clientTotal untuk melihat perlindungannya.',b.clientTotal!==total?'The browser total was modified, but the server used its catalog price.':'Try changing clientTotal to see the protection.') }},
auth:{name:['Uji siklus hidup sesi','Test the session lifecycle'],intro:['Jalankan login, akses profil, logout, lalu coba token lama.','Log in, access a profile, log out, then retry the old token.'],step:['1. Klik Login. 2. Akses profil. 3. Logout. 4. Akses lagi dengan token lama.','1. Log in. 2. Access profile. 3. Log out. 4. Retry the old token.'],fields:l=>`<div class="guided-steps" id="sessionActions"><button type="button" data-session="login">1. Login</button><button type="button" data-session="profile">2. Profil</button><button type="button" data-session="logout">3. Logout</button><button type="button" data-session="retry">4. Uji token lama</button></div><div id="sessionLog" class="mock-site">Belum login / Not signed in</div>`,custom:true},
authz:{name:['Uji IDOR dengan dua akun','Test IDOR with two accounts'],intro:['Masukkan ID pesanan milik akun lain. Bandingkan keputusan server aman dan server rentan.','Request another user’s order and compare secure vs vulnerable behavior.'],step:['1. Pilih akun Andi dan pesanan 105. 2. Uji dengan pemeriksaan pemilik aktif. 3. Nonaktifkan dan bandingkan. 4. Aktifkan kembali.','1. Select Andi and order 105. 2. Test with ownership checks enabled. 3. Disable and compare. 4. Enable again.'],fields:l=>label('Akun',sel('user',[['andi','Andi'],['budi','Budi']]))+label('ID pesanan',input('order','105'))+label('Periksa pemilik di server',sel('guard',[['on','Aktif / Enabled'],['off','Nonaktif / Disabled']])),run:v=>{const owner={'104':'andi','105':'budi'}[v.order];if(!owner)return fail('404 Not Found','Pesanan contoh hanya 104 dan 105.','Demo orders are 104 and 105.');const allow=v.guard==='off'||owner===v.user;return {ok:v.guard==='on',status:allow?'200 OK':'403 Forbidden',trace:allow?JSON.stringify({order:v.order,owner}):'{"error":"Forbidden"}',id:v.guard==='off'&&owner!==v.user?'TEMUAN: server rentan mengembalikan data akun lain. Aktifkan pemeriksaan pemilik.':allow?'Pengguna memiliki pesanan tersebut.':'Server menolak akses ke pesanan milik pengguna lain.',en:v.guard==='off'&&owner!==v.user?'FINDING: another user’s data was exposed. Enforce ownership checks.':allow?'The user owns this order.':'The server rejects access to another user’s order.'}}},
sql:{name:['Perbaiki kode query SQL','Repair the SQL query'],intro:['Edit kode agar input pengguna tidak digabung ke sintaks SQL. Tidak ada SQL yang dieksekusi.','Edit the code so user input is not concatenated into SQL syntax. No SQL is executed.'],step:['1. Amati kode rentan. 2. Ganti dengan placeholder ?. 3. Tambahkan parameter. 4. Periksa.','1. Inspect vulnerable code. 2. Use a ? placeholder. 3. Bind the parameter. 4. Check.'],fields:l=>label('Query SQL',area('query',"SELECT * FROM users WHERE username = '"+'" + userInput + "'+"'"))+label('Parameter terikat',input('params','')),run:v=>{const q=v.query.trim(),params=v.params.trim();return /username\s*=\s*\?/i.test(q)&&!/(\+|\$\{|userInput)/i.test(q)&&/userInput/i.test(params)?pass('Perbaikan benar','SELECT * FROM users WHERE username = ?\nparams = [userInput]','Placeholder memastikan input menjadi nilai, bukan bagian dari sintaks SQL.','The placeholder keeps input as data, not SQL syntax.'):fail('Masih perlu diperbaiki','Gunakan: SELECT * FROM users WHERE username = ? dan params = [userInput].','Use SELECT * FROM users WHERE username = ? and params = [userInput].')}},
browser:{name:['Uji cara menampilkan komentar','Test comment rendering'],intro:['Tulis komentar berisi tag HTML. Bandingkan tampilan teks biasa dan hasil penafsiran HTML.','Enter HTML markup and compare text rendering with a simulated HTML interpretation.'],step:['1. Tulis <b>Halo</b>. 2. Coba textContent. 3. Coba innerHTML. 4. Jelaskan risikonya.','1. Enter <b>Hello</b>. 2. Try textContent. 3. Try innerHTML. 4. Explain the risk.'],fields:l=>label('Komentar',area('comment','<b>Halo</b>'))+label('Cara render',sel('sink',[['textContent','textContent (teks)'],['innerHTML','innerHTML (HTML)']])),run:v=>({ok:v.sink==='textContent',status:v.sink==='textContent'?'Teks ditampilkan aman':'Markup diinterpretasikan (simulasi)',trace:v.sink==='textContent'?v.comment:v.comment.replace(/<[^>]*>/g,''),id:v.sink==='textContent'?'Tag HTML tampil sebagai teks biasa.':'innerHTML menafsirkan markup. Simulasi ini tidak mengeksekusi skrip. Gunakan textContent untuk komentar biasa.',en:v.sink==='textContent'?'HTML tags display as plain text.':'innerHTML interprets markup. This demo never executes scripts. Use textContent for comments.'})},
file:{name:['Uji pembatasan path file','Test file path boundaries'],intro:['Masukkan nama file dan lihat hasil normalisasi path sebelum akses diberikan.','Enter a filename and inspect normalized path before access.'],step:['1. Coba avatar.png. 2. Coba ../config/settings.json. 3. Bandingkan penolakan akses.','1. Try avatar.png. 2. Try ../config/settings.json. 3. Compare access decisions.'],fields:l=>label('Nama file',input('path','avatar.png'))+`<div class="mock-site">Direktori yang diizinkan: /app/uploads/</div>`,run:v=>{const segments=['app','uploads'];for(const part of v.path.replaceAll('\\','/').split('/')){if(part==='..')segments.pop();else if(part&&part!=='.')segments.push(part)}const resolved='/'+segments.join('/'),inside=resolved.startsWith('/app/uploads/');return inside?pass('200 OK',resolved,'File berada di direktori unggahan. Pemeriksaan izin file tetap diperlukan.','The file is inside the uploads directory. File permissions still matter.'):fail('403 Forbidden',resolved,'Path keluar dari direktori yang diizinkan. Server harus menolak akses.','The path escapes the allowed directory; the server must reject it.')}},
config:{name:['Periksa pesan kesalahan aplikasi','Audit application error output'],intro:['Tempel respons error contoh dan identifikasi informasi internal yang bocor.','Paste a sample error response and identify leaked internal details.'],step:['1. Amati stack trace. 2. Tulis respons publik yang aman. 3. Periksa hasil.','1. Inspect the stack trace. 2. Write a safe public response. 3. Check it.'],fields:l=>`<div class="mock-site"><b>Respons tidak aman:</b><pre>HTTP 500\nSQLSTATE: connection failed\n/srv/app/db.php:42</pre></div>`+label('Respons pengganti untuk pengguna',area('response','{"message":"Terjadi kesalahan","reference":"ERR-104"}')),run:v=>{const s=v.response;return !/(sqlstate|\/srv\/|stack trace|db\.php)/i.test(s)&&s.trim().length>10?pass('Respons publik aman',s,'Detail teknis seharusnya dicatat pada log internal, bukan dikirim ke pengguna.','Technical details belong in internal logs, not public responses.'):fail('Masih membocorkan informasi',s,'Hapus path internal, query SQL, dan stack trace. Gunakan pesan umum serta ID referensi.','Remove internal paths, SQL errors and stack traces. Use a generic message and reference ID.')}},
state:{name:['Susun alur transaksi yang valid','Build a valid transaction workflow'],intro:['Rancang urutan status pesanan dan uji apakah tindakan boleh dijalankan.','Arrange order states and check whether a transition is allowed.'],step:['1. Mulai dari Keranjang. 2. Pilih Bayar. 3. Lanjutkan Kirim. 4. Coba Kirim sebelum Bayar.','1. Start at Cart. 2. Pay. 3. Ship. 4. Try shipping before payment.'],fields:l=>`<div id="stateBoard" class="mock-site">Status saat ini: Keranjang</div><div class="guided-steps"><button type="button" data-state="pay">Bayar / Pay</button><button type="button" data-state="ship">Kirim / Ship</button><button type="button" data-state="refund">Refund</button><button type="button" data-state="reset">Mulai ulang / Reset</button></div><div id="stateLog" class="mock-site">Pilih tindakan untuk melihat keputusan server.</div>`,custom:true},
report:{name:['Susun laporan temuan WSTG','Compose a WSTG finding'],intro:['Isi bukti, dampak, perbaikan, dan retest. Periksa kelengkapan laporan.','Fill in evidence, impact, remediation and retest. Check report completeness.'],step:['1. Isi endpoint dan bukti. 2. Jelaskan dampak. 3. Usulkan perbaikan. 4. Tentukan retest.','1. Record endpoint and evidence. 2. Explain impact. 3. Recommend a fix. 4. Plan a retest.'],fields:l=>label('Endpoint dan bukti',area('evidence','GET /api/orders/105 sebagai Andi → 200 OK'))+label('Dampak',area('impact',''))+label('Rekomendasi',area('fix',''))+label('Rencana retest',area('retest','')),run:(v,lang)=>{const missing=['evidence','impact','fix','retest'].filter(k=>v[k].trim().length<15);return missing.length?fail('Laporan belum lengkap',`Lengkapi bagian: ${missing.map(k=>({evidence:lang==='en'?'evidence':'bukti',impact:lang==='en'?'impact':'dampak',fix:lang==='en'?'recommendation':'rekomendasi',retest:lang==='en'?'retest plan':'rencana pengujian ulang'}[k])).join(', ')}. Minimal jelaskan dengan kalimat yang dapat diuji ulang.`,`Complete: ${missing.join(', ')}. Include reproducible detail.`):pass('Draf laporan lengkap',`${lang==='en'?'Evidence':'Bukti'}: ${v.evidence}\n${lang==='en'?'Impact':'Dampak'}: ${v.impact}\n${lang==='en'?'Remediation':'Perbaikan'}: ${v.fix}\n${lang==='en'?'Retest':'Pengujian ulang'}: ${v.retest}`,'Periksa kembali akurasi bukti dan pastikan data sensitif dianonimkan.','Verify evidence accuracy and redact sensitive data.')} }
};
function pass(status,trace,id,en){return {ok:true,status,trace,id,en}}
function fail(status,trace,id,en){if(en===undefined)return {ok:false,status,trace:'',id:trace,en:id};return {ok:false,status,trace,id,en}}
const trialHTML=(key,index,lang)=>{const en=lang==='en',p=x=>x[+en],t=window.SCIpracticeTrials[key][index];return `<h3 class="trial-title">${en?'Attempt':'Percobaan'} ${index+1}</h3><ol class="trial-steps">${t.steps.map(x=>`<li>${E(p(x))}</li>`).join('')}</ol><div class="trial-expected"><b>${en?'Expected result':'Hasil yang diharapkan'}</b><p>${E(p(t.expected))}</p></div>`};
window.SCIguidedHTML=(key,lang)=>{const l=labs[key],en=lang==='en';if(!l)return '<p>Lab not found.</p>';return `<div class="guided-lab" data-guided="${key}"><div class="guided-instruction"><strong>${en?'Your mission':'Misi Anda'}</strong><p>${E(l.intro[+en])}</p><p class="trial-sequence">${en?'Work through the attempts in order. Select a number to read its instructions.':'Kerjakan percobaan secara berurutan. Pilih nomor untuk membaca instruksinya.'}</p><div class="trial-tabs" role="group" aria-label="${en?'Practice attempts':'Percobaan praktik'}">${window.SCIpracticeTrials[key].map((_,i)=>`<button type="button" data-trial="${i}" aria-pressed="${i===0}">${en?'Attempt':'Percobaan'} ${i+1}</button>`).join('')}</div><div id="trialInstructions">${trialHTML(key,0,lang)}</div></div><div class="guided-fields">${fieldHTML(l.fields(lang),lang)}</div>${l.custom?'':`<div class="guided-actions"><button type="button" class="primary" id="guidedRun">${en?'Check / Execute':'Periksa / Jalankan'}</button><button type="button" id="guidedReset">${en?'Reset':'Ulangi'}</button></div>`}<div id="guidedResult" class="guided-result" aria-live="polite">${en?'Follow the steps and try the activity.':'Ikuti langkah, lalu coba aktivitasnya.'}</div></div>`};
window.SCIbindGuided=(key,lang,fit)=>{const lab=labs[key],en=lang==='en',root=document.querySelector('[data-guided]'),result=document.getElementById('guidedResult');if(!root)return;root.querySelectorAll('[data-trial]').forEach(b=>b.onclick=()=>{root.querySelectorAll('[data-trial]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));document.getElementById('trialInstructions').innerHTML=trialHTML(key,+b.dataset.trial,lang);fit?.()});const show=r=>{result.className='guided-result '+(r.ok?'guided-ok':'guided-issue');result.innerHTML=`<strong>${E(L(r.status,lang))}</strong>${r.trace?`<pre>${E(L(r.trace,lang))}</pre>`:''}<p>${E(en?r.en:r.id)}</p>`;fit?.()};if(key==='auth'){let logged=false,revoked=false;const log=document.getElementById('sessionLog');root.querySelectorAll('[data-session]').forEach(b=>b.onclick=()=>{let a=b.dataset.session;if(a==='login'){logged=true;revoked=false;log.textContent='POST /login → 200 OK · session=demo-123';}if(a==='profile')log.textContent=logged&&!revoked?'GET /api/me → 200 OK · Andi':'GET /api/me → 401 Unauthorized';if(a==='logout'){revoked=true;log.textContent=L('POST /logout → 204 No Content · sesi dicabut',lang);}if(a==='retry'){if(!logged){show(fail('401 Unauthorized','GET /api/me','Belum ada sesi aktif. Klik Login untuk memulai pengujian.','No active session. Click Login to begin.'));return}show(revoked?pass('401 Unauthorized','GET /api/me · session=demo-123','Token lama ditolak karena sesi dicabut di server.','Old token rejected after server-side revocation.'):fail('200 OK (sesi masih aktif)','GET /api/me · session=demo-123','Logout belum dilakukan; token masih berlaku.','You have not logged out yet; the token is still active.'))}fit?.()});return}if(key==='state'){let state='Keranjang';const board=document.getElementById('stateBoard');root.querySelectorAll('[data-state]').forEach(b=>b.onclick=()=>{const a=b.dataset.state;if(a==='reset'){state='Keranjang';board.textContent=L('Status saat ini: '+state,lang);result.textContent=L('Mulai dari Keranjang.',lang);result.className='guided-result';return}const transitions={Keranjang:{pay:'Dibayar'},Dibayar:{ship:'Dikirim',refund:'Dikembalikan'}};let next=transitions[state]?.[a];if(next){state=next;board.textContent=L('Status saat ini: '+state,lang);show(pass('200 OK · transisi diterima',state,'Server menerima transisi yang sesuai urutan.','The server accepts the valid transition.'))}else show(fail('409 Conflict · transisi ditolak',state,'Tindakan ini tidak sesuai status saat ini. Server tidak boleh melewati aturan bisnis.','The action is invalid for this state; the server must enforce workflow rules.'))});return}const run=()=>{const v={};root.querySelectorAll('[data-lab]').forEach(el=>v[el.dataset.lab]=el.value);show(lab.run(v,lang))};document.getElementById('guidedRun').onclick=run;document.getElementById('guidedReset').onclick=()=>{root.querySelectorAll('[data-lab]').forEach(el=>{if(el.tagName==='SELECT')el.selectedIndex=0;else el.value=el.defaultValue});result.className='guided-result';result.textContent=en?'Follow the steps and try the activity.':'Ikuti langkah, lalu coba aktivitasnya.';if(key==='map')document.getElementById('reconTrace').textContent='GET /api/search?q=mouse';fit?.()};if(key==='map'){const feature=root.querySelector('[data-lab="feature"]'),trace=document.getElementById('reconTrace');feature.onchange=()=>{trace.textContent={search:'GET /api/search?q=mouse',detail:'GET /api/products/42',profile:'GET /api/me · Cookie: session=demo'}[feature.value]}}};
window.SCIguidedNames=labs;
})();
