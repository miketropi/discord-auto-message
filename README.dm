## Auto send message to discord for MacOS

* Tạo một file mới ở desktop của fen với tên file là `discord-auto-send-message.js`
* Copy toàn bộ code trong file `discord-script.js` và paste vào file mới vừa tạo `discord-auto-send-message.js`
* Chạy script bằng cách chạy lệnh sau trong `terminal`
* Muốn thoát thì ở `terminal` nhấn `Ctrl + C`

```bash
osascript -l JavaScript discord-auto-send-message.js
```

* Lưu ý: ở Mac setting, security & privacy, Accessibility, nhớ enable `Terminal` để script có thể chạy được