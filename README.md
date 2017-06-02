# discourse-jalali
انجمن ساز دیسکورس با تقویم و تاریخ شمسی و زبان پارسی

## توجه
- این فارسی ساز با داکر هماهنگ نیست و باید به صورت مستقیم روی سیستم عامل اوبونتو نصب شود
- این مخزن برای افرادی است که در حال حاضر نسخه اصلی دیسکورس را نصب کرده‌اند و می‌خواهند زبان و تقویم پارسی را به آن اضافه کنند اگر می‌خواهید از پایه نسخه پارسی را نصب کنید از مخزن زیر استفاده کنید

[نسخه پارسی دیسکورس](https://github.com/l3est/discourse)

## نصب پارسی ساز روی نسخه اصلی دیسکورس برای توسعه دهندگان
ابتدا دیسکورس را طبق آموزش سایت سازنده نصب کنید، سپس کد زیر را در ترمینال اجرا کنید:

[آموزش نصب برای توسعه دهندگان](https://meta.discourse.org/t/beginners-guide-to-install-discourse-on-ubuntu-for-development/14727)
```
mkdir ~/discourse-jalali && git clone https://github.com/l3est/discourse-jalali.git ~/discourse-jalali
cp ~/discourse-jalali/app/assets/javascripts/discourse/components/date-picker.js.es6 ~/discourse/app/assets/javascripts/discourse/components/date-picker.js.es6
cp ~/discourse-jalali/app/assets/javascripts/discourse/helpers/period-title.js.es6 ~/discourse/app/assets/javascripts/discourse/helpers/period-title.js.es6
cp ~/discourse-jalali/app/assets/javascripts/discourse/lib/formatter.js.es6 ~/discourse/app/assets/javascripts/discourse/lib/formatter.js.es6
cp ~/discourse-jalali/app/assets/stylesheets/vendor/pikaday.scss ~/discourse/app/assets/stylesheets/vendor/pikaday.scss
cp ~/discourse-jalali/config/locales/client.fa_IR.yml ~/discourse/config/locales/client.fa_IR.yml
cp ~/discourse-jalali/config/locales/server.fa_IR.yml ~/discourse/config/locales/server.fa_IR.yml
cp ~/discourse-jalali/lib/javascripts/moment.js ~/discourse/lib/javascripts/moment.js
cp ~/discourse-jalali/public/javascripts/pikaday.js ~/discourse/public/javascripts/pikaday.js
cp ~/discourse-jalali/app/assets/javascripts/discourse/widgets/topic-timeline.js.es6 cp ~/discourse/app/assets/javascripts/discourse/widgets/topic-timeline.js.es6
cp ~/discourse-jalali/app/assets/javascripts/admin/controllers/admin-dashboard.js.es6 ~/discourse/app/assets/javascripts/admin/controllers/admin-dashboard.js.es6
rm -fr ~/discourse-jalali
```
