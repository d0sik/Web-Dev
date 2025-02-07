function checkSpam(str) {
    if ((str.toLowerCase().indexOf("viagra") != -1) || (str.toLowerCase().indexOf("xxx") != -1)) return true;
    return false;
}
