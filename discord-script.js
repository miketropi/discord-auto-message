#!/usr/bin/env osascript -l JavaScript

var messageList = [
  "rang co len nao ae oi 💪",
  "co gang het minh thoi 🔥",
  "mot ngay met moi qua di 😩",
  "dau mat qua ae oi 👀",
  "ngoi lau qua roi 🪑",
  "co gang them chut nua ✨",
  "met qua nhung van chien dau 💪",
  "dau tay qua troi oi 🤚",
  "nghi ngoi mot chut thoi 😴",
  "chuan bi nuoc uong da 🥤",
  "rang len nao anh em",
  "khong sao dau co gang len 🌟",
  "mot ngay dai qua di",
  "mat moi qua roi day 😫",
  "ngoi thang lung len nao 🧘",
  "uong nuoc giai khat di",
  "con chut nua thoi co len 💫",
  "dung bo cuoc nhe ae 💪",
  "chiu kho mot chut nua",
  "tap trung tap trung nao 🎯",
  "ngoi lau roi dung day di 🚶",
  "van dang chien dau day",
  "met moi nhung van vui 😊",
  "co gang roi se xong thoi",
  "dau vai roi phai khong 😖",
  "nghi ngoi mot lat nhe",
  "rang len ae oi 🔥",
  "con nhieu viec lam qua 📝",
  "dung bo cuoc nhe ban",
  "co gang them chut nua ⭐",
  "met qua roi phai khong 😩",
  "van con suc ma chien 💪",
  "dau lung qua phai khong",
  "ngoi thang lung len nhe 🪑",
  "co gang nao ae oi",
  "chiu kho mot chut nua 💫",
  "tap trung vao cong viec 🎯",
  "dung quen uong nuoc nhe 🥤",
  "con nhieu viec phai lam",
  "rang ma lam tiep thoi ✨",
  "met moi roi thi nghi 😴",
  "dung quen gian mat nhe 👀",
  "co gang roi se xong 🌟",
  "chiu kho mot chut ae",
  "tap trung vao cong viec 💻",
  "dung bo cuoc nhe ban 💪",
  "nghi ngoi mot chut di",
  "van con nhieu viec lam 📚",
  "co gang nao anh em ⚡",
  "met roi thi nghi chut 🛋️",
  "dung quen uong nuoc nha 🥤",
  "rang len nao ae oi 🔥",
  "con nhieu viec phai lam",
  "co gang them chut nua 💫",
  "tap trung vao cong viec",
  "dung bo cuoc nhe ban 💪",
  "nghi ngoi mot chut di 😴",
  "van con nhieu viec lam",
  "co gang nao anh em ✨",
  "met roi thi nghi chut",
  "dung quen uong nuoc nha 🥤",
  "rang len nao ae oi",
  "con nhieu viec phai lam 📝",
  "co gang them chut nua",
  "tap trung vao cong viec 🎯",
  "dung bo cuoc nhe ban",
  "nghi ngoi mot chut di 😌",
  "van con nhieu viec lam",
  "co gang nao anh em 💪",
  "met roi thi nghi chut",
  "dung quen uong nuoc nha 🥤",
  "rang len nao ae oi 🔥",
  "con nhieu viec phai lam",
  "co gang them chut nua ⭐",
  "tap trung vao cong viec",
  "dung bo cuoc nhe ban 💪",
  "nghi ngoi mot chut di",
  "van con nhieu viec lam 📚",
  "co gang nao anh em",
  "met roi thi nghi chut 😴",
  "dung quen uong nuoc nha"
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
