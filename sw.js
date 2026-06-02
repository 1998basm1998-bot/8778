const CACHE_NAME = 'pwa-cache-v1';

// إضافة جميع المسارات المطلوبة للتخزين المؤقت بما في ذلك الصور المحلية
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-192x192.png',
  './icon-512x512.png'
];

// حدث التثبيت: حفظ الملفات في الذاكرة المخبئية
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// حدث الجلب: تقديم الملفات من الذاكرة المخبئية عند انقطاع الإنترنت
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // إرجاع الملف من الكاش إن وجد، وإلا جلبه من الشبكة
        return response || fetch(event.request);
      })
  );
});
