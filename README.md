## Auto send message to discord for MacOS

* Tạo một file mới ở desktop của `fen` với tên file là `discord-auto-send-message.js`
* Copy toàn bộ code trong file `discord-script.js` và paste vào file mới vừa tạo `discord-auto-send-message.js`
* Chạy script bằng cách chạy lệnh sau trong `terminal` bên dưới
* Muốn thoát thì ở `terminal` nhấn `Ctrl + C`

```shell
osascript -l JavaScript discord-auto-send-message.js
```

* Lưu ý: trước khi run nhớ chuyển keyboard về English (để tiếng Việt đang bị lỗi)

* Lưu ý: khi run `osascript -l JavaScript discord-auto-send-message.js` đường dẫn file `discord-auto-send-message.js` phải đúng, cách tốt nhất là bạn chỉ cần gõ `osascript -l JavaScript ` sau đó cầm file `discord-auto-send-message.js` kéo vào `terminal` sẽ tự động thêm đường dẫn file vào một cách chính xác.

* Lưu ý: ở Mac setting, security & privacy, Accessibility, nhớ enable `Terminal` để script có thể chạy được