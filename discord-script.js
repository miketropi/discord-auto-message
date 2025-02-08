#!/usr/bin/env osascript -l JavaScript

var messageList = [
  "gan len lvl roi ae oi, co len nao =]]]",
  "may ae lam quest the nao roi",
  "rang len nao",
  "len len len",
  "up up up lvl 20 thang? tien'",
  "hello, Dat nha, lvl may roi cau",
  "toi nay thoc cay trang dem hahaaa",
  "me' moi tay qua roi",
  "qua group nay ae soi dong vai~",
  "khong com nuoc gi` a` ae, =]]]",
  "deu tay, deu tay ae oiiii",
  "giu vung~ phong do nao`",
  "go~ chap, liet phim luon",
  "go~ lon cu' phap' ~rank, phai doi 1hr sau moi dc chek lai, vkl",
  "dau lung, moi tay lam roi ae", 
  "co ai o? Da Nang ko nhi",
  "AAAAAaaaaaaa, lvl up lvl up",
  "uoc mo len vang trong dem nay",
  "cay thoi cay` thoi ace oi",
  "gan` chay' may roi`"
];

function sendDiscordMessage() {
  var discord = Application("Discord");
  discord.activate();
  delay(5);
  var systemEvents = Application("System Events");
  systemEvents.keystroke("k", { using: ["command down"] });
  delay(1);
  systemEvents.keystroke("-vietnam");
  delay(1);
  systemEvents.keyCode(36);
  delay(2);
  var randomMessage = messageList[Math.floor(Math.random() * messageList.length)];
  systemEvents.keystroke(randomMessage);
  delay(1);
  systemEvents.keyCode(36);
}

while (true) {
  sendDiscordMessage();
  delay(60);
}
