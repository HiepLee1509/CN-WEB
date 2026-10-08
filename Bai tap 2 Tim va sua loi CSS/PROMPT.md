# Prompt yêu cầu AI sửa lỗi CSS

Bạn là một lập trình viên front-end đang kiểm tra trang khuyến mãi Tết. Hãy phân tích hai file `trang.html` và `style-loi.css`, sau đó sửa trực tiếp **chỉ file CSS**, tuyệt đối không thay đổi HTML.

Kết quả cần đạt:

- Thanh menu dùng `position: sticky`, bám ở mép trên khi cuộn và luôn hiển thị phía trên ảnh hero.
- Ảnh hero phủ kín khung; nội dung hero nằm chính giữa ảnh.
- Ba thẻ sản phẩm nằm trên cùng một hàng ở kích thước màn hình desktop. Kích thước khai báo của mỗi thẻ phải bao gồm cả `padding` và `border`, không được làm thẻ thứ ba rớt hàng.
- Mỗi nhãn `-20%` nằm ở góc trên bên phải của chính thẻ chứa nó và phải hiển thị phía trên ảnh thẻ.
- Ảnh và nội dung phải nằm gọn trong thẻ.
- Nút `↑` luôn cố định ở góc dưới bên phải màn hình khi cuộn.

Chỉ sửa những lỗi thực sự gây sai bố cục. Hãy giữ nguyên các đoạn đang đúng và có chủ ý, gồm: hiệu ứng phóng ảnh hero bằng `transform: scale(1.08)`, phần sản phẩm chồng nhẹ lên hero bằng `margin` âm và `z-index`, `position: relative; z-index: 2` của ảnh thẻ, cùng nút lên đầu trang hiện có. Lưu ý rằng một phần tử tổ tiên có `overflow` tạo vùng cuộn có thể làm `position: sticky` không bám theo cửa sổ; hãy dùng cách cắt phần tràn ngang mà không tạo vùng cuộn mới.

Sau khi sửa, hãy liệt kê ngắn gọn từng lỗi, nguyên nhân và thuộc tính CSS đã thay đổi.
