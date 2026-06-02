// الاستماع إلى حدث الإرسال في النموذج
document.getElementById('loginForm').addEventListener('submit', function(event) {
    // منع السلوك الافتراضي (إعادة تحميل الصفحة)
    event.preventDefault(); 

    // جلب القيمة التي أدخلها المستخدم
    const username = document.getElementById('username').value;
    const messageElement = document.getElementById('message');

    // إظهار رسالة تفاعلية
    if (username) {
        messageElement.textContent = 'جاري التحقق... أهلاً بك يا ' + username + '!';
        messageElement.style.color = '#e0f7fa';
        
        // يمكنك لاحقاً ربط هذا الجزء بقاعدة البيانات (API)
    }
});
