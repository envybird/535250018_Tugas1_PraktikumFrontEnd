var emailDomain = 'HotMail';
switch (emailDomain) {
    case "GMail":
        alert("Anda menggunakan Google account.");
        break;
    case "YMail":
        alert("Anda menggunakan Yahoo account.");
        break;
    case "HotMail":
        alert("Anda menggunakan Hot Mail account.");
        break;
    default:
        alert("Kami tidak mengenal email provider Anda.");
}