/* BÀI B — VIẾT CODE: Lọc tin và đăng tin nhanh (news.html)
   Viết code theo đặc tả.
   Không sửa news.html, không sửa css; chỉ viết JavaScript trong file này. */

// ---------- ĐÃ CHO SẴN (không sửa) ----------
// Chặn việc gửi form tìm kiếm khi nhấn Enter, để trang không bị tải lại.
document.querySelector("#searchbar form").addEventListener("submit", (e) => e.preventDefault());

// ---------- PHẦN BẠN VIẾT ----------

const oTimKiem = document.getElementById("o-tim-kiem");
const dsList = document.getElementById("list");
const boDem = document.getElementById("bo-dem");
const khongThay = document.getElementById("khong-thay");
const oTieuDe = document.getElementById("tin-tieu-de");
const oNoiDung = document.getElementById("tin-noi-dung");
const nutDang = document.getElementById("nut-dang");
const baoLoi = document.getElementById("bao-loi");

// Hàm cập nhật bộ đếm và lọc tin
function locTin() {
	const tuKhoa = oTimKiem.value;
	const tuKhoaThuong = tuKhoa.toLowerCase();
	const cacMuc = dsList.querySelectorAll("li");
	let soHien = 0;
	const tongSo = cacMuc.length;

	cacMuc.forEach((muc) => {
		const h3 = muc.querySelector("h3");
		const p = muc.querySelector("p");
		const vanBan = (h3 ? h3.textContent : "") + " " + (p ? p.textContent : "");
		const khop = tuKhoa === "" || vanBan.toLowerCase().includes(tuKhoaThuong);

		if (khop) {
			muc.classList.remove("an");
			soHien++;
		} else {
			muc.classList.add("an");
		}
	});

	if (soHien === 0 && tongSo > 0) {
		khongThay.classList.remove("an");
		khongThay.textContent = `Không tìm thấy tin nào cho "${tuKhoa}"`;
	} else {
		khongThay.classList.add("an");
	}

	boDem.textContent = `Đang hiển thị ${soHien}/${tongSo} tin`;
}

// F1 + F2 + F3. Lọc tin khi gõ vào #o-tim-kiem (sự kiện keyup) và thông báo #khong-thay
oTimKiem.addEventListener("keyup", locTin);

// Cập nhật bộ đếm ban đầu ngay khi tải trang
locTin();

// F4. Nút "Read more >>" / "Thu gọn <<" — MỘT trình lắng nghe đặt trên #list
dsList.addEventListener("click", (e) => {
	if (!e.target.matches("button.more")) {
		return;
	}
	const muc = e.target.closest("li");
	if (!muc) return;
	const doan = muc.querySelector("p");
	if (!doan) return;

	if (doan.classList.contains("day-du")) {
		doan.classList.remove("day-du");
		e.target.textContent = "Read more >>";
	} else {
		doan.classList.add("day-du");
		e.target.textContent = "Thu gọn <<";
	}
});

// F5. Nút #nut-dang: kiểm tra dữ liệu, tạo <li> mới, chèn vào đầu #list
nutDang.addEventListener("click", () => {
	const tieuDe = oTieuDe.value.trim();
	const noiDung = oNoiDung.value.trim();

	if (tieuDe === "" || noiDung === "") {
		baoLoi.textContent = "Vui lòng nhập đủ tiêu đề và nội dung.";
		return;
	}

	const mucMoi = document.createElement("li");

	const theNgay = document.createElement("span");
	theNgay.className = "time";
	theNgay.textContent = typeof homNay === "function" ? homNay() : "";

	const theTieuDe = document.createElement("h3");
	theTieuDe.textContent = tieuDe;

	const theNoiDung = document.createElement("p");
	theNoiDung.textContent = noiDung;

	const nutMore = document.createElement("button");
	nutMore.type = "button";
	nutMore.className = "more";
	nutMore.textContent = "Read more >>";

	mucMoi.append(theNgay, theTieuDe, theNoiDung, nutMore);
	dsList.prepend(mucMoi);

	oTieuDe.value = "";
	oNoiDung.value = "";
	baoLoi.textContent = "";

	locTin();
});
